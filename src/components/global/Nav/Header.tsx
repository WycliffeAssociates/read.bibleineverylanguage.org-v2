import type { i18nDictKeysType } from "@lib/i18n";
import { resolveTemplate, translator } from "@solid-primitives/i18n";
import { MobileMenuOpen, HamburgerSvg } from "./MenuButtons";
import { LoadingSpinner } from "@components/Icons/Icons";
import { Index, createSignal, Show, lazy, Suspense } from "solid-js";
import { addDict } from "./I18nContext";
const LanguageChoices = lazy(() => import("./LanguageChoices"));

interface HeaderProps {
  menuItems: string[];
  logo: string;
  logoWebP: string;
  preferredLocale: i18nDictKeysType;
  linkBase: string;
  initialDict: Record<string, string>;
  repoUrl: string;
  // children: JSX.Element
}

export function Header(props: HeaderProps) {
  // full signature
  const [dict, setDict] = createSignal(props.initialDict);
  const [dictsFetched, setDictsFetched] = createSignal({
    // Ignore due to seeding intial state. Props not changing from server sent props
    // eslint-disable-next-line solid/reactivity
    [props.preferredLocale]: props.initialDict
  });
  // t is tracked here
  // eslint-disable-next-line solid/reactivity
  const t = translator(dict, resolveTemplate);

  // ignore due to seeding intial state
  // eslint-disable-next-line solid/reactivity
  const [flagShowing, setFlagShowing] = createSignal(props.preferredLocale);

  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
  const [languagePickerOpen, setLanguagePickerOpen] = createSignal(false);

  async function changeLanguage(lang: string): Promise<void> {
    let newDict: Record<string, string> | undefined,
      newDictCode: string | undefined;
    if (dictsFetched()[lang]) {
      setDict(dictsFetched()[lang]);
    } else {
      const dictCodeAndVal = await addDict(lang);
      newDict = dictCodeAndVal.newDict;
      newDictCode = dictCodeAndVal.newDictCode;
      if (newDict && newDictCode) {
        const coerceTs = newDictCode as string;
        const coerceTsDict = newDict as Record<string, string>;
        setDictsFetched((prev) => {
          return {
            ...prev,
            [coerceTs]: coerceTsDict
          };
        });
        setDict(newDict);
      }
    }
    setFlagShowing(lang);

    // NOTE: in a different scenario, the reader pane and this menu would be wrapped in same context, but note that Astro's island architecture does not permit the use of traditional JS SPA types contexts.  Each of these components is wrapped in their own context with the same dictonary, and this custom event call the corresponding locale function there.
    // notify Reader Pane localization event listener
    const changeLanguageEvent = new CustomEvent("changelanguage", {
      detail: {
        newDict: newDict
      }
    });
    const menu = document.querySelector("#menu");
    menu && menu.dispatchEvent(changeLanguageEvent);

    setLanguagePickerOpen(false);
  }
  function manageMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen());
  }
  function manageLanguagePickerToggle() {
    setLanguagePickerOpen(!languagePickerOpen());
  }

  function menuText(): string {
    return !mobileMenuOpen() ? "menu" : "close";
  }

  return (
    <nav class="w-full bg-darkAccent py-5 font-sans print:hidden">
      <div class="relative mx-auto flex max-w-[75ch] items-center justify-between px-4 text-varBase text-white">
        {/* https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#use_modern_image_formats_boldly */}
        <picture class="flex-shrink-0">
          <source srcset={props.logoWebP} type="image/webp" />
          <source srcset={props.logo} type="image/jpeg" />
          <img
            src={props.logo}
            alt="WA Logo"
            class="w-32"
            width="618"
            height="186"
            elementtiming={""}
            fetchpriority={"high"}
          />
        </picture>

        <button
          onClick={() => manageMobileMenu()}
          class="inline-flex items-center rounded-md border border-solid border-gray-100 px-6 py-2 capitalize lg:hidden rtl:flex-row-reverse"
        >
          <Show when={!mobileMenuOpen()}>
            <HamburgerSvg classNames="inline-block mr-2 w-6 h-6 fill-white" />
          </Show>
          <Show when={mobileMenuOpen()}>
            <MobileMenuOpen classNames="inline-block mr-2 w-6 h-6" />
          </Show>
          {t(menuText())}
        </button>

        <div
          data-js="mobileMenu"
          class={`${
            mobileMenuOpen() ? "block" : "hidden"
          } absolute left-0 right-0 top-full z-50 w-full flex-col bg-darkAccent pt-5 lg:static lg:flex lg:w-auto lg:flex-row lg:flex-wrap`}
        >
          <ul class="flex flex-col lg:flex-row ltr:pl-4 rtl:pr-4">
            <Index each={props.menuItems}>
              {(menuItem) => {
                return (
                  <li class="my-2 capitalize hover:text-secondary focus:text-secondary md:mx-4 md:my-0">
                    <a href={`${props.linkBase}/${menuItem()}`}>
                      {t(String(menuItem()))}
                    </a>
                  </li>
                );
              }}
            </Index>
            <li class="my-2 capitalize hover:text-secondary focus:text-secondary md:mx-4 md:my-0">
              <a href={`${props.repoUrl}`}>{t("wacsSource")}</a>
            </li>
          </ul>

          {/* LANGUAGE PICKER PART OF MENU BUT ADJACENT TO THE NAV PARTS */}
          <div class="relative my-2 pl-4 lg:my-0 lg:ml-4 lg:pl-0">
            <button
              onClick={() => manageLanguagePickerToggle()}
              data-js="languagePicker"
              class={`languagePicker relative inline-flex place-content-center hover:text-secondary rtl:flex-row-reverse ${
                languagePickerOpen() ? "open" : ""
              }`}
              data-i18nkey={"thisLanguage"}
              data-localizable={true}
            >
              <img
                class="mr-2 w-4"
                src={`/flags/${flagShowing()}.svg`}
                alt=""
                elementtiming={""}
                fetchpriority={"auto"}
              />
              {t("thisLanguage")}
            </button>
            {/* OFFERED LANGUAGES */}
            <Show when={languagePickerOpen()}>
              <Suspense
                fallback={
                  <div class="absolute left-0 top-full z-20 grid w-full place-content-center bg-darkAccent py-2 pr-2 text-center lg:left-[unset] lg:right-0 lg:mt-5 lg:w-52 rtl:lg:-right-full">
                    <LoadingSpinner />
                  </div>
                }
              >
                <LanguageChoices onClick={changeLanguage} />
              </Suspense>
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
}
