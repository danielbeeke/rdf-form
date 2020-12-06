const all =

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = {exports: {}};
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r)
        }, p, p.exports, r, e, n, t)
      }
      return n[i].exports
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
  }

  return r
})()({
  1: [function (require, module, exports) {
    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iterableUtils = require("./iterableUtils");

/**
 * AsyncIterator handler that yields either the subject or all results.
 *
 * Requires:
 *  - (optional) a subject on the path data
 *  - (optional) a subject on the path proxy
 *  - (optional) results on the path proxy
 */
class AsyncIteratorHandler {
  handle({
    subject
  }, pathProxy) {
    // Return a one-item iterator of the subject if present;
    // otherwise, return all results of this path
    return subject ? () => (0, _iterableUtils.iteratorFor)(pathProxy.subject) : () => pathProxy.results[Symbol.asyncIterator]();
  }

}

exports.default = AsyncIteratorHandler;
},{"./iterableUtils":29}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Resolves to the given item in the path data.
 * For example, new DataHandler({}, 'foo', 'bar')
 * will return pathData.foo.bar.
 *
 * Resolution can optionally be async,
 * and/or be behind a function call.
 */
class DataHandler {
  constructor(options, ...dataProperties) {
    this._isAsync = options.async;
    this._isFunction = options.function;
    this._dataProperties = dataProperties;
  }

  static sync(...dataProperties) {
    return new DataHandler({
      async: false
    }, ...dataProperties);
  }

  static syncFunction(...dataProperties) {
    return new DataHandler({
      async: false,
      function: true
    }, ...dataProperties);
  }

  static async(...dataProperties) {
    return new DataHandler({
      async: true
    }, ...dataProperties);
  }

  static asyncFunction(...dataProperties) {
    return new DataHandler({
      async: true,
      function: true
    }, ...dataProperties);
  } // Resolves the data path, or returns a function that does so


  handle(pathData) {
    return !this._isFunction ? this._resolveDataPath(pathData) : () => this._resolveDataPath(pathData);
  } // Resolves the data path


  _resolveDataPath(data) {
    return !this._isAsync ? this._resolveSyncDataPath(data) : this._resolveAsyncDataPath(data);
  } // Resolves synchronous property access


  _resolveSyncDataPath(data) {
    for (const property of this._dataProperties) data = data && data[property];

    return data;
  } // Resolves asynchronous property access


  async _resolveAsyncDataPath(data) {
    for (const property of this._dataProperties) data = data && (await data[property]);

    return data;
  }

}

exports.default = DataHandler;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MutationFunctionHandler = _interopRequireDefault(require("./MutationFunctionHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A MutationFunctionHandler for deletions.
 */
class DeleteFunctionHandler extends _MutationFunctionHandler.default {
  constructor() {
    super('DELETE', true);
  }

}

exports.default = DeleteFunctionHandler;
},{"./MutationFunctionHandler":10}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Executes the query represented by a path.
 *
 * Requires:
 * - a queryEngine property in the path settings
 * - a sparql property on the path proxy
 * - (optional) a resultsCache property on the path data
 */
class ExecuteQueryHandler {
  async *handle(pathData, path) {
    // Try to retrieve the result from cache
    const resultsCache = await pathData.resultsCache;

    if (resultsCache) {
      for (const result of resultsCache) yield result;

      return;
    } // Retrieve the query engine and query


    const {
      queryEngine
    } = pathData.settings;
    if (!queryEngine) throw new Error(`${pathData} has no queryEngine setting`);
    const query = await path.sparql;
    if (query === null || query === undefined) throw new Error(`${pathData} has no sparql property`); // No results if the query is empty

    if (query.length === 0) return; // Extract the term from every query result

    for await (const bindings of queryEngine.execute(query)) yield this.extractTerm(bindings, pathData);
  }
  /**
   * Extracts the first term from a query result binding as a new path.
   */


  extractTerm(binding, pathData) {
    // Extract the first term from the binding map
    if (binding.size !== 1) throw new Error('Only single-variable queries are supported');
    const subject = binding.values().next().value; // Each result is a new path that starts from the term as subject

    return pathData.extendPath({
      subject
    }, null);
  }

}

exports.default = ExecuteQueryHandler;
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _valueUtils = require("./valueUtils");

var _iterableUtils = require("./iterableUtils");

/**
 * Returns a function that requests the values of multiple properties.
 * You can use this function to access properties as follows:
 * - fn() returns []
 * - fn(p1) returns [path[p1]]
 * - fn(p1, p2) returns [path[p1], path[p2]]
 * - fn([p1, p2]) returns [path[p1], path[p2]]
 * - fn(asyncIterable) returns [path[p1], path[p2]]
 * - fn({ p1: null, p2: null }) returns { p1: path[p1], p2: path[p2] }
 * Combinations of the above are possible by passing them in arrays.
 */
class GetFunctionHandler {
  handle(pathData, path) {
    return (...args) => this.readProperties(path, args.length === 1 ? args[0] : args, true);
  }

  async readProperties(path, properties, wrapSingleValues = false) {
    // Convert an async iterable to an array
    if ((0, _valueUtils.isAsyncIterable)(properties)) properties = await (0, _iterableUtils.iterableToArray)(properties); // If passed an array, read every property

    if (Array.isArray(properties)) {
      const values = properties.map(p => this.readProperties(path, p));
      return Promise.all(values);
    } // If passed an object with property names as keys,
    // return an object with the values filled in


    if ((0, _valueUtils.isPlainObject)(properties)) {
      // Use the key as property value if none is specified
      const keys = Object.keys(properties);
      properties = keys.map(key => properties[key] || key); // Store the resolved properties by key

      const results = {};
      const values = await this.readProperties(path, properties);

      for (let i = 0; i < keys.length; i++) results[keys[i]] = values[i];

      return results;
    } // Otherwise, perform a single property access


    const value = path[properties];
    return wrapSingleValues ? [value] : value;
  }

}

exports.default = GetFunctionHandler;
},{"./iterableUtils":29,"./valueUtils":31}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MutationFunctionHandler = _interopRequireDefault(require("./MutationFunctionHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A MutationFunctionHandler for insertions.
 */
class InsertFunctionHandler extends _MutationFunctionHandler.default {
  constructor() {
    super('INSERT', false);
  }

}

exports.default = InsertFunctionHandler;
},{"./MutationFunctionHandler":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonldContextParser = require("jsonld-context-parser");

var _dataModel = require("@rdfjs/data-model");

var _promiseUtils = require("./promiseUtils");

var _valueUtils = require("./valueUtils");

/**
 * Resolves property names of a path
 * to their corresponding IRIs through a JSON-LD context.
 */
class JSONLDResolver {
  /**
   * Creates a new resolver for the given context(s).
   */
  constructor(...contexts) {
    this._context = Promise.resolve({});
    this.extendContext(...contexts);
  }
  /**
   * The JSON-LD resolver supports all string properties.
   */


  supports(property) {
    return typeof property === 'string';
  }
  /**
   * When resolving a JSON-LD property,
   * we create a new chainable path segment corresponding to the predicate.
   *
   * Example usage: person.friends.firstName
   */


  resolve(property, pathData) {
    const predicate = (0, _promiseUtils.lazyThenable)(() => this.expandProperty(property));
    const reverse = (0, _promiseUtils.lazyThenable)(() => this._context.then(({
      contextRaw
    }) => contextRaw[property] && contextRaw[property]['@reverse']));
    const resultsCache = this.getResultsCache(pathData, predicate, reverse);
    const newData = {
      property,
      predicate,
      resultsCache,
      reverse,
      apply: this.apply
    };
    return pathData.extendPath(newData);
  }
  /**
   * When the property is called as a function,
   * it adds property-object constraints to the path.
   *
   * Example usage: person.friends.location(place).firstName
   */


  apply(args, pathData, path) {
    if (args.length === 0) {
      const {
        property
      } = pathData;
      throw new Error(`Specify at least one term when calling .${property}() on a path`);
    } // With the property constraint added, continue from the previous path


    pathData.values = args.map(_valueUtils.valueToTerm);
    return path;
  }
  /**
   * Expands a JSON property key into a full IRI.
   */


  async expandProperty(property) {
    // JavaScript requires keys containing colons to be quoted,
    // so prefixed names would need to written as path['foaf:knows'].
    // We thus allow writing path.foaf_knows or path.foaf$knows instead.
    property = property.replace(/^([a-z][a-z0-9]*)[_$]/i, '$1:'); // Expand the property to a full IRI

    const context = await this._context;
    const expandedProperty = context.expandTerm(property, true);
    if (!_jsonldContextParser.Util.isValidIri(expandedProperty)) throw new Error(`The JSON-LD context cannot expand the '${property}' property`);
    return (0, _dataModel.namedNode)(expandedProperty);
  }
  /**
   * Extends the current JSON-LD context with the given context(s).
   */


  async extendContext(...contexts) {
    await (this._context = this._context.then(({
      contextRaw
    }) => new _jsonldContextParser.ContextParser().parse([contextRaw, ...contexts])));
  }
  /**
   * Gets the results cache for the given predicate.
   */


  getResultsCache(pathData, predicate, reverse) {
    let {
      propertyCache
    } = pathData;
    return propertyCache && (0, _promiseUtils.lazyThenable)(async () => {
      // Preloading does not work with reversed predicates
      propertyCache = !(await reverse) && (await propertyCache);
      return propertyCache && propertyCache[(await predicate).value];
    });
  }

}

exports.default = JSONLDResolver;
},{"./promiseUtils":30,"./valueUtils":31,"@rdfjs/data-model":32,"jsonld-context-parser":42}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Resolves a specific language of a path
 */
class LanguageResolver {
  /**
   * The language may be prefixed @ or $.
   */
  supports(property) {
    return typeof property === 'string' && ['@', '$'].includes(property[0]);
  }
  /**
   * We fetch all the translations and return the selected one.
   *
   * Example usage: tomato.label['@nl']
   * Example usage: tomato.label.@nl
   */


  async resolve(property, pathData) {
    const values = pathData.parent.proxy[pathData.property];

    for await (const path of values) {
      if (path.language === property.substr(1)) return path;
    }

    return undefined;
  }

}

exports.default = LanguageResolver;
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Traverses a path to collect mutationExpressions into an expression.
 * This is needed because mutations can be chained.
 *
 * Requires:
 * - a mutationExpressions property on the path proxy
 */
class MutationExpressionsHandler {
  async handle(pathData) {
    const mutationExpressions = []; // Add all mutationExpressions to the path

    let current = pathData;

    while (current) {
      // Obtain and store mutationExpressions
      if (current.mutationExpressions) mutationExpressions.unshift(...(await current.mutationExpressions)); // Move to parent link

      current = current.parent;
    }

    return mutationExpressions;
  }

}

exports.default = MutationExpressionsHandler;
},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promiseUtils = require("./promiseUtils");

var _iterableUtils = require("./iterableUtils");

var _valueUtils = require("./valueUtils");

/**
 * Returns a function that, when called with arguments,
 * extends the path with mutationExpressions.
 *
 * Mutation functions can be called in two equivalent ways:
 * - path.property.set(object, object)
 * - path.set({ property: [object, object] })
 * Objects can be strings, terms, or path expressions.
 * The second syntax allows setting multiple properties at once.
 * It also has `null` and `undefined` as shortcuts for the empty array,
 * and a direct value as shortcut for a single-valued array.
 *
 * Requires:
 * - a pathExpression property on the path proxy and all non-raw arguments.
 */
class MutationFunctionHandler {
  constructor(mutationType, allowZeroArgs) {
    this._mutationType = mutationType;
    this._allowZeroArgs = allowZeroArgs;
  } // Creates a function that performs a mutation


  handle(pathData, path) {
    return (...args) => {
      // Check if the given arguments are valid
      if (!this._allowZeroArgs && !args.length) throw new Error('Mutation cannot be invoked without arguments'); // Create a lazy Promise to the mutation expressions

      const mutationExpressions = (0, _promiseUtils.lazyThenable)(() => this.createMutationExpressions(pathData, path, args));
      return pathData.extendPath({
        mutationExpressions
      });
    };
  } // Creates expressions that represent the requested mutation


  async createMutationExpressions(pathData, path, args) {
    // The mutation targets a single property on the path by passing objects
    if (!(0, _valueUtils.hasPlainObjectArgs)(args)) return [await this.createMutationExpression(pathData, path, args)]; // The mutation targets multiple properties through a map of property-objects pairs

    const pairs = Object.entries(args[0]);
    const expressions = await Promise.all(pairs.map(([property, values]) => this.createMutationExpression(pathData, path[property], (0, _valueUtils.ensureArray)(values)))); // Group expressions together to maintain the same structure as the singular case
    // (All properties have the same parent path, and hence the same condition)

    return [expressions.length === 0 ? {} : { ...expressions[0],
      predicateObjects: (0, _valueUtils.joinArrays)(expressions.map(e => e.predicateObjects))
    }];
  } // Creates an expression that represents a mutation with the given objects


  async createMutationExpression(pathData, path, values) {
    // Obtain the path segments, which are the selection conditions for the mutation
    const conditions = await path.pathExpression;
    if (!Array.isArray(conditions)) throw new Error(`${pathData} has no pathExpression property`);
    if (conditions.length < 2) throw new Error(`${pathData} should at least contain a subject and a predicate`); // Obtain the predicate and target objects

    const {
      predicate,
      reverse
    } = conditions[conditions.length - 1];
    if (!predicate) throw new Error(`Expected predicate in ${pathData}`);
    const objects = await this.extractObjects(pathData, path, values); // Create a mutation, unless no objects are affected (`null` means all)

    return objects !== null && objects.length === 0 ? {} : {
      mutationType: this._mutationType,
      conditions: conditions.slice(0, -1),
      predicateObjects: [{
        predicate,
        reverse,
        objects
      }]
    };
  } // Extracts individual objects from a set of values passed to a mutation function


  async extractObjects(pathData, path, values) {
    // If no specific values are specified, match all (represented by `null`)
    if (values.length === 0) return null; // Otherwise, expand singular values, promises, and paths

    const objects = [];

    for (const value of values) {
      if (!(0, _valueUtils.isAsyncIterable)(value)) // Add a (promise to) a single value
        objects.push((await value)); // Add multiple values from a path
      else objects.push(...(await (0, _iterableUtils.iterableToArray)(value)));
    }

    return objects.map(_valueUtils.valueToTerm);
  }

}

exports.default = MutationFunctionHandler;
},{"./iterableUtils":29,"./promiseUtils":30,"./valueUtils":31}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Traverses a path to collect links and nodes into an expression.
 */
class PathExpressionHandler {
  async handle(pathData) {
    const segments = [];
    let current = pathData; // Add all predicates to the path

    while (current.parent) {
      // Obtain and store predicate
      if (current.predicate) {
        segments.unshift({
          predicate: await current.predicate,
          reverse: await current.reverse,
          sort: current.sort,
          values: current.values
        });
      } // Move to parent link


      current = current.parent;
    } // Add the root subject to the path


    if (!current.subject) throw new Error(`Expected root subject in ${current}`);
    const subject = await current.subject;
    segments.unshift({
      subject
    });
    return segments;
  }

}

exports.default = PathExpressionHandler;
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHandler = toHandler;
exports.toResolver = toResolver;
exports.default = void 0;

var _PathProxy = _interopRequireDefault(require("./PathProxy"));

var _JSONLDResolver = _interopRequireDefault(require("./JSONLDResolver"));

var _LanguageResolver = _interopRequireDefault(require("./LanguageResolver"));

var _defaultHandlers = _interopRequireDefault(require("./defaultHandlers"));

var _jsonldContextParser = require("jsonld-context-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A PathFactory creates paths with default settings.
 */
class PathFactory {
  constructor(settings, data) {
    // Store settings and data
    this._settings = settings = { ...settings
    };
    this._data = data = { ...data
    }; // Prepare the handlers

    const handlers = settings.handlers || _defaultHandlers.default;

    for (const key in handlers) handlers[key] = toHandler(handlers[key]);

    for (const key of Object.getOwnPropertySymbols(handlers)) handlers[key] = toHandler(handlers[key]); // Prepare the resolvers


    const resolvers = (settings.resolvers || [new _LanguageResolver.default()]).map(toResolver);

    if (settings.context) {
      resolvers.push(new _JSONLDResolver.default(settings.context));
      settings.parsedContext = new _jsonldContextParser.ContextParser().parse(settings.context).then(({
        contextRaw
      }) => contextRaw);
    } else {
      settings.context = settings.parsedContext = {};
    } // Instantiate PathProxy that will create the paths


    this._pathProxy = new _PathProxy.default({
      handlers,
      resolvers
    }); // Remove PathProxy settings from the settings object

    delete settings.handlers;
    delete settings.resolvers;
  }
  /**
   * Creates a path with the given (optional) settings and data.
   */


  create(settings = {}, data) {
    // The settings parameter is optional
    if (!data) [data, settings] = [settings, null]; // Apply defaults on settings and data

    return this._pathProxy.createPath(Object.assign(Object.create(null), this._settings, settings), Object.assign(Object.create(null), this._data, data));
  }

}

exports.default = PathFactory;
PathFactory.defaultHandlers = _defaultHandlers.default;
/**
 * Converts a handler function into a handler object.
 */

function toHandler(handle) {
  return typeof handle.handle === 'function' ? handle : {
    handle
  };
}
/**
 * Converts a resolver function into a catch-all resolver object.
 */


function toResolver(resolve) {
  return typeof resolve.resolve === 'function' ? resolve : {
    supports,
    resolve
  };
} // Catch-all resolvers support everything


function supports() {
  return true;
}
},{"./JSONLDResolver":7,"./LanguageResolver":8,"./PathProxy":13,"./defaultHandlers":27,"jsonld-context-parser":42}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const EMPTY = Object.create(null);
/**
 * A PathProxy creates path expressions,
 * to which functionality can be attached.
 *
 * To users, these paths act as regular JavaScript objects
 * (such as `path.foo.bar.prop`) thanks to Proxy.
 * Behind the scenes, they carry around internal data
 * that can be used to influence their functionality.
 *
 * A path's functionality is realized by:
 * - handlers, which handle a specific named property
 * - resolvers, which can handle arbitrary properties
 * Only handlers and resolvers see the internal data.
 *
 * A path can have arbitrary internal data fields, but these are reserved:
 * - settings, an object that is passed on as-is to child paths
 * - proxy, a reference to the proxied object the user sees
 * - parent, a reference to the parent path
 * - apply, a function the will be invoked when the path is called as a function
 * - extendPath, a method to create a child path with this path as parent
 */

class PathProxy {
  constructor({
    handlers = EMPTY,
    resolvers = []
  } = {}) {
    this._handlers = handlers;
    this._resolvers = resolvers;
  }
  /**
   * Creates a path Proxy with the given settings and internal data fields.
   */


  createPath(settings = {}, data) {
    // The settings parameter is optional
    if (data === undefined) [data, settings] = [settings, {}]; // Create the path's internal data object and the proxy that wraps it

    const {
      apply,
      ...rawData
    } = data;
    const path = apply ? Object.assign(callPathFunction, rawData) : rawData;
    const proxy = new Proxy(path, this);
    path.proxy = proxy;
    path.settings = settings;

    function callPathFunction(...args) {
      return apply(args, path, proxy);
    } // Add an extendPath method to create child paths


    if (!path.extendPath) {
      const pathProxy = this;

      path.extendPath = function extendPath(newData, parent = this) {
        return pathProxy.createPath(settings, {
          parent,
          extendPath,
          ...newData
        });
      };
    } // Return the proxied path


    return proxy;
  }
  /**
   * Handles access to a property
   */


  get(pathData, property) {
    // Handlers provide functionality for a specific property,
    // so check if we find a handler first
    const handler = this._handlers[property];
    if (handler && typeof handler.handle === 'function') return handler.handle(pathData, pathData.proxy); // Resolvers provide functionality for arbitrary properties,
    // so find a resolver that can handle this property

    for (const resolver of this._resolvers) {
      if (resolver.supports(property)) return resolver.resolve(property, pathData, pathData.proxy);
    } // Otherwise, the property does not exist


    return undefined;
  }

}

exports.default = PathProxy;
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a new path starting from the predicate of the current path.
 *
 * Requires:
 * - (optional) a predicate property on the path data
 */
class PredicateHandler {
  handle(pathData) {
    const {
      predicate
    } = pathData;
    return !predicate ? undefined : Promise.resolve(predicate).then(subject => pathData.extendPath({
      subject
    }, null));
  }

}

exports.default = PredicateHandler;
},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Queries for all predicates of a path subject
 */
class PredicatesHandler {
  handle(pathData) {
    return pathData.extendPath({
      distinct: true,
      select: '?predicate',
      finalClause: queryVar => `${queryVar} ?predicate ?object.`,
      property: pathData.property
    });
  }

}

exports.default = PredicatesHandler;
},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const VARIABLE = /(SELECT\s+)(\?\S+)/;
const QUERY_TAIL = /\}[^}]*$/;
/**
 * Returns a function that preloads and caches
 * certain properties of results on the current path.
 *
 * Requires:
 * - a predicate handler on the path proxy
 * - a queryEngine property in the path settings
 *
 * Creates:
 * - a resultsCache property on the path data
 */

