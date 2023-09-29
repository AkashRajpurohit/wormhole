// Set the variables in the wrangler.toml file
export interface Env {
	DOMAIN: string;
	FALLBACK_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response('Hello World!');
	},
};
