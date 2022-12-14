import { FUNCTIONS_ROUTES } from "@lib/routes"
import type { repoIndexObj } from "../customTypes/types"

interface baseApiInfo {
  user: string
  repo: string
}
interface getRepoInfo extends baseApiInfo {
  book: string
  chapter: string
  navSection?: string
}
interface commentaryIndividual extends baseApiInfo {
  file: string
}
export async function getChapterHtml({
  user,
  repo,
  book,
  chapter
}: getRepoInfo): Promise<string | undefined> {
  if (!repo) return
  let fetchUrl = FUNCTIONS_ROUTES.getRepoHtml({ user, repo, book, chapter })
  try {
    const response = await fetch(fetchUrl)
    const data = await response.text()
    return data
  } catch (error) {
    console.error(error)
    return
  }
}
interface getNonBibleSchemaHtmlParams {
  navSection: string
  user: string
  repo: string
}
export async function getTwSchemaHtml({
  navSection,
  user,
  repo
}: getNonBibleSchemaHtmlParams): Promise<string | undefined> {
  if (!repo || !user || !navSection) return
  let fetchUrl = FUNCTIONS_ROUTES.getHtmlForTw({
    user,
    repo,
    navSection
  })
  try {
    const response = await fetch(fetchUrl)
    const data = await response.text()
    return data
  } catch (error) {
    console.error(error)
    return
  }
}

export async function getTmSchemaHtml({
  navSection,
  user,
  repo
}: getNonBibleSchemaHtmlParams): Promise<string | undefined> {
  if (!repo || !user || !navSection) return
  let fetchUrl = FUNCTIONS_ROUTES.getHtmlForTm({
    user,
    repo,
    navSection
  })
  try {
    const response = await fetch(fetchUrl)
    const data = await response.text()
    return data
  } catch (error) {
    console.error(error)
    return
  }
}

export async function getRepoIndex({
  user,
  repo
}: baseApiInfo): Promise<repoIndexObj | null> {
  if (!user || !repo) return null
  let fetchUrl = FUNCTIONS_ROUTES.getRepoIndex({ user, repo })
  try {
    const response = await fetch(fetchUrl)
    const data: repoIndexObj = await response.json()
    if (typeof data == "string") {
      return null
    }
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function isValidRepo({
  user,
  repo
}: baseApiInfo): Promise<boolean> {
  if (typeof user !== "string" || typeof repo !== "string") return false
  const fetchUrl = FUNCTIONS_ROUTES.isValidRepo({ user, repo })
  try {
    let response = await fetch(fetchUrl)
    let isValid = await response.text()
    return !!(isValid == "true") || !!(isValid !== "false")
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getCommentarySectionHtml({
  file,
  user,
  repo
}: commentaryIndividual): Promise<string | undefined> {
  if (!file || !user || !repo) return
  let fetchUrl = FUNCTIONS_ROUTES.getHtmlForCommentaryIndividualSection({
    file,
    user,
    repo
  })
  try {
    const response = await fetch(fetchUrl)
    const data = await response.text()
    return data
  } catch (error) {
    console.error(error)
    return
  }
}
