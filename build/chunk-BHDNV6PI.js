var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/js/languages.js
var languages = [["aa", "Afar"], ["ab", "Abkhazian"], ["ae", "Avestan"], ["af", "Afrikaans"], ["ak", "Akan"], ["am", "Amharic"], ["an", "Aragonese"], ["ar", "Arabic"], ["as", "Assamese"], ["av", "Avaric"], ["ay", "Aymara"], ["az", "Azerbaijani"], ["ba", "Bashkir"], ["be", "Belarusian"], ["bg", "Bulgarian"], ["bh", "Bihari languages"], ["bi", "Bislama"], ["bm", "Bambara"], ["bn", "Bengali, Bangla"], ["bo", "Tibetan"], ["br", "Breton"], ["bs", "Bosnian"], ["ca", "Catalan, Valencian"], ["ce", "Chechen"], ["ch", "Chamorro"], ["co", "Corsican"], ["cr", "Cree"], ["cs", "Czech"], ["cu", "Church Slavic, Church Slavonic, Old Bulgarian, Old Church Slavonic, Old Slavonic"], ["cv", "Chuvash"], ["cy", "Welsh"], ["da", "Danish"], ["de", "German"], ["dv", "Dhivehi, Divehi, Maldivian"], ["dz", "Dzongkha"], ["ee", "Ewe"], ["el", "Modern Greek (1453-)"], ["en", "English"], ["eo", "Esperanto"], ["es", "Spanish, Castilian"], ["et", "Estonian"], ["eu", "Basque"], ["fa", "Persian"], ["ff", "Fulah"], ["fi", "Finnish"], ["fj", "Fijian"], ["fo", "Faroese"], ["fr", "French"], ["fy", "Western Frisian"], ["ga", "Irish"], ["gd", "Scottish Gaelic, Gaelic"], ["gl", "Galician"], ["gn", "Guarani"], ["gu", "Gujarati"], ["gv", "Manx"], ["ha", "Hausa"], ["he", "Hebrew"], ["hi", "Hindi"], ["ho", "Hiri Motu"], ["hr", "Croatian"], ["ht", "Haitian, Haitian Creole"], ["hu", "Hungarian"], ["hy", "Armenian"], ["hz", "Herero"], ["ia", "Interlingua (International Auxiliary Language Association)"], ["id", "Indonesian"], ["ie", "Interlingue, Occidental"], ["ig", "Igbo"], ["ii", "Sichuan Yi, Nuosu"], ["ik", "Inupiaq"], ["in", "Indonesian"], ["io", "Ido"], ["is", "Icelandic"], ["it", "Italian"], ["iu", "Inuktitut"], ["iw", "Hebrew"], ["ja", "Japanese"], ["ji", "Yiddish"], ["jv", "Javanese"], ["jw", "Javanese"], ["ka", "Georgian"], ["kg", "Kongo"], ["ki", "Kikuyu, Gikuyu"], ["kj", "Kuanyama, Kwanyama"], ["kk", "Kazakh"], ["kl", "Kalaallisut, Greenlandic"], ["km", "Khmer, Central Khmer"], ["kn", "Kannada"], ["ko", "Korean"], ["kr", "Kanuri"], ["ks", "Kashmiri"], ["ku", "Kurdish"], ["kv", "Komi"], ["kw", "Cornish"], ["ky", "Kirghiz, Kyrgyz"], ["la", "Latin"], ["lb", "Luxembourgish, Letzeburgesch"], ["lg", "Ganda, Luganda"], ["li", "Limburgan, Limburger, Limburgish"], ["ln", "Lingala"], ["lo", "Lao"], ["lt", "Lithuanian"], ["lu", "Luba-Katanga"], ["lv", "Latvian"], ["mg", "Malagasy"], ["mh", "Marshallese"], ["mi", "Maori"], ["mk", "Macedonian"], ["ml", "Malayalam"], ["mn", "Mongolian"], ["mo", "Moldavian, Moldovan"], ["mr", "Marathi"], ["ms", "Malay (macrolanguage)"], ["mt", "Maltese"], ["my", "Burmese"], ["na", "Nauru"], ["nb", "Norwegian Bokm\xE5l"], ["nd", "North Ndebele"], ["ne", "Nepali (macrolanguage)"], ["ng", "Ndonga"], ["nl", "Dutch, Flemish"], ["nn", "Norwegian Nynorsk"], ["no", "Norwegian"], ["nr", "South Ndebele"], ["nv", "Navajo, Navaho"], ["ny", "Nyanja, Chewa, Chichewa"], ["oc", "Occitan (post 1500)"], ["oj", "Ojibwa"], ["om", "Oromo"], ["or", "Oriya (macrolanguage), Odia (macrolanguage)"], ["os", "Ossetian, Ossetic"], ["pa", "Panjabi, Punjabi"], ["pi", "Pali"], ["pl", "Polish"], ["ps", "Pushto, Pashto"], ["pt", "Portuguese"], ["qu", "Quechua"], ["rm", "Romansh"], ["rn", "Rundi"], ["ro", "Romanian, Moldavian, Moldovan"], ["ru", "Russian"], ["rw", "Kinyarwanda"], ["sa", "Sanskrit"], ["sc", "Sardinian"], ["sd", "Sindhi"], ["se", "Northern Sami"], ["sg", "Sango"], ["sh", "Serbo-Croatian"], ["si", "Sinhala, Sinhalese"], ["sk", "Slovak"], ["sl", "Slovenian"], ["sm", "Samoan"], ["sn", "Shona"], ["so", "Somali"], ["sq", "Albanian"], ["sr", "Serbian"], ["ss", "Swati"], ["st", "Southern Sotho"], ["su", "Sundanese"], ["sv", "Swedish"], ["sw", "Swahili (macrolanguage)"], ["ta", "Tamil"], ["te", "Telugu"], ["tg", "Tajik"], ["th", "Thai"], ["ti", "Tigrinya"], ["tk", "Turkmen"], ["tl", "Tagalog"], ["tn", "Tswana"], ["to", "Tonga (Tonga Islands)"], ["tr", "Turkish"], ["ts", "Tsonga"], ["tt", "Tatar"], ["tw", "Twi"], ["ty", "Tahitian"], ["ug", "Uighur, Uyghur"], ["uk", "Ukrainian"], ["ur", "Urdu"], ["uz", "Uzbek"], ["ve", "Venda"], ["vi", "Vietnamese"], ["vo", "Volap\xFCk"], ["wa", "Walloon"], ["wo", "Wolof"], ["xh", "Xhosa"], ["yi", "Yiddish"], ["yo", "Yoruba"], ["za", "Zhuang, Chuang"], ["zh", "Chinese"], ["zu", "Zulu"], ["aaa", "Ghotuo"], ["aab", "Alumu-Tesu"], ["aac", "Ari"], ["aad", "Amal"], ["aae", "Arb\xEBresh\xEB Albanian"], ["aaf", "Aranadan"], ["aag", "Ambrak"], ["aah", "Abu' Arapesh"], ["aai", "Arifama-Miniafia"], ["aak", "Ankave"], ["aal", "Afade"], ["aam", "Aramanik"], ["aan", "Anamb\xE9"], ["aao", "Algerian Saharan Arabic"], ["aap", "Par\xE1 Ar\xE1ra"], ["aaq", "Eastern Abnaki"], ["aas", "Aas\xE1x"], ["aat", "Arvanitika Albanian"], ["aau", "Abau"], ["aav", "Austro-Asiatic languages"], ["aaw", "Solong"], ["aax", "Mandobo Atas"], ["aaz", "Amarasi"], ["aba", "Ab\xE9"], ["abb", "Bankon"], ["abc", "Ambala Ayta"], ["abd", "Manide"], ["abe", "Western Abnaki"], ["abf", "Abai Sungai"], ["abg", "Abaga"], ["abh", "Tajiki Arabic"], ["abi", "Abidji"], ["abj", "Aka-Bea"], ["abl", "Lampung Nyo"], ["abm", "Abanyom"], ["abn", "Abua"], ["abo", "Abon"], ["abp", "Abellen Ayta"], ["abq", "Abaza"], ["abr", "Abron"], ["abs", "Ambonese Malay"], ["abt", "Ambulas"], ["abu", "Abure"], ["abv", "Baharna Arabic"], ["abw", "Pal"], ["abx", "Inabaknon"], ["aby", "Aneme Wake"], ["abz", "Abui"], ["aca", "Achagua"], ["acb", "\xC1nc\xE1"], ["acd", "Gikyode"], ["ace", "Achinese"], ["acf", "Saint Lucian Creole French"], ["ach", "Acoli"], ["aci", "Aka-Cari"], ["ack", "Aka-Kora"], ["acl", "Akar-Bale"], ["acm", "Mesopotamian Arabic"], ["acn", "Achang"], ["acp", "Eastern Acipa"], ["acq", "Ta'izzi-Adeni Arabic"], ["acr", "Achi"], ["acs", "Acro\xE1"], ["act", "Achterhoeks"], ["acu", "Achuar-Shiwiar"], ["acv", "Achumawi"], ["acw", "Hijazi Arabic"], ["acx", "Omani Arabic"], ["acy", "Cypriot Arabic"], ["acz", "Acheron"], ["ada", "Adangme"], ["adb", "Atauran"], ["add", "Lidzonka, Dzodinka"], ["ade", "Adele"], ["adf", "Dhofari Arabic"], ["adg", "Andegerebinha"], ["adh", "Adhola"], ["adi", "Adi"], ["adj", "Adioukrou"], ["adl", "Galo"], ["adn", "Adang"], ["ado", "Abu"], ["adp", "Adap"], ["adq", "Adangbe"], ["adr", "Adonara"], ["ads", "Adamorobe Sign Language"], ["adt", "Adnyamathanha"], ["adu", "Aduge"], ["adw", "Amundava"], ["adx", "Amdo Tibetan"], ["ady", "Adyghe, Adygei"], ["adz", "Adzera"], ["aea", "Areba"], ["aeb", "Tunisian Arabic"], ["aec", "Saidi Arabic"], ["aed", "Argentine Sign Language"], ["aee", "Northeast Pashai, Northeast Pashayi"], ["aek", "Haeke"], ["ael", "Ambele"], ["aem", "Arem"], ["aen", "Armenian Sign Language"], ["aeq", "Aer"], ["aer", "Eastern Arrernte"], ["aes", "Alsea"], ["aeu", "Akeu"], ["aew", "Ambakich"], ["aey", "Amele"], ["aez", "Aeka"], ["afa", "Afro-Asiatic languages"], ["afb", "Gulf Arabic"], ["afd", "Andai"], ["afe", "Putukwam"], ["afg", "Afghan Sign Language"], ["afh", "Afrihili"], ["afi", "Akrukay, Chini"], ["afk", "Nanubae"], ["afn", "Defaka"], ["afo", "Eloyi"], ["afp", "Tapei"], ["afs", "Afro-Seminole Creole"], ["aft", "Afitti"], ["afu", "Awutu"], ["afz", "Obokuitai"], ["aga", "Aguano"], ["agb", "Legbo"], ["agc", "Agatu"], ["agd", "Agarabi"], ["age", "Angal"], ["agf", "Arguni"], ["agg", "Angor"], ["agh", "Ngelima"], ["agi", "Agariya"], ["agj", "Argobba"], ["agk", "Isarog Agta"], ["agl", "Fembe"], ["agm", "Angaataha"], ["agn", "Agutaynen"], ["ago", "Tainae"], ["agp", "Paranan"], ["agq", "Aghem"], ["agr", "Aguaruna"], ["ags", "Esimbi"], ["agt", "Central Cagayan Agta"], ["agu", "Aguacateco"], ["agv", "Remontado Dumagat"], ["agw", "Kahua"], ["agx", "Aghul"], ["agy", "Southern Alta"], ["agz", "Mt. Iriga Agta"], ["aha", "Ahanta"], ["ahb", "Axamb"], ["ahg", "Qimant"], ["ahh", "Aghu"], ["ahi", "Tiagbamrin Aizi"], ["ahk", "Akha"], ["ahl", "Igo"], ["ahm", "Mobumrin Aizi"], ["ahn", "\xC0h\xE0n"], ["aho", "Ahom"], ["ahp", "Aproumu Aizi"], ["ahr", "Ahirani"], ["ahs", "Ashe"], ["aht", "Ahtena"], ["aia", "Arosi"], ["aib", "Ainu (China)"], ["aic", "Ainbai"], ["aid", "Alngith"], ["aie", "Amara"], ["aif", "Agi"], ["aig", "Antigua and Barbuda Creole English"], ["aih", "Ai-Cham"], ["aii", "Assyrian Neo-Aramaic"], ["aij", "Lishanid Noshan"], ["aik", "Ake"], ["ail", "Aimele"], ["aim", "Aimol"], ["ain", "Ainu (Japan)"], ["aio", "Aiton"], ["aip", "Burumakok"], ["aiq", "Aimaq"], ["air", "Airoran"], ["ais", "Nataoran Amis"], ["ait", "Arikem"], ["aiw", "Aari"], ["aix", "Aighon"], ["aiy", "Ali"], ["aja", "Aja (South Sudan)"], ["ajg", "Aja (Benin)"], ["aji", "Aji\xEB"], ["ajn", "Andajin"], ["ajp", "South Levantine Arabic"], ["ajt", "Judeo-Tunisian Arabic"], ["aju", "Judeo-Moroccan Arabic"], ["ajw", "Ajawa"], ["ajz", "Amri Karbi"], ["akb", "Batak Angkola"], ["akc", "Mpur"], ["akd", "Ukpet-Ehom"], ["ake", "Akawaio"], ["akf", "Akpa"], ["akg", "Anakalangu"], ["akh", "Angal Heneng"], ["aki", "Aiome"], ["akj", "Aka-Jeru"], ["akk", "Akkadian"], ["akl", "Aklanon"], ["akm", "Aka-Bo"], ["ako", "Akurio"], ["akp", "Siwu"], ["akq", "Ak"], ["akr", "Araki"], ["aks", "Akaselem"], ["akt", "Akolet"], ["aku", "Akum"], ["akv", "Akhvakh"], ["akw", "Akwa"], ["akx", "Aka-Kede"], ["aky", "Aka-Kol"], ["akz", "Alabama"], ["ala", "Alago"], ["alc", "Qawasqar"], ["ald", "Alladian"], ["ale", "Aleut"], ["alf", "Alege"], ["alg", "Algonquian languages"], ["alh", "Alawa"], ["ali", "Amaimon"], ["alj", "Alangan"], ["alk", "Alak"], ["all", "Allar"], ["alm", "Amblong"], ["aln", "Gheg Albanian"], ["alo", "Larike-Wakasihu"], ["alp", "Alune"], ["alq", "Algonquin"], ["alr", "Alutor"], ["als", "Tosk Albanian"], ["alt", "Southern Altai"], ["alu", "'Are'are"], ["alv", "Atlantic-Congo languages"], ["alw", "Alaba-K\u2019abeena, Wanbasana"], ["alx", "Amol"], ["aly", "Alyawarr"], ["alz", "Alur"], ["ama", "Amanay\xE9"], ["amb", "Ambo"], ["amc", "Amahuaca"], ["ame", "Yanesha'"], ["amf", "Hamer-Banna"], ["amg", "Amurdak"], ["ami", "Amis"], ["amj", "Amdang"], ["amk", "Ambai"], ["aml", "War-Jaintia"], ["amm", "Ama (Papua New Guinea)"], ["amn", "Amanab"], ["amo", "Amo"], ["amp", "Alamblak"], ["amq", "Amahai"], ["amr", "Amarakaeri"], ["ams", "Southern Amami-Oshima"], ["amt", "Amto"], ["amu", "Guerrero Amuzgo"], ["amv", "Ambelau"], ["amw", "Western Neo-Aramaic"], ["amx", "Anmatyerre"], ["amy", "Ami"], ["amz", "Atampaya"], ["ana", "Andaqui"], ["anb", "Andoa"], ["anc", "Ngas"], ["and", "Ansus"], ["ane", "X\xE2r\xE2c\xF9\xF9"], ["anf", "Animere"], ["ang", "Old English (ca. 450-1100)"], ["anh", "Nend"], ["ani", "Andi"], ["anj", "Anor"], ["ank", "Goemai"], ["anl", "Anu-Hkongso Chin"], ["anm", "Anal"], ["ann", "Obolo"], ["ano", "Andoque"], ["anp", "Angika"], ["anq", "Jarawa (India)"], ["anr", "Andh"], ["ans", "Anserma"], ["ant", "Antakarinya, Antikarinya"], ["anu", "Anuak"], ["anv", "Denya"], ["anw", "Anaang"], ["anx", "Andra-Hus"], ["any", "Anyin"], ["anz", "Anem"], ["aoa", "Angolar"], ["aob", "Abom"], ["aoc", "Pemon"], ["aod", "Andarum"], ["aoe", "Angal Enen"], ["aof", "Bragat"], ["aog", "Angoram"], ["aoh", "Arma"], ["aoi", "Anindilyakwa"], ["aoj", "Mufian"], ["aok", "Arh\xF6"], ["aol", "Alor"], ["aom", "\xD6mie"], ["aon", "Bumbita Arapesh"], ["aor", "Aore"], ["aos", "Taikat"], ["aot", "Atong (India), A'tong"], ["aou", "A'ou"], ["aox", "Atorada"], ["aoz", "Uab Meto"], ["apa", "Apache languages"], ["apb", "Sa'a"], ["apc", "North Levantine Arabic"], ["apd", "Sudanese Arabic"], ["ape", "Bukiyip"], ["apf", "Pahanan Agta"], ["apg", "Ampanang"], ["aph", "Athpariya"], ["api", "Apiak\xE1"], ["apj", "Jicarilla Apache"], ["apk", "Kiowa Apache"], ["apl", "Lipan Apache"], ["apm", "Mescalero-Chiricahua Apache"], ["apn", "Apinay\xE9"], ["apo", "Ambul"], ["app", "Apma"], ["apq", "A-Pucikwar"], ["apr", "Arop-Lokep"], ["aps", "Arop-Sissano"], ["apt", "Apatani"], ["apu", "Apurin\xE3"], ["apv", "Alapmunte"], ["apw", "Western Apache"], ["apx", "Aputai"], ["apy", "Apala\xED"], ["apz", "Safeyoka"], ["aqa", "Alacalufan languages"], ["aqc", "Archi"], ["aqd", "Ampari Dogon"], ["aqg", "Arigidi"], ["aqk", "Aninka"], ["aql", "Algic languages"], ["aqm", "Atohwaim"], ["aqn", "Northern Alta"], ["aqp", "Atakapa"], ["aqr", "Arh\xE2"], ["aqt", "Angait\xE9"], ["aqz", "Akuntsu"], ["arb", "Standard Arabic"], ["arc", "Official Aramaic (700-300 BCE), Imperial Aramaic (700-300 BCE)"], ["ard", "Arabana"], ["are", "Western Arrarnta"], ["arh", "Arhuaco"], ["ari", "Arikara"], ["arj", "Arapaso"], ["ark", "Arikap\xFA"], ["arl", "Arabela"], ["arn", "Mapudungun, Mapuche"], ["aro", "Araona"], ["arp", "Arapaho"], ["arq", "Algerian Arabic"], ["arr", "Karo (Brazil)"], ["ars", "Najdi Arabic"], ["art", "Artificial languages"], ["aru", "Aru\xE1 (Amazonas State), Araw\xE1"], ["arv", "Arbore"], ["arw", "Arawak"], ["arx", "Aru\xE1 (Rodonia State)"], ["ary", "Moroccan Arabic"], ["arz", "Egyptian Arabic"], ["asa", "Asu (Tanzania)"], ["asb", "Assiniboine"], ["asc", "Casuarina Coast Asmat"], ["asd", "Asas"], ["ase", "American Sign Language"], ["asf", "Auslan, Australian Sign Language"], ["asg", "Cishingini"], ["ash", "Abishira"], ["asi", "Buruwai"], ["asj", "Sari"], ["ask", "Ashkun"], ["asl", "Asilulu"], ["asn", "Xing\xFA Asurin\xED"], ["aso", "Dano"], ["asp", "Algerian Sign Language"], ["asq", "Austrian Sign Language"], ["asr", "Asuri"], ["ass", "Ipulo"], ["ast", "Asturian, Asturleonese, Bable, Leonese"], ["asu", "Tocantins Asurini"], ["asv", "Asoa"], ["asw", "Australian Aborigines Sign Language"], ["asx", "Muratayak"], ["asy", "Yaosakor Asmat"], ["asz", "As"], ["ata", "Pele-Ata"], ["atb", "Zaiwa"], ["atc", "Atsahuaca"], ["atd", "Ata Manobo"], ["ate", "Atemble"], ["atg", "Ivbie North-Okpela-Arhe"], ["ath", "Athapascan languages"], ["ati", "Atti\xE9"], ["atj", "Atikamekw"], ["atk", "Ati"], ["atl", "Mt. Iraya Agta"], ["atm", "Ata"], ["atn", "Ashtiani"], ["ato", "Atong (Cameroon)"], ["atp", "Pudtol Atta"], ["atq", "Aralle-Tabulahan"], ["atr", "Waimiri-Atroari"], ["ats", "Gros Ventre"], ["att", "Pamplona Atta"], ["atu", "Reel"], ["atv", "Northern Altai"], ["atw", "Atsugewi"], ["atx", "Arutani"], ["aty", "Aneityum"], ["atz", "Arta"], ["aua", "Asumboa"], ["aub", "Alugu"], ["auc", "Waorani"], ["aud", "Anuta"], ["aue", "\u01C2Kx\u02BCau\u01C1\u02BCein"], ["auf", "Arauan languages"], ["aug", "Aguna"], ["auh", "Aushi"], ["aui", "Anuki"], ["auj", "Awjilah"], ["auk", "Heyo"], ["aul", "Aulua"], ["aum", "Asu (Nigeria)"], ["aun", "Molmo One"], ["auo", "Auyokawa"], ["aup", "Makayam"], ["auq", "Anus, Korur"], ["aur", "Aruek"], ["aus", "Australian languages"], ["aut", "Austral"], ["auu", "Auye"], ["auw", "Awyi"], ["aux", "Aur\xE1"], ["auy", "Awiyaana"], ["auz", "Uzbeki Arabic"], ["avb", "Avau"], ["avd", "Alviri-Vidari"], ["avi", "Avikam"], ["avk", "Kotava"], ["avl", "Eastern Egyptian Bedawi Arabic"], ["avm", "Angkamuthi"], ["avn", "Avatime"], ["avo", "Agavotaguerra"], ["avs", "Aushiri"], ["avt", "Au"], ["avu", "Avokaya"], ["avv", "Av\xE1-Canoeiro"], ["awa", "Awadhi"], ["awb", "Awa (Papua New Guinea)"], ["awc", "Cicipu"], ["awd", "Arawakan languages"], ["awe", "Awet\xED"], ["awg", "Anguthimri"], ["awh", "Awbono"], ["awi", "Aekyom"], ["awk", "Awabakal"], ["awm", "Arawum"], ["awn", "Awngi"], ["awo", "Awak"], ["awr", "Awera"], ["aws", "South Awyu"], ["awt", "Arawet\xE9"], ["awu", "Central Awyu"], ["awv", "Jair Awyu"], ["aww", "Awun"], ["awx", "Awara"], ["awy", "Edera Awyu"], ["axb", "Abipon"], ["axe", "Ayerrerenge"], ["axg", "Mato Grosso Ar\xE1ra"], ["axk", "Yaka (Central African Republic)"], ["axl", "Lower Southern Aranda"], ["axm", "Middle Armenian"], ["axx", "X\xE2r\xE2gur\xE8"], ["aya", "Awar"], ["ayb", "Ayizo Gbe"], ["ayc", "Southern Aymara"], ["ayd", "Ayabadhu"], ["aye", "Ayere"], ["ayg", "Ginyanga"], ["ayh", "Hadrami Arabic"], ["ayi", "Leyigha"], ["ayk", "Akuku"], ["ayl", "Libyan Arabic"], ["ayn", "Sanaani Arabic"], ["ayo", "Ayoreo"], ["ayp", "North Mesopotamian Arabic"], ["ayq", "Ayi (Papua New Guinea)"], ["ayr", "Central Aymara"], ["ays", "Sorsogon Ayta"], ["ayt", "Magbukun Ayta"], ["ayu", "Ayu"], ["ayx", "Ayi (China)"], ["ayy", "Tayabas Ayta"], ["ayz", "Mai Brat"], ["aza", "Azha"], ["azb", "South Azerbaijani"], ["azc", "Uto-Aztecan languages"], ["azd", "Eastern Durango Nahuatl"], ["azg", "San Pedro Amuzgos Amuzgo"], ["azj", "North Azerbaijani"], ["azm", "Ipalapa Amuzgo"], ["azn", "Western Durango Nahuatl"], ["azo", "Awing"], ["azt", "Faire Atta"], ["azz", "Highland Puebla Nahuatl"], ["baa", "Babatana"], ["bab", "Bainouk-Gunyu\xF1o"], ["bac", "Badui"], ["bad", "Banda languages"], ["bae", "Bar\xE9"], ["baf", "Nubaca"], ["bag", "Tuki"], ["bah", "Bahamas Creole English"], ["bai", "Bamileke languages"], ["baj", "Barakai"], ["bal", "Baluchi"], ["ban", "Balinese"], ["bao", "Waimaha"], ["bap", "Bantawa"], ["bar", "Bavarian"], ["bas", "Basa (Cameroon)"], ["bat", "Baltic languages"], ["bau", "Bada (Nigeria)"], ["bav", "Vengo"], ["baw", "Bambili-Bambui"], ["bax", "Bamun"], ["bay", "Batuley"], ["baz", "Tunen"], ["bba", "Baatonum"], ["bbb", "Barai"], ["bbc", "Batak Toba"], ["bbd", "Bau"], ["bbe", "Bangba"], ["bbf", "Baibai"], ["bbg", "Barama"], ["bbh", "Bugan"], ["bbi", "Barombi"], ["bbj", "Ghom\xE1l\xE1'"], ["bbk", "Babanki"], ["bbl", "Bats"], ["bbm", "Babango"], ["bbn", "Uneapa"], ["bbo", "Northern Bobo Madar\xE9, Konab\xE9r\xE9"], ["bbp", "West Central Banda"], ["bbq", "Bamali"], ["bbr", "Girawa"], ["bbs", "Bakpinka"], ["bbt", "Mburku"], ["bbu", "Kulung (Nigeria)"], ["bbv", "Karnai"], ["bbw", "Baba"], ["bbx", "Bubia"], ["bby", "Befang"], ["bbz", "Babalia Creole Arabic"], ["bca", "Central Bai"], ["bcb", "Bainouk-Samik"], ["bcc", "Southern Balochi"], ["bcd", "North Babar"], ["bce", "Bamenyam"], ["bcf", "Bamu"], ["bcg", "Baga Pokur"], ["bch", "Bariai"], ["bci", "Baoul\xE9"], ["bcj", "Bardi"], ["bck", "Bunuba"], ["bcl", "Central Bikol"], ["bcm", "Bannoni"], ["bcn", "Bali (Nigeria)"], ["bco", "Kaluli"], ["bcp", "Bali (Democratic Republic of Congo)"], ["bcq", "Bench"], ["bcr", "Babine"], ["bcs", "Kohumono"], ["bct", "Bendi"], ["bcu", "Awad Bing"], ["bcv", "Shoo-Minda-Nye"], ["bcw", "Bana"], ["bcy", "Bacama"], ["bcz", "Bainouk-Gunyaamolo"], ["bda", "Bayot"], ["bdb", "Basap"], ["bdc", "Ember\xE1-Baud\xF3"], ["bdd", "Bunama"], ["bde", "Bade"], ["bdf", "Biage"], ["bdg", "Bonggi"], ["bdh", "Baka (South Sudan)"], ["bdi", "Burun"], ["bdj", "Bai (South Sudan), Bai"], ["bdk", "Budukh"], ["bdl", "Indonesian Bajau"], ["bdm", "Buduma"], ["bdn", "Baldemu"], ["bdo", "Morom"], ["bdp", "Bende"], ["bdq", "Bahnar"], ["bdr", "West Coast Bajau"], ["bds", "Burunge"], ["bdt", "Bokoto"], ["bdu", "Oroko"], ["bdv", "Bodo Parja"], ["bdw", "Baham"], ["bdx", "Budong-Budong"], ["bdy", "Bandjalang"], ["bdz", "Badeshi"], ["bea", "Beaver"], ["beb", "Bebele"], ["bec", "Iceve-Maci"], ["bed", "Bedoanas"], ["bee", "Byangsi"], ["bef", "Benabena"], ["beg", "Belait"], ["beh", "Biali"], ["bei", "Bekati'"], ["bej", "Beja, Bedawiyet"], ["bek", "Bebeli"], ["bem", "Bemba (Zambia)"], ["beo", "Beami"], ["bep", "Besoa"], ["beq", "Beembe"], ["ber", "Berber languages"], ["bes", "Besme"], ["bet", "Guiberoua B\xE9te"], ["beu", "Blagar"], ["bev", "Daloa B\xE9t\xE9"], ["bew", "Betawi"], ["bex", "Jur Modo"], ["bey", "Beli (Papua New Guinea)"], ["bez", "Bena (Tanzania)"], ["bfa", "Bari"], ["bfb", "Pauri Bareli"], ["bfc", "Panyi Bai, Northern Bai"], ["bfd", "Bafut"], ["bfe", "Betaf, Tena"], ["bff", "Bofi"], ["bfg", "Busang Kayan"], ["bfh", "Blafe"], ["bfi", "British Sign Language"], ["bfj", "Bafanji"], ["bfk", "Ban Khor Sign Language"], ["bfl", "Banda-Nd\xE9l\xE9"], ["bfm", "Mmen"], ["bfn", "Bunak"], ["bfo", "Malba Birifor"], ["bfp", "Beba"], ["bfq", "Badaga"], ["bfr", "Bazigar"], ["bfs", "Southern Bai"], ["bft", "Balti"], ["bfu", "Gahri"], ["bfw", "Bondo"], ["bfx", "Bantayanon"], ["bfy", "Bagheli"], ["bfz", "Mahasu Pahari"], ["bga", "Gwamhi-Wuri"], ["bgb", "Bobongko"], ["bgc", "Haryanvi"], ["bgd", "Rathwi Bareli"], ["bge", "Bauria"], ["bgf", "Bangandu"], ["bgg", "Bugun"], ["bgi", "Giangan"], ["bgj", "Bangolan"], ["bgk", "Bit, Buxinhua"], ["bgl", "Bo (Laos)"], ["bgm", "Baga Mboteni"], ["bgn", "Western Balochi"], ["bgo", "Baga Koga"], ["bgp", "Eastern Balochi"], ["bgq", "Bagri"], ["bgr", "Bawm Chin"], ["bgs", "Tagabawa"], ["bgt", "Bughotu"], ["bgu", "Mbongno"], ["bgv", "Warkay-Bipim"], ["bgw", "Bhatri"], ["bgx", "Balkan Gagauz Turkish"], ["bgy", "Benggoi"], ["bgz", "Banggai"], ["bha", "Bharia"], ["bhb", "Bhili"], ["bhc", "Biga"], ["bhd", "Bhadrawahi"], ["bhe", "Bhaya"], ["bhf", "Odiai"], ["bhg", "Binandere"], ["bhh", "Bukharic"], ["bhi", "Bhilali"], ["bhj", "Bahing"], ["bhk", "Albay Bicolano"], ["bhl", "Bimin"], ["bhm", "Bathari"], ["bhn", "Bohtan Neo-Aramaic"], ["bho", "Bhojpuri"], ["bhp", "Bima"], ["bhq", "Tukang Besi South"], ["bhr", "Bara Malagasy"], ["bhs", "Buwal"], ["bht", "Bhattiyali"], ["bhu", "Bhunjia"], ["bhv", "Bahau"], ["bhw", "Biak"], ["bhx", "Bhalay"], ["bhy", "Bhele"], ["bhz", "Bada (Indonesia)"], ["bia", "Badimaya"], ["bib", "Bissa, Bisa"], ["bic", "Bikaru"], ["bid", "Bidiyo"], ["bie", "Bepour"], ["bif", "Biafada"], ["big", "Biangai"], ["bij", "Vaghat-Ya-Bijim-Legeri"], ["bik", "Bikol"], ["bil", "Bile"], ["bim", "Bimoba"], ["bin", "Bini, Edo"], ["bio", "Nai"], ["bip", "Bila"], ["biq", "Bipi"], ["bir", "Bisorio"], ["bit", "Berinomo"], ["biu", "Biete"], ["biv", "Southern Birifor"], ["biw", "Kol (Cameroon)"], ["bix", "Bijori"], ["biy", "Birhor"], ["biz", "Baloi"], ["bja", "Budza"], ["bjb", "Banggarla"], ["bjc", "Bariji"], ["bjd", "Bandjigali"], ["bje", "Biao-Jiao Mien"], ["bjf", "Barzani Jewish Neo-Aramaic"], ["bjg", "Bidyogo"], ["bjh", "Bahinemo"], ["bji", "Burji"], ["bjj", "Kanauji"], ["bjk", "Barok"], ["bjl", "Bulu (Papua New Guinea)"], ["bjm", "Bajelani"], ["bjn", "Banjar"], ["bjo", "Mid-Southern Banda"], ["bjp", "Fanamaket"], ["bjq", "Southern Betsimisaraka Malagasy"], ["bjr", "Binumarien"], ["bjs", "Bajan"], ["bjt", "Balanta-Ganja"], ["bju", "Busuu"], ["bjv", "Bedjond"], ["bjw", "Bakw\xE9"], ["bjx", "Banao Itneg"], ["bjy", "Bayali"], ["bjz", "Baruga"], ["bka", "Kyak"], ["bkb", "Finallig"], ["bkc", "Baka (Cameroon)"], ["bkd", "Binukid, Talaandig"], ["bkf", "Beeke"], ["bkg", "Buraka"], ["bkh", "Bakoko"], ["bki", "Baki"], ["bkj", "Pande"], ["bkk", "Brokskat"], ["bkl", "Berik"], ["bkm", "Kom (Cameroon)"], ["bkn", "Bukitan"], ["bko", "Kwa'"], ["bkp", "Boko (Democratic Republic of Congo)"], ["bkq", "Bakair\xED"], ["bkr", "Bakumpai"], ["bks", "Northern Sorsoganon"], ["bkt", "Boloki"], ["bku", "Buhid"], ["bkv", "Bekwarra"], ["bkw", "Bekwel"], ["bkx", "Baikeno"], ["bky", "Bokyi"], ["bkz", "Bungku"], ["bla", "Siksika"], ["blb", "Bilua"], ["blc", "Bella Coola"], ["bld", "Bolango"], ["ble", "Balanta-Kentohe"], ["blf", "Buol"], ["blg", "Balau"], ["blh", "Kuwaa"], ["bli", "Bolia"], ["blj", "Bolongan"], ["blk", "Pa'o Karen, Pa'O"], ["bll", "Biloxi"], ["blm", "Beli (South Sudan)"], ["bln", "Southern Catanduanes Bikol"], ["blo", "Anii"], ["blp", "Blablanga"], ["blq", "Baluan-Pam"], ["blr", "Blang"], ["bls", "Balaesang"], ["blt", "Tai Dam"], ["blv", "Kibala, Bolo"], ["blw", "Balangao"], ["blx", "Mag-Indi Ayta"], ["bly", "Notre"], ["blz", "Balantak"], ["bma", "Lame"], ["bmb", "Bembe"], ["bmc", "Biem"], ["bmd", "Baga Manduri"], ["bme", "Limassa"], ["bmf", "Bom-Kim"], ["bmg", "Bamwe"], ["bmh", "Kein"], ["bmi", "Bagirmi"], ["bmj", "Bote-Majhi"], ["bmk", "Ghayavi"], ["bml", "Bomboli"], ["bmm", "Northern Betsimisaraka Malagasy"], ["bmn", "Bina (Papua New Guinea)"], ["bmo", "Bambalang"], ["bmp", "Bulgebi"], ["bmq", "Bomu"], ["bmr", "Muinane"], ["bms", "Bilma Kanuri"], ["bmt", "Biao Mon"], ["bmu", "Somba-Siawari"], ["bmv", "Bum"], ["bmw", "Bomwali"], ["bmx", "Baimak"], ["bmy", "Bemba (Democratic Republic of Congo)"], ["bmz", "Baramu"], ["bna", "Bonerate"], ["bnb", "Bookan"], ["bnc", "Bontok"], ["bnd", "Banda (Indonesia)"], ["bne", "Bintauna"], ["bnf", "Masiwang"], ["bng", "Benga"], ["bni", "Bangi"], ["bnj", "Eastern Tawbuid"], ["bnk", "Bierebo"], ["bnl", "Boon"], ["bnm", "Batanga"], ["bnn", "Bunun"], ["bno", "Bantoanon"], ["bnp", "Bola"], ["bnq", "Bantik"], ["bnr", "Butmas-Tur"], ["bns", "Bundeli"], ["bnt", "Bantu languages"], ["bnu", "Bentong"], ["bnv", "Bonerif, Beneraf, Edwas"], ["bnw", "Bisis"], ["bnx", "Bangubangu"], ["bny", "Bintulu"], ["bnz", "Beezen"], ["boa", "Bora"], ["bob", "Aweer"], ["boe", "Mundabli"], ["bof", "Bolon"], ["bog", "Bamako Sign Language"], ["boh", "Boma"], ["boi", "Barbare\xF1o"], ["boj", "Anjam"], ["bok", "Bonjo"], ["bol", "Bole"], ["bom", "Berom"], ["bon", "Bine"], ["boo", "Tiemac\xE8w\xE8 Bozo"], ["bop", "Bonkiman"], ["boq", "Bogaya"], ["bor", "Bor\xF4ro"], ["bot", "Bongo"], ["bou", "Bondei"], ["bov", "Tuwuli"], ["bow", "Rema"], ["box", "Buamu"], ["boy", "Bodo (Central African Republic)"], ["boz", "Ti\xE9yaxo Bozo"], ["bpa", "Daakaka"], ["bpb", "Barbacoas"], ["bpd", "Banda-Banda"], ["bpe", "Bauni"], ["bpg", "Bonggo"], ["bph", "Botlikh"], ["bpi", "Bagupi"], ["bpj", "Binji"], ["bpk", "Orowe, '\xD4r\xF4\xEA"], ["bpl", "Broome Pearling Lugger Pidgin"], ["bpm", "Biyom"], ["bpn", "Dzao Min"], ["bpo", "Anasi"], ["bpp", "Kaure"], ["bpq", "Banda Malay"], ["bpr", "Koronadal Blaan"], ["bps", "Sarangani Blaan"], ["bpt", "Barrow Point"], ["bpu", "Bongu"], ["bpv", "Bian Marind"], ["bpw", "Bo (Papua New Guinea)"], ["bpx", "Palya Bareli"], ["bpy", "Bishnupriya"], ["bpz", "Bilba"], ["bqa", "Tchumbuli"], ["bqb", "Bagusa"], ["bqc", "Boko (Benin), Boo"], ["bqd", "Bung"], ["bqf", "Baga Kaloum"], ["bqg", "Bago-Kusuntu"], ["bqh", "Baima"], ["bqi", "Bakhtiari"], ["bqj", "Bandial"], ["bqk", "Banda-Mbr\xE8s"], ["bql", "Bilakura"], ["bqm", "Wumboko"], ["bqn", "Bulgarian Sign Language"], ["bqo", "Balo"], ["bqp", "Busa"], ["bqq", "Biritai"], ["bqr", "Burusu"], ["bqs", "Bosngun"], ["bqt", "Bamukumbit"], ["bqu", "Boguru"], ["bqv", "Koro Wachi, Begbere-Ejar"], ["bqw", "Buru (Nigeria)"], ["bqx", "Baangi"], ["bqy", "Bengkala Sign Language"], ["bqz", "Bakaka"], ["bra", "Braj"], ["brb", "Lave"], ["brc", "Berbice Creole Dutch"], ["brd", "Baraamu"], ["brf", "Bira"], ["brg", "Baure"], ["brh", "Brahui"], ["bri", "Mokpwe"], ["brj", "Bieria"], ["brk", "Birked"], ["brl", "Birwa"], ["brm", "Barambu"], ["brn", "Boruca"], ["bro", "Brokkat"], ["brp", "Barapasi"], ["brq", "Breri"], ["brr", "Birao"], ["brs", "Baras"], ["brt", "Bitare"], ["bru", "Eastern Bru"], ["brv", "Western Bru"], ["brw", "Bellari"], ["brx", "Bodo (India)"], ["bry", "Burui"], ["brz", "Bilbil"], ["bsa", "Abinomn"], ["bsb", "Brunei Bisaya"], ["bsc", "Bassari, Oniyan"], ["bse", "Wushi"], ["bsf", "Bauchi"], ["bsg", "Bashkardi"], ["bsh", "Kati"], ["bsi", "Bassossi"], ["bsj", "Bangwinji"], ["bsk", "Burushaski"], ["bsl", "Basa-Gumna"], ["bsm", "Busami"], ["bsn", "Barasana-Eduria"], ["bso", "Buso"], ["bsp", "Baga Sitemu"], ["bsq", "Bassa"], ["bsr", "Bassa-Kontagora"], ["bss", "Akoose"], ["bst", "Basketo"], ["bsu", "Bahonsuai"], ["bsv", "Baga Soban\xE9"], ["bsw", "Baiso"], ["bsx", "Yangkam"], ["bsy", "Sabah Bisaya"], ["bta", "Bata"], ["btb", "Beti (Cameroon)"], ["btc", "Bati (Cameroon)"], ["btd", "Batak Dairi"], ["bte", "Gamo-Ningi"], ["btf", "Birgit"], ["btg", "Gagnoa B\xE9t\xE9"], ["bth", "Biatah Bidayuh"], ["bti", "Burate"], ["btj", "Bacanese Malay"], ["btk", "Batak languages"], ["btl", "Bhatola"], ["btm", "Batak Mandailing"], ["btn", "Ratagnon"], ["bto", "Rinconada Bikol"], ["btp", "Budibud"], ["btq", "Batek"], ["btr", "Baetora"], ["bts", "Batak Simalungun"], ["btt", "Bete-Bendi"], ["btu", "Batu"], ["btv", "Bateri"], ["btw", "Butuanon"], ["btx", "Batak Karo"], ["bty", "Bobot"], ["btz", "Batak Alas-Kluet"], ["bua", "Buriat"], ["bub", "Bua"], ["buc", "Bushi"], ["bud", "Ntcham"], ["bue", "Beothuk"], ["buf", "Bushoong"], ["bug", "Buginese"], ["buh", "Younuo Bunu"], ["bui", "Bongili"], ["buj", "Basa-Gurmana"], ["buk", "Bugawac"], ["bum", "Bulu (Cameroon)"], ["bun", "Sherbro"], ["buo", "Terei"], ["bup", "Busoa"], ["buq", "Brem"], ["bus", "Bokobaru"], ["but", "Bungain"], ["buu", "Budu"], ["buv", "Bun"], ["buw", "Bubi"], ["bux", "Boghom"], ["buy", "Bullom So"], ["buz", "Bukwen"], ["bva", "Barein"], ["bvb", "Bube"], ["bvc", "Baelelea"], ["bvd", "Baeggu"], ["bve", "Berau Malay"], ["bvf", "Boor"], ["bvg", "Bonkeng"], ["bvh", "Bure"], ["bvi", "Belanda Viri"], ["bvj", "Baan"], ["bvk", "Bukat"], ["bvl", "Bolivian Sign Language"], ["bvm", "Bamunka"], ["bvn", "Buna"], ["bvo", "Bolgo"], ["bvp", "Bumang"], ["bvq", "Birri"], ["bvr", "Burarra"], ["bvt", "Bati (Indonesia)"], ["bvu", "Bukit Malay"], ["bvv", "Baniva"], ["bvw", "Boga"], ["bvx", "Dibole"], ["bvy", "Baybayanon"], ["bvz", "Bauzi"], ["bwa", "Bwatoo"], ["bwb", "Namosi-Naitasiri-Serua"], ["bwc", "Bwile"], ["bwd", "Bwaidoka"], ["bwe", "Bwe Karen"], ["bwf", "Boselewa"], ["bwg", "Barwe"], ["bwh", "Bishuo"], ["bwi", "Baniwa"], ["bwj", "L\xE1\xE1 L\xE1\xE1 Bwamu"], ["bwk", "Bauwaki"], ["bwl", "Bwela"], ["bwm", "Biwat"], ["bwn", "Wunai Bunu"], ["bwo", "Boro (Ethiopia), Borna (Ethiopia)"], ["bwp", "Mandobo Bawah"], ["bwq", "Southern Bobo Madar\xE9"], ["bwr", "Bura-Pabir"], ["bws", "Bomboma"], ["bwt", "Bafaw-Balong"], ["bwu", "Buli (Ghana)"], ["bww", "Bwa"], ["bwx", "Bu-Nao Bunu"], ["bwy", "Cwi Bwamu"], ["bwz", "Bwisi"], ["bxa", "Tairaha"], ["bxb", "Belanda Bor"], ["bxc", "Molengue"], ["bxd", "Pela"], ["bxe", "Birale"], ["bxf", "Bilur, Minigir"], ["bxg", "Bangala"], ["bxh", "Buhutu"], ["bxi", "Pirlatapa"], ["bxj", "Bayungu"], ["bxk", "Bukusu, Lubukusu"], ["bxl", "Jalkunan"], ["bxm", "Mongolia Buriat"], ["bxn", "Burduna"], ["bxo", "Barikanchi"], ["bxp", "Bebil"], ["bxq", "Beele"], ["bxr", "Russia Buriat"], ["bxs", "Busam"], ["bxu", "China Buriat"], ["bxv", "Berakou"], ["bxw", "Bankagooma"], ["bxx", "Borna (Democratic Republic of Congo)"], ["bxz", "Binahari"], ["bya", "Batak"], ["byb", "Bikya"], ["byc", "Ubaghara"], ["byd", "Benyadu'"], ["bye", "Pouye"], ["byf", "Bete"], ["byg", "Baygo"], ["byh", "Bhujel"], ["byi", "Buyu"], ["byj", "Bina (Nigeria)"], ["byk", "Biao"], ["byl", "Bayono"], ["bym", "Bidjara"], ["byn", "Bilin, Blin"], ["byo", "Biyo"], ["byp", "Bumaji"], ["byq", "Basay"], ["byr", "Baruya, Yipma"], ["bys", "Burak"], ["byt", "Berti"], ["byv", "Medumba"], ["byw", "Belhariya"], ["byx", "Qaqet"], ["byy", "Buya"], ["byz", "Banaro"], ["bza", "Bandi"], ["bzb", "Andio"], ["bzc", "Southern Betsimisaraka Malagasy"], ["bzd", "Bribri"], ["bze", "Jenaama Bozo"], ["bzf", "Boikin"], ["bzg", "Babuza"], ["bzh", "Mapos Buang"], ["bzi", "Bisu"], ["bzj", "Belize Kriol English"], ["bzk", "Nicaragua Creole English"], ["bzl", "Boano (Sulawesi)"], ["bzm", "Bolondo"], ["bzn", "Boano (Maluku)"], ["bzo", "Bozaba"], ["bzp", "Kemberano"], ["bzq", "Buli (Indonesia)"], ["bzr", "Biri"], ["bzs", "Brazilian Sign Language"], ["bzt", "Brithenig"], ["bzu", "Burmeso"], ["bzv", "Naami"], ["bzw", "Basa (Nigeria)"], ["bzx", "K\u025Bl\u025Bngaxo Bozo"], ["bzy", "Obanliku"], ["bzz", "Evant"], ["caa", "Chort\xED"], ["cab", "Garifuna"], ["cac", "Chuj"], ["cad", "Caddo"], ["cae", "Lehar, Laalaa"], ["caf", "Southern Carrier"], ["cag", "Nivacl\xE9"], ["cah", "Cahuarano"], ["cai", "Central American Indian languages"], ["caj", "Chan\xE9"], ["cak", "Kaqchikel, Cakchiquel"], ["cal", "Carolinian"], ["cam", "Cemuh\xEE"], ["can", "Chambri"], ["cao", "Ch\xE1cobo"], ["cap", "Chipaya"], ["caq", "Car Nicobarese"], ["car", "Galibi Carib"], ["cas", "Tsiman\xE9"], ["cau", "Caucasian languages"], ["cav", "Cavine\xF1a"], ["caw", "Callawalla"], ["cax", "Chiquitano"], ["cay", "Cayuga"], ["caz", "Canichana"], ["cba", "Chibchan languages"], ["cbb", "Cabiyar\xED"], ["cbc", "Carapana"], ["cbd", "Carijona"], ["cbe", "Chipiajes"], ["cbg", "Chimila"], ["cbh", "Cagua"], ["cbi", "Chachi"], ["cbj", "Ede Cabe"], ["cbk", "Chavacano"], ["cbl", "Bualkhaw Chin"], ["cbn", "Nyahkur"], ["cbo", "Izora"], ["cbq", "Tsucuba, Cuba"], ["cbr", "Cashibo-Cacataibo"], ["cbs", "Cashinahua"], ["cbt", "Chayahuita"], ["cbu", "Candoshi-Shapra"], ["cbv", "Cacua"], ["cbw", "Kinabalian"], ["cby", "Carabayo"], ["cca", "Cauca"], ["ccc", "Chamicuro"], ["ccd", "Cafundo Creole"], ["cce", "Chopi"], ["ccg", "Samba Daka"], ["cch", "Atsam"], ["ccj", "Kasanga"], ["ccl", "Cutchi-Swahili"], ["ccm", "Malaccan Creole Malay"], ["ccn", "North Caucasian languages"], ["cco", "Comaltepec Chinantec"], ["ccp", "Chakma"], ["ccq", "Chaungtha"], ["ccr", "Cacaopera"], ["ccs", "South Caucasian languages"], ["cda", "Choni"], ["cdc", "Chadic languages"], ["cdd", "Caddoan languages"], ["cde", "Chenchu"], ["cdf", "Chiru"], ["cdg", "Chamari"], ["cdh", "Chambeali"], ["cdi", "Chodri"], ["cdj", "Churahi"], ["cdm", "Chepang"], ["cdn", "Chaudangsi"], ["cdo", "Min Dong Chinese"], ["cdr", "Cinda-Regi-Tiyal"], ["cds", "Chadian Sign Language"], ["cdy", "Chadong"], ["cdz", "Koda"], ["cea", "Lower Chehalis"], ["ceb", "Cebuano"], ["ceg", "Chamacoco"], ["cek", "Eastern Khumi Chin"], ["cel", "Celtic languages"], ["cen", "Cen"], ["cet", "Cent\xFA\xFAm"], ["cey", "Ekai Chin"], ["cfa", "Dijim-Bwilim"], ["cfd", "Cara"], ["cfg", "Como Karim"], ["cfm", "Falam Chin"], ["cga", "Changriwa"], ["cgc", "Kagayanen"], ["cgg", "Chiga"], ["cgk", "Chocangacakha"], ["chb", "Chibcha"], ["chc", "Catawba"], ["chd", "Highland Oaxaca Chontal"], ["chf", "Tabasco Chontal"], ["chg", "Chagatai"], ["chh", "Chinook"], ["chj", "Ojitl\xE1n Chinantec"], ["chk", "Chuukese"], ["chl", "Cahuilla"], ["chm", "Mari (Russia)"], ["chn", "Chinook jargon"], ["cho", "Choctaw"], ["chp", "Chipewyan, Dene Suline"], ["chq", "Quiotepec Chinantec"], ["chr", "Cherokee"], ["cht", "Chol\xF3n"], ["chw", "Chuwabu"], ["chx", "Chantyal"], ["chy", "Cheyenne"], ["chz", "Ozumac\xEDn Chinantec"], ["cia", "Cia-Cia"], ["cib", "Ci Gbe"], ["cic", "Chickasaw"], ["cid", "Chimariko"], ["cie", "Cineni"], ["cih", "Chinali"], ["cik", "Chitkuli Kinnauri"], ["cim", "Cimbrian"], ["cin", "Cinta Larga"], ["cip", "Chiapanec"], ["cir", "Tiri, Ham\xE9a, M\xE9a"], ["ciw", "Chippewa"], ["ciy", "Chaima"], ["cja", "Western Cham"], ["cje", "Chru"], ["cjh", "Upper Chehalis"], ["cji", "Chamalal"], ["cjk", "Chokwe"], ["cjm", "Eastern Cham"], ["cjn", "Chenapian"], ["cjo", "Ash\xE9ninka Pajonal"], ["cjp", "Cab\xE9car"], ["cjr", "Chorotega"], ["cjs", "Shor"], ["cjv", "Chuave"], ["cjy", "Jinyu Chinese"], ["cka", "Khumi Awa Chin"], ["ckb", "Central Kurdish"], ["ckh", "Chak"], ["ckl", "Cibak"], ["ckm", "Chakavian"], ["ckn", "Kaang Chin"], ["cko", "Anufo"], ["ckq", "Kajakse"], ["ckr", "Kairak"], ["cks", "Tayo"], ["ckt", "Chukot"], ["cku", "Koasati"], ["ckv", "Kavalan"], ["ckx", "Caka"], ["cky", "Cakfem-Mushere"], ["ckz", "Cakchiquel-Quich\xE9 Mixed Language"], ["cla", "Ron"], ["clc", "Chilcotin"], ["cld", "Chaldean Neo-Aramaic"], ["cle", "Lealao Chinantec"], ["clh", "Chilisso"], ["cli", "Chakali"], ["clj", "Laitu Chin"], ["clk", "Idu-Mishmi"], ["cll", "Chala"], ["clm", "Clallam"], ["clo", "Lowland Oaxaca Chontal"], ["clt", "Lautu Chin"], ["clu", "Caluyanun"], ["clw", "Chulym"], ["cly", "Eastern Highland Chatino"], ["cma", "Maa"], ["cmc", "Chamic languages"], ["cme", "Cerma"], ["cmg", "Classical Mongolian"], ["cmi", "Ember\xE1-Cham\xED"], ["cmk", "Chimakum"], ["cml", "Campalagian"], ["cmm", "Michigamea"], ["cmn", "Mandarin Chinese"], ["cmo", "Central Mnong"], ["cmr", "Mro-Khimi Chin"], ["cms", "Messapic"], ["cmt", "Camtho"], ["cna", "Changthang"], ["cnb", "Chinbon Chin"], ["cnc", "C\xF4\xF4ng"], ["cng", "Northern Qiang"], ["cnh", "Hakha Chin, Haka Chin"], ["cni", "Ash\xE1ninka"], ["cnk", "Khumi Chin"], ["cnl", "Lalana Chinantec"], ["cno", "Con"], ["cnp", "Northern Ping Chinese, Northern Pinghua"], ["cnr", "Montenegrin"], ["cns", "Central Asmat"], ["cnt", "Tepetotutla Chinantec"], ["cnu", "Chenoua"], ["cnw", "Ngawn Chin"], ["cnx", "Middle Cornish"], ["coa", "Cocos Islands Malay"], ["cob", "Chicomuceltec"], ["coc", "Cocopa"], ["cod", "Cocama-Cocamilla"], ["coe", "Koreguaje"], ["cof", "Colorado"], ["cog", "Chong"], ["coh", "Chonyi-Dzihana-Kauma, Chichonyi-Chidzihana-Chikauma"], ["coj", "Cochimi"], ["cok", "Santa Teresa Cora"], ["col", "Columbia-Wenatchi"], ["com", "Comanche"], ["con", "Cof\xE1n"], ["coo", "Comox"], ["cop", "Coptic"], ["coq", "Coquille"], ["cot", "Caquinte"], ["cou", "Wamey"], ["cov", "Cao Miao"], ["cow", "Cowlitz"], ["cox", "Nanti"], ["coy", "Coyaima"], ["coz", "Chochotec"], ["cpa", "Palantla Chinantec"], ["cpb", "Ucayali-Yur\xFAa Ash\xE9ninka"], ["cpc", "Ajy\xEDninka Apurucayali"], ["cpe", "English-based creoles and pidgins"], ["cpf", "French-based creoles and pidgins"], ["cpg", "Cappadocian Greek"], ["cpi", "Chinese Pidgin English"], ["cpn", "Cherepon"], ["cpo", "Kpeego"], ["cpp", "Portuguese-based creoles and pidgins"], ["cps", "Capiznon"], ["cpu", "Pichis Ash\xE9ninka"], ["cpx", "Pu-Xian Chinese"], ["cpy", "South Ucayali Ash\xE9ninka"], ["cqd", "Chuanqiandian Cluster Miao"], ["cqu", "Chilean Quechua"], ["cra", "Chara"], ["crb", "Island Carib"], ["crc", "Lonwolwol"], ["crd", "Coeur d'Alene"], ["crf", "Caramanta"], ["crg", "Michif"], ["crh", "Crimean Tatar, Crimean Turkish"], ["cri", "S\xE3otomense"], ["crj", "Southern East Cree"], ["crk", "Plains Cree"], ["crl", "Northern East Cree"], ["crm", "Moose Cree"], ["crn", "El Nayar Cora"], ["cro", "Crow"], ["crp", "Creoles and pidgins"], ["crq", "Iyo'wujwa Chorote"], ["crr", "Carolina Algonquian"], ["crs", "Seselwa Creole French"], ["crt", "Iyojwa'ja Chorote"], ["crv", "Chaura"], ["crw", "Chrau"], ["crx", "Carrier"], ["cry", "Cori"], ["crz", "Cruze\xF1o"], ["csa", "Chiltepec Chinantec"], ["csb", "Kashubian"], ["csc", "Catalan Sign Language, Lengua de se\xF1as catalana, Llengua de Signes Catalana"], ["csd", "Chiangmai Sign Language"], ["cse", "Czech Sign Language"], ["csf", "Cuba Sign Language"], ["csg", "Chilean Sign Language"], ["csh", "Asho Chin"], ["csi", "Coast Miwok"], ["csj", "Songlai Chin"], ["csk", "Jola-Kasa"], ["csl", "Chinese Sign Language"], ["csm", "Central Sierra Miwok"], ["csn", "Colombian Sign Language"], ["cso", "Sochiapam Chinantec, Sochiapan Chinantec"], ["csp", "Southern Ping Chinese, Southern Pinghua"], ["csq", "Croatia Sign Language"], ["csr", "Costa Rican Sign Language"], ["css", "Southern Ohlone"], ["cst", "Northern Ohlone"], ["csu", "Central Sudanic languages"], ["csv", "Sumtu Chin"], ["csw", "Swampy Cree"], ["csx", "Cambodian Sign Language"], ["csy", "Siyin Chin"], ["csz", "Coos"], ["cta", "Tataltepec Chatino"], ["ctc", "Chetco"], ["ctd", "Tedim Chin"], ["cte", "Tepinapa Chinantec"], ["ctg", "Chittagonian"], ["cth", "Thaiphum Chin"], ["ctl", "Tlacoatzintepec Chinantec"], ["ctm", "Chitimacha"], ["ctn", "Chhintange"], ["cto", "Ember\xE1-Cat\xEDo"], ["ctp", "Western Highland Chatino"], ["cts", "Northern Catanduanes Bikol"], ["ctt", "Wayanad Chetti"], ["ctu", "Chol"], ["cty", "Moundadan Chetty"], ["ctz", "Zacatepec Chatino"], ["cua", "Cua"], ["cub", "Cubeo"], ["cuc", "Usila Chinantec"], ["cug", "Chungmboko, Cung"], ["cuh", "Chuka, Gichuka"], ["cui", "Cuiba"], ["cuj", "Mashco Piro"], ["cuk", "San Blas Kuna"], ["cul", "Culina, Kulina"], ["cum", "Cumeral"], ["cuo", "Cumanagoto"], ["cup", "Cupe\xF1o"], ["cuq", "Cun"], ["cur", "Chhulung"], ["cus", "Cushitic languages"], ["cut", "Teutila Cuicatec"], ["cuu", "Tai Ya"], ["cuv", "Cuvok"], ["cuw", "Chukwa"], ["cux", "Tepeuxila Cuicatec"], ["cuy", "Cuitlatec"], ["cvg", "Chug"], ["cvn", "Valle Nacional Chinantec"], ["cwa", "Kabwa"], ["cwb", "Maindo"], ["cwd", "Woods Cree"], ["cwe", "Kwere"], ["cwg", "Chewong, Cheq Wong"], ["cwt", "Kuwaataay"], ["cya", "Nopala Chatino"], ["cyb", "Cayubaba"], ["cyo", "Cuyonon"], ["czh", "Huizhou Chinese"], ["czk", "Knaanic"], ["czn", "Zenzontepec Chatino"], ["czo", "Min Zhong Chinese"], ["czt", "Zotung Chin"], ["daa", "Dangal\xE9at"], ["dac", "Dambi"], ["dad", "Marik"], ["dae", "Duupa"], ["daf", "Dan"], ["dag", "Dagbani"], ["dah", "Gwahatike"], ["dai", "Day"], ["daj", "Dar Fur Daju"], ["dak", "Dakota"], ["dal", "Dahalo"], ["dam", "Damakawa"], ["dao", "Daai Chin"], ["dap", "Nisi (India)"], ["daq", "Dandami Maria"], ["dar", "Dargwa"], ["das", "Daho-Doo"], ["dau", "Dar Sila Daju"], ["dav", "Taita, Dawida"], ["daw", "Davawenyo"], ["dax", "Dayi"], ["day", "Land Dayak languages"], ["daz", "Dao"], ["dba", "Bangime"], ["dbb", "Deno"], ["dbd", "Dadiya"], ["dbe", "Dabe"], ["dbf", "Edopi"], ["dbg", "Dogul Dom Dogon"], ["dbi", "Doka"], ["dbj", "Ida'an"], ["dbl", "Dyirbal"], ["dbm", "Duguri"], ["dbn", "Duriankere"], ["dbo", "Dulbu"], ["dbp", "Duwai"], ["dbq", "Daba"], ["dbr", "Dabarre"], ["dbt", "Ben Tey Dogon"], ["dbu", "Bondum Dom Dogon"], ["dbv", "Dungu"], ["dbw", "Bankan Tey Dogon"], ["dby", "Dibiyaso"], ["dcc", "Deccan"], ["dcr", "Negerhollands"], ["dda", "Dadi Dadi"], ["ddd", "Dongotono"], ["dde", "Doondo"], ["ddg", "Fataluku"], ["ddi", "West Goodenough"], ["ddj", "Jaru"], ["ddn", "Dendi (Benin)"], ["ddo", "Dido"], ["ddr", "Dhudhuroa"], ["dds", "Donno So Dogon"], ["ddw", "Dawera-Daweloor"], ["dec", "Dagik"], ["ded", "Dedua"], ["dee", "Dewoin"], ["def", "Dezfuli"], ["deg", "Degema"], ["deh", "Dehwari"], ["dei", "Demisa"], ["dek", "Dek"], ["del", "Delaware"], ["dem", "Dem"], ["den", "Slave (Athapascan)"], ["dep", "Pidgin Delaware"], ["deq", "Dendi (Central African Republic)"], ["der", "Deori"], ["des", "Desano"], ["dev", "Domung"], ["dez", "Dengese"], ["dga", "Southern Dagaare"], ["dgb", "Bunoge Dogon"], ["dgc", "Casiguran Dumagat Agta"], ["dgd", "Dagaari Dioula"], ["dge", "Degenan"], ["dgg", "Doga"], ["dgh", "Dghwede"], ["dgi", "Northern Dagara"], ["dgk", "Dagba"], ["dgl", "Andaandi, Dongolawi"], ["dgn", "Dagoman"], ["dgo", "Dogri (individual language)"], ["dgr", "Dogrib, T\u0142\u0131\u0328ch\u01EB"], ["dgs", "Dogoso"], ["dgt", "Ndra'ngith"], ["dgu", "Degaru"], ["dgw", "Daungwurrung"], ["dgx", "Doghoro"], ["dgz", "Daga"], ["dha", "Dhanwar (India)"], ["dhd", "Dhundari"], ["dhg", "Dhangu-Djangu, Dhangu, Djangu"], ["dhi", "Dhimal"], ["dhl", "Dhalandji"], ["dhm", "Zemba"], ["dhn", "Dhanki"], ["dho", "Dhodia"], ["dhr", "Dhargari"], ["dhs", "Dhaiso"], ["dhu", "Dhurga"], ["dhv", "Dehu, Drehu"], ["dhw", "Dhanwar (Nepal)"], ["dhx", "Dhungaloo"], ["dia", "Dia"], ["dib", "South Central Dinka"], ["dic", "Lakota Dida"], ["did", "Didinga"], ["dif", "Dieri, Diyari"], ["dig", "Digo, Chidigo"], ["dih", "Kumiai"], ["dii", "Dimbong"], ["dij", "Dai"], ["dik", "Southwestern Dinka"], ["dil", "Dilling"], ["dim", "Dime"], ["din", "Dinka"], ["dio", "Dibo"], ["dip", "Northeastern Dinka"], ["diq", "Dimli (individual language)"], ["dir", "Dirim"], ["dis", "Dimasa"], ["dit", "Dirari"], ["diu", "Diriku"], ["diw", "Northwestern Dinka"], ["dix", "Dixon Reef"], ["diy", "Diuwe"], ["diz", "Ding"], ["dja", "Djadjawurrung"], ["djb", "Djinba"], ["djc", "Dar Daju Daju"], ["djd", "Djamindjung, Ngaliwurru"], ["dje", "Zarma"], ["djf", "Djangun"], ["dji", "Djinang"], ["djj", "Djeebbana"], ["djk", "Eastern Maroon Creole, Businenge Tongo, Nenge"], ["djl", "Djiwarli"], ["djm", "Jamsay Dogon"], ["djn", "Jawoyn, Djauan"], ["djo", "Jangkang"], ["djr", "Djambarrpuyngu"], ["dju", "Kapriman"], ["djw", "Djawi"], ["dka", "Dakpakha"], ["dkg", "Kadung"], ["dkk", "Dakka"], ["dkl", "Kolum So Dogon"], ["dkr", "Kuijau"], ["dks", "Southeastern Dinka"], ["dkx", "Mazagway"], ["dlg", "Dolgan"], ["dlk", "Dahalik"], ["dlm", "Dalmatian"], ["dln", "Darlong"], ["dma", "Duma"], ["dmb", "Mombo Dogon"], ["dmc", "Gavak"], ["dmd", "Madhi Madhi"], ["dme", "Dugwor"], ["dmf", "Medefaidrin"], ["dmg", "Upper Kinabatangan"], ["dmk", "Domaaki"], ["dml", "Dameli"], ["dmm", "Dama"], ["dmn", "Mande languages"], ["dmo", "Kemedzung"], ["dmr", "East Damar"], ["dms", "Dampelas"], ["dmu", "Dubu, Tebi"], ["dmv", "Dumpas"], ["dmw", "Mudburra"], ["dmx", "Dema"], ["dmy", "Demta, Sowari"], ["dna", "Upper Grand Valley Dani"], ["dnd", "Daonda"], ["dne", "Ndendeule"], ["dng", "Dungan"], ["dni", "Lower Grand Valley Dani"], ["dnj", "Dan"], ["dnk", "Dengka"], ["dnn", "Dz\xF9\xF9ngoo"], ["dno", "Ndrulo, Northern Lendu"], ["dnr", "Danaru"], ["dnt", "Mid Grand Valley Dani"], ["dnu", "Danau"], ["dnv", "Danu"], ["dnw", "Western Dani"], ["dny", "Den\xED"], ["doa", "Dom"], ["dob", "Dobu"], ["doc", "Northern Dong"], ["doe", "Doe"], ["dof", "Domu"], ["doh", "Dong"], ["doi", "Dogri (macrolanguage)"], ["dok", "Dondo"], ["dol", "Doso"], ["don", "Toura (Papua New Guinea)"], ["doo", "Dongo"], ["dop", "Lukpa"], ["doq", "Dominican Sign Language"], ["dor", "Dori'o"], ["dos", "Dogos\xE9"], ["dot", "Dass"], ["dov", "Dombe"], ["dow", "Doyayo"], ["dox", "Bussa"], ["doy", "Dompo"], ["doz", "Dorze"], ["dpp", "Papar"], ["dra", "Dravidian languages"], ["drb", "Dair"], ["drc", "Minderico"], ["drd", "Darmiya"], ["dre", "Dolpo"], ["drg", "Rungus"], ["drh", "Darkhat"], ["dri", "C'Lela"], ["drl", "Paakantyi"], ["drn", "West Damar"], ["dro", "Daro-Matu Melanau"], ["drq", "Dura"], ["drr", "Dororo"], ["drs", "Gedeo"], ["drt", "Drents"], ["dru", "Rukai"], ["drw", "Darwazi"], ["dry", "Darai"], ["dsb", "Lower Sorbian"], ["dse", "Dutch Sign Language"], ["dsh", "Daasanach"], ["dsi", "Disa"], ["dsl", "Danish Sign Language"], ["dsn", "Dusner"], ["dso", "Desiya"], ["dsq", "Tadaksahak"], ["dta", "Daur"], ["dtb", "Labuk-Kinabatangan Kadazan"], ["dtd", "Ditidaht"], ["dth", "Adithinngithigh"], ["dti", "Ana Tinga Dogon"], ["dtk", "Tene Kan Dogon"], ["dtm", "Tomo Kan Dogon"], ["dtn", "Daats\u02BC\xEDin"], ["dto", "Tommo So Dogon"], ["dtp", "Kadazan Dusun, Central Dusun"], ["dtr", "Lotud"], ["dts", "Toro So Dogon"], ["dtt", "Toro Tegu Dogon"], ["dtu", "Tebul Ure Dogon"], ["dty", "Dotyali"], ["dua", "Duala"], ["dub", "Dubli"], ["duc", "Duna"], ["dud", "Hun-Saare"], ["due", "Umiray Dumaget Agta"], ["duf", "Dumbea, Drubea"], ["dug", "Duruma, Chiduruma"], ["duh", "Dungra Bhil"], ["dui", "Dumun"], ["duj", "Dhuwal"], ["duk", "Uyajitaya"], ["dul", "Alabat Island Agta"], ["dum", "Middle Dutch (ca. 1050-1350)"], ["dun", "Dusun Deyah"], ["duo", "Dupaninan Agta"], ["dup", "Duano"], ["duq", "Dusun Malang"], ["dur", "Dii"], ["dus", "Dumi"], ["duu", "Drung"], ["duv", "Duvle"], ["duw", "Dusun Witu"], ["dux", "Duungooma"], ["duy", "Dicamay Agta"], ["duz", "Duli-Gey"], ["dva", "Duau"], ["dwa", "Diri"], ["dwk", "Dawik Kui"], ["dwl", "Walo Kumbe Dogon"], ["dwr", "Dawro"], ["dws", "Dutton World Speedwords"], ["dwu", "Dhuwal"], ["dww", "Dawawa"], ["dwy", "Dhuwaya"], ["dwz", "Dewas Rai"], ["dya", "Dyan"], ["dyb", "Dyaberdyaber"], ["dyd", "Dyugun"], ["dyg", "Villa Viciosa Agta"], ["dyi", "Djimini Senoufo"], ["dym", "Yanda Dom Dogon"], ["dyn", "Dyangadi, Dhanggatti"], ["dyo", "Jola-Fonyi"], ["dyu", "Dyula"], ["dyy", "Djabugay, Dyaabugay"], ["dza", "Tunzu"], ["dzd", "Daza"], ["dze", "Djiwarli"], ["dzg", "Dazaga"], ["dzl", "Dzalakha"], ["dzn", "Dzando"], ["eaa", "Karenggapa"], ["ebc", "Beginci"], ["ebg", "Ebughu"], ["ebk", "Eastern Bontok"], ["ebo", "Teke-Ebo"], ["ebr", "Ebri\xE9"], ["ebu", "Embu, Kiembu"], ["ecr", "Eteocretan"], ["ecs", "Ecuadorian Sign Language"], ["ecy", "Eteocypriot"], ["eee", "E"], ["efa", "Efai"], ["efe", "Efe"], ["efi", "Efik"], ["ega", "Ega"], ["egl", "Emilian"], ["ego", "Eggon"], ["egx", "Egyptian languages"], ["egy", "Egyptian (Ancient)"], ["ehs", "Miyakubo Sign Language"], ["ehu", "Ehueun"], ["eip", "Eipomek"], ["eit", "Eitiep"], ["eiv", "Askopan"], ["eja", "Ejamat"], ["eka", "Ekajuk"], ["ekc", "Eastern Karnic"], ["eke", "Ekit"], ["ekg", "Ekari"], ["eki", "Eki"], ["ekk", "Standard Estonian"], ["ekl", "Kol (Bangladesh), Kol"], ["ekm", "Elip"], ["eko", "Koti"], ["ekp", "Ekpeye"], ["ekr", "Yace"], ["eky", "Eastern Kayah"], ["ele", "Elepi"], ["elh", "El Hugeirat"], ["eli", "Nding"], ["elk", "Elkei"], ["elm", "Eleme"], ["elo", "El Molo"], ["elp", "Elpaputih"], ["elu", "Elu"], ["elx", "Elamite"], ["ema", "Emai-Iuleha-Ora"], ["emb", "Embaloh"], ["eme", "Emerillon"], ["emg", "Eastern Meohang"], ["emi", "Mussau-Emira"], ["emk", "Eastern Maninkakan"], ["emm", "Mamulique"], ["emn", "Eman"], ["emo", "Emok"], ["emp", "Northern Ember\xE1"], ["emq", "Eastern Minyag"], ["ems", "Pacific Gulf Yupik"], ["emu", "Eastern Muria"], ["emw", "Emplawas"], ["emx", "Erromintxela"], ["emy", "Epigraphic Mayan"], ["emz", "Mbessa"], ["ena", "Apali"], ["enb", "Markweeta"], ["enc", "En"], ["end", "Ende"], ["enf", "Forest Enets"], ["enh", "Tundra Enets"], ["enl", "Enlhet"], ["enm", "Middle English (1100-1500)"], ["enn", "Engenni"], ["eno", "Enggano"], ["enq", "Enga"], ["enr", "Emumu, Emem"], ["enu", "Enu"], ["env", "Enwan (Edu State)"], ["enw", "Enwan (Akwa Ibom State)"], ["enx", "Enxet"], ["eot", "Beti (C\xF4te d'Ivoire)"], ["epi", "Epie"], ["era", "Eravallan"], ["erg", "Sie"], ["erh", "Eruwa"], ["eri", "Ogea"], ["erk", "South Efate"], ["ero", "Horpa"], ["err", "Erre"], ["ers", "Ersu"], ["ert", "Eritai"], ["erw", "Erokwanas"], ["ese", "Ese Ejja"], ["esg", "Aheri Gondi"], ["esh", "Eshtehardi"], ["esi", "North Alaskan Inupiatun"], ["esk", "Northwest Alaska Inupiatun"], ["esl", "Egypt Sign Language"], ["esm", "Esuma"], ["esn", "Salvadoran Sign Language"], ["eso", "Estonian Sign Language"], ["esq", "Esselen"], ["ess", "Central Siberian Yupik"], ["esu", "Central Yupik"], ["esx", "Eskimo-Aleut languages"], ["esy", "Eskayan"], ["etb", "Etebi"], ["etc", "Etchemin"], ["eth", "Ethiopian Sign Language"], ["etn", "Eton (Vanuatu)"], ["eto", "Eton (Cameroon)"], ["etr", "Edolo"], ["ets", "Yekhee"], ["ett", "Etruscan"], ["etu", "Ejagham"], ["etx", "Eten"], ["etz", "Semimi"], ["euq", "Basque (family)"], ["eve", "Even"], ["evh", "Uvbie"], ["evn", "Evenki"], ["ewo", "Ewondo"], ["ext", "Extremaduran"], ["eya", "Eyak"], ["eyo", "Keiyo"], ["eza", "Ezaa"], ["eze", "Uzekwe"], ["faa", "Fasu"], ["fab", "Fa d'Ambu"], ["fad", "Wagi"], ["faf", "Fagani"], ["fag", "Finongan"], ["fah", "Baissa Fali"], ["fai", "Faiwol"], ["faj", "Faita"], ["fak", "Fang (Cameroon)"], ["fal", "South Fali"], ["fam", "Fam"], ["fan", "Fang (Equatorial Guinea)"], ["fap", "Paloor"], ["far", "Fataleka"], ["fat", "Fanti"], ["fau", "Fayu"], ["fax", "Fala"], ["fay", "Southwestern Fars"], ["faz", "Northwestern Fars"], ["fbl", "West Albay Bikol"], ["fcs", "Quebec Sign Language"], ["fer", "Feroge"], ["ffi", "Foia Foia"], ["ffm", "Maasina Fulfulde"], ["fgr", "Fongoro"], ["fia", "Nobiin"], ["fie", "Fyer"], ["fif", "Faifi"], ["fil", "Filipino, Pilipino"], ["fip", "Fipa"], ["fir", "Firan"], ["fit", "Tornedalen Finnish"], ["fiu", "Finno-Ugrian languages"], ["fiw", "Fiwaga"], ["fkk", "Kirya-Konz\u0259l"], ["fkv", "Kven Finnish"], ["fla", "Kalispel-Pend d'Oreille"], ["flh", "Foau"], ["fli", "Fali"], ["fll", "North Fali"], ["fln", "Flinders Island"], ["flr", "Fuliiru"], ["fly", "Flaaitaal, Tsotsitaal"], ["fmp", "Fe'fe'"], ["fmu", "Far Western Muria"], ["fnb", "Fanbak"], ["fng", "Fanagalo"], ["fni", "Fania"], ["fod", "Foodo"], ["foi", "Foi"], ["fom", "Foma"], ["fon", "Fon"], ["for", "Fore"], ["fos", "Siraya"], ["fox", "Formosan languages"], ["fpe", "Fernando Po Creole English"], ["fqs", "Fas"], ["frc", "Cajun French"], ["frd", "Fordata"], ["frk", "Frankish"], ["frm", "Middle French (ca. 1400-1600)"], ["fro", "Old French (842-ca. 1400)"], ["frp", "Arpitan, Francoproven\xE7al"], ["frq", "Forak"], ["frr", "Northern Frisian"], ["frs", "Eastern Frisian"], ["frt", "Fortsenal"], ["fse", "Finnish Sign Language"], ["fsl", "French Sign Language"], ["fss", "Finland-Swedish Sign Language, finlandssvenskt teckenspr\xE5k, suomenruotsalainen viittomakieli"], ["fub", "Adamawa Fulfulde"], ["fuc", "Pulaar"], ["fud", "East Futuna"], ["fue", "Borgu Fulfulde"], ["fuf", "Pular"], ["fuh", "Western Niger Fulfulde"], ["fui", "Bagirmi Fulfulde"], ["fuj", "Ko"], ["fum", "Fum"], ["fun", "Fulni\xF4"], ["fuq", "Central-Eastern Niger Fulfulde"], ["fur", "Friulian"], ["fut", "Futuna-Aniwa"], ["fuu", "Furu"], ["fuv", "Nigerian Fulfulde"], ["fuy", "Fuyug"], ["fvr", "Fur"], ["fwa", "Fw\xE2i"], ["fwe", "Fwe"], ["gaa", "Ga"], ["gab", "Gabri"], ["gac", "Mixed Great Andamanese"], ["gad", "Gaddang"], ["gae", "Guarequena"], ["gaf", "Gende"], ["gag", "Gagauz"], ["gah", "Alekano"], ["gai", "Borei"], ["gaj", "Gadsup"], ["gak", "Gamkonora"], ["gal", "Galolen"], ["gam", "Kandawo"], ["gan", "Gan Chinese"], ["gao", "Gants"], ["gap", "Gal"], ["gaq", "Gata'"], ["gar", "Galeya"], ["gas", "Adiwasi Garasia"], ["gat", "Kenati"], ["gau", "Mudhili Gadaba"], ["gav", "Gabutamon"], ["gaw", "Nobonob"], ["gax", "Borana-Arsi-Guji Oromo"], ["gay", "Gayo"], ["gaz", "West Central Oromo"], ["gba", "Gbaya (Central African Republic)"], ["gbb", "Kaytetye"], ["gbc", "Garawa"], ["gbd", "Karajarri"], ["gbe", "Niksek"], ["gbf", "Gaikundi"], ["gbg", "Gbanziri"], ["gbh", "Defi Gbe"], ["gbi", "Galela"], ["gbj", "Bodo Gadaba"], ["gbk", "Gaddi"], ["gbl", "Gamit"], ["gbm", "Garhwali"], ["gbn", "Mo'da"], ["gbo", "Northern Grebo"], ["gbp", "Gbaya-Bossangoa"], ["gbq", "Gbaya-Bozoum"], ["gbr", "Gbagyi"], ["gbs", "Gbesi Gbe"], ["gbu", "Gagadu"], ["gbv", "Gbanu"], ["gbw", "Gabi-Gabi"], ["gbx", "Eastern Xwla Gbe"], ["gby", "Gbari"], ["gbz", "Zoroastrian Dari"], ["gcc", "Mali"], ["gcd", "Ganggalida"], ["gce", "Galice"], ["gcf", "Guadeloupean Creole French"], ["gcl", "Grenadian Creole English"], ["gcn", "Gaina"], ["gcr", "Guianese Creole French"], ["gct", "Colonia Tovar German"], ["gda", "Gade Lohar"], ["gdb", "Pottangi Ollar Gadaba"], ["gdc", "Gugu Badhun"], ["gdd", "Gedaged"], ["gde", "Gude"], ["gdf", "Guduf-Gava"], ["gdg", "Ga'dang"], ["gdh", "Gadjerawang, Gajirrabeng"], ["gdi", "Gundi"], ["gdj", "Gurdjar"], ["gdk", "Gadang"], ["gdl", "Dirasha"], ["gdm", "Laal"], ["gdn", "Umanakaina"], ["gdo", "Ghodoberi"], ["gdq", "Mehri"], ["gdr", "Wipi"], ["gds", "Ghandruk Sign Language"], ["gdt", "Kungardutyi"], ["gdu", "Gudu"], ["gdx", "Godwari"], ["gea", "Geruma"], ["geb", "Kire"], ["gec", "Gboloo Grebo"], ["ged", "Gade"], ["gef", "Gerai"], ["geg", "Gengle"], ["geh", "Hutterite German, Hutterisch"], ["gei", "Gebe"], ["gej", "Gen"], ["gek", "Ywom"], ["gel", "ut-Ma'in"], ["gem", "Germanic languages"], ["geq", "Geme"], ["ges", "Geser-Gorom"], ["gev", "Eviya"], ["gew", "Gera"], ["gex", "Garre"], ["gey", "Enya"], ["gez", "Geez"], ["gfk", "Patpatar"], ["gft", "Gafat"], ["gfx", "Mangetti Dune \u01C3Xung"], ["gga", "Gao"], ["ggb", "Gbii"], ["ggd", "Gugadj"], ["gge", "Gurr-goni"], ["ggg", "Gurgula"], ["ggk", "Kungarakany"], ["ggl", "Ganglau"], ["ggn", "Eastern Gurung"], ["ggo", "Southern Gondi"], ["ggr", "Aghu Tharnggalu"], ["ggt", "Gitua"], ["ggu", "Gagu, Gban"], ["ggw", "Gogodala"], ["gha", "Ghadam\xE8s"], ["ghc", "Hiberno-Scottish Gaelic"], ["ghe", "Southern Ghale"], ["ghh", "Northern Ghale"], ["ghk", "Geko Karen"], ["ghl", "Ghulfan"], ["ghn", "Ghanongga"], ["gho", "Ghomara"], ["ghr", "Ghera"], ["ghs", "Guhu-Samane"], ["ght", "Kuke, Kutang Ghale"], ["gia", "Kija"], ["gib", "Gibanawa"], ["gic", "Gail"], ["gid", "Gidar"], ["gie", "Ga\u0253ogbo, Gu\xE9bie"], ["gig", "Goaria"], ["gih", "Githabul"], ["gii", "Girirra"], ["gil", "Gilbertese"], ["gim", "Gimi (Eastern Highlands)"], ["gin", "Hinukh"], ["gio", "Gelao"], ["gip", "Gimi (West New Britain)"], ["giq", "Green Gelao"], ["gir", "Red Gelao"], ["gis", "North Giziga"], ["git", "Gitxsan"], ["giu", "Mulao"], ["giw", "White Gelao"], ["gix", "Gilima"], ["giy", "Giyug"], ["giz", "South Giziga"], ["gji", "Geji"], ["gjk", "Kachi Koli"], ["gjm", "Gunditjmara"], ["gjn", "Gonja"], ["gjr", "Gurindji Kriol"], ["gju", "Gujari"], ["gka", "Guya"], ["gkd", "Mag\u0268 (Madang Province)"], ["gke", "Ndai"], ["gkn", "Gokana"], ["gko", "Kok-Nar"], ["gkp", "Guinea Kpelle"], ["gku", "\u01C2Ungkue"], ["glb", "Belning"], ["glc", "Bon Gula"], ["gld", "Nanai"], ["glh", "Northwest Pashai, Northwest Pashayi"], ["gli", "Guliguli"], ["glj", "Gula Iro"], ["glk", "Gilaki"], ["gll", "Garlali"], ["glo", "Galambu"], ["glr", "Glaro-Twabo"], ["glu", "Gula (Chad)"], ["glw", "Glavda"], ["gly", "Gule"], ["gma", "Gambera"], ["gmb", "Gula'alaa"], ["gmd", "M\xE1ghd\xEC"], ["gme", "East Germanic languages"], ["gmg", "Mag\u0268yi"], ["gmh", "Middle High German (ca. 1050-1500)"], ["gml", "Middle Low German"], ["gmm", "Gbaya-Mbodomo"], ["gmn", "Gimnime"], ["gmq", "North Germanic languages"], ["gmr", "Mirning, Mirniny"], ["gmu", "Gumalu"], ["gmv", "Gamo"], ["gmw", "West Germanic languages"], ["gmx", "Magoma"], ["gmy", "Mycenaean Greek"], ["gmz", "Mgbolizhia"], ["gna", "Kaansa"], ["gnb", "Gangte"], ["gnc", "Guanche"], ["gnd", "Zulgo-Gemzek"], ["gne", "Ganang"], ["gng", "Ngangam"], ["gnh", "Lere"], ["gni", "Gooniyandi"], ["gnj", "Ngen"], ["gnk", "\u01C1Gana"], ["gnl", "Gangulu"], ["gnm", "Ginuman"], ["gnn", "Gumatj"], ["gno", "Northern Gondi"], ["gnq", "Gana"], ["gnr", "Gureng Gureng"], ["gnt", "Guntai"], ["gnu", "Gnau"], ["gnw", "Western Bolivian Guaran\xED"], ["gnz", "Ganzi"], ["goa", "Guro"], ["gob", "Playero"], ["goc", "Gorakor"], ["god", "Godi\xE9"], ["goe", "Gongduk"], ["gof", "Gofa"], ["gog", "Gogo"], ["goh", "Old High German (ca. 750-1050)"], ["goi", "Gobasi"], ["goj", "Gowlan"], ["gok", "Gowli"], ["gol", "Gola"], ["gom", "Goan Konkani"], ["gon", "Gondi"], ["goo", "Gone Dau"], ["gop", "Yeretuar"], ["goq", "Gorap"], ["gor", "Gorontalo"], ["gos", "Gronings"], ["got", "Gothic"], ["gou", "Gavar"], ["gow", "Gorowa"], ["gox", "Gobu"], ["goy", "Goundo"], ["goz", "Gozarkhani"], ["gpa", "Gupa-Abawa"], ["gpe", "Ghanaian Pidgin English"], ["gpn", "Taiap"], ["gqa", "Ga'anda"], ["gqi", "Guiqiong"], ["gqn", "Guana (Brazil)"], ["gqr", "Gor"], ["gqu", "Qau"], ["gra", "Rajput Garasia"], ["grb", "Grebo"], ["grc", "Ancient Greek (to 1453)"], ["grd", "Guruntum-Mbaaru"], ["grg", "Madi"], ["grh", "Gbiri-Niragu"], ["gri", "Ghari"], ["grj", "Southern Grebo"], ["grk", "Greek languages"], ["grm", "Kota Marudu Talantang"], ["gro", "Groma"], ["grq", "Gorovu"], ["grr", "Taznatit"], ["grs", "Gresi"], ["grt", "Garo"], ["gru", "Kistane"], ["grv", "Central Grebo"], ["grw", "Gweda"], ["grx", "Guriaso"], ["gry", "Barclayville Grebo"], ["grz", "Guramalum"], ["gse", "Ghanaian Sign Language"], ["gsg", "German Sign Language"], ["gsl", "Gusilay"], ["gsm", "Guatemalan Sign Language"], ["gsn", "Nema, Gusan"], ["gso", "Southwest Gbaya"], ["gsp", "Wasembo"], ["gss", "Greek Sign Language"], ["gsw", "Swiss German, Alemannic, Alsatian"], ["gta", "Guat\xF3"], ["gti", "Gbati-ri"], ["gtu", "Aghu-Tharnggala"], ["gua", "Shiki"], ["gub", "Guajaj\xE1ra"], ["guc", "Wayuu"], ["gud", "Yocobou\xE9 Dida"], ["gue", "Gurindji"], ["guf", "Gupapuyngu"], ["gug", "Paraguayan Guaran\xED"], ["guh", "Guahibo"], ["gui", "Eastern Bolivian Guaran\xED"], ["guk", "Gumuz"], ["gul", "Sea Island Creole English"], ["gum", "Guambiano"], ["gun", "Mby\xE1 Guaran\xED"], ["guo", "Guayabero"], ["gup", "Gunwinggu"], ["guq", "Ach\xE9"], ["gur", "Farefare"], ["gus", "Guinean Sign Language"], ["gut", "Mal\xE9ku Ja\xEDka"], ["guu", "Yanomam\xF6"], ["guv", "Gey"], ["guw", "Gun"], ["gux", "Gourmanch\xE9ma"], ["guz", "Gusii, Ekegusii"], ["gva", "Guana (Paraguay)"], ["gvc", "Guanano"], ["gve", "Duwet"], ["gvf", "Golin"], ["gvj", "Guaj\xE1"], ["gvl", "Gulay"], ["gvm", "Gurmana"], ["gvn", "Kuku-Yalanji"], ["gvo", "Gavi\xE3o Do Jiparan\xE1"], ["gvp", "Par\xE1 Gavi\xE3o"], ["gvr", "Gurung"], ["gvs", "Gumawana"], ["gvy", "Guyani"], ["gwa", "Mbato"], ["gwb", "Gwa"], ["gwc", "Gawri, Kalami"], ["gwd", "Gawwada"], ["gwe", "Gweno"], ["gwf", "Gowro"], ["gwg", "Moo"], ["gwi", "Gwich\u02BCin"], ["gwj", "\u01C0Gwi"], ["gwm", "Awngthim"], ["gwn", "Gwandara"], ["gwr", "Gwere"], ["gwt", "Gawar-Bati"], ["gwu", "Guwamu"], ["gww", "Kwini"], ["gwx", "Gua"], ["gxx", "W\xE8 Southern"], ["gya", "Northwest Gbaya"], ["gyb", "Garus"], ["gyd", "Kayardild"], ["gye", "Gyem"], ["gyf", "Gungabula"], ["gyg", "Gbayi"], ["gyi", "Gyele"], ["gyl", "Gayil"], ["gym", "Ng\xE4bere"], ["gyn", "Guyanese Creole English"], ["gyo", "Gyalsumdo"], ["gyr", "Guarayu"], ["gyy", "Gunya"], ["gyz", "Geji, Gyaazi"], ["gza", "Ganza"], ["gzi", "Gazi"], ["gzn", "Gane"], ["haa", "Han"], ["hab", "Hanoi Sign Language"], ["hac", "Gurani"], ["had", "Hatam"], ["hae", "Eastern Oromo"], ["haf", "Haiphong Sign Language"], ["hag", "Hanga"], ["hah", "Hahon"], ["hai", "Haida"], ["haj", "Hajong"], ["hak", "Hakka Chinese"], ["hal", "Halang"], ["ham", "Hewa"], ["han", "Hangaza"], ["hao", "Hak\xF6"], ["hap", "Hupla"], ["haq", "Ha"], ["har", "Harari"], ["has", "Haisla"], ["hav", "Havu"], ["haw", "Hawaiian"], ["hax", "Southern Haida"], ["hay", "Haya"], ["haz", "Hazaragi"], ["hba", "Hamba"], ["hbb", "Huba"], ["hbn", "Heiban"], ["hbo", "Ancient Hebrew"], ["hbu", "Habu"], ["hca", "Andaman Creole Hindi"], ["hch", "Huichol"], ["hdn", "Northern Haida"], ["hds", "Honduras Sign Language"], ["hdy", "Hadiyya"], ["hea", "Northern Qiandong Miao"], ["hed", "Herd\xE9"], ["heg", "Helong"], ["heh", "Hehe"], ["hei", "Heiltsuk"], ["hem", "Hemba"], ["hgm", "Hai\u01C1om"], ["hgw", "Haigwai"], ["hhi", "Hoia Hoia"], ["hhr", "Kerak"], ["hhy", "Hoyahoya"], ["hia", "Lamang"], ["hib", "Hibito"], ["hid", "Hidatsa"], ["hif", "Fiji Hindi"], ["hig", "Kamwe"], ["hih", "Pamosu"], ["hii", "Hinduri"], ["hij", "Hijuk"], ["hik", "Seit-Kaitetu"], ["hil", "Hiligaynon"], ["him", "Himachali languages, Western Pahari languages"], ["hio", "Tsoa"], ["hir", "Himarim\xE3"], ["hit", "Hittite"], ["hiw", "Hiw"], ["hix", "Hixkary\xE1na"], ["hji", "Haji"], ["hka", "Kahe"], ["hke", "Hunde"], ["hkh", "Khah, Poguli"], ["hkk", "Hunjara-Kaina Ke"], ["hkn", "Mel-Khaonh"], ["hks", "Hong Kong Sign Language, Heung Kong Sau Yue"], ["hla", "Halia"], ["hlb", "Halbi"], ["hld", "Halang Doan"], ["hle", "Hlersu"], ["hlt", "Matu Chin"], ["hlu", "Hieroglyphic Luwian"], ["hma", "Southern Mashan Hmong, Southern Mashan Miao"], ["hmb", "Humburi Senni Songhay"], ["hmc", "Central Huishui Hmong, Central Huishui Miao"], ["hmd", "Large Flowery Miao, A-hmaos, Da-Hua Miao"], ["hme", "Eastern Huishui Hmong, Eastern Huishui Miao"], ["hmf", "Hmong Don"], ["hmg", "Southwestern Guiyang Hmong"], ["hmh", "Southwestern Huishui Hmong, Southwestern Huishui Miao"], ["hmi", "Northern Huishui Hmong, Northern Huishui Miao"], ["hmj", "Ge, Gejia"], ["hmk", "Maek"], ["hml", "Luopohe Hmong, Luopohe Miao"], ["hmm", "Central Mashan Hmong, Central Mashan Miao"], ["hmn", "Hmong, Mong"], ["hmp", "Northern Mashan Hmong, Northern Mashan Miao"], ["hmq", "Eastern Qiandong Miao"], ["hmr", "Hmar"], ["hms", "Southern Qiandong Miao"], ["hmt", "Hamtai"], ["hmu", "Hamap"], ["hmv", "Hmong D\xF4"], ["hmw", "Western Mashan Hmong, Western Mashan Miao"], ["hmx", "Hmong-Mien languages"], ["hmy", "Southern Guiyang Hmong, Southern Guiyang Miao"], ["hmz", "Hmong Shua, Sinicized Miao"], ["hna", "Mina (Cameroon)"], ["hnd", "Southern Hindko"], ["hne", "Chhattisgarhi"], ["hng", "Hungu"], ["hnh", "\u01C1Ani"], ["hni", "Hani"], ["hnj", "Hmong Njua, Mong Leng, Mong Njua"], ["hnn", "Hanunoo"], ["hno", "Northern Hindko"], ["hns", "Caribbean Hindustani"], ["hnu", "Hung"], ["hoa", "Hoava"], ["hob", "Mari (Madang Province)"], ["hoc", "Ho"], ["hod", "Holma"], ["hoe", "Horom"], ["hoh", "Hoby\xF3t"], ["hoi", "Holikachuk"], ["hoj", "Hadothi, Haroti"], ["hok", "Hokan languages"], ["hol", "Holu"], ["hom", "Homa"], ["hoo", "Holoholo"], ["hop", "Hopi"], ["hor", "Horo"], ["hos", "Ho Chi Minh City Sign Language"], ["hot", "Hote, Mal\xEA"], ["hov", "Hovongan"], ["how", "Honi"], ["hoy", "Holiya"], ["hoz", "Hozo"], ["hpo", "Hpon"], ["hps", "Hawai'i Sign Language (HSL), Hawai'i Pidgin Sign Language"], ["hra", "Hrangkhol"], ["hrc", "Niwer Mil"], ["hre", "Hre"], ["hrk", "Haruku"], ["hrm", "Horned Miao"], ["hro", "Haroi"], ["hrp", "Nhirrpi"], ["hrr", "Horuru"], ["hrt", "H\xE9rtevin"], ["hru", "Hruso"], ["hrw", "Warwar Feni"], ["hrx", "Hunsrik"], ["hrz", "Harzani"], ["hsb", "Upper Sorbian"], ["hsh", "Hungarian Sign Language"], ["hsl", "Hausa Sign Language"], ["hsn", "Xiang Chinese"], ["hss", "Harsusi"], ["hti", "Hoti"], ["hto", "Minica Huitoto"], ["hts", "Hadza"], ["htu", "Hitu"], ["htx", "Middle Hittite"], ["hub", "Huambisa"], ["huc", "\u01C2Hua, \u01C2\u02BCAmkhoe"], ["hud", "Huaulu"], ["hue", "San Francisco Del Mar Huave"], ["huf", "Humene"], ["hug", "Huachipaeri"], ["huh", "Huilliche"], ["hui", "Huli"], ["huj", "Northern Guiyang Hmong, Northern Guiyang Miao"], ["huk", "Hulung"], ["hul", "Hula"], ["hum", "Hungana"], ["huo", "Hu"], ["hup", "Hupa"], ["huq", "Tsat"], ["hur", "Halkomelem"], ["hus", "Huastec"], ["hut", "Humla"], ["huu", "Murui Huitoto"], ["huv", "San Mateo Del Mar Huave"], ["huw", "Hukumina"], ["hux", "N\xFCpode Huitoto"], ["huy", "Hulaul\xE1"], ["huz", "Hunzib"], ["hvc", "Haitian Vodoun Culture Language"], ["hve", "San Dionisio Del Mar Huave"], ["hvk", "Haveke"], ["hvn", "Sabu"], ["hvv", "Santa Mar\xEDa Del Mar Huave"], ["hwa", "Wan\xE9"], ["hwc", "Hawai'i Creole English, Hawai'i Pidgin"], ["hwo", "Hwana"], ["hya", "Hya"], ["hyw", "Western Armenian"], ["hyx", "Armenian (family)"], ["iai", "Iaai"], ["ian", "Iatmul"], ["iap", "Iapama"], ["iar", "Purari"], ["iba", "Iban"], ["ibb", "Ibibio"], ["ibd", "Iwaidja"], ["ibe", "Akpes"], ["ibg", "Ibanag"], ["ibh", "Bih"], ["ibi", "Ibilo"], ["ibl", "Ibaloi"], ["ibm", "Agoi"], ["ibn", "Ibino"], ["ibr", "Ibuoro"], ["ibu", "Ibu"], ["iby", "Ibani"], ["ica", "Ede Ica"], ["ich", "Etkywan"], ["icl", "Icelandic Sign Language"], ["icr", "Islander Creole English"], ["ida", "Idakho-Isukha-Tiriki, Luidakho-Luisukha-Lutirichi"], ["idb", "Indo-Portuguese"], ["idc", "Idon, Ajiya"], ["idd", "Ede Idaca"], ["ide", "Idere"], ["idi", "Idi"], ["idr", "Indri"], ["ids", "Idesa"], ["idt", "Idat\xE9"], ["idu", "Idoma"], ["ifa", "Amganad Ifugao"], ["ifb", "Batad Ifugao, Ayangan Ifugao"], ["ife", "If\xE8"], ["iff", "Ifo"], ["ifk", "Tuwali Ifugao"], ["ifm", "Teke-Fuumu"], ["ifu", "Mayoyao Ifugao"], ["ify", "Keley-I Kallahan"], ["igb", "Ebira"], ["ige", "Igede"], ["igg", "Igana"], ["igl", "Igala"], ["igm", "Kanggape"], ["ign", "Ignaciano"], ["igo", "Isebe"], ["igs", "Interglossa"], ["igw", "Igwe"], ["ihb", "Iha Based Pidgin"], ["ihi", "Ihievbe"], ["ihp", "Iha"], ["ihw", "Bidhawal"], ["iin", "Thiin"], ["iir", "Indo-Iranian languages"], ["ijc", "Izon"], ["ije", "Biseni"], ["ijj", "Ede Ije"], ["ijn", "Kalabari"], ["ijo", "Ijo languages"], ["ijs", "Southeast Ijo"], ["ike", "Eastern Canadian Inuktitut"], ["iki", "Iko"], ["ikk", "Ika"], ["ikl", "Ikulu"], ["iko", "Olulumo-Ikom"], ["ikp", "Ikpeshi"], ["ikr", "Ikaranggal"], ["iks", "Inuit Sign Language"], ["ikt", "Inuinnaqtun, Western Canadian Inuktitut"], ["ikv", "Iku-Gora-Ankwa"], ["ikw", "Ikwere"], ["ikx", "Ik"], ["ikz", "Ikizu"], ["ila", "Ile Ape"], ["ilb", "Ila"], ["ilg", "Garig-Ilgar"], ["ili", "Ili Turki"], ["ilk", "Ilongot"], ["ill", "Iranun"], ["ilm", "Iranun (Malaysia)"], ["ilo", "Iloko"], ["ilp", "Iranun (Philippines)"], ["ils", "International Sign"], ["ilu", "Ili'uun"], ["ilv", "Ilue"], ["ilw", "Talur"], ["ima", "Mala Malasar"], ["ime", "Imeraguen"], ["imi", "Anamgura"], ["iml", "Miluk"], ["imn", "Imonda"], ["imo", "Imbongu"], ["imr", "Imroing"], ["ims", "Marsian"], ["imy", "Milyan"], ["inb", "Inga"], ["inc", "Indic languages"], ["ine", "Indo-European languages"], ["ing", "Degexit'an"], ["inh", "Ingush"], ["inj", "Jungle Inga"], ["inl", "Indonesian Sign Language"], ["inm", "Minaean"], ["inn", "Isinai"], ["ino", "Inoke-Yate"], ["inp", "I\xF1apari"], ["ins", "Indian Sign Language"], ["int", "Intha"], ["inz", "Inese\xF1o"], ["ior", "Inor"], ["iou", "Tuma-Irumu"], ["iow", "Iowa-Oto"], ["ipi", "Ipili"], ["ipo", "Ipiko"], ["iqu", "Iquito"], ["iqw", "Ikwo"], ["ira", "Iranian languages"], ["ire", "Iresim"], ["irh", "Irarutu"], ["iri", "Rigwe, Irigwe"], ["irk", "Iraqw"], ["irn", "Ir\xE1ntxe"], ["iro", "Iroquoian languages"], ["irr", "Ir"], ["iru", "Irula"], ["irx", "Kamberau"], ["iry", "Iraya"], ["isa", "Isabi"], ["isc", "Isconahua"], ["isd", "Isnag"], ["ise", "Italian Sign Language"], ["isg", "Irish Sign Language"], ["ish", "Esan"], ["isi", "Nkem-Nkum"], ["isk", "Ishkashimi"], ["ism", "Masimasi"], ["isn", "Isanzu"], ["iso", "Isoko"], ["isr", "Israeli Sign Language"], ["ist", "Istriot"], ["isu", "Isu (Menchum Division)"], ["itb", "Binongan Itneg"], ["itc", "Italic languages"], ["itd", "Southern Tidung"], ["ite", "Itene"], ["iti", "Inlaod Itneg"], ["itk", "Judeo-Italian"], ["itl", "Itelmen"], ["itm", "Itu Mbon Uzo"], ["ito", "Itonama"], ["itr", "Iteri"], ["its", "Isekiri"], ["itt", "Maeng Itneg"], ["itv", "Itawit"], ["itw", "Ito"], ["itx", "Itik"], ["ity", "Moyadan Itneg"], ["itz", "Itz\xE1"], ["ium", "Iu Mien"], ["ivb", "Ibatan"], ["ivv", "Ivatan"], ["iwk", "I-Wak"], ["iwm", "Iwam"], ["iwo", "Iwur"], ["iws", "Sepik Iwam"], ["ixc", "Ixcatec"], ["ixl", "Ixil"], ["iya", "Iyayu"], ["iyo", "Mesaka"], ["iyx", "Yaka (Congo)"], ["izh", "Ingrian"], ["izi", "Izi-Ezaa-Ikwo-Mgbo"], ["izr", "Izere"], ["izz", "Izii"], ["jaa", "Jamamad\xED"], ["jab", "Hyam"], ["jac", "Popti', Jakalteko"], ["jad", "Jahanka"], ["jae", "Yabem"], ["jaf", "Jara"], ["jah", "Jah Hut"], ["jaj", "Zazao"], ["jak", "Jakun"], ["jal", "Yalahatan"], ["jam", "Jamaican Creole English"], ["jan", "Jandai"], ["jao", "Yanyuwa"], ["jaq", "Yaqay"], ["jar", "Jarawa (Nigeria)"], ["jas", "New Caledonian Javanese"], ["jat", "Jakati"], ["jau", "Yaur"], ["jax", "Jambi Malay"], ["jay", "Yan-nhangu, Nhangu"], ["jaz", "Jawe"], ["jbe", "Judeo-Berber"], ["jbi", "Badjiri"], ["jbj", "Arandai"], ["jbk", "Barikewa"], ["jbm", "Bijim"], ["jbn", "Nafusi"], ["jbo", "Lojban"], ["jbr", "Jofotek-Bromnya"], ["jbt", "Jabut\xED"], ["jbu", "Jukun Takum"], ["jbw", "Yawijibaya"], ["jcs", "Jamaican Country Sign Language"], ["jct", "Krymchak"], ["jda", "Jad"], ["jdg", "Jadgali"], ["jdt", "Judeo-Tat"], ["jeb", "Jebero"], ["jee", "Jerung"], ["jeg", "Jeng"], ["jeh", "Jeh"], ["jei", "Yei"], ["jek", "Jeri Kuo"], ["jel", "Yelmek"], ["jen", "Dza"], ["jer", "Jere"], ["jet", "Manem"], ["jeu", "Jonkor Bourmataguil"], ["jgb", "Ngbee"], ["jge", "Judeo-Georgian"], ["jgk", "Gwak"], ["jgo", "Ngomba"], ["jhi", "Jehai"], ["jhs", "Jhankot Sign Language"], ["jia", "Jina"], ["jib", "Jibu"], ["jic", "Tol"], ["jid", "Bu (Kaduna State)"], ["jie", "Jilbe"], ["jig", "Jingulu, Djingili"], ["jih", "sTodsde, Shangzhai"], ["jii", "Jiiddu"], ["jil", "Jilim"], ["jim", "Jimi (Cameroon)"], ["jio", "Jiamao"], ["jiq", "Guanyinqiao, Lavrung"], ["jit", "Jita"], ["jiu", "Youle Jinuo"], ["jiv", "Shuar"], ["jiy", "Buyuan Jinuo"], ["jje", "Jejueo"], ["jjr", "Bankal"], ["jka", "Kaera"], ["jkm", "Mobwa Karen"], ["jko", "Kubo"], ["jkp", "Paku Karen"], ["jkr", "Koro (India)"], ["jks", "Amami Koniya Sign Language"], ["jku", "Labir"], ["jle", "Ngile"], ["jls", "Jamaican Sign Language"], ["jma", "Dima"], ["jmb", "Zumbun"], ["jmc", "Machame"], ["jmd", "Yamdena"], ["jmi", "Jimi (Nigeria)"], ["jml", "Jumli"], ["jmn", "Makuri Naga"], ["jmr", "Kamara"], ["jms", "Mashi (Nigeria)"], ["jmw", "Mouwase"], ["jmx", "Western Juxtlahuaca Mixtec"], ["jna", "Jangshung"], ["jnd", "Jandavra"], ["jng", "Yangman"], ["jni", "Janji"], ["jnj", "Yemsa"], ["jnl", "Rawat"], ["jns", "Jaunsari"], ["job", "Joba"], ["jod", "Wojenaka"], ["jog", "Jogi"], ["jor", "Jor\xE1"], ["jos", "Jordanian Sign Language"], ["jow", "Jowulu"], ["jpa", "Jewish Palestinian Aramaic"], ["jpr", "Judeo-Persian"], ["jpx", "Japanese (family)"], ["jqr", "Jaqaru"], ["jra", "Jarai"], ["jrb", "Judeo-Arabic"], ["jrr", "Jiru"], ["jrt", "Jakattoe"], ["jru", "Japrer\xEDa"], ["jsl", "Japanese Sign Language"], ["jua", "J\xFAma"], ["jub", "Wannu"], ["juc", "Jurchen"], ["jud", "Worodougou"], ["juh", "H\xF5ne"], ["jui", "Ngadjuri"], ["juk", "Wapan"], ["jul", "Jirel"], ["jum", "Jumjum"], ["jun", "Juang"], ["juo", "Jiba"], ["jup", "Hupd\xEB"], ["jur", "Jur\xFAna"], ["jus", "Jumla Sign Language"], ["jut", "Jutish"], ["juu", "Ju"], ["juw", "W\xE3pha"], ["juy", "Juray"], ["jvd", "Javindo"], ["jvn", "Caribbean Javanese"], ["jwi", "Jwira-Pepesa"], ["jya", "Jiarong"], ["jye", "Judeo-Yemeni Arabic"], ["jyy", "Jaya"], ["kaa", "Kara-Kalpak, Karakalpak"], ["kab", "Kabyle"], ["kac", "Kachin, Jingpho"], ["kad", "Adara"], ["kae", "Ketangalan"], ["kaf", "Katso"], ["kag", "Kajaman"], ["kah", "Kara (Central African Republic)"], ["kai", "Karekare"], ["kaj", "Jju"], ["kak", "Kalanguya, Kayapa Kallahan"], ["kam", "Kamba (Kenya)"], ["kao", "Xaasongaxango"], ["kap", "Bezhta"], ["kaq", "Capanahua"], ["kar", "Karen languages"], ["kav", "Katuk\xEDna"], ["kaw", "Kawi"], ["kax", "Kao"], ["kay", "Kamayur\xE1"], ["kba", "Kalarko"], ["kbb", "Kaxui\xE2na"], ["kbc", "Kadiw\xE9u"], ["kbd", "Kabardian"], ["kbe", "Kanju"], ["kbf", "Kakauhua"], ["kbg", "Khamba"], ["kbh", "Cams\xE1"], ["kbi", "Kaptiau"], ["kbj", "Kari"], ["kbk", "Grass Koiari"], ["kbl", "Kanembu"], ["kbm", "Iwal"], ["kbn", "Kare (Central African Republic)"], ["kbo", "Keliko"], ["kbp", "Kabiy\xE8"], ["kbq", "Kamano"], ["kbr", "Kafa"], ["kbs", "Kande"], ["kbt", "Abadi"], ["kbu", "Kabutra"], ["kbv", "Dera (Indonesia)"], ["kbw", "Kaiep"], ["kbx", "Ap Ma"], ["kby", "Manga Kanuri"], ["kbz", "Duhwa"], ["kca", "Khanty"], ["kcb", "Kawacha"], ["kcc", "Lubila"], ["kcd", "Ngk\xE2lmpw Kanum"], ["kce", "Kaivi"], ["kcf", "Ukaan"], ["kcg", "Tyap"], ["kch", "Vono"], ["kci", "Kamantan"], ["kcj", "Kobiana"], ["kck", "Kalanga"], ["kcl", "Kela (Papua New Guinea), Kala"], ["kcm", "Gula (Central African Republic)"], ["kcn", "Nubi"], ["kco", "Kinalakna"], ["kcp", "Kanga"], ["kcq", "Kamo"], ["kcr", "Katla"], ["kcs", "Koenoem"], ["kct", "Kaian"], ["kcu", "Kami (Tanzania)"], ["kcv", "Kete"], ["kcw", "Kabwari"], ["kcx", "Kachama-Ganjule"], ["kcy", "Korandje"], ["kcz", "Konongo"], ["kda", "Worimi"], ["kdc", "Kutu"], ["kdd", "Yankunytjatjara"], ["kde", "Makonde"], ["kdf", "Mamusi"], ["kdg", "Seba"], ["kdh", "Tem"], ["kdi", "Kumam"], ["kdj", "Karamojong"], ["kdk", "Num\xE8\xE8, Kw\xE9nyi"], ["kdl", "Tsikimba"], ["kdm", "Kagoma"], ["kdn", "Kunda"], ["kdo", "Kordofanian languages"], ["kdp", "Kaningdon-Nindem"], ["kdq", "Koch"], ["kdr", "Karaim"], ["kdt", "Kuy"], ["kdu", "Kadaru"], ["kdv", "Kado"], ["kdw", "Koneraw"], ["kdx", "Kam"], ["kdy", "Keder, Keijar"], ["kdz", "Kwaja"], ["kea", "Kabuverdianu"], ["keb", "K\xE9l\xE9"], ["kec", "Keiga"], ["ked", "Kerewe"], ["kee", "Eastern Keres"], ["kef", "Kpessi"], ["keg", "Tese"], ["keh", "Keak"], ["kei", "Kei"], ["kej", "Kadar"], ["kek", "Kekch\xED"], ["kel", "Kela (Democratic Republic of Congo)"], ["kem", "Kemak"], ["ken", "Kenyang"], ["keo", "Kakwa"], ["kep", "Kaikadi"], ["keq", "Kamar"], ["ker", "Kera"], ["kes", "Kugbo"], ["ket", "Ket"], ["keu", "Akebu"], ["kev", "Kanikkaran"], ["kew", "West Kewa"], ["kex", "Kukna"], ["key", "Kupia"], ["kez", "Kukele"], ["kfa", "Kodava"], ["kfb", "Northwestern Kolami"], ["kfc", "Konda-Dora"], ["kfd", "Korra Koraga"], ["kfe", "Kota (India)"], ["kff", "Koya"], ["kfg", "Kudiya"], ["kfh", "Kurichiya"], ["kfi", "Kannada Kurumba"], ["kfj", "Kemiehua"], ["kfk", "Kinnauri"], ["kfl", "Kung"], ["kfm", "Khunsari"], ["kfn", "Kuk"], ["kfo", "Koro (C\xF4te d'Ivoire)"], ["kfp", "Korwa"], ["kfq", "Korku"], ["kfr", "Kachhi, Kutchi"], ["kfs", "Bilaspuri"], ["kft", "Kanjari"], ["kfu", "Katkari"], ["kfv", "Kurmukar"], ["kfw", "Kharam Naga"], ["kfx", "Kullu Pahari"], ["kfy", "Kumaoni"], ["kfz", "Koromf\xE9"], ["kga", "Koyaga"], ["kgb", "Kawe"], ["kgc", "Kasseng"], ["kgd", "Kataang"], ["kge", "Komering"], ["kgf", "Kube"], ["kgg", "Kusunda"], ["kgh", "Upper Tanudan Kalinga"], ["kgi", "Selangor Sign Language"], ["kgj", "Gamale Kham"], ["kgk", "Kaiw\xE1"], ["kgl", "Kunggari"], ["kgm", "Karip\xFAna"], ["kgn", "Karingani"], ["kgo", "Krongo"], ["kgp", "Kaingang"], ["kgq", "Kamoro"], ["kgr", "Abun"], ["kgs", "Kumbainggar"], ["kgt", "Somyev"], ["kgu", "Kobol"], ["kgv", "Karas"], ["kgw", "Karon Dori"], ["kgx", "Kamaru"], ["kgy", "Kyerung"], ["kha", "Khasi"], ["khb", "L\xFC"], ["khc", "Tukang Besi North"], ["khd", "B\xE4di Kanum"], ["khe", "Korowai"], ["khf", "Khuen"], ["khg", "Khams Tibetan"], ["khh", "Kehu"], ["khi", "Khoisan languages"], ["khj", "Kuturmi"], ["khk", "Halh Mongolian"], ["khl", "Lusi"], ["khn", "Khandesi"], ["kho", "Khotanese, Sakan"], ["khp", "Kapori, Kapauri"], ["khq", "Koyra Chiini Songhay"], ["khr", "Kharia"], ["khs", "Kasua"], ["kht", "Khamti"], ["khu", "Nkhumbi"], ["khv", "Khvarshi"], ["khw", "Khowar"], ["khx", "Kanu"], ["khy", "Kele (Democratic Republic of Congo)"], ["khz", "Keapara"], ["kia", "Kim"], ["kib", "Koalib"], ["kic", "Kickapoo"], ["kid", "Koshin"], ["kie", "Kibet"], ["kif", "Eastern Parbate Kham"], ["kig", "Kimaama, Kimaghima"], ["kih", "Kilmeri"], ["kii", "Kitsai"], ["kij", "Kilivila"], ["kil", "Kariya"], ["kim", "Karagas"], ["kio", "Kiowa"], ["kip", "Sheshi Kham"], ["kiq", "Kosadle, Kosare"], ["kis", "Kis"], ["kit", "Agob"], ["kiu", "Kirmanjki (individual language)"], ["kiv", "Kimbu"], ["kiw", "Northeast Kiwai"], ["kix", "Khiamniungan Naga"], ["kiy", "Kirikiri"], ["kiz", "Kisi"], ["kja", "Mlap"], ["kjb", "Q'anjob'al, Kanjobal"], ["kjc", "Coastal Konjo"], ["kjd", "Southern Kiwai"], ["kje", "Kisar"], ["kjf", "Khalaj [Indo-Iranian]"], ["kjg", "Khmu"], ["kjh", "Khakas"], ["kji", "Zabana"], ["kjj", "Khinalugh"], ["kjk", "Highland Konjo"], ["kjl", "Western Parbate Kham"], ["kjm", "Kh\xE1ng"], ["kjn", "Kunjen"], ["kjo", "Harijan Kinnauri"], ["kjp", "Pwo Eastern Karen"], ["kjq", "Western Keres"], ["kjr", "Kurudu"], ["kjs", "East Kewa"], ["kjt", "Phrae Pwo Karen"], ["kju", "Kashaya"], ["kjv", "Kaikavian Literary Language"], ["kjx", "Ramopa"], ["kjy", "Erave"], ["kjz", "Bumthangkha"], ["kka", "Kakanda"], ["kkb", "Kwerisa"], ["kkc", "Odoodee"], ["kkd", "Kinuku"], ["kke", "Kakabe"], ["kkf", "Kalaktang Monpa"], ["kkg", "Mabaka Valley Kalinga"], ["kkh", "Kh\xFCn"], ["kki", "Kagulu"], ["kkj", "Kako"], ["kkk", "Kokota"], ["kkl", "Kosarek Yale"], ["kkm", "Kiong"], ["kkn", "Kon Keu"], ["kko", "Karko"], ["kkp", "Gugubera, Koko-Bera"], ["kkq", "Kaeku"], ["kkr", "Kir-Balar"], ["kks", "Giiwo"], ["kkt", "Koi"], ["kku", "Tumi"], ["kkv", "Kangean"], ["kkw", "Teke-Kukuya"], ["kkx", "Kohin"], ["kky", "Guugu Yimidhirr, Guguyimidjir"], ["kkz", "Kaska"], ["kla", "Klamath-Modoc"], ["klb", "Kiliwa"], ["klc", "Kolbila"], ["kld", "Gamilaraay"], ["kle", "Kulung (Nepal)"], ["klf", "Kendeje"], ["klg", "Tagakaulo"], ["klh", "Weliki"], ["kli", "Kalumpang"], ["klj", "Khalaj"], ["klk", "Kono (Nigeria)"], ["kll", "Kagan Kalagan"], ["klm", "Migum"], ["kln", "Kalenjin"], ["klo", "Kapya"], ["klp", "Kamasa"], ["klq", "Rumu"], ["klr", "Khaling"], ["kls", "Kalasha"], ["klt", "Nukna"], ["klu", "Klao"], ["klv", "Maskelynes"], ["klw", "Tado, Lindu"], ["klx", "Koluwawa"], ["kly", "Kalao"], ["klz", "Kabola"], ["kma", "Konni"], ["kmb", "Kimbundu"], ["kmc", "Southern Dong"], ["kmd", "Majukayang Kalinga"], ["kme", "Bakole"], ["kmf", "Kare (Papua New Guinea)"], ["kmg", "K\xE2te"], ["kmh", "Kalam"], ["kmi", "Kami (Nigeria)"], ["kmj", "Kumarbhag Paharia"], ["kmk", "Limos Kalinga"], ["kml", "Tanudan Kalinga"], ["kmm", "Kom (India)"], ["kmn", "Awtuw"], ["kmo", "Kwoma"], ["kmp", "Gimme"], ["kmq", "Kwama"], ["kmr", "Northern Kurdish"], ["kms", "Kamasau"], ["kmt", "Kemtuik"], ["kmu", "Kanite"], ["kmv", "Karip\xFAna Creole French"], ["kmw", "Komo (Democratic Republic of Congo)"], ["kmx", "Waboda"], ["kmy", "Koma"], ["kmz", "Khorasani Turkish"], ["kna", "Dera (Nigeria)"], ["knb", "Lubuagan Kalinga"], ["knc", "Central Kanuri"], ["knd", "Konda"], ["kne", "Kankanaey"], ["knf", "Mankanya"], ["kng", "Koongo"], ["kni", "Kanufi"], ["knj", "Western Kanjobal"], ["knk", "Kuranko"], ["knl", "Keninjal"], ["knm", "Kanamar\xED"], ["knn", "Konkani (individual language)"], ["kno", "Kono (Sierra Leone)"], ["knp", "Kwanja"], ["knq", "Kintaq"], ["knr", "Kaningra"], ["kns", "Kensiu"], ["knt", "Panoan Katuk\xEDna"], ["knu", "Kono (Guinea)"], ["knv", "Tabo"], ["knw", "Kung-Ekoka"], ["knx", "Kendayan, Salako"], ["kny", "Kanyok"], ["knz", "Kalams\xE9"], ["koa", "Konomala"], ["koc", "Kpati"], ["kod", "Kodi"], ["koe", "Kacipo-Bale Suri"], ["kof", "Kubi"], ["kog", "Cogui, Kogi"], ["koh", "Koyo"], ["koi", "Komi-Permyak"], ["koj", "Sara Dunjo"], ["kok", "Konkani (macrolanguage)"], ["kol", "Kol (Papua New Guinea)"], ["koo", "Konzo"], ["kop", "Waube"], ["koq", "Kota (Gabon)"], ["kos", "Kosraean"], ["kot", "Lagwan"], ["kou", "Koke"], ["kov", "Kudu-Camo"], ["kow", "Kugama"], ["kox", "Coxima"], ["koy", "Koyukon"], ["koz", "Korak"], ["kpa", "Kutto"], ["kpb", "Mullu Kurumba"], ["kpc", "Curripaco"], ["kpd", "Koba"], ["kpe", "Kpelle"], ["kpf", "Komba"], ["kpg", "Kapingamarangi"], ["kph", "Kplang"], ["kpi", "Kofei"], ["kpj", "Karaj\xE1"], ["kpk", "Kpan"], ["kpl", "Kpala"], ["kpm", "Koho"], ["kpn", "Kepkiriw\xE1t"], ["kpo", "Ikposo"], ["kpp", "Paku Karen"], ["kpq", "Korupun-Sela"], ["kpr", "Korafe-Yegha"], ["kps", "Tehit"], ["kpt", "Karata"], ["kpu", "Kafoa"], ["kpv", "Komi-Zyrian"], ["kpw", "Kobon"], ["kpx", "Mountain Koiali"], ["kpy", "Koryak"], ["kpz", "Kupsabiny"], ["kqa", "Mum"], ["kqb", "Kovai"], ["kqc", "Doromu-Koki"], ["kqd", "Koy Sanjaq Surat"], ["kqe", "Kalagan"], ["kqf", "Kakabai"], ["kqg", "Khe"], ["kqh", "Kisankasa"], ["kqi", "Koitabu"], ["kqj", "Koromira"], ["kqk", "Kotafon Gbe"], ["kql", "Kyenele"], ["kqm", "Khisa"], ["kqn", "Kaonde"], ["kqo", "Eastern Krahn"], ["kqp", "Kimr\xE9"], ["kqq", "Krenak"], ["kqr", "Kimaragang"], ["kqs", "Northern Kissi"], ["kqt", "Klias River Kadazan"], ["kqu", "Seroa"], ["kqv", "Okolod"], ["kqw", "Kandas"], ["kqx", "Mser"], ["kqy", "Koorete"], ["kqz", "Korana"], ["kra", "Kumhali"], ["krb", "Karkin"], ["krc", "Karachay-Balkar"], ["krd", "Kairui-Midiki"], ["kre", "Panar\xE1"], ["krf", "Koro (Vanuatu)"], ["krh", "Kurama"], ["kri", "Krio"], ["krj", "Kinaray-A"], ["krk", "Kerek"], ["krl", "Karelian"], ["krm", "Krim"], ["krn", "Sapo"], ["kro", "Kru languages"], ["krp", "Korop"], ["krr", "Krung"], ["krs", "Gbaya (Sudan)"], ["krt", "Tumari Kanuri"], ["kru", "Kurukh"], ["krv", "Kavet"], ["krw", "Western Krahn"], ["krx", "Karon"], ["kry", "Kryts"], ["krz", "Sota Kanum"], ["ksa", "Shuwa-Zamani"], ["ksb", "Shambala"], ["ksc", "Southern Kalinga"], ["ksd", "Kuanua"], ["kse", "Kuni"], ["ksf", "Bafia"], ["ksg", "Kusaghe"], ["ksh", "K\xF6lsch"], ["ksi", "Krisa, I'saka"], ["ksj", "Uare"], ["ksk", "Kansa"], ["ksl", "Kumalu"], ["ksm", "Kumba"], ["ksn", "Kasiguranin"], ["kso", "Kofa"], ["ksp", "Kaba"], ["ksq", "Kwaami"], ["ksr", "Borong"], ["kss", "Southern Kisi"], ["kst", "Winy\xE9"], ["ksu", "Khamyang"], ["ksv", "Kusu"], ["ksw", "S'gaw Karen"], ["ksx", "Kedang"], ["ksy", "Kharia Thar"], ["ksz", "Kodaku"], ["kta", "Katua"], ["ktb", "Kambaata"], ["ktc", "Kholok"], ["ktd", "Kokata, Kukatha"], ["kte", "Nubri"], ["ktf", "Kwami"], ["ktg", "Kalkutung"], ["kth", "Karanga"], ["kti", "North Muyu"], ["ktj", "Plapo Krumen"], ["ktk", "Kaniet"], ["ktl", "Koroshi"], ["ktm", "Kurti"], ["ktn", "Kariti\xE2na"], ["kto", "Kuot"], ["ktp", "Kaduo"], ["ktq", "Katabaga"], ["ktr", "Kota Marudu Tinagas"], ["kts", "South Muyu"], ["ktt", "Ketum"], ["ktu", "Kituba (Democratic Republic of Congo)"], ["ktv", "Eastern Katu"], ["ktw", "Kato"], ["ktx", "Kaxarar\xED"], ["kty", "Kango (Bas-U\xE9l\xE9 District)"], ["ktz", "Ju\u01C0\u02BChoan, Ju\u01C0\u02BChoansi"], ["kub", "Kutep"], ["kuc", "Kwinsu"], ["kud", "'Auhelawa"], ["kue", "Kuman (Papua New Guinea)"], ["kuf", "Western Katu"], ["kug", "Kupa"], ["kuh", "Kushi"], ["kui", "Kuik\xFAro-Kalap\xE1lo, Kalapalo"], ["kuj", "Kuria"], ["kuk", "Kepo'"], ["kul", "Kulere"], ["kum", "Kumyk"], ["kun", "Kunama"], ["kuo", "Kumukio"], ["kup", "Kunimaipa"], ["kuq", "Karipuna"], ["kus", "Kusaal"], ["kut", "Kutenai"], ["kuu", "Upper Kuskokwim"], ["kuv", "Kur"], ["kuw", "Kpagua"], ["kux", "Kukatja"], ["kuy", "Kuuku-Ya'u"], ["kuz", "Kunza"], ["kva", "Bagvalal"], ["kvb", "Kubu"], ["kvc", "Kove"], ["kvd", "Kui (Indonesia)"], ["kve", "Kalabakan"], ["kvf", "Kabalai"], ["kvg", "Kuni-Boazi"], ["kvh", "Komodo"], ["kvi", "Kwang"], ["kvj", "Psikye"], ["kvk", "Korean Sign Language"], ["kvl", "Kayaw"], ["kvm", "Kendem"], ["kvn", "Border Kuna"], ["kvo", "Dobel"], ["kvp", "Kompane"], ["kvq", "Geba Karen"], ["kvr", "Kerinci"], ["kvs", "Kunggara"], ["kvt", "Lahta Karen, Lahta"], ["kvu", "Yinbaw Karen"], ["kvv", "Kola"], ["kvw", "Wersing"], ["kvx", "Parkari Koli"], ["kvy", "Yintale Karen, Yintale"], ["kvz", "Tsakwambo, Tsaukambo"], ["kwa", "D\xE2w"], ["kwb", "Kwa"], ["kwc", "Likwala"], ["kwd", "Kwaio"], ["kwe", "Kwerba"], ["kwf", "Kwara'ae"], ["kwg", "Sara Kaba Deme"], ["kwh", "Kowiai"], ["kwi", "Awa-Cuaiquer"], ["kwj", "Kwanga"], ["kwk", "Kwakiutl"], ["kwl", "Kofyar"], ["kwm", "Kwambi"], ["kwn", "Kwangali"], ["kwo", "Kwomtari"], ["kwp", "Kodia"], ["kwq", "Kwak"], ["kwr", "Kwer"], ["kws", "Kwese"], ["kwt", "Kwesten"], ["kwu", "Kwakum"], ["kwv", "Sara Kaba N\xE1\xE0"], ["kww", "Kwinti"], ["kwx", "Khirwar"], ["kwy", "San Salvador Kongo"], ["kwz", "Kwadi"], ["kxa", "Kairiru"], ["kxb", "Krobu"], ["kxc", "Konso, Khonso"], ["kxd", "Brunei"], ["kxe", "Kakihum"], ["kxf", "Manumanaw Karen, Manumanaw"], ["kxh", "Karo (Ethiopia)"], ["kxi", "Keningau Murut"], ["kxj", "Kulfa"], ["kxk", "Zayein Karen"], ["kxl", "Nepali Kurux"], ["kxm", "Northern Khmer"], ["kxn", "Kanowit-Tanjong Melanau"], ["kxo", "Kano\xE9"], ["kxp", "Wadiyara Koli"], ["kxq", "Sm\xE4rky Kanum"], ["kxr", "Koro (Papua New Guinea)"], ["kxs", "Kangjia"], ["kxt", "Koiwat"], ["kxu", "Kui (India)"], ["kxv", "Kuvi"], ["kxw", "Konai"], ["kxx", "Likuba"], ["kxy", "Kayong"], ["kxz", "Kerewo"], ["kya", "Kwaya"], ["kyb", "Butbut Kalinga"], ["kyc", "Kyaka"], ["kyd", "Karey"], ["kye", "Krache"], ["kyf", "Kouya"], ["kyg", "Keyagana"], ["kyh", "Karok"], ["kyi", "Kiput"], ["kyj", "Karao"], ["kyk", "Kamayo"], ["kyl", "Kalapuya"], ["kym", "Kpatili"], ["kyn", "Northern Binukidnon"], ["kyo", "Kelon"], ["kyp", "Kang"], ["kyq", "Kenga"], ["kyr", "Kuru\xE1ya"], ["kys", "Baram Kayan"], ["kyt", "Kayagar"], ["kyu", "Western Kayah"], ["kyv", "Kayort"], ["kyw", "Kudmali"], ["kyx", "Rapoisi"], ["kyy", "Kambaira"], ["kyz", "Kayab\xED"], ["kza", "Western Karaboro"], ["kzb", "Kaibobo"], ["kzc", "Bondoukou Kulango"], ["kzd", "Kadai"], ["kze", "Kosena"], ["kzf", "Da'a Kaili"], ["kzg", "Kikai"], ["kzh", "Kenuzi-Dongola"], ["kzi", "Kelabit"], ["kzj", "Coastal Kadazan"], ["kzk", "Kazukuru"], ["kzl", "Kayeli"], ["kzm", "Kais"], ["kzn", "Kokola"], ["kzo", "Kaningi"], ["kzp", "Kaidipang"], ["kzq", "Kaike"], ["kzr", "Karang"], ["kzs", "Sugut Dusun"], ["kzt", "Tambunan Dusun"], ["kzu", "Kayupulau"], ["kzv", "Komyandaret"], ["kzw", "Karir\xED-Xoc\xF3"], ["kzx", "Kamarian"], ["kzy", "Kango (Tshopo District)"], ["kzz", "Kalabra"], ["laa", "Southern Subanen"], ["lab", "Linear A"], ["lac", "Lacandon"], ["lad", "Ladino"], ["lae", "Pattani"], ["laf", "Lafofa"], ["lag", "Langi"], ["lah", "Lahnda"], ["lai", "Lambya"], ["laj", "Lango (Uganda)"], ["lak", "Laka (Nigeria)"], ["lal", "Lalia"], ["lam", "Lamba"], ["lan", "Laru"], ["lap", "Laka (Chad)"], ["laq", "Qabiao"], ["lar", "Larteh"], ["las", "Lama (Togo)"], ["lau", "Laba"], ["law", "Lauje"], ["lax", "Tiwa"], ["lay", "Lama Bai"], ["laz", "Aribwatsa"], ["lba", "Lui"], ["lbb", "Label"], ["lbc", "Lakkia"], ["lbe", "Lak"], ["lbf", "Tinani"], ["lbg", "Laopang"], ["lbi", "La'bi"], ["lbj", "Ladakhi"], ["lbk", "Central Bontok"], ["lbl", "Libon Bikol"], ["lbm", "Lodhi"], ["lbn", "Rmeet"], ["lbo", "Laven"], ["lbq", "Wampar"], ["lbr", "Lohorung"], ["lbs", "Libyan Sign Language"], ["lbt", "Lachi"], ["lbu", "Labu"], ["lbv", "Lavatbura-Lamusong"], ["lbw", "Tolaki"], ["lbx", "Lawangan"], ["lby", "Lamalama, Lamu-Lamu"], ["lbz", "Lardil"], ["lcc", "Legenyem"], ["lcd", "Lola"], ["lce", "Loncong, Sekak"], ["lcf", "Lubu"], ["lch", "Luchazi"], ["lcl", "Lisela"], ["lcm", "Tungag"], ["lcp", "Western Lawa"], ["lcq", "Luhu"], ["lcs", "Lisabata-Nuniali"], ["lda", "Kla-Dan"], ["ldb", "D\u0169ya"], ["ldd", "Luri"], ["ldg", "Lenyima"], ["ldh", "Lamja-Dengsa-Tola"], ["ldi", "Laari"], ["ldj", "Lemoro"], ["ldk", "Leelau"], ["ldl", "Kaan"], ["ldm", "Landoma"], ["ldn", "L\xE1adan"], ["ldo", "Loo"], ["ldp", "Tso"], ["ldq", "Lufu"], ["lea", "Lega-Shabunda"], ["leb", "Lala-Bisa"], ["lec", "Leco"], ["led", "Lendu"], ["lee", "Ly\xE9l\xE9"], ["lef", "Lelemi"], ["leg", "Lengua"], ["leh", "Lenje"], ["lei", "Lemio"], ["lej", "Lengola"], ["lek", "Leipon"], ["lel", "Lele (Democratic Republic of Congo)"], ["lem", "Nomaande"], ["len", "Lenca"], ["leo", "Leti (Cameroon)"], ["lep", "Lepcha"], ["leq", "Lembena"], ["ler", "Lenkau"], ["les", "Lese"], ["let", "Lesing-Gelimi, Amio-Gelimi"], ["leu", "Kara (Papua New Guinea)"], ["lev", "Lamma"], ["lew", "Ledo Kaili"], ["lex", "Luang"], ["ley", "Lemolang"], ["lez", "Lezghian"], ["lfa", "Lefa"], ["lfn", "Lingua Franca Nova"], ["lga", "Lungga"], ["lgb", "Laghu"], ["lgg", "Lugbara"], ["lgh", "Laghuu"], ["lgi", "Lengilu"], ["lgk", "Lingarak, Neverver"], ["lgl", "Wala"], ["lgm", "Lega-Mwenga"], ["lgn", "T'apo, Opuuo"], ["lgq", "Logba"], ["lgr", "Lengo"], ["lgt", "Pahi"], ["lgu", "Longgu"], ["lgz", "Ligenza"], ["lha", "Laha (Viet Nam)"], ["lhh", "Laha (Indonesia)"], ["lhi", "Lahu Shi"], ["lhl", "Lahul Lohar"], ["lhm", "Lhomi"], ["lhn", "Lahanan"], ["lhp", "Lhokpu"], ["lhs", "Mlahs\xF6"], ["lht", "Lo-Toga"], ["lhu", "Lahu"], ["lia", "West-Central Limba"], ["lib", "Likum"], ["lic", "Hlai"], ["lid", "Nyindrou"], ["lie", "Likila"], ["lif", "Limbu"], ["lig", "Ligbi"], ["lih", "Lihir"], ["lii", "Lingkhim"], ["lij", "Ligurian"], ["lik", "Lika"], ["lil", "Lillooet"], ["lio", "Liki"], ["lip", "Sekpele"], ["liq", "Libido"], ["lir", "Liberian English"], ["lis", "Lisu"], ["liu", "Logorik"], ["liv", "Liv"], ["liw", "Col"], ["lix", "Liabuku"], ["liy", "Banda-Bambari"], ["liz", "Libinza"], ["lja", "Golpa"], ["lje", "Rampi"], ["lji", "Laiyolo"], ["ljl", "Li'o"], ["ljp", "Lampung Api"], ["ljw", "Yirandali"], ["ljx", "Yuru"], ["lka", "Lakalei"], ["lkb", "Kabras, Lukabaras"], ["lkc", "Kucong"], ["lkd", "Lakond\xEA"], ["lke", "Kenyi"], ["lkh", "Lakha"], ["lki", "Laki"], ["lkj", "Remun"], ["lkl", "Laeko-Libuat"], ["lkm", "Kalaamaya"], ["lkn", "Lakon, Vure"], ["lko", "Khayo, Olukhayo"], ["lkr", "P\xE4ri"], ["lks", "Kisa, Olushisa"], ["lkt", "Lakota"], ["lku", "Kungkari"], ["lky", "Lokoya"], ["lla", "Lala-Roba"], ["llb", "Lolo"], ["llc", "Lele (Guinea)"], ["lld", "Ladin"], ["lle", "Lele (Papua New Guinea)"], ["llf", "Hermit"], ["llg", "Lole"], ["llh", "Lamu"], ["lli", "Teke-Laali"], ["llj", "Ladji Ladji"], ["llk", "Lelak"], ["lll", "Lilau"], ["llm", "Lasalimu"], ["lln", "Lele (Chad)"], ["llo", "Khlor"], ["llp", "North Efate"], ["llq", "Lolak"], ["lls", "Lithuanian Sign Language"], ["llu", "Lau"], ["llx", "Lauan"], ["lma", "East Limba"], ["lmb", "Merei"], ["lmc", "Limilngan"], ["lmd", "Lumun"], ["lme", "P\xE9v\xE9"], ["lmf", "South Lembata"], ["lmg", "Lamogai"], ["lmh", "Lambichhong"], ["lmi", "Lombi"], ["lmj", "West Lembata"], ["lmk", "Lamkang"], ["lml", "Hano"], ["lmm", "Lamam"], ["lmn", "Lambadi"], ["lmo", "Lombard"], ["lmp", "Limbum"], ["lmq", "Lamatuka"], ["lmr", "Lamalera"], ["lmu", "Lamenu"], ["lmv", "Lomaiviti"], ["lmw", "Lake Miwok"], ["lmx", "Laimbue"], ["lmy", "Lamboya"], ["lmz", "Lumbee"], ["lna", "Langbashe"], ["lnb", "Mbalanhu"], ["lnd", "Lundayeh, Lun Bawang"], ["lng", "Langobardic"], ["lnh", "Lanoh"], ["lni", "Daantanai'"], ["lnj", "Leningitij"], ["lnl", "South Central Banda"], ["lnm", "Langam"], ["lnn", "Lorediakarkar"], ["lno", "Lango (South Sudan)"], ["lns", "Lamnso'"], ["lnu", "Longuda"], ["lnw", "Lanima"], ["lnz", "Lonzo"], ["loa", "Loloda"], ["lob", "Lobi"], ["loc", "Inonhan"], ["loe", "Saluan"], ["lof", "Logol"], ["log", "Logo"], ["loh", "Narim"], ["loi", "Loma (C\xF4te d'Ivoire)"], ["loj", "Lou"], ["lok", "Loko"], ["lol", "Mongo"], ["lom", "Loma (Liberia)"], ["lon", "Malawi Lomwe"], ["loo", "Lombo"], ["lop", "Lopa"], ["loq", "Lobala"], ["lor", "T\xE9\xE9n"], ["los", "Loniu"], ["lot", "Otuho"], ["lou", "Louisiana Creole"], ["lov", "Lopi"], ["low", "Tampias Lobu"], ["lox", "Loun"], ["loy", "Loke"], ["loz", "Lozi"], ["lpa", "Lelepa"], ["lpe", "Lepki"], ["lpn", "Long Phuri Naga"], ["lpo", "Lipo"], ["lpx", "Lopit"], ["lra", "Rara Bakati'"], ["lrc", "Northern Luri"], ["lre", "Laurentian"], ["lrg", "Laragia"], ["lri", "Marachi, Olumarachi"], ["lrk", "Loarki"], ["lrl", "Lari"], ["lrm", "Marama, Olumarama"], ["lrn", "Lorang"], ["lro", "Laro"], ["lrr", "Southern Yamphu"], ["lrt", "Larantuka Malay"], ["lrv", "Larevat"], ["lrz", "Lemerig"], ["lsa", "Lasgerdi"], ["lsb", "Burundian Sign Language, Langue des Signes Burundaise"], ["lsd", "Lishana Deni"], ["lse", "Lusengo"], ["lsg", "Lyons Sign Language"], ["lsh", "Lish"], ["lsi", "Lashi"], ["lsl", "Latvian Sign Language"], ["lsm", "Saamia, Olusamia"], ["lsn", "Tibetan Sign Language"], ["lso", "Laos Sign Language"], ["lsp", "Panamanian Sign Language, Lengua de Se\xF1as Paname\xF1as"], ["lsr", "Aruop"], ["lss", "Lasi"], ["lst", "Trinidad and Tobago Sign Language"], ["lsv", "Sivia Sign Language"], ["lsy", "Mauritian Sign Language"], ["ltc", "Late Middle Chinese"], ["ltg", "Latgalian"], ["lth", "Thur"], ["lti", "Leti (Indonesia)"], ["ltn", "Latund\xEA"], ["lto", "Tsotso, Olutsotso"], ["lts", "Tachoni, Lutachoni"], ["ltu", "Latu"], ["lua", "Luba-Lulua"], ["luc", "Aringa"], ["lud", "Ludian"], ["lue", "Luvale"], ["luf", "Laua"], ["lui", "Luiseno"], ["luj", "Luna"], ["luk", "Lunanakha"], ["lul", "Olu'bo"], ["lum", "Luimbi"], ["lun", "Lunda"], ["luo", "Luo (Kenya and Tanzania), Dholuo"], ["lup", "Lumbu"], ["luq", "Lucumi"], ["lur", "Laura"], ["lus", "Lushai"], ["lut", "Lushootseed"], ["luu", "Lumba-Yakkha"], ["luv", "Luwati"], ["luw", "Luo (Cameroon)"], ["luy", "Luyia, Oluluyia"], ["luz", "Southern Luri"], ["lva", "Maku'a"], ["lvi", "Lavi"], ["lvk", "Lavukaleve"], ["lvs", "Standard Latvian"], ["lvu", "Levuka"], ["lwa", "Lwalu"], ["lwe", "Lewo Eleng"], ["lwg", "Wanga, Oluwanga"], ["lwh", "White Lachi"], ["lwl", "Eastern Lawa"], ["lwm", "Laomian"], ["lwo", "Luwo"], ["lws", "Malawian Sign Language"], ["lwt", "Lewotobi"], ["lwu", "Lawu"], ["lww", "Lewo"], ["lxm", "Lakurumau"], ["lya", "Layakha"], ["lyg", "Lyngngam"], ["lyn", "Luyana"], ["lzh", "Literary Chinese"], ["lzl", "Litzlitz"], ["lzn", "Leinong Naga"], ["lzz", "Laz"], ["maa", "San Jer\xF3nimo Tec\xF3atl Mazatec"], ["mab", "Yutanduchi Mixtec"], ["mad", "Madurese"], ["mae", "Bo-Rukul"], ["maf", "Mafa"], ["mag", "Magahi"], ["mai", "Maithili"], ["maj", "Jalapa De D\xEDaz Mazatec"], ["mak", "Makasar"], ["mam", "Mam"], ["man", "Mandingo, Manding"], ["map", "Austronesian languages"], ["maq", "Chiquihuitl\xE1n Mazatec"], ["mas", "Masai"], ["mat", "San Francisco Matlatzinca"], ["mau", "Huautla Mazatec"], ["mav", "Sater\xE9-Maw\xE9"], ["maw", "Mampruli"], ["max", "North Moluccan Malay"], ["maz", "Central Mazahua"], ["mba", "Higaonon"], ["mbb", "Western Bukidnon Manobo"], ["mbc", "Macushi"], ["mbd", "Dibabawon Manobo"], ["mbe", "Molale"], ["mbf", "Baba Malay"], ["mbh", "Mangseng"], ["mbi", "Ilianen Manobo"], ["mbj", "Nad\xEBb"], ["mbk", "Malol"], ["mbl", "Maxakal\xED"], ["mbm", "Ombamba"], ["mbn", "Macagu\xE1n"], ["mbo", "Mbo (Cameroon)"], ["mbp", "Malayo"], ["mbq", "Maisin"], ["mbr", "Nukak Mak\xFA"], ["mbs", "Sarangani Manobo"], ["mbt", "Matigsalug Manobo"], ["mbu", "Mbula-Bwazza"], ["mbv", "Mbulungish"], ["mbw", "Maring"], ["mbx", "Mari (East Sepik Province)"], ["mby", "Memoni"], ["mbz", "Amoltepec Mixtec"], ["mca", "Maca"], ["mcb", "Machiguenga"], ["mcc", "Bitur"], ["mcd", "Sharanahua"], ["mce", "Itundujia Mixtec"], ["mcf", "Mats\xE9s"], ["mcg", "Mapoyo"], ["mch", "Maquiritari"], ["mci", "Mese"], ["mcj", "Mvanip"], ["mck", "Mbunda"], ["mcl", "Macaguaje"], ["mcm", "Malaccan Creole Portuguese"], ["mcn", "Masana"], ["mco", "Coatl\xE1n Mixe"], ["mcp", "Makaa"], ["mcq", "Ese"], ["mcr", "Menya"], ["mcs", "Mambai"], ["mct", "Mengisa"], ["mcu", "Cameroon Mambila"], ["mcv", "Minanibai"], ["mcw", "Mawa (Chad)"], ["mcx", "Mpiemo"], ["mcy", "South Watut"], ["mcz", "Mawan"], ["mda", "Mada (Nigeria)"], ["mdb", "Morigi"], ["mdc", "Male (Papua New Guinea)"], ["mdd", "Mbum"], ["mde", "Maba (Chad)"], ["mdf", "Moksha"], ["mdg", "Massalat"], ["mdh", "Maguindanaon"], ["mdi", "Mamvu"], ["mdj", "Mangbetu"], ["mdk", "Mangbutu"], ["mdl", "Maltese Sign Language"], ["mdm", "Mayogo"], ["mdn", "Mbati"], ["mdp", "Mbala"], ["mdq", "Mbole"], ["mdr", "Mandar"], ["mds", "Maria (Papua New Guinea)"], ["mdt", "Mbere"], ["mdu", "Mboko"], ["mdv", "Santa Luc\xEDa Monteverde Mixtec"], ["mdw", "Mbosi"], ["mdx", "Dizin"], ["mdy", "Male (Ethiopia)"], ["mdz", "Suru\xED Do Par\xE1"], ["mea", "Menka"], ["meb", "Ikobi"], ["mec", "Marra"], ["med", "Melpa"], ["mee", "Mengen"], ["mef", "Megam"], ["meg", "Mea"], ["meh", "Southwestern Tlaxiaco Mixtec"], ["mei", "Midob"], ["mej", "Meyah"], ["mek", "Mekeo"], ["mel", "Central Melanau"], ["mem", "Mangala"], ["men", "Mende (Sierra Leone)"], ["meo", "Kedah Malay"], ["mep", "Miriwoong"], ["meq", "Merey"], ["mer", "Meru"], ["mes", "Masmaje"], ["met", "Mato"], ["meu", "Motu"], ["mev", "Mano"], ["mew", "Maaka"], ["mey", "Hassaniyya"], ["mez", "Menominee"], ["mfa", "Pattani Malay"], ["mfb", "Bangka"], ["mfc", "Mba"], ["mfd", "Mendankwe-Nkwen"], ["mfe", "Morisyen"], ["mff", "Naki"], ["mfg", "Mogofin"], ["mfh", "Matal"], ["mfi", "Wandala"], ["mfj", "Mefele"], ["mfk", "North Mofu"], ["mfl", "Putai"], ["mfm", "Marghi South"], ["mfn", "Cross River Mbembe"], ["mfo", "Mbe"], ["mfp", "Makassar Malay"], ["mfq", "Moba"], ["mfr", "Marrithiyel"], ["mfs", "Mexican Sign Language"], ["mft", "Mokerang"], ["mfu", "Mbwela"], ["mfv", "Mandjak"], ["mfw", "Mulaha"], ["mfx", "Melo"], ["mfy", "Mayo"], ["mfz", "Mabaan"], ["mga", "Middle Irish (900-1200)"], ["mgb", "Mararit"], ["mgc", "Morokodo"], ["mgd", "Moru"], ["mge", "Mango"], ["mgf", "Maklew"], ["mgg", "Mpumpong"], ["mgh", "Makhuwa-Meetto"], ["mgi", "Lijili"], ["mgj", "Abureni"], ["mgk", "Mawes"], ["mgl", "Maleu-Kilenge"], ["mgm", "Mambae"], ["mgn", "Mbangi"], ["mgo", "Meta'"], ["mgp", "Eastern Magar"], ["mgq", "Malila"], ["mgr", "Mambwe-Lungu"], ["mgs", "Manda (Tanzania)"], ["mgt", "Mongol"], ["mgu", "Mailu"], ["mgv", "Matengo"], ["mgw", "Matumbi"], ["mgx", "Omati"], ["mgy", "Mbunga"], ["mgz", "Mbugwe"], ["mha", "Manda (India)"], ["mhb", "Mahongwe"], ["mhc", "Mocho"], ["mhd", "Mbugu"], ["mhe", "Besisi, Mah Meri"], ["mhf", "Mamaa"], ["mhg", "Margu"], ["mhh", "Maskoy Pidgin"], ["mhi", "Ma'di"], ["mhj", "Mogholi"], ["mhk", "Mungaka"], ["mhl", "Mauwake"], ["mhm", "Makhuwa-Moniga"], ["mhn", "M\xF3cheno"], ["mho", "Mashi (Zambia)"], ["mhp", "Balinese Malay"], ["mhq", "Mandan"], ["mhr", "Eastern Mari"], ["mhs", "Buru (Indonesia)"], ["mht", "Mandahuaca"], ["mhu", "Digaro-Mishmi, Darang Deng"], ["mhw", "Mbukushu"], ["mhx", "Maru, Lhaovo"], ["mhy", "Ma'anyan"], ["mhz", "Mor (Mor Islands)"], ["mia", "Miami"], ["mib", "Atatl\xE1huca Mixtec"], ["mic", "Mi'kmaq, Micmac"], ["mid", "Mandaic"], ["mie", "Ocotepec Mixtec"], ["mif", "Mofu-Gudur"], ["mig", "San Miguel El Grande Mixtec"], ["mih", "Chayuco Mixtec"], ["mii", "Chigmecatitl\xE1n Mixtec"], ["mij", "Abar, Mungbam"], ["mik", "Mikasuki"], ["mil", "Pe\xF1oles Mixtec"], ["mim", "Alacatlatzala Mixtec"], ["min", "Minangkabau"], ["mio", "Pinotepa Nacional Mixtec"], ["mip", "Apasco-Apoala Mixtec"], ["miq", "M\xEDskito"], ["mir", "Isthmus Mixe"], ["mis", "Uncoded languages"], ["mit", "Southern Puebla Mixtec"], ["miu", "Cacaloxtepec Mixtec"], ["miw", "Akoye"], ["mix", "Mixtepec Mixtec"], ["miy", "Ayutla Mixtec"], ["miz", "Coatzospan Mixtec"], ["mja", "Mahei"], ["mjb", "Makalero"], ["mjc", "San Juan Colorado Mixtec"], ["mjd", "Northwest Maidu"], ["mje", "Muskum"], ["mjg", "Tu"], ["mjh", "Mwera (Nyasa)"], ["mji", "Kim Mun"], ["mjj", "Mawak"], ["mjk", "Matukar"], ["mjl", "Mandeali"], ["mjm", "Medebur"], ["mjn", "Ma (Papua New Guinea)"], ["mjo", "Malankuravan"], ["mjp", "Malapandaram"], ["mjq", "Malaryan"], ["mjr", "Malavedan"], ["mjs", "Miship"], ["mjt", "Sauria Paharia"], ["mju", "Manna-Dora"], ["mjv", "Mannan"], ["mjw", "Karbi"], ["mjx", "Mahali"], ["mjy", "Mahican"], ["mjz", "Majhi"], ["mka", "Mbre"], ["mkb", "Mal Paharia"], ["mkc", "Siliput"], ["mke", "Mawchi"], ["mkf", "Miya"], ["mkg", "Mak (China)"], ["mkh", "Mon-Khmer languages"], ["mki", "Dhatki"], ["mkj", "Mokilese"], ["mkk", "Byep"], ["mkl", "Mokole"], ["mkm", "Moklen"], ["mkn", "Kupang Malay"], ["mko", "Mingang Doso"], ["mkp", "Moikodi"], ["mkq", "Bay Miwok"], ["mkr", "Malas"], ["mks", "Silacayoapan Mixtec"], ["mkt", "Vamale"], ["mku", "Konyanka Maninka"], ["mkv", "Mafea"], ["mkw", "Kituba (Congo)"], ["mkx", "Kinamiging Manobo"], ["mky", "East Makian"], ["mkz", "Makasae"], ["mla", "Malo"], ["mlb", "Mbule"], ["mlc", "Cao Lan"], ["mld", "Malakhel"], ["mle", "Manambu"], ["mlf", "Mal"], ["mlh", "Mape"], ["mli", "Malimpung"], ["mlj", "Miltu"], ["mlk", "Ilwana, Kiwilwana"], ["mll", "Malua Bay"], ["mlm", "Mulam"], ["mln", "Malango"], ["mlo", "Mlomp"], ["mlp", "Bargam"], ["mlq", "Western Maninkakan"], ["mlr", "Vame"], ["mls", "Masalit"], ["mlu", "To'abaita"], ["mlv", "Motlav, Mwotlap"], ["mlw", "Moloko"], ["mlx", "Malfaxal, Naha'ai"], ["mlz", "Malaynon"], ["mma", "Mama"], ["mmb", "Momina"], ["mmc", "Michoac\xE1n Mazahua"], ["mmd", "Maonan"], ["mme", "Mae"], ["mmf", "Mundat"], ["mmg", "North Ambrym"], ["mmh", "Mehin\xE1ku"], ["mmi", "Musar"], ["mmj", "Majhwar"], ["mmk", "Mukha-Dora"], ["mml", "Man Met"], ["mmm", "Maii"], ["mmn", "Mamanwa"], ["mmo", "Mangga Buang"], ["mmp", "Siawi"], ["mmq", "Musak"], ["mmr", "Western Xiangxi Miao"], ["mmt", "Malalamai"], ["mmu", "Mmaala"], ["mmv", "Miriti"], ["mmw", "Emae"], ["mmx", "Madak"], ["mmy", "Migaama"], ["mmz", "Mabaale"], ["mna", "Mbula"], ["mnb", "Muna"], ["mnc", "Manchu"], ["mnd", "Mond\xE9"], ["mne", "Naba"], ["mnf", "Mundani"], ["mng", "Eastern Mnong"], ["mnh", "Mono (Democratic Republic of Congo)"], ["mni", "Manipuri"], ["mnj", "Munji"], ["mnk", "Mandinka"], ["mnl", "Tiale"], ["mnm", "Mapena"], ["mnn", "Southern Mnong"], ["mno", "Manobo languages"], ["mnp", "Min Bei Chinese"], ["mnq", "Minriq"], ["mnr", "Mono (USA)"], ["mns", "Mansi"], ["mnt", "Maykulan"], ["mnu", "Mer"], ["mnv", "Rennell-Bellona"], ["mnw", "Mon"], ["mnx", "Manikion"], ["mny", "Manyawa"], ["mnz", "Moni"], ["moa", "Mwan"], ["moc", "Mocov\xED"], ["mod", "Mobilian"], ["moe", "Innu, Montagnais"], ["mof", "Mohegan-Montauk-Narragansett"], ["mog", "Mongondow"], ["moh", "Mohawk"], ["moi", "Mboi"], ["moj", "Monzombo"], ["mok", "Morori"], ["mom", "Mangue"], ["moo", "Monom"], ["mop", "Mop\xE1n Maya"], ["moq", "Mor (Bomberai Peninsula)"], ["mor", "Moro"], ["mos", "Mossi"], ["mot", "Bar\xED"], ["mou", "Mogum"], ["mov", "Mohave"], ["mow", "Moi (Congo)"], ["mox", "Molima"], ["moy", "Shekkacho"], ["moz", "Mukulu, Gergiko"], ["mpa", "Mpoto"], ["mpb", "Malak Malak, Mullukmulluk"], ["mpc", "Mangarrayi"], ["mpd", "Machinere"], ["mpe", "Majang"], ["mpg", "Marba"], ["mph", "Maung"], ["mpi", "Mpade"], ["mpj", "Martu Wangka, Wangkajunga"], ["mpk", "Mbara (Chad)"], ["mpl", "Middle Watut"], ["mpm", "Yosond\xFAa Mixtec"], ["mpn", "Mindiri"], ["mpo", "Miu"], ["mpp", "Migabac"], ["mpq", "Mat\xEDs"], ["mpr", "Vangunu"], ["mps", "Dadibi"], ["mpt", "Mian"], ["mpu", "Makur\xE1p"], ["mpv", "Mungkip"], ["mpw", "Mapidian"], ["mpx", "Misima-Panaeati"], ["mpy", "Mapia"], ["mpz", "Mpi"], ["mqa", "Maba (Indonesia)"], ["mqb", "Mbuko"], ["mqc", "Mangole"], ["mqe", "Matepi"], ["mqf", "Momuna"], ["mqg", "Kota Bangun Kutai Malay"], ["mqh", "Tlazoyaltepec Mixtec"], ["mqi", "Mariri"], ["mqj", "Mamasa"], ["mqk", "Rajah Kabunsuwan Manobo"], ["mql", "Mbelime"], ["mqm", "South Marquesan"], ["mqn", "Moronene"], ["mqo", "Modole"], ["mqp", "Manipa"], ["mqq", "Minokok"], ["mqr", "Mander"], ["mqs", "West Makian"], ["mqt", "Mok"], ["mqu", "Mandari"], ["mqv", "Mosimo"], ["mqw", "Murupi"], ["mqx", "Mamuju"], ["mqy", "Manggarai"], ["mqz", "Pano"], ["mra", "Mlabri"], ["mrb", "Marino"], ["mrc", "Maricopa"], ["mrd", "Western Magar"], ["mre", "Martha's Vineyard Sign Language"], ["mrf", "Elseng"], ["mrg", "Mising"], ["mrh", "Mara Chin"], ["mrj", "Western Mari"], ["mrk", "Hmwaveke"], ["mrl", "Mortlockese"], ["mrm", "Merlav, Mwerlap"], ["mrn", "Cheke Holo"], ["mro", "Mru"], ["mrp", "Morouas"], ["mrq", "North Marquesan"], ["mrr", "Maria (India)"], ["mrs", "Maragus"], ["mrt", "Marghi Central"], ["mru", "Mono (Cameroon)"], ["mrv", "Mangareva"], ["mrw", "Maranao"], ["mrx", "Maremgi, Dineor"], ["mry", "Mandaya"], ["mrz", "Marind"], ["msb", "Masbatenyo"], ["msc", "Sankaran Maninka"], ["msd", "Yucatec Maya Sign Language"], ["mse", "Musey"], ["msf", "Mekwei"], ["msg", "Moraid"], ["msh", "Masikoro Malagasy"], ["msi", "Sabah Malay"], ["msj", "Ma (Democratic Republic of Congo)"], ["msk", "Mansaka"], ["msl", "Molof, Poule"], ["msm", "Agusan Manobo"], ["msn", "Vur\xEBs"], ["mso", "Mombum"], ["msp", "Maritsau\xE1"], ["msq", "Caac"], ["msr", "Mongolian Sign Language"], ["mss", "West Masela"], ["mst", "Cataelano Mandaya"], ["msu", "Musom"], ["msv", "Maslam"], ["msw", "Mansoanka"], ["msx", "Moresada"], ["msy", "Aruamu"], ["msz", "Momare"], ["mta", "Cotabato Manobo"], ["mtb", "Anyin Morofo"], ["mtc", "Munit"], ["mtd", "Mualang"], ["mte", "Mono (Solomon Islands)"], ["mtf", "Murik (Papua New Guinea)"], ["mtg", "Una"], ["mth", "Munggui"], ["mti", "Maiwa (Papua New Guinea)"], ["mtj", "Moskona"], ["mtk", "Mbe'"], ["mtl", "Montol"], ["mtm", "Mator"], ["mtn", "Matagalpa"], ["mto", "Totontepec Mixe"], ["mtp", "Wich\xED Lhamt\xE9s Nocten"], ["mtq", "Muong"], ["mtr", "Mewari"], ["mts", "Yora"], ["mtt", "Mota"], ["mtu", "Tututepec Mixtec"], ["mtv", "Asaro'o"], ["mtw", "Southern Binukidnon"], ["mtx", "Tida\xE1 Mixtec"], ["mty", "Nabi"], ["mua", "Mundang"], ["mub", "Mubi"], ["muc", "Ajumbu"], ["mud", "Mednyj Aleut"], ["mue", "Media Lengua"], ["mug", "Musgu"], ["muh", "M\xFCnd\xFC"], ["mui", "Musi"], ["muj", "Mabire"], ["muk", "Mugom"], ["mul", "Multiple languages"], ["mum", "Maiwala"], ["mun", "Munda languages"], ["muo", "Nyong"], ["mup", "Malvi"], ["muq", "Eastern Xiangxi Miao"], ["mur", "Murle"], ["mus", "Creek"], ["mut", "Western Muria"], ["muu", "Yaaku"], ["muv", "Muthuvan"], ["mux", "Bo-Ung"], ["muy", "Muyang"], ["muz", "Mursi"], ["mva", "Manam"], ["mvb", "Mattole"], ["mvd", "Mamboru"], ["mve", "Marwari (Pakistan)"], ["mvf", "Peripheral Mongolian"], ["mvg", "Yucua\xF1e Mixtec"], ["mvh", "Mulgi"], ["mvi", "Miyako"], ["mvk", "Mekmek"], ["mvl", "Mbara (Australia)"], ["mvm", "Muya"], ["mvn", "Minaveha"], ["mvo", "Marovo"], ["mvp", "Duri"], ["mvq", "Moere"], ["mvr", "Marau"], ["mvs", "Massep"], ["mvt", "Mpotovoro"], ["mvu", "Marfa"], ["mvv", "Tagal Murut"], ["mvw", "Machinga"], ["mvx", "Meoswar"], ["mvy", "Indus Kohistani"], ["mvz", "Mesqan"], ["mwa", "Mwatebu"], ["mwb", "Juwal"], ["mwc", "Are"], ["mwd", "Mudbura"], ["mwe", "Mwera (Chimwera)"], ["mwf", "Murrinh-Patha"], ["mwg", "Aiklep"], ["mwh", "Mouk-Aria"], ["mwi", "Labo, Ninde"], ["mwj", "Maligo"], ["mwk", "Kita Maninkakan"], ["mwl", "Mirandese"], ["mwm", "Sar"], ["mwn", "Nyamwanga"], ["mwo", "Central Maewo"], ["mwp", "Kala Lagaw Ya"], ["mwq", "M\xFCn Chin"], ["mwr", "Marwari"], ["mws", "Mwimbi-Muthambi"], ["mwt", "Moken"], ["mwu", "Mittu"], ["mwv", "Mentawai"], ["mww", "Hmong Daw"], ["mwx", "Mediak"], ["mwy", "Mosiro"], ["mwz", "Moingi"], ["mxa", "Northwest Oaxaca Mixtec"], ["mxb", "Tezoatl\xE1n Mixtec"], ["mxc", "Manyika"], ["mxd", "Modang"], ["mxe", "Mele-Fila"], ["mxf", "Malgbe"], ["mxg", "Mbangala"], ["mxh", "Mvuba"], ["mxi", "Mozarabic"], ["mxj", "Miju-Mishmi, Geman Deng"], ["mxk", "Monumbo"], ["mxl", "Maxi Gbe"], ["mxm", "Meramera"], ["mxn", "Moi (Indonesia)"], ["mxo", "Mbowe"], ["mxp", "Tlahuitoltepec Mixe"], ["mxq", "Juquila Mixe"], ["mxr", "Murik (Malaysia)"], ["mxs", "Huitepec Mixtec"], ["mxt", "Jamiltepec Mixtec"], ["mxu", "Mada (Cameroon)"], ["mxv", "Metlat\xF3noc Mixtec"], ["mxw", "Namo"], ["mxx", "Mahou, Mawukakan"], ["mxy", "Southeastern Nochixtl\xE1n Mixtec"], ["mxz", "Central Masela"], ["myb", "Mbay"], ["myc", "Mayeka"], ["myd", "Maramba"], ["mye", "Myene"], ["myf", "Bambassi"], ["myg", "Manta"], ["myh", "Makah"], ["myi", "Mina (India)"], ["myj", "Mangayat"], ["myk", "Mamara Senoufo"], ["myl", "Moma"], ["mym", "Me'en"], ["myn", "Mayan languages"], ["myo", "Anfillo"], ["myp", "Pirah\xE3"], ["myq", "Forest Maninka"], ["myr", "Muniche"], ["mys", "Mesmes"], ["myt", "Sangab Mandaya"], ["myu", "Munduruk\xFA"], ["myv", "Erzya"], ["myw", "Muyuw"], ["myx", "Masaaba"], ["myy", "Macuna"], ["myz", "Classical Mandaic"], ["mza", "Santa Mar\xEDa Zacatepec Mixtec"], ["mzb", "Tumzabt"], ["mzc", "Madagascar Sign Language"], ["mzd", "Malimba"], ["mze", "Morawa"], ["mzg", "Monastic Sign Language"], ["mzh", "Wich\xED Lhamt\xE9s G\xFCisnay"], ["mzi", "Ixcatl\xE1n Mazatec"], ["mzj", "Manya"], ["mzk", "Nigeria Mambila"], ["mzl", "Mazatl\xE1n Mixe"], ["mzm", "Mumuye"], ["mzn", "Mazanderani"], ["mzo", "Matipuhy"], ["mzp", "Movima"], ["mzq", "Mori Atas"], ["mzr", "Mar\xFAbo"], ["mzs", "Macanese"], ["mzt", "Mintil"], ["mzu", "Inapang"], ["mzv", "Manza"], ["mzw", "Deg"], ["mzx", "Mawayana"], ["mzy", "Mozambican Sign Language"], ["mzz", "Maiadomu"], ["naa", "Namla"], ["nab", "Southern Nambiku\xE1ra"], ["nac", "Narak"], ["nad", "Nijadali"], ["nae", "Naka'ela"], ["naf", "Nabak"], ["nag", "Naga Pidgin"], ["nah", "Nahuatl languages"], ["nai", "North American Indian languages"], ["naj", "Nalu"], ["nak", "Nakanai"], ["nal", "Nalik"], ["nam", "Ngan'gityemerri"], ["nan", "Min Nan Chinese"], ["nao", "Naaba"], ["nap", "Neapolitan"], ["naq", "Khoekhoe, Nama (Namibia)"], ["nar", "Iguta"], ["nas", "Naasioi"], ["nat", "Ca\u0331hungwa\u0331rya\u0331, Hungworo"], ["naw", "Nawuri"], ["nax", "Nakwi"], ["nay", "Ngarrindjeri"], ["naz", "Coatepec Nahuatl"], ["nba", "Nyemba"], ["nbb", "Ndoe"], ["nbc", "Chang Naga"], ["nbd", "Ngbinda"], ["nbe", "Konyak Naga"], ["nbf", "Naxi"], ["nbg", "Nagarchal"], ["nbh", "Ngamo"], ["nbi", "Mao Naga"], ["nbj", "Ngarinyman"], ["nbk", "Nake"], ["nbm", "Ngbaka Ma'bo"], ["nbn", "Kuri"], ["nbo", "Nkukoli"], ["nbp", "Nnam"], ["nbq", "Nggem"], ["nbr", "Numana"], ["nbs", "Namibian Sign Language"], ["nbt", "Na"], ["nbu", "Rongmei Naga"], ["nbv", "Ngamambo"], ["nbw", "Southern Ngbandi"], ["nbx", "Ngura"], ["nby", "Ningera"], ["nca", "Iyo"], ["ncb", "Central Nicobarese"], ["ncc", "Ponam"], ["ncd", "Nachering"], ["nce", "Yale"], ["ncf", "Notsi"], ["ncg", "Nisga'a"], ["nch", "Central Huasteca Nahuatl"], ["nci", "Classical Nahuatl"], ["ncj", "Northern Puebla Nahuatl"], ["nck", "Na-kara"], ["ncl", "Michoac\xE1n Nahuatl"], ["ncm", "Nambo"], ["ncn", "Nauna"], ["nco", "Sibe"], ["ncp", "Ndaktup"], ["ncq", "Northern Katang"], ["ncr", "Ncane"], ["ncs", "Nicaraguan Sign Language"], ["nct", "Chothe Naga"], ["ncu", "Chumburung"], ["ncx", "Central Puebla Nahuatl"], ["ncz", "Natchez"], ["nda", "Ndasa"], ["ndb", "Kenswei Nsei"], ["ndc", "Ndau"], ["ndd", "Nde-Nsele-Nta"], ["ndf", "Nadruvian"], ["ndg", "Ndengereko"], ["ndh", "Ndali"], ["ndi", "Samba Leko"], ["ndj", "Ndamba"], ["ndk", "Ndaka"], ["ndl", "Ndolo"], ["ndm", "Ndam"], ["ndn", "Ngundi"], ["ndp", "Ndo"], ["ndq", "Ndombe"], ["ndr", "Ndoola"], ["nds", "Low German, Low Saxon"], ["ndt", "Ndunga"], ["ndu", "Dugun"], ["ndv", "Ndut"], ["ndw", "Ndobo"], ["ndx", "Nduga"], ["ndy", "Lutos"], ["ndz", "Ndogo"], ["nea", "Eastern Ngad'a"], ["neb", "Toura (C\xF4te d'Ivoire)"], ["nec", "Nedebang"], ["ned", "Nde-Gbite"], ["nee", "N\xEAl\xEAmwa-Nixumwak"], ["nef", "Nefamese"], ["neg", "Negidal"], ["neh", "Nyenkha"], ["nei", "Neo-Hittite"], ["nej", "Neko"], ["nek", "Neku"], ["nem", "Nemi"], ["nen", "Nengone"], ["neo", "N\xE1-Meo"], ["neq", "North Central Mixe"], ["ner", "Yahadian"], ["nes", "Bhoti Kinnauri"], ["net", "Nete"], ["neu", "Neo"], ["nev", "Nyaheun"], ["new", "Newari, Nepal Bhasa"], ["nex", "Neme"], ["ney", "Neyo"], ["nez", "Nez Perce"], ["nfa", "Dhao"], ["nfd", "Ahwai"], ["nfl", "Ayiwo, \xC4iwoo"], ["nfr", "Nafaanra"], ["nfu", "Mfumte"], ["nga", "Ngbaka"], ["ngb", "Northern Ngbandi"], ["ngc", "Ngombe (Democratic Republic of Congo)"], ["ngd", "Ngando (Central African Republic)"], ["nge", "Ngemba"], ["ngf", "Trans-New Guinea languages"], ["ngg", "Ngbaka Manza"], ["ngh", "N\u01C1ng"], ["ngi", "Ngizim"], ["ngj", "Ngie"], ["ngk", "Dalabon"], ["ngl", "Lomwe"], ["ngm", "Ngatik Men's Creole"], ["ngn", "Ngwo"], ["ngo", "Ngoni"], ["ngp", "Ngulu"], ["ngq", "Ngurimi, Ngoreme"], ["ngr", "Engdewu"], ["ngs", "Gvoko"], ["ngt", "Kriang, Ngeq"], ["ngu", "Guerrero Nahuatl"], ["ngv", "Nagumi"], ["ngw", "Ngwaba"], ["ngx", "Nggwahyi"], ["ngy", "Tibea"], ["ngz", "Ngungwel"], ["nha", "Nhanda"], ["nhb", "Beng"], ["nhc", "Tabasco Nahuatl"], ["nhd", "Chirip\xE1, Ava Guaran\xED"], ["nhe", "Eastern Huasteca Nahuatl"], ["nhf", "Nhuwala"], ["nhg", "Tetelcingo Nahuatl"], ["nhh", "Nahari"], ["nhi", "Zacatl\xE1n-Ahuacatl\xE1n-Tepetzintla Nahuatl"], ["nhk", "Isthmus-Cosoleacaque Nahuatl"], ["nhm", "Morelos Nahuatl"], ["nhn", "Central Nahuatl"], ["nho", "Takuu"], ["nhp", "Isthmus-Pajapan Nahuatl"], ["nhq", "Huaxcaleca Nahuatl"], ["nhr", "Naro"], ["nht", "Ometepec Nahuatl"], ["nhu", "Noone"], ["nhv", "Temascaltepec Nahuatl"], ["nhw", "Western Huasteca Nahuatl"], ["nhx", "Isthmus-Mecayapan Nahuatl"], ["nhy", "Northern Oaxaca Nahuatl"], ["nhz", "Santa Mar\xEDa La Alta Nahuatl"], ["nia", "Nias"], ["nib", "Nakame"], ["nic", "Niger-Kordofanian languages"], ["nid", "Ngandi"], ["nie", "Niellim"], ["nif", "Nek"], ["nig", "Ngalakgan"], ["nih", "Nyiha (Tanzania)"], ["nii", "Nii"], ["nij", "Ngaju"], ["nik", "Southern Nicobarese"], ["nil", "Nila"], ["nim", "Nilamba"], ["nin", "Ninzo"], ["nio", "Nganasan"], ["niq", "Nandi"], ["nir", "Nimboran"], ["nis", "Nimi"], ["nit", "Southeastern Kolami"], ["niu", "Niuean"], ["niv", "Gilyak"], ["niw", "Nimo"], ["nix", "Hema"], ["niy", "Ngiti"], ["niz", "Ningil"], ["nja", "Nzanyi"], ["njb", "Nocte Naga"], ["njd", "Ndonde Hamba"], ["njh", "Lotha Naga"], ["nji", "Gudanji"], ["njj", "Njen"], ["njl", "Njalgulgule"], ["njm", "Angami Naga"], ["njn", "Liangmai Naga"], ["njo", "Ao Naga"], ["njr", "Njerep"], ["njs", "Nisa"], ["njt", "Ndyuka-Trio Pidgin"], ["nju", "Ngadjunmaya"], ["njx", "Kunyi"], ["njy", "Njyem"], ["njz", "Nyishi"], ["nka", "Nkoya"], ["nkb", "Khoibu Naga"], ["nkc", "Nkongho"], ["nkd", "Koireng"], ["nke", "Duke"], ["nkf", "Inpui Naga"], ["nkg", "Nekgini"], ["nkh", "Khezha Naga"], ["nki", "Thangal Naga"], ["nkj", "Nakai"], ["nkk", "Nokuku"], ["nkm", "Namat"], ["nkn", "Nkangala"], ["nko", "Nkonya"], ["nkp", "Niuatoputapu"], ["nkq", "Nkami"], ["nkr", "Nukuoro"], ["nks", "North Asmat"], ["nkt", "Nyika (Tanzania)"], ["nku", "Bouna Kulango"], ["nkv", "Nyika (Malawi and Zambia)"], ["nkw", "Nkutu"], ["nkx", "Nkoroo"], ["nkz", "Nkari"], ["nla", "Ngombale"], ["nlc", "Nalca"], ["nle", "East Nyala"], ["nlg", "Gela"], ["nli", "Grangali"], ["nlj", "Nyali"], ["nlk", "Ninia Yali"], ["nll", "Nihali"], ["nlm", "Mankiyali"], ["nln", "Durango Nahuatl"], ["nlo", "Ngul"], ["nlq", "Lao Naga"], ["nlr", "Ngarla"], ["nlu", "Nchumbulu"], ["nlv", "Orizaba Nahuatl"], ["nlw", "Walangama"], ["nlx", "Nahali"], ["nly", "Nyamal"], ["nlz", "Nal\xF6go"], ["nma", "Maram Naga"], ["nmb", "Big Nambas, V'\xEBnen Taut"], ["nmc", "Ngam"], ["nmd", "Ndumu"], ["nme", "Mzieme Naga"], ["nmf", "Tangkhul Naga (India)"], ["nmg", "Kwasio"], ["nmh", "Monsang Naga"], ["nmi", "Nyam"], ["nmj", "Ngombe (Central African Republic)"], ["nmk", "Namakura"], ["nml", "Ndemli"], ["nmm", "Manangba"], ["nmn", "\u01C3X\xF3\xF5"], ["nmo", "Moyon Naga"], ["nmp", "Nimanbur"], ["nmq", "Nambya"], ["nmr", "Nimbari"], ["nms", "Letemboi"], ["nmt", "Namonuito"], ["nmu", "Northeast Maidu"], ["nmv", "Ngamini"], ["nmw", "Nimoa, Rifao"], ["nmx", "Nama (Papua New Guinea)"], ["nmy", "Namuyi"], ["nmz", "Nawdm"], ["nna", "Nyangumarta"], ["nnb", "Nande"], ["nnc", "Nancere"], ["nnd", "West Ambae"], ["nne", "Ngandyera"], ["nnf", "Ngaing"], ["nng", "Maring Naga"], ["nnh", "Ngiemboon"], ["nni", "North Nuaulu"], ["nnj", "Nyangatom"], ["nnk", "Nankina"], ["nnl", "Northern Rengma Naga"], ["nnm", "Namia"], ["nnn", "Ngete"], ["nnp", "Wancho Naga"], ["nnq", "Ngindo"], ["nnr", "Narungga"], ["nns", "Ningye"], ["nnt", "Nanticoke"], ["nnu", "Dwang"], ["nnv", "Nugunu (Australia)"], ["nnw", "Southern Nuni"], ["nnx", "Ngong"], ["nny", "Nyangga"], ["nnz", "Nda'nda'"], ["noa", "Woun Meu"], ["noc", "Nuk"], ["nod", "Northern Thai"], ["noe", "Nimadi"], ["nof", "Nomane"], ["nog", "Nogai"], ["noh", "Nomu"], ["noi", "Noiri"], ["noj", "Nonuya"], ["nok", "Nooksack"], ["nol", "Nomlaki"], ["nom", "Nocam\xE1n"], ["non", "Old Norse"], ["noo", "Nootka"], ["nop", "Numanggang"], ["noq", "Ngongo"], ["nos", "Eastern Nisu"], ["not", "Nomatsiguenga"], ["nou", "Ewage-Notu"], ["nov", "Novial"], ["now", "Nyambo"], ["noy", "Noy"], ["noz", "Nayi"], ["npa", "Nar Phu"], ["npb", "Nupbikha"], ["npg", "Ponyo-Gongwang Naga"], ["nph", "Phom Naga"], ["npi", "Nepali (individual language)"], ["npl", "Southeastern Puebla Nahuatl"], ["npn", "Mondropolon"], ["npo", "Pochuri Naga"], ["nps", "Nipsan"], ["npu", "Puimei Naga"], ["npx", "Noipx"], ["npy", "Napu"], ["nqg", "Southern Nago"], ["nqk", "Kura Ede Nago"], ["nql", "Ngendelengo"], ["nqm", "Ndom"], ["nqn", "Nen"], ["nqo", "N'Ko, N\u2019Ko"], ["nqq", "Kyan-Karyaw Naga"], ["nqt", "Nteng"], ["nqy", "Akyaung Ari Naga"], ["nra", "Ngom"], ["nrb", "Nara"], ["nrc", "Noric"], ["nre", "Southern Rengma Naga"], ["nrf", "J\xE8rriais, Guern\xE9siais"], ["nrg", "Narango"], ["nri", "Chokri Naga"], ["nrk", "Ngarla"], ["nrl", "Ngarluma"], ["nrm", "Narom"], ["nrn", "Norn"], ["nrp", "North Picene"], ["nrr", "Norra, Nora"], ["nrt", "Northern Kalapuya"], ["nru", "Narua"], ["nrx", "Ngurmbur"], ["nrz", "Lala"], ["nsa", "Sangtam Naga"], ["nsb", "Lower Nossob"], ["nsc", "Nshi"], ["nsd", "Southern Nisu"], ["nse", "Nsenga"], ["nsf", "Northwestern Nisu"], ["nsg", "Ngasa"], ["nsh", "Ngoshie"], ["nsi", "Nigerian Sign Language"], ["nsk", "Naskapi"], ["nsl", "Norwegian Sign Language"], ["nsm", "Sumi Naga"], ["nsn", "Nehan"], ["nso", "Pedi, Northern Sotho, Sepedi"], ["nsp", "Nepalese Sign Language"], ["nsq", "Northern Sierra Miwok"], ["nsr", "Maritime Sign Language"], ["nss", "Nali"], ["nst", "Tase Naga"], ["nsu", "Sierra Negra Nahuatl"], ["nsv", "Southwestern Nisu"], ["nsw", "Navut"], ["nsx", "Nsongo"], ["nsy", "Nasal"], ["nsz", "Nisenan"], ["ntd", "Northern Tidung"], ["nte", "Nathembo"], ["ntg", "Ngantangarra"], ["nti", "Natioro"], ["ntj", "Ngaanyatjarra"], ["ntk", "Ikoma-Nata-Isenye"], ["ntm", "Nateni"], ["nto", "Ntomba"], ["ntp", "Northern Tepehuan"], ["ntr", "Delo"], ["nts", "Natagaimas"], ["ntu", "Nat\xFCgu"], ["ntw", "Nottoway"], ["ntx", "Tangkhul Naga (Myanmar)"], ["nty", "Mantsi"], ["ntz", "Natanzi"], ["nua", "Yuanga"], ["nub", "Nubian languages"], ["nuc", "Nukuini"], ["nud", "Ngala"], ["nue", "Ngundu"], ["nuf", "Nusu"], ["nug", "Nungali"], ["nuh", "Ndunda"], ["nui", "Ngumbi"], ["nuj", "Nyole"], ["nuk", "Nuu-chah-nulth, Nuuchahnulth"], ["nul", "Nusa Laut"], ["num", "Niuafo'ou"], ["nun", "Anong"], ["nuo", "Ngu\xF4n"], ["nup", "Nupe-Nupe-Tako"], ["nuq", "Nukumanu"], ["nur", "Nukuria"], ["nus", "Nuer"], ["nut", "Nung (Viet Nam)"], ["nuu", "Ngbundu"], ["nuv", "Northern Nuni"], ["nuw", "Nguluwan"], ["nux", "Mehek"], ["nuy", "Nunggubuyu"], ["nuz", "Tlamacazapa Nahuatl"], ["nvh", "Nasarian"], ["nvm", "Namiae"], ["nvo", "Nyokon"], ["nwa", "Nawathinehena"], ["nwb", "Nyabwa"], ["nwc", "Classical Newari, Classical Nepal Bhasa, Old Newari"], ["nwe", "Ngwe"], ["nwg", "Ngayawung"], ["nwi", "Southwest Tanna"], ["nwm", "Nyamusa-Molo"], ["nwo", "Nauo"], ["nwr", "Nawaru"], ["nwx", "Middle Newar"], ["nwy", "Nottoway-Meherrin"], ["nxa", "Nauete"], ["nxd", "Ngando (Democratic Republic of Congo)"], ["nxe", "Nage"], ["nxg", "Ngad'a"], ["nxi", "Nindi"], ["nxk", "Koki Naga"], ["nxl", "South Nuaulu"], ["nxm", "Numidian"], ["nxn", "Ngawun"], ["nxo", "Ndambomo"], ["nxq", "Naxi"], ["nxr", "Ninggerum"], ["nxu", "Narau"], ["nxx", "Nafri"], ["nyb", "Nyangbo"], ["nyc", "Nyanga-li"], ["nyd", "Nyore, Olunyole"], ["nye", "Nyengo"], ["nyf", "Giryama, Kigiryama"], ["nyg", "Nyindu"], ["nyh", "Nyikina"], ["nyi", "Ama (Sudan)"], ["nyj", "Nyanga"], ["nyk", "Nyaneka"], ["nyl", "Nyeu"], ["nym", "Nyamwezi"], ["nyn", "Nyankole"], ["nyo", "Nyoro"], ["nyp", "Nyang'i"], ["nyq", "Nayini"], ["nyr", "Nyiha (Malawi)"], ["nys", "Nyungar"], ["nyt", "Nyawaygi"], ["nyu", "Nyungwe"], ["nyv", "Nyulnyul"], ["nyw", "Nyaw"], ["nyx", "Nganyaywana"], ["nyy", "Nyakyusa-Ngonde"], ["nza", "Tigon Mbembe"], ["nzb", "Njebi"], ["nzd", "Nzadi"], ["nzi", "Nzima"], ["nzk", "Nzakara"], ["nzm", "Zeme Naga"], ["nzs", "New Zealand Sign Language"], ["nzu", "Teke-Nzikou"], ["nzy", "Nzakambay"], ["nzz", "Nanga Dama Dogon"], ["oaa", "Orok"], ["oac", "Oroch"], ["oar", "Old Aramaic (up to 700 BCE), Ancient Aramaic (up to 700 BCE)"], ["oav", "Old Avar"], ["obi", "Obispe\xF1o"], ["obk", "Southern Bontok"], ["obl", "Oblo"], ["obm", "Moabite"], ["obo", "Obo Manobo"], ["obr", "Old Burmese"], ["obt", "Old Breton"], ["obu", "Obulom"], ["oca", "Ocaina"], ["och", "Old Chinese"], ["ocm", "Old Cham"], ["oco", "Old Cornish"], ["ocu", "Atzingo Matlatzinca"], ["oda", "Odut"], ["odk", "Od"], ["odt", "Old Dutch"], ["odu", "Odual"], ["ofo", "Ofo"], ["ofs", "Old Frisian"], ["ofu", "Efutop"], ["ogb", "Ogbia"], ["ogc", "Ogbah"], ["oge", "Old Georgian"], ["ogg", "Ogbogolo"], ["ogo", "Khana"], ["ogu", "Ogbronuagum"], ["oht", "Old Hittite"], ["ohu", "Old Hungarian"], ["oia", "Oirata"], ["oin", "Inebu One"], ["ojb", "Northwestern Ojibwa"], ["ojc", "Central Ojibwa"], ["ojg", "Eastern Ojibwa"], ["ojp", "Old Japanese"], ["ojs", "Severn Ojibwa"], ["ojv", "Ontong Java"], ["ojw", "Western Ojibwa"], ["oka", "Okanagan"], ["okb", "Okobo"], ["okc", "Kobo"], ["okd", "Okodia"], ["oke", "Okpe (Southwestern Edo)"], ["okg", "Koko Babangk"], ["okh", "Koresh-e Rostam"], ["oki", "Okiek"], ["okj", "Oko-Juwoi"], ["okk", "Kwamtim One"], ["okl", "Old Kentish Sign Language"], ["okm", "Middle Korean (10th-16th cent.)"], ["okn", "Oki-No-Erabu"], ["oko", "Old Korean (3rd-9th cent.)"], ["okr", "Kirike"], ["oks", "Oko-Eni-Osayen"], ["oku", "Oku"], ["okv", "Orokaiva"], ["okx", "Okpe (Northwestern Edo)"], ["okz", "Old Khmer"], ["ola", "Walungge"], ["old", "Mochi"], ["ole", "Olekha"], ["olk", "Olkol"], ["olm", "Oloma"], ["olo", "Livvi"], ["olr", "Olrat"], ["olt", "Old Lithuanian"], ["olu", "Kuvale"], ["oma", "Omaha-Ponca"], ["omb", "East Ambae"], ["omc", "Mochica"], ["ome", "Omejes"], ["omg", "Omagua"], ["omi", "Omi"], ["omk", "Omok"], ["oml", "Ombo"], ["omn", "Minoan"], ["omo", "Utarmbung"], ["omp", "Old Manipuri"], ["omq", "Oto-Manguean languages"], ["omr", "Old Marathi"], ["omt", "Omotik"], ["omu", "Omurano"], ["omv", "Omotic languages"], ["omw", "South Tairora"], ["omx", "Old Mon"], ["omy", "Old Malay"], ["ona", "Ona"], ["onb", "Lingao"], ["one", "Oneida"], ["ong", "Olo"], ["oni", "Onin"], ["onj", "Onjob"], ["onk", "Kabore One"], ["onn", "Onobasulu"], ["ono", "Onondaga"], ["onp", "Sartang"], ["onr", "Northern One"], ["ons", "Ono"], ["ont", "Ontenu"], ["onu", "Unua"], ["onw", "Old Nubian"], ["onx", "Onin Based Pidgin"], ["ood", "Tohono O'odham"], ["oog", "Ong"], ["oon", "\xD6nge"], ["oor", "Oorlams"], ["oos", "Old Ossetic"], ["opa", "Okpamheri"], ["opk", "Kopkaka"], ["opm", "Oksapmin"], ["opo", "Opao"], ["opt", "Opata"], ["opy", "Ofay\xE9"], ["ora", "Oroha"], ["orc", "Orma"], ["ore", "Orej\xF3n"], ["org", "Oring"], ["orh", "Oroqen"], ["orn", "Orang Kanaq"], ["oro", "Orokolo"], ["orr", "Oruma"], ["ors", "Orang Seletar"], ["ort", "Adivasi Oriya"], ["oru", "Ormuri"], ["orv", "Old Russian"], ["orw", "Oro Win"], ["orx", "Oro"], ["ory", "Odia (individual language), Oriya (individual language)"], ["orz", "Ormu"], ["osa", "Osage"], ["osc", "Oscan"], ["osi", "Osing"], ["osn", "Old Sundanese"], ["oso", "Ososo"], ["osp", "Old Spanish"], ["ost", "Osatu"], ["osu", "Southern One"], ["osx", "Old Saxon"], ["ota", "Ottoman Turkish (1500-1928)"], ["otb", "Old Tibetan"], ["otd", "Ot Danum"], ["ote", "Mezquital Otomi"], ["oti", "Oti"], ["otk", "Old Turkish"], ["otl", "Tilapa Otomi"], ["otm", "Eastern Highland Otomi"], ["otn", "Tenango Otomi"], ["oto", "Otomian languages"], ["otq", "Quer\xE9taro Otomi"], ["otr", "Otoro"], ["ots", "Estado de M\xE9xico Otomi"], ["ott", "Temoaya Otomi"], ["otu", "Otuke"], ["otw", "Ottawa"], ["otx", "Texcatepec Otomi"], ["oty", "Old Tamil"], ["otz", "Ixtenco Otomi"], ["oua", "Tagargrent"], ["oub", "Glio-Oubi"], ["oue", "Oune"], ["oui", "Old Uighur"], ["oum", "Ouma"], ["oun", "\u01C3O\u01C3ung"], ["ovd", "Elfdalian, \xD6vdalian"], ["owi", "Owiniga"], ["owl", "Old Welsh"], ["oyb", "Oy"], ["oyd", "Oyda"], ["oym", "Wayampi"], ["oyy", "Oya'oya"], ["ozm", "Koonzime"], ["paa", "Papuan languages"], ["pab", "Parec\xEDs"], ["pac", "Pacoh"], ["pad", "Paumar\xED"], ["pae", "Pagibete"], ["paf", "Paranaw\xE1t"], ["pag", "Pangasinan"], ["pah", "Tenharim"], ["pai", "Pe"], ["pak", "Parakan\xE3"], ["pal", "Pahlavi"], ["pam", "Pampanga, Kapampangan"], ["pao", "Northern Paiute"], ["pap", "Papiamento"], ["paq", "Parya"], ["par", "Panamint, Timbisha"], ["pas", "Papasena"], ["pat", "Papitalai"], ["pau", "Palauan"], ["pav", "Paka\xE1snovos"], ["paw", "Pawnee"], ["pax", "Pankarar\xE9"], ["pay", "Pech"], ["paz", "Pankarar\xFA"], ["pbb", "P\xE1ez"], ["pbc", "Patamona"], ["pbe", "Mezontla Popoloca"], ["pbf", "Coyotepec Popoloca"], ["pbg", "Paraujano"], ["pbh", "E'\xF1apa Woromaipu"], ["pbi", "Parkwa"], ["pbl", "Mak (Nigeria)"], ["pbm", "Puebla Mazatec"], ["pbn", "Kpasam"], ["pbo", "Papel"], ["pbp", "Badyara"], ["pbr", "Pangwa"], ["pbs", "Central Pame"], ["pbt", "Southern Pashto"], ["pbu", "Northern Pashto"], ["pbv", "Pnar"], ["pby", "Pyu (Papua New Guinea)"], ["pbz", "Palu"], ["pca", "Santa In\xE9s Ahuatempan Popoloca"], ["pcb", "Pear"], ["pcc", "Bouyei"], ["pcd", "Picard"], ["pce", "Ruching Palaung"], ["pcf", "Paliyan"], ["pcg", "Paniya"], ["pch", "Pardhan"], ["pci", "Duruwa"], ["pcj", "Parenga"], ["pck", "Paite Chin"], ["pcl", "Pardhi"], ["pcm", "Nigerian Pidgin"], ["pcn", "Piti"], ["pcp", "Pacahuara"], ["pcr", "Panang"], ["pcw", "Pyapun"], ["pda", "Anam"], ["pdc", "Pennsylvania German"], ["pdi", "Pa Di"], ["pdn", "Podena, Fedan"], ["pdo", "Padoe"], ["pdt", "Plautdietsch"], ["pdu", "Kayan"], ["pea", "Peranakan Indonesian"], ["peb", "Eastern Pomo"], ["ped", "Mala (Papua New Guinea)"], ["pee", "Taje"], ["pef", "Northeastern Pomo"], ["peg", "Pengo"], ["peh", "Bonan"], ["pei", "Chichimeca-Jonaz"], ["pej", "Northern Pomo"], ["pek", "Penchal"], ["pel", "Pekal"], ["pem", "Phende"], ["peo", "Old Persian (ca. 600-400 B.C.)"], ["pep", "Kunja"], ["peq", "Southern Pomo"], ["pes", "Iranian Persian"], ["pev", "P\xE9mono"], ["pex", "Petats"], ["pey", "Petjo"], ["pez", "Eastern Penan"], ["pfa", "P\xE1\xE1fang"], ["pfe", "Pere"], ["pfl", "Pfaelzisch"], ["pga", "Sudanese Creole Arabic"], ["pgd", "G\u0101ndh\u0101r\u012B"], ["pgg", "Pangwali"], ["pgi", "Pagi"], ["pgk", "Rerep"], ["pgl", "Primitive Irish"], ["pgn", "Paelignian"], ["pgs", "Pangseng"], ["pgu", "Pagu"], ["pgy", "Pongyong"], ["pgz", "Papua New Guinean Sign Language"], ["pha", "Pa-Hng"], ["phd", "Phudagi"], ["phg", "Phuong"], ["phh", "Phukha"], ["phi", "Philippine languages"], ["phk", "Phake"], ["phl", "Phalura, Palula"], ["phm", "Phimbi"], ["phn", "Phoenician"], ["pho", "Phunoi"], ["phq", "Phana'"], ["phr", "Pahari-Potwari"], ["pht", "Phu Thai"], ["phu", "Phuan"], ["phv", "Pahlavani"], ["phw", "Phangduwali"], ["pia", "Pima Bajo"], ["pib", "Yine"], ["pic", "Pinji"], ["pid", "Piaroa"], ["pie", "Piro"], ["pif", "Pingelapese"], ["pig", "Pisabo"], ["pih", "Pitcairn-Norfolk"], ["pii", "Pini"], ["pij", "Pijao"], ["pil", "Yom"], ["pim", "Powhatan"], ["pin", "Piame"], ["pio", "Piapoco"], ["pip", "Pero"], ["pir", "Piratapuyo"], ["pis", "Pijin"], ["pit", "Pitta Pitta"], ["piu", "Pintupi-Luritja"], ["piv", "Pileni, Vaeakau-Taumako"], ["piw", "Pimbwe"], ["pix", "Piu"], ["piy", "Piya-Kwonci"], ["piz", "Pije"], ["pjt", "Pitjantjatjara"], ["pka", "Ardham\u0101gadh\u012B Pr\u0101krit"], ["pkb", "Pokomo, Kipfokomo"], ["pkc", "Paekche"], ["pkg", "Pak-Tong"], ["pkh", "Pankhu"], ["pkn", "Pakanha"], ["pko", "P\xF6koot"], ["pkp", "Pukapuka"], ["pkr", "Attapady Kurumba"], ["pks", "Pakistan Sign Language"], ["pkt", "Maleng"], ["pku", "Paku"], ["pla", "Miani"], ["plb", "Polonombauk"], ["plc", "Central Palawano"], ["pld", "Polari"], ["ple", "Palu'e"], ["plf", "Central Malayo-Polynesian languages"], ["plg", "Pilag\xE1"], ["plh", "Paulohi"], ["plj", "Polci"], ["plk", "Kohistani Shina"], ["pll", "Shwe Palaung"], ["pln", "Palenquero"], ["plo", "Oluta Popoluca"], ["plp", "Palpa"], ["plq", "Palaic"], ["plr", "Palaka Senoufo"], ["pls", "San Marcos Tlacoyalco Popoloca, San Marcos Tlalcoyalco Popoloca"], ["plt", "Plateau Malagasy"], ["plu", "Palik\xFAr"], ["plv", "Southwest Palawano"], ["plw", "Brooke's Point Palawano"], ["ply", "Bolyu"], ["plz", "Paluan"], ["pma", "Paama"], ["pmb", "Pambia"], ["pmc", "Palumata"], ["pmd", "Pallanganmiddang"], ["pme", "Pwaamei"], ["pmf", "Pamona"], ["pmh", "M\u0101h\u0101r\u0101\u1E63\u1E6Dri Pr\u0101krit"], ["pmi", "Northern Pumi"], ["pmj", "Southern Pumi"], ["pmk", "Pamlico"], ["pml", "Lingua Franca"], ["pmm", "Pomo"], ["pmn", "Pam"], ["pmo", "Pom"], ["pmq", "Northern Pame"], ["pmr", "Paynamar"], ["pms", "Piemontese"], ["pmt", "Tuamotuan"], ["pmu", "Mirpur Panjabi"], ["pmw", "Plains Miwok"], ["pmx", "Poumei Naga"], ["pmy", "Papuan Malay"], ["pmz", "Southern Pame"], ["pna", "Punan Bah-Biau"], ["pnb", "Western Panjabi"], ["pnc", "Pannei"], ["pnd", "Mpinda"], ["pne", "Western Penan"], ["png", "Pangu, Pongu"], ["pnh", "Penrhyn"], ["pni", "Aoheng"], ["pnj", "Pinjarup"], ["pnk", "Paunaka"], ["pnl", "Paleni"], ["pnm", "Punan Batu 1"], ["pnn", "Pinai-Hagahai"], ["pno", "Panobo"], ["pnp", "Pancana"], ["pnq", "Pana (Burkina Faso)"], ["pnr", "Panim"], ["pns", "Ponosakan"], ["pnt", "Pontic"], ["pnu", "Jiongnai Bunu"], ["pnv", "Pinigura"], ["pnw", "Banyjima, Panytyima"], ["pnx", "Phong-Kniang"], ["pny", "Pinyin"], ["pnz", "Pana (Central African Republic)"], ["poc", "Poqomam"], ["pod", "Ponares"], ["poe", "San Juan Atzingo Popoloca"], ["pof", "Poke"], ["pog", "Potigu\xE1ra"], ["poh", "Poqomchi'"], ["poi", "Highland Popoluca"], ["pok", "Pokang\xE1"], ["pom", "Southeastern Pomo"], ["pon", "Pohnpeian"], ["poo", "Central Pomo"], ["pop", "Pwapw\xE2"], ["poq", "Texistepec Popoluca"], ["pos", "Sayula Popoluca"], ["pot", "Potawatomi"], ["pov", "Upper Guinea Crioulo"], ["pow", "San Felipe Otlaltepec Popoloca"], ["pox", "Polabian"], ["poy", "Pogolo"], ["poz", "Malayo-Polynesian languages"], ["ppa", "Pao"], ["ppe", "Papi"], ["ppi", "Paipai"], ["ppk", "Uma"], ["ppl", "Pipil, Nicarao"], ["ppm", "Papuma"], ["ppn", "Papapana"], ["ppo", "Folopa"], ["ppp", "Pelende"], ["ppq", "Pei"], ["ppr", "Piru"], ["pps", "San Lu\xEDs Temalacayuca Popoloca"], ["ppt", "Pare"], ["ppu", "Papora"], ["pqa", "Pa'a"], ["pqe", "Eastern Malayo-Polynesian languages"], ["pqm", "Malecite-Passamaquoddy"], ["pqw", "Western Malayo-Polynesian languages"], ["pra", "Prakrit languages"], ["prb", "Lua'"], ["prc", "Parachi"], ["prd", "Parsi-Dari"], ["pre", "Principense"], ["prf", "Paranan"], ["prg", "Prussian"], ["prh", "Porohanon"], ["pri", "Paic\xEE"], ["prk", "Parauk"], ["prl", "Peruvian Sign Language"], ["prm", "Kibiri"], ["prn", "Prasuni"], ["pro", "Old Proven\xE7al (to 1500), Old Occitan (to 1500)"], ["prp", "Parsi"], ["prq", "Ash\xE9ninka Peren\xE9"], ["prr", "Puri"], ["prs", "Dari, Afghan Persian"], ["prt", "Phai"], ["pru", "Puragi"], ["prw", "Parawen"], ["prx", "Purik"], ["pry", "Pray 3"], ["prz", "Providencia Sign Language"], ["psa", "Asue Awyu"], ["psc", "Persian Sign Language"], ["psd", "Plains Indian Sign Language"], ["pse", "Central Malay"], ["psg", "Penang Sign Language"], ["psh", "Southwest Pashai, Southwest Pashayi"], ["psi", "Southeast Pashai, Southeast Pashayi"], ["psl", "Puerto Rican Sign Language"], ["psm", "Pauserna"], ["psn", "Panasuan"], ["pso", "Polish Sign Language"], ["psp", "Philippine Sign Language"], ["psq", "Pasi"], ["psr", "Portuguese Sign Language"], ["pss", "Kaulong"], ["pst", "Central Pashto"], ["psu", "Sauraseni Pr\u0101krit"], ["psw", "Port Sandwich"], ["psy", "Piscataway"], ["pta", "Pai Tavytera"], ["pth", "Patax\xF3 H\xE3-Ha-H\xE3e"], ["pti", "Pindiini, Wangkatha"], ["ptn", "Patani"], ["pto", "Zo'\xE9"], ["ptp", "Patep"], ["ptq", "Pattapu"], ["ptr", "Piamatsina"], ["ptt", "Enrekang"], ["ptu", "Bambam"], ["ptv", "Port Vato"], ["ptw", "Pentlatch"], ["pty", "Pathiya"], ["pua", "Western Highland Purepecha"], ["pub", "Purum"], ["puc", "Punan Merap"], ["pud", "Punan Aput"], ["pue", "Puelche"], ["puf", "Punan Merah"], ["pug", "Phuie"], ["pui", "Puinave"], ["puj", "Punan Tubu"], ["puk", "Pu Ko"], ["pum", "Puma"], ["puo", "Puoc"], ["pup", "Pulabu"], ["puq", "Puquina"], ["pur", "Purubor\xE1"], ["put", "Putoh"], ["puu", "Punu"], ["puw", "Puluwatese"], ["pux", "Puare"], ["puy", "Purisime\xF1o"], ["puz", "Purum Naga"], ["pwa", "Pawaia"], ["pwb", "Panawa"], ["pwg", "Gapapaiwa"], ["pwi", "Patwin"], ["pwm", "Molbog"], ["pwn", "Paiwan"], ["pwo", "Pwo Western Karen"], ["pwr", "Powari"], ["pww", "Pwo Northern Karen"], ["pxm", "Quetzaltepec Mixe"], ["pye", "Pye Krumen"], ["pym", "Fyam"], ["pyn", "Poyan\xE1wa"], ["pys", "Paraguayan Sign Language, Lengua de Se\xF1as del Paraguay"], ["pyu", "Puyuma"], ["pyx", "Pyu (Myanmar)"], ["pyy", "Pyen"], ["pzn", "Para Naga"], ["qaa..qtz", "Private use"], ["qua", "Quapaw"], ["qub", "Huallaga Hu\xE1nuco Quechua"], ["quc", "K'iche', Quich\xE9"], ["qud", "Calder\xF3n Highland Quichua"], ["quf", "Lambayeque Quechua"], ["qug", "Chimborazo Highland Quichua"], ["quh", "South Bolivian Quechua"], ["qui", "Quileute"], ["quk", "Chachapoyas Quechua"], ["qul", "North Bolivian Quechua"], ["qum", "Sipacapense"], ["qun", "Quinault"], ["qup", "Southern Pastaza Quechua"], ["quq", "Quinqui"], ["qur", "Yanahuanca Pasco Quechua"], ["qus", "Santiago del Estero Quichua"], ["quv", "Sacapulteco"], ["quw", "Tena Lowland Quichua"], ["qux", "Yauyos Quechua"], ["quy", "Ayacucho Quechua"], ["quz", "Cusco Quechua"], ["qva", "Ambo-Pasco Quechua"], ["qvc", "Cajamarca Quechua"], ["qve", "Eastern Apur\xEDmac Quechua"], ["qvh", "Huamal\xEDes-Dos de Mayo Hu\xE1nuco Quechua"], ["qvi", "Imbabura Highland Quichua"], ["qvj", "Loja Highland Quichua"], ["qvl", "Cajatambo North Lima Quechua"], ["qvm", "Margos-Yarowilca-Lauricocha Quechua"], ["qvn", "North Jun\xEDn Quechua"], ["qvo", "Napo Lowland Quechua"], ["qvp", "Pacaraos Quechua"], ["qvs", "San Mart\xEDn Quechua"], ["qvw", "Huaylla Wanca Quechua"], ["qvy", "Queyu"], ["qvz", "Northern Pastaza Quichua"], ["qwa", "Corongo Ancash Quechua"], ["qwc", "Classical Quechua"], ["qwe", "Quechuan (family)"], ["qwh", "Huaylas Ancash Quechua"], ["qwm", "Kuman (Russia)"], ["qws", "Sihuas Ancash Quechua"], ["qwt", "Kwalhioqua-Tlatskanai"], ["qxa", "Chiqui\xE1n Ancash Quechua"], ["qxc", "Chincha Quechua"], ["qxh", "Panao Hu\xE1nuco Quechua"], ["qxl", "Salasaca Highland Quichua"], ["qxn", "Northern Conchucos Ancash Quechua"], ["qxo", "Southern Conchucos Ancash Quechua"], ["qxp", "Puno Quechua"], ["qxq", "Qashqa'i"], ["qxr", "Ca\xF1ar Highland Quichua"], ["qxs", "Southern Qiang"], ["qxt", "Santa Ana de Tusi Pasco Quechua"], ["qxu", "Arequipa-La Uni\xF3n Quechua"], ["qxw", "Jauja Wanca Quechua"], ["qya", "Quenya"], ["qyp", "Quiripi"], ["raa", "Dungmali"], ["rab", "Camling"], ["rac", "Rasawa"], ["rad", "Rade"], ["raf", "Western Meohang"], ["rag", "Logooli, Lulogooli"], ["rah", "Rabha"], ["rai", "Ramoaaina"], ["raj", "Rajasthani"], ["rak", "Tulu-Bohuai"], ["ral", "Ralte"], ["ram", "Canela"], ["ran", "Riantana"], ["rao", "Rao"], ["rap", "Rapanui"], ["raq", "Saam"], ["rar", "Rarotongan, Cook Islands Maori"], ["ras", "Tegali"], ["rat", "Razajerdi"], ["rau", "Raute"], ["rav", "Sampang"], ["raw", "Rawang"], ["rax", "Rang"], ["ray", "Rapa"], ["raz", "Rahambuu"], ["rbb", "Rumai Palaung"], ["rbk", "Northern Bontok"], ["rbl", "Miraya Bikol"], ["rbp", "Barababaraba"], ["rcf", "R\xE9union Creole French"], ["rdb", "Rudbari"], ["rea", "Rerau"], ["reb", "Rembong"], ["ree", "Rejang Kayan"], ["reg", "Kara (Tanzania)"], ["rei", "Reli"], ["rej", "Rejang"], ["rel", "Rendille"], ["rem", "Remo"], ["ren", "Rengao"], ["rer", "Rer Bare"], ["res", "Reshe"], ["ret", "Retta"], ["rey", "Reyesano"], ["rga", "Roria"], ["rge", "Romano-Greek"], ["rgk", "Rangkas"], ["rgn", "Romagnol"], ["rgr", "Res\xEDgaro"], ["rgs", "Southern Roglai"], ["rgu", "Ringgou"], ["rhg", "Rohingya"], ["rhp", "Yahang"], ["ria", "Riang (India)"], ["rie", "Rien"], ["rif", "Tarifit"], ["ril", "Riang Lang, Riang (Myanmar)"], ["rim", "Nyaturu"], ["rin", "Nungu"], ["rir", "Ribun"], ["rit", "Ritharrngu"], ["riu", "Riung"], ["rjg", "Rajong"], ["rji", "Raji"], ["rjs", "Rajbanshi"], ["rka", "Kraol"], ["rkb", "Rikbaktsa"], ["rkh", "Rakahanga-Manihiki"], ["rki", "Rakhine"], ["rkm", "Marka"], ["rkt", "Rangpuri, Kamta"], ["rkw", "Arakwal"], ["rma", "Rama"], ["rmb", "Rembarrnga"], ["rmc", "Carpathian Romani"], ["rmd", "Traveller Danish"], ["rme", "Angloromani"], ["rmf", "Kalo Finnish Romani"], ["rmg", "Traveller Norwegian"], ["rmh", "Murkim"], ["rmi", "Lomavren"], ["rmk", "Romkun"], ["rml", "Baltic Romani"], ["rmm", "Roma"], ["rmn", "Balkan Romani"], ["rmo", "Sinte Romani"], ["rmp", "Rempi"], ["rmq", "Cal\xF3"], ["rmr", "Cal\xF3"], ["rms", "Romanian Sign Language"], ["rmt", "Domari"], ["rmu", "Tavringer Romani"], ["rmv", "Romanova"], ["rmw", "Welsh Romani"], ["rmx", "Romam"], ["rmy", "Vlax Romani"], ["rmz", "Marma"], ["rna", "Runa"], ["rnd", "Ruund"], ["rng", "Ronga"], ["rnl", "Ranglong"], ["rnn", "Roon"], ["rnp", "Rongpo"], ["rnr", "Nari Nari"], ["rnw", "Rungwa"], ["roa", "Romance languages"], ["rob", "Tae'"], ["roc", "Cacgia Roglai"], ["rod", "Rogo"], ["roe", "Ronji"], ["rof", "Rombo"], ["rog", "Northern Roglai"], ["rol", "Romblomanon"], ["rom", "Romany"], ["roo", "Rotokas"], ["rop", "Kriol"], ["ror", "Rongga"], ["rou", "Runga"], ["row", "Dela-Oenale"], ["rpn", "Repanbitip"], ["rpt", "Rapting"], ["rri", "Ririo"], ["rro", "Waima"], ["rrt", "Arritinngithigh"], ["rsb", "Romano-Serbian"], ["rsi", "Rennellese Sign Language"], ["rsl", "Russian Sign Language"], ["rsm", "Miriwoong Sign Language"], ["rtc", "Rungtu Chin"], ["rth", "Ratahan"], ["rtm", "Rotuman"], ["rts", "Yurats"], ["rtw", "Rathawi"], ["rub", "Gungu"], ["ruc", "Ruuli"], ["rue", "Rusyn"], ["ruf", "Luguru"], ["rug", "Roviana"], ["ruh", "Ruga"], ["rui", "Rufiji"], ["ruk", "Che"], ["ruo", "Istro Romanian"], ["rup", "Macedo-Romanian, Aromanian, Arumanian"], ["ruq", "Megleno Romanian"], ["rut", "Rutul"], ["ruu", "Lanas Lobu"], ["ruy", "Mala (Nigeria)"], ["ruz", "Ruma"], ["rwa", "Rawo"], ["rwk", "Rwa"], ["rwl", "Ruwila"], ["rwm", "Amba (Uganda)"], ["rwo", "Rawa"], ["rwr", "Marwari (India)"], ["rxd", "Ngardi"], ["rxw", "Karuwali, Garuwali"], ["ryn", "Northern Amami-Oshima"], ["rys", "Yaeyama"], ["ryu", "Central Okinawan"], ["rzh", "R\u0101zi\u1E25\u012B"], ["saa", "Saba"], ["sab", "Buglere"], ["sac", "Meskwaki"], ["sad", "Sandawe"], ["sae", "Saban\xEA"], ["saf", "Safaliba"], ["sah", "Yakut"], ["sai", "South American Indian languages"], ["saj", "Sahu"], ["sak", "Sake"], ["sal", "Salishan languages"], ["sam", "Samaritan Aramaic"], ["sao", "Sause"], ["sap", "Sanapan\xE1"], ["saq", "Samburu"], ["sar", "Saraveca"], ["sas", "Sasak"], ["sat", "Santali"], ["sau", "Saleman"], ["sav", "Saafi-Saafi"], ["saw", "Sawi"], ["sax", "Sa"], ["say", "Saya"], ["saz", "Saurashtra"], ["sba", "Ngambay"], ["sbb", "Simbo"], ["sbc", "Kele (Papua New Guinea)"], ["sbd", "Southern Samo"], ["sbe", "Saliba"], ["sbf", "Chabu, Shabo"], ["sbg", "Seget"], ["sbh", "Sori-Harengan"], ["sbi", "Seti"], ["sbj", "Surbakhal"], ["sbk", "Safwa"], ["sbl", "Botolan Sambal"], ["sbm", "Sagala"], ["sbn", "Sindhi Bhil"], ["sbo", "Sab\xFCm"], ["sbp", "Sangu (Tanzania)"], ["sbq", "Sileibi"], ["sbr", "Sembakung Murut"], ["sbs", "Subiya"], ["sbt", "Kimki"], ["sbu", "Stod Bhoti"], ["sbv", "Sabine"], ["sbw", "Simba"], ["sbx", "Seberuang"], ["sby", "Soli"], ["sbz", "Sara Kaba"], ["sca", "Sansu"], ["scb", "Chut"], ["sce", "Dongxiang"], ["scf", "San Miguel Creole French"], ["scg", "Sanggau"], ["sch", "Sakachep"], ["sci", "Sri Lankan Creole Malay"], ["sck", "Sadri"], ["scl", "Shina"], ["scn", "Sicilian"], ["sco", "Scots"], ["scp", "Hyolmo, Helambu Sherpa"], ["scq", "Sa'och"], ["scs", "North Slavey"], ["sct", "Southern Katang"], ["scu", "Shumcho"], ["scv", "Sheni"], ["scw", "Sha"], ["scx", "Sicel"], ["sda", "Toraja-Sa'dan"], ["sdb", "Shabak"], ["sdc", "Sassarese Sardinian"], ["sde", "Surubu"], ["sdf", "Sarli"], ["sdg", "Savi"], ["sdh", "Southern Kurdish"], ["sdj", "Suundi"], ["sdk", "Sos Kundi"], ["sdl", "Saudi Arabian Sign Language"], ["sdm", "Semandang"], ["sdn", "Gallurese Sardinian"], ["sdo", "Bukar-Sadung Bidayuh"], ["sdp", "Sherdukpen"], ["sdq", "Semandang"], ["sdr", "Oraon Sadri"], ["sds", "Sened"], ["sdt", "Shuadit"], ["sdu", "Sarudu"], ["sdv", "Eastern Sudanic languages"], ["sdx", "Sibu Melanau"], ["sdz", "Sallands"], ["sea", "Semai"], ["seb", "Shempire Senoufo"], ["sec", "Sechelt"], ["sed", "Sedang"], ["see", "Seneca"], ["sef", "Cebaara Senoufo"], ["seg", "Segeju"], ["seh", "Sena"], ["sei", "Seri"], ["sej", "Sene"], ["sek", "Sekani"], ["sel", "Selkup"], ["sem", "Semitic languages"], ["sen", "Nanerig\xE9 S\xE9noufo"], ["seo", "Suarmin"], ["sep", "S\xECc\xECt\xE9 S\xE9noufo"], ["seq", "Senara S\xE9noufo"], ["ser", "Serrano"], ["ses", "Koyraboro Senni Songhai"], ["set", "Sentani"], ["seu", "Serui-Laut"], ["sev", "Nyarafolo Senoufo"], ["sew", "Sewa Bay"], ["sey", "Secoya"], ["sez", "Senthang Chin"], ["sfb", "Langue des signes de Belgique Francophone, French Belgian Sign Language"], ["sfe", "Eastern Subanen"], ["sfm", "Small Flowery Miao"], ["sfs", "South African Sign Language"], ["sfw", "Sehwi"], ["sga", "Old Irish (to 900)"], ["sgb", "Mag-antsi Ayta"], ["sgc", "Kipsigis"], ["sgd", "Surigaonon"], ["sge", "Segai"], ["sgg", "Swiss-German Sign Language"], ["sgh", "Shughni"], ["sgi", "Suga"], ["sgj", "Surgujia"], ["sgk", "Sangkong"], ["sgl", "Sanglechi-Ishkashimi"], ["sgm", "Singa"], ["sgn", "Sign languages"], ["sgo", "Songa"], ["sgp", "Singpho"], ["sgr", "Sangisari"], ["sgs", "Samogitian"], ["sgt", "Brokpake"], ["sgu", "Salas"], ["sgw", "Sebat Bet Gurage"], ["sgx", "Sierra Leone Sign Language"], ["sgy", "Sanglechi"], ["sgz", "Sursurunga"], ["sha", "Shall-Zwall"], ["shb", "Ninam"], ["shc", "Sonde"], ["shd", "Kundal Shahi"], ["she", "Sheko"], ["shg", "Shua"], ["shh", "Shoshoni"], ["shi", "Tachelhit"], ["shj", "Shatt"], ["shk", "Shilluk"], ["shl", "Shendu"], ["shm", "Shahrudi"], ["shn", "Shan"], ["sho", "Shanga"], ["shp", "Shipibo-Conibo"], ["shq", "Sala"], ["shr", "Shi"], ["shs", "Shuswap"], ["sht", "Shasta"], ["shu", "Chadian Arabic"], ["shv", "Shehri"], ["shw", "Shwai"], ["shx", "She"], ["shy", "Tachawit"], ["shz", "Syenara Senoufo"], ["sia", "Akkala Sami"], ["sib", "Sebop"], ["sid", "Sidamo"], ["sie", "Simaa"], ["sif", "Siamou"], ["sig", "Paasaal"], ["sih", "Zire, S\xEEsh\xEB\xEB"], ["sii", "Shom Peng"], ["sij", "Numbami"], ["sik", "Sikiana"], ["sil", "Tumulung Sisaala"], ["sim", "Mende (Papua New Guinea)"], ["sio", "Siouan languages"], ["sip", "Sikkimese"], ["siq", "Sonia"], ["sir", "Siri"], ["sis", "Siuslaw"], ["sit", "Sino-Tibetan languages"], ["siu", "Sinagen"], ["siv", "Sumariup"], ["siw", "Siwai"], ["six", "Sumau"], ["siy", "Sivandi"], ["siz", "Siwi"], ["sja", "Epena"], ["sjb", "Sajau Basap"], ["sjd", "Kildin Sami"], ["sje", "Pite Sami"], ["sjg", "Assangori"], ["sjk", "Kemi Sami"], ["sjl", "Sajalong, Miji"], ["sjm", "Mapun"], ["sjn", "Sindarin"], ["sjo", "Xibe"], ["sjp", "Surjapuri"], ["sjr", "Siar-Lak"], ["sjs", "Senhaja De Srair"], ["sjt", "Ter Sami"], ["sju", "Ume Sami"], ["sjw", "Shawnee"], ["ska", "Skagit"], ["skb", "Saek"], ["skc", "Ma Manda"], ["skd", "Southern Sierra Miwok"], ["ske", "Seke (Vanuatu)"], ["skf", "Sakirabi\xE1"], ["skg", "Sakalava Malagasy"], ["skh", "Sikule"], ["ski", "Sika"], ["skj", "Seke (Nepal)"], ["skk", "Sok"], ["skm", "Kutong"], ["skn", "Kolibugan Subanon"], ["sko", "Seko Tengah"], ["skp", "Sekapan"], ["skq", "Sininkere"], ["skr", "Saraiki, Seraiki"], ["sks", "Maia"], ["skt", "Sakata"], ["sku", "Sakao"], ["skv", "Skou"], ["skw", "Skepi Creole Dutch"], ["skx", "Seko Padang"], ["sky", "Sikaiana"], ["skz", "Sekar"], ["sla", "Slavic languages"], ["slc", "S\xE1liba"], ["sld", "Sissala"], ["sle", "Sholaga"], ["slf", "Swiss-Italian Sign Language"], ["slg", "Selungai Murut"], ["slh", "Southern Puget Sound Salish"], ["sli", "Lower Silesian"], ["slj", "Salum\xE1"], ["sll", "Salt-Yui"], ["slm", "Pangutaran Sama"], ["sln", "Salinan"], ["slp", "Lamaholot"], ["slq", "Salchuq"], ["slr", "Salar"], ["sls", "Singapore Sign Language"], ["slt", "Sila"], ["slu", "Selaru"], ["slw", "Sialum"], ["slx", "Salampasu"], ["sly", "Selayar"], ["slz", "Ma'ya"], ["sma", "Southern Sami"], ["smb", "Simbari"], ["smc", "Som"], ["smd", "Sama"], ["smf", "Auwe"], ["smg", "Simbali"], ["smh", "Samei"], ["smi", "Sami languages"], ["smj", "Lule Sami"], ["smk", "Bolinao"], ["sml", "Central Sama"], ["smm", "Musasa"], ["smn", "Inari Sami"], ["smp", "Samaritan"], ["smq", "Samo"], ["smr", "Simeulue"], ["sms", "Skolt Sami"], ["smt", "Simte"], ["smu", "Somray"], ["smv", "Samvedi"], ["smw", "Sumbawa"], ["smx", "Samba"], ["smy", "Semnani"], ["smz", "Simeku"], ["snb", "Sebuyau"], ["snc", "Sinaugoro"], ["sne", "Bau Bidayuh"], ["snf", "Noon"], ["sng", "Sanga (Democratic Republic of Congo)"], ["snh", "Shinabo"], ["sni", "Sensi"], ["snj", "Riverain Sango"], ["snk", "Soninke"], ["snl", "Sangil"], ["snm", "Southern Ma'di"], ["snn", "Siona"], ["sno", "Snohomish"], ["snp", "Siane"], ["snq", "Sangu (Gabon)"], ["snr", "Sihan"], ["sns", "South West Bay, Nahavaq"], ["snu", "Senggi, Viid"], ["snv", "Sa'ban"], ["snw", "Selee"], ["snx", "Sam"], ["sny", "Saniyo-Hiyewe"], ["snz", "Kou"], ["soa", "Thai Song"], ["sob", "Sobei"], ["soc", "So (Democratic Republic of Congo)"], ["sod", "Songoora"], ["soe", "Songomeno"], ["sog", "Sogdian"], ["soh", "Aka"], ["soi", "Sonha"], ["soj", "Soi"], ["sok", "Sokoro"], ["sol", "Solos"], ["son", "Songhai languages"], ["soo", "Songo"], ["sop", "Songe"], ["soq", "Kanasi"], ["sor", "Somrai"], ["sos", "Seeku"], ["sou", "Southern Thai"], ["sov", "Sonsorol"], ["sow", "Sowanda"], ["sox", "Swo"], ["soy", "Miyobe"], ["soz", "Temi"], ["spb", "Sepa (Indonesia)"], ["spc", "Sap\xE9"], ["spd", "Saep"], ["spe", "Sepa (Papua New Guinea)"], ["spg", "Sian"], ["spi", "Saponi"], ["spk", "Sengo"], ["spl", "Selepet"], ["spm", "Akukem"], ["spn", "Sanapan\xE1"], ["spo", "Spokane"], ["spp", "Supyire Senoufo"], ["spq", "Loreto-Ucayali Spanish"], ["spr", "Saparua"], ["sps", "Saposa"], ["spt", "Spiti Bhoti"], ["spu", "Sapuan"], ["spv", "Sambalpuri, Kosli"], ["spx", "South Picene"], ["spy", "Sabaot"], ["sqa", "Shama-Sambuga"], ["sqh", "Shau"], ["sqj", "Albanian languages"], ["sqk", "Albanian Sign Language"], ["sqm", "Suma"], ["sqn", "Susquehannock"], ["sqo", "Sorkhei"], ["sqq", "Sou"], ["sqr", "Siculo Arabic"], ["sqs", "Sri Lankan Sign Language"], ["sqt", "Soqotri"], ["squ", "Squamish"], ["sqx", "Kufr Qassem Sign Language (KQSL)"], ["sra", "Saruga"], ["srb", "Sora"], ["src", "Logudorese Sardinian"], ["sre", "Sara"], ["srf", "Nafi"], ["srg", "Sulod"], ["srh", "Sarikoli"], ["sri", "Siriano"], ["srk", "Serudung Murut"], ["srl", "Isirawa"], ["srm", "Saramaccan"], ["srn", "Sranan Tongo"], ["sro", "Campidanese Sardinian"], ["srq", "Sirion\xF3"], ["srr", "Serer"], ["srs", "Sarsi"], ["srt", "Sauri"], ["sru", "Suru\xED"], ["srv", "Southern Sorsoganon"], ["srw", "Serua"], ["srx", "Sirmauri"], ["sry", "Sera"], ["srz", "Shahmirzadi"], ["ssa", "Nilo-Saharan languages"], ["ssb", "Southern Sama"], ["ssc", "Suba-Simbiti"], ["ssd", "Siroi"], ["sse", "Balangingi, Bangingih Sama"], ["ssf", "Thao"], ["ssg", "Seimat"], ["ssh", "Shihhi Arabic"], ["ssi", "Sansi"], ["ssj", "Sausi"], ["ssk", "Sunam"], ["ssl", "Western Sisaala"], ["ssm", "Semnam"], ["ssn", "Waata"], ["sso", "Sissano"], ["ssp", "Spanish Sign Language"], ["ssq", "So'a"], ["ssr", "Swiss-French Sign Language"], ["sss", "S\xF4"], ["sst", "Sinasina"], ["ssu", "Susuami"], ["ssv", "Shark Bay"], ["ssx", "Samberigi"], ["ssy", "Saho"], ["ssz", "Sengseng"], ["sta", "Settla"], ["stb", "Northern Subanen"], ["std", "Sentinel"], ["ste", "Liana-Seti"], ["stf", "Seta"], ["stg", "Trieng"], ["sth", "Shelta"], ["sti", "Bulo Stieng"], ["stj", "Matya Samo"], ["stk", "Arammba"], ["stl", "Stellingwerfs"], ["stm", "Setaman"], ["stn", "Owa"], ["sto", "Stoney"], ["stp", "Southeastern Tepehuan"], ["stq", "Saterfriesisch"], ["str", "Straits Salish"], ["sts", "Shumashti"], ["stt", "Budeh Stieng"], ["stu", "Samtao"], ["stv", "Silt'e"], ["stw", "Satawalese"], ["sty", "Siberian Tatar"], ["sua", "Sulka"], ["sub", "Suku"], ["suc", "Western Subanon"], ["sue", "Suena"], ["sug", "Suganga"], ["sui", "Suki"], ["suj", "Shubi"], ["suk", "Sukuma"], ["sul", "Surigaonon"], ["sum", "Sumo-Mayangna"], ["suo", "Bouni"], ["suq", "Tirmaga-Chai Suri, Suri"], ["sur", "Mwaghavul"], ["sus", "Susu"], ["sut", "Subtiaba"], ["suv", "Puroik"], ["suw", "Sumbwa"], ["sux", "Sumerian"], ["suy", "Suy\xE1"], ["suz", "Sunwar"], ["sva", "Svan"], ["svb", "Ulau-Suain"], ["svc", "Vincentian Creole English"], ["sve", "Serili"], ["svk", "Slovakian Sign Language"], ["svm", "Slavomolisano"], ["svr", "Savara"], ["svs", "Savosavo"], ["svx", "Skalvian"], ["swb", "Maore Comorian"], ["swc", "Congo Swahili"], ["swf", "Sere"], ["swg", "Swabian"], ["swh", "Swahili (individual language), Kiswahili"], ["swi", "Sui"], ["swj", "Sira"], ["swk", "Malawi Sena"], ["swl", "Swedish Sign Language"], ["swm", "Samosa"], ["swn", "Sawknah"], ["swo", "Shanenawa"], ["swp", "Suau"], ["swq", "Sharwa"], ["swr", "Saweru"], ["sws", "Seluwasan"], ["swt", "Sawila"], ["swu", "Suwawa"], ["swv", "Shekhawati"], ["sww", "Sowa"], ["swx", "Suruah\xE1"], ["swy", "Sarua"], ["sxb", "Suba"], ["sxc", "Sicanian"], ["sxe", "Sighu"], ["sxg", "Shuhi, Shixing"], ["sxk", "Southern Kalapuya"], ["sxl", "Selian"], ["sxm", "Samre"], ["sxn", "Sangir"], ["sxo", "Sorothaptic"], ["sxr", "Saaroa"], ["sxs", "Sasaru"], ["sxu", "Upper Saxon"], ["sxw", "Saxwe Gbe"], ["sya", "Siang"], ["syb", "Central Subanen"], ["syc", "Classical Syriac"], ["syd", "Samoyedic languages"], ["syi", "Seki"], ["syk", "Sukur"], ["syl", "Sylheti"], ["sym", "Maya Samo"], ["syn", "Senaya"], ["syo", "Suoy"], ["syr", "Syriac"], ["sys", "Sinyar"], ["syw", "Kagate"], ["syx", "Samay"], ["syy", "Al-Sayyid Bedouin Sign Language"], ["sza", "Semelai"], ["szb", "Ngalum"], ["szc", "Semaq Beri"], ["szd", "Seru"], ["sze", "Seze"], ["szg", "Sengele"], ["szl", "Silesian"], ["szn", "Sula"], ["szp", "Suabo"], ["szs", "Solomon Islands Sign Language"], ["szv", "Isu (Fako Division)"], ["szw", "Sawai"], ["szy", "Sakizaya"], ["taa", "Lower Tanana"], ["tab", "Tabassaran"], ["tac", "Lowland Tarahumara"], ["tad", "Tause"], ["tae", "Tariana"], ["taf", "Tapirap\xE9"], ["tag", "Tagoi"], ["tai", "Tai languages"], ["taj", "Eastern Tamang"], ["tak", "Tala"], ["tal", "Tal"], ["tan", "Tangale"], ["tao", "Yami"], ["tap", "Taabwa"], ["taq", "Tamasheq"], ["tar", "Central Tarahumara"], ["tas", "Tay Boi"], ["tau", "Upper Tanana"], ["tav", "Tatuyo"], ["taw", "Tai"], ["tax", "Tamki"], ["tay", "Atayal"], ["taz", "Tocho"], ["tba", "Aikan\xE3"], ["tbb", "Tapeba"], ["tbc", "Takia"], ["tbd", "Kaki Ae"], ["tbe", "Tanimbili"], ["tbf", "Mandara"], ["tbg", "North Tairora"], ["tbh", "Dharawal, Thurawal"], ["tbi", "Gaam"], ["tbj", "Tiang"], ["tbk", "Calamian Tagbanwa"], ["tbl", "Tboli"], ["tbm", "Tagbu"], ["tbn", "Barro Negro Tunebo"], ["tbo", "Tawala"], ["tbp", "Taworta, Diebroud"], ["tbq", "Tibeto-Burman languages"], ["tbr", "Tumtum"], ["tbs", "Tanguat"], ["tbt", "Tembo (Kitembo)"], ["tbu", "Tubar"], ["tbv", "Tobo"], ["tbw", "Tagbanwa"], ["tbx", "Kapin"], ["tby", "Tabaru"], ["tbz", "Ditammari"], ["tca", "Ticuna"], ["tcb", "Tanacross"], ["tcc", "Datooga"], ["tcd", "Tafi"], ["tce", "Southern Tutchone"], ["tcf", "Malinaltepec Me'phaa, Malinaltepec Tlapanec"], ["tcg", "Tamagario"], ["tch", "Turks And Caicos Creole English"], ["tci", "W\xE1ra"], ["tck", "Tchitchege"], ["tcl", "Taman (Myanmar)"], ["tcm", "Tanahmerah"], ["tcn", "Tichurong"], ["tco", "Taungyo"], ["tcp", "Tawr Chin"], ["tcq", "Kaiy"], ["tcs", "Torres Strait Creole, Yumplatok"], ["tct", "T'en"], ["tcu", "Southeastern Tarahumara"], ["tcw", "Tecpatl\xE1n Totonac"], ["tcx", "Toda"], ["tcy", "Tulu"], ["tcz", "Thado Chin"], ["tda", "Tagdal"], ["tdb", "Panchpargania"], ["tdc", "Ember\xE1-Tad\xF3"], ["tdd", "Tai N\xFCa"], ["tde", "Tiranige Diga Dogon"], ["tdf", "Talieng"], ["tdg", "Western Tamang"], ["tdh", "Thulung"], ["tdi", "Tomadino"], ["tdj", "Tajio"], ["tdk", "Tambas"], ["tdl", "Sur"], ["tdm", "Taruma"], ["tdn", "Tondano"], ["tdo", "Teme"], ["tdq", "Tita"], ["tdr", "Todrah"], ["tds", "Doutai"], ["tdt", "Tetun Dili"], ["tdu", "Tempasuk Dusun"], ["tdv", "Toro"], ["tdx", "Tandroy-Mahafaly Malagasy"], ["tdy", "Tadyawan"], ["tea", "Temiar"], ["teb", "Tetete"], ["tec", "Terik"], ["ted", "Tepo Krumen"], ["tee", "Huehuetla Tepehua"], ["tef", "Teressa"], ["teg", "Teke-Tege"], ["teh", "Tehuelche"], ["tei", "Torricelli"], ["tek", "Ibali Teke"], ["tem", "Timne"], ["ten", "Tama (Colombia)"], ["teo", "Teso"], ["tep", "Tepecano"], ["teq", "Temein"], ["ter", "Tereno"], ["tes", "Tengger"], ["tet", "Tetum"], ["teu", "Soo"], ["tev", "Teor"], ["tew", "Tewa (USA)"], ["tex", "Tennet"], ["tey", "Tulishi"], ["tez", "Tetserret"], ["tfi", "Tofin Gbe"], ["tfn", "Tanaina"], ["tfo", "Tefaro"], ["tfr", "Teribe"], ["tft", "Ternate"], ["tga", "Sagalla"], ["tgb", "Tobilung"], ["tgc", "Tigak"], ["tgd", "Ciwogai"], ["tge", "Eastern Gorkha Tamang"], ["tgf", "Chalikha"], ["tgg", "Tangga"], ["tgh", "Tobagonian Creole English"], ["tgi", "Lawunuia"], ["tgj", "Tagin"], ["tgn", "Tandaganon"], ["tgo", "Sudest"], ["tgp", "Tangoa"], ["tgq", "Tring"], ["tgr", "Tareng"], ["tgs", "Nume"], ["tgt", "Central Tagbanwa"], ["tgu", "Tanggu"], ["tgv", "Tingui-Boto"], ["tgw", "Tagwana Senoufo"], ["tgx", "Tagish"], ["tgy", "Togoyo"], ["tgz", "Tagalaka"], ["thc", "Tai Hang Tong"], ["thd", "Kuuk Thaayorre, Thayore"], ["the", "Chitwania Tharu"], ["thf", "Thangmi"], ["thh", "Northern Tarahumara"], ["thi", "Tai Long"], ["thk", "Tharaka, Kitharaka"], ["thl", "Dangaura Tharu"], ["thm", "Aheu"], ["thn", "Thachanadan"], ["thp", "Thompson"], ["thq", "Kochila Tharu"], ["thr", "Rana Tharu"], ["ths", "Thakali"], ["tht", "Tahltan"], ["thu", "Thuri"], ["thv", "Tahaggart Tamahaq"], ["thw", "Thudam"], ["thx", "The"], ["thy", "Tha"], ["thz", "Tayart Tamajeq"], ["tia", "Tidikelt Tamazight"], ["tic", "Tira"], ["tid", "Tidong"], ["tie", "Tingal"], ["tif", "Tifal"], ["tig", "Tigre"], ["tih", "Timugon Murut"], ["tii", "Tiene"], ["tij", "Tilung"], ["tik", "Tikar"], ["til", "Tillamook"], ["tim", "Timbe"], ["tin", "Tindi"], ["tio", "Teop"], ["tip", "Trimuris"], ["tiq", "Ti\xE9fo"], ["tis", "Masadiit Itneg"], ["tit", "Tinigua"], ["tiu", "Adasen"], ["tiv", "Tiv"], ["tiw", "Tiwi"], ["tix", "Southern Tiwa"], ["tiy", "Tiruray"], ["tiz", "Tai Hongjin"], ["tja", "Tajuasohn"], ["tjg", "Tunjung"], ["tji", "Northern Tujia"], ["tjj", "Tjungundji"], ["tjl", "Tai Laing"], ["tjm", "Timucua"], ["tjn", "Tonjon"], ["tjo", "Temacine Tamazight"], ["tjp", "Tjupany"], ["tjs", "Southern Tujia"], ["tju", "Tjurruru"], ["tjw", "Djabwurrung"], ["tka", "Truk\xE1"], ["tkb", "Buksa"], ["tkd", "Tukudede"], ["tke", "Takwane"], ["tkf", "Tukumanf\xE9d"], ["tkg", "Tesaka Malagasy"], ["tkk", "Takpa"], ["tkl", "Tokelau"], ["tkm", "Takelma"], ["tkn", "Toku-No-Shima"], ["tkp", "Tikopia"], ["tkq", "Tee"], ["tkr", "Tsakhur"], ["tks", "Takestani"], ["tkt", "Kathoriya Tharu"], ["tku", "Upper Necaxa Totonac"], ["tkv", "Mur Pano"], ["tkw", "Teanu"], ["tkx", "Tangko"], ["tkz", "Takua"], ["tla", "Southwestern Tepehuan"], ["tlb", "Tobelo"], ["tlc", "Yecuatla Totonac"], ["tld", "Talaud"], ["tlf", "Telefol"], ["tlg", "Tofanma"], ["tlh", "Klingon, tlhIngan Hol"], ["tli", "Tlingit"], ["tlj", "Talinga-Bwisi"], ["tlk", "Taloki"], ["tll", "Tetela"], ["tlm", "Tolomako"], ["tln", "Talondo'"], ["tlo", "Talodi"], ["tlp", "Filomena Mata-Coahuitl\xE1n Totonac"], ["tlq", "Tai Loi"], ["tlr", "Talise"], ["tls", "Tambotalo"], ["tlt", "Sou Nama, Teluti"], ["tlu", "Tulehu"], ["tlv", "Taliabu"], ["tlw", "South Wemale"], ["tlx", "Khehek"], ["tly", "Talysh"], ["tma", "Tama (Chad)"], ["tmb", "Katbol, Avava"], ["tmc", "Tumak"], ["tmd", "Haruai"], ["tme", "Trememb\xE9"], ["tmf", "Toba-Maskoy"], ["tmg", "Ternate\xF1o"], ["tmh", "Tamashek"], ["tmi", "Tutuba"], ["tmj", "Samarokena"], ["tmk", "Northwestern Tamang"], ["tml", "Tamnim Citak"], ["tmm", "Tai Thanh"], ["tmn", "Taman (Indonesia)"], ["tmo", "Temoq"], ["tmp", "Tai M\xE8ne"], ["tmq", "Tumleo"], ["tmr", "Jewish Babylonian Aramaic (ca. 200-1200 CE)"], ["tms", "Tima"], ["tmt", "Tasmate"], ["tmu", "Iau"], ["tmv", "Tembo (Motembo)"], ["tmw", "Temuan"], ["tmy", "Tami"], ["tmz", "Tamanaku"], ["tna", "Tacana"], ["tnb", "Western Tunebo"], ["tnc", "Tanimuca-Retuar\xE3"], ["tnd", "Angosturas Tunebo"], ["tne", "Tinoc Kallahan"], ["tnf", "Tangshewi"], ["tng", "Tobanga"], ["tnh", "Maiani"], ["tni", "Tandia"], ["tnk", "Kwamera"], ["tnl", "Lenakel"], ["tnm", "Tabla"], ["tnn", "North Tanna"], ["tno", "Toromono"], ["tnp", "Whitesands"], ["tnq", "Taino"], ["tnr", "M\xE9nik"], ["tns", "Tenis"], ["tnt", "Tontemboan"], ["tnu", "Tay Khang"], ["tnv", "Tangchangya"], ["tnw", "Tonsawang"], ["tnx", "Tanema"], ["tny", "Tongwe"], ["tnz", "Ten'edn"], ["tob", "Toba"], ["toc", "Coyutla Totonac"], ["tod", "Toma"], ["toe", "Tomedes"], ["tof", "Gizrra"], ["tog", "Tonga (Nyasa)"], ["toh", "Gitonga"], ["toi", "Tonga (Zambia)"], ["toj", "Tojolabal"], ["tol", "Tolowa"], ["tom", "Tombulu"], ["too", "Xicotepec De Ju\xE1rez Totonac"], ["top", "Papantla Totonac"], ["toq", "Toposa"], ["tor", "Togbo-Vara Banda"], ["tos", "Highland Totonac"], ["tou", "Tho"], ["tov", "Upper Taromi"], ["tow", "Jemez"], ["tox", "Tobian"], ["toy", "Topoiyo"], ["toz", "To"], ["tpa", "Taupota"], ["tpc", "Azoy\xFA Me'phaa, Azoy\xFA Tlapanec"], ["tpe", "Tippera"], ["tpf", "Tarpia"], ["tpg", "Kula"], ["tpi", "Tok Pisin"], ["tpj", "Tapiet\xE9"], ["tpk", "Tupinikin"], ["tpl", "Tlacoapa Me'phaa, Tlacoapa Tlapanec"], ["tpm", "Tampulma"], ["tpn", "Tupinamb\xE1"], ["tpo", "Tai Pao"], ["tpp", "Pisaflores Tepehua"], ["tpq", "Tukpa"], ["tpr", "Tupar\xED"], ["tpt", "Tlachichilco Tepehua"], ["tpu", "Tampuan"], ["tpv", "Tanapag"], ["tpw", "Tup\xED"], ["tpx", "Acatepec Me'phaa, Acatepec Tlapanec"], ["tpy", "Trumai"], ["tpz", "Tinputz"], ["tqb", "Temb\xE9"], ["tql", "Lehali"], ["tqm", "Turumsa"], ["tqn", "Tenino"], ["tqo", "Toaripi"], ["tqp", "Tomoip"], ["tqq", "Tunni"], ["tqr", "Torona"], ["tqt", "Western Totonac"], ["tqu", "Touo"], ["tqw", "Tonkawa"], ["tra", "Tirahi"], ["trb", "Terebu"], ["trc", "Copala Triqui"], ["trd", "Turi"], ["tre", "East Tarangan"], ["trf", "Trinidadian Creole English"], ["trg", "Lish\xE1n Did\xE1n"], ["trh", "Turaka"], ["tri", "Tri\xF3"], ["trj", "Toram"], ["trk", "Turkic languages"], ["trl", "Traveller Scottish"], ["trm", "Tregami"], ["trn", "Trinitario"], ["tro", "Tarao Naga"], ["trp", "Kok Borok"], ["trq", "San Mart\xEDn Itunyoso Triqui"], ["trr", "Taushiro"], ["trs", "Chicahuaxtla Triqui"], ["trt", "Tunggare"], ["tru", "Turoyo, Surayt"], ["trv", "Taroko"], ["trw", "Torwali"], ["trx", "Tringgus-Sembaan Bidayuh"], ["try", "Turung"], ["trz", "Tor\xE1"], ["tsa", "Tsaangi"], ["tsb", "Tsamai"], ["tsc", "Tswa"], ["tsd", "Tsakonian"], ["tse", "Tunisian Sign Language"], ["tsf", "Southwestern Tamang"], ["tsg", "Tausug"], ["tsh", "Tsuvan"], ["tsi", "Tsimshian"], ["tsj", "Tshangla"], ["tsk", "Tseku"], ["tsl", "Ts'\xFCn-Lao"], ["tsm", "Turkish Sign Language, T\xFCrk \u0130\u015Faret Dili"], ["tsp", "Northern Toussian"], ["tsq", "Thai Sign Language"], ["tsr", "Akei"], ["tss", "Taiwan Sign Language"], ["tst", "Tondi Songway Kiini"], ["tsu", "Tsou"], ["tsv", "Tsogo"], ["tsw", "Tsishingini"], ["tsx", "Mubami"], ["tsy", "Tebul Sign Language"], ["tsz", "Purepecha"], ["tta", "Tutelo"], ["ttb", "Gaa"], ["ttc", "Tektiteko"], ["ttd", "Tauade"], ["tte", "Bwanabwana"], ["ttf", "Tuotomb"], ["ttg", "Tutong"], ["tth", "Upper Ta'oih"], ["tti", "Tobati"], ["ttj", "Tooro"], ["ttk", "Totoro"], ["ttl", "Totela"], ["ttm", "Northern Tutchone"], ["ttn", "Towei"], ["tto", "Lower Ta'oih"], ["ttp", "Tombelala"], ["ttq", "Tawallammat Tamajaq"], ["ttr", "Tera"], ["tts", "Northeastern Thai"], ["ttt", "Muslim Tat"], ["ttu", "Torau"], ["ttv", "Titan"], ["ttw", "Long Wat"], ["tty", "Sikaritai"], ["ttz", "Tsum"], ["tua", "Wiarumus"], ["tub", "T\xFCbatulabal"], ["tuc", "Mutu"], ["tud", "Tux\xE1"], ["tue", "Tuyuca"], ["tuf", "Central Tunebo"], ["tug", "Tunia"], ["tuh", "Taulil"], ["tui", "Tupuri"], ["tuj", "Tugutil"], ["tul", "Tula"], ["tum", "Tumbuka"], ["tun", "Tunica"], ["tuo", "Tucano"], ["tup", "Tupi languages"], ["tuq", "Tedaga"], ["tus", "Tuscarora"], ["tut", "Altaic languages"], ["tuu", "Tututni"], ["tuv", "Turkana"], ["tuw", "Tungus languages"], ["tux", "Tuxin\xE1wa"], ["tuy", "Tugen"], ["tuz", "Turka"], ["tva", "Vaghua"], ["tvd", "Tsuvadi"], ["tve", "Te'un"], ["tvk", "Southeast Ambrym"], ["tvl", "Tuvalu"], ["tvm", "Tela-Masbuar"], ["tvn", "Tavoyan"], ["tvo", "Tidore"], ["tvs", "Taveta"], ["tvt", "Tutsa Naga"], ["tvu", "Tunen"], ["tvw", "Sedoa"], ["tvx", "Taivoan"], ["tvy", "Timor Pidgin"], ["twa", "Twana"], ["twb", "Western Tawbuid"], ["twc", "Teshenawa"], ["twd", "Twents"], ["twe", "Tewa (Indonesia)"], ["twf", "Northern Tiwa"], ["twg", "Tereweng"], ["twh", "Tai D\xF3n"], ["twl", "Tawara"], ["twm", "Tawang Monpa"], ["twn", "Twendi"], ["two", "Tswapong"], ["twp", "Ere"], ["twq", "Tasawaq"], ["twr", "Southwestern Tarahumara"], ["twt", "Turiw\xE1ra"], ["twu", "Termanu"], ["tww", "Tuwari"], ["twx", "Tewe"], ["twy", "Tawoyan"], ["txa", "Tombonuo"], ["txb", "Tokharian B"], ["txc", "Tsetsaut"], ["txe", "Totoli"], ["txg", "Tangut"], ["txh", "Thracian"], ["txi", "Ikpeng"], ["txj", "Tarjumo"], ["txm", "Tomini"], ["txn", "West Tarangan"], ["txo", "Toto"], ["txq", "Tii"], ["txr", "Tartessian"], ["txs", "Tonsea"], ["txt", "Citak"], ["txu", "Kayap\xF3"], ["txx", "Tatana"], ["txy", "Tanosy Malagasy"], ["tya", "Tauya"], ["tye", "Kyanga"], ["tyh", "O'du"], ["tyi", "Teke-Tsaayi"], ["tyj", "Tai Do, Tai Yo"], ["tyl", "Thu Lao"], ["tyn", "Kombai"], ["typ", "Thaypan"], ["tyr", "Tai Daeng"], ["tys", "T\xE0y Sa Pa"], ["tyt", "T\xE0y Tac"], ["tyu", "Kua"], ["tyv", "Tuvinian"], ["tyx", "Teke-Tyee"], ["tyy", "Tiyaa"], ["tyz", "T\xE0y"], ["tza", "Tanzanian Sign Language"], ["tzh", "Tzeltal"], ["tzj", "Tz'utujil"], ["tzl", "Talossan"], ["tzm", "Central Atlas Tamazight"], ["tzn", "Tugun"], ["tzo", "Tzotzil"], ["tzx", "Tabriak"], ["uam", "Uamu\xE9"], ["uan", "Kuan"], ["uar", "Tairuma"], ["uba", "Ubang"], ["ubi", "Ubi"], ["ubl", "Buhi'non Bikol"], ["ubr", "Ubir"], ["ubu", "Umbu-Ungu"], ["uby", "Ubykh"], ["uda", "Uda"], ["ude", "Udihe"], ["udg", "Muduga"], ["udi", "Udi"], ["udj", "Ujir"], ["udl", "Wuzlam"], ["udm", "Udmurt"], ["udu", "Uduk"], ["ues", "Kioko"], ["ufi", "Ufim"], ["uga", "Ugaritic"], ["ugb", "Kuku-Ugbanh"], ["uge", "Ughele"], ["ugn", "Ugandan Sign Language"], ["ugo", "Ugong"], ["ugy", "Uruguayan Sign Language"], ["uha", "Uhami"], ["uhn", "Damal"], ["uis", "Uisai"], ["uiv", "Iyive"], ["uji", "Tanjijili"], ["uka", "Kaburi"], ["ukg", "Ukuriguma"], ["ukh", "Ukhwejo"], ["uki", "Kui (India)"], ["ukk", "Muak Sa-aak"], ["ukl", "Ukrainian Sign Language"], ["ukp", "Ukpe-Bayobiri"], ["ukq", "Ukwa"], ["uks", "Urub\xFA-Kaapor Sign Language, Kaapor Sign Language"], ["uku", "Ukue"], ["ukv", "Kuku"], ["ukw", "Ukwuani-Aboh-Ndoni"], ["uky", "Kuuk-Yak"], ["ula", "Fungwa"], ["ulb", "Ulukwumi"], ["ulc", "Ulch"], ["ule", "Lule"], ["ulf", "Usku, Afra"], ["uli", "Ulithian"], ["ulk", "Meriam Mir"], ["ull", "Ullatan"], ["ulm", "Ulumanda'"], ["uln", "Unserdeutsch"], ["ulu", "Uma' Lung"], ["ulw", "Ulwa"], ["uma", "Umatilla"], ["umb", "Umbundu"], ["umc", "Marrucinian"], ["umd", "Umbindhamu"], ["umg", "Morrobalama, Umbuygamu"], ["umi", "Ukit"], ["umm", "Umon"], ["umn", "Makyan Naga"], ["umo", "Umot\xEDna"], ["ump", "Umpila"], ["umr", "Umbugarla"], ["ums", "Pendau"], ["umu", "Munsee"], ["una", "North Watut"], ["und", "Undetermined"], ["une", "Uneme"], ["ung", "Ngarinyin"], ["uni", "Uni"], ["unk", "Enawen\xE9-Naw\xE9"], ["unm", "Unami"], ["unn", "Kurnai"], ["unp", "Worora"], ["unr", "Mundari"], ["unu", "Unubahe"], ["unx", "Munda"], ["unz", "Unde Kaili"], ["uok", "Uokha"], ["upi", "Umeda"], ["upv", "Uripiv-Wala-Rano-Atchin"], ["ura", "Urarina"], ["urb", "Urub\xFA-Kaapor, Kaapor"], ["urc", "Urningangg"], ["ure", "Uru"], ["urf", "Uradhi"], ["urg", "Urigina"], ["urh", "Urhobo"], ["uri", "Urim"], ["urj", "Uralic languages"], ["urk", "Urak Lawoi'"], ["url", "Urali"], ["urm", "Urapmin"], ["urn", "Uruangnirin"], ["uro", "Ura (Papua New Guinea)"], ["urp", "Uru-Pa-In"], ["urr", "Lehalurup, L\xF6y\xF6p"], ["urt", "Urat"], ["uru", "Urumi"], ["urv", "Uruava"], ["urw", "Sop"], ["urx", "Urimo"], ["ury", "Orya"], ["urz", "Uru-Eu-Wau-Wau"], ["usa", "Usarufa"], ["ush", "Ushojo"], ["usi", "Usui"], ["usk", "Usaghade"], ["usp", "Uspanteco"], ["uss", "us-Saare"], ["usu", "Uya"], ["uta", "Otank"], ["ute", "Ute-Southern Paiute"], ["uth", "ut-Hun"], ["utp", "Amba (Solomon Islands)"], ["utr", "Etulo"], ["utu", "Utu"], ["uum", "Urum"], ["uun", "Kulon-Pazeh"], ["uur", "Ura (Vanuatu)"], ["uuu", "U"], ["uve", "West Uvean, Fagauvea"], ["uvh", "Uri"], ["uvl", "Lote"], ["uwa", "Kuku-Uwanh"], ["uya", "Doko-Uyanga"], ["uzn", "Northern Uzbek"], ["uzs", "Southern Uzbek"], ["vaa", "Vaagri Booli"], ["vae", "Vale"], ["vaf", "Vafsi"], ["vag", "Vagla"], ["vah", "Varhadi-Nagpuri"], ["vai", "Vai"], ["vaj", "Sekele, Northwestern \u01C3Kung, Vasekele"], ["val", "Vehes"], ["vam", "Vanimo"], ["van", "Valman"], ["vao", "Vao"], ["vap", "Vaiphei"], ["var", "Huarijio"], ["vas", "Vasavi"], ["vau", "Vanuma"], ["vav", "Varli"], ["vay", "Wayu"], ["vbb", "Southeast Babar"], ["vbk", "Southwestern Bontok"], ["vec", "Venetian"], ["ved", "Veddah"], ["vel", "Veluws"], ["vem", "Vemgo-Mabas"], ["veo", "Venture\xF1o"], ["vep", "Veps"], ["ver", "Mom Jango"], ["vgr", "Vaghri"], ["vgt", "Vlaamse Gebarentaal, Flemish Sign Language"], ["vic", "Virgin Islands Creole English"], ["vid", "Vidunda"], ["vif", "Vili"], ["vig", "Viemo"], ["vil", "Vilela"], ["vin", "Vinza"], ["vis", "Vishavan"], ["vit", "Viti"], ["viv", "Iduna"], ["vka", "Kariyarra"], ["vki", "Ija-Zuba"], ["vkj", "Kujarge"], ["vkk", "Kaur"], ["vkl", "Kulisusu"], ["vkm", "Kamakan"], ["vkn", "Koro Nulu"], ["vko", "Kodeoha"], ["vkp", "Korlai Creole Portuguese"], ["vkt", "Tenggarong Kutai Malay"], ["vku", "Kurrama"], ["vkz", "Koro Zuba"], ["vlp", "Valpei"], ["vls", "Vlaams"], ["vma", "Martuyhunira"], ["vmb", "Barbaram"], ["vmc", "Juxtlahuaca Mixtec"], ["vmd", "Mudu Koraga"], ["vme", "East Masela"], ["vmf", "Mainfr\xE4nkisch"], ["vmg", "Lungalunga"], ["vmh", "Maraghei"], ["vmi", "Miwa"], ["vmj", "Ixtayutla Mixtec"], ["vmk", "Makhuwa-Shirima"], ["vml", "Malgana"], ["vmm", "Mitlatongo Mixtec"], ["vmp", "Soyaltepec Mazatec"], ["vmq", "Soyaltepec Mixtec"], ["vmr", "Marenje"], ["vms", "Moksela"], ["vmu", "Muluridyi"], ["vmv", "Valley Maidu"], ["vmw", "Makhuwa"], ["vmx", "Tamazola Mixtec"], ["vmy", "Ayautla Mazatec"], ["vmz", "Mazatl\xE1n Mazatec"], ["vnk", "Vano, Lovono"], ["vnm", "Vinmavis, Neve'ei"], ["vnp", "Vunapu"], ["vor", "Voro"], ["vot", "Votic"], ["vra", "Vera'a"], ["vro", "V\xF5ro"], ["vrs", "Varisi"], ["vrt", "Burmbar, Banam Bay"], ["vsi", "Moldova Sign Language"], ["vsl", "Venezuelan Sign Language"], ["vsv", "Valencian Sign Language, Llengua de signes valenciana"], ["vto", "Vitou"], ["vum", "Vumbu"], ["vun", "Vunjo"], ["vut", "Vute"], ["vwa", "Awa (China)"], ["waa", "Walla Walla"], ["wab", "Wab"], ["wac", "Wasco-Wishram"], ["wad", "Wamesa, Wondama"], ["wae", "Walser"], ["waf", "Wakon\xE1"], ["wag", "Wa'ema"], ["wah", "Watubela"], ["wai", "Wares"], ["waj", "Waffa"], ["wak", "Wakashan languages"], ["wal", "Wolaytta, Wolaitta"], ["wam", "Wampanoag"], ["wan", "Wan"], ["wao", "Wappo"], ["wap", "Wapishana"], ["waq", "Wagiman"], ["war", "Waray (Philippines)"], ["was", "Washo"], ["wat", "Kaninuwa"], ["wau", "Waur\xE1"], ["wav", "Waka"], ["waw", "Waiwai"], ["wax", "Watam, Marangis"], ["way", "Wayana"], ["waz", "Wampur"], ["wba", "Warao"], ["wbb", "Wabo"], ["wbe", "Waritai"], ["wbf", "Wara"], ["wbh", "Wanda"], ["wbi", "Vwanji"], ["wbj", "Alagwa"], ["wbk", "Waigali"], ["wbl", "Wakhi"], ["wbm", "Wa"], ["wbp", "Warlpiri"], ["wbq", "Waddar"], ["wbr", "Wagdi"], ["wbs", "West Bengal Sign Language"], ["wbt", "Warnman"], ["wbv", "Wajarri"], ["wbw", "Woi"], ["wca", "Yanom\xE1mi"], ["wci", "Waci Gbe"], ["wdd", "Wandji"], ["wdg", "Wadaginam"], ["wdj", "Wadjiginy"], ["wdk", "Wadikali"], ["wdu", "Wadjigu"], ["wdy", "Wadjabangayi"], ["wea", "Wewaw"], ["wec", "W\xE8 Western"], ["wed", "Wedau"], ["weg", "Wergaia"], ["weh", "Weh"], ["wei", "Kiunum"], ["wem", "Weme Gbe"], ["wen", "Sorbian languages"], ["weo", "Wemale"], ["wep", "Westphalien"], ["wer", "Weri"], ["wes", "Cameroon Pidgin"], ["wet", "Perai"], ["weu", "Rawngtu Chin"], ["wew", "Wejewa"], ["wfg", "Yafi, Zorop"], ["wga", "Wagaya"], ["wgb", "Wagawaga"], ["wgg", "Wangkangurru, Wangganguru"], ["wgi", "Wahgi"], ["wgo", "Waigeo"], ["wgu", "Wirangu"], ["wgw", "Wagawaga"], ["wgy", "Warrgamay"], ["wha", "Sou Upaa, Manusela"], ["whg", "North Wahgi"], ["whk", "Wahau Kenyah"], ["whu", "Wahau Kayan"], ["wib", "Southern Toussian"], ["wic", "Wichita"], ["wie", "Wik-Epa"], ["wif", "Wik-Keyangan"], ["wig", "Wik Ngathan"], ["wih", "Wik-Me'anha"], ["wii", "Minidien"], ["wij", "Wik-Iiyanh"], ["wik", "Wikalkan"], ["wil", "Wilawila"], ["wim", "Wik-Mungkan"], ["win", "Ho-Chunk"], ["wir", "Wiraf\xE9d"], ["wit", "Wintu"], ["wiu", "Wiru"], ["wiv", "Vitu"], ["wiw", "Wirangu"], ["wiy", "Wiyot"], ["wja", "Waja"], ["wji", "Warji"], ["wka", "Kw'adza"], ["wkb", "Kumbaran"], ["wkd", "Wakde, Mo"], ["wkl", "Kalanadi"], ["wkr", "Keerray-Woorroong"], ["wku", "Kunduvadi"], ["wkw", "Wakawaka"], ["wky", "Wangkayutyuru"], ["wla", "Walio"], ["wlc", "Mwali Comorian"], ["wle", "Wolane"], ["wlg", "Kunbarlang"], ["wlh", "Welaun"], ["wli", "Waioli"], ["wlk", "Wailaki"], ["wll", "Wali (Sudan)"], ["wlm", "Middle Welsh"], ["wlo", "Wolio"], ["wlr", "Wailapa"], ["wls", "Wallisian"], ["wlu", "Wuliwuli"], ["wlv", "Wich\xED Lhamt\xE9s Vejoz"], ["wlw", "Walak"], ["wlx", "Wali (Ghana)"], ["wly", "Waling"], ["wma", "Mawa (Nigeria)"], ["wmb", "Wambaya"], ["wmc", "Wamas"], ["wmd", "Mamaind\xE9"], ["wme", "Wambule"], ["wmg", "Western Minyag"], ["wmh", "Waima'a"], ["wmi", "Wamin"], ["wmm", "Maiwa (Indonesia)"], ["wmn", "Waamwang"], ["wmo", "Wom (Papua New Guinea)"], ["wms", "Wambon"], ["wmt", "Walmajarri"], ["wmw", "Mwani"], ["wmx", "Womo"], ["wnb", "Wanambre"], ["wnc", "Wantoat"], ["wnd", "Wandarang"], ["wne", "Waneci"], ["wng", "Wanggom"], ["wni", "Ndzwani Comorian"], ["wnk", "Wanukaka"], ["wnm", "Wanggamala"], ["wnn", "Wunumara"], ["wno", "Wano"], ["wnp", "Wanap"], ["wnu", "Usan"], ["wnw", "Wintu"], ["wny", "Wanyi, Waanyi"], ["woa", "Kuwema, Tyaraity"], ["wob", "W\xE8 Northern"], ["woc", "Wogeo"], ["wod", "Wolani"], ["woe", "Woleaian"], ["wof", "Gambian Wolof"], ["wog", "Wogamusin"], ["woi", "Kamang"], ["wok", "Longto"], ["wom", "Wom (Nigeria)"], ["won", "Wongo"], ["woo", "Manombai"], ["wor", "Woria"], ["wos", "Hanga Hundi"], ["wow", "Wawonii"], ["woy", "Weyto"], ["wpc", "Maco"], ["wra", "Warapu"], ["wrb", "Waluwarra, Warluwara"], ["wrd", "Warduji"], ["wrg", "Warungu, Gudjal"], ["wrh", "Wiradjuri"], ["wri", "Wariyangga"], ["wrk", "Garrwa"], ["wrl", "Warlmanpa"], ["wrm", "Warumungu"], ["wrn", "Warnang"], ["wro", "Worrorra"], ["wrp", "Waropen"], ["wrr", "Wardaman"], ["wrs", "Waris"], ["wru", "Waru"], ["wrv", "Waruna"], ["wrw", "Gugu Warra"], ["wrx", "Wae Rana"], ["wry", "Merwari"], ["wrz", "Waray (Australia)"], ["wsa", "Warembori"], ["wsg", "Adilabad Gondi"], ["wsi", "Wusi"], ["wsk", "Waskia"], ["wsr", "Owenia"], ["wss", "Wasa"], ["wsu", "Wasu"], ["wsv", "Wotapuri-Katarqalai"], ["wtf", "Watiwa"], ["wth", "Wathawurrung"], ["wti", "Berta"], ["wtk", "Watakataui"], ["wtm", "Mewati"], ["wtw", "Wotu"], ["wua", "Wikngenchera"], ["wub", "Wunambal"], ["wud", "Wudu"], ["wuh", "Wutunhua"], ["wul", "Silimo"], ["wum", "Wumbvu"], ["wun", "Bungu"], ["wur", "Wurrugu"], ["wut", "Wutung"], ["wuu", "Wu Chinese"], ["wuv", "Wuvulu-Aua"], ["wux", "Wulna"], ["wuy", "Wauyai"], ["wwa", "Waama"], ["wwb", "Wakabunga"], ["wwo", "Wetamut, Dorig"], ["wwr", "Warrwa"], ["www", "Wawa"], ["wxa", "Waxianghua"], ["wxw", "Wardandi"], ["wya", "Wyandot"], ["wyb", "Wangaaybuwan-Ngiyambaa"], ["wyi", "Woiwurrung"], ["wym", "Wymysorys"], ["wyr", "Wayor\xF3"], ["wyy", "Western Fijian"], ["xaa", "Andalusian Arabic"], ["xab", "Sambe"], ["xac", "Kachari"], ["xad", "Adai"], ["xae", "Aequian"], ["xag", "Aghwan"], ["xai", "Kaimb\xE9"], ["xaj", "Ararandew\xE1ra"], ["xak", "M\xE1ku"], ["xal", "Kalmyk, Oirat"], ["xam", "\u01C0Xam"], ["xan", "Xamtanga"], ["xao", "Khao"], ["xap", "Apalachee"], ["xaq", "Aquitanian"], ["xar", "Karami"], ["xas", "Kamas"], ["xat", "Katawixi"], ["xau", "Kauwera"], ["xav", "Xav\xE1nte"], ["xaw", "Kawaiisu"], ["xay", "Kayan Mahakam"], ["xba", "Kamba (Brazil)"], ["xbb", "Lower Burdekin"], ["xbc", "Bactrian"], ["xbd", "Bindal"], ["xbe", "Bigambal"], ["xbg", "Bunganditj"], ["xbi", "Kombio"], ["xbj", "Birrpayi"], ["xbm", "Middle Breton"], ["xbn", "Kenaboi"], ["xbo", "Bolgarian"], ["xbp", "Bibbulman"], ["xbr", "Kambera"], ["xbw", "Kambiw\xE1"], ["xbx", "Kabix\xED"], ["xby", "Batjala, Batyala"], ["xcb", "Cumbric"], ["xcc", "Camunic"], ["xce", "Celtiberian"], ["xcg", "Cisalpine Gaulish"], ["xch", "Chemakum, Chimakum"], ["xcl", "Classical Armenian"], ["xcm", "Comecrudo"], ["xcn", "Cotoname"], ["xco", "Chorasmian"], ["xcr", "Carian"], ["xct", "Classical Tibetan"], ["xcu", "Curonian"], ["xcv", "Chuvantsy"], ["xcw", "Coahuilteco"], ["xcy", "Cayuse"], ["xda", "Darkinyung"], ["xdc", "Dacian"], ["xdk", "Dharuk"], ["xdm", "Edomite"], ["xdo", "Kwandu"], ["xdy", "Malayic Dayak"], ["xeb", "Eblan"], ["xed", "Hdi"], ["xeg", "\u01C1Xegwi"], ["xel", "Kelo"], ["xem", "Kembayan"], ["xep", "Epi-Olmec"], ["xer", "Xer\xE9nte"], ["xes", "Kesawai"], ["xet", "Xet\xE1"], ["xeu", "Keoru-Ahia"], ["xfa", "Faliscan"], ["xga", "Galatian"], ["xgb", "Gbin"], ["xgd", "Gudang"], ["xgf", "Gabrielino-Fernande\xF1o"], ["xgg", "Goreng"], ["xgi", "Garingbal"], ["xgl", "Galindan"], ["xgm", "Dharumbal, Guwinmal"], ["xgn", "Mongolian languages"], ["xgr", "Garza"], ["xgu", "Unggumi"], ["xgw", "Guwa"], ["xha", "Harami"], ["xhc", "Hunnic"], ["xhd", "Hadrami"], ["xhe", "Khetrani"], ["xhr", "Hernican"], ["xht", "Hattic"], ["xhu", "Hurrian"], ["xhv", "Khua"], ["xia", "Xiandao"], ["xib", "Iberian"], ["xii", "Xiri"], ["xil", "Illyrian"], ["xin", "Xinca"], ["xip", "Xipin\xE1wa"], ["xir", "Xiri\xE2na"], ["xis", "Kisan"], ["xiv", "Indus Valley Language"], ["xiy", "Xipaya"], ["xjb", "Minjungbal"], ["xjt", "Jaitmatang"], ["xka", "Kalkoti"], ["xkb", "Northern Nago"], ["xkc", "Kho'ini"], ["xkd", "Mendalam Kayan"], ["xke", "Kereho"], ["xkf", "Khengkha"], ["xkg", "Kagoro"], ["xkh", "Karahawyana"], ["xki", "Kenyan Sign Language"], ["xkj", "Kajali"], ["xkk", "Kaco'"], ["xkl", "Mainstream Kenyah"], ["xkn", "Kayan River Kayan"], ["xko", "Kiorr"], ["xkp", "Kabatei"], ["xkq", "Koroni"], ["xkr", "Xakriab\xE1"], ["xks", "Kumbewaha"], ["xkt", "Kantosi"], ["xku", "Kaamba"], ["xkv", "Kgalagadi"], ["xkw", "Kembra"], ["xkx", "Karore"], ["xky", "Uma' Lasan"], ["xkz", "Kurtokha"], ["xla", "Kamula"], ["xlb", "Loup B"], ["xlc", "Lycian"], ["xld", "Lydian"], ["xle", "Lemnian"], ["xlg", "Ligurian (Ancient)"], ["xli", "Liburnian"], ["xln", "Alanic"], ["xlo", "Loup A"], ["xlp", "Lepontic"], ["xls", "Lusitanian"], ["xlu", "Cuneiform Luwian"], ["xly", "Elymian"], ["xma", "Mushungulu"], ["xmb", "Mbonga"], ["xmc", "Makhuwa-Marrevone"], ["xmd", "Mbudum"], ["xme", "Median"], ["xmf", "Mingrelian"], ["xmg", "Mengaka"], ["xmh", "Kugu-Muminh"], ["xmj", "Majera"], ["xmk", "Ancient Macedonian"], ["xml", "Malaysian Sign Language"], ["xmm", "Manado Malay"], ["xmn", "Manichaean Middle Persian"], ["xmo", "Morerebi"], ["xmp", "Kuku-Mu'inh"], ["xmq", "Kuku-Mangk"], ["xmr", "Meroitic"], ["xms", "Moroccan Sign Language"], ["xmt", "Matbat"], ["xmu", "Kamu"], ["xmv", "Antankarana Malagasy, Tankarana Malagasy"], ["xmw", "Tsimihety Malagasy"], ["xmx", "Maden"], ["xmy", "Mayaguduna"], ["xmz", "Mori Bawah"], ["xna", "Ancient North Arabian"], ["xnb", "Kanakanabu"], ["xnd", "Na-Dene languages"], ["xng", "Middle Mongolian"], ["xnh", "Kuanhua"], ["xni", "Ngarigu"], ["xnj", "Ngoni (Tanzania)"], ["xnk", "Nganakarti"], ["xnm", "Ngumbarl"], ["xnn", "Northern Kankanay"], ["xno", "Anglo-Norman"], ["xnq", "Ngoni (Mozambique)"], ["xnr", "Kangri"], ["xns", "Kanashi"], ["xnt", "Narragansett"], ["xnu", "Nukunul"], ["xny", "Nyiyaparli"], ["xnz", "Kenzi, Mattoki"], ["xoc", "O'chi'chi'"], ["xod", "Kokoda"], ["xog", "Soga"], ["xoi", "Kominimung"], ["xok", "Xokleng"], ["xom", "Komo (Sudan)"], ["xon", "Konkomba"], ["xoo", "Xukur\xFA"], ["xop", "Kopar"], ["xor", "Korubo"], ["xow", "Kowaki"], ["xpa", "Pirriya"], ["xpb", "Northeastern Tasmanian, Pyemmairrener"], ["xpc", "Pecheneg"], ["xpd", "Oyster Bay Tasmanian"], ["xpe", "Liberia Kpelle"], ["xpf", "Southeast Tasmanian, Nuenonne"], ["xpg", "Phrygian"], ["xph", "North Midlands Tasmanian, Tyerrenoterpanner"], ["xpi", "Pictish"], ["xpj", "Mpalitjanh"], ["xpk", "Kulina Pano"], ["xpl", "Port Sorell Tasmanian"], ["xpm", "Pumpokol"], ["xpn", "Kapinaw\xE1"], ["xpo", "Pochutec"], ["xpp", "Puyo-Paekche"], ["xpq", "Mohegan-Pequot"], ["xpr", "Parthian"], ["xps", "Pisidian"], ["xpt", "Punthamara"], ["xpu", "Punic"], ["xpv", "Northern Tasmanian, Tommeginne"], ["xpw", "Northwestern Tasmanian, Peerapper"], ["xpx", "Southwestern Tasmanian, Toogee"], ["xpy", "Puyo"], ["xpz", "Bruny Island Tasmanian"], ["xqa", "Karakhanid"], ["xqt", "Qatabanian"], ["xra", "Krah\xF4"], ["xrb", "Eastern Karaboro"], ["xrd", "Gundungurra"], ["xre", "Kreye"], ["xrg", "Minang"], ["xri", "Krikati-Timbira"], ["xrm", "Armazic"], ["xrn", "Arin"], ["xrq", "Karranga"], ["xrr", "Raetic"], ["xrt", "Aranama-Tamique"], ["xru", "Marriammu"], ["xrw", "Karawa"], ["xsa", "Sabaean"], ["xsb", "Sambal"], ["xsc", "Scythian"], ["xsd", "Sidetic"], ["xse", "Sempan"], ["xsh", "Shamang"], ["xsi", "Sio"], ["xsj", "Subi"], ["xsl", "South Slavey"], ["xsm", "Kasem"], ["xsn", "Sanga (Nigeria)"], ["xso", "Solano"], ["xsp", "Silopi"], ["xsq", "Makhuwa-Saka"], ["xsr", "Sherpa"], ["xss", "Assan"], ["xsu", "Sanum\xE1"], ["xsv", "Sudovian"], ["xsy", "Saisiyat"], ["xta", "Alcozauca Mixtec"], ["xtb", "Chazumba Mixtec"], ["xtc", "Katcha-Kadugli-Miri"], ["xtd", "Diuxi-Tilantongo Mixtec"], ["xte", "Ketengban"], ["xtg", "Transalpine Gaulish"], ["xth", "Yitha Yitha"], ["xti", "Sinicahua Mixtec"], ["xtj", "San Juan Teita Mixtec"], ["xtl", "Tijaltepec Mixtec"], ["xtm", "Magdalena Pe\xF1asco Mixtec"], ["xtn", "Northern Tlaxiaco Mixtec"], ["xto", "Tokharian A"], ["xtp", "San Miguel Piedras Mixtec"], ["xtq", "Tumshuqese"], ["xtr", "Early Tripuri"], ["xts", "Sindihui Mixtec"], ["xtt", "Tacahua Mixtec"], ["xtu", "Cuyamecalco Mixtec"], ["xtv", "Thawa"], ["xtw", "Tawand\xEA"], ["xty", "Yoloxochitl Mixtec"], ["xtz", "Tasmanian"], ["xua", "Alu Kurumba"], ["xub", "Betta Kurumba"], ["xud", "Umiida"], ["xug", "Kunigami"], ["xuj", "Jennu Kurumba"], ["xul", "Ngunawal, Nunukul"], ["xum", "Umbrian"], ["xun", "Unggaranggu"], ["xuo", "Kuo"], ["xup", "Upper Umpqua"], ["xur", "Urartian"], ["xut", "Kuthant"], ["xuu", "Kxoe, Khwedam"], ["xve", "Venetic"], ["xvi", "Kamviri"], ["xvn", "Vandalic"], ["xvo", "Volscian"], ["xvs", "Vestinian"], ["xwa", "Kwaza"], ["xwc", "Woccon"], ["xwd", "Wadi Wadi"], ["xwe", "Xwela Gbe"], ["xwg", "Kwegu"], ["xwj", "Wajuk"], ["xwk", "Wangkumara"], ["xwl", "Western Xwla Gbe"], ["xwo", "Written Oirat"], ["xwr", "Kwerba Mamberamo"], ["xwt", "Wotjobaluk"], ["xww", "Wemba Wemba"], ["xxb", "Boro (Ghana)"], ["xxk", "Ke'o"], ["xxm", "Minkin"], ["xxr", "Korop\xF3"], ["xxt", "Tambora"], ["xya", "Yaygir"], ["xyb", "Yandjibara"], ["xyj", "Mayi-Yapi"], ["xyk", "Mayi-Kulan"], ["xyl", "Yalakalore"], ["xyt", "Mayi-Thakurti"], ["xyy", "Yorta Yorta"], ["xzh", "Zhang-Zhung"], ["xzm", "Zemgalian"], ["xzp", "Ancient Zapotec"], ["yaa", "Yaminahua"], ["yab", "Yuhup"], ["yac", "Pass Valley Yali"], ["yad", "Yagua"], ["yae", "Pum\xE9"], ["yaf", "Yaka (Democratic Republic of Congo)"], ["yag", "Y\xE1mana"], ["yah", "Yazgulyam"], ["yai", "Yagnobi"], ["yaj", "Banda-Yangere"], ["yak", "Yakama"], ["yal", "Yalunka"], ["yam", "Yamba"], ["yan", "Mayangna"], ["yao", "Yao"], ["yap", "Yapese"], ["yaq", "Yaqui"], ["yar", "Yabarana"], ["yas", "Nugunu (Cameroon)"], ["yat", "Yambeta"], ["yau", "Yuwana"], ["yav", "Yangben"], ["yaw", "Yawalapit\xED"], ["yax", "Yauma"], ["yay", "Agwagwune"], ["yaz", "Lokaa"], ["yba", "Yala"], ["ybb", "Yemba"], ["ybd", "Yangbye"], ["ybe", "West Yugur"], ["ybh", "Yakha"], ["ybi", "Yamphu"], ["ybj", "Hasha"], ["ybk", "Bokha"], ["ybl", "Yukuben"], ["ybm", "Yaben"], ["ybn", "Yaba\xE2na"], ["ybo", "Yabong"], ["ybx", "Yawiyo"], ["yby", "Yaweyuha"], ["ych", "Chesu"], ["ycl", "Lolopo"], ["ycn", "Yucuna"], ["ycp", "Chepya"], ["yda", "Yanda"], ["ydd", "Eastern Yiddish"], ["yde", "Yangum Dey"], ["ydg", "Yidgha"], ["ydk", "Yoidik"], ["yds", "Yiddish Sign Language"], ["yea", "Ravula"], ["yec", "Yeniche"], ["yee", "Yimas"], ["yei", "Yeni"], ["yej", "Yevanic"], ["yel", "Yela"], ["yen", "Yendang"], ["yer", "Tarok"], ["yes", "Nyankpa"], ["yet", "Yetfa"], ["yeu", "Yerukula"], ["yev", "Yapunda"], ["yey", "Yeyi"], ["yga", "Malyangapa"], ["ygi", "Yiningayi"], ["ygl", "Yangum Gel"], ["ygm", "Yagomi"], ["ygp", "Gepo"], ["ygr", "Yagaria"], ["ygs", "Yol\u014Bu Sign Language"], ["ygu", "Yugul"], ["ygw", "Yagwoia"], ["yha", "Baha Buyang"], ["yhd", "Judeo-Iraqi Arabic"], ["yhl", "Hlepho Phowa"], ["yhs", "Yan-nha\u014Bu Sign Language"], ["yia", "Yinggarda"], ["yif", "Ache"], ["yig", "Wusa Nasu"], ["yih", "Western Yiddish"], ["yii", "Yidiny"], ["yij", "Yindjibarndi"], ["yik", "Dongshanba Lalo"], ["yil", "Yindjilandji"], ["yim", "Yimchungru Naga"], ["yin", "Riang Lai, Yinchia"], ["yip", "Pholo"], ["yiq", "Miqie"], ["yir", "North Awyu"], ["yis", "Yis"], ["yit", "Eastern Lalu"], ["yiu", "Awu"], ["yiv", "Northern Nisu"], ["yix", "Axi Yi"], ["yiy", "Yir Yoront"], ["yiz", "Azhe"], ["yka", "Yakan"], ["ykg", "Northern Yukaghir"], ["yki", "Yoke"], ["ykk", "Yakaikeke"], ["ykl", "Khlula"], ["ykm", "Kap"], ["ykn", "Kua-nsi"], ["yko", "Yasa"], ["ykr", "Yekora"], ["ykt", "Kathu"], ["yku", "Kuamasi"], ["yky", "Yakoma"], ["yla", "Yaul"], ["ylb", "Yaleba"], ["yle", "Yele"], ["ylg", "Yelogu"], ["yli", "Angguruk Yali"], ["yll", "Yil"], ["ylm", "Limi"], ["yln", "Langnian Buyang"], ["ylo", "Naluo Yi"], ["ylr", "Yalarnnga"], ["ylu", "Aribwaung"], ["yly", "Ny\xE2layu, Nyel\xE2yu"], ["yma", "Yamphe"], ["ymb", "Yambes"], ["ymc", "Southern Muji"], ["ymd", "Muda"], ["yme", "Yameo"], ["ymg", "Yamongeri"], ["ymh", "Mili"], ["ymi", "Moji"], ["ymk", "Makwe"], ["yml", "Iamalele"], ["ymm", "Maay"], ["ymn", "Yamna, Sunum"], ["ymo", "Yangum Mon"], ["ymp", "Yamap"], ["ymq", "Qila Muji"], ["ymr", "Malasar"], ["yms", "Mysian"], ["ymt", "Mator-Taygi-Karagas"], ["ymx", "Northern Muji"], ["ymz", "Muzi"], ["yna", "Aluo"], ["ynd", "Yandruwandha"], ["yne", "Lang'e"], ["yng", "Yango"], ["ynh", "Yangho"], ["ynk", "Naukan Yupik"], ["ynl", "Yangulam"], ["ynn", "Yana"], ["yno", "Yong"], ["ynq", "Yendang"], ["yns", "Yansi"], ["ynu", "Yahuna"], ["yob", "Yoba"], ["yog", "Yogad"], ["yoi", "Yonaguni"], ["yok", "Yokuts"], ["yol", "Yola"], ["yom", "Yombe"], ["yon", "Yongkom"], ["yos", "Yos"], ["yot", "Yotti"], ["yox", "Yoron"], ["yoy", "Yoy"], ["ypa", "Phala"], ["ypb", "Labo Phowa"], ["ypg", "Phola"], ["yph", "Phupha"], ["ypk", "Yupik languages"], ["ypm", "Phuma"], ["ypn", "Ani Phowa"], ["ypo", "Alo Phola"], ["ypp", "Phupa"], ["ypz", "Phuza"], ["yra", "Yerakai"], ["yrb", "Yareba"], ["yre", "Yaour\xE9"], ["yri", "Yar\xED"], ["yrk", "Nenets"], ["yrl", "Nhengatu"], ["yrm", "Yirrk-Mel"], ["yrn", "Yerong"], ["yro", "Yaroam\xEB"], ["yrs", "Yarsun"], ["yrw", "Yarawata"], ["yry", "Yarluyandi"], ["ysc", "Yassic"], ["ysd", "Samatao"], ["ysg", "Sonaga"], ["ysl", "Yugoslavian Sign Language"], ["ysm", "Myanmar Sign Language"], ["ysn", "Sani"], ["yso", "Nisi (China)"], ["ysp", "Southern Lolopo"], ["ysr", "Sirenik Yupik"], ["yss", "Yessan-Mayo"], ["ysy", "Sanie"], ["yta", "Talu"], ["ytl", "Tanglang"], ["ytp", "Thopho"], ["ytw", "Yout Wam"], ["yty", "Yatay"], ["yua", "Yucateco, Yucatec Maya"], ["yub", "Yugambal"], ["yuc", "Yuchi"], ["yud", "Judeo-Tripolitanian Arabic"], ["yue", "Yue Chinese, Cantonese"], ["yuf", "Havasupai-Walapai-Yavapai"], ["yug", "Yug"], ["yui", "Yurut\xED"], ["yuj", "Karkar-Yuri"], ["yuk", "Yuki"], ["yul", "Yulu"], ["yum", "Quechan"], ["yun", "Bena (Nigeria)"], ["yup", "Yukpa"], ["yuq", "Yuqui"], ["yur", "Yurok"], ["yut", "Yopno"], ["yuu", "Yugh"], ["yuw", "Yau (Morobe Province)"], ["yux", "Southern Yukaghir"], ["yuy", "East Yugur"], ["yuz", "Yuracare"], ["yva", "Yawa"], ["yvt", "Yavitero"], ["ywa", "Kalou"], ["ywg", "Yinhawangka"], ["ywl", "Western Lalu"], ["ywn", "Yawanawa"], ["ywq", "Wuding-Luquan Yi"], ["ywr", "Yawuru"], ["ywt", "Xishanba Lalo, Central Lalo"], ["ywu", "Wumeng Nasu"], ["yww", "Yawarawarga"], ["yxa", "Mayawali"], ["yxg", "Yagara"], ["yxl", "Yardliyawarra"], ["yxm", "Yinwum"], ["yxu", "Yuyu"], ["yxy", "Yabula Yabula"], ["yyr", "Yir Yoront"], ["yyu", "Yau (Sandaun Province)"], ["yyz", "Ayizi"], ["yzg", "E'ma Buyang"], ["yzk", "Zokhuo"], ["zaa", "Sierra de Ju\xE1rez Zapotec"], ["zab", "Western Tlacolula Valley Zapotec, San Juan Guelav\xEDa Zapotec"], ["zac", "Ocotl\xE1n Zapotec"], ["zad", "Cajonos Zapotec"], ["zae", "Yareni Zapotec"], ["zaf", "Ayoquesco Zapotec"], ["zag", "Zaghawa"], ["zah", "Zangwal"], ["zai", "Isthmus Zapotec"], ["zaj", "Zaramo"], ["zak", "Zanaki"], ["zal", "Zauzou"], ["zam", "Miahuatl\xE1n Zapotec"], ["zao", "Ozolotepec Zapotec"], ["zap", "Zapotec"], ["zaq", "Alo\xE1pam Zapotec"], ["zar", "Rinc\xF3n Zapotec"], ["zas", "Santo Domingo Albarradas Zapotec"], ["zat", "Tabaa Zapotec"], ["zau", "Zangskari"], ["zav", "Yatzachi Zapotec"], ["zaw", "Mitla Zapotec"], ["zax", "Xadani Zapotec"], ["zay", "Zayse-Zergulla, Zaysete"], ["zaz", "Zari"], ["zba", "Balaibalan"], ["zbc", "Central Berawan"], ["zbe", "East Berawan"], ["zbl", "Blissymbols, Bliss, Blissymbolics"], ["zbt", "Batui"], ["zbu", "Bu (Bauchi State)"], ["zbw", "West Berawan"], ["zca", "Coatecas Altas Zapotec"], ["zch", "Central Hongshuihe Zhuang"], ["zdj", "Ngazidja Comorian"], ["zea", "Zeeuws"], ["zeg", "Zenag"], ["zeh", "Eastern Hongshuihe Zhuang"], ["zen", "Zenaga"], ["zga", "Kinga"], ["zgb", "Guibei Zhuang"], ["zgh", "Standard Moroccan Tamazight"], ["zgm", "Minz Zhuang"], ["zgn", "Guibian Zhuang"], ["zgr", "Magori"], ["zhb", "Zhaba"], ["zhd", "Dai Zhuang"], ["zhi", "Zhire"], ["zhn", "Nong Zhuang"], ["zhw", "Zhoa"], ["zhx", "Chinese (family)"], ["zia", "Zia"], ["zib", "Zimbabwe Sign Language"], ["zik", "Zimakani"], ["zil", "Zialo"], ["zim", "Mesme"], ["zin", "Zinza"], ["zir", "Ziriya"], ["ziw", "Zigula"], ["ziz", "Zizilivakan"], ["zka", "Kaimbulawa"], ["zkb", "Koibal"], ["zkd", "Kadu"], ["zkg", "Koguryo"], ["zkh", "Khorezmian"], ["zkk", "Karankawa"], ["zkn", "Kanan"], ["zko", "Kott"], ["zkp", "S\xE3o Paulo Kaing\xE1ng"], ["zkr", "Zakhring"], ["zkt", "Kitan"], ["zku", "Kaurna"], ["zkv", "Krevinian"], ["zkz", "Khazar"], ["zla", "Zula"], ["zle", "East Slavic languages"], ["zlj", "Liujiang Zhuang"], ["zlm", "Malay (individual language)"], ["zln", "Lianshan Zhuang"], ["zlq", "Liuqian Zhuang"], ["zls", "South Slavic languages"], ["zlw", "West Slavic languages"], ["zma", "Manda (Australia)"], ["zmb", "Zimba"], ["zmc", "Margany"], ["zmd", "Maridan"], ["zme", "Mangerr"], ["zmf", "Mfinu"], ["zmg", "Marti Ke"], ["zmh", "Makolkol"], ["zmi", "Negeri Sembilan Malay"], ["zmj", "Maridjabin"], ["zmk", "Mandandanyi"], ["zml", "Matngala"], ["zmm", "Marimanindji, Marramaninyshi"], ["zmn", "Mbangwe"], ["zmo", "Molo"], ["zmp", "Mpuono"], ["zmq", "Mituku"], ["zmr", "Maranunggu"], ["zms", "Mbesa"], ["zmt", "Maringarr"], ["zmu", "Muruwari"], ["zmv", "Mbariman-Gudhinma"], ["zmw", "Mbo (Democratic Republic of Congo)"], ["zmx", "Bomitaba"], ["zmy", "Mariyedi"], ["zmz", "Mbandja"], ["zna", "Zan Gula"], ["znd", "Zande languages"], ["zne", "Zande (individual language)"], ["zng", "Mang"], ["znk", "Manangkari"], ["zns", "Mangas"], ["zoc", "Copainal\xE1 Zoque"], ["zoh", "Chimalapa Zoque"], ["zom", "Zou"], ["zoo", "Asunci\xF3n Mixtepec Zapotec"], ["zoq", "Tabasco Zoque"], ["zor", "Ray\xF3n Zoque"], ["zos", "Francisco Le\xF3n Zoque"], ["zpa", "Lachiguiri Zapotec"], ["zpb", "Yautepec Zapotec"], ["zpc", "Choapan Zapotec"], ["zpd", "Southeastern Ixtl\xE1n Zapotec"], ["zpe", "Petapa Zapotec"], ["zpf", "San Pedro Quiatoni Zapotec"], ["zpg", "Guevea De Humboldt Zapotec"], ["zph", "Totomachapan Zapotec"], ["zpi", "Santa Mar\xEDa Quiegolani Zapotec"], ["zpj", "Quiavicuzas Zapotec"], ["zpk", "Tlacolulita Zapotec"], ["zpl", "Lachix\xEDo Zapotec"], ["zpm", "Mixtepec Zapotec"], ["zpn", "Santa In\xE9s Yatzechi Zapotec"], ["zpo", "Amatl\xE1n Zapotec"], ["zpp", "El Alto Zapotec"], ["zpq", "Zoogocho Zapotec"], ["zpr", "Santiago Xanica Zapotec"], ["zps", "Coatl\xE1n Zapotec"], ["zpt", "San Vicente Coatl\xE1n Zapotec"], ["zpu", "Yal\xE1lag Zapotec"], ["zpv", "Chichicapan Zapotec"], ["zpw", "Zaniza Zapotec"], ["zpx", "San Baltazar Loxicha Zapotec"], ["zpy", "Mazaltepec Zapotec"], ["zpz", "Texmelucan Zapotec"], ["zqe", "Qiubei Zhuang"], ["zra", "Kara (Korea)"], ["zrg", "Mirgan"], ["zrn", "Zerenkel"], ["zro", "Z\xE1paro"], ["zrp", "Zarphatic"], ["zrs", "Mairasi"], ["zsa", "Sarasira"], ["zsk", "Kaskean"], ["zsl", "Zambian Sign Language"], ["zsm", "Standard Malay"], ["zsr", "Southern Rincon Zapotec"], ["zsu", "Sukurum"], ["zte", "Elotepec Zapotec"], ["ztg", "Xanagu\xEDa Zapotec"], ["ztl", "Lapagu\xEDa-Guivini Zapotec"], ["ztm", "San Agust\xEDn Mixtepec Zapotec"], ["ztn", "Santa Catarina Albarradas Zapotec"], ["ztp", "Loxicha Zapotec"], ["ztq", "Quioquitani-Quier\xED Zapotec"], ["zts", "Tilquiapan Zapotec"], ["ztt", "Tejalapan Zapotec"], ["ztu", "G\xFCil\xE1 Zapotec"], ["ztx", "Zaachila Zapotec"], ["zty", "Yatee Zapotec"], ["zua", "Zeem"], ["zuh", "Tokano"], ["zum", "Kumzari"], ["zun", "Zuni"], ["zuy", "Zumaya"], ["zwa", "Zay"], ["zxx", "No linguistic content, Not applicable"], ["zyb", "Yongbei Zhuang"], ["zyg", "Yang Zhuang"], ["zyj", "Youjiang Zhuang"], ["zyn", "Yongnan Zhuang"], ["zyp", "Zyphe Chin"], ["zza", "Zaza, Dimili, Dimli (macrolanguage), Kirdki, Kirmanjki (macrolanguage), Zazaki"], ["zzj", "Zuojiang Zhuang"]];

// node_modules/async-tag/esm/index.js
var { isArray } = Array;
var sync = (values, i) => {
  const resolved = [];
  for (const { length } = values; i < length; i++)
    resolved.push(isArray(values[i]) ? sync(values[i], 0) : values[i]);
  return Promise.all(resolved);
};
var esm_default = (tag3) => {
  function invoke(template, values) {
    return tag3.apply(this, [template].concat(values));
  }
  return function(template) {
    return sync(arguments, 1).then(invoke.bind(this, template));
  };
};

// node_modules/umap/esm/index.js
var esm_default2 = (_) => ({
  get: (key) => _.get(key),
  set: (key, value) => (_.set(key, value), value)
});

// node_modules/uparser/esm/index.js
var attr = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/;
var empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
var node = /<[a-z][^>]+$/i;
var notNode = />[^<>]*$/;
var selfClosing = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig;
var trimEnd = /\s+$/;
var isNode = (template, i) => 0 < i-- && (node.test(template[i]) || !notNode.test(template[i]) && isNode(template, i));
var regular = (original, name, extra) => empty.test(name) ? original : `<${name}${extra.replace(trimEnd, "")}></${name}>`;
var esm_default3 = (template, prefix2, svg3) => {
  const text2 = [];
  const { length } = template;
  for (let i = 1; i < length; i++) {
    const chunk = template[i - 1];
    text2.push(attr.test(chunk) && isNode(template, i) ? chunk.replace(attr, (_, $1, $2) => `${prefix2}${i - 1}=${$2 || '"'}${$1}${$2 ? "" : '"'}`) : `${chunk}<!--${prefix2}${i - 1}-->`);
  }
  text2.push(template[length - 1]);
  const output = text2.join("").trim();
  return svg3 ? output : output.replace(selfClosing, regular);
};

// node_modules/uarray/esm/index.js
var { isArray: isArray2 } = Array;
var { indexOf, slice } = [];

// node_modules/uwire/esm/index.js
var ELEMENT_NODE = 1;
var nodeType = 111;
var remove = ({ firstChild, lastChild }) => {
  const range = document.createRange();
  range.setStartAfter(firstChild);
  range.setEndAfter(lastChild);
  range.deleteContents();
  return firstChild;
};
var diffable = (node2, operation) => node2.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node2) : node2.lastChild : operation ? node2.valueOf() : node2.firstChild : node2;
var persistent = (fragment) => {
  const { childNodes } = fragment;
  const { length } = childNodes;
  if (length < 2)
    return length ? childNodes[0] : fragment;
  const nodes = slice.call(childNodes, 0);
  const firstChild = nodes[0];
  const lastChild = nodes[length - 1];
  return {
    ELEMENT_NODE,
    nodeType,
    firstChild,
    lastChild,
    valueOf() {
      if (childNodes.length !== length) {
        let i = 0;
        while (i < length)
          fragment.appendChild(nodes[i++]);
      }
      return fragment;
    }
  };
};

// node_modules/udomdiff/esm/index.js
var esm_default4 = (parentNode, a, b, get, before) => {
  const bLength = b.length;
  let aEnd = a.length;
  let bEnd = bLength;
  let aStart = 0;
  let bStart = 0;
  let map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (aEnd === aStart) {
      const node2 = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
      while (bStart < bEnd)
        parentNode.insertBefore(get(b[bStart++], 1), node2);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart]))
          parentNode.removeChild(get(a[aStart], -1));
        aStart++;
      }
    } else if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
    } else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node2 = get(a[--aEnd], -1).nextSibling;
      parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
      parentNode.insertBefore(get(b[--bEnd], 1), node2);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd)
          map.set(b[i], i++);
      }
      if (map.has(a[aStart])) {
        const index = map.get(a[aStart]);
        if (bStart < index && index < bEnd) {
          let i = aStart;
          let sequence = 1;
          while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)
            sequence++;
          if (sequence > index - bStart) {
            const node2 = get(a[aStart], 0);
            while (bStart < index)
              parentNode.insertBefore(get(b[bStart++], 1), node2);
          } else {
            parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
          }
        } else
          aStart++;
      } else
        parentNode.removeChild(get(a[aStart++], -1));
    }
  }
  return b;
};

// node_modules/uhandlers/esm/index.js
var useForeign = false;
var Foreign = class {
  constructor(handler, value) {
    useForeign = true;
    this._ = (...args) => handler(...args, value);
  }
};
var aria = (node2) => (values) => {
  for (const key in values) {
    const name = key === "role" ? key : `aria-${key}`;
    const value = values[key];
    if (value == null)
      node2.removeAttribute(name);
    else
      node2.setAttribute(name, value);
  }
};
var attribute = (node2, name) => {
  let oldValue, orphan = true;
  const attributeNode = document.createAttributeNS(null, name);
  return (newValue) => {
    if (oldValue !== newValue) {
      oldValue = newValue;
      if (oldValue == null) {
        if (!orphan) {
          node2.removeAttributeNode(attributeNode);
          orphan = true;
        }
      } else {
        const value = useForeign && newValue instanceof Foreign ? newValue._(node2, name) : newValue;
        if (value == null) {
          if (!orphan)
            node2.removeAttributeNode(attributeNode);
          orphan = true;
        } else {
          attributeNode.value = value;
          if (orphan) {
            node2.setAttributeNodeNS(attributeNode);
            orphan = false;
          }
        }
      }
    }
  };
};
var boolean = (node2, key, oldValue) => (newValue) => {
  if (oldValue !== !!newValue) {
    if (oldValue = !!newValue)
      node2.setAttribute(key, "");
    else
      node2.removeAttribute(key);
  }
};
var data = ({ dataset }) => (values) => {
  for (const key in values) {
    const value = values[key];
    if (value == null)
      delete dataset[key];
    else
      dataset[key] = value;
  }
};
var event = (node2, name) => {
  let oldValue, lower, type = name.slice(2);
  if (!(name in node2) && (lower = name.toLowerCase()) in node2)
    type = lower.slice(2);
  return (newValue) => {
    const info = isArray2(newValue) ? newValue : [newValue, false];
    if (oldValue !== info[0]) {
      if (oldValue)
        node2.removeEventListener(type, oldValue, info[1]);
      if (oldValue = info[0])
        node2.addEventListener(type, oldValue, info[1]);
    }
  };
};
var ref = (node2) => {
  let oldValue;
  return (value) => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === "function")
        value(node2);
      else
        value.current = node2;
    }
  };
};
var setter = (node2, key) => key === "dataset" ? data(node2) : (value) => {
  node2[key] = value;
};
var text = (node2) => {
  let oldValue;
  return (newValue) => {
    if (oldValue != newValue) {
      oldValue = newValue;
      node2.textContent = newValue == null ? "" : newValue;
    }
  };
};

// node_modules/uhtml/esm/handlers.js
var reducePath = ({ childNodes }, i) => childNodes[i];
var diff = (comment, oldNodes, newNodes) => esm_default4(comment.parentNode, oldNodes, newNodes, diffable, comment);
var handleAnything = (comment) => {
  let oldValue, text2, nodes = [];
  const anyContent = (newValue) => {
    switch (typeof newValue) {
      case "string":
      case "number":
      case "boolean":
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (!text2)
            text2 = document.createTextNode("");
          text2.data = newValue;
          nodes = diff(comment, nodes, [text2]);
        }
        break;
      case "object":
      case "undefined":
        if (newValue == null) {
          if (oldValue != newValue) {
            oldValue = newValue;
            nodes = diff(comment, nodes, []);
          }
          break;
        }
        if (isArray2(newValue)) {
          oldValue = newValue;
          if (newValue.length === 0)
            nodes = diff(comment, nodes, []);
          else if (typeof newValue[0] === "object")
            nodes = diff(comment, nodes, newValue);
          else
            anyContent(String(newValue));
          break;
        }
        if (oldValue !== newValue && "ELEMENT_NODE" in newValue) {
          oldValue = newValue;
          nodes = diff(comment, nodes, newValue.nodeType === 11 ? slice.call(newValue.childNodes) : [newValue]);
        }
        break;
      case "function":
        anyContent(newValue(comment));
        break;
    }
  };
  return anyContent;
};
var handleAttribute = (node2, name) => {
  switch (name[0]) {
    case "?":
      return boolean(node2, name.slice(1), false);
    case ".":
      return setter(node2, name.slice(1));
    case "@":
      return event(node2, "on" + name.slice(1));
    case "o":
      if (name[1] === "n")
        return event(node2, name);
  }
  switch (name) {
    case "ref":
      return ref(node2);
    case "aria":
      return aria(node2);
  }
  return attribute(node2, name);
};
function handlers(options) {
  const { type, path } = options;
  const node2 = path.reduceRight(reducePath, this);
  return type === "node" ? handleAnything(node2) : type === "attr" ? handleAttribute(node2, options.name) : text(node2);
}

// node_modules/@ungap/create-content/esm/index.js
var createContent = function(document2) {
  "use strict";
  var FRAGMENT = "fragment";
  var TEMPLATE = "template";
  var HAS_CONTENT = "content" in create2(TEMPLATE);
  var createHTML = HAS_CONTENT ? function(html3) {
    var template = create2(TEMPLATE);
    template.innerHTML = html3;
    return template.content;
  } : function(html3) {
    var content = create2(FRAGMENT);
    var template = create2(TEMPLATE);
    var childNodes = null;
    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html3)) {
      var selector = RegExp.$1;
      template.innerHTML = "<table>" + html3 + "</table>";
      childNodes = template.querySelectorAll(selector);
    } else {
      template.innerHTML = html3;
      childNodes = template.childNodes;
    }
    append(content, childNodes);
    return content;
  };
  return function createContent2(markup, type) {
    return (type === "svg" ? createSVG : createHTML)(markup);
  };
  function append(root, childNodes) {
    var length = childNodes.length;
    while (length--)
      root.appendChild(childNodes[0]);
  }
  function create2(element) {
    return element === FRAGMENT ? document2.createDocumentFragment() : document2.createElementNS("http://www.w3.org/1999/xhtml", element);
  }
  function createSVG(svg3) {
    var content = create2(FRAGMENT);
    var template = create2("div");
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg3 + "</svg>";
    append(content, template.firstChild.childNodes);
    return content;
  }
}(document);
var esm_default5 = createContent;

// node_modules/uhtml/esm/node.js
var isImportNodeLengthWrong = document.importNode.length != 1;
var createFragment = isImportNodeLengthWrong ? (text2, type, normalize) => document.importNode(esm_default5(text2, type, normalize), true) : esm_default5;
var createWalker = isImportNodeLengthWrong ? (fragment) => document.createTreeWalker(fragment, 1 | 128, null, false) : (fragment) => document.createTreeWalker(fragment, 1 | 128);

// node_modules/uhtml/esm/rabbit.js
var createPath = (node2) => {
  const path = [];
  let { parentNode } = node2;
  while (parentNode) {
    path.push(indexOf.call(parentNode.childNodes, node2));
    node2 = parentNode;
    parentNode = node2.parentNode;
  }
  return path;
};
var prefix = "is\xB5";
var cache = esm_default2(new WeakMap());
var textOnly = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var createCache = () => ({
  stack: [],
  entry: null,
  wire: null
});
var createEntry = (type, template) => {
  const { content, updates } = mapUpdates(type, template);
  return { type, template, content, updates, wire: null };
};
var mapTemplate = (type, template) => {
  const text2 = esm_default3(template, prefix, type === "svg");
  const content = createFragment(text2, type);
  const tw = createWalker(content);
  const nodes = [];
  const length = template.length - 1;
  let i = 0;
  let search = `${prefix}${i}`;
  while (i < length) {
    const node2 = tw.nextNode();
    if (!node2)
      throw `bad template: ${text2}`;
    if (node2.nodeType === 8) {
      if (node2.data === search) {
        nodes.push({ type: "node", path: createPath(node2) });
        search = `${prefix}${++i}`;
      }
    } else {
      while (node2.hasAttribute(search)) {
        nodes.push({
          type: "attr",
          path: createPath(node2),
          name: node2.getAttribute(search)
        });
        node2.removeAttribute(search);
        search = `${prefix}${++i}`;
      }
      if (textOnly.test(node2.tagName) && node2.textContent.trim() === `<!--${search}-->`) {
        node2.textContent = "";
        nodes.push({ type: "text", path: createPath(node2) });
        search = `${prefix}${++i}`;
      }
    }
  }
  return { content, nodes };
};
var mapUpdates = (type, template) => {
  const { content, nodes } = cache.get(template) || cache.set(template, mapTemplate(type, template));
  const fragment = document.importNode(content, true);
  const updates = nodes.map(handlers, fragment);
  return { content: fragment, updates };
};
var unroll = (info, { type, template, values }) => {
  const { length } = values;
  unrollValues(info, values, length);
  let { entry } = info;
  if (!entry || (entry.template !== template || entry.type !== type))
    info.entry = entry = createEntry(type, template);
  const { content, updates, wire } = entry;
  for (let i = 0; i < length; i++)
    updates[i](values[i]);
  return wire || (entry.wire = persistent(content));
};
var unrollValues = ({ stack }, values, length) => {
  for (let i = 0; i < length; i++) {
    const hole = values[i];
    if (hole instanceof Hole)
      values[i] = unroll(stack[i] || (stack[i] = createCache()), hole);
    else if (isArray2(hole))
      unrollValues(stack[i] || (stack[i] = createCache()), hole, hole.length);
    else
      stack[i] = null;
  }
  if (length < stack.length)
    stack.splice(length);
};
function Hole(type, template, values) {
  this.type = type;
  this.template = template;
  this.values = values;
}

// node_modules/uhtml/esm/index.js
var { create, defineProperties } = Object;
var tag = (type) => {
  const keyed = esm_default2(new WeakMap());
  const fixed = (cache3) => (template, ...values) => unroll(cache3, { type, template, values });
  return defineProperties((template, ...values) => new Hole(type, template, values), {
    for: {
      value(ref2, id) {
        const memo = keyed.get(ref2) || keyed.set(ref2, create(null));
        return memo[id] || (memo[id] = fixed(createCache()));
      }
    },
    node: {
      value: (template, ...values) => unroll(createCache(), { type, template, values }).valueOf()
    }
  });
};
var cache2 = esm_default2(new WeakMap());
var render = (where, what) => {
  const hole = typeof what === "function" ? what() : what;
  const info = cache2.get(where) || cache2.set(where, createCache());
  const wire = hole instanceof Hole ? unroll(info, hole) : hole;
  if (wire !== info.wire) {
    info.wire = wire;
    where.textContent = "";
    where.appendChild(wire.valueOf());
  }
  return where;
};
var html = tag("html");
var svg = tag("svg");

// node_modules/uhtml/esm/async.js
var { defineProperties: defineProperties2 } = Object;
var tag2 = (original) => {
  const wrap = esm_default2(new WeakMap());
  return defineProperties2(esm_default(original), {
    for: {
      value(ref2, id) {
        const tag3 = original.for(ref2, id);
        return wrap.get(tag3) || wrap.set(tag3, esm_default(tag3));
      }
    },
    node: {
      value: esm_default(original.node)
    }
  });
};
var html2 = tag2(html);
var svg2 = tag2(svg);
var render2 = (where, what) => {
  const hole = typeof what === "function" ? what() : what;
  return Promise.resolve(hole).then((what2) => render(where, what2));
};

// src/js/core/i18n.ts
var TranslatedText = class extends Hole {
  constructor(type, template = [], values = []) {
    super(type, template, values);
    const text2 = type;
    const context = template;
    this.text = text2;
    this.template = [text2];
    this.values = [];
    this.context = context;
    this.type = "html";
  }
  toString() {
    return this.text;
  }
};
function mixString(a, b, asCodeString = false) {
  let total = Math.max(a.length, b.length);
  let string = "";
  for (let part = 0; part < total; part++) {
    let valueString = "";
    if (typeof b[part] === "object") {
      let keys = Object.keys(b[part]);
      valueString = asCodeString ? "{" + keys[0] + "}" : b[part][keys[0]];
    } else if (typeof b[part] === "string") {
      valueString = b[part];
    }
    string += a[part] + valueString;
  }
  return string;
}
function I18n(language, prefix2 = "", possibleLanguageCodes, skipImportLanguage = "en") {
  return __async(this, null, function* () {
    let translations = {};
    translations[language] = {};
    if (possibleLanguageCodes.includes(language) && language !== skipImportLanguage) {
      try {
        const filePath = `/js/Translations/${(prefix2 ? prefix2 + "." : "") + language}.js`;
        translations[language] = (yield import(filePath)).Translations;
      } catch (exception) {
        console.info(exception);
      }
    }
    function Translate(context, ...values) {
      if (typeof context === "string") {
        return (strings, ...values2) => {
          let translatedText = Translate(strings, ...values2);
          translatedText.context = context;
          return translatedText;
        };
      } else {
        let stringsToTranslate = context;
        let codeString = mixString(stringsToTranslate, values, true);
        if (typeof translations[language][codeString] === "undefined") {
          return new TranslatedText(mixString(stringsToTranslate, values));
        } else {
          let translatedString = translations[language][codeString];
          let tokens = Object.assign({}, ...values);
          let replacements = translatedString.match(/{[a-zA-Z]*}/g);
          if (replacements) {
            replacements.forEach((replacement) => {
              let variableName = replacement.substr(1).substr(0, replacement.length - 2);
              translatedString = translatedString.replace(replacement, tokens[variableName]);
            });
          }
          return new TranslatedText(translatedString);
        }
      }
    }
    Translate.constructor.prototype.direct = (variable) => {
      if (typeof translations[language][variable] === "undefined") {
        return new TranslatedText(variable);
      } else {
        return new TranslatedText(translations[language][variable]);
      }
    };
    return Translate;
  });
}

// src/js/core/Language.ts
var getLanguageLabel = (langCode) => __async(void 0, null, function* () {
  var _a;
  const [realLangCode, script] = langCode.split("-");
  const scriptMapping = {
    "latn": t.direct("Latin").toString(),
    "cyrl": t.direct("Cyrillic").toString()
  };
  const language = languages.find((language2) => language2[0] === realLangCode);
  return (language == null ? void 0 : language[1]) ? `${language[1]}${script ? ` (${(_a = scriptMapping == null ? void 0 : scriptMapping[script.toLowerCase()]) != null ? _a : script})` : ""}` : langCode;
});
var filterLanguages = (search) => __async(void 0, null, function* () {
  if (!search)
    return [];
  return languages.filter((language) => language[1].toLowerCase().includes(search.toLowerCase()));
});
var langCodesToObject = (langCodes) => __async(void 0, null, function* () {
  const languages2 = {};
  for (const langCode of langCodes) {
    languages2[langCode] = yield getLanguageLabel(langCode);
  }
  return languages2;
});
var currentUiLanguage = "en";
var currentL10nLanguage;
var uiLanguages = { "en": "English" };
var l10nLanguages = { "en": "English" };
var requiredL10nLanguages = [];
var LanguageService = class extends EventTarget {
  constructor() {
    super();
    this.ready = false;
  }
  init(rdfForm) {
    return __async(this, null, function* () {
      yield this.setUiLanguage("en");
      const continueInit = () => __async(this, null, function* () {
        var _a, _b, _c;
        const usedLanguages = yield this.extractUsedLanguages(rdfForm.formData.proxy);
        const defaultLanguages = (_a = JSON.parse(rdfForm.getAttribute("languages"))) != null ? _a : usedLanguages.length ? yield langCodesToObject(usedLanguages) : {};
        const parsedLanguages = JSON.parse(rdfForm.getAttribute("l10n-languages"));
        this.l10nLanguages = Object.assign({}, parsedLanguages, defaultLanguages);
        if (rdfForm.getAttribute("required-l10n-languages")) {
          requiredL10nLanguages = rdfForm.getAttribute("required-l10n-languages").split(",");
        }
        if (rdfForm.getAttribute("selected-l10n-language") && rdfForm.getAttribute("selected-l10n-language").toLowerCase() in this.l10nLanguages) {
          this.l10nLanguage = rdfForm.getAttribute("selected-l10n-language").toLowerCase();
        }
        this.uiLanguages = (_b = JSON.parse(rdfForm.getAttribute("ui-languages"))) != null ? _b : {};
        yield this.setUiLanguage((_c = rdfForm.getAttribute("selected-language")) != null ? _c : "en");
        this.ready = true;
        this.dispatchEvent(new CustomEvent("ready"));
      });
      rdfForm.formData.ready ? continueInit() : rdfForm.formData.addEventListener("ready", continueInit, { once: true });
    });
  }
  get requiredL10nLanguages() {
    return requiredL10nLanguages;
  }
  get uiLanguage() {
    return currentUiLanguage;
  }
  setUiLanguage(languageCode) {
    return __async(this, null, function* () {
      currentUiLanguage = languageCode;
      t = yield I18n(languageCode, "RdfForm", Object.keys(this.uiLanguages), "en");
      this.dispatchEvent(new CustomEvent("language-change"));
    });
  }
  set l10nLanguage(langCode) {
    currentL10nLanguage = langCode;
    this.dispatchEvent(new CustomEvent("l10n-change", {
      detail: langCode
    }));
  }
  get l10nLanguage() {
    return currentL10nLanguage;
  }
  set l10nLanguages(languages2) {
    const oldLanguageCodes = Object.keys(l10nLanguages);
    const newLanguageCodes = Object.keys(languages2);
    let languageCodesToAdd = newLanguageCodes.filter((x) => !oldLanguageCodes.includes(x));
    let languageCodesToDelete = oldLanguageCodes.filter((x) => !newLanguageCodes.includes(x));
    if (languageCodesToDelete.includes(currentL10nLanguage)) {
      currentL10nLanguage = newLanguageCodes[0];
    }
    for (const langCode of languageCodesToAdd) {
      this.dispatchEvent(new CustomEvent("this.added", {
        detail: langCode
      }));
    }
    for (const langCode of languageCodesToDelete) {
      this.dispatchEvent(new CustomEvent("this.removed", {
        detail: langCode
      }));
    }
    l10nLanguages = languages2;
    if (!currentL10nLanguage) {
      currentL10nLanguage = Object.keys(l10nLanguages)[0];
    }
  }
  get l10nLanguages() {
    return l10nLanguages;
  }
  set uiLanguages(languages2) {
    uiLanguages = languages2;
  }
  get uiLanguages() {
    return uiLanguages;
  }
  multilingualValue(values, type = "ui") {
    var _a, _b, _c;
    if (!Array.isArray(values))
      values = [values];
    const currentLanguageMatch = values.find((value) => value["@language"] === (type === "ui" ? this.uiLanguage : this.l10nLanguage));
    const fallbackNoLanguageMatch = values.find((value) => !value["@language"]);
    return (_c = (_b = (_a = currentLanguageMatch == null ? void 0 : currentLanguageMatch["@value"]) != null ? _a : fallbackNoLanguageMatch == null ? void 0 : fallbackNoLanguageMatch["@value"]) != null ? _b : currentLanguageMatch == null ? void 0 : currentLanguageMatch["@id"]) != null ? _c : fallbackNoLanguageMatch == null ? void 0 : fallbackNoLanguageMatch["@id"];
  }
  extractUsedLanguages(jsonLd) {
    const languageCodes = new Set();
    const process = (thing) => {
      if (!thing)
        return;
      const iterateble = Array.isArray(thing) ? thing.entries() : Object.entries(thing);
      for (const [key, value] of iterateble) {
        if (key === "@language")
          languageCodes.add(value);
        if (typeof value !== "string")
          process(value);
      }
    };
    process(jsonLd);
    return [...languageCodes.values()];
  }
};
var Language = new LanguageService();
var t;

// src/js/helpers/icons.ts
var faPencilAlt = {
  prefix: "fas",
  iconName: "pencil-alt",
  icon: [512, 512, [], "f303", "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]
};
var faCheck = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
};
var faReply = {
  prefix: "fas",
  iconName: "reply",
  icon: [512, 512, [], "f3e5", "M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"]
};
var faTimes = {
  prefix: "fas",
  iconName: "times",
  icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
};
var faPlus = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
};
var faLanguage = {
  prefix: "fas",
  iconName: "language",
  icon: [640, 512, [], "f1ab", "M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"]
};
var faGlobe = {
  prefix: "fas",
  iconName: "globe",
  icon: [496, 512, [], "f0ac", "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"]
};

// src/js/helpers/kebabize.ts
var kebabize = (str) => {
  if (str.split("").every((letter) => letter.toUpperCase() === letter))
    return str.toLowerCase();
  return str.split("").map((letter, index) => {
    return letter.toUpperCase() === letter ? `${index !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter;
  }).join("");
};

// src/js/helpers/attributesDiff.ts
var attributesDiff = (attributes, callback = null) => (node2) => {
  for (const key of Object.keys(attributes)) {
    if (attributes[key]) {
      const attributeValue = Array.isArray(attributes[key]) ? attributes[key].join(" ") : attributes[key];
      if (typeof attributeValue !== "string" || attributeValue.trim())
        node2.setAttribute(key, attributeValue);
    } else {
      node2.removeAttribute(key);
    }
    if (callback) {
      callback(node2);
      callback = null;
    }
  }
};

// src/js/helpers/lastPart.ts
var lastPart = (text2) => {
  return text2.split(/\:|\/|\,|\#/).pop();
};

// src/js/helpers/isFetchable.ts
var isFetchable = (string) => {
  return string.startsWith("http") || string.startsWith("blob") || string.substr(0, 1) === "/";
};

// src/js/vendor/fontawesome-svg-core.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var noop = function noop2() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined")
    _WINDOW = window;
  if (typeof document !== "undefined")
    _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined")
    _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined")
    _PERFORMANCE = performance;
} catch (e) {
}
var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var DEFAULT_FAMILY_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var PRODUCTION = function() {
  try {
    return false;
  } catch (e) {
    return false;
  }
}();
var DUOTONE_CLASSES = {
  GROUP: "group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr2) {
  var element = DOCUMENT.querySelector("script[" + attr2 + "]");
  if (element) {
    return element.getAttribute(attr2);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  attrs = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr2 = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr2));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var attrs;
var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
var _config = _objectSpread({}, _default, initial);
if (!_config.autoReplaceSvg)
  _config.observeMutations = false;
var config = _objectSpread({}, _config);
WINDOW.FontAwesomeConfig = config;
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER])
  w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles)
  w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks)
  w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims)
  w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded)
    DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
var isNode2 = typeof global !== "undefined" && typeof global.process !== "undefined" && typeof global.process.emit === "function";
var asyncSetTimer = typeof setImmediate === "undefined" ? setTimeout : setImmediate;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName], ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref2) {
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
function makeIconMasking(_ref2) {
  var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
  var mainWidth = main.width, mainPath = main.icon;
  var maskWidth = mask.width, maskPath = mask.icon;
  var trans = transformForSvg({
    transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: "rect",
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: "white"
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: "g",
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: "g",
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: "mask",
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: "userSpaceOnUse",
      maskContentUnits: "userSpaceOnUse"
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: "defs",
    children: [{
      tag: "clipPath",
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: "rect",
    attributes: _objectSpread({
      fill: "currentColor",
      "clip-path": "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children,
    attributes
  };
}
function makeIconStandard(_ref2) {
  var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, transform = _ref2.transform, styles2 = _ref2.styles;
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: "g",
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: "g",
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }
  return {
    children,
    attributes
  };
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread({}, styles2, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix2 = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix2, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread({}, attributes, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix2 = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix2 === "fak";
  var widthClass = isUploadedIcon ? "" : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : "", widthClass].filter(function(c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function(c) {
    return c !== "" || !!c;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      "data-prefix": prefix2,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title)
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
  var args = _objectSpread({}, content, {
    prefix: prefix2,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });
  var _ref22 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args), children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
var noop$1 = function noop3() {
};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function defineIcons(prefix2, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function(acc, iconName) {
    var icon2 = icons[iconName];
    var expanded = !!icon2.icon;
    if (expanded) {
      acc[icon2.iconName] = icon2.icon;
    } else {
      acc[iconName] = icon2;
    }
    return acc;
  }, {});
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix2, normalized);
  } else {
    namespace.styles[prefix2] = _objectSpread({}, namespace.styles[prefix2] || {}, normalized);
  }
  if (prefix2 === "fas") {
    defineIcons("fa", icons);
  }
}
var styles = namespace.styles;
var shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles, function(o, style, prefix2) {
      o[prefix2] = reduce(style, reducer, {});
      return o;
    }, {});
  };
  _byUnicode = lookup(function(acc, icon2, iconName) {
    if (icon2[3]) {
      acc[icon2[3]] = iconName;
    }
    return acc;
  });
  _byLigature = lookup(function(acc, icon2, iconName) {
    var ligatures = icon2[2];
    acc[iconName] = iconName;
    ligatures.forEach(function(ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles;
  _byOldName = reduce(shims, function(acc, shim) {
    var oldName = shim[0];
    var prefix2 = shim[1];
    var iconName = shim[2];
    if (prefix2 === "far" && !hasRegular) {
      prefix2 = "fas";
    }
    acc[oldName] = {
      prefix: prefix2,
      iconName
    };
    return acc;
  }, {});
};
build();
var styles$1 = namespace.styles;
function iconFromMapping(mapping, prefix2, iconName) {
  if (mapping && mapping[prefix2] && mapping[prefix2][iconName]) {
    return {
      prefix: prefix2,
      iconName,
      icon: mapping[prefix2][iconName]
    };
  }
}
function toHtml(abstractNodes) {
  var tag3 = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag3, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag3, ">");
  }
}
function MissingIcon(error) {
  this.name = "MissingIcon";
  this.message = error || "Icon unavailable";
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;
var FILL = {
  fill: "currentColor"
};
var ANIMATION_BASE = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
var RING = {
  tag: "path",
  attributes: _objectSpread({}, FILL, {
    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
  })
};
var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: "opacity"
});
var DOT = {
  tag: "circle",
  attributes: _objectSpread({}, FILL, {
    cx: "256",
    cy: "364",
    r: "28"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: "r",
      values: "28;14;28;28;14;28;"
    })
  }, {
    tag: "animate",
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: "1;0;1;1;0;1;"
    })
  }]
};
var QUESTION = {
  tag: "path",
  attributes: _objectSpread({}, FILL, {
    opacity: "1",
    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: "1;0;0;0;0;1;"
    })
  }]
};
var EXCLAMATION = {
  tag: "path",
  attributes: _objectSpread({}, FILL, {
    opacity: "0",
    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: "0;0;1;1;0;0;"
    })
  }]
};
var styles$2 = namespace.styles;
function asFoundIcon(icon2) {
  var width = icon2[0];
  var height = icon2[1];
  var _icon$slice = icon2.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var styles$3 = namespace.styles;
var baseStyles = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var Library = /* @__PURE__ */ function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix2 = _normalized$key.prefix, iconName = _normalized$key.iconName, icon2 = _normalized$key.icon;
        if (!additions[prefix2])
          additions[prefix2] = {};
        additions[prefix2][iconName] = icon2;
      });
      return additions;
    }
  }]);
  return Library2;
}();
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
function apiObject(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix, prefix2 = _iconLookup$prefix === void 0 ? "fa" : _iconLookup$prefix, iconName = iconLookup.iconName;
  if (!iconName)
    return;
  return iconFromMapping(library.definitions, prefix2, iconName) || iconFromMapping(namespace.styles, prefix2, iconName);
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread({}, params, {
      mask
    }));
  };
}
var library = new Library();
var _cssInserted = false;
var icon = resolveIcons(function(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition)
    return;
  var prefix2 = iconDefinition.prefix, iconName = iconDefinition.iconName, icon2 = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: "icon"
  }, iconDefinition), function() {
    ensureCss();
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon2),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix2,
      iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
});

// src/js/helpers/fa.ts
var FaIcon = class extends Hole {
  constructor(icon2) {
    super("svg", [icon2], []);
  }
};
function fa(iconInput) {
  return new FaIcon(icon(iconInput).html[0]);
}

// src/js/helpers/debounce.ts
function debounce(func, wait, immediate = false) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}

// src/js/elements/ElementBase.ts
var ElementBase = class extends EventTarget {
  constructor(...args) {
    super();
    this.jsonldKey = "value";
    this.mainBinding = null;
    this.render = () => null;
    this.suggestions = [];
    this.index = null;
    this.children = [];
    this.attributes = {
      type: "input",
      class: [],
      disabled: null,
      readonly: null,
      placeholder: null,
      required: null,
      multiple: null,
      rows: null,
      open: null
    };
    this.wrapperAttributes = {
      open: false,
      class: ["form-element"]
    };
    this.labelAttributes = {
      class: ["label"]
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const [definition, bindings, value, itemValues, parentValues, render3, parent, index, children] = args;
    this.definition = definition;
    this.bindings = bindings;
    this.mainBinding = (_a = definition["form:binding"]) == null ? void 0 : _a._;
    this.parentValues = parentValues;
    this.itemValues = itemValues;
    this.value = value;
    this.render = render3;
    this.parent = parent;
    this.index = index;
    this.children = children;
    this.debouncedRender = debounce(this.render.bind(this), 300);
    if (this.definition["form:jsonLdKey"]) {
      this.jsonldKey = this.definition["form:jsonLdKey"]._;
    }
    if ((_b = this.definition["form:placeholder"]) == null ? void 0 : _b._)
      this.attributes.placeholder = (_c = this.definition["form:placeholder"]) == null ? void 0 : _c._;
    if (((_d = this.definition["form:required"]) == null ? void 0 : _d._) === true)
      this.attributes.required = true;
    if (((_e = this.definition["form:multiple"]) == null ? void 0 : _e._) === true)
      this.attributes.multiple = true;
    if (((_f = this.definition["form:readonly"]) == null ? void 0 : _f._) === true)
      this.attributes.readonly = true;
    if (((_g = this.definition["form:disabled"]) == null ? void 0 : _g._) === true)
      this.attributes.disabled = true;
    if (((_h = this.definition["form:open"]) == null ? void 0 : _h._) !== void 0)
      this.wrapperAttributes.open = this.definition["form:open"]._;
    if (((_i = this.definition["form:rows"]) == null ? void 0 : _i._) !== void 0)
      this.attributes.rows = parseInt(this.definition["form:rows"]._);
    if ((_j = this.definition["form:cssClass"]) == null ? void 0 : _j._)
      this.wrapperAttributes.class.push(this.definition["form:cssClass"]._);
    if (!((_k = this.definition["form:label"]) == null ? void 0 : _k._))
      this.wrapperAttributes.class.push("no-label");
  }
  get proxy() {
    var _a;
    return (_a = this.form) == null ? void 0 : _a.proxy;
  }
  get t() {
    return this.form.t;
  }
  get form() {
    let pointer = this;
    while (pointer.parent) {
      pointer = pointer.parent;
    }
    return pointer.registry ? pointer : null;
  }
  on(event2) {
    if (["keyup", "change"].includes(event2.type)) {
      if (!this.value)
        this.addItem();
      if (this.value)
        this.value[`@${this.jsonldKey}`] = event2.target.value;
    }
  }
  get removable() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (((_b = (_a = this.definition) == null ? void 0 : _a["form:removable"]) == null ? void 0 : _b._) === false)
      return false;
    const hasValue = (_c = this.value) == null ? void 0 : _c._;
    const parentIsGroup = this.parent instanceof ElementBase ? ((_f = (_e = (_d = this.parent) == null ? void 0 : _d.definition) == null ? void 0 : _e["form:widget"]) == null ? void 0 : _f._) === "group" : false;
    const isGroup = ((_h = (_g = this.definition) == null ? void 0 : _g["form:widget"]) == null ? void 0 : _h._) === "group";
    const isRequired = (_j = (_i = this.definition) == null ? void 0 : _i["form:required"]) == null ? void 0 : _j._;
    return !isRequired && hasValue && !parentIsGroup || isGroup;
  }
  get languages() {
    var _a;
    return Language.extractUsedLanguages((_a = this.parentValues) == null ? void 0 : _a[this.mainBinding]);
  }
  addItem() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (this.bindings.length > 1) {
      if (!this.parentValues[this.mainBinding])
        this.parentValues[this.mainBinding] = [];
      const emptyObject = {};
      for (const binding of this.bindings) {
        emptyObject[binding] = [];
      }
      emptyObject[this.mainBinding].push({});
      this.parentValues.push(emptyObject);
      this.itemValues = emptyObject;
      this.value = emptyObject[this.mainBinding][0];
    } else if (((_a = this.definition["form:widget"]) == null ? void 0 : _a._) === "group") {
      if (!this.parentValues[this.mainBinding]) {
        this.parentValues[this.mainBinding] = [{ "@list": [{}] }];
      }
      const firstItem = (_c = (_b = this.parentValues[this.mainBinding]) == null ? void 0 : _b[0]) == null ? void 0 : _c.$;
      const clone = JSON.parse(JSON.stringify(firstItem));
      for (const [field, values] of Object.entries(clone)) {
        if (values == null ? void 0 : values[0]["@id"])
          values[0]["@id"] = null;
        if (values == null ? void 0 : values[0]["@value"])
          values[0]["@value"] = "";
        if (values == null ? void 0 : values[0]["@language"])
          values[0]["@value"] = Language.l10nLanguage;
      }
      (_d = this.parentValues) == null ? void 0 : _d[this.mainBinding].push(clone);
      this.value = clone;
    } else {
      const value = { [`@${this.jsonldKey}`]: null };
      const fieldLanguages = ((_e = this.parentValues) == null ? void 0 : _e[this.mainBinding]) ? Language.extractUsedLanguages(this.parentValues) : [];
      if (this.languages.length || ((_f = this.definition["form:translatable"]) == null ? void 0 : _f._) === "always")
        value["@language"] = Language.l10nLanguage;
      if (!((_g = this.parentValues) == null ? void 0 : _g[this.mainBinding]))
        this.parentValues[this.mainBinding] = [];
      (_h = this.parentValues) == null ? void 0 : _h[this.mainBinding].push(value);
      this.value = value;
    }
  }
  removeItem() {
    var _a, _b;
    if (this.bindings.length > 1) {
      const valueArray = this.parentValues.$;
      if (valueArray) {
        const index = valueArray.indexOf(this.itemValues.$);
        valueArray.splice(index, 1);
      }
    } else {
      const valueArray = (_b = this.parentValues[(_a = this.definition["form:binding"]) == null ? void 0 : _a._]) == null ? void 0 : _b.$;
      if (valueArray) {
        const index = valueArray.indexOf(this.value.$);
        valueArray.splice(index, 1);
      }
    }
  }
  wrapperDisplay(innerTemplates = []) {
    return this.wrapper(innerTemplates, true);
  }
  itemDisplay(childTemplates = []) {
    return html2`
    <div class="item">
      ${this.valueDisplay()}
      ${childTemplates}
    </div>`;
  }
  valueDisplay() {
    var _a;
    return html2`${(_a = this.value) == null ? void 0 : _a._}`;
  }
  wrapper() {
    return __async(this, arguments, function* (innerTemplates = [], isDisplayOnly = false) {
      var _a, _b;
      const type = kebabize(this.constructor.name);
      const shouldShowEmpty = ((_a = this.definition["form:translatable"]) == null ? void 0 : _a._) === "always" && !Language.l10nLanguage;
      return html2`
    ${!shouldShowEmpty && (!isDisplayOnly || innerTemplates.length > 0) ? html2`
    <div ref=${attributesDiff(this.wrapperAttributes)} name=${kebabize(lastPart(this.definition["@id"]))} type="${type}">
    ${this.label()}
    ${innerTemplates.length ? html2`
      <div class="items">
        ${this.description()}
        ${innerTemplates}
      </div>
    ` : ""}
      ${((_b = this.definition["form:multiple"]) == null ? void 0 : _b._) && !isDisplayOnly ? html2`<div>${this.addButton()}</div>` : html2``}
    </div>
    ` : html2``}`;
    });
  }
  description() {
    var _a, _b;
    return ((_a = this.definition["form:description"]) == null ? void 0 : _a._) ? html2`<p class="description">${(_b = this.definition["form:description"]) == null ? void 0 : _b._}</p>` : null;
  }
  item(childTemplates = []) {
    return html2`
    <div class="item">
      ${this.input()}
      ${this.removeButton()}
      ${childTemplates}
    </div>`;
  }
  addButton() {
    return html2`<button type="button" class="button add primary" onclick="${() => __async(this, null, function* () {
      yield this.addItem();
      this.render();
    })}">
      ${fa(faPlus)}
    </button>`;
  }
  removeButton() {
    return this.removable ? html2`<button type="button" class="button remove danger" onclick="${() => {
      this.removeItem();
      this.render();
    }}">
      ${fa(faTimes)}
    </button>` : html2``;
  }
  input() {
    var _a, _b;
    return html2`
      <input 
        ref=${attributesDiff(this.attributes)} 
        .value=${(_b = (_a = this.value) == null ? void 0 : _a._) != null ? _b : ""} 
        onchange=${(event2) => this.on(event2)}
        onkeyup=${(event2) => this.on(event2)}
      />
    `;
  }
  disableLanguage() {
    const values = this.parentValues[this.mainBinding];
    if (values) {
      values.splice(1);
      delete values[0]["@language"];
    }
  }
  enableLanguage() {
    if (!this.parentValues[this.mainBinding])
      this.parentValues[this.mainBinding] = this.parentValues[this.mainBinding] = [];
    const values = this.parentValues[this.mainBinding];
    if (values.length) {
      values[0]["@language"] = Language.l10nLanguage;
    } else {
      values.push({ "@language": Language.l10nLanguage });
    }
  }
  label() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      let languageLabel = "";
      const isDisplayOnly = this.form.getAttribute("display");
      if ((_a = this.definition["form:translatable"]) == null ? void 0 : _a._) {
        const applicableValues = ((_b = this.parentValues) == null ? void 0 : _b[this.mainBinding]) ? [...this.parentValues[this.mainBinding].values()].filter((value) => !value["@language"] || value["@language"] === Language.l10nLanguage) : [];
        const language = applicableValues.map((value) => value["@language"])[0];
        if (language) {
          languageLabel = `(${Language.l10nLanguages[language]})`;
        } else if (applicableValues.length === 0 && ((_c = this.definition["form:translatable"]) == null ? void 0 : _c._) === "always") {
          languageLabel = `(${Language.l10nLanguages[Language.l10nLanguage]})`;
        }
      }
      const disableLanguage = () => {
        this.disableLanguage();
        this.render();
      };
      const enableLanguage = () => {
        this.enableLanguage();
        this.render();
      };
      return ((_d = this.definition["form:label"]) == null ? void 0 : _d._) ? html2`
      <label ref=${attributesDiff(this.labelAttributes)}>
        ${this.definition["form:label"]._}${isDisplayOnly ? ":" : ""}
        <small>&nbsp;<em>
        ${languageLabel && !isDisplayOnly ? html2`${languageLabel}` : html2``}
        ${((_e = this.definition["form:translatable"]) == null ? void 0 : _e._) && ((_f = this.definition["form:translatable"]) == null ? void 0 : _f._) !== "always" && languageLabel ? html2`<span title=${this.t.direct("Disable translations for this field").toString()} class="icon-button disable-language" onclick=${disableLanguage}>${fa(faTimes)}</span>` : html2``}
        ${((_g = this.definition["form:translatable"]) == null ? void 0 : _g._) && ((_h = this.definition["form:translatable"]) == null ? void 0 : _h._) !== "always" && !languageLabel ? html2`<span title=${this.t.direct("Enable translations for this field").toString()} class="icon-button enable-language" onclick=${enableLanguage}>${fa(faLanguage)}</span>` : html2``}
        </em></small>
      </label>
    ` : html2``;
    });
  }
  referenceLabel(uri, meta) {
    return __async(this, null, function* () {
      if (!meta) {
        const subject = lastPart(uri).replace(/_|-/g, " ");
        meta = { label: subject };
      }
      return html2`
      <div class="reference-label">
        ${(meta == null ? void 0 : meta.label) === false ? html2`<span class="reference-loading">${this.t`Could not load data`}</span>` : html2`
          ${(meta == null ? void 0 : meta.thumbnail) ? html2`<div class="image"><img src="${`//images.weserv.nl/?url=${meta == null ? void 0 : meta.thumbnail}&default=${meta == null ? void 0 : meta.thumbnail}&w=100&h=100`}"></div>` : ""}
          ${(meta == null ? void 0 : meta.label) ? isFetchable(uri) ? html2`<a href="${uri}" target="_blank">${meta == null ? void 0 : meta.label}</a>` : html2`<span class="reference-text">${meta == null ? void 0 : meta.label}</span>` : html2`<span class="reference-loading">${this.t`Loading...`}</span>`}
        `}
      </div>
    `;
    });
  }
};

export {
  __spreadValues,
  __spreadProps,
  __objRest,
  __commonJS,
  __toModule,
  __async,
  lastPart,
  html2 as html,
  render2 as render,
  languages,
  filterLanguages,
  langCodesToObject,
  Language,
  t,
  isFetchable,
  faPencilAlt,
  faCheck,
  faReply,
  faTimes,
  faGlobe,
  kebabize,
  attributesDiff,
  icon,
  fa,
  debounce,
  ElementBase
};
/*!
 * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
/*! (c) Andrea Giammarchi - ISC */
//# sourceMappingURL=chunk-BHDNV6PI.js.map
