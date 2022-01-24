import {
  onlyUnique
} from "./chunk-CVUYAW2E.js";
import {
  ElementBase,
  Language,
  __async,
  html,
  t
} from "./chunk-BHDNV6PI.js";

// src/js/helpers/importGlobalScript.ts
var imported = new Set();
var importGlobalScript = (url, name) => __async(void 0, null, function* () {
  if (imported.has(name) || window[name])
    return Promise.resolve(window[name]);
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      imported.add(name);
      resolve(window[name]);
    };
    document.head.appendChild(script);
  });
});

// src/js/elements/UrlUppy.ts
var instances = new Map();
var UrlUppy = class extends ElementBase {
  constructor(...args) {
    super(...args);
    this.attributes.type = "url";
    const url = "https://releases.transloadit.com/uppy/v2.4.1/uppy.min.css";
    this.form.renderer.extraStylesheets.add(url);
  }
  wrapper() {
    var __super = (key) => super[key];
    return __async(this, arguments, function* (innerTemplates = [], isDisplayOnly = false) {
      var _a;
      if (isDisplayOnly)
        return __super("wrapper").call(this, innerTemplates);
      const Uppy = yield importGlobalScript("https://releases.transloadit.com/uppy/v2.4.1/uppy.js", "Uppy");
      const values = (_a = this.parentValues) == null ? void 0 : _a[this.mainBinding].$.filter((value) => value && !value["@language"] || value && value["@language"] === Language.l10nLanguage).map((item) => {
        var _a2;
        return (_a2 = item == null ? void 0 : item["@value"]) != null ? _a2 : item == null ? void 0 : item["@id"];
      }).filter(onlyUnique);
      const template = html`
    <div onclick=${[(event) => {
        var _a2;
        const element = (_a2 = event == null ? void 0 : event.explicitOriginalTarget) == null ? void 0 : _a2.closest(".uppy-Dashboard-Item-action--remove");
        if (element) {
          const result = confirm(t.direct(`Are you sure?`));
          if (!result)
            event.stopPropagation();
        }
      }, { capture: true }]} ref=${(element) => {
        var _a2, _b, _c, _d;
        if (!instances.has((_a2 = this.definition["form:binding"]) == null ? void 0 : _a2._)) {
          this.uppy = new Uppy.Core().use(Uppy.ThumbnailGenerator, {
            thumbnailWidth: 200,
            waitForThumbnailsBeforeUpload: false
          }).use(Uppy.Url, {
            companionUrl: (_b = this.definition["form:uppyCompanion"]) == null ? void 0 : _b._
          }).use(Uppy.Dashboard, {
            inline: true,
            hideCancelButton: true,
            showRemoveButtonAfterComplete: true,
            target: element,
            plugins: ["Url"]
          }).use(Uppy.AwsS3Multipart, {
            limit: 4,
            companionUrl: (_c = this.definition["form:uppyCompanion"]) == null ? void 0 : _c._
          });
          for (const value of values) {
            const url = new URL(value);
            const name = url.pathname.substr(1);
            this.uppy.addFile({
              name,
              meta: {
                relativePath: value
              },
              data: "",
              isRemote: true
            });
          }
          this.uppy.on("file-removed", (file, reason) => {
            if (reason === "removed-by-user") {
              this.form.dispatchEvent(new CustomEvent("file-deleted", {
                detail: { file }
              }));
            }
          });
          this.uppy.on("upload-success", (file, response) => {
            this.form.dispatchEvent(new CustomEvent("file-added", {
              detail: { file, response }
            }));
          });
          this.uppy.getFiles().forEach((file) => {
            const image = new Image();
            image.onload = () => this.uppy.setFileState(file.id, { preview: file.meta.relativePath });
            image.src = file.meta.relativePath;
            this.uppy.setFileState(file.id, {
              progress: { uploadComplete: true, uploadStarted: true }
            });
          });
          instances.set((_d = this.definition["form:binding"]) == null ? void 0 : _d._, this.uppy);
        }
      }} class="drag-and-drop-area"></div>`;
      return __super("wrapper").call(this, [template]);
    });
  }
  addButton() {
    return null;
  }
};

export {
  UrlUppy
};
//# sourceMappingURL=chunk-2G5L54TB.js.map
