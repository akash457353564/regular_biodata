// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
/////////////TO SEND DATA TO BACKEND////////////////////////////
let fields = [
    "date",
    "month",
    "year",
    "hour",
    "minute",
    "seconds",
    "timeRefrence",
    "placeOfBirth",
    "rashi",
    "nakshatra",
    "selfReligion",
    "createdBy",
    "caste",
    "subCaste",
    "gotra",
    "manglik",
    "selfEducation",
    "collegeName",
    "employedIn",
    "companyName",
    "fathersName",
    "fathersOccupation",
    "mothersName",
    "mothersOccupation",
    "numOfBrothers",
    "numOfSisters",
    "numOfBrothersMarried",
    "numOfSistersMarried",
    "contactNum",
    "addressL1",
    "addressL2",
    "selfMaritalStatus",
    "gender",
    "motherTongue",
    "email"
];
let obj = {};
let fileData = null;
let newFetchUrl = "";
let mimeType;
let imagePreviewUrl;
let biodata_data = function() {
    let obj = {};
    for(let i = 0; i < fields?.length; i++)obj[fields[i]] = document.getElementById(fields[i])?.value;
    let full_name = document.querySelector("#name").value;
    let cname = full_name.trim().split(" ");
    let fname;
    let lname;
    if (cname.length > 1) {
        lname = cname.pop();
        fname = cname.join(" ");
    } else {
        fname = cname[0];
        lname = undefined;
    }
    let selfHeight = document.querySelector("#selfHeight").value;
    let new_obj = {};
    if (selfHeight == "4ft 5in") new_obj["selfHeight"] = 53;
    else if (selfHeight == "4 ft 6 in") new_obj["selfHeight"] = 54;
    else if (selfHeight == "4 ft 7 in") new_obj["selfHeight"] = 55;
    else if (selfHeight == "4 ft 8 in") new_obj["selfHeight"] = 56;
    else if (selfHeight == "4 ft 9 in") new_obj["selfHeight"] = 57;
    else if (selfHeight == "4 ft 10 in") new_obj["selfHeight"] = 58;
    else if (selfHeight == "4 ft 11 in") new_obj["selfHeight"] = 59;
    else if (selfHeight == "5 ft 00 in") new_obj["selfHeight"] = 60;
    else if (selfHeight == "5 ft 01 in") new_obj["selfHeight"] = 61;
    else if (selfHeight == "5 ft 02 in") new_obj["selfHeight"] = 62;
    else if (selfHeight == "5 ft 03 in") new_obj["selfHeight"] = 63;
    else if (selfHeight == "5 ft 04 in") new_obj["selfHeight"] = 64;
    else if (selfHeight == "5 ft 05 in") new_obj["selfHeight"] = 65;
    else if (selfHeight == "5 ft 06 in") new_obj["selfHeight"] = 66;
    else if (selfHeight == "5 ft 07 in") new_obj["selfHeight"] = 67;
    else if (selfHeight == "5 ft 08 in") new_obj["selfHeight"] = 68;
    else if (selfHeight == "5 ft 09 in") new_obj["selfHeight"] = 69;
    else if (selfHeight == "5 ft 10 in") new_obj["selfHeight"] = 70;
    else if (selfHeight == "5 ft 11 in") new_obj["selfHeight"] = 71;
    else if (selfHeight == "6 ft 00 in") new_obj["selfHeight"] = 72;
    else if (selfHeight == "6 ft 01 in") new_obj["selfHeight"] = 73;
    else if (selfHeight == "6 ft 02 in") new_obj["selfHeight"] = 74;
    else if (selfHeight == "6 ft 03 in") new_obj["selfHeight"] = 75;
    else if (selfHeight == "6 ft 04 in") new_obj["selfHeight"] = 76;
    else if (selfHeight == "6 ft 05 in") new_obj["selfHeight"] = 77;
    let selfIncomeRange = document.querySelector("#annualIncome");
    if (selfIncomeRange.value == "0 - 2 Lpa") {
        new_obj["selfIncomeFrom"] = 0;
        new_obj["selfIncomeTo"] = 200000;
    } else if (selfIncomeRange.value == "2 - 4 Lpa") {
        new_obj["selfIncomeFrom"] = 200000;
        new_obj["selfIncomeTo"] = 400000;
    } else if (selfIncomeRange.value == "4 - 7 Lpa") {
        new_obj["selfIncomeFrom"] = 400000;
        new_obj["selfIncomeTo"] = 700000;
    } else if (selfIncomeRange.value == "7 - 10 Lpa") {
        new_obj["selfIncomeFrom"] = 700000;
        new_obj["selfIncomeTo"] = 1000000;
    } else if (selfIncomeRange.value == "10 - 15 Lpa") {
        new_obj["selfIncomeFrom"] = 1000000;
        new_obj["selfIncomeTo"] = 1500000;
    } else if (selfIncomeRange.value == "15 - 20 Lpa") {
        new_obj["selfIncomeFrom"] = 1500000;
        new_obj["selfIncomeTo"] = 2000000;
    } else if (selfIncomeRange.value == "20 - 30 Lpa") {
        new_obj["selfIncomeFrom"] = 2000000;
        new_obj["selfIncomeTo"] = 3000000;
    } else if (selfIncomeRange.value == "30 - 50 Lpa") {
        new_obj["selfIncomeFrom"] = 3000000;
        new_obj["selfIncomeTo"] = 5000000;
    } else if (selfIncomeRange.value == "50+ Lpa") {
        new_obj["selfIncomeFrom"] = 5000000;
        new_obj["selfIncomeTo"] = 10000000;
    }
    for(let item in obj)if (obj[item] !== "" && obj[item]) new_obj[item] = obj[item];
    //    Object.assign({...obj, imgaeUrl: imagePreviewUrl});
    new_obj["imageUrl"] = imagePreviewUrl;
    new_obj["firstName"] = fname;
    new_obj["lastName"] = lname;
    console.log("Onj", new_obj);
    let data = JSON.stringify(new_obj);
    //    console.log("Helllo World", obj)
    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://maverick-biodata-sj6eib36ga-el.a.run.app`); //PROD ENDPOINT -> https://maverick-biodata-7i5cyyxrda-el.a.run.app
    let url = endPoint.toString();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    //request.setRequestHeader("request-id", `${generateUUID()}`)
    request.send(data);
};
document.querySelector("#regular-biodata-form").addEventListener("submit", biodata_data);
////////////////////////////////////////SEND DATA TO BACKEND ENDS/////////////////////////////////////////////////////////
//////////////////////////////////TO SEND PHOTO TO BACKEND//////////////////////////////////////////////
let photo_upload = function(inputData) {
    console.log(inputData.target.files[0]);
    let fileUrl = document.querySelector(".w-file-upload-input").value;
    let finalName = fileUrl.substring(fileUrl.lastIndexOf("/") + 13);
    fileData = new File([
        inputData.target.files[0]
    ], finalName, {
        type: "text/json;charset=utf-8"
    });
    let data = JSON.stringify({
        "filePath": `${finalName}`
    });
    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://maverick-biodata-sj6eib36ga-el.a.run.app`); //PROD ENDPOINT -> https://maverick-biodata-7i5cyyxrda-el.a.run.app
    let url = endPoint.toString();
    request.open("PATCH", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
        const response = JSON.parse(this.response);
        mimeType = response.mime;
        imagePreviewUrl = response.fileRenderUrl;
        newFetchUrl = response.fileUploadUrl;
    };
    request.send(data);
};
document.querySelector(".w-file-upload-input").addEventListener("change", (data)=>photo_upload(data));
let photo_submit = ()=>{
    console.log("submitted data", newFetchUrl, fileData, mimeType, imagePreviewUrl);
    fetch(newFetchUrl, {
        method: "PUT",
        headers: {
            "Content-Type": `${mimeType}`
        },
        body: fileData
    }).then(()=>{
        createPdf();
    });
};
// document.querySelector('#regular-biodata-form').addEventListener('submit', photo_submit)
///////////////////////////////////////PHOTO SENDING TO BACKEND ENDS/////////////////////////////////////////////////////////////
////////////////////////////////TO GENERATE PDF////////////////////////////////
const { PDFDocument , StandardFonts , rgb , PDFString , PDFName  } = PDFLib;
async function createPdf() {
    // Create a new PDFDocument
    // SVG path for border design
    const svgPath = "M571.23,130.86V721.65l-.93-.19a37.24,37.24,0,0,0-6.21-.7c-.42,0-.84,0-1.25,0l-1.24,0h0a31.52,31.52,0,0,0-9.16,1.68c-.57.2-1.12.41-1.65.64s-1,.49-1.58.77h0a18.11,18.11,0,0,0-6.78,6.08,15.3,15.3,0,0,0-.91,1.59,16.94,16.94,0,0,0-.76,1.74h0a19.18,19.18,0,0,0-1.16,5.58c0,.43,0,.84,0,1.23s0,.84,0,1.28v0a26.92,26.92,0,0,0,.9,6.1c.08.32.19.66.31,1s.24.69.35,1h0v0a16.16,16.16,0,0,0,4.81,6.74,15,15,0,0,0,1.23.91,13.69,13.69,0,0,0,1.33.79h0c.31.16.62.32.94.47a31.48,31.48,0,0,0,4.23-2.36c-.39-.09-.77-.19-1.14-.31s-.81-.28-1.18-.44a11.48,11.48,0,0,1-1.13-.53l0,0a12,12,0,0,1-4.5-4.2c-.23-.36-.44-.74-.64-1.13s-.38-.81-.55-1.24h0a19.56,19.56,0,0,1-1.16-4.75c0-.34-.07-.7-.1-1.06s0-.7-.07-1.11h0v0a18.86,18.86,0,0,1,.44-5c.07-.29.15-.57.24-.86h0c.08-.28.17-.55.27-.83v0h0a13.29,13.29,0,0,1,4.37-5.94c.37-.29.75-.56,1.16-.83s.8-.49,1.22-.71h0a23.6,23.6,0,0,1,7.61-2.38c.51-.07,1-.13,1.6-.18s1.07-.08,1.6-.11h.05A32.77,32.77,0,0,1,569,725c2,.38,4,.89,5.9,1.46V103.3c-1.94.56-3.9,1.08-5.9,1.45a32.77,32.77,0,0,1-7.26.59h-.05c-.53,0-1.07-.06-1.6-.11s-1.09-.11-1.6-.18a23.6,23.6,0,0,1-7.61-2.38h0c-.42-.22-.83-.46-1.22-.71s-.79-.54-1.16-.83a13.29,13.29,0,0,1-4.37-5.94h0v0c-.1-.28-.19-.55-.27-.82h0c-.09-.29-.17-.57-.24-.86a18.82,18.82,0,0,1-.44-5v0h0c0-.41,0-.78.07-1.11s.06-.72.1-1.06a19.56,19.56,0,0,1,1.16-4.75h0c.17-.43.35-.84.55-1.24s.41-.77.64-1.13a12,12,0,0,1,4.5-4.2l0,0a11.48,11.48,0,0,1,1.13-.53c.37-.16.76-.3,1.18-.44s.75-.22,1.14-.31a30.37,30.37,0,0,0-4.23-2.35c-.32.14-.63.3-.94.46h0c-.46.24-.9.51-1.33.79a15,15,0,0,0-1.23.91,16.16,16.16,0,0,0-4.81,6.74v0h0c-.11.29-.23.62-.35,1s-.23.71-.31,1a26.92,26.92,0,0,0-.9,6.1v0c0,.44,0,.87,0,1.28s0,.81,0,1.23a19.18,19.18,0,0,0,1.16,5.58h0a16.94,16.94,0,0,0,.76,1.74,15.3,15.3,0,0,0,.91,1.59,18.11,18.11,0,0,0,6.78,6.08h0c.53.28,1.05.54,1.58.77s1.08.44,1.65.64a31.52,31.52,0,0,0,9.16,1.68h0l1.24,0h1.25a38.32,38.32,0,0,0,6.21-.71l.93-.19v22.8ZM158.79,826.27H475a59.72,59.72,0,0,1-1.45-5.9,32.27,32.27,0,0,1-.59-7.27,27.48,27.48,0,0,1,1.43-8c.17-.48.35-1,.56-1.44s.43-.95.66-1.38h0l0,0a14.51,14.51,0,0,1,4.84-5.44,12,12,0,0,1,1.27-.73,12.48,12.48,0,0,1,1.38-.61h0a16.18,16.18,0,0,1,4.63-.94l1,0c.35,0,.7,0,1.06,0h0a23.32,23.32,0,0,1,5.19.74l.89.27.84.3h0l0,0a12.64,12.64,0,0,1,5.26,3.72,11.17,11.17,0,0,1,.71,1c.21.32.41.65.59,1h0v0a14.54,14.54,0,0,1,1.3,3.47,31.31,31.31,0,0,0,2.35-4.22c-.14-.32-.29-.62-.45-.92h0l0,0h0a15.39,15.39,0,0,0-5.39-5.82h0c-.47-.3-.95-.57-1.45-.83s-1-.49-1.6-.71h0a22.75,22.75,0,0,0-5.56-1.36c-.42-.05-.83-.1-1.25-.13s-.89-.06-1.3-.08h0a21.59,21.59,0,0,0-6.05.56c-.36.09-.71.18-1,.28s-.66.21-1,.34h0a16.84,16.84,0,0,0-7.45,5.45c-.37.46-.71,1-1,1.45s-.64,1-.92,1.56v0h0a27,27,0,0,0-2.75,8.7c-.09.63-.16,1.24-.22,1.83s-.09,1.22-.12,1.84v0a38,38,0,0,0,.3,6.32c.05.39.11.8.18,1.2s.13.77.21,1.18v0l.18.93H108.07l.18-.93v0c.08-.41.15-.81.21-1.18s.13-.81.18-1.2A38,38,0,0,0,109,813v0c0-.62-.06-1.23-.12-1.84s-.12-1.2-.22-1.83a26.75,26.75,0,0,0-2.74-8.7h0v0c-.29-.53-.59-1-.92-1.56s-.68-1-1-1.45a16.89,16.89,0,0,0-7.45-5.45h0l-1-.34c-.33-.1-.68-.19-1.05-.28a21.52,21.52,0,0,0-6-.56h0c-.42,0-.85,0-1.3.08s-.83.08-1.25.13a22.75,22.75,0,0,0-5.56,1.36h0c-.56.22-1.09.46-1.6.71s-1,.53-1.45.83h0a15.42,15.42,0,0,0-5.4,5.82h0v0h0c-.16.3-.31.6-.45.92A30.25,30.25,0,0,0,73.6,805a14.54,14.54,0,0,1,1.3-3.47v0h0q.28-.51.6-1a9.39,9.39,0,0,1,.71-1,12.61,12.61,0,0,1,5.25-3.72l0,0h0l.84-.3.88-.27a23.33,23.33,0,0,1,5.2-.74h0c.35,0,.71,0,1.06,0l1,0a16.18,16.18,0,0,1,4.62.94h0a14.39,14.39,0,0,1,1.38.61,12,12,0,0,1,1.27.73,14.59,14.59,0,0,1,4.84,5.44v0h0q.33.65.66,1.38c.2.48.39,1,.56,1.44a27.81,27.81,0,0,1,1.43,8,32.86,32.86,0,0,1-.59,7.27c-.37,2-.89,4-1.45,5.9Zm376.43-31.11h-.78v0a8.6,8.6,0,0,1-5.26-2.47h0a8.52,8.52,0,0,1-2-3.06c-.09-.23-.16-.47-.23-.7a9.11,9.11,0,0,1-.27-1.49h0v-.77h0v-.78h0A8.43,8.43,0,0,1,528,782a6.46,6.46,0,0,1,.54-.75c.2-.24.4-.47.61-.68h0a8.68,8.68,0,0,1,3.06-2c.23-.08.46-.16.7-.22a7.39,7.39,0,0,1,1.49-.27v0H536v0a8.42,8.42,0,0,1,3.83,1.31c.25.17.5.35.74.54s.48.41.69.61h0a8.72,8.72,0,0,1,2,3.07c.08.23.16.46.22.69a9.11,9.11,0,0,1,.27,1.49h0v.77h0v.78h0a8.49,8.49,0,0,1-2.47,5.26h0a8.56,8.56,0,0,1-3.07,2,6.12,6.12,0,0,1-.69.22,8.17,8.17,0,0,1-1.49.28v0Zm-.43-1.56h.84a7,7,0,0,0,1.44-.24,5.22,5.22,0,0,0,.56-.18,6.87,6.87,0,0,0,2.51-1.62h0a7,7,0,0,0,2.05-4.51v-.42h0v-.41a6.77,6.77,0,0,0-.24-1.44l-.18-.56a7.27,7.27,0,0,0-1.62-2.52h0a6.47,6.47,0,0,0-.56-.5,4.51,4.51,0,0,0-.61-.44,6.93,6.93,0,0,0-3.32-1.1h-.88a6.49,6.49,0,0,0-1.41.24,4.75,4.75,0,0,0-.57.18,7.09,7.09,0,0,0-2.51,1.62h0a6.39,6.39,0,0,0-.51.55c-.15.2-.3.4-.44.62a6.79,6.79,0,0,0-1.09,3.32v.43h0v.44a7.28,7.28,0,0,0,.23,1.41c.06.2.12.39.19.57a7,7,0,0,0,1.62,2.51h0A7,7,0,0,0,534.79,793.6Zm.42,5.17h.24a12.12,12.12,0,0,0,2.71-.36c.32-.08.62-.17.9-.26a12.12,12.12,0,0,0,1.74-.74,12.1,12.1,0,0,0,5.8-6.56c.13-.34.23-.67.32-1a12.36,12.36,0,0,0,.43-3.24h0v-.24a12.12,12.12,0,0,0-.36-2.71c-.07-.32-.16-.62-.25-.9a12.2,12.2,0,0,0-7.3-7.54c-.34-.13-.67-.23-1-.32a12.28,12.28,0,0,0-3.23-.44h-.31a12.26,12.26,0,0,0-2.65.35l-.9.26a12.62,12.62,0,0,0-1.74.74,12.2,12.2,0,0,0-5.8,6.56c-.12.34-.23.67-.32,1a12.28,12.28,0,0,0-.43,3.23h0v.3a12.18,12.18,0,0,0,.36,2.65c.08.32.16.62.26.91a12.56,12.56,0,0,0,.73,1.74,12.28,12.28,0,0,0,2.2,3h0A12.12,12.12,0,0,0,531,798q.51.19,1,.33a12.36,12.36,0,0,0,3.24.43Zm-39-47.7h0a3.47,3.47,0,0,0,3.47-3.46h0a3.47,3.47,0,0,0-3.47-3.46h0a3.48,3.48,0,0,0-3.47,3.47h0a3.47,3.47,0,0,0,3.47,3.46Zm0,1.55h0a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5h0a5,5,0,0,1-5,5Zm55.47,53.92h0a3.48,3.48,0,0,0,3.47-3.47h0a3.51,3.51,0,0,0-1-2.45,3.44,3.44,0,0,0-2.45-1h0a3.47,3.47,0,0,0-3.46,3.46h0a3.47,3.47,0,0,0,3.47,3.46Zm0,1.55h0a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5h0a5,5,0,0,1-1.47,3.55,5.05,5.05,0,0,1-3.54,1.47Zm-.33-48.86a21.35,21.35,0,0,0,4.67.91c.57.05,1.12.08,1.65.1s1.11,0,1.68,0h0a35.5,35.5,0,0,0,7.39-1.12h0l1.47-.41c.52-.15,1-.3,1.48-.46h0l0,0,.7-.23.27.69a23.84,23.84,0,0,1,.58,14.88,22,22,0,0,1-1,2.78,20.06,20.06,0,0,1-1.35,2.61h0v0h0c-2.28,3.7-5.29,5.48-8.71,7.41,4.62,3.52,8.17,6.74,10.24,10.66,2.23,4.22,2.72,9.19.94,16.09l0,.1c-.9,3.47-1.16,4.47-.55,8.16l.17,1.06-1.06-.17c-3.68-.61-4.68-.35-8.15.54h0l-.1,0h0c-6.91,1.78-11.87,1.29-16.1-.94-3.91-2.08-7.13-5.63-10.66-10.25-1.93,3.43-3.71,6.43-7.41,8.71a23.44,23.44,0,0,1-14.61,3.14A22.34,22.34,0,0,1,510,823a20.64,20.64,0,0,1-2.77-.86h0l-.68-.26.23-.7a40.71,40.71,0,0,0,1.76-7.51c.06-.45.11-.92.15-1.43s.08-1,.09-1.41v0a23.44,23.44,0,0,0-1-8,31.42,31.42,0,0,1-2.73,4.39c0,.23.05.47.07.71,0,.42.05.88.06,1.37s0,.93,0,1.4v0a32.77,32.77,0,0,1-1.44,8.14c-.15.51-.33,1.05-.53,1.63s-.4,1.12-.6,1.64v0L502,823.6l1.42.76a27.09,27.09,0,0,0,19,2,27.56,27.56,0,0,0,3.63-1.2,23,23,0,0,0,3.35-1.71h0l0,0h0a21,21,0,0,0,3-2.27l.55-.49.52-.53h0c.29-.29.57-.6.84-.91l.16-.2h0l.15-.18v0h0l.6-.7.58.71c3.79,4.57,7.65,7.17,11.94,8.26s9.11.69,14.74-.76,7.61-.73,11.48.51l2,.62c-.21-.72-.42-1.36-.62-2-1.24-3.86-1.92-6-.5-11.48s1.86-10.42.76-14.74-3.69-8.15-8.26-11.93l-.73-.6.73-.6c.32-.26.64-.54,1-.83h0l.18-.17h0l.18-.16h0a20.64,20.64,0,0,0,2.46-2.89c.14-.19.28-.4.42-.61l.41-.62h0a27.49,27.49,0,0,0,3.34-18.94,27,27,0,0,0-.94-3.64A24.09,24.09,0,0,0,573,754.9h0l0,0h0l-.76-1.41-1.48.58a38.18,38.18,0,0,1-8.3,2.28c-.5.08-1,.14-1.57.2s-1,.08-1.54.1h0a22.63,22.63,0,0,1-3.52-.12A31,31,0,0,1,551.33,759.23Zm-16.12,41.1h-.78v0a13.64,13.64,0,0,1-2.87-.46q-.59-.17-1.11-.36a13.68,13.68,0,0,1-4.93-3.16h0a14,14,0,0,1-2.47-3.38,14.36,14.36,0,0,1-.83-2q-.16-.51-.3-1a13.9,13.9,0,0,1-.38-2.53h0v-.78h0v-.77h0A14.22,14.22,0,0,1,522,783c.11-.39.23-.77.36-1.11a13.64,13.64,0,0,1,6.54-7.41,13.85,13.85,0,0,1,2-.83c.34-.11.68-.21,1-.29a14.15,14.15,0,0,1,2.54-.38v0H536v0a12.94,12.94,0,0,1,2.87.47c.39.11.76.22,1.11.35a13.62,13.62,0,0,1,7.4,6.55,13.1,13.1,0,0,1,.83,2q.18.53.3,1a14,14,0,0,1,.38,2.54h0v.77h0v.77h0a14.22,14.22,0,0,1-.47,2.87c-.11.4-.23.77-.35,1.12a13.62,13.62,0,0,1-6.55,7.4,14.23,14.23,0,0,1-2,.83c-.35.11-.69.21-1,.29a13.3,13.3,0,0,1-2.54.38v0h-.78ZM43.08,795.16h.78v0a8.6,8.6,0,0,0,5.26-2.47h0a8.52,8.52,0,0,0,2-3.06c.08-.23.16-.47.22-.7a8.17,8.17,0,0,0,.28-1.49h0v-.77h0v-.78h0A8.55,8.55,0,0,0,50.27,782q-.26-.39-.54-.75c-.2-.24-.4-.47-.61-.68h0a8.64,8.64,0,0,0-3.07-2c-.23-.08-.46-.16-.69-.22a7.39,7.39,0,0,0-1.49-.27v0H42.31v0a8.38,8.38,0,0,0-3.82,1.31q-.39.25-.75.54c-.25.2-.47.41-.68.61h0a8.56,8.56,0,0,0-2,3.07c-.08.23-.16.46-.22.69a8.17,8.17,0,0,0-.28,1.49h0v.77h0v.78h0a8.56,8.56,0,0,0,2.48,5.26h0a8.48,8.48,0,0,0,3.07,2,6.12,6.12,0,0,0,.69.22,8.17,8.17,0,0,0,1.49.28v0Zm.43-1.56h-.84a6.77,6.77,0,0,1-1.44-.24,5.22,5.22,0,0,1-.56-.18,7,7,0,0,1-2.52-1.62h0a7,7,0,0,1-2-4.51v-.42h0v-.41a6.77,6.77,0,0,1,.24-1.44,5.22,5.22,0,0,1,.18-.56,7,7,0,0,1,1.62-2.52h0c.19-.18.38-.35.56-.5a5.35,5.35,0,0,1,.62-.44,6.9,6.9,0,0,1,3.32-1.1h.88a6.71,6.71,0,0,1,1.41.24,5.22,5.22,0,0,1,.56.18A7.13,7.13,0,0,1,48,781.69h0a6.22,6.22,0,0,1,.5.55,7,7,0,0,1,.45.62,6.89,6.89,0,0,1,1.09,3.32v.43h0v.44a6.6,6.6,0,0,1-.24,1.41,4.75,4.75,0,0,1-.18.57A7,7,0,0,1,48,791.56h0A7,7,0,0,1,43.51,793.6Zm-.42,5.17h-.24a12.12,12.12,0,0,1-2.71-.36c-.32-.08-.62-.17-.9-.26a12.74,12.74,0,0,1-1.75-.74,12,12,0,0,1-5.79-6.56,9.27,9.27,0,0,1-.32-1,12,12,0,0,1-.44-3.24h0v-.24a12.12,12.12,0,0,1,.35-2.71c.08-.32.17-.62.26-.9A12.12,12.12,0,0,1,32.3,781a12.1,12.1,0,0,1,6.56-5.8c.34-.13.67-.23,1-.32a12.36,12.36,0,0,1,3.24-.44h.3a12.17,12.17,0,0,1,2.65.35c.32.08.62.17.9.26a12.13,12.13,0,0,1,7.54,7.3,8.71,8.71,0,0,1,.32,1,11.88,11.88,0,0,1,.44,3.23h0v.3a12.17,12.17,0,0,1-.35,2.65c-.08.32-.17.62-.26.91a12.62,12.62,0,0,1-.74,1.74,12.24,12.24,0,0,1-2.19,3h0A12.16,12.16,0,0,1,47.31,798c-.34.13-.67.24-1,.33a12.36,12.36,0,0,1-3.24.43Zm39-47.7h0a3.45,3.45,0,0,1-3.46-3.46h0a3.47,3.47,0,0,1,3.46-3.46h0a3.47,3.47,0,0,1,3.46,3.47h0a3.45,3.45,0,0,1-3.46,3.46Zm0,1.55h0a5,5,0,0,0,5-5h0a5,5,0,0,0-5-5h0a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h0ZM26.64,806.54h0a3.48,3.48,0,0,1-3.46-3.47h0a3.47,3.47,0,0,1,3.47-3.46h0a3.47,3.47,0,0,1,3.47,3.46h0a3.47,3.47,0,0,1-3.47,3.46Zm0,1.55h0a5,5,0,0,0,5-5h0a5,5,0,0,0-5-5h0a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h0ZM27,759.23a21.55,21.55,0,0,1-4.68.91c-.57.05-1.11.08-1.64.1s-1.12,0-1.69,0h0a35.7,35.7,0,0,1-7.39-1.12h0c-.47-.12-1-.26-1.47-.41s-1-.3-1.48-.46h0l-.05,0L7.84,758l-.27.69A23.84,23.84,0,0,0,7,773.55a23.6,23.6,0,0,0,1,2.78,20.11,20.11,0,0,0,1.36,2.61h0v0h0c2.28,3.7,5.29,5.48,8.71,7.41-4.62,3.52-8.17,6.74-10.24,10.66-2.24,4.22-2.73,9.19-1,16.09l0,.1c.89,3.47,1.15,4.47.55,8.16l-.18,1.06,1.06-.17c3.69-.61,4.69-.35,8.16.54h0l.1,0h0c6.9,1.78,11.87,1.29,16.09-.94,3.92-2.08,7.14-5.63,10.66-10.25,1.93,3.43,3.72,6.43,7.42,8.71a23.44,23.44,0,0,0,14.61,3.14,22.63,22.63,0,0,0,2.89-.49,21.1,21.1,0,0,0,2.77-.86h0l.69-.26-.23-.7a39.16,39.16,0,0,1-1.76-7.51c-.06-.45-.11-.92-.16-1.43s-.07-1-.09-1.41v0a23.2,23.2,0,0,1,1-8,30.52,30.52,0,0,0,2.73,4.39c0,.23,0,.47-.07.71,0,.42-.06.88-.07,1.37s0,.93,0,1.4v0a33.2,33.2,0,0,0,1.43,8.14c.16.51.33,1.05.53,1.63s.4,1.12.6,1.64l0,0,.59,1.49-1.42.76a27.09,27.09,0,0,1-19,2,27.56,27.56,0,0,1-3.63-1.2,23.58,23.58,0,0,1-3.36-1.71h0l0,0h0a21.08,21.08,0,0,1-3.06-2.27l-.54-.49-.53-.53h0c-.29-.29-.57-.6-.84-.91l-.16-.2h0l-.16-.18v0h0l-.6-.7-.58.71c-3.79,4.57-7.65,7.17-11.94,8.26s-9.12.69-14.74-.76-7.62-.73-11.48.51l-2,.62c.22-.72.43-1.36.62-2,1.24-3.86,1.93-6,.51-11.48s-1.86-10.42-.76-14.74,3.69-8.15,8.26-11.93l.73-.6-.74-.6c-.31-.26-.63-.54-.95-.83h0l-.17-.17h0L9.58,785h0a20.7,20.7,0,0,1-2.47-2.89c-.14-.19-.28-.4-.42-.61l-.4-.62h0a27.49,27.49,0,0,1-3.34-18.94,25.6,25.6,0,0,1,.94-3.64,23,23,0,0,1,1.45-3.37h0l0,0h0l.76-1.41L7.6,754a38.25,38.25,0,0,0,8.29,2.28c.5.08,1,.14,1.58.2s1,.08,1.54.1h0a22.67,22.67,0,0,0,3.52-.12A31,31,0,0,0,27,759.23Zm16.11,41.1h.78v0a13.54,13.54,0,0,0,2.87-.46q.6-.17,1.11-.36a13.51,13.51,0,0,0,4.93-3.16h0a13.77,13.77,0,0,0,2.48-3.38,14.36,14.36,0,0,0,.83-2c.11-.34.21-.68.29-1a13.9,13.9,0,0,0,.38-2.53h0v-.78h0v-.77h0a13.54,13.54,0,0,0-.46-2.87c-.11-.39-.23-.77-.36-1.11a13.59,13.59,0,0,0-3.16-4.93,13.46,13.46,0,0,0-3.39-2.48,13.73,13.73,0,0,0-2-.83c-.34-.11-.69-.21-1-.29a13.9,13.9,0,0,0-2.53-.38v0H42.31v0a12.94,12.94,0,0,0-2.87.47c-.4.11-.77.22-1.11.35a13.7,13.7,0,0,0-7.41,6.55,14.23,14.23,0,0,0-.83,2c-.11.35-.21.69-.29,1a14,14,0,0,0-.38,2.54h0v.77h0v.77h0a12.94,12.94,0,0,0,.47,2.87,10.54,10.54,0,0,0,.35,1.12,13.73,13.73,0,0,0,8.51,8.23c.34.11.68.21,1,.29a13.08,13.08,0,0,0,2.53.38v0ZM1.89,127.81V670.92h0v57.57l1-.29a65.3,65.3,0,0,1,6.74-1.72,31.06,31.06,0,0,1,6.92-.56h0c.52,0,1,.05,1.53.1s1,.1,1.52.18a21.73,21.73,0,0,1,7.07,2.2h0c.38.21.76.43,1.12.66s.7.48,1.05.75a11.9,11.9,0,0,1,3.88,5.25h0v0c.08.24.17.48.24.74h0c.07.25.14.51.2.78a17.1,17.1,0,0,1,.41,4.61v0h0c0,.32,0,.67-.07,1s-.06.67-.1,1a17.71,17.71,0,0,1-1.06,4.37h0c-.15.38-.32.75-.49,1.1s-.37.69-.57,1a10.31,10.31,0,0,1-3.91,3.67h0a9.22,9.22,0,0,1-1,.47c-.35.15-.71.28-1.05.39a16.37,16.37,0,0,1-2.37.55A19.61,19.61,0,0,1,16.86,747a16,16,0,0,1-.62-1.81,11.8,11.8,0,0,1-.17-6,5.89,5.89,0,0,1,3.55-4.08,6.92,6.92,0,0,1,.91-.31,4.24,4.24,0,0,1,3.52.48,3.44,3.44,0,0,1,.46.38,3.51,3.51,0,0,1,.37.41v0h0a2.46,2.46,0,0,1-.37,3.53,2.47,2.47,0,0,1-1,.48,3.29,3.29,0,0,1-3.16-1.35.78.78,0,0,0-1.17,1,4.79,4.79,0,0,0,4.65,1.85,4.05,4.05,0,0,0,1.66-.79,4.13,4.13,0,0,0,1.13-1.39,4,4,0,0,0-.48-4.28h0a6.31,6.31,0,0,0-.55-.61,5,5,0,0,0-.66-.54,5.72,5.72,0,0,0-4.79-.7,9.49,9.49,0,0,0-1.1.38,7.38,7.38,0,0,0-4.45,5.1,13.26,13.26,0,0,0,.17,6.84,15.7,15.7,0,0,0,.68,2,20.72,20.72,0,0,0,5.41,7.5c-.56,0-1.14,0-1.73,0h0c-.48,0-1-.06-1.46-.1s-1-.11-1.49-.19a37.27,37.27,0,0,1-8-2.19L6,751.75l-.64-.25-.33.61-1.08,2H4l0,0H4a24.12,24.12,0,0,0-1.56,3.61,26.94,26.94,0,0,0-1,3.86,29,29,0,0,0,3.54,20H5l.43.67c.14.21.29.43.45.65a22.31,22.31,0,0,0,2.64,3.09h0l.18.18h0l.18.17h0l.31.29c-4.41,3.82-7,7.76-8.08,12.15-1.16,4.59-.74,9.63.77,15.51,1.31,5.06.67,7-.48,10.62-.32,1-.67,2.07-1,3.37L0,829.71l1.32-.37c1.3-.36,2.4-.71,3.37-1,3.59-1.15,5.56-1.79,10.63-.48,5.87,1.51,10.91,1.93,15.5.77,4.39-1.12,8.33-3.67,12.16-8.08.21.24.42.47.64.7h0l.56.55.58.54a23.2,23.2,0,0,0,3.28,2.43h0l0,0h0a25,25,0,0,0,3.57,1.82,27.41,27.41,0,0,0,3.84,1.27,28.59,28.59,0,0,0,20.07-2.14l2-1.08.61-.33-.25-.64-.84-2.12v0c-.22-.55-.41-1.08-.58-1.57s-.34-1-.51-1.57a31.84,31.84,0,0,1-1.38-7.75v0c0-.45,0-.89,0-1.32,0-.13,0-.25,0-.38a20.6,20.6,0,0,0,7.5,5.41,17.49,17.49,0,0,0,2,.69,13.37,13.37,0,0,0,6.84.16,7.39,7.39,0,0,0,5.11-4.45,9.46,9.46,0,0,0,.37-1.1,5.72,5.72,0,0,0-.7-4.79,4.86,4.86,0,0,0-.54-.66,5.13,5.13,0,0,0-.61-.54h0a4,4,0,0,0-6.46,2.31A4.78,4.78,0,0,0,90,810.53a.77.77,0,0,0,1.09-.07.77.77,0,0,0-.08-1.09,3.29,3.29,0,0,1-1.35-3.16,2.45,2.45,0,0,1,.48-1,2.59,2.59,0,0,1,.87-.7,2.52,2.52,0,0,1,2.66.33h0a3.69,3.69,0,0,1,.79.84,4.13,4.13,0,0,1,.48,3.51,7.08,7.08,0,0,1-.31.92,5.88,5.88,0,0,1-4.07,3.54,11.83,11.83,0,0,1-6-.17,14.26,14.26,0,0,1-1.81-.62,19.67,19.67,0,0,1-7.89-6.14,13.87,13.87,0,0,1,1.41-4.43h0v0c.17-.3.34-.59.53-.88s.4-.57.62-.83A11.13,11.13,0,0,1,82,797.28h0c.23-.1.49-.19.76-.28l.81-.24a21.67,21.67,0,0,1,4.84-.7h0c.34,0,.67,0,1,0l.95,0a14.74,14.74,0,0,1,4.17.85h0a13.29,13.29,0,0,1,1.22.54,10.5,10.5,0,0,1,1.12.65A13,13,0,0,1,101.3,803l0,0h0c.23.43.43.85.61,1.26s.35.88.52,1.34a26.34,26.34,0,0,1,1.34,7.55,31.06,31.06,0,0,1-.56,6.92,64.59,64.59,0,0,1-1.71,6.74l-.3,1H477.08l-.3-1a64.59,64.59,0,0,1-1.71-6.74,31.06,31.06,0,0,1-.57-6.92,26,26,0,0,1,1.35-7.55c.16-.46.34-.91.52-1.34s.38-.83.61-1.26h0v0a13.13,13.13,0,0,1,4.33-4.87,9.6,9.6,0,0,1,1.12-.65,12.19,12.19,0,0,1,1.22-.54h0a14.89,14.89,0,0,1,4.18-.85l.94,0c.32,0,.65,0,1,0h0a21.76,21.76,0,0,1,4.85.7l.81.24c.27.09.52.18.76.28h0a11.1,11.1,0,0,1,4.62,3.26,8.53,8.53,0,0,1,.62.83c.19.29.37.58.53.88v0h0a13.61,13.61,0,0,1,1.4,4.43,19.64,19.64,0,0,1-7.88,6.14,15,15,0,0,1-1.82.62,11.8,11.8,0,0,1-6,.17,5.89,5.89,0,0,1-4.08-3.54,9,9,0,0,1-.31-.92,4.17,4.17,0,0,1,.49-3.51,3.49,3.49,0,0,1,.37-.47,2.93,2.93,0,0,1,.42-.37h0a2.52,2.52,0,0,1,2.66-.33,2.69,2.69,0,0,1,.87.7,2.45,2.45,0,0,1,.48,1,3.3,3.3,0,0,1-1.36,3.16.77.77,0,0,0,1,1.16,4.78,4.78,0,0,0,1.86-4.65,4.18,4.18,0,0,0-.79-1.66,4.26,4.26,0,0,0-1.4-1.13,4,4,0,0,0-4.27.48h0a4.45,4.45,0,0,0-.61.54,4.86,4.86,0,0,0-.54.66,5.69,5.69,0,0,0-.7,4.79,9.46,9.46,0,0,0,.37,1.1,7.4,7.4,0,0,0,5.1,4.45,13.36,13.36,0,0,0,6.84-.16,17,17,0,0,0,2-.69,20.6,20.6,0,0,0,7.5-5.41c0,.13,0,.25,0,.38,0,.43,0,.87,0,1.32v0a31.33,31.33,0,0,1-1.37,7.75c-.17.55-.34,1.08-.51,1.57s-.36,1-.58,1.57l0,0-.83,2.12-.25.64.61.33,2,1.08a28.62,28.62,0,0,0,20.08,2.14,27.41,27.41,0,0,0,3.84-1.27,25.49,25.49,0,0,0,3.57-1.82h0l0,0h0a23.2,23.2,0,0,0,3.28-2.43l.58-.54c.21-.2.4-.39.55-.55h0c.22-.23.44-.46.65-.7,3.82,4.41,7.77,7,12.16,8.08,4.59,1.16,9.63.74,15.5-.77,5.06-1.31,7-.67,10.62.48,1,.32,2.07.67,3.38,1l1.32.37-.37-1.32c-.37-1.3-.72-2.39-1-3.37-1.16-3.59-1.79-5.56-.48-10.62,1.51-5.88,1.93-10.92.76-15.51-1.11-4.39-3.67-8.33-8.07-12.15l.31-.29h0l.19-.17h0l.18-.18h0a21.72,21.72,0,0,0,2.65-3.09l.45-.65.42-.67h0a29.05,29.05,0,0,0,3.54-20,25.7,25.7,0,0,0-1-3.86,24.08,24.08,0,0,0-1.55-3.61h0l0,0h0l-1.09-2-.32-.61-.64.25-2.13.84a37.35,37.35,0,0,1-8,2.19c-.52.08-1,.14-1.48.19s-1,.08-1.46.1h0q-.88,0-1.74,0a20.74,20.74,0,0,0,5.42-7.5,15.7,15.7,0,0,0,.68-2,13.26,13.26,0,0,0,.17-6.84,7.4,7.4,0,0,0-4.45-5.1,9.66,9.66,0,0,0-1.11-.38,5.7,5.7,0,0,0-4.78.7,5.86,5.86,0,0,0-.67.54,5.13,5.13,0,0,0-.54.61h0a4,4,0,0,0-.48,4.28,3.9,3.9,0,0,0,1.13,1.39,4,4,0,0,0,1.65.79,4.8,4.8,0,0,0,4.66-1.85.77.77,0,0,0-.08-1.09.77.77,0,0,0-1.09.07,3.29,3.29,0,0,1-3.16,1.35,2.47,2.47,0,0,1-1-.48,2.44,2.44,0,0,1-.38-3.53h0v0a3.62,3.62,0,0,1,.38-.41,2.91,2.91,0,0,1,.46-.38,4.21,4.21,0,0,1,3.51-.48,7.08,7.08,0,0,1,.92.31,5.89,5.89,0,0,1,3.55,4.08,11.7,11.7,0,0,1-.18,6,16,16,0,0,1-.61,1.81,19.7,19.7,0,0,1-6.15,7.89,16.06,16.06,0,0,1-2.37-.55c-.35-.11-.7-.24-1.06-.39a9.05,9.05,0,0,1-1-.47h0a10.41,10.41,0,0,1-3.92-3.67,9.58,9.58,0,0,1-.56-1c-.18-.35-.34-.72-.49-1.1h0a18.66,18.66,0,0,1-1.06-4.37c0-.33-.07-.67-.1-1s-.05-.71-.06-1h0v0a17.11,17.11,0,0,1,.4-4.61q.11-.4.21-.78h0c.08-.26.16-.5.25-.74v0h0a11.9,11.9,0,0,1,3.88-5.25,12.57,12.57,0,0,1,1.05-.75c.36-.23.74-.45,1.12-.66h0a21.71,21.71,0,0,1,7.08-2.2c.52-.08,1-.14,1.51-.18s1-.08,1.54-.1h0a31.15,31.15,0,0,1,6.93.56,65.3,65.3,0,0,1,6.74,1.72l1,.29V101.22l-1,.3a65.23,65.23,0,0,1-6.74,1.71,31.15,31.15,0,0,1-6.93.56h0c-.52,0-1-.05-1.54-.1s-1-.1-1.51-.18a21.71,21.71,0,0,1-7.08-2.2h0a14.77,14.77,0,0,1-2.17-1.41,11.9,11.9,0,0,1-3.88-5.25h0v0c-.09-.24-.17-.48-.25-.74h0q-.11-.37-.21-.78a17.11,17.11,0,0,1-.4-4.61v0h0c0-.32,0-.67.06-1s.06-.67.1-1A18.66,18.66,0,0,1,545.86,82h0c.15-.38.31-.75.49-1.1a9.58,9.58,0,0,1,.56-1,10.41,10.41,0,0,1,3.92-3.67h0a9.05,9.05,0,0,1,1-.47c.36-.15.71-.28,1.06-.39a16.06,16.06,0,0,1,2.37-.55,19.7,19.7,0,0,1,6.15,7.89,16,16,0,0,1,.61,1.81,11.73,11.73,0,0,1,.18,6,5.89,5.89,0,0,1-3.55,4.07,7.08,7.08,0,0,1-.92.31,4.13,4.13,0,0,1-3.51-.48,2.91,2.91,0,0,1-.46-.38,3.62,3.62,0,0,1-.38-.41v0h0a2.44,2.44,0,0,1,.38-3.53,2.47,2.47,0,0,1,1-.48A3.29,3.29,0,0,1,558,91a.77.77,0,0,0,1.09.08.79.79,0,0,0,.08-1.1,4.8,4.8,0,0,0-4.66-1.85,4,4,0,0,0-1.65.79,3.85,3.85,0,0,0-1.13,1.4,4,4,0,0,0,.48,4.27h0a5.13,5.13,0,0,0,.54.61,5,5,0,0,0,.67.54,5.7,5.7,0,0,0,4.78.7,9.63,9.63,0,0,0,1.11-.37A7.42,7.42,0,0,0,563.72,91a13.26,13.26,0,0,0-.17-6.84,15.7,15.7,0,0,0-.68-2,20.74,20.74,0,0,0-5.42-7.5q.85,0,1.74,0h0c.48,0,1,0,1.46.09s1,.11,1.48.19a37.35,37.35,0,0,1,8,2.19l2.13.84.64.25.32-.61,1.09-2h0l0,0h0a24.08,24.08,0,0,0,1.55-3.61,25.7,25.7,0,0,0,1-3.86,29.05,29.05,0,0,0-3.54-20h0l-.42-.67-.45-.65a22.28,22.28,0,0,0-2.65-3.09h0l-.18-.18h0l-.19-.18h0l-.31-.29c4.4-3.82,7-7.76,8.07-12.15,1.17-4.59.75-9.63-.76-15.51-1.31-5.06-.68-7,.48-10.62.31-1,.66-2.07,1-3.37L578.3,0,577,.37c-1.31.36-2.4.71-3.38,1C570,2.55,568,3.19,563,1.88,557.11.37,552.07,0,547.48,1.11c-4.39,1.12-8.34,3.67-12.16,8.08-.21-.24-.43-.47-.65-.7h0c-.15-.16-.34-.34-.55-.55l-.58-.54A23.2,23.2,0,0,0,530.25,5h0l0,0h0a25.49,25.49,0,0,0-3.57-1.82,27.41,27.41,0,0,0-3.84-1.27A28.62,28.62,0,0,0,502.72,4l-2,1.08-.61.33.25.64.83,2.12,0,.05c.22.55.41,1.08.58,1.57s.34,1,.51,1.57a31.33,31.33,0,0,1,1.37,7.76v0c0,.45,0,.89,0,1.32,0,.13,0,.26,0,.38a20.72,20.72,0,0,0-7.5-5.41,15.32,15.32,0,0,0-2-.68,13.26,13.26,0,0,0-6.84-.17,7.4,7.4,0,0,0-5.1,4.45,9.46,9.46,0,0,0-.37,1.1,5.69,5.69,0,0,0,.7,4.79,4.32,4.32,0,0,0,.54.66,5.32,5.32,0,0,0,.61.55h0a4,4,0,0,0,4.27.48,4.26,4.26,0,0,0,1.4-1.13,4.18,4.18,0,0,0,.79-1.66,4.78,4.78,0,0,0-1.86-4.65.77.77,0,1,0-1,1.16,3.3,3.3,0,0,1,1.36,3.16,2.45,2.45,0,0,1-.48,1,2.57,2.57,0,0,1-.87.7,2.52,2.52,0,0,1-2.66-.33h0a3.19,3.19,0,0,1-.79-.84,4.17,4.17,0,0,1-.49-3.51,8.79,8.79,0,0,1,.31-.91,5.91,5.91,0,0,1,4.08-3.55,11.8,11.8,0,0,1,6,.17,15,15,0,0,1,1.82.62A19.64,19.64,0,0,1,503.45,23a13.61,13.61,0,0,1-1.4,4.43h0v0c-.16.3-.34.59-.53.88a8.53,8.53,0,0,1-.62.83,11.1,11.1,0,0,1-4.62,3.26h0c-.24.1-.49.19-.76.28l-.81.24a21.76,21.76,0,0,1-4.85.7h0c-.34,0-.67,0-1,0l-.94,0a14.54,14.54,0,0,1-4.18-.85h0a12.19,12.19,0,0,1-1.22-.54,9.6,9.6,0,0,1-1.12-.65A13.13,13.13,0,0,1,477,26.73v0h0c-.23-.43-.43-.85-.61-1.26s-.36-.88-.52-1.34a26,26,0,0,1-1.35-7.55,31.06,31.06,0,0,1,.57-6.92,64.59,64.59,0,0,1,1.71-6.74l.3-1H101.22l.3,1a64.59,64.59,0,0,1,1.71,6.74,31.06,31.06,0,0,1,.56,6.92,26.34,26.34,0,0,1-1.34,7.55c-.16.46-.34.91-.52,1.34s-.38.83-.61,1.26h0l0,0A13.06,13.06,0,0,1,97,31.6a10.5,10.5,0,0,1-1.12.65,13.29,13.29,0,0,1-1.22.54h0a14.4,14.4,0,0,1-4.17.85l-.95,0c-.31,0-.64,0-1,0h0a21.67,21.67,0,0,1-4.84-.7l-.81-.24c-.27-.09-.53-.18-.76-.28h0a11.13,11.13,0,0,1-4.63-3.26c-.22-.26-.42-.54-.62-.83s-.37-.58-.53-.88v0h0A13.87,13.87,0,0,1,74.84,23a19.67,19.67,0,0,1,7.89-6.14,14.26,14.26,0,0,1,1.81-.62,11.83,11.83,0,0,1,6-.17,5.89,5.89,0,0,1,4.07,3.55,6.45,6.45,0,0,1,.31.91A4.13,4.13,0,0,1,94.48,24a3,3,0,0,1-.38.47,3.51,3.51,0,0,1-.41.37h0a2.52,2.52,0,0,1-2.66.33,2.47,2.47,0,0,1-.87-.7,2.45,2.45,0,0,1-.48-1A3.3,3.3,0,0,1,91,20.34a.77.77,0,1,0-1-1.16,4.78,4.78,0,0,0-1.86,4.65,4,4,0,0,0,6.46,2.31h0a6.31,6.31,0,0,0,.61-.55,4.32,4.32,0,0,0,.54-.66,5.72,5.72,0,0,0,.7-4.79,9.46,9.46,0,0,0-.37-1.1A7.39,7.39,0,0,0,91,14.58a13.26,13.26,0,0,0-6.84.17,15.7,15.7,0,0,0-2,.68,20.72,20.72,0,0,0-7.5,5.41c0-.12,0-.25,0-.38,0-.42,0-.87,0-1.31v0A31.83,31.83,0,0,1,76,11.35c.17-.55.34-1.08.5-1.57s.37-1,.59-1.57l0-.05L78,6l.25-.64-.61-.33L75.57,4A28.59,28.59,0,0,0,55.5,1.85a27,27,0,0,0-3.84,1.27,25,25,0,0,0-3.57,1.82h0l0,0h0a23.2,23.2,0,0,0-3.28,2.43l-.58.54-.56.55h0c-.22.23-.43.46-.64.7-3.83-4.41-7.77-7-12.16-8.08C26.23,0,21.19.37,15.32,1.88c-5.07,1.31-7,.67-10.63-.48-1-.32-2.07-.67-3.37-1L0,0,.37,1.32c.36,1.3.71,2.4,1,3.37,1.15,3.59,1.79,5.56.48,10.62C.37,21.19,0,26.23,1.11,30.82,2.23,35.21,4.78,39.15,9.19,43l-.31.29h0l-.18.18h0l-.18.18h0a22.91,22.91,0,0,0-2.64,3.09c-.16.22-.31.44-.45.65L5,48H5a29,29,0,0,0-3.54,20,26.94,26.94,0,0,0,1,3.86A24.12,24.12,0,0,0,4,75.54H4l0,0H4l1.08,2,.33.61L6,78l2.13-.84a37.27,37.27,0,0,1,8-2.19c.53-.08,1-.14,1.49-.19s1-.08,1.46-.09h0q.9,0,1.74,0a20.72,20.72,0,0,0-5.41,7.5,15.7,15.7,0,0,0-.68,2A13.26,13.26,0,0,0,14.58,91,7.39,7.39,0,0,0,19,96.09a9.46,9.46,0,0,0,1.1.37,5.72,5.72,0,0,0,4.79-.7,4.32,4.32,0,0,0,.66-.54,6.31,6.31,0,0,0,.55-.61h0a4,4,0,0,0,.48-4.28,4.13,4.13,0,0,0-1.13-1.39,4.05,4.05,0,0,0-1.66-.79A4.79,4.79,0,0,0,19.18,90a.78.78,0,1,0,1.17,1,3.29,3.29,0,0,1,3.16-1.35,2.47,2.47,0,0,1,1,.48,2.42,2.42,0,0,1,.7.86,2.52,2.52,0,0,1-.33,2.67h0v0a3.51,3.51,0,0,1-.37.41,3.44,3.44,0,0,1-.46.38,4.16,4.16,0,0,1-3.52.48,6.92,6.92,0,0,1-.91-.31,5.89,5.89,0,0,1-3.55-4.07,11.83,11.83,0,0,1,.17-6,16,16,0,0,1,.62-1.81A19.61,19.61,0,0,1,23,74.84a16.37,16.37,0,0,1,2.37.55c.34.11.7.24,1.05.39s.69.3,1,.46l0,0a10.31,10.31,0,0,1,3.91,3.67,9.63,9.63,0,0,1,.57,1c.17.35.34.72.49,1.1h0a17.71,17.71,0,0,1,1.06,4.37c0,.33.08.67.1,1s0,.71.07,1h0v0a17.1,17.1,0,0,1-.41,4.61c-.06.27-.13.53-.2.78h0c-.07.26-.16.5-.24.74v0h0a11.9,11.9,0,0,1-3.88,5.25q-.53.4-1.05.75c-.36.23-.74.46-1.12.66h0a21.73,21.73,0,0,1-7.07,2.2c-.52.08-1,.14-1.52.18s-1,.08-1.53.1h0a31.06,31.06,0,0,1-6.92-.56,65.23,65.23,0,0,1-6.74-1.71l-1-.3v26.59Zm5.18,0V721.65l.92-.19a37.48,37.48,0,0,1,6.21-.7c.43,0,.84,0,1.25,0l1.24,0h0a31.58,31.58,0,0,1,9.16,1.68c.57.2,1.12.41,1.65.64s1.05.49,1.58.77h0a18,18,0,0,1,6.78,6.08,15.35,15.35,0,0,1,.92,1.59,16.94,16.94,0,0,1,.76,1.74h0a19.86,19.86,0,0,1,1.16,5.58c0,.43,0,.84,0,1.23s0,.84,0,1.28v0a26.39,26.39,0,0,1-.89,6.1c-.09.32-.19.66-.31,1s-.24.69-.35,1h0v0a16.14,16.14,0,0,1-4.8,6.74,15,15,0,0,1-1.23.91,13.69,13.69,0,0,1-1.33.79h0l-.94.47a30.88,30.88,0,0,1-4.23-2.36c.39-.09.76-.19,1.13-.31s.82-.28,1.19-.44a11.33,11.33,0,0,0,1.12-.53l0,0a11.81,11.81,0,0,0,4.5-4.2,11.35,11.35,0,0,0,.64-1.13,12.6,12.6,0,0,0,.55-1.24h0A19.56,19.56,0,0,0,35,743.49c0-.34.08-.7.11-1.06s0-.7.06-1.11h0v0a18.07,18.07,0,0,0-.44-5c-.06-.29-.14-.57-.23-.86h0c-.08-.28-.17-.55-.28-.83v0h0a13.44,13.44,0,0,0-4.37-5.94c-.37-.29-.76-.56-1.17-.83s-.79-.49-1.21-.71h0a23.54,23.54,0,0,0-7.6-2.38c-.51-.07-1.05-.13-1.6-.18s-1.07-.08-1.61-.11h0a32.91,32.91,0,0,0-7.27.59c-2,.38-3.95.89-5.9,1.46v-55.5h0V103.3c1.95.56,3.9,1.08,5.9,1.45a32.91,32.91,0,0,0,7.27.59h0c.54,0,1.07-.06,1.61-.11s1.09-.11,1.59-.18a23.52,23.52,0,0,0,7.61-2.38h0c.42-.22.82-.46,1.21-.71s.8-.54,1.16-.83a13.39,13.39,0,0,0,4.38-5.94h0v0c.11-.28.2-.55.28-.82h0c.09-.29.17-.57.23-.86a18,18,0,0,0,.44-5v0h0c0-.41,0-.78-.06-1.11s-.07-.72-.11-1.06a19.56,19.56,0,0,0-1.15-4.75h0a12.6,12.6,0,0,0-.55-1.24,11.35,11.35,0,0,0-.64-1.13,11.81,11.81,0,0,0-4.5-4.2l0,0A11.33,11.33,0,0,0,27,74.35c-.37-.16-.77-.3-1.19-.44s-.75-.22-1.13-.31a30.88,30.88,0,0,1,4.23-2.36l.94.47h0c.46.24.9.51,1.33.79a15,15,0,0,1,1.23.91,16.14,16.14,0,0,1,4.8,6.74v0h0c.11.29.23.62.35,1s.22.72.31,1a26.39,26.39,0,0,1,.89,6.1v0c0,.44,0,.87,0,1.28s0,.81,0,1.23a19.86,19.86,0,0,1-1.16,5.58h0a16.94,16.94,0,0,1-.76,1.74,16.64,16.64,0,0,1-.92,1.6,18.09,18.09,0,0,1-6.78,6.07h0c-.53.28-1.06.54-1.58.77s-1.08.44-1.65.64A31.58,31.58,0,0,1,16.74,109h0l-1.24,0H14.2A38.58,38.58,0,0,1,8,108.25l-.92-.19v19.75ZM134.37,8.62h334L468.3,9c-.07.41-.13.82-.19,1.25a40,40,0,0,0-.31,6.58v0h0q0,1,.12,1.92c.06.67.14,1.31.23,1.92a28.66,28.66,0,0,0,2.92,9.22v0h0c.3.57.62,1.12,1,1.65s.72,1.06,1.12,1.57a18.45,18.45,0,0,0,8.13,5.94h0c.33.13.69.25,1.09.37s.75.22,1.13.31a23.78,23.78,0,0,0,6.47.6h0l1.36-.08c.46,0,.89-.08,1.31-.14a24.38,24.38,0,0,0,5.94-1.45h0c.59-.23,1.17-.49,1.72-.77A17.3,17.3,0,0,0,502,37h0a16.88,16.88,0,0,0,5.82-6.22c.25.61.47,1.24.68,1.86a44.67,44.67,0,0,1,2.12,17.19c-.42,5.64-1.95,10.86-4.63,14.65a13.26,13.26,0,0,1-9.44,5.88,6.5,6.5,0,0,1-1.07,0,5.6,5.6,0,0,1-3.69-1.64,6.06,6.06,0,0,1-1.68-3.54,6.61,6.61,0,0,1,0-1,5.3,5.3,0,0,1,1.23-3.15,4.78,4.78,0,0,1,2-1.45,3.44,3.44,0,0,1,2.19-.11,3.15,3.15,0,0,1,2.19,3,2.69,2.69,0,0,1-.21,1.07,2,2,0,0,1-.63.78,2.62,2.62,0,0,1-1.57.44.78.78,0,0,0,0,1.55,4.12,4.12,0,0,0,2.49-.74,3.44,3.44,0,0,0,1.12-1.4,4.12,4.12,0,0,0,.36-1.7,4.63,4.63,0,0,0-.89-2.72A4.55,4.55,0,0,0,496,58.05a5,5,0,0,0-3.15.13,6.39,6.39,0,0,0-2.71,1.91,6.8,6.8,0,0,0-1.58,4.07,7.28,7.28,0,0,0,0,1.24,7.59,7.59,0,0,0,2.12,4.46A7.13,7.13,0,0,0,495.42,72a7.48,7.48,0,0,0,1.33,0,14.76,14.76,0,0,0,10.52-6.53c2.85-4,4.48-9.53,4.92-15.43A46.42,46.42,0,0,0,510,32.16c-.37-1.1-.79-2.19-1.25-3.24.19-.45.36-.91.51-1.37a24.66,24.66,0,0,0,1.1-8.68v0h0c0-.53-.05-1-.09-1.48s-.1-1-.16-1.5a42.18,42.18,0,0,0-1.6-7.09,18.79,18.79,0,0,1,1.89-.55,20.58,20.58,0,0,1,2.7-.46,21.9,21.9,0,0,1,13.64,2.91c3.5,2.16,5.19,5.16,7.1,8.57h0l.35.61.58,1,.71-.95c3.68-4.91,6.93-8.67,10.86-10.74s8.5-2.49,15-.82h0l.1,0h0c3.38.87,4.57,1.17,7.74.73-.44,3.18-.13,4.37.74,7.74l0,.1c1.67,6.49,1.23,11.11-.82,15s-5.83,7.18-10.74,10.86l-1,.71,1,.58.62.35h0c3.41,1.92,6.4,3.61,8.56,7.11h0A18.38,18.38,0,0,1,568.89,54a21.45,21.45,0,0,1,.93,2.59,22.46,22.46,0,0,1-.28,13.22l-.86-.27-1.53-.42h0a37.14,37.14,0,0,0-7.72-1.17h0c-.6,0-1.19,0-1.77,0s-1.2,0-1.75.09a22.06,22.06,0,0,0-6.5,1.53c-1-.46-2.13-.87-3.24-1.24a46,46,0,0,0-17.79-2.2c-5.9.44-11.4,2.07-15.42,4.92a14.73,14.73,0,0,0-6.54,10.52,8.48,8.48,0,0,0,0,1.33,7.06,7.06,0,0,0,2.1,4.7,7.58,7.58,0,0,0,4.45,2.13,7.43,7.43,0,0,0,1.25,0,6.86,6.86,0,0,0,4.06-1.58,6.5,6.5,0,0,0,1.92-2.71,5,5,0,0,0,.13-3.16,4.7,4.7,0,0,0-4.48-3.3,4.26,4.26,0,0,0-1.69.35,3.54,3.54,0,0,0-1.4,1.12,4.14,4.14,0,0,0-.75,2.49.78.78,0,1,0,1.56,0,2.55,2.55,0,0,1,.44-1.57,1.92,1.92,0,0,1,.78-.63,2.64,2.64,0,0,1,1.06-.21,3.15,3.15,0,0,1,3,2.2,3.51,3.51,0,0,1-.1,2.19,4.84,4.84,0,0,1-1.45,2,5.25,5.25,0,0,1-3.15,1.22,5.46,5.46,0,0,1-1,0,6,6,0,0,1-3.54-1.69,5.52,5.52,0,0,1-1.64-3.68,6.47,6.47,0,0,1,0-1.07,13.24,13.24,0,0,1,5.89-9.44c3.78-2.68,9-4.22,14.64-4.64a44.82,44.82,0,0,1,17.19,2.12c.63.21,1.25.44,1.86.68-.43.24-.85.49-1.26.77s-.93.65-1.37,1a17.7,17.7,0,0,0-5.26,7.37v0h0c-.14.37-.27.72-.38,1.06s-.22.69-.34,1.11a28.83,28.83,0,0,0-.94,6.45v0c0,.45,0,.9,0,1.35s0,.9.05,1.3a21.22,21.22,0,0,0,1.26,6h0a19.12,19.12,0,0,0,.83,1.9,16.67,16.67,0,0,0,1,1.74,19.49,19.49,0,0,0,7.35,6.59h0c.54.29,1.1.56,1.69.81s1.16.49,1.75.7a33,33,0,0,0,9.63,1.75h0q.63,0,1.29,0l1.29,0a40.13,40.13,0,0,0,5.55-.56V719.77a40.13,40.13,0,0,0-5.55-.56l-1.29,0q-.66,0-1.29,0h0a33,33,0,0,0-9.63,1.76c-.59.2-1.17.43-1.75.69s-1.15.52-1.69.81h0a19.49,19.49,0,0,0-7.35,6.59,16.67,16.67,0,0,0-1,1.74,19.12,19.12,0,0,0-.83,1.9h0a21.22,21.22,0,0,0-1.26,6c0,.4,0,.84-.05,1.3s0,.9,0,1.35v0a28.83,28.83,0,0,0,.94,6.45c.12.42.23.79.34,1.12s.24.68.38,1.05h0v0a17.7,17.7,0,0,0,5.26,7.37c.44.35.89.69,1.37,1s.83.53,1.26.77c-.61.24-1.23.47-1.86.68a44.82,44.82,0,0,1-17.19,2.12c-5.63-.42-10.86-2-14.64-4.64a13.24,13.24,0,0,1-5.89-9.44,6.47,6.47,0,0,1,0-1.07,5.52,5.52,0,0,1,1.64-3.68,6,6,0,0,1,3.54-1.69,5.46,5.46,0,0,1,1,0,5.38,5.38,0,0,1,3.15,1.22,4.84,4.84,0,0,1,1.45,2,3.51,3.51,0,0,1,.1,2.19,3.15,3.15,0,0,1-3,2.2,2.64,2.64,0,0,1-1.06-.21,1.92,1.92,0,0,1-.78-.63,2.55,2.55,0,0,1-.44-1.57.78.78,0,0,0-1.56,0,4.14,4.14,0,0,0,.75,2.49,3.46,3.46,0,0,0,1.4,1.12,4.1,4.1,0,0,0,1.69.35,4.7,4.7,0,0,0,2.73-.88,4.64,4.64,0,0,0,1.75-2.42,5,5,0,0,0-.13-3.16,6.5,6.5,0,0,0-1.92-2.71,6.93,6.93,0,0,0-4.06-1.58,7.43,7.43,0,0,0-1.25,0,7.58,7.58,0,0,0-4.45,2.13,7.06,7.06,0,0,0-2.1,4.7,8.48,8.48,0,0,0,0,1.33,14.73,14.73,0,0,0,6.54,10.52c4,2.85,9.52,4.49,15.42,4.92a46,46,0,0,0,17.79-2.2c1.11-.37,2.19-.78,3.24-1.24a22.06,22.06,0,0,0,6.5,1.53c.55,0,1.13.08,1.75.09s1.17,0,1.77,0h0a37.14,37.14,0,0,0,7.72-1.17h0l1.53-.42.86-.27a22.46,22.46,0,0,1,.28,13.22,20.86,20.86,0,0,1-.93,2.59,18.38,18.38,0,0,1-1.25,2.41h0c-2.16,3.5-5.15,5.19-8.56,7.11h0l-.62.35-1,.58,1,.71c4.91,3.69,8.66,6.94,10.74,10.86s2.49,8.5.82,15l0,.1c-.87,3.37-1.18,4.57-.74,7.74-3.17-.44-4.36-.14-7.74.74h0l-.1,0c-6.48,1.67-11.1,1.24-15-.82s-7.18-5.83-10.86-10.74l-.71-.95-.58,1-.35.62h0c-1.91,3.4-3.6,6.4-7.1,8.56A21.9,21.9,0,0,1,513.09,822a20.58,20.58,0,0,1-2.7-.46,18.79,18.79,0,0,1-1.89-.55,42.18,42.18,0,0,0,1.6-7.09c.06-.54.12-1,.16-1.5s.07-1,.09-1.47h0v0a24.66,24.66,0,0,0-1.1-8.68c-.15-.46-.32-.92-.51-1.37.46-1,.88-2.13,1.25-3.24a46.42,46.42,0,0,0,2.2-17.79c-.44-5.9-2.07-11.4-4.92-15.43a14.76,14.76,0,0,0-10.52-6.53,7.48,7.48,0,0,0-1.33,0,7.13,7.13,0,0,0-4.71,2.09,7.59,7.59,0,0,0-2.12,4.46,7.28,7.28,0,0,0,0,1.24,6.8,6.8,0,0,0,1.58,4.07,6.39,6.39,0,0,0,2.71,1.91,5,5,0,0,0,3.15.13,4.55,4.55,0,0,0,2.42-1.75,4.61,4.61,0,0,0,.89-2.72,4.15,4.15,0,0,0-.36-1.7,3.44,3.44,0,0,0-1.12-1.4,4.12,4.12,0,0,0-2.49-.74.78.78,0,0,0,0,1.55,2.62,2.62,0,0,1,1.57.44,2,2,0,0,1,.63.78,2.69,2.69,0,0,1,.21,1.07,3.15,3.15,0,0,1-2.19,3,3.44,3.44,0,0,1-2.19-.11,4.78,4.78,0,0,1-2-1.45,5.29,5.29,0,0,1-1.23-3.14,6.69,6.69,0,0,1,0-1,6,6,0,0,1,1.68-3.53,5.56,5.56,0,0,1,3.69-1.65,7.83,7.83,0,0,1,1.07,0,13.26,13.26,0,0,1,9.44,5.88c2.68,3.79,4.21,9,4.63,14.65a44.67,44.67,0,0,1-2.12,17.19c-.21.62-.43,1.25-.68,1.86A16.88,16.88,0,0,0,502,792.7h0a17.3,17.3,0,0,0-1.59-.9c-.55-.28-1.13-.54-1.72-.77h0a24.85,24.85,0,0,0-5.94-1.45l-1.31-.14c-.41,0-.87-.06-1.36-.07h0a23.78,23.78,0,0,0-6.47.6l-1.13.31c-.4.12-.76.24-1.09.37h0a18.45,18.45,0,0,0-8.13,5.94c-.4.51-.77,1-1.12,1.57s-.67,1.08-1,1.65h0v0a28.64,28.64,0,0,0-2.92,9.23c-.09.61-.17,1.24-.23,1.91s-.1,1.28-.12,1.92h0v0a40,40,0,0,0,.31,6.58c.06.43.12.85.19,1.25l.06.34H109.94l.06-.34c.06-.4.13-.82.18-1.25a37.9,37.9,0,0,0,.31-6.58v0h0c0-.64-.07-1.28-.13-1.92s-.13-1.3-.22-1.91a28.41,28.41,0,0,0-2.93-9.23v0h0c-.3-.57-.63-1.12-1-1.65s-.73-1.06-1.13-1.57A18.33,18.33,0,0,0,97,790.64h0c-.33-.13-.7-.25-1.09-.37L94.72,790a23.78,23.78,0,0,0-6.47-.6h0c-.49,0-.94,0-1.36.07l-1.31.14A24.76,24.76,0,0,0,79.6,791h0c-.6.23-1.17.49-1.73.77a15.89,15.89,0,0,0-1.58.9h0a17,17,0,0,0-5.83,6.22c-.24-.61-.46-1.24-.68-1.86a44.86,44.86,0,0,1-2.12-17.19c.42-5.64,2-10.86,4.64-14.65a13.22,13.22,0,0,1,9.44-5.88,7.83,7.83,0,0,1,1.07,0A5.51,5.51,0,0,1,86.48,761a6,6,0,0,1,1.69,3.53,5.57,5.57,0,0,1,0,1A5.22,5.22,0,0,1,87,768.62a4.84,4.84,0,0,1-2,1.45,3.45,3.45,0,0,1-2.19.11A3.11,3.11,0,0,1,81.13,769a3.17,3.17,0,0,1-.58-1.81,2.53,2.53,0,0,1,.22-1.07,1.94,1.94,0,0,1,.62-.78A2.62,2.62,0,0,1,83,764.9a.78.78,0,1,0,0-1.55,4.11,4.11,0,0,0-2.48.74,3.55,3.55,0,0,0-1.13,1.4,4.31,4.31,0,0,0-.35,1.7,4.7,4.7,0,0,0,3.3,4.47,5,5,0,0,0,3.16-.13,6.39,6.39,0,0,0,2.71-1.91,6.87,6.87,0,0,0,1.58-4.07,7.28,7.28,0,0,0,0-1.24,7.61,7.61,0,0,0-2.13-4.46,7.08,7.08,0,0,0-4.7-2.09,7.45,7.45,0,0,0-1.33,0A14.72,14.72,0,0,0,71,764.33c-2.85,4-4.48,9.53-4.92,15.43a46,46,0,0,0,2.2,17.79c.37,1.11.78,2.19,1.25,3.24-.19.45-.36.91-.51,1.37a24.9,24.9,0,0,0-1.11,8.68v0h0q0,.78.09,1.47c0,.46.09,1,.16,1.5A41.22,41.22,0,0,0,69.8,821a19,19,0,0,1-1.9.55,20.43,20.43,0,0,1-2.69.46,21.89,21.89,0,0,1-13.64-2.91c-3.5-2.16-5.19-5.16-7.11-8.56h0l-.35-.62-.58-1-.71.95c-3.68,4.91-6.93,8.67-10.86,10.74s-8.5,2.49-15,.82l-.09,0h0c-3.37-.88-4.56-1.18-7.74-.74.44-3.17.14-4.37-.73-7.74l0-.1c-1.67-6.49-1.24-11.11.82-15s5.83-7.17,10.74-10.86l.95-.71-1-.58-.61-.35h0c-3.41-1.92-6.41-3.61-8.57-7.11h0a19.76,19.76,0,0,1-1.26-2.41,20.83,20.83,0,0,1-.92-2.59,22.46,22.46,0,0,1,.28-13.22l.86.27,1.53.42h0a37.14,37.14,0,0,0,7.72,1.17h0c.59,0,1.18,0,1.77,0s1.2,0,1.75-.09a22,22,0,0,0,6.49-1.53c1,.46,2.14.87,3.24,1.24A46,46,0,0,0,50,763.6c5.9-.43,11.4-2.07,15.43-4.92a14.72,14.72,0,0,0,6.53-10.52,8.5,8.5,0,0,0,0-1.33,7.16,7.16,0,0,0-2.1-4.7A7.58,7.58,0,0,0,65.4,740a7.28,7.28,0,0,0-1.24,0,6.93,6.93,0,0,0-4.07,1.58,6.48,6.48,0,0,0-1.91,2.71,5,5,0,0,0-.13,3.16,4.59,4.59,0,0,0,1.75,2.42,4.69,4.69,0,0,0,2.72.88,4.11,4.11,0,0,0,1.7-.35,3.52,3.52,0,0,0,1.4-1.12,4.14,4.14,0,0,0,.74-2.49.78.78,0,1,0-1.55,0,2.62,2.62,0,0,1-.44,1.57,2.06,2.06,0,0,1-.78.63,2.69,2.69,0,0,1-1.07.21,3.15,3.15,0,0,1-3-2.2,3.45,3.45,0,0,1,.11-2.19,4.84,4.84,0,0,1,1.45-2,5.35,5.35,0,0,1,3.15-1.22,5.49,5.49,0,0,1,1,0,6,6,0,0,1,3.54,1.69,5.68,5.68,0,0,1,1.6,4.75,13.22,13.22,0,0,1-5.88,9.44c-3.79,2.68-9,4.22-14.65,4.64a44.79,44.79,0,0,1-17.18-2.12c-.63-.21-1.25-.44-1.86-.68.43-.24.85-.49,1.26-.77a15.37,15.37,0,0,0,1.36-1,17.63,17.63,0,0,0,5.27-7.37v0h0c.14-.37.27-.72.38-1.05s.22-.7.33-1.12a28.24,28.24,0,0,0,1-6.45v0c0-.45,0-.9,0-1.35s0-.9,0-1.3a21.22,21.22,0,0,0-1.26-6h0c-.25-.66-.53-1.29-.83-1.9a18.67,18.67,0,0,0-1-1.74,19.57,19.57,0,0,0-7.35-6.59h0q-.8-.43-1.68-.81c-.58-.26-1.17-.49-1.75-.69a33.07,33.07,0,0,0-9.63-1.76h0c-.42,0-.85,0-1.3,0l-1.29,0a40,40,0,0,0-5.54.56V670.92h0v-561a40,40,0,0,0,5.54.56l1.29,0c.45,0,.88,0,1.3,0h0a32.74,32.74,0,0,0,9.63-1.76c.58-.2,1.17-.43,1.75-.69s1.15-.52,1.68-.81h0a19.57,19.57,0,0,0,7.35-6.59,18.67,18.67,0,0,0,1-1.74c.3-.61.58-1.24.83-1.9h0a21.23,21.23,0,0,0,1.26-6c0-.41,0-.85.05-1.31s0-.9,0-1.35v0a28.24,28.24,0,0,0-1-6.45q-.16-.63-.33-1.11c-.11-.34-.24-.69-.38-1.06h0v0a17.72,17.72,0,0,0-5.27-7.37,15.37,15.37,0,0,0-1.36-1c-.41-.28-.83-.53-1.26-.77.61-.24,1.23-.47,1.86-.68a44.79,44.79,0,0,1,17.18-2.12c5.64.42,10.86,2,14.65,4.64a13.22,13.22,0,0,1,5.88,9.44,5.66,5.66,0,0,1-1.61,4.75,6,6,0,0,1-3.53,1.69,5.49,5.49,0,0,1-1,0A5.23,5.23,0,0,1,61.09,87a4.84,4.84,0,0,1-1.45-2,3.45,3.45,0,0,1-.11-2.19,3.15,3.15,0,0,1,3-2.2,2.69,2.69,0,0,1,1.07.21,2.06,2.06,0,0,1,.78.63A2.62,2.62,0,0,1,64.81,83a.78.78,0,1,0,1.55,0,4.14,4.14,0,0,0-.74-2.49,3.61,3.61,0,0,0-1.4-1.12,4.11,4.11,0,0,0-1.7-.35,4.69,4.69,0,0,0-2.72.88,4.59,4.59,0,0,0-1.75,2.42,5,5,0,0,0,.13,3.16,6.48,6.48,0,0,0,1.91,2.71,6.93,6.93,0,0,0,4.07,1.58,7.28,7.28,0,0,0,1.24,0,7.58,7.58,0,0,0,4.46-2.13A7,7,0,0,0,72,82.88a7.42,7.42,0,0,0,0-1.33A14.72,14.72,0,0,0,65.38,71c-4-2.85-9.53-4.48-15.43-4.92a46,46,0,0,0-17.79,2.2c-1.1.37-2.19.78-3.23,1.24A22.13,22.13,0,0,0,22.42,68q-.81-.08-1.74-.09c-.59,0-1.18,0-1.77,0h0a37.14,37.14,0,0,0-7.72,1.17h0l-1.53.42-.86.27a22.46,22.46,0,0,1-.28-13.22A21.42,21.42,0,0,1,9.4,54a19.76,19.76,0,0,1,1.26-2.41h0c2.16-3.5,5.16-5.19,8.57-7.11h0l.62-.35,1-.58-.95-.71C15,39.14,11.26,35.89,9.19,32s-2.49-8.5-.82-15l0-.1c.87-3.37,1.17-4.56.74-7.74,3.17.44,4.36.14,7.73-.73h0l.09,0h0c6.49-1.67,11.11-1.24,15,.82S39.14,15,42.82,19.93l.71.95.58-1,.35-.61h0c1.92-3.41,3.61-6.41,7.11-8.57A21.9,21.9,0,0,1,65.21,7.75a20.43,20.43,0,0,1,2.69.46,19.78,19.78,0,0,1,1.9.55,41.22,41.22,0,0,0-1.6,7.09c-.07.54-.12,1-.16,1.5s-.07,1-.09,1.48h0v0a24.9,24.9,0,0,0,1.11,8.68c.15.46.32.92.51,1.37-.47,1-.88,2.14-1.25,3.24A46,46,0,0,0,66.11,50c.44,5.9,2.07,11.4,4.92,15.43a14.72,14.72,0,0,0,10.52,6.53,7.45,7.45,0,0,0,1.33,0,7.08,7.08,0,0,0,4.7-2.09,7.61,7.61,0,0,0,2.13-4.46,7.28,7.28,0,0,0,0-1.24,6.87,6.87,0,0,0-1.58-4.07,6.39,6.39,0,0,0-2.71-1.91,5,5,0,0,0-3.16-.13A4.7,4.7,0,0,0,79,62.52a4.11,4.11,0,0,0,.35,1.7,3.61,3.61,0,0,0,1.12,1.4,4.16,4.16,0,0,0,2.49.74.78.78,0,1,0,0-1.55,2.62,2.62,0,0,1-1.57-.44,1.94,1.94,0,0,1-.62-.78,2.53,2.53,0,0,1-.22-1.07,3.17,3.17,0,0,1,.58-1.81,3.11,3.11,0,0,1,1.62-1.18,3.45,3.45,0,0,1,2.19.11,4.84,4.84,0,0,1,2,1.45,5.23,5.23,0,0,1,1.22,3.15,5.49,5.49,0,0,1,0,1,6,6,0,0,1-1.69,3.53,5.51,5.51,0,0,1-3.68,1.65,6.5,6.5,0,0,1-1.07,0,13.22,13.22,0,0,1-9.44-5.88c-2.68-3.79-4.22-9-4.64-14.65a44.86,44.86,0,0,1,2.12-17.19c.22-.62.44-1.24.68-1.86A17,17,0,0,0,76.28,37h0a15.89,15.89,0,0,0,1.58.9c.56.28,1.13.54,1.73.77h0a24.76,24.76,0,0,0,5.93,1.45c.42.06.86.1,1.31.14l1.37.08h0a23.78,23.78,0,0,0,6.47-.6c.38-.09.75-.2,1.13-.31s.76-.24,1.09-.37h0a18.33,18.33,0,0,0,8.13-5.94c.4-.51.78-1,1.13-1.57s.67-1.08,1-1.65h0v0a28.41,28.41,0,0,0,2.93-9.23c.09-.6.16-1.24.22-1.91s.11-1.28.13-1.92h0v0a37.9,37.9,0,0,0-.31-6.58c-.05-.43-.12-.85-.18-1.25l-.06-.34Zm0-5.18H475a59.72,59.72,0,0,0-1.45,5.9,32.32,32.32,0,0,0-.59,7.27,27.48,27.48,0,0,0,1.43,8c.17.48.35,1,.56,1.44s.43.95.66,1.38h0l0,0a14.51,14.51,0,0,0,4.84,5.44,12,12,0,0,0,1.27.73,10.85,10.85,0,0,0,1.38.61h0a15.84,15.84,0,0,0,4.63.94l1,0h1.1a23.32,23.32,0,0,0,5.19-.74l.89-.27.84-.3h0a12.75,12.75,0,0,0,5.26-3.73,11.17,11.17,0,0,0,.71-.95c.21-.32.41-.65.59-1h0v0a14.54,14.54,0,0,0,1.3-3.47,31.31,31.31,0,0,1,2.35,4.22c-.14.32-.29.62-.45.92h0l0,0h0a15.39,15.39,0,0,1-5.39,5.82h0c-.47.3-.95.57-1.45.83s-1,.49-1.6.71h0a22.75,22.75,0,0,1-5.56,1.36c-.42,0-.83.1-1.25.13s-.89.06-1.3.08h0a21.59,21.59,0,0,1-6.05-.56c-.36-.08-.71-.18-1-.28s-.66-.21-1-.34h0a16.84,16.84,0,0,1-7.45-5.45c-.37-.46-.71-1-1-1.45s-.64-1-.92-1.56v0h0a27,27,0,0,1-2.75-8.7c-.09-.63-.16-1.24-.22-1.83s-.09-1.22-.12-1.84v0a38,38,0,0,1,.3-6.32c.05-.39.11-.8.18-1.2S470,8.44,470,8V8l.18-.92H108.07l.18.93V8c.08.41.15.81.21,1.18s.13.81.18,1.2a38,38,0,0,1,.3,6.32v0c0,.62-.06,1.23-.12,1.84s-.12,1.2-.22,1.83a26.75,26.75,0,0,1-2.74,8.7h0v0c-.29.53-.59,1.05-.92,1.56s-.68,1-1,1.45a16.89,16.89,0,0,1-7.45,5.45h0l-1,.34c-.33.1-.68.2-1.05.28a21.52,21.52,0,0,1-6,.56h0c-.42,0-.85,0-1.31-.08s-.82-.08-1.24-.13a22.75,22.75,0,0,1-5.56-1.36h0c-.56-.22-1.09-.46-1.6-.71s-1-.53-1.45-.83h0a15.42,15.42,0,0,1-5.4-5.82h0v0h0c-.16-.3-.31-.6-.45-.92a31.31,31.31,0,0,1,2.35-4.22,14.54,14.54,0,0,0,1.3,3.47v0h0q.28.51.6,1a9.39,9.39,0,0,0,.71.95,12.69,12.69,0,0,0,5.26,3.73h0q.42.16.84.3l.88.27a23.33,23.33,0,0,0,5.2.74h1.1l1,0a15.84,15.84,0,0,0,4.62-.94h0a12.27,12.27,0,0,0,1.38-.61,12,12,0,0,0,1.27-.73,14.59,14.59,0,0,0,4.84-5.44v0h0q.33-.64.66-1.38c.2-.48.39-1,.56-1.44a27.81,27.81,0,0,0,1.43-8,32.91,32.91,0,0,0-.59-7.27c-.37-2-.89-3.95-1.45-5.9ZM535.22,34.55h-.78v0a8.6,8.6,0,0,0-5.26,2.47h0a8.48,8.48,0,0,0-2,3.07c-.09.23-.16.46-.23.69a9.11,9.11,0,0,0-.27,1.49h0v.77h0v.78h0A8.43,8.43,0,0,0,528,47.68a6.46,6.46,0,0,0,.54.75c.2.24.4.47.61.68h0a8.42,8.42,0,0,0,3.06,2c.23.08.46.16.7.22a8.17,8.17,0,0,0,1.49.28v0H536v0a8.42,8.42,0,0,0,3.83-1.31c.25-.17.5-.35.74-.54s.48-.41.69-.61h0a8.64,8.64,0,0,0,2-3.07c.08-.23.16-.46.22-.69a9.11,9.11,0,0,0,.27-1.49h0v-.77h0v-.78h0a8.49,8.49,0,0,0-2.47-5.26h0a8.56,8.56,0,0,0-3.07-2c-.23-.08-.46-.16-.69-.22a8.17,8.17,0,0,0-1.49-.28v0Zm-.43,1.56h.84a7,7,0,0,1,1.44.24,5.22,5.22,0,0,1,.56.18,6.87,6.87,0,0,1,2.51,1.62h0a7,7,0,0,1,2.05,4.51v.42h0v.41a6.77,6.77,0,0,1-.24,1.44l-.18.56A7.27,7.27,0,0,1,540.15,48h0a6.47,6.47,0,0,1-.56.5A4.51,4.51,0,0,1,539,49a6.93,6.93,0,0,1-3.32,1.1h-.88a6.49,6.49,0,0,1-1.41-.24,4.75,4.75,0,0,1-.57-.18A7.09,7.09,0,0,1,530.28,48h0a6.39,6.39,0,0,1-.51-.55c-.15-.2-.3-.4-.44-.62a6.79,6.79,0,0,1-1.09-3.32v-.43h0v-.44a7.28,7.28,0,0,1,.23-1.41c.06-.2.12-.38.19-.56a7,7,0,0,1,1.62-2.52h0A7,7,0,0,1,534.79,36.11Zm.42-5.17h.24a12.73,12.73,0,0,1,2.71.36c.32.08.62.17.9.26a12.12,12.12,0,0,1,1.74.74,12.1,12.1,0,0,1,5.8,6.56c.13.34.23.67.32,1a12.36,12.36,0,0,1,.43,3.24h0v.25A12.11,12.11,0,0,1,547,46c-.07.32-.16.62-.25.9a12.12,12.12,0,0,1-.74,1.74,11.84,11.84,0,0,1-2.2,3,12,12,0,0,1-4.36,2.8,8.71,8.71,0,0,1-1,.32,11.88,11.88,0,0,1-3.23.44h-.31a12.26,12.26,0,0,1-2.65-.35l-.9-.26a12.62,12.62,0,0,1-1.74-.74,12.1,12.1,0,0,1-5.8-6.56c-.12-.34-.23-.67-.32-1a12.23,12.23,0,0,1-.43-3.23h0v-.3a12.18,12.18,0,0,1,.36-2.65c.08-.32.16-.62.26-.9a12.68,12.68,0,0,1,.73-1.75,12.28,12.28,0,0,1,2.2-3h0A12.12,12.12,0,0,1,531,31.7a8.71,8.71,0,0,1,1-.32,12,12,0,0,1,3.24-.44Zm-39,47.7h0a3.47,3.47,0,0,1,3.47,3.46h0a3.47,3.47,0,0,1-3.47,3.46h0a3.48,3.48,0,0,1-3.47-3.46h0a3.47,3.47,0,0,1,3.47-3.46Zm0-1.55h0a5,5,0,0,0-5,5h0a5,5,0,0,0,5,5h0a5,5,0,0,0,5-5h0a5,5,0,0,0-5-5Zm55.47-53.92h0a3.48,3.48,0,0,1,3.47,3.47h0a3.49,3.49,0,0,1-1,2.45,3.44,3.44,0,0,1-2.45,1h0a3.47,3.47,0,0,1-3.46-3.46h0a3.48,3.48,0,0,1,3.47-3.46Zm0-1.55h0a5.08,5.08,0,0,0-3.55,1.47,5,5,0,0,0-1.46,3.54h0a5,5,0,0,0,5,5h0a5,5,0,0,0,5-5h0a5,5,0,0,0-1.47-3.55,5.05,5.05,0,0,0-3.54-1.47Zm-.33,48.86a21.35,21.35,0,0,1,4.67-.91c.57,0,1.12-.08,1.65-.1s1.11,0,1.68,0h0a35.5,35.5,0,0,1,7.39,1.12h0l1.47.41c.52.15,1,.31,1.48.46h0l0,0,.7.23.27-.69a23.84,23.84,0,0,0,.58-14.88,22,22,0,0,0-1-2.78A20.06,20.06,0,0,0,569,50.77h0v0h0c-2.28-3.69-5.29-5.48-8.71-7.41,4.62-3.52,8.17-6.74,10.24-10.66,2.23-4.22,2.72-9.19.94-16.09l0-.1c-.9-3.47-1.16-4.47-.55-8.16L571,7.27,570,7.45c-3.68.6-4.68.34-8.15-.55h0l-.1,0h0c-6.91-1.78-11.87-1.29-16.1,1-3.91,2.07-7.13,5.62-10.66,10.24-1.93-3.42-3.71-6.43-7.41-8.71a23.5,23.5,0,0,0-14.61-3.14A22.34,22.34,0,0,0,510,6.7a20.64,20.64,0,0,0-2.77.86h0l-.68.26.23.7A40.71,40.71,0,0,1,508.56,16c.06.45.11.92.15,1.43s.08,1,.09,1.42v0a23.47,23.47,0,0,1-1,8,31,31,0,0,0-2.73-4.4c0-.23.05-.47.07-.71,0-.42.05-.88.06-1.37s0-.93,0-1.4v0a32.77,32.77,0,0,0-1.44-8.14c-.15-.51-.33-1.05-.53-1.63s-.4-1.12-.6-1.64v0L502,6.11l1.42-.76a27.09,27.09,0,0,1,19-2,27.56,27.56,0,0,1,3.63,1.2,23,23,0,0,1,3.35,1.71h0l0,0h0a21,21,0,0,1,3,2.27l.55.5c.15.14.32.31.52.52h0c.29.29.57.6.84.91l.16.2h0l.15.18v0h0l.6.7.58-.71c3.79-4.57,7.65-7.17,11.94-8.26s9.11-.69,14.74.76,7.61.73,11.48-.51l2-.62c-.21.72-.42,1.37-.62,2-1.24,3.86-1.92,6-.5,11.48s1.86,10.42.76,14.74-3.69,8.15-8.26,11.94l-.73.6.73.59c.32.26.64.54,1,.83h0l.18.16h0l.18.16h0a20.64,20.64,0,0,1,2.46,2.89c.14.19.28.4.42.61l.41.62h0a27.49,27.49,0,0,1,3.34,18.94,26.63,26.63,0,0,1-.94,3.64A24.09,24.09,0,0,1,573,74.81h0l0,0h0l-.76,1.41-1.48-.58a38.18,38.18,0,0,0-8.3-2.28c-.5-.08-1-.14-1.57-.2s-1-.08-1.54-.1h0a22.63,22.63,0,0,0-3.52.12A31,31,0,0,0,551.33,70.48Zm-16.12-41.1h-.78v0a13.64,13.64,0,0,0-2.87.46q-.59.16-1.11.36a13.68,13.68,0,0,0-4.93,3.16h0a13.84,13.84,0,0,0-3.3,5.35q-.16.51-.3,1a13.9,13.9,0,0,0-.38,2.53h0v.78h0v.77h0a14.22,14.22,0,0,0,.47,2.87c.11.39.23.77.36,1.11a13.64,13.64,0,0,0,6.54,7.41,13.85,13.85,0,0,0,2,.83c.34.11.68.21,1,.29a14.15,14.15,0,0,0,2.54.38v0H536v0a12.94,12.94,0,0,0,2.87-.47,11.11,11.11,0,0,0,1.11-.35,13.68,13.68,0,0,0,4.93-3.16,13.42,13.42,0,0,0,2.47-3.39,12.67,12.67,0,0,0,.83-2,10.6,10.6,0,0,0,.3-1,14,14,0,0,0,.38-2.54h0v-.77h0v-.77h0a14.22,14.22,0,0,0-.47-2.87c-.11-.4-.23-.77-.35-1.12a13.73,13.73,0,0,0-6.55-7.4,14.23,14.23,0,0,0-2-.83c-.35-.11-.69-.21-1-.29a13.3,13.3,0,0,0-2.54-.38v0h-.78ZM43.08,34.55h.78v0a8.6,8.6,0,0,1,5.26,2.47h0a8.48,8.48,0,0,1,2,3.07c.08.23.16.46.22.69a8.17,8.17,0,0,1,.28,1.49h0v.77h0v.78h0a8.55,8.55,0,0,1-1.32,3.82,7.91,7.91,0,0,1-.54.75c-.2.24-.4.47-.61.68h0a8.37,8.37,0,0,1-3.07,2c-.23.08-.46.16-.69.22a7.39,7.39,0,0,1-1.49.27v0H42.31v0a8.38,8.38,0,0,1-3.82-1.31,7.91,7.91,0,0,1-.75-.54,8.33,8.33,0,0,1-.68-.61h0a8.7,8.7,0,0,1-2-3.07c-.08-.23-.16-.46-.22-.69a7.39,7.39,0,0,1-.27-1.49h0v-.77h0v-.78h0a8.49,8.49,0,0,1,2.47-5.26h0a8.48,8.48,0,0,1,3.07-2l.69-.23a9.11,9.11,0,0,1,1.49-.27v0Zm.43,1.56h-.84a6.77,6.77,0,0,0-1.44.24,5.22,5.22,0,0,0-.56.18,7,7,0,0,0-2.52,1.62h0a7,7,0,0,0-2,4.51v.42h0v.41a6.88,6.88,0,0,0,.24,1.44,5.22,5.22,0,0,0,.18.56A7,7,0,0,0,38.15,48h0c.19.18.38.35.56.5s.4.31.61.45a7,7,0,0,0,3.33,1.09h.88a6.71,6.71,0,0,0,1.41-.24,4.59,4.59,0,0,0,.56-.18A7.13,7.13,0,0,0,48,48h0a6.22,6.22,0,0,0,.5-.55,7,7,0,0,0,.45-.62,6.89,6.89,0,0,0,1.09-3.32v-.43h0v-.44a6.6,6.6,0,0,0-.24-1.41,4.59,4.59,0,0,0-.18-.56A6.91,6.91,0,0,0,48,38.15h0A7,7,0,0,0,43.51,36.11Zm-.42-5.17h-.24a12.73,12.73,0,0,0-2.71.36c-.32.08-.62.17-.9.26a12.74,12.74,0,0,0-1.75.74,12,12,0,0,0-3,2.19,12.16,12.16,0,0,0-2.79,4.37,9.27,9.27,0,0,0-.32,1,12,12,0,0,0-.44,3.24h0v.25A12.1,12.1,0,0,0,31.3,46c.08.32.17.62.26.9a12.12,12.12,0,0,0,.74,1.74,11.81,11.81,0,0,0,2.19,3,12,12,0,0,0,4.37,2.8,9.27,9.27,0,0,0,1,.32,12,12,0,0,0,3.24.44h.3A12.17,12.17,0,0,0,46,54.87c.32-.08.62-.17.9-.26a12.13,12.13,0,0,0,7.54-7.3,9.27,9.27,0,0,0,.32-1,12,12,0,0,0,.44-3.24h0v-.3a12.17,12.17,0,0,0-.35-2.65c-.08-.32-.17-.62-.26-.9a12.74,12.74,0,0,0-.74-1.75,12.24,12.24,0,0,0-2.19-3h0a12.32,12.32,0,0,0-4.37-2.8c-.34-.12-.67-.23-1-.31a12,12,0,0,0-3.24-.44Zm39,47.7h0a3.47,3.47,0,0,0-3.46,3.46h0a3.47,3.47,0,0,0,3.46,3.46h0a3.47,3.47,0,0,0,3.46-3.46h0a3.47,3.47,0,0,0-3.46-3.46Zm0-1.55h0a5,5,0,0,1,5,5h0a5,5,0,0,1-5,5h0a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h0ZM26.64,23.17h0a3.48,3.48,0,0,0-3.46,3.47h0a3.47,3.47,0,0,0,3.47,3.46h0a3.47,3.47,0,0,0,3.47-3.46h0a3.47,3.47,0,0,0-3.47-3.46Zm0-1.55h0a5.1,5.1,0,0,1,3.55,1.47,5,5,0,0,1,1.46,3.54h0a5,5,0,0,1-5,5h0a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h0ZM27,70.48a21.55,21.55,0,0,0-4.68-.91c-.57,0-1.11-.08-1.64-.1s-1.12,0-1.69,0h0a35.7,35.7,0,0,0-7.39,1.12h0c-.47.12-1,.26-1.47.41s-1,.31-1.48.46l-.05,0-.69.23L7.57,71A23.75,23.75,0,0,1,8,53.38a20.11,20.11,0,0,1,1.36-2.61h0v0h0c2.28-3.69,5.29-5.48,8.71-7.41C13.44,39.82,9.89,36.6,7.82,32.68c-2.24-4.22-2.73-9.19-1-16.09l0-.1C7.79,13,8.05,12,7.45,8.33L7.27,7.27l1.06.18c3.69.6,4.69.34,8.16-.55h0l.1,0h0c6.9-1.78,11.87-1.29,16.09,1,3.92,2.07,7.14,5.62,10.66,10.24,1.93-3.42,3.72-6.43,7.41-8.71A23.55,23.55,0,0,1,65.37,6.21a22.94,22.94,0,0,1,2.89.49A21.1,21.1,0,0,1,71,7.56h0l.69.26-.23.7A39.16,39.16,0,0,0,69.74,16c-.06.45-.11.92-.16,1.43s-.07,1-.09,1.42v0a23.17,23.17,0,0,0,1,8,30.52,30.52,0,0,1,2.73-4.39c0-.23,0-.47-.07-.71,0-.42-.06-.88-.07-1.37s0-.93,0-1.4v0a33.2,33.2,0,0,1,1.43-8.14c.16-.51.34-1.05.53-1.63s.4-1.12.6-1.64l0,0,.59-1.49-1.42-.76a27.11,27.11,0,0,0-19-2,27.91,27.91,0,0,0-3.62,1.2,23.58,23.58,0,0,0-3.36,1.71h0l0,0h0A21.08,21.08,0,0,0,45.8,8.55l-.54.5c-.15.14-.33.31-.53.52h0c-.29.29-.57.6-.84.91h0l-.16.2h0l-.16.18v0h0l-.6.7-.59-.71c-3.78-4.57-7.64-7.17-11.93-8.26s-9.12-.69-14.74.76-7.62.73-11.48-.51l-2-.62c.22.72.43,1.37.62,2,1.24,3.86,1.93,6,.51,11.48S1.52,26.12,2.62,30.44s3.69,8.15,8.26,11.94l.73.6-.74.59c-.31.26-.63.54-.95.83h0l-.17.17h0l-.17.16h0A20.7,20.7,0,0,0,7.1,47.62c-.14.19-.28.4-.42.61l-.4.62h0A27.49,27.49,0,0,0,2.94,67.8a25.26,25.26,0,0,0,.94,3.64,22.51,22.51,0,0,0,1.45,3.37h0l0,0h0l.76,1.41,1.49-.58a38.83,38.83,0,0,1,8.29-2.28c.5-.08,1-.14,1.58-.2s1-.08,1.54-.1h0a22.67,22.67,0,0,1,3.52.12A30.46,30.46,0,0,1,27,70.48Zm16.11-41.1h.78v0a13.54,13.54,0,0,1,2.87.46c.4.11.77.23,1.12.36a13.56,13.56,0,0,1,4.92,3.16h0a13.74,13.74,0,0,1,3.31,5.35c.11.34.21.68.29,1a13.9,13.9,0,0,1,.38,2.53h0v.78h0v.77h0a13.54,13.54,0,0,1-.46,2.87c-.11.39-.23.77-.36,1.12a13.77,13.77,0,0,1-6.54,7.4,14.36,14.36,0,0,1-2,.83c-.34.11-.69.21-1,.29a13.88,13.88,0,0,1-2.54.38v0H42.31v0a12.94,12.94,0,0,1-2.87-.47,10.54,10.54,0,0,1-1.12-.35,13.64,13.64,0,0,1-4.92-3.16,13.46,13.46,0,0,1-2.48-3.39,13.73,13.73,0,0,1-.83-2c-.11-.34-.21-.69-.29-1a14,14,0,0,1-.38-2.54h0v-.77h0v-.77h0a12.94,12.94,0,0,1,.47-2.87,10.54,10.54,0,0,1,.35-1.12,13.73,13.73,0,0,1,6.55-7.4,13.73,13.73,0,0,1,2-.83c.34-.11.68-.21,1-.29a13.08,13.08,0,0,1,2.53-.38v0Z";
    const svgPath_1 = "M7,384.6c0-112.5,0-225,0-337.4c0-1.3,0.1-2.7,0-4C6.8,40.8,7.8,40,9.9,40c4.2,0.1,8.3-0.1,12.5,0  c2.8,0.1,3.6-1.2,3.6-4.1c0-2.9-1-4.1-3.7-4c-3.9,0.2-7.9,0-11.8,0c-2.4,0-3.6-0.9-3.5-3.8c0.2-5.9,0.1-11.8,0-17.7  c0-2.3,0.6-3.3,2.8-3.2c6.3,0.1,12.5,0.1,18.7,0c2.1,0,2.7,1,2.6,3c-0.1,3.9,0,7.7,0,11.6c0,4.7,0.3,4.8,4,5  c3.6,0.3,3.5-2.1,3.5-4.8c-0.1-4,0.1-8,0-11.9c-0.1-2.2,0.8-2.9,2.7-2.9c6.4,0.1,12.7,0.1,19.1,0c1.9,0,2.8,0.7,2.8,2.9  c-0.1,6.3-0.1,12.5-0.1,18.8c0,2.2-1.2,3-2.9,3c-4,0-8.1-0.1-12.2,0c-3.9,0.1-5.4,2.2-4.1,6.2c0.2,0.8,1.5,1.8,2.3,1.8  c7.2,0.2,14.5,0.1,21.7,0.2c2.6,0,2.6-2,2.6-4c0-8.4,0.1-16.9-0.1-25.3c-0.1-2.7,0.5-3.7,3-3.6c6,0.2,12.1,0.1,18.1,0  c2.6-0.1,3.4,1.1,3.4,3.8c0.2,9.3,0.2,9.3,8.6,9.3c5.2,0,5.2,0,5.2-5.8c0-8.6-0.6-7.2,6.4-7.2c122.2,0,244.3,0,366.5,0  c4.3,0,4.3,0,4.3,4.9c0,9.9,0.3,8.1,7.5,8.1c6.6,0,6.4,1.1,6.4-7c0-0.8,0.1-1.7,0-2.5c-0.2-2.6,0.8-3.6,3.2-3.6  c6,0.1,12.1,0.2,18.1,0c2.6-0.1,3.5,0.8,3.4,3.7c-0.2,8.3,0.1,16.6-0.1,24.9c-0.1,3.4,1.1,4.4,4,4.3c6.2-0.1,12.5-0.1,18.8,0  c2.6,0,4-0.5,4-4c0-3.5-1.3-4.4-4.1-4.3c-3.9,0.1-7.9,0-11.8,0.2c-2.6,0.1-3.5-1.1-3.5-3.8c0.1-5.9,0.1-11.8,0-17.7  c0-2.5,0.9-3.3,3.1-3.3c6.1,0.1,12.3,0.1,18.4,0c2.2,0,2.9,0.9,2.8,3.2c-0.1,4.3,0.1,8.7-0.1,13c-0.1,2.7,1.1,3.6,3.4,3.5  c2.2-0.1,4.2-0.1,4.2-3.5c-0.1-4.3,0.1-8.7,0-13c0-2.3,0.8-3.2,2.9-3.2c6.1,0.1,12.3,0.1,18.4,0c2.2,0,2.9,0.9,2.9,3.2  c-0.1,6.1-0.1,12.3,0,18.4c0,2.4-0.9,3.2-3,3.2c-4.2-0.1-8.3,0.1-12.5,0c-2.8-0.1-3.2,1.5-3.2,4.1c0,2.6,0.5,4.1,3.2,4  c3.6-0.1,7.2,0,10.9,0c4.6,0,4.6,0,4.6,4.9c0,24.7,0,49.4,0,74.1c0,201.2,0,402.5,0,603.7c0,7.6,0.5,6.8-6.2,6.8c-1,0-2,0-3,0  c-1.9,0-2.9,0.9-2.9,3c0,2.9,0,5.8,0,8.7c0,2.2,0.9,3,2.9,2.9c2.2-0.1,4.4,0.1,6.6,0c2.3-0.2,3.1,0.9,3,3.3c-0.1,6-0.1,12,0,18.1  c0.1,2.8-0.8,3.8-3.4,3.8c-8-0.1-16-0.1-24,0c-4.3,0-4.5,0.3-4.5,4.8c0,6.1,0.1,12.3,0,18.4c-0.1,3.5,1.6,3.8,4.2,3.9  c2.6,0,3.9-0.7,3.8-3.8c-0.2-4.3,0-8.7-0.1-13c0-2,0.7-2.8,2.5-2.8c6.4,0.1,12.7,0.1,19.1,0c1.9,0,2.5,0.9,2.5,2.9  c0,6.5-0.1,13,0,19.5c0,2-0.8,2.8-2.6,2.8c-3.7-0.1-7.5,0-11.2,0c-4.9,0-5.1,0.3-5.2,4.1c-0.2,4.5,2.6,3.9,5.1,3.9  c3.6,0,7.2,0.1,10.9,0c2,0,3.1,0.6,3.1,3.1c-0.1,6.3-0.1,12.5,0,18.8c0,2.2-0.8,3-2.8,3c-6.1-0.1-12.3-0.1-18.4,0  c-2.1,0-3-0.8-2.9-3.2c0.1-4.3-0.1-8.7,0.1-13c0.1-3.1-1.5-3.6-3.7-3.5c-2.2,0.1-4.2,0.1-4.2,3.5c0.1,4.3-0.1,8.7,0,13  c0,2.3-0.8,3.2-2.9,3.2c-6-0.1-12.1-0.1-18.1,0c-2.1,0-3-0.8-3-3.2c0.1-6.1,0.1-12.3,0-18.4c0-2.3,0.8-3.3,2.9-3.2  c4.1,0.1,8.1-0.1,12.2,0c2.6,0.1,3.7-0.9,3.7-4c0-2.8-0.7-4.2-3.5-4.2c-6.6,0.1-13.2,0.1-19.7,0c-2.5,0-3.5,1-3.5,3.8  c0.1,8.6,0,17.1,0.1,25.7c0,2.4-0.6,3.5-3,3.4c-6-0.1-12.1-0.1-18.1,0c-2.3,0-3.2-1-3-3.4c0-0.1,0-0.2,0-0.4  c-0.2-2.9-0.5-5.9-0.7-8.8c-3.8-0.1-7.6-0.3-11.4-0.2c-0.5,0-1.3,1.5-1.4,2.3c-0.2,2.5-0.2,5.1-0.1,7.6c0.1,2.2-0.7,3-2.7,2.9  c-3.3-0.1-6.6,0-9.9,0c-120.3,0-240.6,0-360.9,0c-3.1,0-4.7-1.7-4.7-5.1c0-8.9,0.6-8-7.2-8c-6.8,0-6.7-1.2-6.7,7.5  c0,3.7-1.7,5.6-5,5.6c-5.3,0-10.5-0.1-15.8,0.1c-2.7,0.1-3.7-0.9-3.6-3.9c0.1-8.3-0.2-16.6-0.1-24.9c0-2.9-0.8-4.1-3.5-4.1  c-6.6,0.1-13.2,0.1-19.7,0c-2.5,0-3.6,1-3.5,3.8c0.1,2.7,0.5,4.4,3.5,4.3c4.2-0.1,8.3,0.1,12.5-0.1c2.3-0.1,3.4,0.7,3.4,3.5  c-0.1,5.8,0.1,11.6,0.2,17.3c0.1,2.8-0.8,4.2-3.6,4.1c-6-0.2-12.1-0.1-18.1,0c-2.1,0-2.9-0.8-2.9-3.2c0.1-4.3-0.1-8.7,0.1-13  c0.1-2.6-0.8-3.8-3.2-3.6c-2.3,0.1-4.4,0.1-4.3,3.8c0.2,4.3,0,8.7,0,13c0,2.1-0.7,3-2.7,3c-6.3-0.1-12.5-0.1-18.7,0  c-2.2,0-2.8-1-2.8-3.3c0.1-6.1,0.1-12.3,0-18.4c0-2.4,0.8-3.2,2.9-3.2c4.2,0.1,8.3-0.1,12.5,0.1c2.8,0.1,3.6-1.3,3.6-4.1  c0-2.9-0.9-4.1-3.7-4c-4,0.2-8.1-0.1-12.2,0.1c-2.5,0.1-3.2-1-3.2-3.6c0.1-6.1,0.1-12.3,0-18.4c0-2.3,0.7-3.2,2.8-3.2  c6.1,0.1,12.3,0.1,18.4,0c2.4-0.1,3,1,3,3.4c-0.1,4.2,0.1,8.4-0.1,12.6c-0.1,3.4,1.7,3.5,4,3.6c2.4,0.1,3.6-0.6,3.5-3.6  c-0.2-6.5-0.2-13,0-19.5c0.1-3-0.9-4-3.6-4c-8.2,0.1-16.5,0-24.7,0.1c-2.5,0-3.5-0.7-3.5-3.7c0.2-6,0.2-12,0-18.1  c-0.1-2.8,0.9-3.6,3.3-3.4c2.1,0.2,4.2-0.1,6.2,0.1c2.6,0.2,3.5-1.1,3.5-3.8c-0.1-13,0.9-10.8-9-10.7c-3.4,0-3.9-1.5-3.9-4.7  C7,669.8,7,614.6,7,559.4C7,501.2,7,442.9,7,384.6L7,384.6z M12,394.7c0,107.2,0,214.4,0,321.5c0,1.6,0.1,3.1,0,4.7  c-0.1,2.6,0.8,3.8,3.2,3.7c2.3-0.1,4.6,0.1,6.9-0.1c2.2-0.1,2.9,0.9,2.9,3.2c-0.1,5.8-0.2,11.6,0.1,17.3c0.2,3.7-0.8,4.8-4.2,4.7  c-9-0.2-8.9-0.1-8.9,10c0,3.3,1.2,4.1,3.9,4c7.9-0.2,15.8,0.2,23.7-0.1c3.5-0.1,4.3,1.2,4.2,4.7c-0.2,8.1,0,16.1-0.1,24.2  c0,3,0.9,3.9,3.6,3.9c8.2-0.2,16.4,0.1,24.7-0.2c3.2-0.1,3.9,1.2,3.8,4.4c-0.2,7.7-0.1,15.4,0,23.1c0,5.3,0.1,5.4,5,5.4  c8.4,0,8.4,0,8.5-9.4c0-2.8,1-3.6,3.3-3.5c4.8,0.1,9.7,0,14.5,0c4.6,0,7,2.5,7,7.6c0,3.5,1.6,5.2,4.8,5.2c119,0,238,0,356.9,0  c1,0,2,0,3-0.1c1.9-0.1,2.8-1.1,2.8-3.2c0-2.2,0.1-4.3,0-6.5c0-2.1,0.6-3.1,2.7-3.1c6.3,0.1,12.5,0.1,18.7,0c1.9,0,2.7,0.9,2.8,3  c0.1,3.1-0.4,7.6,1.2,9c1.8,1.7,5.6,0.6,8.6,0.8c0.2,0,0.4,0,0.7,0c2.5,0.2,3.5-1,3.5-3.8c-0.1-8.1,0.1-16.1-0.1-24.2  c-0.1-2.8,0.7-3.8,3.4-3.7c8.3,0.2,16.7,0.1,25,0.1c4.3,0,4.5-0.2,4.5-4.8c0-8.3,0.1-16.6-0.1-24.9c-0.1-3.1,0.7-4.3,3.7-4.2  c5.8,0.2,11.6,0.1,17.4,0.1c6.5,0,9.8-3.5,9.6-10.6c0-0.1,0-0.2,0-0.4c0.1-2.1-0.7-3.1-2.7-3.1c-2.2,0.1-4.4-0.1-6.6,0  c-2.3,0.2-3.1-0.9-3-3.4c0.1-5.4,0-10.8,0-16.3c0-5.5,0-5.4,5-5.5c7.5-0.1,7.4,1.7,7.4-8.2c-0.1-202-0.2-403.9-0.2-605.9  c0-13.7-0.1-27.5,0.1-41.2c0-3.4-1-4.4-4-4.3c-4,0.2-8.1,0-12.2,0.1c-2.3,0.1-3.1-0.9-3-3.4c0.1-3.9-0.1-7.7,0.1-11.6  c0.1-3.3-0.7-4.8-4-4.7c-12.3,0.1-24.6-0.1-36.8-0.1c-2.7,0-3.7-1-3.6-4c0.1-7.5,0.1-14.9,0-22.4c0-6.4,0-6.5-5.8-6.4  c-8.8,0.1-8.1-1.5-8.1,8.9c0,2.9-1,3.9-3.5,3.9c-5-0.1-10.1,0-15.1,0c-4.1,0-6.2-2.3-6.2-6.9c0-3.9-1.8-5.9-5.4-5.9  c-117.6,0-235.1,0-352.7,0c-5.6,0-8.5,3.1-8.7,9.3c0,0.1,0,0.2,0,0.4c0.2,2.4-0.8,3.2-2.9,3.1c-4.7-0.1-9.4,0-14.1-0.1  c-7.5-0.1-7.6-0.1-7.6-8.4c0-3-0.8-4.5-3.7-4.2c-1.9,0.2-3.7,0-5.6,0c-4,0-4.3,0.4-4.3,4.8c0,8.1-0.1,16.1,0,24.2  c0,2.8-0.9,3.9-3.4,3.8c-3.6-0.1-7.2,0-10.8,0c-8.9,0-17.8,0.1-26.6,0c-2.9,0-3.9,1.3-3.7,4.3c0.2,4-0.1,8,0.1,11.9  c0.1,2.8-0.9,3.6-3.3,3.5c-3.7-0.2-7.5,0-11.2,0c-3.2,0-4.7,1.7-4.7,5.1C12,178.4,12,286.6,12,394.7L12,394.7z M19,59.6  c7.7,0,6.8,0.6,6.9-7.6c0-0.5,0-1,0-1.4c0.3-3.5-0.5-5.6-4.3-5.1c-2.1,0.3-4.2,0-6.2,0c-2.4-0.1-3.7,1-3.4,3.8c0.1,0.8,0,1.7,0,2.5  C12.1,60,10.9,59.6,19,59.6z M18.9,829.2c1.5,0,3.1,0.2,4.6-0.1c0.8-0.1,2.1-1,2.1-1.6c0.1-3.8,0.4-7.8-0.5-11.4  c-0.2-0.9-4.3-0.7-6.7-1.1c-0.4-0.1-0.9-0.1-1.3-0.1c-5-0.1-5.1,0-5.2,5.6c0,0.4,0,0.7,0,1.1C12,830.2,11.6,829.1,18.9,829.2  L18.9,829.2z M51,815.1c-4.8,0-7.3,1.9-7.3,5.7c-0.1,10.2-0.3,8.3,7.7,8.5c6.3,0.1,6.3,0.1,6.3-6.8C57.7,814,58.2,815.4,51,815.1  L51,815.1z M50.8,26.8c7.2-0.1,7,1.3,7-7.4c-0.1-7.7,0.3-6.5-8.4-6.7c-5.6-0.1-5.6,0-5.7,6.1C43.6,28.2,43.3,26.6,50.8,26.8  L50.8,26.8z M544.2,26.8c0.5,0,1.1,0,1.6,0c5.4,0,5.4,0,5.3-5.9c-0.1-9.1,1.2-8.1-7.6-8.1c-4.2,0-6.4,2.3-6.4,6.9  C537.2,28.2,537.4,26.6,544.2,26.8L544.2,26.8z M18.9,796.3c7.5-0.2,7.1,1.4,7.1-7.7c0-1.1,0-2.2,0-3.2c0.1-2.1-0.8-3.1-2.8-3.1  c-2.6,0-5.3,0.1-7.9,0c-2.4-0.1-3.5,1-3.3,3.7c0.1,1,0,1.9,0,2.9C12.1,797.4,11.3,796.3,18.9,796.3L18.9,796.3z M18.7,26.8  c0.8,0,1.5,0,2.3,0c5,0,5,0,5-5.3c-0.1-9.8,1.1-8.7-8.1-8.8C12,12.6,12,12.7,12,19c0,0.1,0,0.2,0,0.4C12.1,27.7,11.5,26.7,18.7,26.8  z M576.6,815.1c-0.7,0-1.3-0.1-2-0.1c-5.2,0-5.3,0-5.2,5.8c0.1,9.1-1.6,8.4,8.8,8.4c4.9,0,5-0.2,4.9-5.4c0-0.5-0.1-1-0.1-1.4  C582.8,817.7,580.7,815.3,576.6,815.1L576.6,815.1z M575.6,45.4c-0.6,0-1.7,0.3-2.8,0.2c-3-0.3-3.9,1.2-3.6,4.2c0.1,0.6,0,1.2,0,1.8  c0.2,8.5-1.5,8,7.4,8c7.3,0,6.3,0.4,6.2-7C582.8,45.3,584.4,45.4,575.6,45.4L575.6,45.4z M576.1,26.8c1.1,0,2.2-0.1,3.3,0  c2.8,0.3,3.6-1.1,3.6-4c-0.3-12.1,1.5-9.8-9.1-10.1c-0.3,0-0.7,0-1,0c-2.8-0.3-3.8,1.1-3.5,4c0.1,0.8,0,1.7,0,2.5  C569.3,27.9,568.6,26.6,576.1,26.8z M575.3,796.4c1.9,0,3-0.1,4.1,0c2.7,0.3,3.6-1,3.5-3.9c-0.3-11.8,1.8-10-9.1-10.1  c-0.5,0-1.1,0-1.6,0c-2-0.1-3.1,0.9-2.9,3.2c0.1,1.1,0,2.2,0,3.2C569.4,797.4,568.6,796.3,575.3,796.4L575.3,796.4z M544.5,815.2  c-7.2,0.1-6.9-1-6.9,6c0.1,8.3-1.4,8,7.5,8.1c7.2,0,6.1,0.1,6.1-6.9C551.2,814.3,552,815.3,544.5,815.2L544.5,815.2z M560.6,809.9  c2.8,0.6,3.6-1.1,3.6-4.1c0.1-3-1.1-4-3.7-3.9c-2.6,0.1-4.4,0.5-4.3,4.2C556.4,809.3,557.8,810.2,560.6,809.9L560.6,809.9z   M38.6,805.9c0.6-3.1-0.8-4.1-3.5-4c-2.6,0-4.1,0.8-4,4.1c0.1,3,1.1,4,3.7,4.1C37.6,810,39.1,809.2,38.6,805.9z M38.5,35.8  c0.6-3.1-1-3.8-3.5-3.9c-2.8-0.1-3.9,1.1-3.9,4.2c0,3.1,1.3,3.9,3.8,3.9C37.7,40.1,39.2,39.2,38.5,35.8z M560,39.9  c2.7,0.5,3.8-0.8,3.8-4c0-3-1.2-4-3.8-4c-2.9-0.1-3.8,1.1-3.9,4.2C556.1,39.1,557.2,40.4,560,39.9L560,39.9z";
    const svgPath_2 = "M20.6,22.77c-.26,4.66-4.76,6.77-8.51,8.48-2.04,.94-4.28,1.92-6.07,3.28-4.05,3.07-4.66,8.52-1.15,12.2,2.65,2.78,7.61,2.95,10.51-.92,.09-.12,.12-.29,.16-.44l-2.41-2.86,2.92-2.46c.01-.8,.03-1.6,.09-2.36,.26-3.01,1.5-5.7,3.43-8.02-1.83,5.34,1.05,9.11,2.24,14.06,1.02,4.23,.42,7.5-1.15,10.49l2.68,2.67-2.63,2.63c1.82,1.2,4.28,2.41,6.5,2.35,4.52-.13,8.68-4.96,3.53-7.73,3.21-1.48,5.91,.92,6.43,3.64,2.99-4.12,9.31-3.74,11.83,.79-5.46-2.59-6.61,1.35-9.59,4.53-4.53,4.84-11.04,4.1-16.05,.84,2.49,3.51,3.75,9.59,1.36,14.99-2.15,4.87-6.42,8.12-11.03,11.55-4.63,3.45-8.26,7.59-8.63,16.86-2.97-5.78-2.79-13.51,.52-19.3l-3.39-2.68,2.79-2.56c-3.64-3.65-2.93-6.71-.89-10,1.19-1.92,2.33-3.68,2-5.95-.28-1.99-1.56-3.79-3.73-4.64,5.9-.86,8.74,3.53,7.99,8.15,2.13-1.35,4.58-.95,6.23,.89,0,0-4.08,.15-5.05,3.19-.79,2.51,.03,4.4,1.47,5.41,3.57,2.47,6.96,.19,8.52-3.06,2.24-4.68,.07-10.31-2.98-14.01-3.15-3.79-7.63-6.82-11.24-9.64C-.61,46.92-2.61,38.14,3.88,29.7l-2.62-2.63,2.48-2.49c-2.95-3.03-3.28-7.19-1.63-11.94,.86-2.51,.34-6.52-1.43-8.48,3.79,1.07,6.29,5.16,6,9.41,3.87-.26,6.48,.79,8.9,3.85-3.46-.47-4.9,3.33-3.79,6.04,1.74,4.26,7.28,2.43,8.81-.7h0Zm2.18-2.17c4.65-.27,6.76-4.78,8.48-8.5,.94-2.05,1.92-4.29,3.27-6.08,3.08-4.05,8.54-4.66,12.21-1.16,2.78,2.65,2.94,7.61-.92,10.51-.13,.09-.29,.11-.43,.16l-2.86-2.41-2.48,2.93c-.8,0-1.6,.02-2.36,.09-3.01,.26-5.7,1.49-8.02,3.43,5.33-1.83,9.1,1.05,14.06,2.23,4.22,1.02,7.51,.43,10.48-1.15l2.68,2.68,2.63-2.63c1.19,1.81,2.41,4.27,2.35,6.5-.13,4.52-4.96,8.68-7.72,3.54-1.49,3.2,.91,5.91,3.64,6.43-4.13,3-3.74,9.3,.78,11.82-2.6-5.46,1.35-6.61,4.54-9.59,4.82-4.53,4.09-11.04,.83-16.06,1.6,1.14,3.75,2.03,6.14,2.42,.08,.01,.15,.03,.23,.04,2.74,.41,5.78,.16,8.61-1.1,4.87-2.16,8.12-6.43,11.55-11.03,3.45-4.63,7.6-8.26,16.86-8.63-5.78-2.97-13.5-2.8-19.3,.52l-2.68-3.39-2.56,2.8c-3.66-3.65-6.71-2.94-10-.9-1.91,1.19-3.67,2.33-5.95,2.01-1.99-.28-3.78-1.57-4.64-3.74-.85,5.91,3.53,8.75,8.15,8.01-1.35,2.13-.95,4.58,.89,6.23,0,0,.15-4.08,3.19-5.04,2.52-.8,4.4,.01,5.41,1.47,2.47,3.56,.19,6.95-3.07,8.5-4.67,2.24-10.31,.08-14-2.99-3.8-3.14-6.83-7.62-9.65-11.23C46.93-.61,38.14-2.61,29.7,3.88l-2.62-2.63-2.5,2.49c-3.03-2.96-7.18-3.28-11.94-1.64-2.51,.87-6.51,.35-8.48-1.42,1.06,3.8,5.16,6.3,9.41,6-.26,3.88,.79,6.48,3.85,8.89-.47-3.45,3.34-4.89,6.04-3.78,4.25,1.74,2.43,7.28-.69,8.81Zm-2.18,786.76c-.27-4.66-4.78-6.77-8.5-8.48-2.05-.94-4.29-1.92-6.08-3.28-4.04-3.07-4.65-8.53-1.16-12.2,2.64-2.77,7.61-2.95,10.51,.92,.09,.12,.11,.29,.16,.44l-2.41,2.86,2.93,2.46c0,.8,.02,1.6,.09,2.36,.26,3.01,1.49,5.7,3.43,8.02-1.83-5.34,1.04-9.11,2.23-14.05,1.02-4.23,.43-7.51-1.15-10.5l2.68-2.67-2.63-2.63c1.81-1.2,4.27-2.41,6.5-2.35,4.52,.13,8.68,4.96,3.54,7.73,3.2,1.48,5.91-.92,6.43-3.64,3,4.12,9.3,3.74,11.83-.79-5.46,2.59-6.61-1.35-9.59-4.53-4.53-4.84-11.04-4.1-16.06-.84,2.49-3.51,3.76-9.59,1.36-14.99-2.16-4.87-6.43-8.12-11.03-11.55-4.63-3.45-8.26-7.59-8.63-16.86-2.97,5.78-2.8,13.51,.52,19.3l-3.39,2.68,2.8,2.56c-3.64,3.65-2.94,6.71-.9,10,1.19,1.92,2.33,3.68,2.01,5.95-.28,1.99-1.57,3.79-3.74,4.64,5.91,.86,8.75-3.53,8.01-8.15,2.13,1.35,4.58,.95,6.22-.89,0,0-4.08-.15-5.04-3.19-.8-2.51,.02-4.41,1.47-5.41,3.55-2.45,6.95-.18,8.5,3.06,2.24,4.68,.07,10.32-2.99,14.01-3.13,3.78-7.62,6.82-11.23,9.64-7.91,6.19-9.9,14.97-3.41,23.41l-2.63,2.63,2.49,2.49c-2.96,3.03-3.28,7.19-1.64,11.94,.86,2.51,.35,6.52-1.42,8.48,3.8-1.07,6.3-5.16,6-9.41,3.88,.27,6.48-.79,8.89-3.85-3.45,.47-4.89-3.33-3.78-6.04,1.74-4.26,7.28-2.43,8.81,.7Zm2.17,2.17c4.66,.27,6.77,4.78,8.48,8.5,.94,2.05,1.92,4.29,3.28,6.08,3.07,4.05,8.53,4.65,12.2,1.15,2.77-2.64,2.95-7.61-.92-10.51-.12-.09-.29-.11-.44-.16l-2.86,2.41-2.46-2.93c-.8,0-1.6-.02-2.36-.09-3.01-.26-5.7-1.49-8.02-3.43,5.34,1.83,9.11-1.04,14.05-2.23,4.23-1.02,7.51-.43,10.5,1.15l2.68-2.68,2.63,2.63c1.2-1.81,2.41-4.27,2.35-6.5-.13-4.52-4.96-8.68-7.73-3.54-1.48-3.2,.92-5.91,3.64-6.43-4.12-3-3.74-9.3,.79-11.83-2.59,5.46,1.35,6.61,4.53,9.59,4.84,4.53,4.1,11.04,.84,16.06,1.61-1.14,3.76-2.03,6.14-2.42,.08-.01,.16-.03,.24-.04,2.74-.41,5.77-.17,8.61,1.09,4.87,2.16,8.12,6.43,11.55,11.03,3.45,4.63,7.59,8.26,16.86,8.63-5.78,2.97-13.51,2.8-19.3-.52l-2.68,3.39-2.56-2.8c-3.65,3.65-6.71,2.94-10,.9-1.92-1.19-3.68-2.33-5.95-2.01-1.99,.28-3.79,1.57-4.64,3.74-.86-5.91,3.53-8.75,8.15-8.01-1.35-2.13-.95-4.58,.89-6.22,0,0,.15,4.08,3.19,5.04,2.51,.8,4.4-.01,5.41-1.47,2.47-3.56,.17-6.96-3.06-8.5-4.67-2.23-10.32-.07-14.01,2.99-3.78,3.13-6.82,7.62-9.65,11.23-6.19,7.91-14.97,9.9-23.41,3.41l-2.63,2.63-2.49-2.49c-3.03,2.96-7.19,3.28-11.94,1.64-2.51-.86-6.52-.35-8.48,1.43,1.07-3.8,5.16-6.3,9.41-6-.26-3.88,.79-6.48,3.85-8.89-.47,3.45,3.33,4.89,6.04,3.78,4.26-1.74,2.43-7.28-.7-8.81Zm4.97-29.51c5.2,10.06-1.13,22.5-8.2,30.21,.13,.11,.25,.23,.36,.36,7.71-7.08,20.15-13.4,30.21-8.2-.13-3.09-3.01-6.15-5.56-7.65,3.45-3.67,6.36-10.22,6.12-15.26l-.02-.02c-5.04-.24-11.59,2.67-15.26,6.12-1.5-2.55-4.56-5.42-7.65-5.56Zm533.18,27.34c.27-4.66,4.78-6.77,8.5-8.48,2.05-.94,4.29-1.92,6.08-3.28,4.04-3.07,4.65-8.53,1.15-12.2-2.64-2.77-7.61-2.95-10.51,.92-.09,.12-.11,.29-.16,.44l2.41,2.86-2.93,2.46c0,.8-.02,1.6-.09,2.36-.26,3.01-1.49,5.7-3.43,8.02,1.83-5.34-1.04-9.11-2.23-14.05-1.02-4.23-.43-7.51,1.15-10.5l-2.68-2.67,2.63-2.63c-1.81-1.2-4.27-2.41-6.5-2.35-4.52,.13-8.68,4.96-3.54,7.73-3.2,1.48-5.91-.92-6.43-3.64-3,4.12-9.3,3.74-11.83-.79,5.46,2.59,6.61-1.35,9.59-4.53,4.53-4.84,11.04-4.1,16.06-.84-2.49-3.51-3.76-9.59-1.36-14.99,2.16-4.87,6.43-8.12,11.03-11.55,4.63-3.45,8.26-7.59,8.63-16.86,2.97,5.78,2.8,13.51-.52,19.3l3.39,2.68-2.8,2.56c3.65,3.65,2.94,6.71,.9,10-1.19,1.92-2.33,3.68-2.01,5.95,.28,1.99,1.57,3.79,3.74,4.64-5.91,.86-8.75-3.53-8.01-8.15-2.13,1.35-4.58,.95-6.22-.89,0,0,4.08-.15,5.04-3.19,.8-2.51-.02-4.41-1.47-5.41-3.55-2.45-6.95-.18-8.5,3.06-2.24,4.68-.07,10.32,2.99,14.01,3.13,3.78,7.62,6.82,11.23,9.64,7.91,6.19,9.9,14.97,3.41,23.41l2.63,2.63-2.49,2.49c2.96,3.03,3.28,7.19,1.64,11.94-.86,2.51-.35,6.52,1.42,8.48-3.8-1.07-6.3-5.16-6-9.41-3.88,.27-6.48-.79-8.89-3.85,3.45,.47,4.89-3.33,3.78-6.04-1.74-4.26-7.28-2.43-8.81,.7Zm-2.17,2.17c-4.66,.27-6.77,4.78-8.48,8.5-.94,2.05-1.92,4.29-3.28,6.08-3.07,4.05-8.53,4.65-12.2,1.15-2.77-2.64-2.95-7.61,.92-10.51,.12-.09,.29-.11,.44-.16l2.86,2.41,2.46-2.93c.8,0,1.6-.02,2.36-.09,3.01-.26,5.7-1.49,8.02-3.43-5.34,1.83-9.11-1.04-14.05-2.23-4.23-1.02-7.5-.43-10.5,1.15l-2.67-2.68-2.63,2.63c-1.2-1.81-2.41-4.27-2.35-6.5,.13-4.52,4.96-8.68,7.73-3.54,1.48-3.2-.92-5.91-3.64-6.43,4.12-3,3.74-9.3-.79-11.83,2.59,5.46-1.35,6.61-4.53,9.59-4.84,4.53-4.1,11.04-.84,16.06-1.61-1.14-3.76-2.03-6.14-2.42-.08-.01-.16-.03-.24-.04-2.74-.41-5.77-.17-8.61,1.09-4.87,2.16-8.12,6.43-11.55,11.03-3.45,4.63-7.59,8.26-16.86,8.63,5.78,2.97,13.51,2.8,19.3-.52l2.68,3.39,2.56-2.8c3.65,3.65,6.71,2.94,10,.9,1.92-1.19,3.68-2.33,5.95-2.01,1.99,.28,3.79,1.57,4.64,3.74,.86-5.91-3.53-8.75-8.15-8.01,1.35-2.13,.95-4.58-.89-6.22,0,0-.15,4.08-3.19,5.04-2.51,.8-4.4-.01-5.41-1.47-2.47-3.56-.17-6.96,3.06-8.5,4.67-2.23,10.32-.07,14.01,2.99,3.78,3.12,6.82,7.62,9.64,11.23,6.19,7.91,14.97,9.9,23.41,3.41l2.63,2.63,2.49-2.49c3.03,2.96,7.19,3.28,11.94,1.64,2.51-.86,6.52-.35,8.48,1.43-1.07-3.8-5.16-6.3-9.41-6,.27-3.88-.79-6.48-3.85-8.89,.47,3.45-3.33,4.89-6.04,3.78-4.26-1.74-2.43-7.28,.7-8.81Zm-4.97-29.51c-5.2,10.06,1.13,22.5,8.2,30.21-.13,.11-.25,.23-.36,.36-7.71-7.08-20.15-13.4-30.21-8.2,.14-3.09,3.01-6.15,5.56-7.65-3.45-3.67-6.36-10.22-6.12-15.26l.02-.02c5.04-.24,11.59,2.67,15.26,6.12,1.5-2.55,4.56-5.42,7.65-5.56Zm7.15-757.25c.27,4.66,4.78,6.77,8.5,8.48,2.05,.94,4.29,1.92,6.08,3.28,4.04,3.07,4.66,8.52,1.15,12.2-2.65,2.78-7.61,2.95-10.51-.92-.09-.12-.11-.29-.16-.44l2.41-2.86-2.93-2.46c0-.8-.02-1.6-.09-2.36-.26-3.01-1.49-5.7-3.43-8.02,1.83,5.34-1.04,9.1-2.23,14.05-1.02,4.23-.43,7.51,1.15,10.5l-2.68,2.67,2.63,2.63c-1.81,1.2-4.27,2.41-6.5,2.35-4.52-.13-8.68-4.96-3.54-7.73-3.2-1.48-5.91,.92-6.43,3.64-3-4.11-9.3-3.74-11.83,.79,5.46-2.59,6.61,1.35,9.59,4.53,4.53,4.84,11.04,4.09,16.06,.84-2.49,3.51-3.76,9.59-1.36,14.99,2.16,4.87,6.43,8.12,11.03,11.55,4.63,3.45,8.26,7.6,8.63,16.86,2.97-5.78,2.8-13.51-.52-19.3l3.39-2.68-2.8-2.56c3.65-3.65,2.94-6.71,.9-10-1.19-1.92-2.33-3.68-2.01-5.94,.28-1.99,1.57-3.79,3.74-4.64-5.91-.86-8.75,3.53-8.01,8.15-2.13-1.35-4.58-.95-6.22,.89,0,0,4.08,.15,5.04,3.19,.8,2.51-.01,4.4-1.47,5.41-3.56,2.46-6.95,.18-8.5-3.06-2.24-4.68-.08-10.3,2.99-14.01,3.14-3.8,7.62-6.82,11.23-9.64,7.91-6.19,9.9-14.97,3.41-23.41l2.63-2.63-2.49-2.49c2.96-3.03,3.28-7.19,1.64-11.94-.86-2.51-.35-6.51,1.42-8.48-3.8,1.07-6.3,5.16-6,9.41-3.88-.27-6.48,.79-8.89,3.85,3.45-.47,4.89,3.33,3.78,6.04-1.74,4.26-7.28,2.43-8.81-.69Zm-2.17-2.17c-4.66-.27-6.77-4.78-8.48-8.5-.94-2.05-1.92-4.29-3.28-6.08-3.07-4.05-8.52-4.66-12.2-1.16-2.78,2.65-2.95,7.61,.92,10.51,.12,.09,.29,.11,.44,.16l2.86-2.4,2.46,2.93c.8,0,1.6,.02,2.36,.09,3.01,.26,5.7,1.49,8.02,3.43-5.34-1.83-9.11,1.05-14.05,2.24-4.23,1.02-7.5,.42-10.5-1.15l-2.67,2.68-2.63-2.63c-1.2,1.81-2.41,4.27-2.35,6.5,.13,4.52,4.96,8.68,7.73,3.54,1.48,3.2-.92,5.91-3.64,6.43,4.12,3,3.74,9.3-.79,11.83,2.59-5.46-1.35-6.61-4.53-9.59-4.84-4.53-4.1-11.05-.84-16.06-1.61,1.14-3.76,2.03-6.14,2.42-.08,.01-.16,.03-.24,.04-2.74,.41-5.77,.17-8.61-1.09-4.87-2.16-8.12-6.43-11.55-11.03-3.45-4.63-7.59-8.26-16.86-8.63,5.78-2.97,13.51-2.8,19.3,.51l2.68-3.39,2.56,2.8c3.65-3.65,6.71-2.94,10-.9,1.92,1.19,3.68,2.32,5.95,2.01,1.99-.28,3.79-1.57,4.64-3.74,.86,5.91-3.53,8.75-8.15,8.01,1.35,2.13,.95,4.58-.89,6.23,0,0-.15-4.08-3.19-5.04-2.51-.8-4.4,.01-5.41,1.47-2.47,3.56-.18,6.95,3.06,8.5,4.68,2.24,10.31,.08,14.01-2.98,3.79-3.14,6.82-7.62,9.64-11.23,6.19-7.91,14.97-9.9,23.41-3.41l2.63-2.63,2.49,2.49c3.03-2.97,7.19-3.28,11.94-1.64,2.51,.86,6.52,.34,8.48-1.42-1.07,3.79-5.16,6.3-9.41,6,.27,3.87-.79,6.48-3.85,8.89,.47-3.45-3.33-4.89-6.04-3.79-4.26,1.74-2.43,7.28,.7,8.81Zm-4.97,29.51c-5.2-10.06,1.13-22.5,8.2-30.21-.13-.11-.25-.23-.36-.36-7.71,7.08-20.15,13.4-30.21,8.2,.14,3.09,3.01,6.15,5.56,7.65-3.45,3.68-6.36,10.22-6.12,15.26l.02,.02c5.04,.24,11.59-2.67,15.26-6.12,1.5,2.54,4.56,5.42,7.65,5.56Zm16.23,676.76l6.01-6.01V109.27l-6.01-6.01V726.87ZM5.51,109.27l6.01-6.01c0,106.12,0,517.5,0,623.61l-6.01-6.01c0-102.1,0-509.49,0-611.59ZM109.27,5.51l-6.01,6.01c106.11,0,268.9,0,375.01,0l-6.01-6.01c-102.11,0-260.89,0-362.99,0Zm-13.21,803.63l-75.07-75.07c0-112.45,0-525.57,0-638.02L96.05,20.99c110.54,.01,278.89,0,389.43,0l75.07,75.06c0,112.45,0,525.57,0,638.02l-75.07,75.07c-110.54-.01-278.88-.01-389.42,0Zm388.56-2.08l73.85-73.85V96.92L484.61,23.07c-111.87,0-275.82,0-387.69,0L23.07,96.91c0,111.87,0,524.42,0,636.3l73.85,73.85H484.61Zm-375.34,17.56l-6.01-6.01H478.27l-6.01,6.01H109.27ZM27.74,50.11c5.21-10.06-1.12-22.5-8.19-30.21,.13-.11,.25-.23,.36-.36,7.7,7.08,20.15,13.4,30.2,8.2-.13,3.09-3,6.15-5.55,7.65,3.45,3.67,6.35,10.22,6.12,15.26l-.03,.02c-5.03,.24-11.58-2.67-15.24-6.12-1.51,2.54-4.57,5.42-7.67,5.56Zm42.33,754.24c.1-.02,.2-.04,.31-.06l-.31,.06Zm441.4,0c-.1-.02-.2-.04-.31-.06l.31,.06Zm0-778.57c-.1,.02-.2,.04-.31,.06l.31-.06Zm-441.39,0c.09,.02,.19,.04,.3,.06l-.3-.06Z";
    const svgPath_3 = "M565.02,6.26H6.21V810.25H565.02V6.26ZM3.1,0H571.22V816.51H0V0H3.1Z";
    const svgPath_4 = "M568,509.5 M567.5,525c0,0.3,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6S567.5,524.7,567.5,525z      M567,540.5c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S567,539.9,567,540.5z M566.5,555.9     c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5S566.5,555.1,566.5,555.9z M566.1,571.4c0,1,0.8,1.9,1.9,1.9     s1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9S566.1,570.3,566.1,571.4z M565.8,586.8c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3     c0-1.3-1-2.3-2.3-2.3S565.8,585.5,565.8,586.8z M565.4,602.3c0,1.4,1.2,2.6,2.6,2.6s2.6-1.2,2.6-2.6s-1.2-2.6-2.6-2.6     S565.4,600.8,565.4,602.3z M565.1,617.7c0,1.6,1.3,2.9,2.9,2.9s2.9-1.3,2.9-2.9c0-1.6-1.3-2.9-2.9-2.9S565.1,616.1,565.1,617.7z      M564.8,633.2c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2S564.8,631.4,564.8,633.2z M564.6,648.6     c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4C566.1,645.2,564.6,646.7,564.6,648.6z M564.4,664.1     c0,2,1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6S564.4,662.1,564.4,664.1z M564.2,679.5c0,2.1,1.7,3.8,3.8,3.8     c2.1,0,3.8-1.7,3.8-3.8s-1.7-3.8-3.8-3.8C565.9,675.7,564.2,677.4,564.2,679.5z M564,695c0,2.2,1.8,4,4,4s4-1.8,4-4s-1.8-4-4-4     S564,692.8,564,695z M563.9,710.4c0,2.3,1.9,4.1,4.1,4.1s4.1-1.9,4.1-4.1c0-2.3-1.9-4.1-4.1-4.1S563.9,708.1,563.9,710.4z      M563.8,725.9c0,2.4,1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3s-1.9-4.3-4.3-4.3S563.8,723.5,563.8,725.9z M563.6,741.3     c0,2.4,2,4.4,4.4,4.4s4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4S563.6,738.9,563.6,741.3z M563.5,756.8c0,2.5,2,4.5,4.5,4.5     s4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5S563.5,754.3,563.5,756.8z M563.5,772.2c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5s-2-4.5-4.5-4.5     S563.5,769.7,563.5,772.2z M563.5,787.7c0,2.5,2,4.6,4.6,4.6s4.6-2,4.6-4.6s-2-4.6-4.6-4.6S563.5,785.2,563.5,787.7z      M563.4,803.1c0,2.5,2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6s-2.1-4.6-4.6-4.6S563.4,800.6,563.4,803.1z M563.4,818.6     c0,2.6,2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7S563.4,816,563.4,818.6z M547.9,818.6c0,2.6,2.1,4.6,4.6,4.6     c2.6,0,4.6-2.1,4.6-4.6c0-2.6-2.1-4.6-4.6-4.6C550,813.9,547.9,816,547.9,818.6z M532.5,818.6c0,2.5,2.1,4.6,4.6,4.6     c2.5,0,4.6-2.1,4.6-4.6s-2.1-4.6-4.6-4.6C534.6,814,532.5,816,532.5,818.6z M517.1,818.6c0,2.5,2,4.6,4.6,4.6     c2.5,0,4.6-2,4.6-4.6s-2-4.6-4.6-4.6C519.1,814,517.1,816.1,517.1,818.6z M501.7,818.6c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5     s-2-4.5-4.5-4.5S501.7,816.1,501.7,818.6z M486.4,818.6c0,2.4,2,4.4,4.4,4.4c2.4,0,4.4-2,4.4-4.4s-2-4.4-4.4-4.4     C488.3,814.2,486.4,816.1,486.4,818.6z M471,818.6c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.9,4.3-4.3c0-2.4-1.9-4.3-4.3-4.3     C473,814.3,471,816.2,471,818.6z M455.7,818.6c0,2.3,1.9,4.1,4.1,4.1c2.3,0,4.1-1.9,4.1-4.1c0-2.3-1.9-4.1-4.1-4.1     C457.6,814.4,455.7,816.3,455.7,818.6z M440.4,818.6c0,2.2,1.8,4,4,4s4-1.8,4-4c0-2.2-1.8-4-4-4S440.4,816.4,440.4,818.6z      M425.1,818.6c0,2.1,1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9s-1.7-3.9-3.9-3.9C426.8,814.7,425.1,816.4,425.1,818.6z M409.9,818.6     c0,2,1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6S409.9,816.6,409.9,818.6z M394.6,818.6c0,1.9,1.5,3.4,3.4,3.4     c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4C396.2,815.2,394.6,816.7,394.6,818.6z M379.4,818.6c0,1.8,1.4,3.2,3.2,3.2     c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2C380.8,815.4,379.4,816.8,379.4,818.6z M364.3,818.6c0,1.6,1.3,2.9,2.9,2.9     c1.6,0,2.9-1.3,2.9-2.9c0-1.6-1.3-2.9-2.9-2.9C365.6,815.7,364.3,817,364.3,818.6z M349.1,818.6c0,1.4,1.2,2.6,2.6,2.6     c1.4,0,2.6-1.2,2.6-2.6s-1.2-2.6-2.6-2.6C350.3,816,349.1,817.1,349.1,818.6z M334,818.6c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3     s-1-2.3-2.3-2.3S334,817.3,334,818.6z M318.9,818.6c0,1.1,0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9s-0.9-1.9-1.9-1.9     C319.8,816.7,318.9,817.5,318.9,818.6z M303.8,818.6c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5     C304.5,817.1,303.8,817.7,303.8,818.6z M288.8,818.6c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1     C289.3,817.5,288.8,818,288.8,818.6z M273.9,818.6c0,0.3,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6     S273.9,818.3,273.9,818.6z M259,818.6 M23.6,339 M24.1,323.4c0-0.3-0.3-0.6-0.6-0.6s-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6     S24.1,323.8,24.1,323.4z M24.6,307.9c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1     C24.2,309,24.6,308.5,24.6,307.9z M25.1,292.4c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5     C24.4,293.9,25.1,293.2,25.1,292.4z M25.5,276.9c0-1-0.9-1.9-1.9-1.9s-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9S25.5,277.9,25.5,276.9z      M25.9,261.4c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3s1,2.3,2.3,2.3S25.9,262.6,25.9,261.4z M26.2,245.8c0-1.4-1.2-2.6-2.6-2.6     s-2.6,1.2-2.6,2.6s1.2,2.6,2.6,2.6S26.2,247.3,26.2,245.8z M26.5,230.3c0-1.6-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9     c0,1.6,1.3,2.9,2.9,2.9S26.5,231.9,26.5,230.3z M26.8,214.8c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2     S26.8,216.6,26.8,214.8z M27,199.3c0-1.9-1.5-3.4-3.4-3.4s-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4S27,201.2,27,199.3z M27.2,183.8     c0-2-1.6-3.6-3.6-3.6s-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6S27.2,185.8,27.2,183.8z M27.4,168.2c0-2.1-1.7-3.9-3.9-3.9     s-3.9,1.7-3.9,3.9s1.7,3.9,3.9,3.9S27.4,170.4,27.4,168.2z M27.6,152.7c0-2.2-1.8-4-4-4s-4,1.8-4,4s1.8,4,4,4     S27.6,154.9,27.6,152.7z M27.7,137.2c0-2.3-1.9-4.2-4.2-4.2s-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2S27.7,139.5,27.7,137.2z      M27.9,121.7c0-2.4-1.9-4.3-4.3-4.3s-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3S27.9,124,27.9,121.7z M28,106.1c0-2.4-2-4.4-4.4-4.4     s-4.4,2-4.4,4.4s2,4.4,4.4,4.4S28,108.6,28,106.1z M28.1,90.6c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5c0,2.5,2,4.5,4.5,4.5     S28.1,93.1,28.1,90.6z M28.1,75.1c0-2.5-2-4.5-4.5-4.5s-4.5,2-4.5,4.5s2,4.5,4.5,4.5S28.1,77.6,28.1,75.1z M28.2,59.6     c0-2.5-2.1-4.6-4.6-4.6S19,57,19,59.6s2.1,4.6,4.6,4.6S28.2,62.1,28.2,59.6z M28.2,44.1c0-2.6-2.1-4.6-4.6-4.6s-4.6,2.1-4.6,4.6     s2.1,4.6,4.6,4.6S28.2,46.6,28.2,44.1z M28.3,28.5c0-2.6-2.1-4.7-4.7-4.7s-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7S28.3,31.1,28.3,28.5z      M43.8,28.5c0-2.6-2.1-4.7-4.7-4.7s-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7S43.8,31.1,43.8,28.5z M59.3,28.5c0-2.6-2.1-4.6-4.6-4.6     S50,26,50,28.5s2.1,4.6,4.6,4.6S59.3,31.1,59.3,28.5z M74.7,28.5c0-2.5-2.1-4.6-4.6-4.6c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6     C72.7,33.1,74.7,31.1,74.7,28.5z M90.2,28.5c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5     C88.2,33.1,90.2,31,90.2,28.5z M105.6,28.5c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4s2,4.4,4.4,4.4S105.6,31,105.6,28.5z M121,28.5     c0-2.4-1.9-4.3-4.3-4.3c-2.4,0-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3C119.1,32.8,121,30.9,121,28.5z M136.4,28.5     c0-2.3-1.9-4.2-4.2-4.2c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2C134.5,32.7,136.4,30.8,136.4,28.5z M151.8,28.5c0-2.2-1.8-4-4-4     c-2.2,0-4,1.8-4,4s1.8,4,4,4C150,32.6,151.8,30.8,151.8,28.5z M167.1,28.5c0-2.1-1.7-3.9-3.9-3.9s-3.9,1.7-3.9,3.9     s1.7,3.9,3.9,3.9S167.1,30.7,167.1,28.5z M182.4,28.5c0-2-1.6-3.7-3.7-3.7s-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7     S182.4,30.6,182.4,28.5z M197.7,28.5c0-1.9-1.5-3.4-3.4-3.4s-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4S197.7,30.4,197.7,28.5z      M213,28.5c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2C211.6,31.8,213,30.3,213,28.5z M228.3,28.5     c0-1.6-1.3-2.9-2.9-2.9s-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9S228.3,30.1,228.3,28.5z M243.5,28.5c0-1.4-1.2-2.6-2.6-2.6     s-2.6,1.2-2.6,2.6c0,1.4,1.2,2.6,2.6,2.6S243.5,30,243.5,28.5z M258.7,28.5c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3     c0,1.3,1,2.3,2.3,2.3C257.7,30.8,258.7,29.8,258.7,28.5z M273.8,28.5c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9     s0.9,1.9,1.9,1.9C273,30.4,273.8,29.6,273.8,28.5z M289,28.5c0-0.8-0.7-1.5-1.5-1.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5     C288.3,30.1,289,29.4,289,28.5z M304,28.5c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1     C303.5,29.6,304,29.1,304,28.5z M319,28.5c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6     C318.8,29.1,319,28.9,319,28.5z M334,28.5";
    const svgPath_5 = "M480.3,33.6c-174.6,0-271.5,0-380,0l-49.1,0c-10.7,0-17.2-3.4-19.2-10.1c-1.8-6.1,1.7-12.2,8-14  c2.6-0.7,5.4-0.5,7.8,0.7c2.4,1.2,4.2,3.3,4.9,5.8c0.7,2.1,0.4,4.4-0.7,6.4c-1.1,2-3,3.4-5.2,4.1c-2,0.6-4,0.4-5.8-0.6  c-1.8-0.9-3.1-2.5-3.7-4.3c-1.1-3.4,1-6.9,4.5-7.9c0.9-0.3,1.8,0.2,2.1,1.1c0.3,0.8-0.2,1.7-1.1,2c-1.8,0.5-2.8,2.3-2.3,4  c0.3,1.1,1.1,1.9,2.1,2.4c1,0.5,2.2,0.6,3.3,0.3c1.4-0.4,2.6-1.3,3.3-2.5c0.7-1.2,0.8-2.6,0.4-4c-0.5-1.7-1.7-3-3.3-3.9  c-1.6-0.8-3.5-1-5.2-0.5c-4.5,1.3-7,5.7-5.7,10.1c1.6,5.2,6.8,7.8,16,7.8l49.1,0c177.9,0,437.4,0,441.6,0c9.2,0,14.4-2.5,16-7.8  c1.3-4.4-1.2-8.8-5.7-10.1c-1.8-0.5-3.6-0.3-5.2,0.5c-1.6,0.8-2.8,2.2-3.3,3.9c-0.4,1.3-0.3,2.7,0.4,4c0.7,1.2,1.9,2.1,3.3,2.5  c1.1,0.3,2.3,0.2,3.3-0.3c1-0.5,1.8-1.4,2.1-2.4c0.5-1.7-0.5-3.5-2.3-4c-0.9-0.3-1.4-1.1-1.1-2c0.3-0.8,1.2-1.3,2.1-1.1  c3.5,1,5.6,4.6,4.5,7.9c-0.6,1.9-1.9,3.4-3.7,4.3c-1.8,0.9-3.9,1.1-5.8,0.6c-2.3-0.6-4.1-2.1-5.2-4.1c-1.1-2-1.4-4.2-0.7-6.4  c0.8-2.5,2.5-4.5,4.9-5.8c2.4-1.2,5.2-1.5,7.8-0.7c6.3,1.8,9.8,7.9,8,14c-2,6.7-8.5,10.1-19.2,10.1  C540.2,33.5,591.8,33.6,480.3,33.6z M51.1,804.9c-10.7,0-17.2,3.4-19.2,10.1c-1.8,6.1,1.7,12.2,8,14c2.6,0.7,5.4,0.5,7.8-0.7  c2.4-1.2,4.2-3.3,4.9-5.8c0.7-2.1,0.4-4.4-0.7-6.4c-1.1-2-3-3.4-5.2-4.1c-2-0.6-4-0.4-5.8,0.6c-1.8,0.9-3.1,2.5-3.7,4.3  c-1.1,3.4,1,6.9,4.5,7.9c0.9,0.3,1.8-0.2,2.1-1.1c0.3-0.8-0.2-1.7-1.1-2c-1.8-0.5-2.8-2.3-2.3-4c0.3-1.1,1.1-1.9,2.1-2.4  c1-0.5,2.2-0.6,3.3-0.3c1.4,0.4,2.6,1.3,3.3,2.5c0.7,1.2,0.8,2.6,0.4,4c-0.5,1.7-1.7,3-3.3,3.9c-1.6,0.8-3.5,1-5.2,0.5  c-4.5-1.3-7-5.7-5.7-10.1c1.6-5.2,6.8-7.8,16-7.8c4.3,0,263.7,0,441.6,0l49.1,0c9.2,0,14.4,2.5,16,7.8c1.3,4.4-1.2,8.8-5.7,10.1  c-1.8,0.5-3.6,0.3-5.2-0.5c-1.6-0.8-2.8-2.2-3.3-3.9c-0.4-1.3-0.3-2.7,0.4-4c0.7-1.2,1.9-2.1,3.3-2.5c1.1-0.3,2.3-0.2,3.3,0.3  c1,0.5,1.8,1.4,2.1,2.4c0.5,1.7-0.5,3.5-2.3,4c-0.9,0.3-1.4,1.1-1.1,2c0.3,0.8,1.2,1.3,2.1,1.1c3.5-1,5.6-4.6,4.5-7.9  c-0.6-1.9-1.9-3.4-3.7-4.3c-1.8-0.9-3.9-1.1-5.8-0.6c-2.3,0.6-4.1,2.1-5.2,4.1c-1.1,2-1.4,4.2-0.7,6.4c0.8,2.5,2.5,4.5,4.9,5.8  c2.4,1.2,5.2,1.5,7.8,0.7c6.3-1.8,9.8-7.9,8-14c-2-6.7-8.5-10.1-19.2-10.1l-49.1,0c-108.6,0-217.6,0-392.2,0  C-10.9,804.9,52.8,804.9,51.1,804.9z M561.2,238.7c0,166,0,397.9,0,501.1l0,46.7c0,10.2,3.6,16.4,10.6,18.3  c6.4,1.7,12.9-1.6,14.7-7.6c0.8-2.5,0.5-5.1-0.8-7.4c-1.3-2.3-3.4-4-6.1-4.7c-2.3-0.6-4.6-0.4-6.7,0.6c-2.1,1.1-3.6,2.8-4.3,5  c-0.6,1.9-0.4,3.8,0.6,5.6c1,1.7,2.6,3,4.6,3.5c3.5,1,7.3-0.9,8.4-4.3c0.3-0.8-0.2-1.7-1.1-2c-0.9-0.3-1.8,0.2-2.1,1.1  c-0.5,1.7-2.4,2.6-4.2,2.1c-1.1-0.3-2-1-2.6-2c-0.5-1-0.7-2.1-0.3-3.1c0.4-1.3,1.4-2.4,2.7-3.1c1.3-0.7,2.8-0.8,4.2-0.4  c1.8,0.5,3.2,1.6,4.1,3.2c0.9,1.5,1.1,3.3,0.5,5c-1.4,4.3-6,6.7-10.6,5.4c-5.5-1.5-8.2-6.5-8.2-15.2l0-46.7c0-169.1,0-683.9,0-687.9  c0-8.8,2.7-13.7,8.2-15.2c4.6-1.2,9.3,1.1,10.6,5.4c0.5,1.7,0.3,3.4-0.5,5c-0.9,1.5-2.3,2.7-4.1,3.2c-1.4,0.4-2.9,0.3-4.2-0.4  c-1.3-0.7-2.2-1.8-2.7-3.1c-0.3-1.1-0.2-2.2,0.3-3.1c0.5-1,1.5-1.7,2.6-2c1.8-0.5,3.7,0.5,4.2,2.1c0.3,0.8,1.2,1.3,2.1,1.1  c0.9-0.3,1.4-1.1,1.1-2c-1.1-3.4-4.8-5.3-8.4-4.3c-2,0.6-3.6,1.8-4.6,3.5c-1,1.7-1.2,3.7-0.6,5.6c0.7,2.1,2.2,3.9,4.3,5  c2.1,1.1,4.5,1.3,6.7,0.6c2.6-0.7,4.8-2.4,6.1-4.7c1.3-2.3,1.6-4.9,0.8-7.4c-1.9-6-8.4-9.3-14.7-7.6c-7.1,1.9-10.6,8-10.6,18.3  C561.2,53.5,561.2,132.7,561.2,238.7z M31.8,599.7c0-166,0-397.9,0-501.1l0-46.7c0-10.2-3.6-16.4-10.6-18.3  c-6.4-1.7-12.9,1.6-14.7,7.6c-0.8,2.5-0.5,5.1,0.8,7.4c1.3,2.3,3.4,4,6.1,4.7c2.3,0.6,4.6,0.4,6.7-0.6c2.1-1.1,3.6-2.8,4.3-5  c0.6-1.9,0.4-3.8-0.6-5.6c-1-1.7-2.6-3-4.6-3.5c-3.5-1-7.3,0.9-8.4,4.3c-0.3,0.8,0.2,1.7,1.1,2c0.9,0.3,1.8-0.2,2.1-1.1  c0.5-1.7,2.4-2.6,4.2-2.1c1.1,0.3,2,1,2.6,2c0.5,1,0.7,2.1,0.3,3.1c-0.4,1.3-1.4,2.4-2.7,3.1c-1.3,0.7-2.8,0.8-4.2,0.4  c-1.8-0.5-3.2-1.6-4.1-3.2c-0.9-1.5-1.1-3.3-0.5-5c1.4-4.3,6-6.7,10.6-5.4c5.5,1.5,8.2,6.5,8.2,15.2l0,46.7c0,169.1,0,683.9,0,687.9  c0,8.8-2.7,13.7-8.2,15.2c-4.6,1.2-9.3-1.1-10.6-5.4c-0.5-1.7-0.3-3.4,0.5-5s2.3-2.7,4.1-3.2c1.4-0.4,2.9-0.3,4.2,0.4  c1.3,0.7,2.2,1.8,2.7,3.1c0.3,1.1,0.2,2.2-0.3,3.1s-1.5,1.7-2.6,2c-1.8,0.5-3.7-0.5-4.2-2.1c-0.3-0.8-1.2-1.3-2.1-1.1  c-0.9,0.3-1.4,1.1-1.1,2c1.1,3.4,4.8,5.3,8.4,4.3c2-0.6,3.6-1.8,4.6-3.5c1-1.7,1.2-3.7,0.6-5.6c-0.7-2.1-2.2-3.9-4.3-5  c-2.1-1.1-4.5-1.3-6.7-0.6c-2.6,0.7-4.8,2.4-6.1,4.7c-1.3,2.3-1.6,4.9-0.8,7.4c1.9,6,8.4,9.3,14.7,7.6c7-1.9,10.6-8,10.6-18.3  C31.8,785,31.8,705.8,31.8,599.7z";
    const pdfDoc = await PDFDocument.create();
    // Embed the font
    const textFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    // Add a blank page to the document
    const page = pdfDoc.addPage();
    page.moveTo(6, page.getHeight() - 5);
    // Get the width and height of the page
    const { width , height  } = page.getSize();
    // Draw the SVG path
    if (document.querySelector("#Theme-one").checked == true) {
        page.moveTo(8, page.getHeight() - 5);
        page.drawSvgPath(svgPath, {
            borderColor: rgb(0.85, 0.66, 0.33)
        });
    } else if (document.querySelector("#Theme-two").checked == true) {
        page.moveTo(2, page.getHeight() - 2);
        page.drawSvgPath(svgPath_1, {
            borderColor: rgb(0.40, 0.08, 0.16),
            color: rgb(0.40, 0.08, 0.16)
        });
    } else if (document.querySelector("#Theme-three").checked == true) page.drawSvgPath(svgPath_2, {
        borderColor: rgb(0.85, 0.66, 0.33),
        color: rgb(0.85, 0.66, 0.33)
    });
    else if (document.querySelector("#Theme-four").checked == true) {
        page.moveTo(12, page.getHeight() - 8);
        page.drawSvgPath(svgPath_3, {
            borderColor: rgb(0.40, 0.08, 0.16),
            color: rgb(0.40, 0.08, 0.16)
        });
    } else if (document.querySelector("#Theme-five").checked == true) page.drawSvgPath(svgPath_5, {
        borderColor: rgb(0.40, 0.08, 0.16),
        color: rgb(0.40, 0.08, 0.16)
    });
    else if (document.querySelector("#Theme-six").checked == true) page.drawSvgPath(svgPath_4, {
        borderColor: rgb(0.85, 0.66, 0.33),
        color: rgb(0.85, 0.66, 0.33)
    });
    // Draw a string of text toward the top of the page
    const headingFontSize = 18;
    const bodyFontSize = 14;
    const fontColor = rgb(0, 0, 0);
    const headingFontColor = rgb(0.62, 0.14, 0.23);
    const VERTICAL_GAP_BETWEEN_ITEMS = 20;
    const INITIAL_Y_PERSONAL_DETAILS = 670;
    const INITIAL_Y_FAMILY_DETAILS = 318;
    const INITIAL_Y_CONTACT_DETAILS = 130;
    const additionalConfig = {
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    };
    page.drawText(`BIODATA`, {
        x: 230,
        y: 780,
        size: 24,
        font: textFont,
        color: fontColor
    });
    /*  page.drawText(`Personal Details`, {
      x: 50,
      y: 720,
      size: headingFontSize,
      font: textFont,
      color: fontColor,
    })*/ const personalDetailsItems = [
        /*{
        key: "Name",
        seperator: ":",
        value: `${document.querySelector('.bio-name').value}`
      },*/ {
            key: "Date of Birth",
            seperator: ":",
            value: `${document.querySelector(".bio-dob-date").value}/`
        },
        {
            key: "Time of Birth",
            seperator: ":",
            value: `${document.querySelector(".bio-tob-hour").value}:`
        },
        {
            key: "Place of Birth",
            seperator: ":",
            value: `${document.querySelector(".bio-placeofbirth").value}`
        },
        {
            key: "Rashi",
            seperator: ":",
            value: `${document.querySelector(".bio-rashi").value}`
        },
        {
            key: "Nakshatra",
            seperator: ":",
            value: `${document.querySelector(".bio-nakshatra").value}`
        },
        {
            key: "Height",
            seperator: ":",
            value: `${document.querySelector(".bio-height").value}`
        },
        {
            key: "Religion",
            seperator: ":",
            value: `${document.querySelector(".bio-religion").value}`
        },
        {
            key: "Caste",
            seperator: ":",
            value: `${document.querySelector(".bio-caste").value}`
        },
        {
            key: "Sub caste",
            seperator: ":",
            value: `${document.querySelector(".bio-sub-caste").value}`
        },
        {
            key: "Gotra",
            seperator: ":",
            value: `${document.querySelector(".bio-gotra").value}`
        },
        {
            key: "Manglik",
            seperator: ":",
            value: `${document.querySelector(".bio-manglik").value}`
        },
        {
            key: "Education",
            seperator: ":",
            value: `${document.querySelector(".bio-education").value}`
        },
        {
            key: "College Name",
            seperator: ":",
            value: `${document.querySelector(".bio-college-name").value}`
        },
        {
            key: "Employed in",
            seperator: ":",
            value: `${document.querySelector(".bio-employedin").value}`
        },
        {
            key: "Organization name",
            seperator: ":",
            value: `${document.querySelector(".bio-organization-name").value}`
        },
        {
            key: "Annual Income",
            seperator: ":",
            value: `${document.querySelector(".bio-income").value}`
        }
    ];
    personalDetailsItems.map((element, index)=>{
        page.drawText(element.key, {
            x: 50,
            y: INITIAL_Y_PERSONAL_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
        page.drawText(element.seperator, {
            x: 220,
            y: INITIAL_Y_PERSONAL_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
        page.drawText(element.value, {
            x: 240,
            y: INITIAL_Y_PERSONAL_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
    });
    //FOR Name
    page.drawText(`${document.querySelector(".bio-name").value}`, {
        x: 50,
        y: 700,
        size: 24,
        font: textFont,
        color: headingFontColor
    });
    //For DOB month and year
    page.drawText(`${document.querySelector(".bio-dob-month").value}/`, {
        x: 260,
        y: 670,
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    });
    page.drawText(`${document.querySelector(".bio-dob-year").value}`, {
        x: 280,
        y: 670,
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    });
    //FOR TIME OF BIRTH Minutes, Seconds & am/pm
    page.drawText(`${document.querySelector(".bio-tob-minute").value}:`, {
        x: 260,
        y: 650,
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    });
    page.drawText(`${document.querySelector(".bio-tob-sec").value}`, {
        x: 280,
        y: 650,
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    });
    page.drawText(`${document.querySelector(".am-pm").value}`, {
        x: 300,
        y: 650,
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    });
    page.drawText(`Family Details`, {
        x: 50,
        y: 340,
        size: headingFontSize,
        font: textFont,
        color: headingFontColor
    });
    const familyDetailsItems = [
        {
            key: "Father's Name",
            seperator: ":",
            value: `${document.querySelector(".bio-fathersname").value}`
        },
        {
            key: "Father's Occupation",
            seperator: ":",
            value: `${document.querySelector(".bio-fathersoccupation").value}`
        },
        {
            key: "Mother's Name",
            seperator: ":",
            value: `${document.querySelector(".bio-mothersname").value}`
        },
        {
            key: "Mother's Occupation",
            seperator: ":",
            value: `${document.querySelector(".bio-mothersoccupation").value}`
        },
        {
            key: "Total Brothers",
            seperator: ":",
            value: `${document.querySelector(".bio-totalbrothers").value}`
        },
        {
            key: "Total Sisters",
            seperator: ":",
            value: `${document.querySelector(".bio-totalsisters").value}`
        },
        {
            key: "Married Brothers",
            seperator: ":",
            value: `${document.querySelector(".bio-marriedbrothers").value}`
        },
        {
            key: "Married Sisters",
            seperator: ":",
            value: `${document.querySelector(".bio-marriedsisters").value}`
        }
    ];
    familyDetailsItems.map((element, index)=>{
        page.drawText(element.key, {
            x: 50,
            y: INITIAL_Y_FAMILY_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
        page.drawText(element.seperator, {
            x: 220,
            y: INITIAL_Y_FAMILY_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
        page.drawText(element.value, {
            x: 240,
            y: INITIAL_Y_FAMILY_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
    });
    page.drawText(`Contact Details`, {
        x: 50,
        y: 150,
        size: headingFontSize,
        font: textFont,
        color: headingFontColor
    });
    const contactDetailsItems = [
        {
            key: `Contact Number`,
            seperator: `:`,
            value: `${document.querySelector("#contactNum").value}`
        },
        {
            key: `Address`,
            seperator: `:`,
            value: `${document.querySelector("#addressL1").value}`
        }
    ];
    contactDetailsItems.map((element, index)=>{
        page.drawText(element.key, {
            x: 50,
            y: INITIAL_Y_CONTACT_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
        page.drawText(element.seperator, {
            x: 220,
            y: INITIAL_Y_CONTACT_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
        page.drawText(element.value, {
            x: 240,
            y: INITIAL_Y_CONTACT_DETAILS - index * VERTICAL_GAP_BETWEEN_ITEMS,
            ...additionalConfig
        });
    });
    //Text for Adress Line 2
    page.drawText(`${document.querySelector("#addressL2").value}`, {
        x: 240,
        y: 90,
        size: bodyFontSize,
        font: textFont,
        color: fontColor
    });
    const btnSvg = "M0,27.59V7.88C0,3.53,3.53,0,7.88,0H111.34c4.35,0,7.88,3.53,7.88,7.88V27.59c0,4.35-3.53,7.88-7.88,7.88H7.88c-4.35,0-7.88-3.53-7.88-7.88Z";
    page.drawSvgPath(btnSvg, {
        x: 220,
        y: 75,
        //borderColor: rgb(0.4, 0.08, 0.16),
        color: rgb(0.62, 0.14, 0.23)
    });
    //To create link on page
    const PAGE_WIDTH = 100;
    const PAGE_HEIGHT = 100;
    /* Create the link annotation object and ref */ const linkAnnotation = pdfDoc.context.obj({
        Type: "Annot",
        Subtype: "Link",
        Rect: [
            145,
            PAGE_HEIGHT / 2 - 5,
            358,
            PAGE_HEIGHT / 2 + 15
        ],
        Border: [
            0,
            0,
            0
        ],
        C: [
            0,
            0,
            1
        ],
        A: {
            Type: "Action",
            S: "URI",
            URI: PDFString.of("https://betterhalf.app.link/Nw0O6yJmgqb")
        }
    });
    const linkAnnotationRef = pdfDoc.context.register(linkAnnotation);
    //////////////////TO SHOW IMAGE IN BIODATA PDF//////////////////////////////////////////////
    if (imagePreviewUrl) {
        const jpgUrl = `${imagePreviewUrl}`; //URL of images generated
        console.log(imagePreviewUrl);
        const jpgImageBytes = await fetch(jpgUrl).then((res)=>res.arrayBuffer());
        const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
        const jpgDims = jpgImage.scale(0.25);
        page.drawImage(jpgImage, {
            x: 420,
            y: 650,
            width: jpgDims.width,
            height: jpgDims.height
        });
    }
    /////////////////////////////END OF IMAGE DISPLAYING CODE IN PDF///////////////////////////
    page.drawText(`Created with Betterhalf`, {
        x: 230,
        y: 55,
        size: 10,
        font: textFont,
        color: rgb(1, 1, 1)
    });
    /*  Add the link to the page */ page.node.set(PDFName.of("Annots"), pdfDoc.context.obj([
        linkAnnotationRef
    ]));
    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    // Trigger the browser to download the PDF document
    download(pdfBytes, "My Bio-data.pdf", "application/pdf");
}
document.querySelector("#regular-biodata-form").addEventListener("submit", photo_submit);
////////////////////////////////////PDF GENERATION ENDS///////////////////////////////////////////////////////////
///////////////////SLIDER CODE///////////////////
//splide slider code
function slider1() {
    let splides = $(".slider1");
    for(let i = 0, splideLength = splides.length; i < splideLength; i++)new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0,
        type: "loop",
        gap: "2em",
        arrows: "slider",
        pagination: "slider",
        speed: 600,
        dragAngleThreshold: 30,
        autoWidth: false,
        rewind: true,
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false,
        breakpoints: {
            991: {
                // Tablet
                perPage: 1,
                gap: "4vw"
            },
            767: {
                // Mobile Landscape
                perPage: 1,
                gap: "4vw"
            },
            479: {
                // Mobile Portrait
                perPage: 1,
                gap: "4vw"
            }
        }
    }).mount();
}
slider1();

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequire67c9")

//# sourceMappingURL=script.js.map
