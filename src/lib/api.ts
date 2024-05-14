import { FUNCTIONS_ROUTES } from "@lib/routes";
import type { IDownloadIndex, repoIndexObj, IcfEnv } from "@customTypes/types";

interface baseApiInfo {
  user: string;
  repo: string;
}
interface getRepoInfo extends baseApiInfo {
  book: string;
  chapter: string;
  navSection?: string;
}
interface commentaryIndividual extends baseApiInfo {
  file: string;
}
export async function getChapterHtml({
  user,
  repo,
  book,
  chapter
}: getRepoInfo): Promise<string | undefined> {
  if (!repo) return;

  const fetchUrl = FUNCTIONS_ROUTES.getRepoHtml({ user, repo, book, chapter });
  try {
    const response = await fetch(fetchUrl);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
interface getNonBibleSchemaHtmlParams {
  navSection: string;
  user: string;
  repo: string;
}
export async function getTwSchemaHtml({
  navSection,
  user,
  repo
}: getNonBibleSchemaHtmlParams): Promise<string | undefined> {
  if (!repo || !user || !navSection) return;
  const fetchUrl = FUNCTIONS_ROUTES.getHtmlForTw({
    user,
    repo,
    navSection
  });
  try {
    const response = await fetch(fetchUrl);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getTmSchemaHtml({
  navSection,
  user,
  repo
}: getNonBibleSchemaHtmlParams): Promise<string | undefined> {
  if (!repo || !user || !navSection) return;
  const fetchUrl = FUNCTIONS_ROUTES.getHtmlForTm({
    user,
    repo,
    navSection
  });
  try {
    const response = await fetch(fetchUrl);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getRepoIndex({
  user,
  repo
}: baseApiInfo): Promise<repoIndexObj | null> {
  if (!user || !repo) return null;
  const fetchUrl = FUNCTIONS_ROUTES.getRepoIndex({ user, repo });
  try {
    const response = await fetch(fetchUrl, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data: repoIndexObj = await response.json();
    if (typeof data == "string") {
      return null;
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function checkForOrDownloadWholeRepo({
  user,
  repo,
  method
}: baseApiInfo & {
  method: "GET" | "HEAD";
}): Promise<IDownloadIndex | null | boolean> {
  if (!user || !repo || !method) return null;
  const fetchUrl = FUNCTIONS_ROUTES.getWholeRepoDownload({
    user,
    repo,
    method
  });
  try {
    const response = await fetch(fetchUrl);
    if (method == "HEAD") {
      return response.ok;
    } else if (method == "GET") {
      const data: IDownloadIndex = await response.json();
      return data;
    }
    const data: IDownloadIndex = await response.json();
    if (typeof data == "string") {
      return null;
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCommentarySectionHtml({
  file,
  user,
  repo
}: commentaryIndividual): Promise<string | undefined> {
  if (!file || !user || !repo) return;
  const fetchUrl = FUNCTIONS_ROUTES.getHtmlForCommentaryIndividualSection({
    file,
    user,
    repo
  });
  try {
    const response = await fetch(fetchUrl);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
type envType = IcfEnv;

export async function getRepoIndexLocal(
  env: envType,
  user: string,
  repo: string
): Promise<repoIndexObj | null> {
  try {
    const baseUrl = env.PIPELINE_API_URL_BASE;
    const finalUrl = `${baseUrl}/${user}/${repo}/index.json`;
    const response = await fetch(finalUrl);
    const jsonval = await response.json();
    return jsonval as repoIndexObj;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getHeaders() {
  // theoretically can accept a url arg here to decide whether thhis request should be authorized cross origin or not, but for nnow just allowing all cors requests to these functions.
  type headersType = {
    "Content-Type": string;
    "Access-Control-Allow-Origin"?: string;
  };
  // note, if want to activate cors for just this site, could do so here based on a list of allowed Origins
  const headers: headersType = {
    "Content-Type": "text/html"
  };
  headers["Access-Control-Allow-Origin"] = "*";
  return headers;
}

export function handleRcLinks(element: Element, href: string, user: string) {
  if (!element || !href || !user) return;
  const linkUser = element.getAttribute("data-user") || user;
  const repo = element.getAttribute("data-repo");
  if (!repo) return;
  const category = element.getAttribute("data-category");
  const word = element.getAttribute("data-word");
  const templateType = element.getAttribute("data-type");
  if (templateType === "tw") {
    const newHref = `/${linkUser}/${repo}?section=${category}#${word}`;
    element.setAttribute("href", newHref);
    element.setInnerContent(newHref);
  } else if (templateType === "tm") {
    const initialPage = element.getAttribute("data-page");
    const topic = element.getAttribute("data-topic");
    const newHref = `/${linkUser}/${repo}?section=${initialPage}#${topic}`;
    element.setAttribute("href", newHref);
    element.setInnerContent(newHref);
  }
}
function handleInteralTnLinks(element: Element, href: string) {
  const hashWithoutHashTag = href.split("#")[1];
  const parts = hashWithoutHashTag.split("-");
  const book = parts[2];
  const chapter = parts[3];

  const newUrl = `?book=${book}&chapter=${chapter}#${hashWithoutHashTag}`;
  element.setAttribute("href", newUrl);
  element.setAttribute("data-chapter", chapter);
  element.setAttribute("data-book", book);
  element.setAttribute("data-hash", hashWithoutHashTag);
  element.setAttribute("data-crossref", "true");
}
function handleTwLinks(element: Element, href: string) {
  if (!href) return;
  if (href && href.includes("/u/")) return;
  const rep = href.replace(".html", "");
  const parts = rep.split("#");
  const section = parts[0];
  const hash = parts[1];
  const newUrl = `?section=${section}#${parts[1]}`;
  element.setAttribute("href", newUrl);
  element.setAttribute("data-section", section);
  element.setAttribute("data-hash", hash);
  element.setAttribute("data-crossref", "true");
}
function handleTMLinks(element: Element, href: string) {
  const rep = href.replace(".html", "");
  const prepended = `?section=${rep}`;
  element.setAttribute("href", prepended);
}

export class aTagHandler {
  user: string;
  functionContext: "TW" | "TN" | "TM";
  constructor(user: string, functionContext: "TW" | "TN" | "TM") {
    this.user = user;
    this.functionContext = functionContext;
  }
  element(element: Element) {
    const href = element.getAttribute("href");
    if (!href) return;
    if (this.functionContext == "TN") {
      const rcLink = element.getAttribute("data-is-rc-link");
      const isRcLink = rcLink != null || rcLink != undefined;
      if (href && isRcLink) {
        return handleRcLinks(element, href, this.user);
      }
      if (href.includes("tn-chunk")) {
        return handleInteralTnLinks(element, href);
      }
    } else if (this.functionContext == "TW") {
      return handleTwLinks(element, href);
    } else if (this.functionContext == "TM") {
      return handleTMLinks(element, href);
    }
  }
}
export function allParamsAreValid(params: Array<string | null>) {
  if (!params || !params.length) return;
  if (
    params.some(
      (param) => !Boolean(param) || param == "undefined" || param == "false"
    )
  ) {
    return false;
  } else {
    return true;
  }
}