class PreloadHandler {
  /**
   * Creates a preload function.
   */
  handle(pathData, pathProxy) {
    return async (...properties) => {
      if (properties.length > 0) {
        // Map the properties to predicates
        const predicates = await Promise.all(properties.map(async p => (await pathProxy[p].predicate).value)); // Create and attach the results cache to the path data

        pathData.resultsCache = await this.createResultsCache(predicates, pathData, pathProxy);
      }

      return pathProxy;
    };
  }
  /**
   * Creates a cache for the results of
   * resolving the given predicates against the path.
   */


  async createResultsCache(predicates, pathData, path) {
    // Execute the preloading query
    const {
      query,
      vars,
      resultVar
    } = await this.createQuery(predicates, path);
    const {
      settings: {
        queryEngine
      }
    } = pathData;
    const bindings = queryEngine.execute(query); // Extract all results and their preloaded property values

    const resultsCache = {};
    const propertyCaches = {};

    for await (const binding of bindings) {
      // Initialize the result's cache if needed
      const result = binding.get(resultVar),
            hash = hashTerm(result);

      if (!(hash in resultsCache)) {
        // Create the property cache
        const propertyCache = propertyCaches[hash] = {};

        for (const predicate of predicates) propertyCache[predicate] = []; // Create the result path


        const resultData = {
          subject: result,
          propertyCache
        };
        resultsCache[hash] = pathData.extendPath(resultData, null);
      } // Create and cache a possible property value path from the binding


      const propertyCache = propertyCaches[hash];

      for (let i = 0; i < vars.length; i++) {
        const value = binding.get(vars[i]);

        if (value) {
          const valuePath = pathData.extendPath({
            subject: value
          }, null);
          propertyCache[predicates[i]].push(valuePath);
        }
      }
    }

    return Object.values(resultsCache);
  }
  /**
   * Creates the query for preloading the given predicates on the path
   */


  async createQuery(predicates, path) {
    // Obtain the query for the current path, and its main variable
    const parentQuery = await path.sparql;
    const variableMatch = VARIABLE.exec(parentQuery);
    if (!variableMatch) throw new Error(`Unexpected path query: ${parentQuery}`);
    const resultVar = variableMatch[2]; // Modify the query to include the preload clauses
    // TODO: instead of query manipulation, adjust the query generator
    // TODO: support reverse predicates

    const vars = predicates.map((p, i) => `?preload_${i}`);
    const preloadClauses = predicates.map((predicate, i) => `    { ${resultVar} <${predicate}> ${vars[i]}. }`).join('\n    UNION\n');
    const query = parentQuery.replace(VARIABLE, `$1$2 ${vars.join(' ')}`).replace(QUERY_TAIL, `  OPTIONAL {\n${preloadClauses}\n  }\n$&`);
    return {
      query,
      vars,
      resultVar
    };
  }

} // Returns a unique string representation of the term


exports.default = PreloadHandler;

function hashTerm(term) {
  const {
    termType,
    value
  } = term;

  switch (termType) {
    case 'NamedNode':
      return value;

    case 'Literal':
      const {
        language,
        datatype
      } = term;
      return `${termType}|${language}|${datatype.value}|${value}`;

    default:
      return `${termType}|${value}`;
  }
}
},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonldContextParser = require("jsonld-context-parser");

var _promiseUtils = require("./promiseUtils");

/**
 * Queries for all compacted predicates of a path subject
 */
class PropertiesHandler {
  handle(pathData, path) {
    return (0, _promiseUtils.toIterablePromise)(this._handle(pathData, path));
  }

  async *_handle(pathData, path) {
    const contextRaw = (await pathData.settings.parsedContext) || {};
    const context = new _jsonldContextParser.JsonLdContextNormalized(contextRaw);

    for await (const predicate of path.predicates) yield context.compactIri(`${await predicate}`, true);
  }

}

exports.default = PropertiesHandler;
},{"./promiseUtils":30,"jsonld-context-parser":42}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a function that deletes the given value
 * for the path, and then adds the given values to the path.
 *
 * Requires:
 * - a delete function on the path proxy.
 * - an add function on the path proxy.
 */
class ReplaceFunctionHandler {
  handle(pathData, path) {
    return function (oldValue, ...newValues) {
      if (!oldValue || !newValues.length) throw new Error('Replacing values requires at least two arguments, old value followed by all new values');
      return path.delete(oldValue).add(...newValues);
    };
  }

}

exports.default = ReplaceFunctionHandler;
},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MutationFunctionHandler = _interopRequireDefault(require("./MutationFunctionHandler"));

var _valueUtils = require("./valueUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a function that deletes all existing values
 * for the path, and then adds the given values to the path.
 *
 * Requires:
 * - a delete function on the path proxy.
 * - an add function on the path proxy.
 */
class SetFunctionHandler extends _MutationFunctionHandler.default {
  handle(pathData, path) {
    return (...args) => {
      // First, delete all existing values for the property/properties
      const deletePath = !(0, _valueUtils.hasPlainObjectArgs)(args) ? // When a single property is given, delete all of its values
      path.delete() : // When a map of properties is given, delete all of their values
      Object.keys(args[0]).reduce((previousPath, property) => previousPath.delete({
        [property]: []
      }), path); // Next, insert the new values

      return deletePath.add(...args);
    };
  }

}

exports.default = SetFunctionHandler;
},{"./MutationFunctionHandler":10,"./valueUtils":31}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a function that creates a new path with the same values,
 * but sorted on the given property.
 * The function accepts multiple properties to sort on a deeper path.
 *
 * Requires:
 *  - a predicate on the path proxy
 *  - a sort function on the path proxy (for multi-property sorting)
 */
class SortHandler {
  constructor(order = 'ASC') {
    this.order = order;
  }

  handle(pathData, pathProxy) {
    return (...properties) => {
      // Do nothing if no sort properties were given
      if (properties.length === 0) return pathProxy; // Split off the first sort property and obtain its predicate

      const [property, ...rest] = properties;
      const {
        predicate
      } = pathProxy[property]; // Sort on the first property, and create paths for the next one

      const childData = {
        property,
        predicate,
        sort: this.order
      };
      const childPath = pathData.extendPath(childData);
      return rest.length === 0 ? childPath : childPath.sort(...rest);
    };
  }

}

exports.default = SortHandler;
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataModel = require("@rdfjs/data-model");

const NEEDS_ESCAPE = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
      ESCAPE_ALL = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
      ESCAPED_CHARS = {
  '\\': '\\\\',
  '"': '\\"',
  '\t': '\\t',
  '\n': '\\n',
  '\r': '\\r',
  '\b': '\\b',
  '\f': '\\f'
};
/**
 * Expresses a path or mutation as a SPARQL query.
 *
 * Requires:
 * - a mutationExpressions or pathExpression property on the path proxy
 */

class SparqlHandler {
  async handle(pathData, path) {
    // First check if we have a mutation expression
    const mutationExpressions = await path.mutationExpressions;
    if (Array.isArray(mutationExpressions) && mutationExpressions.length) // Remove empty results to prevent dangling semicolons
      return mutationExpressions.map(e => this.mutationExpressionToQuery(e)).filter(Boolean).join('\n;\n'); // Otherwise, fall back to checking for a path expression

    const pathExpression = await path.pathExpression;
    if (!Array.isArray(pathExpression)) throw new Error(`${pathData} has no pathExpression property`);
    return this.pathExpressionToQuery(pathData, path, pathExpression);
  }

  pathExpressionToQuery(pathData, path, pathExpression) {
    if (pathExpression.length < 2 && !pathData.finalClause) throw new Error(`${pathData} should at least contain a subject and a predicate`); // Create triple patterns

    let queryVar = '?subject',
        sorts = [],
        clauses = [];

    if (pathExpression.length > 1) {
      queryVar = this.createVar(pathData.property);
      ({
        queryVar,
        sorts,
        clauses
      } = this.expressionToTriplePatterns(pathExpression, queryVar));
    }

    if (pathData.finalClause) clauses.push(pathData.finalClause(queryVar)); // Create SPARQL query body

    const distinct = pathData.distinct ? 'DISTINCT ' : '';
    const select = `SELECT ${distinct}${pathData.select ? pathData.select : queryVar}`;
    const where = ` WHERE {\n  ${clauses.join('\n  ')}\n}`;
    const orderClauses = sorts.map(({
      order,
      variable
    }) => `${order}(${variable})`);
    const orderBy = orderClauses.length === 0 ? '' : `\nORDER BY ${orderClauses.join(' ')}`;
    return `${select}${where}${orderBy}`;
  }

  mutationExpressionToQuery({
    mutationType,
    conditions,
    predicateObjects
  }) {
    // If there are no mutations, there is no query
    if (!mutationType || !conditions || predicateObjects && predicateObjects.length === 0) return ''; // Create the WHERE clauses

    const scope = {};
    let subject, where; // If the only condition is a subject, we need no WHERE clause

    if (conditions.length === 1) {
      subject = this.termToString(conditions[0].subject);
      where = [];
    } // Otherwise, create a WHERE clause from all conditions
    else {
        const lastPredicate = conditions[conditions.length - 1].predicate;
        subject = this.createVar(lastPredicate.value, scope);
        ({
          queryVar: subject,
          clauses: where
        } = this.expressionToTriplePatterns(conditions, subject, scope));
      } // Create the mutation clauses


    const mutations = [];

    for (const {
      predicate,
      reverse,
      objects
    } of predicateObjects) {
      // Mutate either only the specified objects, or all of them
      const objectStrings = objects ? objects.map(o => this.termToString(o)) : [this.createVar(predicate.value, scope)]; // Generate a triple pattern for all subjects

      mutations.push(...this.triplePatterns(subject, predicate, objectStrings, reverse));
    }

    const mutationClauses = `{\n  ${mutations.join('\n  ')}\n}`; // Join clauses into a SPARQL query

    return where.length === 0 ? // If there are no WHERE clauses, just mutate raw data
    `${mutationType} DATA ${mutationClauses}` : // Otherwise, return a DELETE/INSERT ... WHERE ... query
    `${mutationType} ${mutationClauses} WHERE {\n  ${where.join('\n  ')}\n}`;
  }

  expressionToTriplePatterns([root, ...pathExpression], lastVar, scope = {}) {
    const lastIndex = pathExpression.length - 1;
    const clauses = [];
    const sorts = [];
    let object = this.termToString(skolemize(root.subject));
    let queryVar = object;
    let allowValues = false;
    pathExpression.forEach((segment, index) => {
      // Obtain components and generate triple pattern
      const subject = object;
      const {
        predicate,
        reverse,
        sort,
        values
      } = segment; // Use fixed object values values if they were specified

      let objects;

      if (values && values.length > 0) {
        if (!allowValues) throw new Error('Specifying fixed values is not allowed here');
        objects = values.map(this.termToString);
        allowValues = false; // disallow subsequent fixed values for this predicate
      } // Otherwise, use a variable subject
      else {
          object = index < lastIndex ? this.createVar(`v${index}`, scope) : lastVar;
          objects = [object];
          allowValues = true;
        }

      clauses.push(...this.triplePatterns(subject, predicate, objects, reverse)); // If the sort option was not set, use this object as a query variable

      if (!sort) {
        queryVar = object;
      } // If sort was set, use this object as a sorting variable
      else {
          // TODO: handle when an object is used for sorting, and later also for querying
          sorts.push({
            variable: object,
            order: sort
          }); // TODO: use a descriptive lastVar in case of sorting

          object = queryVar;
        }
    });
    return {
      queryVar,
      sorts,
      clauses
    };
  } // Creates a unique query variable within the given scope, based on the suggestion


