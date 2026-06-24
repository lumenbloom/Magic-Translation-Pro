import * as __WEBPACK_EXTERNAL_MODULE__script_js_588e7203__ from "../../../../../script.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external "../../../../../script.js"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_script_js_namespaceObject = x({ ["updateMessageBlock"]: () => (__WEBPACK_EXTERNAL_MODULE__script_js_588e7203__.updateMessageBlock) });
;// ./src/config.ts
// @ts-ignore

var context = SillyTavern.getContext();
var extensionName = 'SillyTavern-Magic-Translation';

;// ./src/translate.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Translate text via an OpenAI-compatible chat completions API.
 * No dependency on SillyTavern internals — pure fetch.
 */
function translateText(_x, _x2, _x3, _x4, _x5, _x6) {
  return _translateText.apply(this, arguments);
}
function _translateText() {
  _translateText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(text, promptTemplate, languageName, apiUrl, apiKey, model) {
    var _data$choices;
    var filledPrompt, baseUrl, endpoint, headers, response, errorBody, data, content;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filledPrompt = promptTemplate.replace(/{{text}}/g, text).replace(/{{language}}/g, languageName);
          baseUrl = apiUrl.replace(/\/+$/, '');
          endpoint = baseUrl.endsWith('/chat/completions') ? baseUrl : "".concat(baseUrl, "/chat/completions");
          headers = {
            'Content-Type': 'application/json'
          };
          if (apiKey) {
            headers['Authorization'] = "Bearer ".concat(apiKey);
          }
          _context.next = 7;
          return fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
              model: model,
              messages: [{
                role: 'user',
                content: filledPrompt
              }],
              temperature: 0.3,
              max_tokens: 4096
            })
          });
        case 7:
          response = _context.sent;
          if (response.ok) {
            _context.next = 13;
            break;
          }
          _context.next = 11;
          return response.text()["catch"](function () {
            return 'Unknown error';
          });
        case 11:
          errorBody = _context.sent;
          throw new Error("API error (".concat(response.status, "): ").concat(errorBody));
        case 13:
          _context.next = 15;
          return response.json();
        case 15:
          data = _context.sent;
          content = data === null || data === void 0 || (_data$choices = data.choices) === null || _data$choices === void 0 || (_data$choices = _data$choices[0]) === null || _data$choices === void 0 || (_data$choices = _data$choices.message) === null || _data$choices === void 0 ? void 0 : _data$choices.content;
          if (content) {
            _context.next = 19;
            break;
          }
          throw new Error('API returned empty response — check model and API key');
        case 19:
          return _context.abrupt("return", content.trim());
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _translateText.apply(this, arguments);
}
;// ./src/types/types.ts
var defaultSettings = {
  apiUrl: 'https://api.openai.com/v1',
  apiKey: '',
  model: 'gpt-4o-mini',
  targetLanguage: 'zh-CN',
  inputLanguage: 'en',
  uiLanguage: 'zh-CN',
  autoMode: 'none',
  prompt: 'Translate the following text to {{language}}. Output only the translated text, nothing else:\n\n{{text}}'
};
var languageCodes = {
  Afrikaans: 'af',
  Albanian: 'sq',
  Amharic: 'am',
  Arabic: 'ar',
  Armenian: 'hy',
  Azerbaijani: 'az',
  Basque: 'eu',
  Belarusian: 'be',
  Bengali: 'bn',
  Bosnian: 'bs',
  Bulgarian: 'bg',
  Catalan: 'ca',
  Cebuano: 'ceb',
  'Chinese (Simplified)': 'zh-CN',
  'Chinese (Traditional)': 'zh-TW',
  Corsican: 'co',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Dutch: 'nl',
  English: 'en',
  Esperanto: 'eo',
  Estonian: 'et',
  Finnish: 'fi',
  French: 'fr',
  Frisian: 'fy',
  Galician: 'gl',
  Georgian: 'ka',
  German: 'de',
  Greek: 'el',
  Gujarati: 'gu',
  'Haitian Creole': 'ht',
  Hausa: 'ha',
  Hawaiian: 'haw',
  Hebrew: 'iw',
  Hindi: 'hi',
  Hmong: 'hmn',
  Hungarian: 'hu',
  Icelandic: 'is',
  Igbo: 'ig',
  Indonesian: 'id',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Javanese: 'jw',
  Kannada: 'kn',
  Kazakh: 'kk',
  Khmer: 'km',
  Korean: 'ko',
  Kurdish: 'ku',
  Kyrgyz: 'ky',
  Lao: 'lo',
  Latin: 'la',
  Latvian: 'lv',
  Lithuanian: 'lt',
  Luxembourgish: 'lb',
  Macedonian: 'mk',
  Malagasy: 'mg',
  Malay: 'ms',
  Malayalam: 'ml',
  Maltese: 'mt',
  Maori: 'mi',
  Marathi: 'mr',
  Mongolian: 'mn',
  'Myanmar (Burmese)': 'my',
  Nepali: 'ne',
  Norwegian: 'no',
  'Nyanja (Chichewa)': 'ny',
  Pashto: 'ps',
  Persian: 'fa',
  Polish: 'pl',
  'Portuguese (Portugal)': 'pt-PT',
  'Portuguese (Brazil)': 'pt-BR',
  Punjabi: 'pa',
  Romanian: 'ro',
  Russian: 'ru',
  Samoan: 'sm',
  'Scots Gaelic': 'gd',
  Serbian: 'sr',
  Sesotho: 'st',
  Shona: 'sn',
  Sindhi: 'sd',
  'Sinhala (Sinhalese)': 'si',
  Slovak: 'sk',
  Slovenian: 'sl',
  Somali: 'so',
  Spanish: 'es',
  Sundanese: 'su',
  Swahili: 'sw',
  Swedish: 'sv',
  'Tagalog (Filipino)': 'tl',
  Tajik: 'tg',
  Tamil: 'ta',
  Telugu: 'te',
  Thai: 'th',
  Turkish: 'tr',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uzbek: 'uz',
  Vietnamese: 'vi',
  Welsh: 'cy',
  Xhosa: 'xh',
  Yiddish: 'yi',
  Yoruba: 'yo',
  Zulu: 'zu'
};
;// ./src/locale.ts
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Plugin-internal i18n — independent of ST's global locale.
 */
