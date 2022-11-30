// https://github.com/solidjs/solid/issues/804
declare module "solid-js" {
  namespace JSX {
    interface CustomEvents {
      changelanguage: CustomEvent<{
        language: string
        newDict: any
        newDictCode: string
        addToOtherDict: boolean
      }>
    }
  }
}

// declare modu;

export interface bibleChapObj {
  [index: string]: string | number | null
  number: number
  label: string
  text: null | string
}
export interface bibleEntryObj {
  [index: string]: any
  slug: string
  label: string
  chapters: bibleChapObj[]
}
export interface repoIndexObj {
  languageName: string
  languageCode: string
  resourceType: string
  resourceTitle: string | null
  textDirection: string
  bible: Array<bibleEntryObj>
  repoUrl: string
}
