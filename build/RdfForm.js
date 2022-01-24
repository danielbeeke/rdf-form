import {
  jsonld,
  ttl2jsonld
} from "./chunk-P7UPKBCD.js";
import {
  ElementBase,
  Language,
  __async,
  html,
  isFetchable,
  languages,
  lastPart,
  render,
  t
} from "./chunk-BHDNV6PI.js";

// src/js/helpers/expand.ts
var expand = (binding, context) => {
  const bindingSplit = binding.split(":");
  if (context[bindingSplit[0]]) {
    binding = context[bindingSplit[0]] + bindingSplit[1];
  }
  return binding;
};

// src/js/core/JsonLdProxy.ts
var JsonLdProxy = (data, context, extraCommands = {}, defaultAlias = null) => {
  if (typeof data !== "object")
    return data;
  const convertProp = (prop) => {
    if (prop.toString().includes(":")) {
      const propSplit = prop.toString().split(":");
      if (context == null ? void 0 : context[propSplit[0]]) {
        prop = prop.toString().replace(propSplit[0] + ":", context[propSplit[0]]);
      }
    }
    return prop;
  };
  return new Proxy(data, {
    get(target, prop, receiver) {
      var _a, _b;
      if (prop === "_proxyType")
        return "JsonLdProxy";
      prop = convertProp(prop);
      if (prop === "$" && !("$" in extraCommands))
        return target;
      if (prop === "_alias")
        return defaultAlias;
      if (prop === "_" && !("_" in extraCommands)) {
        const getFirst = (thing) => {
          var _a2, _b2;
          return Array.isArray(thing) ? getFirst(thing[0]) : (_b2 = (_a2 = thing == null ? void 0 : thing["@id"]) != null ? _a2 : thing == null ? void 0 : thing["@value"]) != null ? _b2 : thing;
        };
        return JsonLdProxy(getFirst(target), context, extraCommands, defaultAlias);
      }
      if (prop === "isProxy")
        return true;
      for (const [command, callback] of Object.entries(extraCommands)) {
        if (prop === command)
          return callback(target);
      }
      if (prop[0] === "*") {
        const lastPartToFind = prop.toString().substr(1);
        for (const key of Object.keys(target)) {
          if (lastPart(key) === lastPartToFind) {
            prop = key;
          }
        }
      }
      const isOurProperty = !Reflect.has({}, prop) && !Reflect.has([], prop) && Reflect.has(target, prop);
      if (defaultAlias && !prop.toString().includes(":") && !Reflect.has({}, prop) && !Reflect.has([], prop)) {
        const newProp = convertProp(defaultAlias + ":" + prop.toString());
        const isOurProperty2 = !Reflect.has({}, newProp) && !Reflect.has([], newProp) && Reflect.has(target, newProp);
        if (isOurProperty2 && Reflect.has(target, newProp)) {
          return JsonLdProxy(target[newProp], context, extraCommands, defaultAlias);
        }
      }
      if (((_b = (_a = target[prop]) == null ? void 0 : _a[0]) == null ? void 0 : _b["@list"]) && isOurProperty) {
        return JsonLdProxy(target[prop][0]["@list"], context, extraCommands, defaultAlias);
      }
      if (isOurProperty && target[prop]) {
        return JsonLdProxy(target[prop], context, extraCommands, defaultAlias);
      }
      if (["filter"].includes(prop.toString())) {
        const requestedMethod = Reflect.get(target, prop, receiver);
        return (...input) => {
          return requestedMethod.apply(target.map((item) => JsonLdProxy(item, context, extraCommands, defaultAlias)), input);
        };
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value) {
      prop = convertProp(prop);
      target[prop] = value;
      return true;
    }
  });
};

// src/js/core/FormDefinition.ts
var only = (...type) => {
  return (item) => {
    var _a;
    return (_a = item["@type"]) == null ? void 0 : _a.some((rdfClass) => type.includes(lastPart(rdfClass)));
  };
};
var FormDefinition = class extends EventTarget {
  constructor(form) {
    super();
    this.sourceDefinitionCompacted = {};
    this.context = { form: null };
    this.ready = false;
    this.chain = new Map();
    this.chainReferences = new Map();
    this.ontology = [];
    this.form = form;
    this.formUrl = this.form.getAttribute("form");
    if (!this.formUrl)
      throw new Error('No data attribute "form" was found on the custom element.');
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      var _a;
      const proxy = (_a = this.form.getAttribute("proxy")) != null ? _a : "";
      this.roles = this.form.getAttribute("roles") ? this.form.getAttribute("roles").split(",") : [];
      const definitionResponse = yield fetch(proxy + this.formUrl.replace("http:", location.protocol));
      const definitionTurtle = yield definitionResponse.text();
      this.sourceDefinitionCompacted = ttl2jsonld(definitionTurtle);
      Object.assign(this.context, this.sourceDefinitionCompacted["@context"]);
      if (!this.context.form)
        throw new Error("The prefix form was not found in the form definition.");
      if (!this.sourceDefinitionCompacted["@graph"])
        throw new Error("Missing fields inside form definition");
      this.sourceDefinitionExpanded = JsonLdProxy(yield jsonld.expand(this.sourceDefinitionCompacted), this.context, {
        "_": (value) => Language.multilingualValue(value, "ui")
      });
      yield this.resolveSubForms(this.sourceDefinitionExpanded);
      if (!this.info)
        throw new Error("The form definition did not define a form itself.");
      const ontologyCompacted = yield fetch(proxy + this.context.form.replace("http:", location.protocol)).then((response) => __async(this, null, function* () {
        return ttl2jsonld(yield response.text());
      }));
      Object.assign(this.context, ontologyCompacted["@context"]);
      this.ontology = JsonLdProxy(yield jsonld.expand(ontologyCompacted), this.context);
      this.chain = this.createChain();
      this.ready = true;
      this.dispatchEvent(new CustomEvent("ready"));
    });
  }
  get prefix() {
    return this.context.form;
  }
  get info() {
    return this.sourceDefinitionExpanded.find(only("Form"));
  }
  get fieldsToRemove() {
    var _a, _b, _c, _d;
    const formRemovals = JSON.parse((_a = this.form.getAttribute("fields-to-remove")) != null ? _a : "[]");
    return (_d = [...(_c = (_b = this.info["form:remove"]) == null ? void 0 : _b.map((item) => item._)) != null ? _c : [], ...formRemovals].map((collapsed) => expand(collapsed, this.context))) != null ? _d : [];
  }
  get fields() {
    return this.sourceDefinitionExpanded.filter(only("Field")).filter((field) => !this.fieldsToRemove.includes(field["@id"]));
  }
  get elements() {
    return this.sourceDefinitionExpanded.filter(only("Field", "Container", "UiComponent")).filter((field) => !this.fieldsToRemove.includes(field["@id"]));
  }
  resolveSubForms(formDefinition) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e;
      const proxy = (_a = this.form.getAttribute("proxy")) != null ? _a : "";
      const fields2 = formDefinition.filter(only("Field"));
      for (const field of fields2) {
        const subformUrl = field["form:subform"];
        if ((subformUrl == null ? void 0 : subformUrl.length) > 1)
          throw new Error("Multiple sub forms were found for one field.");
        if (subformUrl) {
          const subformResponse = yield fetch(proxy + subformUrl._.replace("http:", location.protocol));
          const subformTurtle = yield subformResponse.text();
          const subformDefinitionCompacted = ttl2jsonld(subformTurtle);
          const subformDefinitionExpanded = JsonLdProxy(yield jsonld.expand(subformDefinitionCompacted), subformDefinitionCompacted["@context"], {
            "_": (value) => Language.multilingualValue(value, "ui")
          });
          yield this.resolveSubForms(subformDefinitionExpanded);
          Object.assign(this.context, subformDefinitionCompacted["@context"]);
          for (const subFormfield of subformDefinitionExpanded) {
            if (field["form:container"]) {
              subFormfield["form:container"] = field["form:container"].$;
            }
            if ((_b = field["form:order"]) == null ? void 0 : _b._) {
              subFormfield["form:order"] = [{ "@value": ((_d = (_c = field["form:order"]) == null ? void 0 : _c._) != null ? _d : 0) + parseFloat("0." + ((_e = subFormfield["form:order"]) == null ? void 0 : _e._)) }];
            }
          }
          const fieldIndex = formDefinition.map((field2) => field2.$).indexOf(field.$);
          formDefinition.$.splice(fieldIndex, 1, ...subformDefinitionExpanded.map((field2) => field2.$));
        }
      }
      return formDefinition;
    });
  }
  applyFieldAccessRoles(fields2) {
    return fields2.filter((field) => {
      if (field["form:access"]) {
        return this.roles.some((userRole) => field["form:access"].map((role) => role["@id"]).includes(userRole));
      }
      return true;
    });
  }
  createChain() {
    const recursiveChainCreator = (fields2) => {
      var _a, _b;
      const chain = new Map();
      fields2.sort((a, b) => {
        var _a2, _b2, _c, _d;
        return ((_b2 = (_a2 = a["form:order"]) == null ? void 0 : _a2._) != null ? _b2 : 0) - ((_d = (_c = b["form:order"]) == null ? void 0 : _c._) != null ? _d : 0);
      });
      for (const field of fields2) {
        const fieldBindings = this.getBindingsOfField(field);
        let children = [];
        if (((_a = field["form:widget"]) == null ? void 0 : _a._) === "group" || lastPart(field["@type"][0]) === "Container") {
          const nestingType = ((_b = field["form:widget"]) == null ? void 0 : _b._) === "group" ? "group" : "container";
          children = this.applyFieldAccessRoles(this.elements.filter((innerField) => {
            var _a2;
            return ((_a2 = innerField == null ? void 0 : innerField[`form:${nestingType}`]) == null ? void 0 : _a2._) === lastPart(field["@id"]);
          }));
        }
        chain.set(fieldBindings.length ? fieldBindings : field.$, [field, recursiveChainCreator(children)]);
      }
      return chain;
    };
    const firstLevelFields = this.applyFieldAccessRoles(this.elements.filter((field) => !field["form:group"] && !field["form:container"]));
    return recursiveChainCreator(firstLevelFields);
  }
  getBindingsOfField(field) {
    const bindings = [];
    for (const [fieldProperty, propertySetting] of Object.entries(field)) {
      const fieldMetaProperties = this.ontology.find((predicate) => lastPart(predicate == null ? void 0 : predicate["@id"]) === lastPart(fieldProperty));
      if (fieldMetaProperties && fieldMetaProperties["form:isBindingProperty"] && Array.isArray(propertySetting)) {
        bindings.push(...propertySetting.$.flatMap((item) => item["@id"]));
      }
    }
    return bindings;
  }
};

