import { getHeaders, aTagHandler } from "functions/shared"

export const onRequestGet: PagesFunction = async (context) => {
  // Contents of context object
  // const {
  //   request, // same as existing Worker API
  //   env, // same as existing Worker API
  //   params, // if filename includes [id] or [[path]]
  //   waitUntil, // same as ctx.waitUntil in existing Worker API
  //   next, // used for middleware or to fetch assets
  //   data // arbitrary space for passing data between middlewares
  // } = context

  const request: Request = context.request
  const env: any = context.env
  const url = new URL(request.url)
  let user = url.searchParams?.get("user")
  let repo = url.searchParams?.get("repo")
  let navSection = url.searchParams?.get("navSection")

  if (!user || !repo || !navSection) {
    return new Response(null, {
      status: 400,
      statusText: "Missing parameters"
    })
  }

  class imgTagHandler {
    element(element: Element) {
      element.setAttribute("loading", "lazy")
    }
  }

  try {
    // http://localhost/u/WA-Catalog/en_ulb/index.json;
    let baseUrl = env.HTML_API_URL_BASE
    let finalUrl = `${baseUrl}/${user}/${repo}/${navSection}.html`
    let response = await fetch(finalUrl)
    // E[foo*="bar"]
    let newResp = new Response(response.body, {
      headers: getHeaders(url)
    })
    const aHandler = new aTagHandler(user, "TW")
    return new HTMLRewriter()
      .on("a[data-is-rc-link]", aHandler)
      .on("a[href*='html']", aHandler)
      .on("img[src*='content.bibletranslationtools.org'", new imgTagHandler())
      .transform(newResp)
  } catch (error) {
    console.error(error)
    return new Response(null, {
      status: 404
    })
  }
}
