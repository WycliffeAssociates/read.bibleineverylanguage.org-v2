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

  console.log(HTMLRewriter)

  if (!user || !repo || !navSection) {
    return new Response(null, {
      status: 400,
      statusText: "Missing parameters"
    })
  }
  type headersType = {
    "Content-Type": string
    "Access-Control-Allow-Origin"?: string
  }
  let headers: headersType = {
    "Content-Type": "text/html"
  }
  const allowedOrigins = ["localhost", "http://127.0.0.1"]
  if (allowedOrigins.some((origin) => url.origin.includes(origin))) {
    headers["Access-Control-Allow-Origin"] = "*"
  }

  class ElementHandler {
    element(element: Element) {
      // An incoming element, such as `div`
      // console.log(`Incoming element: ${element.tagName}`)
      console.dir(element.getAttribute("href"))
      let href = element.getAttribute("href")
      if (!href) return
      if (href && href.includes("/u/")) return
      let rep = href.replace(".html", "")
      console.log({ rep })
      let parts = rep.split("#")
      let newUrl = `?section=${parts[0]}#${parts[1]}`
      console.log({ newUrl })
      element.setAttribute("href", newUrl)
      element.setAttribute("data-section", parts[0])
      element.setAttribute("data-hash", parts[1])
    }

    comments(comment) {
      // An incoming comment
    }

    text(text) {
      // An incoming piece of text
    }
  }

  try {
    // http://localhost/u/WA-Catalog/en_ulb/index.json;
    let baseUrl = env.HTML_API_URL_BASE
    let finalUrl = `${baseUrl}/${user}/${repo}/${navSection}.html`
    let response = await fetch(finalUrl)
    // E[foo*="bar"]
    let newResp = new Response(response.body, {
      headers
    })
    return new HTMLRewriter()
      .on("a[href*='html']", new ElementHandler())
      .transform(newResp)
  } catch (error) {
    console.error(error)
    return new Response(null, {
      status: 404
    })
  }
}