// src/js/core/RdfFormData.ts
var RdfFormData = class extends EventTarget {
  constructor(form) {
    super();
    this.ready = false;
    this.proxy = { $: null };
    this.form = form;
    this.formDefinition = this.form.formDefinition;
    this.dataAsTextOrUrl = this.form.getAttribute("data");
    this.formDefinition.addEventListener("ready", () => this.init());
  }
  init() {
    return __async(this, null, function* () {
      var _a;
      let dataText;
      if (!this.dataAsTextOrUrl)
        this.sourceData = [];
      if (this.dataAsTextOrUrl && isFetchable(this.dataAsTextOrUrl)) {
        const dataResponse = yield fetch(this.dataAsTextOrUrl);
        dataText = yield dataResponse.text();
      } else {
        dataText = this.dataAsTextOrUrl;
      }
      try {
        this.sourceDataCompacted = JSON.parse(dataText);
      } catch (e) {
        this.sourceDataCompacted = ttl2jsonld(dataText);
      }
      this.sourceData = yield jsonld.expand(this.sourceDataCompacted);
      if (Array.isArray(this.sourceData))
        this.sourceData = this.sourceData.pop();
      if (!this.sourceData)
        this.sourceData = {};
      if (!((_a = this.sourceData) == null ? void 0 : _a["@type"]))
        this.sourceData["@type"] = this.formDefinition.info["form:binding"].map((rdfClass) => rdfClass["@id"]);
      this.createProxy();
      this.ready = true;
      this.dispatchEvent(new CustomEvent("ready"));
    });
  }
  get context() {
    var _a;
    return Object.assign({}, this.formDefinition.context, (_a = this.sourceDataCompacted) == null ? void 0 : _a["@context"]);
  }
  createProxy() {
    const context = this.context;
    this.proxy = JsonLdProxy(this.sourceData, context, {
      "_": (value) => Language.multilingualValue(value, "l10n")
    });
  }
};

// src/js/core/Registry.ts
var Registry = class extends EventTarget {
  constructor(rdfForm) {
    super();
    this.ready = false;
    this.registeredFieldClasses = {};
    this.form = rdfForm;
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      const event = new CustomEvent("register-elements", { detail: { fields: [] } });
      this.form.dispatchEvent(event);
      Object.assign(this.registeredFieldClasses, event.detail.fields);
      this.ready = true;
      this.dispatchEvent(new CustomEvent("ready"));
    });
  }
  setupElement(_0, _1) {
    return __async(this, arguments, function* (definition, bindings, value = null, itemValues = {}, parentValues = null, render2 = () => null, parent, index = null, children = []) {
      var _a, _b, _c;
      const widget = ((_a = definition["form:widget"]) == null ? void 0 : _a._) && this.registeredFieldClasses[(_b = definition["form:widget"]) == null ? void 0 : _b._] ? definition["form:widget"]._ : "unknown";
      let elementClass = this.registeredFieldClasses[widget];
      if (!elementClass) {
        console.log(this.registeredFieldClasses);
        throw new Error("Unknown widget type: " + ((_c = definition["form:widget"]) == null ? void 0 : _c._));
      }
      return new elementClass(definition, bindings, value, itemValues, parentValues, render2, parent, index, children);
    });
  }
};

// src/js/helpers/flatMapProxy.ts
var flatMapProxy = (data, binding) => {
  const flat = data.flatMap((item) => item[binding]);
  return new Proxy(data, {
    get(target, prop, receiver) {
      if (prop === "_proxyType")
        return "flatMapProxy";
      return Reflect.get(flat, prop, receiver);
    },
    has(target, prop) {
      return Reflect.has(flat, prop);
    },
    deleteProperty(target, prop) {
      return true;
    }
  });
};

// src/js/helpers/containerProxy.ts
var containerProxy = (data, mainBinding) => {
  return new Proxy(data, {
    get: function(target, prop) {
      if (prop === "_proxyType")
        return "containerProxy";
      if (!data[mainBinding])
        return false;
      return Reflect.get(data[mainBinding], prop);
    },
    has: function(target, prop) {
      if (!data[mainBinding])
        return false;
      return Reflect.has(data[mainBinding], prop);
    },
    set: function(target, prop, value) {
      if (!data[mainBinding]) {
        data[mainBinding] = [{ "@list": [] }];
        return true;
      } else {
        return Reflect.set(data[mainBinding], prop, value);
      }
    }
  });
};