  createVar(suggestion = '', scope) {
    let counter = 0;
    let label = `?${suggestion.match(/[a-z0-9]*$/i)[0] || 'result'}`;

    if (scope) {
      suggestion = label;

      while (scope[label]) label = `${suggestion}_${counter++}`;

      scope[label] = true;
    }

    return label;
  } // Converts an RDFJS term to a string that we can use in a query


  termToString(term) {
    // Determine escaped value
    let {
      value
    } = term;
    if (NEEDS_ESCAPE.test(value)) value = value.replace(ESCAPE_ALL, escapeCharacter);

    switch (term.termType) {
      case 'NamedNode':
        return `<${value}>`;

      case 'BlankNode':
        return `_:${value}`;

      case 'Literal':
        // Determine optional language or datatype
        let suffix = '';
        if (term.language) suffix = `@${term.language}`;else if (term.datatype.value !== 'http://www.w3.org/2001/XMLSchema#string') suffix = `^^<${term.datatype.value}>`;
        return `"${value}"${suffix}`;

      default:
        throw new Error(`Could not convert a term of type ${term.termType}`);
    }
  } // Creates triple patterns for the given subject, predicate, and objects


  triplePatterns(subjectString, predicateTerm, objectStrings, reverse = false) {
    let subjectStrings = [subjectString];
    if (reverse) [subjectStrings, objectStrings] = [objectStrings, subjectStrings];
    const objects = objectStrings.join(', ');
    return subjectStrings.map(s => `${s} <${predicateTerm.value}> ${objects}.`);
  }

} // Replaces a character by its escaped version
// (borrowed from https://www.npmjs.com/package/n3)


exports.default = SparqlHandler;

function escapeCharacter(character) {
  // Replace a single character by its escaped version
  let result = ESCAPED_CHARS[character];

  if (result === undefined) {
    // Replace a single character with its 4-bit unicode escape sequence
    if (character.length === 1) {
      result = character.charCodeAt(0).toString(16);
      result = '\\u0000'.substr(0, 6 - result.length) + result;
    } // Replace a surrogate pair with its 8-bit unicode escape sequence
    else {
        result = ((character.charCodeAt(0) - 0xD800) * 0x400 + character.charCodeAt(1) + 0x2400).toString(16);
        result = '\\U00000000'.substr(0, 10 - result.length) + result;
      }
  }

  return result;
} // Skolemizes the given term if it is a blank node


let skolemId = 0;

function skolemize(term) {
  if (term.termType !== 'BlankNode') return term;
  if (!term.skolemized) term.skolemized = (0, _dataModel.namedNode)(`urn:ldflex:sk${skolemId++}`);
  return term.skolemized;
}
},{"@rdfjs/data-model":32}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Yields a function that interprets a string expression as an LDflex path.
 */
class StringToLDflexHandler {
  handle(pathData, path) {
    // Resolves the given string expression against the LDflex object
    return (expression = '', ldflex = path) => {
      // An expression starts with a property access in dot or bracket notation
      const propertyPath = expression // Add brackets around a single URL
      .replace(/^(https?:\/\/[^()[\]'"]+)$/, '["$1"]') // Add the starting dot if omitted
      .replace(/^(?=[a-z$_])/i, '.') // Add quotes inside of brackets if omitted
      .replace(/\[([^'"`\](]*)\]/g, '["$1"]'); // Create a function to evaluate the expression

      const body = `"use strict";return ldflex${propertyPath}`;
      let evaluator;

      try {
        /* eslint no-new-func: off */
        evaluator = Function('ldflex', body);
      } catch ({
        message
      }) {
        throw new Error(`Expression "${expression}" is invalid: ${message}`);
      } // Evaluate the function


      return evaluator(ldflex);
    };
  }

}

exports.default = StringToLDflexHandler;
},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a new path starting from the subject of the current path.
 *
 * Requires:
 * - (optional) a subject property on the path data
 * - (optional) a parent property on the path data
 */
class SubjectHandler {
  handle(pathData) {
    // Traverse parents until we find a subject
    let {
      subject,
      parent
    } = pathData;

    while (!subject && parent) ({
      subject,
      parent
    } = parent); // Resolve the subject if it exists,
    // and return a path starting from that subject


    return !subject ? undefined : Promise.resolve(subject).then(value => pathData.extendPath({
      subject: value
    }, null));
  }

}

exports.default = SubjectHandler;
},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Queries for all subjects of a document
 */
class SubjectsHandler {
  handle(pathData) {
    return pathData.extendPath({
      distinct: true,
      select: '?subject',
      finalClause: () => '?subject ?predicate ?object.',
      property: pathData.property
    });
  }

}

exports.default = SubjectsHandler;
},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promiseUtils = require("./promiseUtils");

var _iterableUtils = require("./iterableUtils");

/**
 * Thenable handler that resolves to either the subject
 * of the first item of the results.
 *
 * Requires:
 *  - (optional) a subject on the path data
 *  - (optional) a subject on the path proxy
 *  - (optional) results on the path proxy
 */
class ThenHandler {
  handle({
    subject,
    settings
  }, pathProxy) {
    var _settings$context;

    const defaultLanguage = settings === null || settings === void 0 ? void 0 : (_settings$context = settings.context) === null || _settings$context === void 0 ? void 0 : _settings$context['@language']; // Resolve to either the subject (zero-length path) or the first result

    return subject ? // If the subject is not a promise, it has already been resolved;
    // consumers should not resolve it, but access its properties directly.
    // This avoids infinite `then` chains when `await`ing this path.
    subject.then && (0, _promiseUtils.getThen)(() => pathProxy.subject) : // Otherwise, return the first result of this path
    (0, _promiseUtils.getThen)(() => (0, _iterableUtils.getFirstOrDefaultItem)(pathProxy.results, defaultLanguage));
  }

}

exports.default = ThenHandler;
},{"./iterableUtils":29,"./promiseUtils":30}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _valueUtils = require("./valueUtils");

/**
 * Converts an asynchronously iterable path into an array.
 *
 * Requires:
 * - (optional) an iterable path
 */
class ToArrayHandler {
  handle(pathData, path) {
    return async map => {
      const items = [];

      if ((0, _valueUtils.isAsyncIterable)(path)) {
        // Ensure the mapping function is valid
        if (typeof map !== 'function') map = item => item; // Retrieve and map all elements

        let index = 0;

        for await (const item of path) items.push((await map(item, index++)));
      }

      return items;
    };
  }

}

exports.default = ToArrayHandler;
},{"./valueUtils":31}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.termPropertyHandler = termPropertyHandler;
exports.default = void 0;

var _AsyncIteratorHandler = _interopRequireDefault(require("./AsyncIteratorHandler"));

var _DataHandler = _interopRequireDefault(require("./DataHandler"));

var _DeleteFunctionHandler = _interopRequireDefault(require("./DeleteFunctionHandler"));

var _ExecuteQueryHandler = _interopRequireDefault(require("./ExecuteQueryHandler"));

var _GetFunctionHandler = _interopRequireDefault(require("./GetFunctionHandler"));

var _InsertFunctionHandler = _interopRequireDefault(require("./InsertFunctionHandler"));

var _MutationExpressionsHandler = _interopRequireDefault(require("./MutationExpressionsHandler"));

var _PathExpressionHandler = _interopRequireDefault(require("./PathExpressionHandler"));

var _PredicateHandler = _interopRequireDefault(require("./PredicateHandler"));

var _PredicatesHandler = _interopRequireDefault(require("./PredicatesHandler"));

var _PreloadHandler = _interopRequireDefault(require("./PreloadHandler"));

var _PropertiesHandler = _interopRequireDefault(require("./PropertiesHandler"));

var _ReplaceFunctionHandler = _interopRequireDefault(require("./ReplaceFunctionHandler"));

var _SetFunctionHandler = _interopRequireDefault(require("./SetFunctionHandler"));

var _SortHandler = _interopRequireDefault(require("./SortHandler"));

var _SparqlHandler = _interopRequireDefault(require("./SparqlHandler"));

var _StringToLDflexHandler = _interopRequireDefault(require("./StringToLDflexHandler"));

var _SubjectHandler = _interopRequireDefault(require("./SubjectHandler"));

var _SubjectsHandler = _interopRequireDefault(require("./SubjectsHandler"));

var _ThenHandler = _interopRequireDefault(require("./ThenHandler"));

var _ToArrayHandler = _interopRequireDefault(require("./ToArrayHandler"));

var _valueUtils = require("./valueUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A map with default property handlers.
 */
var _default = {
  // Flag to loaders that exported paths are not ES6 modules
  __esModule: () => undefined,
  // Add thenable and async iterable behavior
  then: new _ThenHandler.default(),
  [Symbol.asyncIterator]: new _AsyncIteratorHandler.default(),
  // Add read and query functionality
  get: new _GetFunctionHandler.default(),
  subject: new _SubjectHandler.default(),
  predicate: new _PredicateHandler.default(),
  properties: new _PropertiesHandler.default(),
  predicates: new _PredicatesHandler.default(),
  pathExpression: new _PathExpressionHandler.default(),
  sparql: new _SparqlHandler.default(),
  subjects: new _SubjectsHandler.default(),
  results: new _ExecuteQueryHandler.default(),
  sort: new _SortHandler.default('ASC'),
  sortDesc: new _SortHandler.default('DESC'),
  preload: new _PreloadHandler.default(),
  // Add write functionality
  mutationExpressions: new _MutationExpressionsHandler.default(),
  add: new _InsertFunctionHandler.default(),
  set: new _SetFunctionHandler.default(),
  replace: new _ReplaceFunctionHandler.default(),
  delete: new _DeleteFunctionHandler.default(),
  // Add RDFJS term handling
  termType: termPropertyHandler('termType'),
  value: termPropertyHandler('value'),
  datatype: termPropertyHandler('datatype'),
  language: termPropertyHandler('language'),
  canonical: termPropertyHandler('canonical'),
  equals: _DataHandler.default.sync('subject', 'equals'),
  toString: _DataHandler.default.syncFunction('subject', 'value'),
  valueOf: subjectToPrimitiveHandler(),
  toPrimitive: subjectToPrimitiveHandler(),
  // Add iteration helpers
  toArray: new _ToArrayHandler.default(),
  termTypes: handler((_, path) => path.toArray(term => term.termType)),
  values: handler((_, path) => path.toArray(term => term.value)),
  datatypes: handler((_, path) => path.toArray(term => term.datatype)),
  languages: handler((_, path) => path.toArray(term => term.language)),
  // Parse a string into an LDflex object
  resolve: new _StringToLDflexHandler.default()
}; // Creates a handler from the given function

exports.default = _default;

function handler(handle) {
  return {
    handle
  };
} // Creates a handler for the given RDF/JS Term property


function termPropertyHandler(property) {
  // If a resolved subject is present,
  // behave as an RDF/JS term and synchronously expose the property;
  // otherwise, return a promise to the property value
  return handler(({
    subject
  }, path) => subject && property in subject ? subject[property] : path.then && path.then(term => term === null || term === void 0 ? void 0 : term[property]));
} // Creates a handler that converts the subject into a primitive


function subjectToPrimitiveHandler() {
  return handler(({
    subject
  }) => () => typeof (subject === null || subject === void 0 ? void 0 : subject.termType) !== 'string' ? undefined : (0, _valueUtils.termToPrimitive)(subject));
}
},{"./AsyncIteratorHandler":1,"./DataHandler":2,"./DeleteFunctionHandler":3,"./ExecuteQueryHandler":4,"./GetFunctionHandler":5,"./InsertFunctionHandler":6,"./MutationExpressionsHandler":9,"./PathExpressionHandler":11,"./PredicateHandler":14,"./PredicatesHandler":15,"./PreloadHandler":16,"./PropertiesHandler":17,"./ReplaceFunctionHandler":18,"./SetFunctionHandler":19,"./SortHandler":20,"./SparqlHandler":21,"./StringToLDflexHandler":22,"./SubjectHandler":23,"./SubjectsHandler":24,"./ThenHandler":25,"./ToArrayHandler":26,"./valueUtils":31}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AsyncIteratorHandler", {
  enumerable: true,
  get: function () {
    return _AsyncIteratorHandler.default;
  }
});
Object.defineProperty(exports, "DataHandler", {
  enumerable: true,
  get: function () {
    return _DataHandler.default;
  }
});
Object.defineProperty(exports, "DeleteFunctionHandler", {
  enumerable: true,
  get: function () {
    return _DeleteFunctionHandler.default;
  }
});
Object.defineProperty(exports, "ExecuteQueryHandler", {
  enumerable: true,
  get: function () {
    return _ExecuteQueryHandler.default;
  }
});
Object.defineProperty(exports, "InsertFunctionHandler", {
  enumerable: true,
  get: function () {
    return _InsertFunctionHandler.default;
  }
});
Object.defineProperty(exports, "JSONLDResolver", {
  enumerable: true,
  get: function () {
    return _JSONLDResolver.default;
  }
});
Object.defineProperty(exports, "LanguageResolver", {
  enumerable: true,
  get: function () {
    return _LanguageResolver.default;
  }
});
Object.defineProperty(exports, "MutationExpressionsHandler", {
  enumerable: true,
  get: function () {
    return _MutationExpressionsHandler.default;
  }
});
Object.defineProperty(exports, "MutationFunctionHandler", {
  enumerable: true,
  get: function () {
    return _MutationFunctionHandler.default;
  }
});
Object.defineProperty(exports, "PathExpressionHandler", {
  enumerable: true,
  get: function () {
    return _PathExpressionHandler.default;
  }
});
Object.defineProperty(exports, "PathFactory", {
  enumerable: true,
  get: function () {
    return _PathFactory.default;
  }
});
Object.defineProperty(exports, "PathProxy", {
  enumerable: true,
  get: function () {
    return _PathProxy.default;
  }
});
Object.defineProperty(exports, "PredicateHandler", {
  enumerable: true,
  get: function () {
    return _PredicateHandler.default;
  }
});
Object.defineProperty(exports, "PredicatesHandler", {
  enumerable: true,
  get: function () {
    return _PredicatesHandler.default;
  }
});
Object.defineProperty(exports, "PreloadHandler", {
  enumerable: true,
  get: function () {
    return _PreloadHandler.default;
  }
});
Object.defineProperty(exports, "PropertiesHandler", {
  enumerable: true,
  get: function () {
    return _PropertiesHandler.default;
  }
});
Object.defineProperty(exports, "ReplaceFunctionHandler", {
  enumerable: true,
  get: function () {
    return _ReplaceFunctionHandler.default;
  }
});
Object.defineProperty(exports, "SetFunctionHandler", {
  enumerable: true,
  get: function () {
    return _SetFunctionHandler.default;
  }
});
Object.defineProperty(exports, "SortHandler", {
  enumerable: true,
  get: function () {
    return _SortHandler.default;
  }
});
Object.defineProperty(exports, "SparqlHandler", {
  enumerable: true,
  get: function () {
    return _SparqlHandler.default;
  }
});
Object.defineProperty(exports, "StringToLDflexHandler", {
  enumerable: true,
  get: function () {
    return _StringToLDflexHandler.default;
  }
});
Object.defineProperty(exports, "SubjectHandler", {
  enumerable: true,
  get: function () {
    return _SubjectHandler.default;
  }
});
Object.defineProperty(exports, "SubjectsHandler", {
  enumerable: true,
  get: function () {
    return _SubjectsHandler.default;
  }
});
Object.defineProperty(exports, "ThenHandler", {
  enumerable: true,
  get: function () {
    return _ThenHandler.default;
  }
});
Object.defineProperty(exports, "ToArrayHandler", {
  enumerable: true,
  get: function () {
    return _ToArrayHandler.default;
  }
});
Object.defineProperty(exports, "defaultHandlers", {
  enumerable: true,
  get: function () {
    return _defaultHandlers.default;
  }
});
Object.defineProperty(exports, "getFirstItem", {
  enumerable: true,
  get: function () {
    return _iterableUtils.getFirstItem;
  }
});
Object.defineProperty(exports, "iteratorFor", {
  enumerable: true,
  get: function () {
    return _iterableUtils.iteratorFor;
  }
});
Object.defineProperty(exports, "lazyThenable", {
  enumerable: true,
  get: function () {
    return _promiseUtils.lazyThenable;
  }
});
Object.defineProperty(exports, "getThen", {
  enumerable: true,
  get: function () {
    return _promiseUtils.getThen;
  }
});
Object.defineProperty(exports, "toIterablePromise", {
  enumerable: true,
  get: function () {
    return _promiseUtils.toIterablePromise;
  }
});
Object.defineProperty(exports, "isPlainObject", {
  enumerable: true,
  get: function () {
    return _valueUtils.isPlainObject;
  }
});
Object.defineProperty(exports, "hasPlainObjectArgs", {
  enumerable: true,
  get: function () {
    return _valueUtils.hasPlainObjectArgs;
  }
});
Object.defineProperty(exports, "valueToTerm", {
  enumerable: true,
  get: function () {
    return _valueUtils.valueToTerm;
  }
});
Object.defineProperty(exports, "termToPrimitive", {
  enumerable: true,
  get: function () {
    return _valueUtils.termToPrimitive;
  }
});

