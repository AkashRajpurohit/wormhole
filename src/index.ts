// Set the variables in the wrangler.toml file
export interface Env {
	DOMAIN: string;
	FALLBACK_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// Pre validations for env variables to avoid runtime errors
		if (!env.DOMAIN || !env.FALLBACK_URL) {
			return new Response('DOMAIN or FALLBACK_URL environment variable is missing', {
				status: 500
			});
		}

		// Extract the path from the request URL
		// this will be the query that the user searched for
		const url = new URL(request.url);
		const query = url.pathname.substring(1); // Remove the leading slash

		if (!query) {
			// Redirect to the fallback URL
			return Response.redirect(env.FALLBACK_URL, 302);
		}

		// Redirect using DuckDuckGo's bang syntax
		const redirectUrl = `https://duckduckgo.com/?q=%21%20${encodeURIComponent(`site:${env.DOMAIN} `) + query}`

		return Response.redirect(redirectUrl, 302);
	},
};