var en = {
  'settings_title': 'Magic Translation Pro',
  'settings_api_url': 'API URL',
  'settings_api_key': 'API Key',
  'settings_model': 'Model',
  'settings_model_placeholder': 'gpt-4o-mini, deepseek-chat, ...',
  'settings_target_language': 'Display Language  —  AI responses shown in this language',
  'settings_input_language': 'Input Language  —  Your messages translated to this language before sending',
  'settings_ui_language': 'UI Language',
  'settings_auto_mode': 'Auto Mode',
  'settings_auto_mode_none': 'None',
  'settings_auto_mode_responses': 'Translate responses',
  'settings_auto_mode_inputs': 'Translate inputs',
  'settings_auto_mode_both': 'Translate both',
  'settings_prompt': 'Translation Prompt',
  'settings_restore': 'Restore default',
  'settings_prompt_hint': 'Use {{text}} for the message content and {{language}} for the target language name.',
  'tooltip_refresh_models': 'Fetch available models from API',
  'tooltip_manual_input': 'Manual input',
  'select_model': '— Select a model —',
  'toast_setup_first': 'Set API URL and Model in Magic Translation settings',
  'toast_in_progress': 'Translation already in progress',
  'toast_enter_url': 'Enter API URL first',
  'toast_no_models': 'No models found',
  'toast_models_found': 'Found {count} models',
  'toast_fetch_failed': 'Failed to fetch models: {msg}',
  'toast_translate_failed': 'Translation failed: {msg}',
  'toast_api_error': 'API error ({status}): {msg}',
  'lang_en': 'English',
  'lang_zh-CN': '中文'
};
var zhCN = {
  'settings_title': 'Magic Translation Pro',
  'settings_api_url': 'API 地址',
  'settings_api_key': 'API 密钥',
  'settings_model': '模型',
  'settings_model_placeholder': 'gpt-4o-mini, deepseek-chat, ...',
  'settings_target_language': '显示语言  —  AI 回复以此语言显示',
  'settings_input_language': '输入语言  —  你的消息翻译成此语言后再发送',
  'settings_ui_language': '界面语言',
  'settings_auto_mode': '自动模式',
  'settings_auto_mode_none': '关闭',
  'settings_auto_mode_responses': '翻译回复',
  'settings_auto_mode_inputs': '翻译输入',
  'settings_auto_mode_both': '全部翻译',
  'settings_prompt': '翻译提示词',
  'settings_restore': '恢复默认',
  'settings_prompt_hint': '用 {{text}} 表示消息内容，{{language}} 表示目标语言名称。',
  'tooltip_refresh_models': '从 API 获取可用模型列表',
  'tooltip_manual_input': '手动输入',
  'select_model': '— 选择模型 —',
  'toast_setup_first': '请先在 Magic Translation 设置中填写 API 地址和模型',
  'toast_in_progress': '正在翻译中',
  'toast_enter_url': '请先填写 API 地址',
  'toast_no_models': '未找到模型',
  'toast_models_found': '找到 {count} 个模型',
  'toast_fetch_failed': '获取模型列表失败：{msg}',
  'toast_translate_failed': '翻译失败：{msg}',
  'toast_api_error': 'API 错误（{status}）：{msg}',
  'lang_en': 'English',
  'lang_zh-CN': '中文'
};
var allLocales = {
  en: en,
  'zh-CN': zhCN
};
/**
 * Translate a key into the given locale.
 * Falls back to English, then returns the key itself.
 */