var _AsyncIteratorHandler = _interopRequireDefault(require("./AsyncIteratorHandler"));

var _DataHandler = _interopRequireDefault(require("./DataHandler"));

var _DeleteFunctionHandler = _interopRequireDefault(require("./DeleteFunctionHandler"));

var _ExecuteQueryHandler = _interopRequireDefault(require("./ExecuteQueryHandler"));

var _InsertFunctionHandler = _interopRequireDefault(require("./InsertFunctionHandler"));

var _JSONLDResolver = _interopRequireDefault(require("./JSONLDResolver"));

var _LanguageResolver = _interopRequireDefault(require("./LanguageResolver"));

var _MutationExpressionsHandler = _interopRequireDefault(require("./MutationExpressionsHandler"));

var _MutationFunctionHandler = _interopRequireDefault(require("./MutationFunctionHandler"));

var _PathExpressionHandler = _interopRequireDefault(require("./PathExpressionHandler"));

var _PathFactory = _interopRequireDefault(require("./PathFactory"));

var _PathProxy = _interopRequireDefault(require("./PathProxy"));

var _PredicateHandler = _interopRequireDefault(require("./PredicateHandler"));

var _PredicatesHandler = _interopRequireDefault(require("./PredicatesHandler"));

var _PreloadHandler = _interopRequireDefault(require("./PreloadHandler"));

var _PropertiesHandler = _interopRequireDefault(require("./PropertiesHandler"));

var _ReplaceFunctionHandler = _interopRequireDefault(require("./ReplaceFunctionHandler"));

var _SetFunctionHandler = _interopRequireDefault(require("./SetFunctionHandler"));

var _SortHandler = _interopRequireDefault(require("./SortHandler"));

var _SparqlHandler = _interopRequireDefault(require("./SparqlHandler"));

var _StringToLDflexHandler = _interopRequireDefault(require("./StringToLDflexHandler"));

var _SubjectHandler = _interopRequireDefault(require("./SubjectHandler"));

var _SubjectsHandler = _interopRequireDefault(require("./SubjectsHandler"));

var _ThenHandler = _interopRequireDefault(require("./ThenHandler"));

var _ToArrayHandler = _interopRequireDefault(require("./ToArrayHandler"));

var _defaultHandlers = _interopRequireDefault(require("./defaultHandlers"));

var _iterableUtils = require("./iterableUtils");

var _promiseUtils = require("./promiseUtils");

var _valueUtils = require("./valueUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./AsyncIteratorHandler":1,"./DataHandler":2,"./DeleteFunctionHandler":3,"./ExecuteQueryHandler":4,"./InsertFunctionHandler":6,"./JSONLDResolver":7,"./LanguageResolver":8,"./MutationExpressionsHandler":9,"./MutationFunctionHandler":10,"./PathExpressionHandler":11,"./PathFactory":12,"./PathProxy":13,"./PredicateHandler":14,"./PredicatesHandler":15,"./PreloadHandler":16,"./PropertiesHandler":17,"./ReplaceFunctionHandler":18,"./SetFunctionHandler":19,"./SortHandler":20,"./SparqlHandler":21,"./StringToLDflexHandler":22,"./SubjectHandler":23,"./SubjectsHandler":24,"./ThenHandler":25,"./ToArrayHandler":26,"./defaultHandlers":27,"./iterableUtils":29,"./promiseUtils":30,"./valueUtils":31}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterableToArray = iterableToArray;
exports.getFirstItem = getFirstItem;
exports.getFirstOrDefaultItem = getFirstOrDefaultItem;
exports.iteratorFor = iteratorFor;
const done = {};
/**
 * Returns the elements of the iterable as an array
 */

async function iterableToArray(iterable) {
  const items = [];

  for await (const item of iterable) items.push(item);

  return items;
}
/**
 * Gets the first element of the iterable.
 */


function getFirstItem(iterable) {
  const iterator = iterable[Symbol.asyncIterator]();
  return iterator.next().then(item => item.value);
}
/**
 * Gets the first or the default element of the iterable.
 */


async function getFirstOrDefaultItem(iterable, defaultLanguage) {
  const iterator = iterable[Symbol.asyncIterator]();
  let returnItem = await iterator.next();
  let item = returnItem;

  while (!item.done) {
    var _item$value, _item$value$language;

    item = await iterator.next();
    const itemLanguage = (_item$value = item.value) === null || _item$value === void 0 ? void 0 : (_item$value$language = _item$value.language) === null || _item$value$language === void 0 ? void 0 : _item$value$language.toString();
    if (defaultLanguage && itemLanguage === defaultLanguage) returnItem = item;
  }

  return returnItem.value;
}
/**
 * Creates an async iterator with the item as only element.
 */


function iteratorFor(item) {
  return {
    async next() {
      if (item !== done) {
        const value = await item;
        item = done;
        return {
          value
        };
      }

      return {
        done: true
      };
    }

  };
}
},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lazyThenable = lazyThenable;
exports.getThen = getThen;
exports.toIterablePromise = toIterablePromise;
exports.memoizeIterable = memoizeIterable;

var _iterableUtils = require("./iterableUtils");

/**
 * Returns a lazy thenable to the created promise.
 */
function lazyThenable(createPromise) {
  return {
    then: getThen(createPromise)
  };
}
/**
 * Lazily returns the `then` function of the created promise.
 */


function getThen(createPromise) {
  return (onResolved, onRejected) => createPromise().then(onResolved, onRejected);
}
/**
 * Returns an iterable that is also a promise to the first element.
 */


function toIterablePromise(iterable) {
  // If called with a generator function,
  // memoize it to enable multiple iterations
  if (typeof iterable === 'function') iterable = memoizeIterable(iterable()); // Return an object that is iterable and a promise

  return {
    [Symbol.asyncIterator]() {
      return iterable[Symbol.asyncIterator]();
    },

    get then() {
      return getThen(() => (0, _iterableUtils.getFirstItem)(this));
    },

    catch(onRejected) {
      return this.then(null, onRejected);
    },

    finally(callback) {
      return this.then().finally(callback);
    }

  };
}
/**
 * Returns a memoized version of the iterable
 * that can be iterated over as many times as needed.
 */


function memoizeIterable(iterable) {
  const cache = [];
  let iterator = iterable[Symbol.asyncIterator]();
  return {
    [Symbol.asyncIterator]() {
      let i = 0;
      return {
        async next() {
          // Return the item if it has been read already
          if (i < cache.length) return cache[i++]; // Stop if there are no more items

          if (!iterator) return {
            done: true
          }; // Read and cache an item from the iterable otherwise

          const item = cache[i++] = iterator.next();
          if ((await item).done) iterator = null;
          return item;
        }

      };
    }

  };
}
},{"./iterableUtils":29}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAsyncIterable = isAsyncIterable;
exports.isPlainObject = isPlainObject;
exports.hasPlainObjectArgs = hasPlainObjectArgs;
exports.ensureArray = ensureArray;
exports.joinArrays = joinArrays;
exports.valueToTerm = valueToTerm;
exports.termToPrimitive = termToPrimitive;

var _dataModel = require("@rdfjs/data-model");

const xsd = 'http://www.w3.org/2001/XMLSchema#';
const xsdBoolean = `${xsd}boolean`;
const xsdDateTime = `${xsd}dateTime`;
const xsdDecimal = `${xsd}decimal`;
const xsdDouble = `${xsd}double`;
const xsdFloat = `${xsd}float`;
const xsdInteger = `${xsd}integer`;
const xsdBooleanTerm = (0, _dataModel.namedNode)(xsdBoolean);
const xsdDateTimeTerm = (0, _dataModel.namedNode)(xsdDateTime);
const xsdDecimalTerm = (0, _dataModel.namedNode)(xsdDecimal);
const xsdDoubleTerm = (0, _dataModel.namedNode)(xsdDouble);
const xsdIntegerTerm = (0, _dataModel.namedNode)(xsdInteger);
const xsdTrue = (0, _dataModel.literal)('true', xsdBooleanTerm);
const xsdFalse = (0, _dataModel.literal)('false', xsdBooleanTerm);
const xsdNaN = (0, _dataModel.literal)('NaN', xsdDoubleTerm);
const xsdInf = (0, _dataModel.literal)('INF', xsdDoubleTerm);
const xsdMinusInf = (0, _dataModel.literal)('-INF', xsdDoubleTerm);
const xsdPrimitives = {
  NaN,
  'INF': Infinity,
  '-INF': -Infinity
}; // Checks whether the value is asynchronously iterable

function isAsyncIterable(value) {
  return value && typeof value[Symbol.asyncIterator] === 'function';
} // Checks whether the value is an object without special meaning to LDflex


function isPlainObject(value) {
  return value !== null && // Ignore non-objects
  typeof value === 'object' && // Ignore arrays
  !Array.isArray(value) && // Ignore dates
  !(value instanceof Date) && // Ignore Promise instances
  typeof value.then !== 'function' && // Ignore RDF/JS Term instances
  typeof value.termType !== 'string' && // Ignore LDflex paths
  !isAsyncIterable(value);
} // Checks whether the arguments consist of exactly one plain object


function hasPlainObjectArgs(args, allowMultiple = false) {
  const hasPlainObject = args.some(isPlainObject);
  if (hasPlainObject && !allowMultiple && args.length !== 1) throw new Error(`Expected only 1 plain object, but got ${args.length} arguments`);
  return hasPlainObject;
} // Ensures that the value is an array


function ensureArray(value) {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
} // Joins the arrays into a single array


function joinArrays(arrays) {
  return [].concat(...arrays);
} // Ensures the value is an RDF/JS term


function valueToTerm(value) {
  switch (typeof value) {
    // strings
    case 'string':
      return (0, _dataModel.literal)(value);
    // booleans

    case 'boolean':
      return value ? xsdTrue : xsdFalse;
    // numbers

    case 'number':
      if (Number.isInteger(value)) return (0, _dataModel.literal)(value.toString(), xsdIntegerTerm);else if (Number.isFinite(value)) return (0, _dataModel.literal)(value.toString(), xsdDecimalTerm);else if (value === Infinity) return xsdInf;else if (value === -Infinity) return xsdMinusInf;
      return xsdNaN;
    // other objects

    default:
      if (value) {
        // RDF/JS Term
        if (typeof value.termType === 'string') return value; // Date

        if (value instanceof Date) return (0, _dataModel.literal)(value.toISOString(), xsdDateTimeTerm);
      }

  } // invalid objects


  throw new Error(`Invalid object: ${value}`);
} // Converts the term into a primitive value


function termToPrimitive(term) {
  const {
    termType,
    value
  } = term; // Some literals convert into specific primitive values

  if (termType === 'Literal') {
    const datatype = term.datatype.value;

    if (datatype.startsWith(xsd)) {
      switch (datatype) {
        case xsdBoolean:
          return value === 'true' || value === '1';

        case xsdInteger:
          return Number.parseInt(value, 10);

        case xsdDecimal:
          return Number.parseFloat(value);

        case xsdDouble:
        case xsdFloat:
          if (value in xsdPrimitives) return xsdPrimitives[value];
          return Number.parseFloat(value);

        case xsdDateTime:
          return new Date(Date.parse(value));

        default:
      }
    }
  } // All other nodes convert to their value


  return value;
}
},{"@rdfjs/data-model":32}],32:[function(require,module,exports){
var DataFactory = require('./lib/data-factory')

module.exports = DataFactory

},{"./lib/data-factory":34}],33:[function(require,module,exports){
function BlankNode (id) {
  this.value = id || ('b' + (++BlankNode.nextId))
}

BlankNode.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value
}

BlankNode.prototype.termType = 'BlankNode'

BlankNode.nextId = 0

module.exports = BlankNode

},{}],34:[function(require,module,exports){
var BlankNode = require('./blank-node')
var DefaultGraph = require('./default-graph')
var Literal = require('./literal')
var NamedNode = require('./named-node')
var Quad = require('./quad')
var Variable = require('./variable')

function DataFactory () {}

DataFactory.namedNode = function (value) {
  return new NamedNode(value)
}

DataFactory.blankNode = function (value) {
  return new BlankNode(value)
}

DataFactory.literal = function (value, languageOrDatatype) {
  if (typeof languageOrDatatype === 'string') {
    if (languageOrDatatype.indexOf(':') === -1) {
      return new Literal(value, languageOrDatatype)
    }

    return new Literal(value, null, DataFactory.namedNode(languageOrDatatype))
  }

  return new Literal(value, null, languageOrDatatype)
}

DataFactory.defaultGraph = function () {
  return DataFactory.defaultGraphInstance
}

DataFactory.variable = function (value) {
  return new Variable(value)
}

DataFactory.triple = function (subject, predicate, object) {
  return DataFactory.quad(subject, predicate, object)
}

DataFactory.quad = function (subject, predicate, object, graph) {
  return new Quad(subject, predicate, object, graph || DataFactory.defaultGraphInstance)
}

DataFactory.defaultGraphInstance = new DefaultGraph()

module.exports = DataFactory

},{"./blank-node":33,"./default-graph":35,"./literal":36,"./named-node":37,"./quad":38,"./variable":39}],35:[function(require,module,exports){
function DefaultGraph () {
  this.value = ''
}

DefaultGraph.prototype.equals = function (other) {
  return !!other && other.termType === this.termType
}

DefaultGraph.prototype.termType = 'DefaultGraph'

module.exports = DefaultGraph

},{}],36:[function(require,module,exports){
var NamedNode = require('./named-node')

function Literal (value, language, datatype) {
  this.value = value
  this.datatype = Literal.stringDatatype
  this.language = ''

  if (language) {
    this.language = language
    this.datatype = Literal.langStringDatatype
  } else if (datatype) {
    this.datatype = datatype
  }
}

Literal.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value &&
    other.language === this.language && other.datatype.equals(this.datatype)
}

Literal.prototype.termType = 'Literal'
Literal.langStringDatatype = new NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString')
Literal.stringDatatype = new NamedNode('http://www.w3.org/2001/XMLSchema#string')

module.exports = Literal

},{"./named-node":37}],37:[function(require,module,exports){
function NamedNode (iri) {
  this.value = iri
}

NamedNode.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value
}

NamedNode.prototype.termType = 'NamedNode'

module.exports = NamedNode

},{}],38:[function(require,module,exports){
var DefaultGraph = require('./default-graph')

function Quad (subject, predicate, object, graph) {
  this.subject = subject
  this.predicate = predicate
  this.object = object

  if (graph) {
    this.graph = graph
  } else {
    this.graph = new DefaultGraph()
  }
}

Quad.prototype.equals = function (other) {
  return !!other && other.subject.equals(this.subject) && other.predicate.equals(this.predicate) &&
    other.object.equals(this.object) && other.graph.equals(this.graph)
}

module.exports = Quad

},{"./default-graph":35}],39:[function(require,module,exports){
function Variable (name) {
  this.value = name
}

Variable.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value
}

Variable.prototype.termType = 'Variable'

module.exports = Variable

},{}],40:[function(require,module,exports){
/* jshint esversion: 6 */
/* jslint node: true */
'use strict';

module.exports = function (object) {
  return serialize(object);

  function serialize (object) {
    if (object === null || typeof object !== 'object' || object.toJSON != null) {
      return JSON.stringify(object);
    }
    if (Array.isArray(object) && object.length === 0) {
      return '[]';
    }
    if (Array.isArray(object) && object.length === 1) {
      return '[' + serialize(object[0]) + ']';
    }
    if (Array.isArray(object)) {
      return '[' + object.reduce((t, cv, ci) => {
        t = (ci === 1 ? serialize(t) : t);
        return t + ',' + serialize(cv);
      }) + ']';
    }
    const keys = Object.keys(object);
    if (keys.length === 0) {
      return '{}';
    }
    if (keys.length === 1) {
      return '{' + serialize(keys[0]) + ':' + serialize(object[keys[0]]) + '}';
    }
    return '{' + keys.sort().reduce((t, cv, ci) => {
      t = (ci === 1 ? serialize(t) + ':' + serialize(object[t]) : t);
      return t + ',' + serialize(cv) + ':' + serialize(object[cv]);
    }) + '}';
  }
};

},{}],41:[function(require,module,exports){
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":50}],42:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./lib/ContextParser"));
__export(require("./lib/ErrorCoded"));
__export(require("./lib/FetchDocumentLoader"));
__export(require("./lib/JsonLdContextNormalized"));
__export(require("./lib/Util"));

},{"./lib/ContextParser":43,"./lib/ErrorCoded":44,"./lib/FetchDocumentLoader":45,"./lib/JsonLdContextNormalized":46,"./lib/Util":47}],43:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
const relative_to_absolute_iri_1 = require("relative-to-absolute-iri");
const ErrorCoded_1 = require("./ErrorCoded");
const FetchDocumentLoader_1 = require("./FetchDocumentLoader");
const JsonLdContextNormalized_1 = require("./JsonLdContextNormalized");
const Util_1 = require("./Util");
// tslint:disable-next-line:no-var-requires
const canonicalizeJson = require('canonicalize');
/**
 * Parses JSON-LD contexts.
 */
