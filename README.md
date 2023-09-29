<br />
<p align="center">
  <a href="https://github.com/AkashRajpurohit/wormhole">
    <img src="https://media.tenor.com/jsZS2xXzGFQAAAAd/abdelkrimfat-tst.gif" alt="Wormhole" width="120" height="213" />
  </a>

  <h3 align="center">Wormhole</h3>

  <p align="center">
    <samp>Quickly transport yourself to the right URL</samp>
    <br />
    <br />
    <a href="https://github.com/AkashRajpurohit/wormhole/issues/new?template=bug_report.md">Bug report</a>
    ·
    <a href="https://github.com/AkashRajpurohit/wormhole/issues/new?template=feature_request.md">Feature request</a>
		<br />
		<br />
		<a href="https://workers.cloudflare.com/">
    	<img alt="Deployed via Cloudflare Workers" src="https://img.shields.io/badge/Deployed%20via-Cloudflare%20Workers-%23FAAD3F" />
  	</a>
		<img alt="Visitors count" src="https://visitor-badge.laobi.icu/badge?page_id=@akashrajpurohit~wormhole.visitor-badge&style=flat-square&color=0088cc" />
		<a href="https://twitter.com/akashwhocodes">
    	<img alt="follow on twitter" src="https://img.shields.io/twitter/follow/akashwhocodes.svg?style=social&label=@akashwhocodes" />
  	</a>
		<a href="https://github.com/AkashRajpurohit/wormhole">
			<img alt="GitHub" src="https://img.shields.io/github/license/AkashRajpurohit/wormhole" />
		</a>
  </p>
</p>

Wormhole is a URL redirection service that allows you to quickly share short, memorable links with others without worrying about configuring a go-url service.

My purpose of using this along with [time-to-go](https://github.com/AkashRajpurohit/time-to-go) is to extend blogs sharing capabilities without me needing to add each and every blog to the go-url service.

So instead of going to [akashrajpurohit.com/blogs/](https://akashrajpurohit.com/blogs/) and then search for the blog there and then sharing the full length URL, I would be able to just share the URL using this service.

Example - [https://q.akashrajpurohit.com/inhouse-newsletter](https://q.akashrajpurohit.com/inhouse-newsletter) will redirect user to [https://akashrajpurohit.com/blog/i-built-my-own-inhouse-newsletter-system/](https://akashrajpurohit.com/blog/i-built-my-own-inhouse-newsletter-system/)

# How it works? 🤔

Wormhole is a Cloudflare Worker that uses DuckDuckGo's bangs to redirect the user to the actual URL for a specific given domain.

As long as your query is in the format `! site:domain query` it will redirect you to the actual URL.

# Self Hosting Guide 📖

To self-host Wormhole, follow these steps:

## Prerequisites 🏃🏻

- Account with [Cloudflare](https://dash.cloudflare.com/sign-up). Everything required for this is available on Free plan as well.
- [Node.js](https://nodejs.org/) installed on your machine if you want to run it locally first.
- [PNPM](https://pnpm.io/) - The package manager used.

## Environment Variables 👀

Before deploying Wormhole, make sure to set the following environment variables:

### For Github Actions ⛏

_All of the tokens mentioned in this section are required._

- `CF_API_TOKEN`: Your Cloudflare API token. Create the API tokens from [here](https://dash.cloudflare.com/profile/api-tokens)
- `CF_ACCOUNT_ID`: The ID of the Cloudflare zone where you want to deploy Time to Go.

### For Cloudflare Worker 👷🏼‍♂️

- `DOMAIN` - This would be the domain you want your search to be associated with. For example if you want to search for `! site:example.com query` then `example.com` would be the value for this variable.

- `FALLBACK_URL` - This would be the full URL where you want to redirect the user if no query is provided. For example if you want to redirect the user to `https://example.com` then `https://example.com` would be the value for this variable.



## Deployment 🚀

To deploy Time to Go, follow these steps:

1. [Fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to your own GitHub account.
2. Add the environment variables for the forked repository from the [Github Actions](#for-github-actions-) section.
3. Clone the forked repository to your local machine.
4. Navigate to the repository directory.
5. Install the dependencies by running the command: `pnpm install`.
6. Edit the `wrangler.toml` file and update the values `DOMAIN` and `FALLBACK_URL` in the `vars` section.
7. Commit your changes and push them to your forked repository.
8. GitHub Actions will automatically trigger the deployment process. Wait for the action to complete.

Congratulations! Wormhole is now deployed and ready to use.

# Technology Stack 💻

- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers](https://workers.cloudflare.com/)

# Bugs or Requests 🐛

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/wormhole/issues/new?template=bug_report.md). If you feel the project is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/wormhole/issues/new?template=feature_request.md) on GitHub and I'll look into it. Pull requests are also welcome.

# Credits 👨🏻‍💻

- [lazd](https://github.com/lazd) for the project [mdn.io](https://mdn.io/)

# Where to find me? 👀

[![Website Badge](https://img.shields.io/badge/-akashrajpurohit.com-3b5998?logo=google-chrome&logoColor=white)](https://akashrajpurohit.com/)
[![Twitter Badge](https://img.shields.io/badge/-@akashwhocodes-00acee?logo=Twitter&logoColor=white)](https://twitter.com/AkashWhoCodes)
[![Linkedin Badge](https://img.shields.io/badge/-@AkashRajpurohit-0e76a8?logo=Linkedin&logoColor=white)](https://linkedin.com/in/AkashRajpurohit)
[![Instagram Badge](https://img.shields.io/badge/-@akashwho.codes-e4405f?logo=Instagram&logoColor=white)](https://instagram.com/akashwho.codes/)
[![Telegram Badge](https://img.shields.io/badge/-@AkashRajpurohit-0088cc?logo=Telegram&logoColor=white)](https://t.me/AkashRajpurohit)