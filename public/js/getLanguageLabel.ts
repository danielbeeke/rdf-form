let languages = []
let isRunning

const ensureLanguages = async () => {
  if (!languages.length) {
    const response = await fetch('https://r12a.github.io/app-subtags/languages.js')
    const file = 'export ' + await response.text()
    const encodedJs = encodeURIComponent(file);
    const dataUri = 'data:text/javascript;charset=utf-8,' + encodedJs;
    const data = await import(dataUri);
    languages = data.languages
  }
}

export const getLanguageLabel = async (langcode) => {
  !isRunning ? isRunning = await ensureLanguages() : await isRunning

  const language = languages.find(language => language.subtag === langcode)
  return language?.description ?? langcode
}

export const filterLanguages = async (search) => {
  !isRunning ? isRunning = await ensureLanguages() : await isRunning
  return languages.filter(language => language.description.toLowerCase().includes(search.toLowerCase()))
}

export const langCodesToObject = async (langCodes: Array<string>) => {
  const languages = {}
  for (const langCode of langCodes) {
    languages[langCode] = await getLanguageLabel(langCode)
  }
  return languages
}