class ContextParser {
    constructor(options) {
        options = options || {};
        this.documentLoader = options.documentLoader || new FetchDocumentLoader_1.FetchDocumentLoader();
        this.documentCache = {};
        this.validateContext = !options.skipValidation;
        this.expandContentTypeToBase = !!options.expandContentTypeToBase;
        this.remoteContextsDepthLimit = options.remoteContextsDepthLimit || 32;
    }
    /**
     * Validate the given @language value.
     * An error will be thrown if it is invalid.
     * @param value An @language value.
     * @param {boolean} strictRange If the string value should be strictly checked against a regex.
     * @param {string} errorCode The error code to emit on errors.
     * @return {boolean} If validation passed.
     *                   Can only be false if strictRange is false and the string value did not pass the regex.
     */
    static validateLanguage(value, strictRange, errorCode) {
        if (typeof value !== 'string') {
            throw new ErrorCoded_1.ErrorCoded(`The value of an '@language' must be a string, got '${JSON.stringify(value)}'`, errorCode);
        }
        if (!Util_1.Util.REGEX_LANGUAGE_TAG.test(value)) {
            if (strictRange) {
                throw new ErrorCoded_1.ErrorCoded(`The value of an '@language' must be a valid language tag, got '${JSON.stringify(value)}'`, errorCode);
            }
            else {
                return false;
            }
        }
        return true;
    }
    /**
     * Validate the given @direction value.
     * An error will be thrown if it is invalid.
     * @param value An @direction value.
     * @param {boolean} strictValues If the string value should be strictly checked against a regex.
     * @return {boolean} If validation passed.
     *                   Can only be false if strictRange is false and the string value did not pass the regex.
     */
    static validateDirection(value, strictValues) {
        if (typeof value !== 'string') {
            throw new ErrorCoded_1.ErrorCoded(`The value of an '@direction' must be a string, got '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_BASE_DIRECTION);
        }
        if (!Util_1.Util.REGEX_DIRECTION_TAG.test(value)) {
            if (strictValues) {
                throw new ErrorCoded_1.ErrorCoded(`The value of an '@direction' must be 'ltr' or 'rtl', got '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_BASE_DIRECTION);
            }
            else {
                return false;
            }
        }
        return true;
    }
    /**
     * Add an @id term for all @reverse terms.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @return {IJsonLdContextNormalizedRaw} The mutated input context.
     */
    idifyReverseTerms(context) {
        for (const key of Object.keys(context)) {
            const value = context[key];
            if (value && typeof value === 'object') {
                if (value['@reverse'] && !value['@id']) {
                    if (typeof value['@reverse'] !== 'string' || Util_1.Util.isValidKeyword(value['@reverse'])) {
                        throw new ErrorCoded_1.ErrorCoded(`Invalid @reverse value, must be absolute IRI or blank node: '${value['@reverse']}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                    }
                    value['@id'] = value['@reverse'];
                    if (Util_1.Util.isPotentialKeyword(value['@reverse'])) {
                        delete value['@reverse'];
                    }
                    else {
                        value['@reverse'] = true;
                    }
                }
            }
        }
        return context;
    }
    /**
     * Expand all prefixed terms in the given context.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @param {boolean} expandContentTypeToBase If @type inside the context may be expanded
     *                                          via @base if @vocab is set to null.
     */
    expandPrefixedTerms(context, expandContentTypeToBase) {
        const contextRaw = context.getContextRaw();
        for (const key of Object.keys(contextRaw)) {
            // Only expand allowed keys
            if (Util_1.Util.EXPAND_KEYS_BLACKLIST.indexOf(key) < 0 && !Util_1.Util.isReservedInternalKeyword(key)) {
                // Error if we try to alias a keyword to something else.
                const keyValue = contextRaw[key];
                if (Util_1.Util.isPotentialKeyword(key) && Util_1.Util.ALIAS_DOMAIN_BLACKLIST.indexOf(key) >= 0) {
                    if (key !== '@type' || typeof contextRaw[key] === 'object'
                        && !(contextRaw[key]['@protected'] || contextRaw[key]['@container'] === '@set')) {
                        throw new ErrorCoded_1.ErrorCoded(`Keywords can not be aliased to something else.
Tried mapping ${key} to ${JSON.stringify(keyValue)}`, ErrorCoded_1.ERROR_CODES.KEYWORD_REDEFINITION);
                    }
                }
                // Error if we try to alias to an illegal keyword
                if (Util_1.Util.ALIAS_RANGE_BLACKLIST.indexOf(Util_1.Util.getContextValueId(keyValue)) >= 0) {
                    throw new ErrorCoded_1.ErrorCoded(`Aliasing to certain keywords is not allowed.
Tried mapping ${key} to ${JSON.stringify(keyValue)}`, ErrorCoded_1.ERROR_CODES.INVALID_KEYWORD_ALIAS);
                }
                // Error if this term was marked as prefix as well
                if (keyValue && Util_1.Util.isPotentialKeyword(Util_1.Util.getContextValueId(keyValue))
                    && keyValue['@prefix'] === true) {
                    throw new ErrorCoded_1.ErrorCoded(`Tried to use keyword aliases as prefix: '${key}': '${JSON.stringify(keyValue)}'`, ErrorCoded_1.ERROR_CODES.INVALID_TERM_DEFINITION);
                }
                // Loop because prefixes might be nested
                while (Util_1.Util.isPrefixValue(contextRaw[key])) {
                    const value = contextRaw[key];
                    let changed = false;
                    if (typeof value === 'string') {
                        contextRaw[key] = context.expandTerm(value, true);
                        changed = changed || value !== contextRaw[key];
                    }
                    else {
                        const id = value['@id'];
                        const type = value['@type'];
                        // If @id is missing, don't allow @id to be added if @prefix: true and key not being a valid IRI.
                        const canAddIdEntry = !('@prefix' in value) || Util_1.Util.isValidIri(key);
                        if ('@id' in value) {
                            // Use @id value for expansion
                            if (id !== undefined && id !== null && typeof id === 'string') {
                                contextRaw[key]['@id'] = context.expandTerm(id, true);
                                changed = changed || id !== contextRaw[key]['@id'];
                            }
                        }
                        else if (!Util_1.Util.isPotentialKeyword(key) && canAddIdEntry) {
                            // Add an explicit @id value based on the expanded key value
                            const newId = context.expandTerm(key, true);
                            if (newId !== key) {
                                // Don't set @id if expansion failed
                                contextRaw[key]['@id'] = newId;
                                changed = true;
                            }
                        }
                        if (type && typeof type === 'string' && type !== '@vocab'
                            && (!value['@container'] || !value['@container']['@type'])
                            && canAddIdEntry) {
                            // First check @vocab, then fallback to @base
                            contextRaw[key]['@type'] = context.expandTerm(type, true);
                            if (expandContentTypeToBase && type === contextRaw[key]['@type']) {
                                contextRaw[key]['@type'] = context.expandTerm(type, false);
                            }
                            changed = changed || type !== contextRaw[key]['@type'];
                        }
                    }
                    if (!changed) {
                        break;
                    }
                }
            }
        }
    }
    /**
     * Normalize the @language entries in the given context to lowercase.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @param {IParseOptions} parseOptions The parsing options.
     */
    normalize(context, { processingMode, normalizeLanguageTags }) {
        // Lowercase language keys in 1.0
        if (normalizeLanguageTags || processingMode === 1.0) {
            for (const key of Object.keys(context)) {
                if (key === '@language' && typeof context[key] === 'string') {
                    context[key] = context[key].toLowerCase();
                }
                else {
                    const value = context[key];
                    if (value && typeof value === 'object') {
                        if (typeof value['@language'] === 'string') {
                            value['@language'] = value['@language'].toLowerCase();
                        }
                    }
                }
            }
        }
    }
    /**
     * Convert all @container strings and array values to hash-based values.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     */
    containersToHash(context) {
        for (const key of Object.keys(context)) {
            const value = context[key];
            if (value && typeof value === 'object') {
                if (typeof value['@container'] === 'string') {
                    value['@container'] = { [value['@container']]: true };
                }
                else if (Array.isArray(value['@container'])) {
                    const newValue = {};
                    for (const containerValue of value['@container']) {
                        newValue[containerValue] = true;
                    }
                    value['@container'] = newValue;
                }
            }
        }
    }
    /**
     * Normalize and apply context-levevl @protected terms onto each term separately.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @param {number} processingMode The processing mode.
     */
    applyScopedProtected(context, { processingMode }) {
        if (processingMode && processingMode >= 1.1) {
            if (context['@protected']) {
                for (const key of Object.keys(context)) {
                    if (Util_1.Util.isReservedInternalKeyword(key)) {
                        continue;
                    }
                    if (!Util_1.Util.isPotentialKeyword(key) && !Util_1.Util.isTermProtected(context, key)) {
                        const value = context[key];
                        if (value && typeof value === 'object') {
                            if (!('@protected' in context[key])) {
                                // Mark terms with object values as protected if they don't have an @protected: false annotation
                                context[key]['@protected'] = true;
                            }
                        }
                        else {
                            // Convert string-based term values to object-based values with @protected: true
                            context[key] = {
                                '@id': value,
                                '@protected': true,
                            };
                        }
                    }
                }
                delete context['@protected'];
            }
        }
    }
    /**
     * Check if the given context inheritance does not contain any overrides of protected terms.
     * @param {IJsonLdContextNormalizedRaw} contextBefore The context that may contain some protected terms.
     * @param {IJsonLdContextNormalizedRaw} contextAfter A new context that is being applied on the first one.
     * @param {IExpandOptions} expandOptions Options that are needed for any expansions during this validation.
     */
    validateKeywordRedefinitions(contextBefore, contextAfter, expandOptions) {
        for (const key of Object.keys(contextAfter)) {
            if (Util_1.Util.isTermProtected(contextBefore, key)) {
                // The entry in the context before will always be in object-mode
                // If the new entry is in string-mode, convert it to object-mode
                // before checking if it is identical.
                if (typeof contextAfter[key] === 'string') {
                    const isPrefix = Util_1.Util.isSimpleTermDefinitionPrefix(contextAfter[key], expandOptions);
                    contextAfter[key] = { '@id': contextAfter[key] };
                    // If the simple term def was a prefix, explicitly mark the term as a prefix in the expanded term definition,
                    // because otherwise we loose this information due to JSON-LD interpreting prefixes differently
                    // in simple vs expanded term definitions.
                    if (isPrefix) {
                        contextAfter[key]['@prefix'] = true;
                        contextBefore[key]['@prefix'] = true; // Also on before, to make sure the next step still considers them ==
                    }
                }
                // Convert term values to strings for each comparison
                const valueBefore = canonicalizeJson(contextBefore[key]);
                // We modify this deliberately,
                // as we need it for the value comparison (they must be identical modulo '@protected')),
                // and for the fact that this new value will override the first one.
                contextAfter[key]['@protected'] = true;
                const valueAfter = canonicalizeJson(contextAfter[key]);
                // Error if they are not identical
                if (valueBefore !== valueAfter) {
                    throw new ErrorCoded_1.ErrorCoded(`Attempted to override the protected keyword ${key} from ${JSON.stringify(Util_1.Util.getContextValueId(contextBefore[key]))} to ${JSON.stringify(Util_1.Util.getContextValueId(contextAfter[key]))}`, ErrorCoded_1.ERROR_CODES.PROTECTED_TERM_REDEFINITION);
                }
            }
        }
    }
    /**
     * Validate the entries of the given context.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @param {IParseOptions} options The parse options.
     */
    validate(context, { processingMode }) {
        for (const key of Object.keys(context)) {
            // Ignore reserved internal keywords.
            if (Util_1.Util.isReservedInternalKeyword(key)) {
                continue;
            }
            // Do not allow empty term
            if (key === '') {
                throw new ErrorCoded_1.ErrorCoded(`The empty term is not allowed, got: '${key}': '${JSON.stringify(context[key])}'`, ErrorCoded_1.ERROR_CODES.INVALID_TERM_DEFINITION);
            }
            const value = context[key];
            const valueType = typeof value;
            // First check if the key is a keyword
            if (Util_1.Util.isPotentialKeyword(key)) {
                switch (key.substr(1)) {
                    case 'vocab':
                        if (value !== null && valueType !== 'string') {
                            throw new ErrorCoded_1.ErrorCoded(`Found an invalid @vocab IRI: ${value}`, ErrorCoded_1.ERROR_CODES.INVALID_VOCAB_MAPPING);
                        }
                        break;
                    case 'base':
                        if (value !== null && valueType !== 'string') {
                            throw new ErrorCoded_1.ErrorCoded(`Found an invalid @base IRI: ${context[key]}`, ErrorCoded_1.ERROR_CODES.INVALID_BASE_IRI);
                        }
                        break;
                    case 'language':
                        if (value !== null) {
                            ContextParser.validateLanguage(value, true, ErrorCoded_1.ERROR_CODES.INVALID_DEFAULT_LANGUAGE);
                        }
                        break;
                    case 'version':
                        if (value !== null && valueType !== 'number') {
                            throw new ErrorCoded_1.ErrorCoded(`Found an invalid @version number: ${value}`, ErrorCoded_1.ERROR_CODES.INVALID_VERSION_VALUE);
                        }
                        break;
                    case 'direction':
                        if (value !== null) {
                            ContextParser.validateDirection(value, true);
                        }
                        break;
                    case 'propagate':
                        if (processingMode === 1.0) {
                            throw new ErrorCoded_1.ErrorCoded(`Found an illegal @propagate keyword: ${value}`, ErrorCoded_1.ERROR_CODES.INVALID_CONTEXT_ENTRY);
                        }
                        if (value !== null && valueType !== 'boolean') {
                            throw new ErrorCoded_1.ErrorCoded(`Found an invalid @propagate value: ${value}`, ErrorCoded_1.ERROR_CODES.INVALID_PROPAGATE_VALUE);
                        }
                        break;
                }
                // Don't allow keywords to be overridden
                if (Util_1.Util.isValidKeyword(key) && Util_1.Util.isValidKeyword(Util_1.Util.getContextValueId(value))) {
                    throw new ErrorCoded_1.ErrorCoded(`Illegal keyword alias in term value, found: '${key}': '${Util_1.Util
                        .getContextValueId(value)}'`, ErrorCoded_1.ERROR_CODES.KEYWORD_REDEFINITION);
                }
                continue;
            }
            // Otherwise, consider the key a term
            if (value !== null) {
                switch (valueType) {
                    case 'string':
                        if (Util_1.Util.getPrefix(value, context) === key) {
                            throw new ErrorCoded_1.ErrorCoded(`Detected cyclical IRI mapping in context entry: '${key}': '${JSON
                                .stringify(value)}'`, ErrorCoded_1.ERROR_CODES.CYCLIC_IRI_MAPPING);
                        }
                        if (Util_1.Util.isValidIriWeak(key)) {
                            if (value === '@type') {
                                throw new ErrorCoded_1.ErrorCoded(`IRIs can not be mapped to @type, found: '${key}': '${value}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                            }
                            else if (Util_1.Util.isValidIri(value) && value !== new JsonLdContextNormalized_1.JsonLdContextNormalized(context).expandTerm(key)) {
                                throw new ErrorCoded_1.ErrorCoded(`IRIs can not be mapped to other IRIs, found: '${key}': '${value}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                            }
                        }
                        break;
                    case 'object':
                        if (!Util_1.Util.isCompactIri(key) && !('@id' in value)
                            && (value['@type'] === '@id' ? !context['@base'] : !context['@vocab'])) {
                            throw new ErrorCoded_1.ErrorCoded(`Missing @id in context entry: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                        }
                        for (const objectKey of Object.keys(value)) {
                            const objectValue = value[objectKey];
                            if (!objectValue) {
                                continue;
                            }
                            switch (objectKey) {
                                case '@id':
                                    if (Util_1.Util.isValidKeyword(objectValue)
                                        && objectValue !== '@type' && objectValue !== '@id' && objectValue !== '@graph') {
                                        throw new ErrorCoded_1.ErrorCoded(`Illegal keyword alias in term value, found: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                                    }
                                    if (Util_1.Util.isValidIriWeak(key)) {
                                        if (objectValue === '@type') {
                                            throw new ErrorCoded_1.ErrorCoded(`IRIs can not be mapped to @type, found: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                                        }
                                        else if (Util_1.Util.isValidIri(objectValue)
                                            && objectValue !== new JsonLdContextNormalized_1.JsonLdContextNormalized(context).expandTerm(key)) {
                                            throw new ErrorCoded_1.ErrorCoded(`IRIs can not be mapped to other IRIs, found: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                                        }
                                    }
                                    if (typeof objectValue !== 'string') {
                                        throw new ErrorCoded_1.ErrorCoded(`Detected non-string @id in context entry: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
                                    }
                                    if (Util_1.Util.getPrefix(objectValue, context) === key) {
                                        throw new ErrorCoded_1.ErrorCoded(`Detected cyclical IRI mapping in context entry: '${key}': '${JSON
                                            .stringify(value)}'`, ErrorCoded_1.ERROR_CODES.CYCLIC_IRI_MAPPING);
                                    }
                                    break;
                                case '@type':
                                    if (value['@container'] === '@type' && objectValue !== '@id' && objectValue !== '@vocab') {
                                        throw new ErrorCoded_1.ErrorCoded(`@container: @type only allows @type: @id or @vocab, but got: '${key}': '${objectValue}'`, ErrorCoded_1.ERROR_CODES.INVALID_TYPE_MAPPING);
                                    }
                                    if (objectValue !== '@id' && objectValue !== '@vocab'
                                        && (processingMode === 1.0 || objectValue !== '@json')
                                        && (processingMode === 1.0 || objectValue !== '@none')
                                        && (objectValue[0] === '_' || !Util_1.Util.isValidIri(objectValue))) {
                                        throw new ErrorCoded_1.ErrorCoded(`A context @type must be an absolute IRI, found: '${key}': '${objectValue}'`, ErrorCoded_1.ERROR_CODES.INVALID_TYPE_MAPPING);
                                    }
                                    break;
                                case '@reverse':
                                    if (typeof objectValue === 'string' && value['@id'] && value['@id'] !== objectValue) {
                                        throw new ErrorCoded_1.ErrorCoded(`Found non-matching @id and @reverse term values in '${key}':\
'${objectValue}' and '${value['@id']}'`, ErrorCoded_1.ERROR_CODES.INVALID_REVERSE_PROPERTY);
                                    }
                                    if ('@nest' in value) {
                                        throw new ErrorCoded_1.ErrorCoded(`@nest is not allowed in the reverse property '${key}'`, ErrorCoded_1.ERROR_CODES.INVALID_REVERSE_PROPERTY);
                                    }
                                    break;
                                case '@container':
                                    if (processingMode === 1.0) {
                                        if (Object.keys(objectValue).length > 1
                                            || Util_1.Util.CONTAINERS_1_0.indexOf(Object.keys(objectValue)[0]) < 0) {
                                            throw new ErrorCoded_1.ErrorCoded(`Invalid term @container for '${key}' ('${Object.keys(objectValue)}') in 1.0, \
must be only one of ${Util_1.Util.CONTAINERS_1_0.join(', ')}`, ErrorCoded_1.ERROR_CODES.INVALID_CONTAINER_MAPPING);
                                        }
                                    }
                                    for (const containerValue of Object.keys(objectValue)) {
                                        if (containerValue === '@list' && value['@reverse']) {
                                            throw new ErrorCoded_1.ErrorCoded(`Term value can not be @container: @list and @reverse at the same time on '${key}'`, ErrorCoded_1.ERROR_CODES.INVALID_REVERSE_PROPERTY);
                                        }
                                        if (Util_1.Util.CONTAINERS.indexOf(containerValue) < 0) {
                                            throw new ErrorCoded_1.ErrorCoded(`Invalid term @container for '${key}' ('${containerValue}'), \
must be one of ${Util_1.Util.CONTAINERS.join(', ')}`, ErrorCoded_1.ERROR_CODES.INVALID_CONTAINER_MAPPING);
                                        }
                                    }
                                    break;
                                case '@language':
                                    ContextParser.validateLanguage(objectValue, true, ErrorCoded_1.ERROR_CODES.INVALID_LANGUAGE_MAPPING);
                                    break;
                                case '@direction':
                                    ContextParser.validateDirection(objectValue, true);
                                    break;
                                case '@prefix':
                                    if (objectValue !== null && typeof objectValue !== 'boolean') {
                                        throw new ErrorCoded_1.ErrorCoded(`Found an invalid term @prefix boolean in: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_PREFIX_VALUE);
                                    }
                                    if (!('@id' in value) && !Util_1.Util.isValidIri(key)) {
                                        throw new ErrorCoded_1.ErrorCoded(`Invalid @prefix definition for '${key}' ('${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_TERM_DEFINITION);
                                    }
                                    break;
                                case '@index':
                                    if (processingMode === 1.0 || !value['@container'] || !value['@container']['@index']) {
                                        throw new ErrorCoded_1.ErrorCoded(`Attempt to add illegal key to value object: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_TERM_DEFINITION);
                                    }
                                    break;
                                case '@nest':
                                    if (Util_1.Util.isPotentialKeyword(objectValue) && objectValue !== '@nest') {
                                        throw new ErrorCoded_1.ErrorCoded(`Found an invalid term @nest value in: '${key}': '${JSON.stringify(value)}'`, ErrorCoded_1.ERROR_CODES.INVALID_NEST_VALUE);
                                    }
                            }
                        }
                        break;
                    default:
                        throw new ErrorCoded_1.ErrorCoded(`Found an invalid term value: '${key}': '${value}'`, ErrorCoded_1.ERROR_CODES.INVALID_TERM_DEFINITION);
                }
            }
        }
    }
    /**
     * Apply the @base context entry to the given context under certain circumstances.
     * @param context A context.
     * @param options Parsing options.
     * @param inheritFromParent If the @base value from the parent context can be inherited.
     * @return The given context.
     */
    applyBaseEntry(context, options, inheritFromParent) {
        // In some special cases, this can be a string, so ignore those.
        if (typeof context === 'string') {
            return context;
        }
        // Give priority to @base in the parent context
        if (inheritFromParent && !('@base' in context) && options.parentContext && '@base' in options.parentContext) {
            context['@base'] = options.parentContext['@base'];
            if (options.parentContext['@__baseDocument']) {
                context['@__baseDocument'] = true;
            }
        }
        // Override the base IRI if provided.
        if (options.baseIRI && !options.external) {
            if (!('@base' in context)) {
                // The context base is the document base
                context['@base'] = options.baseIRI;
                context['@__baseDocument'] = true;
            }
            else if (context['@base'] !== null && typeof context['@base'] === 'string'
                && !Util_1.Util.isValidIri(context['@base'])) {
                // The context base is relative to the document base
                context['@base'] = relative_to_absolute_iri_1.resolve(context['@base'], options.parentContext && options.parentContext['@base'] || options.baseIRI);
            }
        }
        return context;
    }
    /**
     * Resolve relative context IRIs, or return full IRIs as-is.
     * @param {string} contextIri A context IRI.
     * @param {string} baseIRI A base IRI.
     * @return {string} The normalized context IRI.
     */
    normalizeContextIri(contextIri, baseIRI) {
        if (!Util_1.Util.isValidIri(contextIri)) {
            contextIri = relative_to_absolute_iri_1.resolve(contextIri, baseIRI);
            if (!Util_1.Util.isValidIri(contextIri)) {
                throw new Error(`Invalid context IRI: ${contextIri}`);
            }
        }
        return contextIri;
    }
    /**
     * Parse scoped contexts in the given context.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @param {IParseOptions} options Parsing options.
     * @return {IJsonLdContextNormalizedRaw} The mutated input context.
     */
    parseInnerContexts(context, options) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const key of Object.keys(context)) {
                const value = context[key];
                if (value && typeof value === 'object') {
                    if ('@context' in value && value['@context'] !== null) {
                        // Simulate a processing based on the parent context to check if there are any (potential errors).
                        // Honestly, I find it a bit weird to do this here, as the context may be unused,
                        // and the final effective context may differ based on any other embedded/scoped contexts.
                        // But hey, it's part of the spec, so we have no choice...
                        // https://w3c.github.io/json-ld-api/#h-note-10
                        if (this.validateContext) {
                            try {
                                const parentContext = Object.assign({}, context);
                                parentContext[key] = Object.assign({}, parentContext[key]);
                                delete parentContext[key]['@context'];
                                yield this.parse(value['@context'], Object.assign({}, options, { parentContext, ignoreProtection: true, ignoreRemoteScopedContexts: true }));
                            }
                            catch (e) {
                                throw new ErrorCoded_1.ErrorCoded(e.message, ErrorCoded_1.ERROR_CODES.INVALID_SCOPED_CONTEXT);
                            }
                        }
                        value['@context'] = (yield this.parse(value['@context'], Object.assign({}, options, { minimalProcessing: true, ignoreRemoteScopedContexts: true, parentContext: context })))
                            .getContextRaw();
                    }
                }
            }
            return context;
        });
    }
    /**
     * Parse a JSON-LD context in any form.
     * @param {JsonLdContext} context A context, URL to a context, or an array of contexts/URLs.
     * @param {IParseOptions} options Optional parsing options.
     * @return {Promise<JsonLdContextNormalized>} A promise resolving to the context.
     */
    parse(context, options = {
        processingMode: ContextParser.DEFAULT_PROCESSING_MODE,
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { baseIRI, parentContext: parentContextInitial, external, processingMode, normalizeLanguageTags, ignoreProtection, minimalProcessing, } = options;
            let parentContext = parentContextInitial;
            const remoteContexts = options.remoteContexts || {};
            // Avoid remote context overflows
            if (Object.keys(remoteContexts).length >= this.remoteContextsDepthLimit) {
                throw new ErrorCoded_1.ErrorCoded('Detected an overflow in remote context inclusions: ' + Object.keys(remoteContexts), ErrorCoded_1.ERROR_CODES.CONTEXT_OVERFLOW);
            }
            if (context === null || context === undefined) {
                // Don't allow context nullification and there are protected terms
                if (!ignoreProtection && parentContext && Util_1.Util.hasProtectedTerms(parentContext)) {
                    throw new ErrorCoded_1.ErrorCoded('Illegal context nullification when terms are protected', ErrorCoded_1.ERROR_CODES.INVALID_CONTEXT_NULLIFICATION);
                }
                // Context that are explicitly set to null are empty.
                return new JsonLdContextNormalized_1.JsonLdContextNormalized(this.applyBaseEntry({}, options, false));
            }
            else if (typeof context === 'string') {
                const contextIri = this.normalizeContextIri(context, baseIRI);
                const overriddenLoad = this.getOverriddenLoad(contextIri, options);
                if (overriddenLoad) {
                    return new JsonLdContextNormalized_1.JsonLdContextNormalized(overriddenLoad);
                }
                const parsedStringContext = yield this.parse(yield this.load(contextIri), Object.assign({}, options, { baseIRI: contextIri, external: true, remoteContexts: Object.assign({}, remoteContexts, { [contextIri]: true }) }));
                this.applyBaseEntry(parsedStringContext.getContextRaw(), options, true);
                return parsedStringContext;
            }
            else if (Array.isArray(context)) {
                // As a performance consideration, first load all external contexts in parallel.
                const contextIris = [];
                const contexts = yield Promise.all(context.map((subContext, i) => {
                    if (typeof subContext === 'string') {
                        const contextIri = this.normalizeContextIri(subContext, baseIRI);
                        contextIris[i] = contextIri;
                        const overriddenLoad = this.getOverriddenLoad(contextIri, options);
                        if (overriddenLoad) {
                            return overriddenLoad;
                        }
                        return this.load(contextIri);
                    }
                    else {
                        return subContext;
                    }
                }));
                // Don't apply inheritance logic on minimal processing
                if (minimalProcessing) {
                    return new JsonLdContextNormalized_1.JsonLdContextNormalized(contexts);
                }
                const reducedContexts = yield contexts.reduce((accContextPromise, contextEntry, i) => accContextPromise
                    .then((accContext) => this.parse(contextEntry, Object.assign({}, options, { baseIRI: contextIris[i] || options.baseIRI, external: !!contextIris[i] || options.external, parentContext: accContext.getContextRaw(), remoteContexts: contextIris[i] ? Object.assign({}, remoteContexts, { [contextIris[i]]: true }) : remoteContexts }))), Promise.resolve(new JsonLdContextNormalized_1.JsonLdContextNormalized(parentContext || {})));
                // Override the base IRI if provided.
                this.applyBaseEntry(reducedContexts.getContextRaw(), options, true);
                return reducedContexts;
            }
            else if (typeof context === 'object') {
                if ('@context' in context) {
                    return yield this.parse(context['@context'], options);
                }
                // Make a deep clone of the given context, to avoid modifying it.
                context = JSON.parse(JSON.stringify(context)); // No better way in JS at the moment.
                if (parentContext) {
                    parentContext = JSON.parse(JSON.stringify(parentContext));
                }
                // We have an actual context object.
                let newContext = {};
                // According to the JSON-LD spec, @base must be ignored from external contexts.
                if (external) {
                    delete context['@base'];
                }
                // Override the base IRI if provided.
                this.applyBaseEntry(context, options, true);
                // Hashify container entries
                // Do this before protected term validation as that influences term format
                this.containersToHash(context);
                // Don't perform any other modifications if only minimal processing is needed.
                if (minimalProcessing) {
                    return new JsonLdContextNormalized_1.JsonLdContextNormalized(context);
                }
                // In JSON-LD 1.1, load @import'ed context prior to processing.
                let importContext = {};
                if ('@import' in context) {
                    if (processingMode && processingMode >= 1.1) {
                        // Only accept string values
                        if (typeof context['@import'] !== 'string') {
                            throw new ErrorCoded_1.ErrorCoded('An @import value must be a string, but got ' + typeof context['@import'], ErrorCoded_1.ERROR_CODES.INVALID_IMPORT_VALUE);
                        }
                        // Load context
                        importContext = yield this.loadImportContext(this.normalizeContextIri(context['@import'], baseIRI));
                        delete context['@import'];
                    }
                    else {
                        throw new ErrorCoded_1.ErrorCoded('Context importing is not supported in JSON-LD 1.0', ErrorCoded_1.ERROR_CODES.INVALID_CONTEXT_ENTRY);
                    }
                }
                // Merge different parts of the final context in order
                newContext = Object.assign({}, newContext, parentContext, importContext, context);
                const newContextWrapped = new JsonLdContextNormalized_1.JsonLdContextNormalized(newContext);
                // Parse inner contexts with minimal processing
                yield this.parseInnerContexts(newContext, options);
                // In JSON-LD 1.1, check if we are not redefining any protected keywords
                if (!ignoreProtection && parentContext && processingMode && processingMode >= 1.1) {
                    this.validateKeywordRedefinitions(parentContext, newContext, exports.defaultExpandOptions);
                }
                // In JSON-LD 1.1, @vocab can be relative to @vocab in the parent context.
                if ((newContext && newContext['@version'] || processingMode || ContextParser.DEFAULT_PROCESSING_MODE) >= 1.1
                    && ((context['@vocab'] && typeof context['@vocab'] === 'string') || context['@vocab'] === '')
                    && context['@vocab'].indexOf(':') < 0 && parentContext && '@vocab' in parentContext) {
                    newContext['@vocab'] = parentContext['@vocab'] + context['@vocab'];
                }
                this.idifyReverseTerms(newContext);
                this.expandPrefixedTerms(newContextWrapped, this.expandContentTypeToBase);
                this.normalize(newContext, { processingMode, normalizeLanguageTags });
                this.applyScopedProtected(newContext, { processingMode });
                if (this.validateContext) {
                    this.validate(newContext, { processingMode });
                }
                return newContextWrapped;
            }
            else {
                throw new ErrorCoded_1.ErrorCoded(`Tried parsing a context that is not a string, array or object, but got ${context}`, ErrorCoded_1.ERROR_CODES.INVALID_LOCAL_CONTEXT);
            }
        });
    }
    /**
     * Fetch the given URL as a raw JSON-LD context.
     * @param url An URL.
     * @return A promise resolving to a raw JSON-LD context.
     */
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // First try to retrieve the context from cache
            const cached = this.documentCache[url];
            if (cached) {
                return typeof cached === 'string' ? cached : Array.isArray(cached) ? cached.slice() : Object.assign({}, cached);
            }
            // If not in cache, load it
            let document;
            try {
                document = yield this.documentLoader.load(url);
            }
            catch (e) {
                throw new ErrorCoded_1.ErrorCoded(`Failed to load remote context ${url}: ${e.message}`, ErrorCoded_1.ERROR_CODES.LOADING_REMOTE_CONTEXT_FAILED);
            }
            // Validate the context
            if (!('@context' in document)) {
                throw new ErrorCoded_1.ErrorCoded(`Missing @context in remote context at ${url}`, ErrorCoded_1.ERROR_CODES.INVALID_REMOTE_CONTEXT);
            }
            return this.documentCache[url] = document['@context'];
        });
    }
    /**
     * Override the given context that may be loaded.
     *
     * This will check whether or not the url is recursively being loaded.
     * @param url An URL.
     * @param options Parsing options.
     * @return An overridden context, or null.
     *         Optionally an error can be thrown if a cyclic context is detected.
     */
    getOverriddenLoad(url, options) {
        if (url in (options.remoteContexts || {})) {
            if (options.ignoreRemoteScopedContexts) {
                return url;
            }
            else {
                throw new ErrorCoded_1.ErrorCoded('Detected a cyclic context inclusion of ' + url, ErrorCoded_1.ERROR_CODES.RECURSIVE_CONTEXT_INCLUSION);
            }
        }
        return null;
    }
    /**
     * Load an @import'ed context.
     * @param importContextIri The full URI of an @import value.
     */
    loadImportContext(importContextIri) {
        return __awaiter(this, void 0, void 0, function* () {
            // Load the context
            const importContext = yield this.load(importContextIri);
            // Require the context to be a non-array object
            if (typeof importContext !== 'object' || Array.isArray(importContext)) {
                throw new ErrorCoded_1.ErrorCoded('An imported context must be a single object: ' + importContextIri, ErrorCoded_1.ERROR_CODES.INVALID_REMOTE_CONTEXT);
            }
            // Error if the context contains another @import
            if ('@import' in importContext) {
                throw new ErrorCoded_1.ErrorCoded('An imported context can not import another context: ' + importContextIri, ErrorCoded_1.ERROR_CODES.INVALID_CONTEXT_ENTRY);
            }
            return importContext;
        });
    }
}
ContextParser.DEFAULT_PROCESSING_MODE = 1.1;
exports.ContextParser = ContextParser;
exports.defaultExpandOptions = {
    allowPrefixForcing: true,
    allowPrefixNonGenDelims: false,
    allowVocabRelativeToBase: true,
};

},{"./ErrorCoded":44,"./FetchDocumentLoader":45,"./JsonLdContextNormalized":46,"./Util":47,"canonicalize":40,"isomorphic-fetch":41,"relative-to-absolute-iri":48}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An error that has a certain error code.
 *
 * The error code can be any string.
 * All standardized error codes are listed in {@link ERROR_CODES}.
 */
class ErrorCoded extends Error {
    /* istanbul ignore next */
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.ErrorCoded = ErrorCoded;
/**
 * All standardized JSON-LD error codes.
 * @see https://w3c.github.io/json-ld-api/#dom-jsonlderrorcode
 */
// tslint:disable:object-literal-sort-keys
var ERROR_CODES;
(function (ERROR_CODES) {
    ERROR_CODES["COLLIDING_KEYWORDS"] = "colliding keywords";
    ERROR_CODES["CONFLICTING_INDEXES"] = "conflicting indexes";
    ERROR_CODES["CYCLIC_IRI_MAPPING"] = "cyclic IRI mapping";
    ERROR_CODES["INVALID_ID_VALUE"] = "invalid @id value";
    ERROR_CODES["INVALID_INDEX_VALUE"] = "invalid @index value";
    ERROR_CODES["INVALID_NEST_VALUE"] = "invalid @nest value";
    ERROR_CODES["INVALID_PREFIX_VALUE"] = "invalid @prefix value";
    ERROR_CODES["INVALID_PROPAGATE_VALUE"] = "invalid @propagate value";
    ERROR_CODES["INVALID_REVERSE_VALUE"] = "invalid @reverse value";
    ERROR_CODES["INVALID_IMPORT_VALUE"] = "invalid @import value";
    ERROR_CODES["INVALID_VERSION_VALUE"] = "invalid @version value";
    ERROR_CODES["INVALID_BASE_IRI"] = "invalid base IRI";
    ERROR_CODES["INVALID_CONTAINER_MAPPING"] = "invalid container mapping";
    ERROR_CODES["INVALID_CONTEXT_ENTRY"] = "invalid context entry";
    ERROR_CODES["INVALID_CONTEXT_NULLIFICATION"] = "invalid context nullification";
    ERROR_CODES["INVALID_DEFAULT_LANGUAGE"] = "invalid default language";
    ERROR_CODES["INVALID_INCLUDED_VALUE"] = "invalid @included value";
    ERROR_CODES["INVALID_IRI_MAPPING"] = "invalid IRI mapping";
    ERROR_CODES["INVALID_JSON_LITERAL"] = "invalid JSON literal";
    ERROR_CODES["INVALID_KEYWORD_ALIAS"] = "invalid keyword alias";
    ERROR_CODES["INVALID_LANGUAGE_MAP_VALUE"] = "invalid language map value";
    ERROR_CODES["INVALID_LANGUAGE_MAPPING"] = "invalid language mapping";
    ERROR_CODES["INVALID_LANGUAGE_TAGGED_STRING"] = "invalid language-tagged string";
    ERROR_CODES["INVALID_LANGUAGE_TAGGED_VALUE"] = "invalid language-tagged value";
    ERROR_CODES["INVALID_LOCAL_CONTEXT"] = "invalid local context";
    ERROR_CODES["INVALID_REMOTE_CONTEXT"] = "invalid remote context";
    ERROR_CODES["INVALID_REVERSE_PROPERTY"] = "invalid reverse property";
    ERROR_CODES["INVALID_REVERSE_PROPERTY_MAP"] = "invalid reverse property map";
    ERROR_CODES["INVALID_REVERSE_PROPERTY_VALUE"] = "invalid reverse property value";
    ERROR_CODES["INVALID_SCOPED_CONTEXT"] = "invalid scoped context";
    ERROR_CODES["INVALID_SCRIPT_ELEMENT"] = "invalid script element";
    ERROR_CODES["INVALID_SET_OR_LIST_OBJECT"] = "invalid set or list object";
    ERROR_CODES["INVALID_TERM_DEFINITION"] = "invalid term definition";
    ERROR_CODES["INVALID_TYPE_MAPPING"] = "invalid type mapping";
    ERROR_CODES["INVALID_TYPE_VALUE"] = "invalid type value";
    ERROR_CODES["INVALID_TYPED_VALUE"] = "invalid typed value";
    ERROR_CODES["INVALID_VALUE_OBJECT"] = "invalid value object";
    ERROR_CODES["INVALID_VALUE_OBJECT_VALUE"] = "invalid value object value";
    ERROR_CODES["INVALID_VOCAB_MAPPING"] = "invalid vocab mapping";
    ERROR_CODES["IRI_CONFUSED_WITH_PREFIX"] = "IRI confused with prefix";
    ERROR_CODES["KEYWORD_REDEFINITION"] = "keyword redefinition";
    ERROR_CODES["LOADING_DOCUMENT_FAILED"] = "loading document failed";
    ERROR_CODES["LOADING_REMOTE_CONTEXT_FAILED"] = "loading remote context failed";
    ERROR_CODES["MULTIPLE_CONTEXT_LINK_HEADERS"] = "multiple context link headers";
    ERROR_CODES["PROCESSING_MODE_CONFLICT"] = "processing mode conflict";
    ERROR_CODES["PROTECTED_TERM_REDEFINITION"] = "protected term redefinition";
    ERROR_CODES["CONTEXT_OVERFLOW"] = "context overflow";
    ERROR_CODES["INVALID_BASE_DIRECTION"] = "invalid base direction";
    ERROR_CODES["RECURSIVE_CONTEXT_INCLUSION"] = "recursive context inclusion";
    ERROR_CODES["INVALID_STREAMING_KEY_ORDER"] = "invalid streaming key order";
})(ERROR_CODES = exports.ERROR_CODES || (exports.ERROR_CODES = {}));

},{}],45:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
/**
 * Loads documents via the fetch API.
 */
class FetchDocumentLoader {
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { headers: { accept: 'application/ld+json' } });
            if (response.ok) {
                return (yield response.json());
            }
            else {
                throw new Error(response.statusText || `${response.status}`);
            }
        });
    }
}
exports.FetchDocumentLoader = FetchDocumentLoader;

},{"isomorphic-fetch":41}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relative_to_absolute_iri_1 = require("relative-to-absolute-iri");
const ContextParser_1 = require("./ContextParser");
const ErrorCoded_1 = require("./ErrorCoded");
const Util_1 = require("./Util");
/**
 * A class exposing operations over a normalized JSON-LD context.
 */
class JsonLdContextNormalized {
    constructor(contextRaw) {
        this.contextRaw = contextRaw;
    }
    /**
     * @return The raw inner context.
     */
    getContextRaw() {
        return this.contextRaw;
    }
    /**
     * Expand the term or prefix of the given term if it has one,
     * otherwise return the term as-is.
     *
     * This will try to expand the IRI as much as possible.
     *
     * Iff in vocab-mode, then other references to other terms in the context can be used,
     * such as to `myTerm`:
     * ```
     * {
     *   "myTerm": "http://example.org/myLongTerm"
     * }
     * ```
     *
     * @param {string} term A term that is an URL or a prefixed URL.
     * @param {boolean} expandVocab If the term is a predicate or type and should be expanded based on @vocab,
     *                              otherwise it is considered a regular term that is expanded based on @base.
     * @param {IExpandOptions} options Options that define the way how expansion must be done.
     * @return {string} The expanded term, the term as-is, or null if it was explicitly disabled in the context.
     * @throws If the term is aliased to an invalid value (not a string, IRI or keyword).
     */
    expandTerm(term, expandVocab, options = ContextParser_1.defaultExpandOptions) {
        const contextValue = this.contextRaw[term];
        // Immediately return if the term was disabled in the context
        if (contextValue === null || (contextValue && contextValue['@id'] === null)) {
            return null;
        }
        // Check the @id
        let validIriMapping = true;
        if (contextValue && expandVocab) {
            const value = Util_1.Util.getContextValueId(contextValue);
            if (value && value !== term) {
                if (typeof value !== 'string' || (!Util_1.Util.isValidIri(value) && !Util_1.Util.isValidKeyword(value))) {
                    // Don't mark this mapping as invalid if we have an unknown keyword, but of the correct form.
                    if (!Util_1.Util.isPotentialKeyword(value)) {
                        validIriMapping = false;
                    }
                }
                else {
                    return value;
                }
            }
        }
        // Check if the term is prefixed
        const prefix = Util_1.Util.getPrefix(term, this.contextRaw);
        const vocab = this.contextRaw['@vocab'];
        const vocabRelative = (!!vocab || vocab === '') && vocab.indexOf(':') < 0;
        const base = this.contextRaw['@base'];
        const potentialKeyword = Util_1.Util.isPotentialKeyword(term);
        if (prefix) {
            const contextPrefixValue = this.contextRaw[prefix];
            const value = Util_1.Util.getContextValueId(contextPrefixValue);
            if (value) {
                if (typeof contextPrefixValue === 'string' || !options.allowPrefixForcing) {
                    // If we have a simple term definition,
                    // check the last character of the prefix to determine whether or not it is a prefix.
                    // Validate that prefix ends with gen-delim character, unless @prefix is true
                    if (!Util_1.Util.isSimpleTermDefinitionPrefix(value, options)) {
                        // Treat the term as an absolute IRI
                        return term;
                    }
                }
                else {
                    // If we have an expanded term definition, default to @prefix: false
                    if (value[0] !== '_' && !potentialKeyword && !contextPrefixValue['@prefix'] && !(term in this.contextRaw)) {
                        // Treat the term as an absolute IRI
                        return term;
                    }
                }
                return value + term.substr(prefix.length + 1);
            }
        }
        else if (expandVocab && ((vocab || vocab === '') || (options.allowVocabRelativeToBase && (base && vocabRelative)))
            && !potentialKeyword && !Util_1.Util.isCompactIri(term)) {
            if (vocabRelative) {
                if (options.allowVocabRelativeToBase) {
                    return relative_to_absolute_iri_1.resolve(vocab, base) + term;
                }
                else {
                    throw new ErrorCoded_1.ErrorCoded(`Relative vocab expansion for term '${term}' with vocab '${vocab}' is not allowed.`, ErrorCoded_1.ERROR_CODES.INVALID_VOCAB_MAPPING);
                }
            }
            else {
                return vocab + term;
            }
        }
        else if (!expandVocab && base && !potentialKeyword && !Util_1.Util.isCompactIri(term)) {
            return relative_to_absolute_iri_1.resolve(term, base);
        }
        // Return the term as-is, unless we discovered an invalid IRI mapping for this term in the context earlier.
        if (validIriMapping) {
            return term;
        }
        else {
            throw new ErrorCoded_1.ErrorCoded(`Invalid IRI mapping found for context entry '${term}': '${JSON.stringify(contextValue)}'`, ErrorCoded_1.ERROR_CODES.INVALID_IRI_MAPPING);
        }
    }
    /**
     * Compact the given term using @base, @vocab, an aliased term, or a prefixed term.
     *
     * This will try to compact the IRI as much as possible.
     *
     * @param {string} iri An IRI to compact.
     * @param {boolean} vocab If the term is a predicate or type and should be compacted based on @vocab,
     *                        otherwise it is considered a regular term that is compacted based on @base.
     * @return {string} The compacted term or the IRI as-is.
     */
    compactIri(iri, vocab) {
        // Try @vocab compacting
        if (vocab && this.contextRaw['@vocab'] && iri.startsWith(this.contextRaw['@vocab'])) {
            return iri.substr(this.contextRaw['@vocab'].length);
        }
        // Try @base compacting
        if (!vocab && this.contextRaw['@base'] && iri.startsWith(this.contextRaw['@base'])) {
            return iri.substr(this.contextRaw['@base'].length);
        }
        // Loop over all terms in the context
        // This will try to prefix as short as possible.
        // Once a fully compacted alias is found, return immediately, as we can not go any shorter.
        const shortestPrefixing = { prefix: '', suffix: iri };
        for (const key in this.contextRaw) {
            const value = this.contextRaw[key];
            if (value && !Util_1.Util.isPotentialKeyword(key)) {
                const contextIri = Util_1.Util.getContextValueId(value);
                if (iri.startsWith(contextIri)) {
                    const suffix = iri.substr(contextIri.length);
                    if (!suffix) {
                        if (vocab) {
                            // Immediately return on compacted alias
                            return key;
                        }
                    }
                    else if (suffix.length < shortestPrefixing.suffix.length) {
                        // Overwrite the shortest prefix
                        shortestPrefixing.prefix = key;
                        shortestPrefixing.suffix = suffix;
                    }
                }
            }
        }
        // Return the shortest prefix
        if (shortestPrefixing.prefix) {
            return shortestPrefixing.prefix + ':' + shortestPrefixing.suffix;
        }
        return iri;
    }
}
exports.JsonLdContextNormalized = JsonLdContextNormalized;

},{"./ContextParser":43,"./ErrorCoded":44,"./Util":47,"relative-to-absolute-iri":48}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    /**
     * Check if the given term is a valid compact IRI.
     * Otherwise, it may be an IRI.
     * @param {string} term A term.
     * @return {boolean} If it is a compact IRI.
     */
    static isCompactIri(term) {
        return term.indexOf(':') > 0 && !(term && term[0] === '#');
    }
    /**
     * Get the prefix from the given term.
     * @see https://json-ld.org/spec/latest/json-ld/#compact-iris
     * @param {string} term A term that is an URL or a prefixed URL.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @return {string} The prefix or null.
     */
    static getPrefix(term, context) {
        // Do not consider relative IRIs starting with a hash as compact IRIs
        if (term && term[0] === '#') {
            return null;
        }
        const separatorPos = term.indexOf(':');
        if (separatorPos >= 0) {
            // Suffix can not begin with two slashes
            if (term.length > separatorPos + 1
                && term.charAt(separatorPos + 1) === '/'
                && term.charAt(separatorPos + 2) === '/') {
                return null;
            }
            const prefix = term.substr(0, separatorPos);
            // Prefix can not be an underscore (this is a blank node)
            if (prefix === '_') {
                return null;
            }
            // Prefix must match a term in the active context
            if (context[prefix]) {
                return prefix;
            }
        }
        return null;
    }
    /**
     * From a given context entry value, get the string value, or the @id field.
     * @param contextValue A value for a term in a context.
     * @return {string} The id value, or null.
     */
    static getContextValueId(contextValue) {
        if (contextValue === null || typeof contextValue === 'string') {
            return contextValue;
        }
        const id = contextValue['@id'];
        return id ? id : null;
    }
    /**
     * Check if the given simple term definition (string-based value of a context term)
     * should be considered a prefix.
     * @param value A simple term definition value.
     * @param options Options that define the way how expansion must be done.
     */
    static isSimpleTermDefinitionPrefix(value, options) {
        return !Util.isPotentialKeyword(value)
            && (value[0] === '_' || options.allowPrefixNonGenDelims || Util.isPrefixIriEndingWithGenDelim(value));
    }
    /**
     * Check if the given keyword is of the keyword format "@"1*ALPHA.
     * @param {string} keyword A potential keyword.
     * @return {boolean} If the given keyword is of the keyword format.
     */
    static isPotentialKeyword(keyword) {
        return typeof keyword === 'string' && Util.KEYWORD_REGEX.test(keyword);
    }
    /**
     * Check if the given prefix ends with a gen-delim character.
     * @param {string} prefixIri A prefix IRI.
     * @return {boolean} If the given prefix IRI is valid.
     */
    static isPrefixIriEndingWithGenDelim(prefixIri) {
        return Util.ENDS_WITH_GEN_DELIM.test(prefixIri);
    }
    /**
     * Check if the given context value can be a prefix value.
     * @param value A context value.
     * @return {boolean} If it can be a prefix value.
     */
    static isPrefixValue(value) {
        return value && (typeof value === 'string' || (value && typeof value === 'object'));
    }
    /**
     * Check if the given IRI is valid.
     * @param {string} iri A potential IRI.
     * @return {boolean} If the given IRI is valid.
     */
    static isValidIri(iri) {
        return Util.IRI_REGEX.test(iri);
    }
    /**
     * Check if the given IRI is valid, this includes the possibility of being a relative IRI.
     * @param {string} iri A potential IRI.
     * @return {boolean} If the given IRI is valid.
     */
    static isValidIriWeak(iri) {
        return !!iri && iri[0] !== ':' && Util.IRI_REGEX_WEAK.test(iri);
    }
    /**
     * Check if the given keyword is a defined according to the JSON-LD specification.
     * @param {string} keyword A potential keyword.
     * @return {boolean} If the given keyword is valid.
     */
    static isValidKeyword(keyword) {
        return Util.VALID_KEYWORDS[keyword];
    }
    /**
     * Check if the given term is protected in the context.
     * @param {IJsonLdContextNormalizedRaw} context A context.
     * @param {string} key A context term.
     * @return {boolean} If the given term has an @protected flag.
     */
    static isTermProtected(context, key) {
        const value = context[key];
        return !(typeof value === 'string') && value && value['@protected'];
    }
    /**
     * Check if the given context has at least one protected term.
     * @param context A context.
     * @return If the context has a protected term.
     */
    static hasProtectedTerms(context) {
        for (const key of Object.keys(context)) {
            if (Util.isTermProtected(context, key)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Check if the given key is an internal reserved keyword.
     * @param key A context key.
     */
    static isReservedInternalKeyword(key) {
        return key.startsWith('@__');
    }
}
// Regex for valid IRIs
Util.IRI_REGEX = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^ "<>{}|\\\[\]`#]*(#[^#]*)?$/;
// Weaker regex for valid IRIs, this includes relative IRIs
Util.IRI_REGEX_WEAK = /(?::[^:])|\//;
// Regex for keyword form
Util.KEYWORD_REGEX = /^@[a-z]+$/i;
// Regex to see if an IRI ends with a gen-delim character (see RFC 3986)
Util.ENDS_WITH_GEN_DELIM = /[:/?#\[\]@]$/;
// Regex for language tags
Util.REGEX_LANGUAGE_TAG = /^[a-zA-Z]+(-[a-zA-Z0-9]+)*$/;
// Regex for base directions
Util.REGEX_DIRECTION_TAG = /^(ltr)|(rtl)$/;
// All known valid JSON-LD keywords
// @see https://www.w3.org/TR/json-ld11/#keywords
Util.VALID_KEYWORDS = {
    '@base': true,
    '@container': true,
    '@context': true,
    '@direction': true,
    '@graph': true,
    '@id': true,
    '@import': true,
    '@included': true,
    '@index': true,
    '@json': true,
    '@language': true,
    '@list': true,
    '@nest': true,
    '@none': true,
    '@prefix': true,
    '@propagate': true,
    '@protected': true,
    '@reverse': true,
    '@set': true,
    '@type': true,
    '@value': true,
    '@version': true,
    '@vocab': true,
};
// Keys in the contexts that will not be expanded based on the base IRI
Util.EXPAND_KEYS_BLACKLIST = [
    '@base',
    '@vocab',
    '@language',
    '@version',
    '@direction',
];
// Keys in the contexts that may not be aliased from
Util.ALIAS_DOMAIN_BLACKLIST = [
    '@container',
    '@graph',
    '@id',
    '@index',
    '@list',
    '@nest',
    '@none',
    '@prefix',
    '@reverse',
    '@set',
    '@type',
    '@value',
    '@version',
];
// Keys in the contexts that may not be aliased to
Util.ALIAS_RANGE_BLACKLIST = [
    '@context',
    '@preserve',
];
// All valid @container values
Util.CONTAINERS = [
    '@list',
    '@set',
    '@index',
    '@language',
    '@graph',
    '@id',
    '@type',
];
// All valid @container values under processing mode 1.0
Util.CONTAINERS_1_0 = [
    '@list',
    '@set',
    '@index',
];
exports.Util = Util;

},{}],48:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./lib/Resolve"));

},{"./lib/Resolve":49}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert the given relative IRI to an absolute IRI
 * by taking into account the given optional baseIRI.
 *
 * @param {string} relativeIRI The relative IRI to convert to an absolute IRI.
 * @param {string} baseIRI The optional base IRI.
 * @return {string} an absolute IRI.
 */
function resolve(relativeIRI, baseIRI) {
    baseIRI = baseIRI || '';
    const baseFragmentPos = baseIRI.indexOf('#');
    // Ignore any fragments in the base IRI
    if (baseFragmentPos > 0) {
        baseIRI = baseIRI.substr(0, baseFragmentPos);
    }
    // Convert empty value directly to base IRI
    if (!relativeIRI.length) {
        return baseIRI;
    }
    // If the value starts with a query character, concat directly (but strip the existing query)
    if (relativeIRI.startsWith('?')) {
        const baseQueryPos = baseIRI.indexOf('?');
        if (baseQueryPos > 0) {
            baseIRI = baseIRI.substr(0, baseQueryPos);
        }
        return baseIRI + relativeIRI;
    }
    // If the value starts with a fragment character, concat directly
    if (relativeIRI.startsWith('#')) {
        return baseIRI + relativeIRI;
    }
    // Ignore baseIRI if it is empty
    if (!baseIRI.length) {
        return removeDotSegmentsOfPath(relativeIRI, relativeIRI.indexOf(':'));
    }
    // Ignore baseIRI if the value is absolute
    const valueColonPos = relativeIRI.indexOf(':');
    if (valueColonPos >= 0) {
        return removeDotSegmentsOfPath(relativeIRI, valueColonPos);
    }
    // At this point, the baseIRI MUST be absolute, otherwise we error
    const baseColonPos = baseIRI.indexOf(':');
    if (baseColonPos < 0) {
        throw new Error(`Found invalid baseIRI '${baseIRI}' for value '${relativeIRI}'`);
    }
    const baseIRIScheme = baseIRI.substr(0, baseColonPos + 1);
    // Inherit the baseIRI scheme if the value starts with '//'
    if (relativeIRI.indexOf('//') === 0) {
        return baseIRIScheme + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
    }
    // Check cases where '://' occurs in the baseIRI, and where there is no '/' after a ':' anymore.
    let baseSlashAfterColonPos;
    if (baseIRI.indexOf('//', baseColonPos) === baseColonPos + 1) {
        // If there is no additional '/' after the '//'.
        baseSlashAfterColonPos = baseIRI.indexOf('/', baseColonPos + 3);
        if (baseSlashAfterColonPos < 0) {
            // If something other than a '/' follows the '://', append the value after a '/',
            // otherwise, prefix the value with only the baseIRI scheme.
            if (baseIRI.length > baseColonPos + 3) {
                return baseIRI + '/' + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
            }
            else {
                return baseIRIScheme + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
            }
        }
    }
    else {
        // If there is not even a single '/' after the ':'
        baseSlashAfterColonPos = baseIRI.indexOf('/', baseColonPos + 1);
        if (baseSlashAfterColonPos < 0) {
            // If we don't have a '/' after the ':',
            // prefix the value with only the baseIRI scheme.
            return baseIRIScheme + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
        }
    }
    // If the value starts with a '/', then prefix it with everything before the first effective slash of the base IRI.
    if (relativeIRI.indexOf('/') === 0) {
        return baseIRI.substr(0, baseSlashAfterColonPos) + removeDotSegments(relativeIRI);
    }
    let baseIRIPath = baseIRI.substr(baseSlashAfterColonPos);
    const baseIRILastSlashPos = baseIRIPath.lastIndexOf('/');
    // Ignore everything after the last '/' in the baseIRI path
    if (baseIRILastSlashPos >= 0 && baseIRILastSlashPos < baseIRIPath.length - 1) {
        baseIRIPath = baseIRIPath.substr(0, baseIRILastSlashPos + 1);
        // Also remove the first character of the relative path if it starts with '.' (and not '..' or './')
        // This change is only allowed if there is something else following the path
        if (relativeIRI[0] === '.' && relativeIRI[1] !== '.' && relativeIRI[1] !== '/' && relativeIRI[2]) {
            relativeIRI = relativeIRI.substr(1);
        }
    }
    // Prefix the value with the baseIRI path where
    relativeIRI = baseIRIPath + relativeIRI;
    // Remove dot segment from the IRI
    relativeIRI = removeDotSegments(relativeIRI);
    // Prefix our transformed value with the part of the baseIRI until the first '/' after the first ':'.
    return baseIRI.substr(0, baseSlashAfterColonPos) + relativeIRI;
}
exports.resolve = resolve;
/**
 * Remove dot segments from the given path,
 * as described in https://www.ietf.org/rfc/rfc3986.txt (page 32).
 * @param {string} path An IRI path.
 * @return {string} A path, will always start with a '/'.
 */
function removeDotSegments(path) {
    // Prepare a buffer with segments between each '/.
    // Each segment represents an array of characters.
    const segmentBuffers = [];
    let i = 0;
    while (i < path.length) {
        // Remove '/.' or '/..'
        switch (path[i]) {
            case '/':
                if (path[i + 1] === '.') {
                    if (path[i + 2] === '.') {
                        // Start a new segment if we find an invalid character after the '.'
                        if (!isCharacterAllowedAfterRelativePathSegment(path[i + 3])) {
                            segmentBuffers.push([]);
                            i++;
                            break;
                        }
                        // Go to parent directory,
                        // so we remove a parent segment
                        segmentBuffers.pop();
                        // Ensure that we end with a slash if there is a trailing '/..'
                        if (!path[i + 3]) {
                            segmentBuffers.push([]);
                        }
                        i += 3;
                    }
                    else {
                        // Start a new segment if we find an invalid character after the '.'
                        if (!isCharacterAllowedAfterRelativePathSegment(path[i + 2])) {
                            segmentBuffers.push([]);
                            i++;
                            break;
                        }
                        // Ensure that we end with a slash if there is a trailing '/.'
                        if (!path[i + 2]) {
                            segmentBuffers.push([]);
                        }
                        // Go to the current directory,
                        // so we do nothing
                        i += 2;
                    }
                }
                else {
                    // Start a new segment
                    segmentBuffers.push([]);
                    i++;
                }
                break;
            case '#':
            case '?':
                // Query and fragment string should be appended unchanged
                if (!segmentBuffers.length) {
                    segmentBuffers.push([]);
                }
                segmentBuffers[segmentBuffers.length - 1].push(path.substr(i));
                // Break the while loop
                i = path.length;
                break;
            default:
                // Not a special character, just append it to our buffer
                if (!segmentBuffers.length) {
                    segmentBuffers.push([]);
                }
                segmentBuffers[segmentBuffers.length - 1].push(path[i]);
                i++;
                break;
        }
    }
    return '/' + segmentBuffers.map((buffer) => buffer.join('')).join('/');
}
exports.removeDotSegments = removeDotSegments;
/**
 * Removes dot segments of the given IRI.
 * @param {string} iri An IRI (or part of IRI).
 * @param {number} colonPosition The position of the first ':' in the IRI.
 * @return {string} The IRI where dot segments were removed.
 */
function removeDotSegmentsOfPath(iri, colonPosition) {
    // Determine where we should start looking for the first '/' that indicates the start of the path
    let searchOffset = colonPosition + 1;
    if (colonPosition >= 0) {
        if (iri[colonPosition + 1] === '/' && iri[colonPosition + 2] === '/') {
            searchOffset = colonPosition + 3;
        }
    }
    else {
        if (iri[0] === '/' && iri[1] === '/') {
            searchOffset = 2;
        }
    }
    // Determine the path
    const pathSeparator = iri.indexOf('/', searchOffset);
    if (pathSeparator < 0) {
        return iri;
    }
    const base = iri.substr(0, pathSeparator);
    const path = iri.substr(pathSeparator);
    // Remove dot segments from the path
    return base + removeDotSegments(path);
}
exports.removeDotSegmentsOfPath = removeDotSegmentsOfPath;
function isCharacterAllowedAfterRelativePathSegment(character) {
    return !character || character === '#' || character === '?' || character === '/';
}

},{}],50:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WHATWGFetch = {})));
}(this, (function (exports) { 'use strict';

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}]},{},[28]);

export const PathFactory = all(12).default