// sass-plugin-0:/home/daniel/Development/rdf-form/scss/rdf-form.scss
var rdf_form_default = `
.actions {
  display: flex;
  gap: 10px;
}
.actions.top > .language-switcher {
  flex: 0 0 130px;
  margin-left: auto;
}

input, textarea, select {
  flex: 1 1 auto;
  padding: 8px;
  border: 1px solid var(--color-gray);
  border-radius: var(--radius);
}

textarea {
  resize: vertical;
}

input[readonly] {
  background: none;
  border: none;
  position: relative;
  top: 1px;
  outline: none;
  padding: 0;
  line-height: 30px;
}

:host > * {
  margin-bottom: 25px;
}

* {
  box-sizing: border-box;
}

.svg-inline--fa.fa-w-8 {
  width: 8px;
}
.svg-inline--fa.fa-w-10 {
  width: 10px;
}
.svg-inline--fa.fa-w-11 {
  width: 11px;
}
.svg-inline--fa.fa-w-14 {
  width: 14px;
}
.svg-inline--fa.fa-w-16 {
  width: 16px;
}
.svg-inline--fa.fa-w-20 {
  width: 20px;
}

.button {
  padding: 10px;
  border-radius: var(--radius);
  background: var(--color-gray);
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
}
.button.big {
  padding: 20px 40px;
  font-size: 18px;
  font-weight: bold;
}
.button.primary {
  background: var(--color-primary);
}
.button.secondary {
  background: var(--color-secondary);
}
.button.danger {
  background: var(--color-danger);
  color: white;
}
.button.danger svg path {
  fill: white;
}
.button svg {
  display: block;
  pointer-events: none;
}
.button.is-working {
  position: relative;
  background: var(--color-primary-darker);
  color: white;
}
.button.is-working:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
  z-index: 1;
  background-size: 37px;
  animation: move 2s linear infinite;
  overflow: hidden;
}
.button:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
}
.button:hover:after {
  opacity: 0.2;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}
.icon-button {
  cursor: pointer;
}
.icon-button svg {
  position: relative;
  top: 3px;
}

.label {
  font-weight: bold;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
}
.label small {
  color: var(--color-gray-medium);
  font-weight: normal;
}

.label-required-star {
  margin-left: 5px;
}

.form-element {
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 10px;
  flex: 1 1 auto;
}
.form-element .description {
  font-size: 14px;
  margin-bottom: 10px;
  margin-inline: 5px;
  line-height: 22px;
  font-style: italic;
  color: var(--color-gray-medium);
}
.form-element > .label {
  height: 46px;
}
.form-element textarea:invalid,
.form-element input:invalid {
  box-shadow: none;
}

.items {
  padding: 5px;
  margin-bottom: 10px;
  background: var(--background-color);
  border-radius: var(--radius);
}

.item {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 5px;
  position: relative;
  align-items: flex-start;
}
.item:not(:last-child) {
  border-bottom: 1px dashed var(--color-gray);
}
.item:after {
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 10px);
  pointer-events: none;
}
.item[loading=true]:after {
  background: linear-gradient(-45deg, rgba(200, 200, 200, 0.2) 25%, transparent 25%, transparent 50%, rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.2) 75%, transparent 75%, transparent);
  z-index: 1;
  background-size: 50px 50px;
  animation: move 2s linear infinite;
}
.item .button {
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item .sub-item {
  flex: 1 1 10%;
}
.item .sub-item select {
  width: 100%;
}
.item .sub-item input {
  box-sizing: content-box;
  width: calc(100% - 20px);
}

.item-footer {
  flex: 0 0 100%;
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}
.form-element.no-label > .items {
  padding: 0;
  margin-inline: -5px;
}

:host {
  --radius: 4px;
  --background-color: #eef6f4;
  --background-color-secondary: #dbdbdb;
  --color-gray-light: #ecebeb;
  --color-gray: #c3c3c3;
  --color-gray-dark: #827575;
  --color-gray-blue: #f3f5f9;
  --color-gray-medium: #908989;
  --color-primary: #99e9ab;
  --color-primary-darker: #45a35b;
  --color-secondary: #b0c6b4;
  --color-danger: #cd4d4d;
  --color-text: #102406;
  font-family: "Helvetica Neue", sans-serif;
  margin: 0 auto;
  display: block;
  color: var(--color-text);
}

.search-suggestions {
  flex: 0 0 100%;
  padding: 0;
  background: white;
  margin: 0;
  margin-top: 10px;
  list-style: none;
  border: 1px solid var(--color-gray);
  border-radius: var(--radius);
  overflow: hidden;
}
.search-suggestions .search-suggestion {
  display: flex;
  align-items: center;
}
.search-suggestions .search-suggestion .image {
  width: 40px;
  height: 40px;
  display: block;
  margin-right: 10px;
  background: var(--color-gray);
}
.search-suggestions .search-suggestion .image img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  display: block;
}
.search-suggestions .search-suggestion .title {
  padding: 10px;
}
.search-suggestions .search-suggestion:not(.no-results):hover {
  cursor: pointer;
  background: var(--background-color);
}
.search-suggestions .search-suggestion.no-results {
  cursor: default;
}
.search-suggestions .search-suggestion + .search-suggestion {
  border-top: 1px dashed var(--color-gray);
}

select {
  appearance: none;
  cursor: pointer;
  background: white;
}
select:not([multiple]) {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="gray" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>');
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: calc(100% - 10px) center;
  padding-right: 30px;
}

.ss-main {
  position: relative;
  display: inline-block;
  user-select: none;
  color: var(--color-text);
  width: 100%;
}
.ss-main .ss-single-selected {
  display: flex;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-gray);
  background-color: white;
  outline: 0;
  box-sizing: border-box;
  transition: background-color 0.2s;
}
.ss-main .ss-single-selected.ss-disabled {
  background-color: var(--color-gray-light);
  cursor: not-allowed;
}
.ss-main .ss-single-selected.ss-open-above {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.ss-main .ss-single-selected.ss-open-below {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.ss-main .ss-single-selected .placeholder {
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  width: calc(100% - 30px);
  line-height: 1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ss-main .ss-single-selected .placeholder * {
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;
}
.ss-main .ss-single-selected .placeholder .ss-disabled {
  color: var(--color-gray-light);
}
.ss-main .ss-single-selected .ss-deselect {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 1 auto;
  margin: 0 6px 0 6px;
  font-weight: bold;
}
.ss-main .ss-single-selected .ss-deselect.ss-hide {
  display: none;
}
.ss-main .ss-single-selected .ss-arrow {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 1 auto;
  margin: 0 6px 0 6px;
}
.ss-main .ss-single-selected .ss-arrow span {
  border: solid var(--color-text);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transition: transform 0.2s, margin 0.2s;
}
.ss-main .ss-single-selected .ss-arrow span.arrow-up {
  transform: rotate(-135deg);
  margin: 3px 0 0 0;
}
.ss-main .ss-single-selected .ss-arrow span.arrow-down {
  transform: rotate(45deg);
  margin: -3px 0 0 0;
}
.ss-main .ss-multi-selected {
  display: flex;
  min-height: 33px;
  flex-direction: row;
  border: solid 1px var(--color-gray);
  background: white;
  border-radius: var(--radius);
}
.ss-main .ss-multi-selected.ss-disabled {
  background-color: var(--color-gray-light);
  cursor: not-allowed;
}
.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled {
  color: var(--color-text);
}
.ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete {
  cursor: not-allowed;
}
.ss-main .ss-multi-selected.ss-open-above {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.ss-main .ss-multi-selected.ss-open-below {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.ss-main .ss-multi-selected .ss-values {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1 1 100%;
  padding: 4px;
  width: calc(100% - 30px);
}
.ss-main .ss-multi-selected .ss-values .ss-disabled {
  display: flex;
  padding: 4px 5px;
  font-size: 16px;
  margin: 2px 0;
  line-height: 1em;
  align-items: center;
  width: 100%;
  color: var(--color-gray-light);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ss-main .ss-multi-selected .ss-values .ss-value {
  display: flex;
  user-select: none;
  align-items: center;
  font-size: 12px;
  padding: 3px 6px;
  margin: 2px 5px 2px 0;
  color: var(--text);
  background-color: var(--color-gray);
  border-radius: var(--radius);
}
.ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete {
  margin: 0 0 0 5px;
  cursor: pointer;
}
.ss-main .ss-multi-selected .ss-add {
  display: flex;
  flex: 0 1 3px;
  align-items: center;
  margin-right: 16px;
}
.ss-main .ss-multi-selected .ss-add .ss-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-gray-medium);
  position: relative;
  height: 15px;
  width: 3px;
  transition: transform 0.2s;
}
.ss-main .ss-multi-selected .ss-add .ss-plus:after {
  background: var(--color-gray-medium);
  content: "";
  position: absolute;
  height: 3px;
  width: 15px;
  left: -6px;
  top: 6px;
}
.ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross {
  transform: rotate(45deg);
}

.ss-content {
  position: absolute;
  width: 100%;
  margin: -1px 0 0 0;
  box-sizing: border-box;
  border: solid 1px var(--color-gray);
  z-index: 1010;
  background-color: white;
  transform-origin: center top;
  transition: transform 0.2s, opacity 0.2s;
  opacity: 0;
  transform: scaleY(0);
}
.ss-content.ss-open {
  display: block;
  opacity: 1;
  transform: scaleY(1);
}
.ss-content .ss-search {
  display: flex;
  flex-direction: row;
}
.ss-content .ss-search.ss-hide {
  height: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
}
.ss-content .ss-search.ss-hide input {
  height: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
}
.ss-content .ss-search input {
  display: inline-flex;
  font-size: inherit;
  line-height: inherit;
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  height: 30px;
  padding: 6px 8px;
  margin: 0;
  border: none;
  background-color: white;
  outline: 0;
  text-align: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-appearance: textfield;
}
.ss-content .ss-search input:focus {
  box-shadow: none;
}
.ss-content .ss-search input::placeholder {
  vertical-align: middle;
}
.ss-content .ss-search .ss-addable {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  flex: 0 0 30px;
  height: 30px;
  color: var(--color-gray-medium);
  margin: 0 3px 0 12px;
  border-radius: var(--radius);
  box-sizing: border-box;
}
.ss-content .ss-addable {
  padding-top: 0;
}
.ss-content .ss-list {
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
}
.ss-content .ss-list .ss-optgroup .ss-optgroup-label {
  padding: 6px 10px 6px 10px;
  font-weight: bold;
}
.ss-content .ss-list .ss-optgroup .ss-option {
  padding: 6px 6px 6px 25px;
}
.ss-content .ss-list .ss-optgroup-label-selectable {
  cursor: pointer;
}
.ss-content .ss-list .ss-optgroup-label-selectable:hover {
  color: var(--text);
  background-color: var(--color-gray);
}
.ss-content .ss-list .ss-option {
  padding: 6px 10px 6px 10px;
  cursor: pointer;
  user-select: none;
}
.ss-content .ss-list .ss-option * {
  display: inline-block;
}
.ss-content .ss-list .ss-option:hover, .ss-content .ss-list .ss-option.ss-highlighted {
  color: var(--text);
  background-color: var(--color-gray);
}
.ss-content .ss-list .ss-option.ss-disabled {
  cursor: not-allowed;
  color: var(--color-gray-light);
  background-color: white;
}
.ss-content .ss-list .ss-option:not(.ss-disabled).ss-option-selected {
  color: var(--text);
  background-color: rgba(var(--color-gray), 0.1);
}
.ss-content .ss-list .ss-option.ss-hide {
  display: none;
}
.ss-content .ss-list .ss-option .ss-search-highlight {
  background-color: var(--color-gray);
}

.ss-value-delete svg {
  position: relative;
  top: 2px;
  margin-top: -4px;
  width: 8px !important;
}
.ss-value-delete svg path {
  fill: var(--color-text);
}

.pell {
  border: 1px solid rgba(10, 10, 10, 0.1);
  box-sizing: border-box;
}

.pell-content {
  box-sizing: border-box;
  height: 300px;
  outline: 0;
  overflow-y: auto;
  padding: 10px;
}

.pell-actionbar {
  background-color: #FFF;
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
}

.pell-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 30px;
  outline: 0;
  width: 30px;
  vertical-align: bottom;
}

.pell-button-selected {
  background-color: #F0F0F0;
}

.checkbox-label {
  flex: 1 1 100%;
  cursor: pointer;
}
.checkbox-label > input {
  margin-left: 0;
}

.form-element[type=duration] .granularity {
  display: flex;
}

.form-element[type=group] {
  display: flex;
}
.form-element[type=group] > .items > .item:not(:first-child) > .form-element > .label {
  display: none;
}
.form-element[type=group] > .items > .item {
  flex-wrap: nowrap;
}
.form-element[type=group] > .items > .item > .button {
  margin-bottom: 6px;
  align-self: flex-end;
}
.form-element[type=group] > .items > .item > .form-element {
  flex: 1 1 100px;
  margin-bottom: 0;
  min-width: 80px;
}
.form-element[type=group] > .items > .item > .form-element .label {
  height: auto;
  color: var(--text);
  font-style: italic;
  padding-top: 7px;
  padding-bottom: 5px;
  font-size: 14px;
}
.form-element[type=group] > .items > .item > .form-element > .items {
  padding: 0;
  margin-bottom: 0;
}
.form-element[type=group] > .items > .item > .form-element > .items > .item {
  padding-left: 0;
  padding-right: 0;
}
.form-element[type=group] > .items > .item > .form-element > .items > .item input, .form-element[type=group] > .items > .item > .form-element > .items > .item select {
  min-width: 80px;
}
.form-element[type=group] > .items > .item > .form-element[type=reference] {
  min-width: 300px;
}
.form-element[type=group] > .items > .item > .form-element[type=reference] .item {
  width: 100%;
}
.form-element[type=group] > .items > .item > .form-element[type=reference] .item .button.edit {
  margin-left: auto;
}

.form-element[type=reference] .items {
  display: flex;
  flex-wrap: wrap;
}
.form-element[type=reference] .inner {
  display: flex;
  width: 100%;
}
.form-element[type=reference] .search-suggestions {
  top: 29px;
  left: 5px;
  right: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  z-index: 10;
}
.form-element[type=reference] .item {
  align-items: center;
  gap: 0;
}
.form-element[type=reference] .item input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
}
.form-element[type=reference] .item:not(:last-child) {
  border-bottom: none;
}
.form-element[type=reference] .item[has-suggestions] .button {
  border-bottom-right-radius: 0;
}
.form-element[type=reference] .item[has-suggestions] input {
  border-bottom-left-radius: 0;
}
.form-element[type=reference] .item .button:not(:last-child):not(.remove) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.form-element[type=reference] .item * + .button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.form-element[type=reference] .reference-loading {
  padding-left: 10px;
  font-size: 12px;
}
.form-element[type=reference] .reference-label {
  background: white;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border: 1px solid var(--color-gray);
  padding-right: 10px;
  display: flex;
  flex: 1 1 auto;
  width: auto;
  align-items: center;
  height: 35px;
}
.form-element[type=reference] .reference-label a, .form-element[type=reference] .reference-label span {
  margin-left: 10px;
}
.form-element[type=reference] .reference-label[type=text] {
  padding-left: 10px;
}
.form-element[type=reference] .reference-label .image {
  width: 33px;
  height: 33px;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  background-color: var(--color-gray);
  overflow: hidden;
}
.form-element[type=reference] .reference-label .image img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 35px;
  border-radius: var(--radius);
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-gray-light);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: var(--radius);
}
.switch .slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  border-radius: var(--radius);
  left: 8px;
  bottom: 6px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid var(--color-gray);
}
.switch input:checked + .slider {
  background-color: var(--color-secondary);
}
.switch input:focus + .slider {
  box-shadow: 0 0 1px var(--color-secondary);
}
.switch input:checked + .slider:before {
  transform: translateX(23px);
}

.form-element[type=url-image] img {
  max-width: 100%;
  max-height: 300px;
  user-select: none;
  -webkit-user-drag: none;
}
.form-element[type=url-image] .top {
  display: flex;
  width: 100%;
  gap: 10px;
}
.form-element[type=url-image] .image-wrapper {
  display: inline-flex;
  position: relative;
}
.form-element[type=url-image] .focal-point-description {
  background: var(--color-primary);
  padding: 5px;
}
.form-element[type=url-image] .focal-point {
  pointer-events: none;
  position: absolute;
  border-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDcuOSA3LjkiIHZlcnNpb249IjEuMSI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI4OS4wNjI0OCkiPgo8cGF0aCBkPSJNMi44IDI4OS4ySDEuMmMtMC42IDAtMSAwLjQtMSAxdjEuN203LjcgMHYtMS43YzAtMC41LTAuNS0xLTEtMUg1LjFtLTUgNXYxLjdjMCAwLjUgMC41IDEgMSAxaDEuNm0yLjMgMGgxLjZjMC42IDAgMS0wLjQgMS0xdi0xLjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDowLjM7c3Ryb2tlOndoaXRlIi8+PC9nPjwvc3ZnPg==") 13/35px/0 space;
  mix-blend-mode: difference;
  filter: saturate(100%) contrast(200%);
}
.form-element[type=url-image] .focal-point:before, .form-element[type=url-image] .focal-point:after {
  content: "";
  display: block;
  width: 40px;
  height: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form-element[type=url-image] .focal-point:after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.form-element[type=url-image] .item {
  flex-direction: column;
}
.form-element[type=url-image] input {
  width: 100%;
}

.form-element[type=color] input[type=color] {
  height: 60px;
  max-width: 60px;
}

.form-element[type=container] > .items {
  padding: 0;
  background: none;
  margin-bottom: 0;
}
.form-element[type=container] > .items > .item {
  padding: 0;
  margin-bottom: 0;
}
.form-element[type=container] > .items > .item .form-element {
  flex: 1 1 30%;
  margin-bottom: 0;
}

.form-element.column > .items > .item {
  flex-direction: column;
}
.form-element.column > .items > .item > .form-element {
  width: 100%;
}

.form-element[type=details] summary {
  cursor: pointer;
}
.form-element[type=details] summary > .label {
  display: inline-flex;
  pointer-events: none;
  height: 46px;
}

[name=sidebar] .form-element[type=details] > .items {
  background-color: var(--color-gray-blue);
  --background-color: #e8eaf0;
  --color-primary: #b0bcd9;
  --color-secondary: #cdd3e2;
}

.form-element[type=language-picker] {
  background: none;
  border: 0;
}
.form-element[type=language-picker] .items, .form-element[type=language-picker] .item {
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
}
.form-element[type=language-picker] .language-switcher {
  flex: 1 1 100px;
  margin-top: 3px;
  display: flex;
}
.form-element[type=language-picker] .language-switcher svg {
  position: relative;
  top: 2px;
  margin-right: 10px;
}
.form-element[type=language-picker] .language-switcher svg path {
  fill: var(--color-gray-medium);
}
.form-element[type=language-picker] .item .ss-main {
  flex: 1 1 80%;
}
.form-element[type=language-picker] .item .ss-multi-selected {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  border-radius: 0 !important;
}
.form-element[type=language-picker] .item .ss-multi-selected::-webkit-scrollbar {
  display: none;
}
.form-element[type=language-picker] .item .ss-multi-selected:before, .form-element[type=language-picker] .item .ss-multi-selected:after {
  content: "";
  display: block;
  width: 100px;
  pointer-events: none;
  height: calc(100% - 1px);
  position: absolute;
  bottom: 1px;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
}
.form-element[type=language-picker] .item .ss-multi-selected:before {
  left: 0;
  background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, white 100%);
}
.form-element[type=language-picker] .item .ss-multi-selected:after {
  right: 39px;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 100%);
}
.form-element[type=language-picker] .item .ss-multi-selected.hide-left-shadow:before {
  opacity: 0;
}
.form-element[type=language-picker] .item .ss-multi-selected.hide-right-shadow:after {
  opacity: 0;
}
.form-element[type=language-picker] .item .ss-values {
  padding: 0;
  flex-wrap: nowrap;
  white-space: nowrap;
  width: auto;
  padding-inline-end: 40px;
}
.form-element[type=language-picker] .item .ss-values:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid var(--color-gray);
}
.form-element[type=language-picker] .item .ss-values .ss-value:not(.active) .ss-value-text {
  color: var(--color-gray-dark);
}
.form-element[type=language-picker] .item .ss-values .ss-value.active {
  position: sticky;
  left: 0;
  right: 40px;
  z-index: 3;
}
.form-element[type=language-picker] .item .ss-values > .ss-disabled {
  cursor: pointer;
  color: var(--text);
  padding: 15px 0;
}
.form-element[type=language-picker] .item .ss-add {
  cursor: pointer;
  flex: 0 1 30px;
  position: relative;
  padding-inline-start: 30px;
  padding-inline-end: 10px;
  width: 40px;
  display: flex;
  height: 100%;
  position: absolute;
  margin-right: 0;
  background: white;
  border-bottom: 1px solid var(--color-gray);
  right: 0px;
  z-index: 4;
}
.form-element[type=language-picker] .item .ss-add .ss-plus {
  position: absolute;
  left: 50%;
}
.form-element[type=language-picker] .item .ss-content.ss-open {
  margin-top: 20px;
  border-radius: var(--radius);
}
.form-element[type=language-picker] .item .ss-multi-selected {
  border: 0;
}
.form-element[type=language-picker] .item .ss-value {
  position: relative;
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 14px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid var(--color-gray);
  background: var(--color-gray-light);
}
.form-element[type=language-picker] .item .ss-value.active {
  background: white;
  border-bottom-color: white;
}
.form-element[type=language-picker] .item .ss-value .ss-value-delete svg {
  width: 10px !important;
  margin-left: 4px;
}
.form-element[type=language-picker] .item .ss-value .ss-value-delete svg path {
  fill: var(--color-gray-medium);
}

.wysiwyg-wrapper {
  width: 100%;
}

.form-element[type=password] .column {
  flex: 1 1 40%;
}
.form-element[type=password] .column > * {
  width: 100%;
}

:host form .form-element[name=main] {
  width: calc(100% - 440px);
  float: left;
  margin-right: 40px;
}
:host form .form-element[name=sidebar] {
  width: 400px;
  float: right;
}
:host form .actions {
  flex-direction: row-reverse;
  float: left;
  clear: both;
  margin-bottom: 40px;
  width: 100%;
  border-top: 1px solid var(--color-gray);
  padding: 20px 0;
  position: sticky;
  bottom: 0;
  background: white;
  margin-top: 20px;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvY29tcG9uZW50cy9fYWN0aW9ucy5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL2NvbXBvbmVudHMvX2Jhc2Uuc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9jb21wb25lbnRzL19mb3JtLWVsZW1lbnQuc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9jb21wb25lbnRzL19pdGVtcy5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL2NvbXBvbmVudHMvX3JkZi1mb3JtLnNjc3MiLCJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvY29tcG9uZW50cy9fc2VhcmNoLXN1Z2dlc3Rpb25zLnNjc3MiLCJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvY29tcG9uZW50cy9fc2VsZWN0LnNjc3MiLCJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvY29tcG9uZW50cy9fc2xpbS1zZWxlY3Quc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9jb21wb25lbnRzL19wZWxsLnNjc3MiLCJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvY29tcG9uZW50cy9fY2hlY2tib3gtbGFiZWwuc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9lbGVtZW50cy9fZHVyYXRpb24uc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9lbGVtZW50cy9fZ3JvdXAuc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9lbGVtZW50cy9fcmVmZXJlbmNlLnNjc3MiLCJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvZWxlbWVudHMvX2NoZWNrYm94LnNjc3MiLCJmaWxlOi8vL2hvbWUvZGFuaWVsL0RldmVsb3BtZW50L3JkZi1mb3JtL3Njc3MvZWxlbWVudHMvX3VybC1pbWFnZS5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL2VsZW1lbnRzL19jb2xvci5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL2VsZW1lbnRzL19jb250YWluZXIuc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9lbGVtZW50cy9fZGV0YWlscy5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL2VsZW1lbnRzL19sYW5ndWFnZS1waWNrZXIuc2NzcyIsImZpbGU6Ly8vaG9tZS9kYW5pZWwvRGV2ZWxvcG1lbnQvcmRmLWZvcm0vc2Nzcy9lbGVtZW50cy9fd3lzaXd5Zy5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL2VsZW1lbnRzL19wYXNzd29yZC5zY3NzIiwiZmlsZTovLy9ob21lL2RhbmllbC9EZXZlbG9wbWVudC9yZGYtZm9ybS9zY3NzL19sYXlvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0VBQ0E7O0FBR0U7RUFDRTtFQUNBOzs7QUNQTjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFJQTtFQUFXOztBQUNYO0VBQVk7O0FBQ1o7RUFBWTs7QUFDWjtFQUFZOztBQUNaO0VBQVk7O0FBQ1o7RUFBWTs7O0FDbkNkO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7RUFDQTs7QUFFQTtFQUNFOztBQUlKO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUFRO0VBQVM7RUFBVztFQUM1QjtFQVVBO0VBQ0E7RUFDQTtFQUNBOztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJQTtFQUNFOzs7QUFLTjtFQUNFO0lBQ0U7O0VBRUY7SUFDRTs7O0FBSUo7RUFDRTs7QUFFQTtFQUNFO0VBQ0E7OztBQ2xHSjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7O0FBSUo7RUFDRTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7QUFBQTtFQUVFOzs7QUN0Q0o7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBSUE7RUFDRTtFQVVBO0VBQ0E7RUFDQTs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFFQTtFQUNFOztBQUdGO0VBQ0U7RUFDQTs7O0FBS047RUFDRTs7O0FBR0Y7RUFDRTtJQUNFOztFQUVGO0lBQ0U7OztBQUlKO0VBQ0U7RUFDQTs7O0FDckZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7O0FDbEJGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlKO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBOztBQUdGO0VBQ0U7O0FBSUo7RUFDRTs7O0FDOUNKO0VBQ0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FDVko7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBRUY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOztBQUVGO0VBQ0U7RUFDQTs7QUFNUjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7O0FBR0U7RUFDRTs7QUFJQTtFQUNFOztBQU1SO0VBQ0U7RUFDQTs7QUFFRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFLTjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7OztBQU9WO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFOztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlKO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTs7QUFJSjtFQUNFOztBQUVBO0VBQ0U7RUFDQTs7QUFJSjtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUdGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFBWTs7QUFFWjtFQUNFOzs7QUFPTjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7OztBQzlWTjtFQUNFO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQSxRQVZvQjtFQVdwQjtFQUNBO0VBQ0EsU0FacUI7OztBQWV2QjtFQUNFLGtCQXhCcUI7RUF5QnJCOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBLFFBNUJtQjtFQTZCbkI7RUFDQSxPQTVCa0I7RUE2QmxCOzs7QUFHRjtFQUNFLGtCQWxDMkI7OztBQ0w3QjtFQUNFO0VBQ0E7O0FBRUE7RUFDRTs7O0FDSkY7RUFDRTs7O0FDRko7RUFDRTs7QUFLTTtFQUNFOztBQUlOO0VBQ0U7O0FBRUE7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7O0FBRUE7RUFDRTs7QUFLTjtFQUNFOztBQUVBO0VBQ0U7O0FBRUE7RUFDRTs7O0FDckRaO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFJQTtFQUNFOztBQUdGO0VBQ0U7O0FBS0Y7RUFDRTtFQUNBOztBQUlKO0VBQ0k7RUFDQTs7QUFJTjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FDaEdSO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTs7O0FDaERGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUlBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7O0FBSUo7RUFDRTs7QUFHRjtFQUNFOzs7QUN2REY7RUFDRTtFQUNBOzs7QUNGRjtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOzs7QUFNUjtFQUNFOztBQUVBO0VBQ0U7OztBQ3JCRjtFQUNFOztBQUVBO0VBQ0U7RUFDQTtFQUNBOzs7QUFNSjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUNqQko7RUFDRTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFNSjtFQUNFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFPRjtFQUNFO0VBQ0E7O0FBT0Y7RUFDRTs7QUFHRjtFQUNFOztBQUtKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNFO0VBQ0E7RUFDQTs7QUFJSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOztBQUtKO0VBQ0U7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7O0FBQ0E7RUFDRTs7O0FDN0tWO0VBQ0U7OztBQ0FBO0VBQ0U7O0FBRUE7RUFDRTs7O0FDSko7RUFDRTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSJ9 */`;

