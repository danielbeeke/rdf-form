'use strict';
/**
 * A proxy handler that prefixes all URLs with a given string.
 */
class ProxyHandlerStatic {
    constructor(prefixUrl) {
        this.prefixUrl = prefixUrl;
    }
    async getProxy(request) {
        return {
            init: request.init,
            input: this.modifyInput(request.input),
        };
    }
    modifyInput(input) {
        if (typeof input === 'string') {
            return this.prefixUrl + input;
        }
        return new Request(this.prefixUrl + input.url, input);
    }
}
exports.ProxyHandlerStatic = ProxyHandlerStatic
