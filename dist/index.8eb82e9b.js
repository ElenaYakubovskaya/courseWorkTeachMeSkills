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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"cgLB2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "5bb40f258eb82e9b";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"iJDgK":[function(require,module,exports) {
/*
const titleTaskElement = document.getElementById('inputToDo');
const descriptionTaskElement = document.getElementById('description');
const dateTaskElement = document.getElementById('date');
const userTaskElement = document.getElementById('userTask');
const buttonAddElement = document.getElementById('toDoBtn');
const todosWrapperElement = document.getElementById('todosWrapper');
const inProgressWrapperElement = document.getElementById('inProgressWrapper');
const doneWrapperElement = document.getElementById('doneWrapper');
const clearAllListToDoElement = document.getElementById('clearAllListToDo');
const clearAllListInPrElement = document.getElementById('clearAllListInPr');
const clearAllListDoneElement = document.getElementById('clearAllListDone');
const totalToDoElement = document.getElementById('totalToDo');
const totalInPrElement = document.getElementById('totalInPr');
const totalDoneElement = document.getElementById('totalDone');

const userName = [];*/ var _const = require("./modules/const");
var _data = require("./modules/data");
_data.fetchData();
let tasksDone = !localStorage.getItem('tasksDone') ? [] : JSON.parse(localStorage.getItem('tasksDone'));
let tasksInPr = !localStorage.getItem('tasksInPr') ? [] : JSON.parse(localStorage.getItem('tasksInPr'));
let tasks = !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks'));
function Task(title, description, date, user) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.user = user;
}
function showElement(list) {
    list.style.display = 'block';
}
function hideshowElement(list) {
    list.style.display = 'none';
}
const createLi = (task, index)=>{
    return `
  <div id="toDo-${index}" class="list-item-task-add-description">
  <div class ="list-item-task-add-style" >
    <button class="list-item-task-add-description-edit" id="btn-edit" onclick="createEditForm(${index})">Edit</button>
    <div class="list-item-task-add-all">
      <span class="list-item-task-add-all-span" >
      <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
      <button onclick="inProgressTask(${index})" class="list-item-task-add-buttons-inPR"
      id="btn-inPr"
      >in PR</button>
      <button onclick="delTaskToDo(${index})"
        class="list-item-task-add-buttons-delete"
        id="btn-delToDo" >x
      </button>
  </div>
  </div>
  </div>
  `;
};
const createLiInProgress = (task, index)=>{
    return `
  <div id="item-inPr-${index}" class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
    <button onclick ="done(${index})" class="list-item-task-add-buttons-done"
    id="btn-inDone"
    >Done</button>
    <button  onclick="delTaskInPr(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delInPr-${index}" >x
      </button>
  </div>
  </div>
  `;
};
const createLiDone = (task, index)=>{
    return `
  <div class="list-item-task-add-description">
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span">
    <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
    <button onclick ="btnReturn(${index})" class="list-item-task-add-buttons-return"
    id="btn-return"
    >in To Do</button>
    <button onclick ="delTaskDone(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delDone" >x
      </button>
  </div>
  </div>
  `;
};
const createLiReturn = (task, index)=>{
    return `
  <div id="toDo-${index}" class="list-item-task-add-description">
  <div class ="list-item-task-add-style" >
  <button class="list-item-task-add-description-edit" id="btn-edit" onclick="createEditForm(${index})">Edit</button>
    <div class="list-item-task-add-all">
    <span class="list-item-task-add-all-span" >
    <strong class="list-item-task-add-all-span-text" id="strong">${task.title}</strong>
      ${task.description || 'no description'}<br>
     <span id="data-user">${task.date || 'date not set'}<br>${task.user || 'no assigned'}</span>
  </span>
    </div>
  <div class="list-item-task-add-buttons">
  <div class="list-item-task-add-buttons">
    <button onclick ="inProgressTask(${index})" class="list-item-task-add-buttons-done"
    id="btn-inPr"
    >in PR</button>
    <button onclick ="delTaskToDo(${index})"
      class="list-item-task-add-buttons-delete"
      id="btn-delToDo" >x
      </button>
  </div>
  </div>
  </div>
  `;
};
function editFormTemplate(title, date, user) {
    return `
  <div class="list-item-task-form">
              <input
                tabindex="1"
                class="list-item-task-form-input"
                id="inputEdit"
                type="text"
                name="nameTask" 
                value="${title}"
              />
              <textarea
                class="list-item-task-form-textArea"
                name="description"
                tabindex="2"
                id="descriptionEdit"
                cols="30"
                rows="5"
                placeholder="description"
                
              ></textarea>
              <input
                type="date"
                class="list-item-task-form-data"
                name="date"
                tabindex="3"
                id="dateEdit"
                value="${date}"
              />
              <select
                type="file"
                tabindex="4"
                class="list-item-task-form-user"
                id="userTaskEdit"
              >
                <option selected disabled>${user}</option>
              </select>

              

              <button 
                class="list-item-task-form-btn"
                id="save"
                tabindex="5"
                name="Save"
              >
                Save
              </button>
            </div>
  `;
}
createEditForm = (index)=>{
    const listTask = document.getElementById(`toDo-${index}`);
    const div = listTask.getElementsByClassName('list-item-task-add-style')[0];
    div.style.display = 'none';
    const title = tasks[index]['title'];
    const description = tasks[index]['description'];
    const date = tasks[index]['date'];
    const user = tasks[index]['user'];
    const form = editFormTemplate(title, date, user);
    if (document.getElementsByClassName('list-item-task-form').length > 1) {
        div.style.display = 'block';
        return;
    }
    listTask.innerHTML += form;
    const save = document.getElementById('save');
    const titleEdit = document.getElementById('inputEdit');
    titleEdit.value = title;
    const descriptionEdit = document.getElementById('descriptionEdit');
    descriptionEdit.value = description || 'no description';
    const dateEdit = document.getElementById('dateEdit');
    dateEdit.value = date;
    const userTaskEdit = document.getElementById('userTaskEdit');
    userTaskEdit.value = user;
    console.log(user);
    _const.userName.forEach((el)=>{
        userTaskEdit.innerHTML += `<option >${el}</option>`;
    });
    save.addEventListener('click', ()=>{
        const divform = document.getElementsByClassName('list-item-task-form')[1];
        divform.remove();
        div.style.display = 'block';
        tasks[index]['title'] = titleEdit.value || 'no description';
        tasks[index]['description'] = descriptionEdit.value;
        tasks[index]['date'] = dateEdit.value;
        tasks[index]['user'] = userTaskEdit.value;
        fillHtmlList();
    });
};
const fillHtmlList = ()=>{
    _const.todosWrapperElement.innerHTML = '';
    if (tasks.length > 0) {
        showElement(_const.clearAllListToDoElement);
        tasks.forEach((item, index)=>{
            _const.todosWrapperElement.innerHTML += createLi(item, index);
        });
    }
};
fillHtmlList();
const fillHtmlListInPr = ()=>{
    _const.inProgressWrapperElement.innerHTML = '';
    if (tasksInPr.length > 0) {
        showElement(_const.clearAllListInPrElement);
        tasksInPr.forEach((item, index)=>{
            _const.inProgressWrapperElement.innerHTML += createLiInProgress(item, index);
        });
    }
};
fillHtmlListInPr();
const fillHtmlListDone = ()=>{
    _const.doneWrapperElement.innerHTML = '';
    if (tasksDone.length > 0) {
        showElement(_const.clearAllListDoneElement);
        tasksDone.forEach((item, index)=>{
            _const.doneWrapperElement.innerHTML += createLiDone(item, index);
        });
    }
};
fillHtmlListDone();
const fillHtmlListReturn = ()=>{
    _const.todosWrapperElement.innerHTML = '';
    if (tasks.length > 0) tasks.forEach((item, index)=>{
        _const.todosWrapperElement.innerHTML += createLiReturn(item, index);
    });
};
fillHtmlListReturn();
const updateLocal = ()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
const updateLocalInPr = ()=>{
    localStorage.setItem('tasksInPr', JSON.stringify(tasksInPr));
};
const updateLocalDone = ()=>{
    localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
};
inProgressTask = (index)=>{
    if (tasksInPr.length > 4) {
        alert('Max tasks in "In Progress" = 5!');
        return;
    }
    _const.inProgressWrapperElement.innerHTML += createLiInProgress(tasks[index], index);
    tasksInPr.push(tasks[index]);
    tasks.splice(index, 1);
    if (tasks.length < 1) hideshowElement(_const.clearAllListToDoElement);
    totalList(_const.totalInPrElement, tasksInPr);
    totalList(_const.totalToDoElement, tasks);
    updateLocal();
    updateLocalInPr();
    fillHtmlListInPr();
    fillHtmlList();
};
totalList(_const.totalDoneElement, tasksDone);
totalList(_const.totalInPrElement, tasksInPr);
totalList(_const.totalToDoElement, tasks);
done = (index)=>{
    _const.doneWrapperElement.innerHTML += createLiDone(tasksInPr[index], index);
    tasksDone.push(tasksInPr[index]);
    tasksInPr.splice(index, 1);
    if (tasksInPr.length < 1) hideshowElement(_const.clearAllListInPrElement);
    totalList(_const.totalDoneElement, tasksDone);
    totalList(_const.totalInPrElement, tasksInPr);
    updateLocalInPr();
    updateLocalDone();
    fillHtmlListInPr();
    fillHtmlListDone();
};
btnReturn = (index)=>{
    _const.todosWrapperElement.innerHTML += createLiReturn(tasksDone[index]['title'], index);
    tasks.push({
        title: tasksDone[index]['title']
    });
    tasksDone.splice(index, 1);
    if (tasksDone.length < 1) hideshowElement(_const.clearAllListDoneElement);
    totalList(_const.totalDoneElement, tasksDone);
    totalList(_const.totalToDoElement, tasks);
    showElement(_const.clearAllListToDoElement);
    updateLocal();
    updateLocalDone();
    fillHtmlListReturn();
    fillHtmlListDone();
};
delTaskToDo = (index)=>{
    tasks.splice(index, 1);
    if (tasks.length < 1) hideshowElement(_const.clearAllListToDoElement);
    totalList(_const.totalToDoElement, tasks);
    updateLocal();
    fillHtmlList();
};
delTaskInPr = (index = '')=>{
    if (tasksInPr.length < 1) hideshowElement(_const.clearAllListInPrElement);
    if (confirm('Delete this task?')) {
        tasksInPr.splice(index, 1);
        hideshowElement(_const.clearAllListInPrElement);
        totalList(_const.totalInPrElement, tasksInPr);
        updateLocalInPr();
        fillHtmlListInPr();
    }
};
delTaskDone = (index)=>{
    tasksDone.splice(index, 1);
    if (tasksDone.length < 1) hideshowElement(_const.clearAllListDoneElement);
    totalList(_const.totalDoneElement, tasksDone);
    updateLocalDone();
    fillHtmlListDone();
};
_const.buttonAddElement.addEventListener('click', (e)=>{
    e.preventDefault();
    if (_const.titleTaskElement.value === '') return;
    showElement(_const.clearAllListToDoElement);
    tasks.push(new Task(_const.titleTaskElement.value, _const.descriptionTaskElement.value, _const.dateTaskElement.value, _const.userTaskElement.value));
    _const.titleTaskElement.value = '';
    _const.descriptionTaskElement.value = '';
    _const.dateTaskElement.value = '';
    _const.userTaskElement.value = '';
    totalList(_const.totalToDoElement, tasks);
    updateLocal();
    fillHtmlList();
});
_const.clearAllListToDoElement.addEventListener('click', (e)=>{
    tasks = [];
    hideshowElement(_const.clearAllListToDoElement);
    totalList(_const.totalToDoElement, tasks);
    updateLocal();
    fillHtmlList();
});
_const.clearAllListInPrElement.addEventListener('click', (e)=>{
    tasksInPr = [];
    if (confirm('Delete all tasks in?')) {
        hideshowElement(_const.clearAllListInPrElement);
        totalList(_const.totalInPrElement, tasksInPr);
        updateLocalInPr();
        fillHtmlListInPr();
    }
});
_const.clearAllListDoneElement.addEventListener('click', (e)=>{
    tasksDone = [];
    hideshowElement(_const.clearAllListDoneElement);
    totalList(_const.totalDoneElement, tasksDone);
    updateLocalDone();
    fillHtmlListDone();
});
function totalList(nameTotal, nameArr) {
    return nameTotal.innerHTML = 'total tasks:    ' + nameArr.length;
}

},{"./modules/const":"ez67k","./modules/data":"3vfKC"}],"ez67k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "titleTaskElement", ()=>titleTaskElement
);
parcelHelpers.export(exports, "descriptionTaskElement", ()=>descriptionTaskElement
);
parcelHelpers.export(exports, "dateTaskElement", ()=>dateTaskElement
);
parcelHelpers.export(exports, "userTaskElement", ()=>userTaskElement
);
parcelHelpers.export(exports, "buttonAddElement", ()=>buttonAddElement
);
parcelHelpers.export(exports, "todosWrapperElement", ()=>todosWrapperElement
);
parcelHelpers.export(exports, "inProgressWrapperElement", ()=>inProgressWrapperElement
);
parcelHelpers.export(exports, "doneWrapperElement", ()=>doneWrapperElement
);
parcelHelpers.export(exports, "clearAllListToDoElement", ()=>clearAllListToDoElement
);
parcelHelpers.export(exports, "clearAllListInPrElement", ()=>clearAllListInPrElement
);
parcelHelpers.export(exports, "clearAllListDoneElement", ()=>clearAllListDoneElement
);
parcelHelpers.export(exports, "totalToDoElement", ()=>totalToDoElement
);
parcelHelpers.export(exports, "totalInPrElement", ()=>totalInPrElement
);
parcelHelpers.export(exports, "totalDoneElement", ()=>totalDoneElement
);
parcelHelpers.export(exports, "userName", ()=>userName
);
const titleTaskElement = document.getElementById('inputToDo');
const descriptionTaskElement = document.getElementById('description');
const dateTaskElement = document.getElementById('date');
const userTaskElement = document.getElementById('userTask');
const buttonAddElement = document.getElementById('toDoBtn');
const todosWrapperElement = document.getElementById('todosWrapper');
const inProgressWrapperElement = document.getElementById('inProgressWrapper');
const doneWrapperElement = document.getElementById('doneWrapper');
const clearAllListToDoElement = document.getElementById('clearAllListToDo');
const clearAllListInPrElement = document.getElementById('clearAllListInPr');
const clearAllListDoneElement = document.getElementById('clearAllListDone');
const totalToDoElement = document.getElementById('totalToDo');
const totalInPrElement = document.getElementById('totalInPr');
const totalDoneElement = document.getElementById('totalDone');
const userName = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3vfKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchData", ()=>fetchData
);
var _const = require("./const");
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()
    ).then((json)=>{
        for(let i = 0; i < json.length; i++)_const.userName.push(json[i]['name']);
        _const.userName.forEach((el)=>{
            _const.userTaskElement.innerHTML += `<option >${el}</option>`;
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./const":"ez67k"}]},["cgLB2","iJDgK"], "iJDgK", "parcelRequirea15b")

//# sourceMappingURL=index.8eb82e9b.js.map