// sass-plugin-0:/home/daniel/Development/rdf-form/scss/display-only.scss
var display_only_default = `
.label small,
.ss-add,
.ss-value-delete,
.icon-button {
  display: none !important;
}

.ss-multi-selected {
  pointer-events: none;
}

.ss-value {
  pointer-events: all;
}

.items,
.item,
.label {
  display: inline !important;
  background: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.item:not(:last-child) {
  border: none !important;
}

.form-element {
  display: block !important;
}

.reference-label {
  border: none !important;
  display: inline-flex !important;
  height: auto !important;
  padding-inline-end: 0 !important;
}
.reference-label .image {
  width: 16px !important;
  height: 16px !important;
  margin-right: 4px !important;
}
.reference-label .reference-text {
  margin-left: 0 !important;
}
.reference-label a {
  margin-left: 0 !important;
}

.form-element:not([type=language-picker]) {
  margin-bottom: 4px !important;
}

.form-element[type=language-picker] {
  margin-bottom: 30px !important;
}

details summary::-webkit-details-marker {
  display: none;
}

details {
  margin-top: 14px !important;
}
details > .items {
  display: block !important;
}
details > summary {
  list-style: none;
  pointer-events: none;
  margin-bottom: 6px !important;
  font-style: italic;
}
details > summary .label {
  font-weight: 100 !important;
}

.form-element[type=url-image] .items {
  display: flex !important;
  margin-top: 10px !important;
}
.form-element[type=url-image] .items img {
  border: 1px solid var(--color-gray);
  margin-inline-end: 30px;
}

.form-element[type=language-picker] .item .ss-values .ss-value.active,
.form-element[type=language-picker] .item .ss-multi-selected::after {
  right: 0;
}

.form-element[type=language-picker] .item .ss-values {
  padding-inline-end: 0 !important;
}
.form-element[type=language-picker] .item .ss-values .ss-value:last-child {
  margin-inline-end: 0 !important;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhOjtjaGFyc2V0PXV0Zi04LC5sYWJlbCUyMHNtYWxsLCUwQS5zcy1hZGQsJTBBLnNzLXZhbHVlLWRlbGV0ZSwlMEEuaWNvbi1idXR0b24lMjAlN0IlMEElMjAlMjBkaXNwbGF5OiUyMG5vbmUlMjAhaW1wb3J0YW50OyUwQSU3RCUwQSUwQS5zcy1tdWx0aS1zZWxlY3RlZCUyMCU3QiUwQSUyMCUyMHBvaW50ZXItZXZlbnRzOiUyMG5vbmU7JTBBJTdEJTBBJTBBLnNzLXZhbHVlJTIwJTdCJTBBJTIwJTIwcG9pbnRlci1ldmVudHM6JTIwYWxsOyUwQSU3RCUwQSUwQS5pdGVtcywlMEEuaXRlbSwlMEEubGFiZWwlMjAlN0IlMEElMjAlMjBkaXNwbGF5OiUyMGlubGluZSUyMCFpbXBvcnRhbnQ7JTBBJTIwJTIwYmFja2dyb3VuZDolMjBub25lJTIwIWltcG9ydGFudDslMEElMjAlMjBwYWRkaW5nOiUyMDAlMjAhaW1wb3J0YW50OyUwQSUyMCUyMG1hcmdpbjolMjAwJTIwIWltcG9ydGFudDslMEElN0QlMEElMEEuaXRlbTpub3QoOmxhc3QtY2hpbGQpJTIwJTdCJTBBJTIwJTIwYm9yZGVyOiUyMG5vbmUlMjAhaW1wb3J0YW50OyUwQSU3RCUwQSUwQS5mb3JtLWVsZW1lbnQlMjAlN0IlMEElMjAlMjBkaXNwbGF5OiUyMGJsb2NrJTIwIWltcG9ydGFudDslMEElN0QlMEElMEEucmVmZXJlbmNlLWxhYmVsJTIwJTdCJTBBJTIwJTIwYm9yZGVyOiUyMG5vbmUlMjAhaW1wb3J0YW50OyUwQSUyMCUyMGRpc3BsYXk6JTIwaW5saW5lLWZsZXglMjAhaW1wb3J0YW50OyUwQSUyMCUyMGhlaWdodDolMjBhdXRvJTIwIWltcG9ydGFudDslMEElMjAlMjBwYWRkaW5nLWlubGluZS1lbmQ6JTIwMCUyMCFpbXBvcnRhbnQ7JTBBJTBBJTIwJTIwLmltYWdlJTIwJTdCJTBBJTIwJTIwJTIwJTIwd2lkdGg6JTIwMTZweCUyMCFpbXBvcnRhbnQ7JTBBJTIwJTIwJTIwJTIwaGVpZ2h0OiUyMDE2cHglMjAhaW1wb3J0YW50OyUwQSUyMCUyMCUyMCUyMG1hcmdpbi1yaWdodDolMjA0cHglMjAhaW1wb3J0YW50OyUwQSUyMCUyMCU3RCUwQSUwQSUyMCUyMC5yZWZlcmVuY2UtdGV4dCUyMCU3QiUwQSUyMCUyMCUyMCUyMG1hcmdpbi1sZWZ0OiUyMDAlMjAhaW1wb3J0YW50OyUwQSUyMCUyMCU3RCUwQSUwQSUyMCUyMGElMjAlN0IlMEElMjAlMjAlMjAlMjBtYXJnaW4tbGVmdDolMjAwJTIwIWltcG9ydGFudDslMEElMjAlMjAlN0QlMEElN0QlMEElMEEuZm9ybS1lbGVtZW50Om5vdCglNUJ0eXBlPSUyMmxhbmd1YWdlLXBpY2tlciUyMiU1RCklMjAlN0IlMEElMjAlMjBtYXJnaW4tYm90dG9tOiUyMDRweCUyMCFpbXBvcnRhbnQ7JTBBJTdEJTBBJTBBLmZvcm0tZWxlbWVudCU1QnR5cGU9JTIybGFuZ3VhZ2UtcGlja2VyJTIyJTVEJTIwJTdCJTBBJTIwJTIwbWFyZ2luLWJvdHRvbTolMjAzMHB4JTIwIWltcG9ydGFudDslMEElN0QlMEElMEFkZXRhaWxzJTIwc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciUyMCU3QiUwQSUyMCUyMGRpc3BsYXk6bm9uZTslMEElN0QlMEElMEFkZXRhaWxzJTIwJTdCJTBBJTIwJTIwbWFyZ2luLXRvcDolMjAxNHB4JTIwIWltcG9ydGFudDslMEElMEElMjAlMjAlM0UlMjAuaXRlbXMlMjAlN0IlMEElMjAlMjAlMjAlMjBkaXNwbGF5OiUyMGJsb2NrJTIwIWltcG9ydGFudDslMEElMjAlMjAlMjAlMjAvLyUyMHBhZGRpbmctaW5saW5lLXN0YXJ0OiUyMDEwcHglMjAhaW1wb3J0YW50OyUwQSUyMCUyMCU3RCUwQSUwQSUyMCUyMCYlMjAlM0UlMjBzdW1tYXJ5JTIwJTdCJTBBJTIwJTIwJTIwJTIwbGlzdC1zdHlsZTolMjBub25lOyUwQSUyMCUyMCUyMCUyMHBvaW50ZXItZXZlbnRzOiUyMG5vbmU7JTBBJTIwJTIwJTIwJTIwbWFyZ2luLWJvdHRvbTolMjA2cHglMjAhaW1wb3J0YW50OyUwQSUyMCUyMCUyMCUyMGZvbnQtc3R5bGU6JTIwaXRhbGljOyUwQSUwQSUyMCUyMCUyMCUyMC5sYWJlbCUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMGZvbnQtd2VpZ2h0OiUyMDEwMCUyMCFpbXBvcnRhbnQ7JTBBJTIwJTIwJTIwJTIwJTdEJTBBJTIwJTIwJTdEJTBBJTdEJTBBJTBBLmZvcm0tZWxlbWVudCU1QnR5cGU9JTIydXJsLWltYWdlJTIyJTVEJTIwLml0ZW1zJTIwJTdCJTBBJTIwJTIwZGlzcGxheTolMjBmbGV4JTIwIWltcG9ydGFudDslMEElMjAlMjBtYXJnaW4tdG9wOiUyMDEwcHglMjAhaW1wb3J0YW50OyUwQSUwQSUyMCUyMGltZyUyMCU3QiUwQSUyMCUyMCUyMCUyMGJvcmRlcjolMjAxcHglMjBzb2xpZCUyMHZhcigtLWNvbG9yLWdyYXkpOyUwQSUyMCUyMCUyMCUyMG1hcmdpbi1pbmxpbmUtZW5kOiUyMDMwcHg7JTBBJTIwJTIwJTdEJTBBJTdEJTBBJTBBLmZvcm0tZWxlbWVudCU1QnR5cGU9JTIybGFuZ3VhZ2UtcGlja2VyJTIyJTVEJTIwLml0ZW0lMjAuc3MtdmFsdWVzJTIwLnNzLXZhbHVlLmFjdGl2ZSwlMEEuZm9ybS1lbGVtZW50JTVCdHlwZT0lMjJsYW5ndWFnZS1waWNrZXIlMjIlNUQlMjAuaXRlbSUyMC5zcy1tdWx0aS1zZWxlY3RlZDo6YWZ0ZXIlMjAlN0IlMEElMjAlMjByaWdodDolMjAwOyUwQSU3RCUwQSUwQS5mb3JtLWVsZW1lbnQlNUJ0eXBlPSUyMmxhbmd1YWdlLXBpY2tlciUyMiU1RCUyMC5pdGVtJTIwLnNzLXZhbHVlcyUyMCU3QiUwQSUyMCUyMHBhZGRpbmctaW5saW5lLWVuZDolMjAwJTIwIWltcG9ydGFudDslMEElMEElMjAlMjAuc3MtdmFsdWU6bGFzdC1jaGlsZCUyMCU3QiUwQSUyMCUyMCUyMCUyMG1hcmdpbi1pbmxpbmUtZW5kOiUyMDAlMjAhaW1wb3J0YW50OyUwQSUyMCUyMCU3RCUwQSU3RCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtFQUlFOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFHRjtBQUFBO0FBQUE7RUFHRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7OztBQUlKO0VBQ0U7OztBQUdGO0VBQ0U7OztBQUdGO0VBQ0U7OztBQUdGO0VBQ0U7O0FBRUE7RUFDRTs7QUFJRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7OztBQUtOO0VBQ0U7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7OztBQUlKO0FBQUE7RUFFRTs7O0FBR0Y7RUFDRTs7QUFFQTtFQUNFIn0= */`;

