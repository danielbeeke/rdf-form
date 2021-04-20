"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sparqlQueryToList_1 = require("../../../public/js/helpers/sparqlQueryToList");
const comunica_browser_js_1 = require("../../../public/js/vendor/comunica-browser.js");
describe('sparqlQueryToList', function () {
    const source = `http://localhost:8070/multilingual.ttl`;
    const query = `
  PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX rdfs:    <http://www.w3.org/2000/01/rdf-schema#>
  SELECT ?uri ?label
  {
    ?uri rdfs:label ?label .
  }`;
    it('should return two items', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const comunica = comunica_browser_js_1.Comunica.newEngine();
            comunica.httpProxyHandler = null;
            sparqlQueryToList_1.sparqlQueryToList(query, source, comunica).then(result => {
                expect(result[0].label.nl).to.equal('Voorbeeld 1');
                expect(result[0].label.en).to.equal('Example 1');
            });
        });
    });
});
//# sourceMappingURL=sparqlQueryToList.spec.js.map