function tr(key, locale) {
  var _ref, _allLocales$locale$ke, _allLocales$locale, _allLocales$en;
  return (_ref = (_allLocales$locale$ke = (_allLocales$locale = allLocales[locale]) === null || _allLocales$locale === void 0 ? void 0 : _allLocales$locale[key]) !== null && _allLocales$locale$ke !== void 0 ? _allLocales$locale$ke : (_allLocales$en = allLocales['en']) === null || _allLocales$en === void 0 ? void 0 : _allLocales$en[key]) !== null && _ref !== void 0 ? _ref : key;
}
/**
 * Replace `{key}` placeholders in a translated string.
 */
function trFmt(key, locale, params) {
  var s = tr(key, locale);
  for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    s = s.replace("{".concat(k, "}"), v);
  }
  return s;
}
/**
 * Apply plugin translations to elements with `data-i18n-plugin` attribute.
 * Supports:
 *   data-i18n-plugin="key"                     → replace textContent
 *   data-i18n-plugin="[attr]key"               → replace attribute
 *   data-i18n-plugin="[placeholder]key;[title]key2"  → multi-key / multi-attr
 */
function applyPluginLocale(root, locale) {
  var el = root instanceof jQuery ? root[0] : root;
  if (!el) return;
  el.querySelectorAll('[data-i18n-plugin]').forEach(function (node) {
    var raw = node.getAttribute('data-i18n-plugin');
    if (!raw) return;
    // Support semicolon-delimited keys like ST does
    var keys = raw.split(';');
    var _iterator = _createForOfIteratorHelper(keys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        var attrMatch = entry.match(/^\[(\S+)\](.+)/);
        if (attrMatch) {
          var translated = tr(attrMatch[2], locale);
          node.setAttribute(attrMatch[1], translated);
        } else {
          var _translated = tr(entry, locale);
          node.textContent = _translated;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}
;// ./src/index.ts
function src_typeof(o) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, src_typeof(o); }
function src_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ src_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == src_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(src_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function src_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function src_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { src_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { src_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function src_slicedToArray(r, e) { return src_arrayWithHoles(r) || src_iterableToArrayLimit(r, e) || src_unsupportedIterableToArray(r, e) || src_nonIterableRest(); }
function src_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function src_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return src_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? src_arrayLikeToArray(r, a) : void 0; } }
function src_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function src_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function src_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == src_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != src_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != src_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var incomingModes = ['responses', 'both'];
var outgoingModes = ['inputs', 'both'];
var generating = [];
/* ── helpers ─────────────────────────────────────────── */
function lang() {
  return getSettings().uiLanguage || 'en';
}
function __(key) {
  return tr(key, lang());
}
function __fmt(key, params) {
  return trFmt(key, lang(), params);
}
function toast(severity, message) {
  var _context$SlashCommand;
  var cmd = (_context$SlashCommand = context.SlashCommandParser) === null || _context$SlashCommand === void 0 || (_context$SlashCommand = _context$SlashCommand.commands) === null || _context$SlashCommand === void 0 ? void 0 : _context$SlashCommand['echo'];
  if (cmd !== null && cmd !== void 0 && cmd.callback) {
    cmd.callback({
      severity: severity
    }, message);
  } else {
    console.log("[".concat(severity, "] ").concat(message));
  }
}
function getSettings() {
  return context.extensionSettings.magicTranslation;
}
/* ── defaults ────────────────────────────────────────── */
function initDefaults() {
  var s = getSettings();
  if (!s) {
    context.extensionSettings.magicTranslation = _objectSpread({}, defaultSettings);
    context.saveSettingsDebounced();
    return;
  }
  var changed = false;
  for (var _i = 0, _Object$entries = Object.entries(defaultSettings); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = src_slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (s[key] === undefined) {
      s[key] = value;
      changed = true;
    }
  }
  if (changed) context.saveSettingsDebounced();
}
/* ── translate ───────────────────────────────────────── */
function doTranslate(_x, _x2) {
  return _doTranslate.apply(this, arguments);
}
/* ── settings UI ─────────────────────────────────────── */
function _doTranslate() {
  _doTranslate = src_asyncToGenerator(/*#__PURE__*/src_regeneratorRuntime().mark(function _callee2(msgId, type) {
    var _msg$extra, _Object$entries$find;
    var s, msg, sourceText, langCode, langName, result, _msg$extra2;
    return src_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          s = getSettings();
          if (!(!s.apiUrl || !s.model)) {
            _context2.next = 4;
            break;
          }
          toast('warning', __('toast_setup_first'));
          return _context2.abrupt("return");
        case 4:
          msg = context.chat[msgId];
          if (msg) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return");
        case 7:
          if (!generating.includes(msgId)) {
            _context2.next = 10;
            break;
          }
          toast('warning', __('toast_in_progress'));
          return _context2.abrupt("return");
        case 10:
          sourceText = msg.mes;
          if (sourceText) {
            _context2.next = 13;
            break;
          }
          return _context2.abrupt("return");
        case 13:
          if (!(type !== 'user' && (_msg$extra = msg.extra) !== null && _msg$extra !== void 0 && _msg$extra.display_text)) {
            _context2.next = 17;
            break;
          }
          delete msg.extra.display_text;
          (0,external_script_js_namespaceObject.updateMessageBlock)(msgId, msg);
          return _context2.abrupt("return");
        case 17:
          // Pick the right target language: user input → inputLanguage, AI responses → targetLanguage
          langCode = type === 'incoming' ? s.targetLanguage : s.inputLanguage || s.targetLanguage;
          langName = ((_Object$entries$find = Object.entries(languageCodes).find(function (_ref) {
            var _ref2 = src_slicedToArray(_ref, 2),
              c = _ref2[1];
            return c === langCode;
          })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0]) || langCode;
          generating.push(msgId);
          _context2.prev = 20;
          _context2.next = 23;
          return translateText(sourceText, s.prompt, langName, s.apiUrl, s.apiKey || '', s.model);
        case 23:
          result = _context2.sent;
          if (type === 'user') {
            // User input: replace the message text so the LLM gets the translation
            msg.mes = result;
          } else {
            // AI response: keep original text, show translation via display_text
            (_msg$extra2 = msg.extra) !== null && _msg$extra2 !== void 0 ? _msg$extra2 : msg.extra = {};
            msg.extra.display_text = result;
          }
          (0,external_script_js_namespaceObject.updateMessageBlock)(msgId, msg);
          _context2.next = 28;
          return context.saveChat();
        case 28:
          _context2.next = 34;
          break;
        case 30:
          _context2.prev = 30;
          _context2.t0 = _context2["catch"](20);
          console.error('Translation failed:', _context2.t0);
          toast('error', __fmt('toast_translate_failed', {
            msg: _context2.t0.message || String(_context2.t0)
          }));
        case 34:
          _context2.prev = 34;
          generating = generating.filter(function (id) {
            return id !== msgId;
          });
          return _context2.finish(34);
        case 37:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[20, 30, 34, 37]]);
  }));
  return _doTranslate.apply(this, arguments);
}
function bindSettingsUI() {
  var _s$uiLanguage, _s$apiUrl, _s$apiKey, _s$model, _s$targetLanguage, _s$inputLanguage, _s$autoMode, _s$prompt;
  var el = $('.magic-translation-settings');
  if (!el.length) return;
  var s = getSettings();
  function applyLanguage(locale) {
    applyPluginLocale(el[0], locale);
    // If model field is a <select>, update the placeholder option text
    var modelField = el.find('.model');
    if (modelField.is('select')) {
      modelField.find('option[value=""]').text(tr('select_model', locale));
    }
    // Update manual model button title
    var manualBtn = el.find('.manual_model');
    if (manualBtn.length) {
      manualBtn.attr('title', tr('tooltip_manual_input', locale));
    }
  }
  el.find('.ui_language').val((_s$uiLanguage = s.uiLanguage) !== null && _s$uiLanguage !== void 0 ? _s$uiLanguage : '').on('change', function () {
    s.uiLanguage = $(this).val();
    context.saveSettingsDebounced();
    applyLanguage(s.uiLanguage);
  });
  // Initial language apply done after render in init, but call again here for safety
  applyLanguage(s.uiLanguage || 'en');
  el.find('.api_url').val((_s$apiUrl = s.apiUrl) !== null && _s$apiUrl !== void 0 ? _s$apiUrl : '').on('change', function () {
    s.apiUrl = $(this).val();
    context.saveSettingsDebounced();
  });
  el.find('.api_key').val((_s$apiKey = s.apiKey) !== null && _s$apiKey !== void 0 ? _s$apiKey : '').on('change', function () {
    s.apiKey = $(this).val();
    context.saveSettingsDebounced();
  });
  el.find('.model').val((_s$model = s.model) !== null && _s$model !== void 0 ? _s$model : '').on('change', function () {
    s.model = $(this).val();
    context.saveSettingsDebounced();
  });
  // Fetch available models
  function refreshModelList() {
    return _refreshModelList.apply(this, arguments);
  }
  function _refreshModelList() {
    _refreshModelList = src_asyncToGenerator(/*#__PURE__*/src_regeneratorRuntime().mark(function _callee() {
      var _el$find$val;
      var url, key, btn, endpoint, headers, res, data, models, modelInput, currentVal, select, manualBtn;
      return src_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            url = (_el$find$val = el.find('.api_url').val()) === null || _el$find$val === void 0 ? void 0 : _el$find$val.replace(/\/+$/, '');
            key = el.find('.api_key').val();
            if (url) {
              _context.next = 5;
              break;
            }
            toast('warning', __('toast_enter_url'));
            return _context.abrupt("return");
          case 5:
            btn = el.find('.refresh_models');
            btn.addClass('fa-spin');
            _context.prev = 7;
            endpoint = url.endsWith('/models') ? url : "".concat(url, "/models");
            headers = {
              'Content-Type': 'application/json'
            };
            if (key) headers['Authorization'] = "Bearer ".concat(key);
            _context.next = 13;
            return fetch(endpoint, {
              headers: headers
            });
          case 13:
            res = _context.sent;
            if (res.ok) {
              _context.next = 16;
              break;
            }
            throw new Error("HTTP ".concat(res.status));
          case 16:
            _context.next = 18;
            return res.json();
          case 18:
            data = _context.sent;
            models = (data.data || data.models || []).map(function (m) {
              return m.id || m.name;
            }).filter(Boolean).sort();
            if (models.length) {
              _context.next = 23;
              break;
            }
            toast('error', __('toast_no_models'));
            return _context.abrupt("return");
          case 23:
            // Replace text input with a select dropdown
            modelInput = el.find('.model');
            currentVal = modelInput.val();
            select = $("<select class=\"text_pole model\"></select>");
            select.append("<option value=\"\">".concat(__('select_model'), "</option>"));
            models.forEach(function (id) {
              select.append("<option value=\"".concat(id, "\" ").concat(id === currentVal ? 'selected' : '', ">").concat(id, "</option>"));
            });
            select.on('change', function () {
              s.model = $(this).val();
              context.saveSettingsDebounced();
            });
            modelInput.replaceWith(select);
            // Add a button to switch back to manual input
            manualBtn = el.find('.manual_model');
            if (!manualBtn.length) {
              manualBtn = $("<button class=\"menu_button fa-solid fa-pen interactable manual_model\" title=\"".concat(__('tooltip_manual_input'), "\"></button>"));
              el.find('.model').parent().append(manualBtn);
            }
            manualBtn.off('click').on('click', function () {
              var sel = el.find('.model');
              var savedVal = s.model || '';
              var input = $("<input class=\"text_pole model\" type=\"text\" list=\"model_list\" value=\"".concat(savedVal, "\" spellcheck=\"false\" style=\"flex:1\" />"));
              input.attr('placeholder', __('settings_model_placeholder'));
              input.on('change', function () {
                s.model = $(this).val();
                context.saveSettingsDebounced();
              });
              sel.replaceWith(input);
              var list = el.find('.model_list');
              list.empty();
              models.forEach(function (id) {
                return list.append("<option value=\"".concat(id, "\">"));
              });
              $(this).remove();
            });
            toast('success', __fmt('toast_models_found', {
              count: String(models.length)
            }));
            _context.next = 39;
            break;
          case 36:
            _context.prev = 36;
            _context.t0 = _context["catch"](7);
            toast('error', __fmt('toast_fetch_failed', {
              msg: _context.t0.message || String(_context.t0)
            }));
          case 39:
            _context.prev = 39;
            btn.removeClass('fa-spin');
            return _context.finish(39);
          case 42:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 36, 39, 42]]);
    }));
    return _refreshModelList.apply(this, arguments);
  }
  el.find('.refresh_models').on('click', refreshModelList);
  el.find('.target_language').val((_s$targetLanguage = s.targetLanguage) !== null && _s$targetLanguage !== void 0 ? _s$targetLanguage : '').on('change', function () {
    s.targetLanguage = $(this).val();
    context.saveSettingsDebounced();
  });
  el.find('.input_language').val((_s$inputLanguage = s.inputLanguage) !== null && _s$inputLanguage !== void 0 ? _s$inputLanguage : '').on('change', function () {
    s.inputLanguage = $(this).val();
    context.saveSettingsDebounced();
  });
  el.find('.auto_mode').val((_s$autoMode = s.autoMode) !== null && _s$autoMode !== void 0 ? _s$autoMode : '').on('change', function () {
    s.autoMode = $(this).val();
    context.saveSettingsDebounced();
  });
  el.find('.prompt').val((_s$prompt = s.prompt) !== null && _s$prompt !== void 0 ? _s$prompt : '').on('change', function () {
    s.prompt = $(this).val();
    context.saveSettingsDebounced();
  });
  el.find('.restore_default').on('click', function () {
    el.find('.prompt').val(defaultSettings.prompt).trigger('change');
  });
}
/* ── init ────────────────────────────────────────────── */
function initUI() {
  return _initUI.apply(this, arguments);
}
function _initUI() {
  _initUI = src_asyncToGenerator(/*#__PURE__*/src_regeneratorRuntime().mark(function _callee3() {
    var s, langOptions, html, btn;
    return src_regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          initDefaults();
          s = getSettings(); // Build language code options for both dropdowns
          langOptions = function langOptions(type) {
            return Object.entries(languageCodes).reduce(function (acc, _ref3) {
              var _ref4 = src_slicedToArray(_ref3, 2),
                name = _ref4[0],
                code = _ref4[1];
              acc[code] = {
                name: name,
                selected: code === (type === 'target' ? s.targetLanguage : s.inputLanguage)
              };
              return acc;
            }, {});
          };
          _context3.next = 5;
          return context.renderExtensionTemplateAsync("third-party/".concat(extensionName), 'templates/settings', {
            languageCodes: langOptions('target'),
            inputLanguageCodes: langOptions('input')
          });
        case 5:
          html = _context3.sent;
          $('#extensions_settings').append(html);
          bindSettingsUI();
          // Translate button on each message
          btn = $("<div title=\"Magic Translate\" class=\"mes_button mes_magic_translation_button fa-solid fa-globe interactable\" tabindex=\"0\"></div>");
          $('#message_template .mes_buttons .extraMesButtons').prepend(btn);
          $(document).on('click', '.mes_magic_translation_button', function () {
            var block = $(this).closest('.mes');
            var id = Number(block.attr('mesid'));
            doTranslate(id, 'incoming');
          });
          // Auto-translate hooks
          context.eventSource.on('message_updated', function (msgId) {
            if (incomingModes.includes(getSettings().autoMode)) {
              doTranslate(msgId, 'incoming');
            }
          });
          context.eventSource.on('impersonate_ready', function (msgId) {
            if (outgoingModes.includes(getSettings().autoMode)) {
              doTranslate(msgId, 'impersonate');
            }
          });
          // @ts-ignore
          context.eventSource.makeFirst('character_message_rendered', function (msgId) {
            if (incomingModes.includes(getSettings().autoMode)) {
              doTranslate(msgId, 'incoming');
            }
          });
          // @ts-ignore
          context.eventSource.makeFirst('user_message_rendered', function (msgId) {
            if (outgoingModes.includes(getSettings().autoMode)) {
              doTranslate(msgId, 'user');
            }
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _initUI.apply(this, arguments);
}
initUI();

//# sourceMappingURL=index.js.map