// src/js/core/Renderer.ts
var Renderer = class extends EventTarget {
  constructor(rdfForm) {
    super();
    this.ready = false;
    this.fieldInstances = new Map();
    this.extraStylesheets = new Set();
    this.init();
    this.form = rdfForm;
  }
  init() {
    return __async(this, null, function* () {
      this.ready = true;
      this.dispatchEvent(new CustomEvent("ready"));
    });
  }
  render() {
    return __async(this, null, function* () {
      const templates = yield this.nest(this.form.formDefinition.chain, this.form.registry, this.form.formData.proxy, this.form);
      const formSubmit = (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.form.dispatchEvent(new CustomEvent("submit", { detail: {
          proxy: this.form.formData.proxy,
          expanded: this.form.formData.proxy.$
        } }));
      };
      const isDisplayOnly = this.form.getAttribute("display");
      render(this.form.shadow, html`
      <style>:host { display: none; }</style>
      <style>${rdf_form_default}</style>

      ${[...this.extraStylesheets.values()].map((link) => html`<link href=${link} rel='stylesheet' type='text/css'>`)}

      ${isDisplayOnly ? html`<style>${display_only_default}</style>` : null}


      ${!isDisplayOnly ? html`
      <form onsubmit=${formSubmit}>
        ${templates}
        <div class="actions">
          <button class="button save primary big">${t`Save`}</button>
        </div>
      </form>

      ` : templates}
    `);
    });
  }
  nest(formDefinition, registry, formData, parent) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const templates = [];
      const isDisplayOnly = this.form.getAttribute("display");
      for (const [bindings, [field, children]] of formDefinition.entries()) {
        const mainBinding = (_a = field["form:binding"]) == null ? void 0 : _a._;
        const isContainer = lastPart(field["@type"][0]) === "Container";
        const isUiComponent = lastPart(field["@type"][0]) === "UiComponent";
        let wrapperFieldInstance = isUiComponent || isContainer ? this.fieldInstances.get(field.$) : false;
        if (!wrapperFieldInstance)
          wrapperFieldInstance = yield registry.setupElement(field, bindings, null, null, formData, () => this.render(), parent, null, children);
        if (!wrapperFieldInstance)
          continue;
        if (!this.fieldInstances.has(field.$))
          this.fieldInstances.set(field.$, wrapperFieldInstance);
        const innerTemplates = [];
        if (mainBinding && !isContainer) {
          let applicableValues = (formData == null ? void 0 : formData[mainBinding]) ? [...formData[mainBinding].values()].filter((value) => !value["@language"] || value["@language"] === Language.l10nLanguage) : [];
          if (formData && Array.isArray(formData.$)) {
            applicableValues = flatMapProxy(formData, mainBinding).filter((value) => value && !value["@language"] || value && value["@language"] === Language.l10nLanguage);
          }
          if (applicableValues.length) {
            for (const [index, value] of applicableValues.entries()) {
              const fieldInstance = (_b = this.fieldInstances.get(value.$)) != null ? _b : yield registry.setupElement(field, bindings, value, formData == null ? void 0 : formData[index], formData, () => this.render(), parent, index, children);
              if (!this.fieldInstances.has(value.$))
                this.fieldInstances.set(value.$, fieldInstance);
              const childValues = ((_c = field["form:widget"]) == null ? void 0 : _c._) === "group" ? formData[mainBinding][index] : formData[mainBinding];
              const childTemplates = children.size ? yield this.nest(children, registry, childValues, wrapperFieldInstance) : [];
              innerTemplates.push(isDisplayOnly ? fieldInstance.itemDisplay(childTemplates) : fieldInstance.item(childTemplates));
            }
          } else if (!isDisplayOnly) {
            const childTemplates = children.size ? yield this.nest(children, registry, [], wrapperFieldInstance) : [];
            innerTemplates.push(isDisplayOnly ? wrapperFieldInstance.itemDisplay(childTemplates) : wrapperFieldInstance.item(childTemplates));
          }
        } else if (isUiComponent) {
          const childTemplates = children.size ? yield this.nest(children, registry, formData, wrapperFieldInstance) : [];
          innerTemplates.push(isDisplayOnly ? wrapperFieldInstance.itemDisplay(childTemplates) : wrapperFieldInstance.item(childTemplates));
        } else if (isContainer) {
          const childTemplates = children.size ? yield this.nest(children, registry, mainBinding ? containerProxy(formData, mainBinding) : formData, wrapperFieldInstance) : [];
          innerTemplates.push(isDisplayOnly ? wrapperFieldInstance.itemDisplay(childTemplates) : wrapperFieldInstance.item(childTemplates));
        }
        templates.push(isDisplayOnly ? wrapperFieldInstance.wrapperDisplay(innerTemplates) : wrapperFieldInstance.wrapper(innerTemplates));
      }
      return templates;
    });
  }
};

