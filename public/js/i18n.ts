/**
 * This file fetches the translations.
 */

import { Hole } from './vendor/uhtml.js';

class TranslatedText extends Hole {

  readonly text: string
  public context: Array<any> | string

  constructor(type, template = [], values = []) {
    super(type, template, values);
    const text = type
    const context = template

    this.text = text;
    this.template = [text];
    this.values = [];
    this.context = context;
    this.type = 'html';
  }

  toString () {
    return this.text;
  }
}

function mixString (a, b, asCodeString = false) {
  let total = Math.max(a.length, b.length);
  let string = '';

  for (let part = 0; part < total; part++) {
    let valueString = '';
    if (typeof b[part] === 'object') {
      let keys = Object.keys(b[part]);
      valueString = asCodeString ? '{' + keys[0] + '}' : b[part][keys[0]];
    }
    else if (typeof b[part] === 'string') {
      valueString = b[part];
    }

    string += a[part] + valueString;
  }

  return string;
}

export async function I18n (language, prefix = '', possibleLanguageCodes) {
  let translations = {};
  translations[language] = {};
  if (possibleLanguageCodes.includes(language)) {
    translations[language] = (await import(`/js/Translations/${(prefix ? prefix + '.' : '') + language}.js`)).Translations;
  }

  /**
   *
   * @param context
   * @param values
   * @returns {TranslatedText}
   * @constructor
   */
  function Translate (context, ...values): any {
    if (typeof context === 'string') {
      return (strings, ...values) => {
        let translatedText = Translate(strings, ...values);
        translatedText.context = context;
        return translatedText;
      }
    }
    else {
      let stringsToTranslate = context;
      let codeString = mixString(stringsToTranslate, values, true);

      /**
       * Translation is not available.
       */
      if (typeof translations[language][codeString] === 'undefined') {
        return new TranslatedText(mixString(stringsToTranslate, values));
      }

      /**
       * We have a translation. Fill in the tokens.
       */
      else {
        let translatedString = translations[language][codeString];
        let tokens = Object.assign({}, ...values);

        let replacements = translatedString.match(/{[a-zA-Z]*}/g);
        if (replacements) {
          replacements.forEach(replacement => {
            let variableName = replacement.substr(1).substr(0, replacement.length - 2);
            translatedString = translatedString.replace(replacement, tokens[variableName]);
          });
        }

        return new TranslatedText(translatedString);
      }
    }
  }

  Translate.constructor.prototype.direct = (variable) => {
    if (typeof translations[language][variable] === 'undefined') {
      return new TranslatedText(variable);
    }
    else {
      return new TranslatedText(translations[language][variable]);
    }
  };

  return Translate;
}