// src/js/core/Debug.ts
var expandProxiesInConsole = () => {
  const originalConsoleLog = console.log;
  console.log = (...rawInputs) => {
    const inputs = [...rawInputs];
    for (let [index, input] of inputs.entries()) {
      if (input == null ? void 0 : input.isProxy)
        inputs[index] = input.$;
    }
    originalConsoleLog(...inputs);
  };
};

// src/js/RdfForm.ts
var fields;
var init = (givenFields = null) => {
  fields = givenFields;
};
var RdfForm = class extends HTMLElement {
  constructor() {
    super();
    this.ready = false;
    this.proxy = null;
    this.addEventListener("register-elements", (event) => event.detail.fields = fields);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (this.shadow)
        return;
      this.shadow = this.attachShadow({ mode: "open" });
      this.formDefinition = new FormDefinition(this);
      this.formData = new RdfFormData(this);
      this.registry = new Registry(this);
      this.renderer = new Renderer(this);
      this.language = Language;
      yield this.language.init(this);
      this.t = t;
      this.language.addEventListener("l10n-change", (event) => this.dispatchEvent(new CustomEvent("l10n-change", {
        detail: event.detail
      })));
      this.proxy = this.getAttribute("proxy");
      if (this.getAttribute("debug") !== null)
        expandProxiesInConsole();
      const components = [
        this.formDefinition,
        this.formData,
        this.registry,
        this.language,
        this.renderer
      ];
      for (const component of components) {
        component.addEventListener("ready", () => {
          if (components.every((component2) => component2.ready) && !this.ready) {
            this.ready = true;
            this.renderer.render();
            this.dispatchEvent(new CustomEvent("ready"));
          }
        });
      }
    });
  }
};
customElements.define("rdf-form", RdfForm);
export {
  ElementBase,
  JsonLdProxy,
  RdfForm,
  init,
  languages
};
//# sourceMappingURL=RdfForm.js.map
