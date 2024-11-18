
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/sdk/eyouClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '986f5W4x0xMRYP+4Hd9Lz8z', 'eyouClient');
// Scripts/sdk/eyouClient.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var BASE_URL = 'https://games.hndibei.com';
var EyouClientV2 = /*#__PURE__*/function () {
  function EyouClientV2() {
    var N = null,
      h = 0x1,
      E = null,
      i = null,
      b = '-1',
      g = '-1',
      B = 0x4,
      n = null,
      D = null,
      R = null,
      x = null,
      P = null,
      K = null,
      y = null;
    var f = function f(Z) {
        N = Z;
        var l = wx['getSystemInfoSync']();
        B = l['platform'] === 'android' ? '4' : l['platform'] === 'ios' ? '5' : '6';
        var a = wx['getLaunchOptionsSync']()['query'];
        E = a['channel'], i = a['sub_channel'];
        var O = {
          '10908': ['ad_id', 'clue_token'],
          '10918': ['ad_id', 'clue_token'],
          '10912': ['weixinadinfo'],
          '10913': ['ksUnitId', 'callback'],
          '10914': ['uid', 'bd_vid'],
          '10916': ['aid', 'trackid'],
          '10917': ['campaignid', 'uctrackid'],
          '10919': ['promotion_id', 'clue_token'],
          '10920': ['ADID', 'imp', 'mark_id']
        };
        if (O['hasOwnProperty'](E)) {
          var _O$E = O[E],
            j = _O$E[0],
            I = _O$E[1],
            Q = _O$E[2];
          if (j === 'weixinadinfo') {
            var s = a['weixinadinfo'];
            if (s) {
              var p = s['split']('.');
              b = p[0x0], g = p[0x1];
            }
          } else b = a[j], g = a[I], !g && Q && (g = a[Q]);
        } else E = '10906', i = '' + N + h + E + B + '0';
      },
      c = function c() {
        return new Promise(function (Z, l) {
          wx['login']({
            'success': function success(_ref) {
              var a = _ref.code;
              a ? Z(a) : l(new Error('获取code失败'));
            },
            'fail': l
          });
        });
      },
      C = function C(Z, l) {
        return new Promise(function (a, O) {
          wx['request']({
            'url': Z,
            'method': 'POST',
            'header': {
              'Content-Type': 'application/json'
            },
            'data': JSON['stringify'](l),
            'fail': O,
            'success': function success(j) {
              a(j['data']);
            },
            'complete': function complete(j) {
              console['log']('---------------------------------请求\x20BEGIN--------------------------------'), console['log']('Url:>', Z), console['log']('请求参数:>', l), console['log']('响应:>', j['data'] || j['errMsg']), console['log']('---------------------------------请求\x20END--------------------------------');
            }
          });
        });
      },
      t = BASE_URL + '/market-wechat-game-server/wxTransfer/showTransfer',
      L = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(Z) {
          var l, a, _a$data, O, j, I, Q, s;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                l = {
                  'gameId': N,
                  'platformId': h,
                  'transferNodeType': Z,
                  'userId': D,
                  'sys': B
                };
                _context.next = 4;
                return C(t, l);
              case 4:
                a = _context.sent;
                if (a['code'] === CodeStatus['SUCCESS']) {
                  _a$data = a['data'], O = _a$data.transferType, j = _a$data.showText, I = _a$data.copyText, Q = _a$data.pictureUrl, s = _a$data.showTip;
                  if (O === 0x1) wx['showModal']({
                    'title': '公告',
                    'content': j,
                    'confirmText': '复制链接',
                    'success': function success(p) {
                      p['confirm'] && wx['setClipboardData']({
                        'data': I
                      });
                    }
                  });else {
                    if (O === 0x2) wx['previewImage']({
                      'urls': [Q + '?time=' + Math['floor'](Date['now']() / 0x3e8)]
                    });else O === 0x3 && s('公告', s);
                  }
                } else console['log']('公告展示失败:', a['message']);
                return _context.abrupt("return", {
                  'success': !![],
                  'result': a
                });
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (console['error']('[展示公告]异常:', _context.t0), {
                  'success': ![],
                  'error': error
                }));
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 9]]);
        }));
        return function L(_x) {
          return _ref2.apply(this, arguments);
        };
      }(),
      m = function m(Z, l) {
        Z['gameId'] = N, (Z['platformId'] = h, Z['sys'] = B), Y(Z)['then'](function (a) {
          if (a['payType'] == 0x1) a['balance'] > 0x0 ? A('充值提示', '账户余额:' + a['balance'] + '元,\x20还需充值:' + a['needPay'] + '元', function () {
            return M(a);
          }) : M(a, l);else {
            if (a['payType'] == 0x2) q(a, l);else {
              if (a['payType'] == 0x4) wx['showModal']({
                'title': '充值提示',
                'content': '即将展示充值二维码,\x20请扫描二维码完成支付',
                'success': function success(O) {
                  O['confirm'] && wx['previewImage']({
                    'urls': [a['payUrl']]
                  });
                }
              });else throw new Error('非法支付类型');
            }
          }
        });
      },
      M = function M(Z, l) {
        if (Z['needPay'] == 0x0) {
          k(Z, l);
          return;
        }
        wx['requestMidasPayment']({
          'mode': 'game',
          'env': 0x0,
          'offerId': Z['offerId'],
          'currencyType': 'CNY',
          'platform': 'android',
          'buyQuantity': Z['needPay'] * Z['midasRate'],
          'zoneId': '1',
          'success': function success(a) {
            k(Z, l);
          },
          'fail': function fail(a) {
            A('微信支付失败', a);
          }
        });
      },
      q = function q(Z, l) {
        wx['openCustomerServiceConversation']({
          'showMessageCard': !![],
          'sessionFrom': Z['payUrl'],
          'sendMessagePath': '/index.wxml?url=' + Z['payUrl'],
          'sendMessageTitle': '发送卡片充值',
          'sendMessageImg': Z['payIconUrl']
        });
      },
      X = BASE_URL + '/market-wechat-game-server/wxClient/deduct',
      k = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(Z, l) {
          var a, O, j, I, Q;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                a = {
                  'orderId': Z['orderId'],
                  'gameId': N,
                  'platformId': h,
                  'userId': Z['userId']
                }, O = 0x3;
                j = 0x0, I = ![];
              case 2:
                if (!(j < O && !I)) {
                  _context2.next = 22;
                  break;
                }
                _context2.prev = 3;
                _context2.next = 6;
                return C(X, a);
              case 6:
                Q = _context2.sent;
                _context2.t0 = Q['code'] === CodeStatus['GAME_SESSION_KEY_TIME_OUT_ERR'];
                if (!_context2.t0) {
                  _context2.next = 11;
                  break;
                }
                _context2.next = 11;
                return v();
              case 11:
                if (!(Q['code'] === CodeStatus['SUCCESS'])) {
                  _context2.next = 14;
                  break;
                }
                l(Q);
                return _context2.abrupt("break", 22);
              case 14:
                _context2.next = 19;
                break;
              case 16:
                _context2.prev = 16;
                _context2.t1 = _context2["catch"](3);
                console['error']('[扣款失败]异常:>', _context2.t1);
              case 19:
                j++;
                _context2.next = 2;
                break;
              case 22:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[3, 16]]);
        }));
        return function k(_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }(),
      W = BASE_URL + '/market-wechat-game-server/wxClient/pullPay',
      Y = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(Z) {
          var l, a, O, j, I;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                l = 0x3;
                a = 0x0, O = ![], j = ![];
              case 2:
                if (!(a < l && !O)) {
                  _context3.next = 25;
                  break;
                }
                _context3.prev = 3;
                _context3.next = 6;
                return C(W, Z);
              case 6:
                I = _context3.sent;
                if (!(I['code'] === CodeStatus['SUCCESS'])) {
                  _context3.next = 11;
                  break;
                }
                return _context3.abrupt("return", I['data']);
              case 11:
                if (!(I['code'] === CodeStatus['GAME_SESSION_KEY_TIME_OUT_ERR'])) {
                  _context3.next = 16;
                  break;
                }
                _context3.next = 14;
                return v();
              case 14:
                _context3.next = 17;
                break;
              case 16:
                !j && (A('支付拉起失败', I['message']), j = !![]);
              case 17:
                _context3.next = 22;
                break;
              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](3);
                !j && (A('支付拉起失败', '网络超时'), j = !![]);
              case 22:
                a++;
                _context3.next = 2;
                break;
              case 25:
                throw new Error('支付拉起失败');
              case 26:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[3, 19]]);
        }));
        return function Y(_x4) {
          return _ref4.apply(this, arguments);
        };
      }(),
      u = BASE_URL + '/market-wechat-game-server/wxClient/refreshSession',
      v = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var Z, l, a, O, j, I;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                Z = 0x3;
                l = 0x0, a = ![];
              case 2:
                if (!(l < Z && !a)) {
                  _context4.next = 19;
                  break;
                }
                _context4.prev = 3;
                _context4.next = 6;
                return c();
              case 6:
                O = _context4.sent;
                j = {
                  'gameId': N,
                  'platformId': h,
                  'code': O
                };
                _context4.next = 10;
                return C(u, j);
              case 10:
                I = _context4.sent;
                a = I['code'] === CodeStatus['SUCCESS'];
                _context4.next = 17;
                break;
              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](3);
                console['error']('[刷新会话失败]异常:>', _context4.t0), l++;
              case 17:
                _context4.next = 2;
                break;
              case 19:
                if (a) {
                  _context4.next = 21;
                  break;
                }
                throw new Error('刷新会话失败');
              case 21:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[3, 14]]);
        }));
        return function v() {
          return _ref5.apply(this, arguments);
        };
      }(),
      J = BASE_URL + '/market-wechat-game-server/wxClient/adAction',
      A = function A(Z, l, a, O) {
        wx['showModal']({
          'title': Z,
          'content': l,
          'success': function success(j) {
            if (j['confirm'] && a) a();else j['cancel'] && O && O();
          }
        });
      },
      H = function H(Z, l, a) {
        var O = {
          'gameId': N,
          'platformId': h,
          'channelId': E,
          'subChannelId': i,
          'aid': b,
          'traceId': g,
          'sys': B,
          'userId': D,
          'adType': Z,
          'adUnitId': l,
          'adActionType': a
        };
        C(J, O)['catch'](function (j) {
          console['log']('发送广告行为失败:>', j);
        });
      },
      U = BASE_URL + '/market-wechat-game-server/wxClient/initGame';
    this['init'] = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(Z, l) {
        var a, O, j;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              f(Z);
              _context5.next = 4;
              return c();
            case 4:
              a = _context5.sent;
              O = {
                'code': a,
                'gameId': N,
                'platformId': h,
                'channelId': E,
                'subChannelId': i,
                'aid': b,
                'traceId': g,
                'sys': B
              };
              _context5.next = 8;
              return C(U, O);
            case 8:
              j = _context5.sent;
              j['code'] === CodeStatus['SUCCESS'] && (D = j['data']['userId'], console['log'](D), R = j['data']['unionId'], n = a, j['data'] = null), l(j);
              _context5.next = 15;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              console['error']('[初始化游戏]异常:>', _context5.t0);
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 12]]);
      }));
      return function (_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }(), this['login'] = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(Z) {
        var l;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return L(0x1);
            case 3:
              l = _context6.sent;
              (!l['success'] || l['result']['code'] != 0x0 || l['result']['data']['transferType'] != 0x3) && Z({
                'code': CodeStatus['SUCCESS'],
                'message': '操作成功',
                'data': {
                  'code': n
                }
              });
              _context6.next = 10;
              break;
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              console['error']('[登录游戏]异常:>', _context6.t0);
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 7]]);
      }));
      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }(), this['pay'] = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(Z, l) {
        var a;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return L(0x2);
            case 3:
              a = _context7.sent;
              (!a['success'] || a['result']['code'] != 0x0) && m(Z, l);
              _context7.next = 10;
              break;
            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              console['error']('[支付拉起]异常:>', _context7.t0);
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 7]]);
      }));
      return function (_x8, _x9) {
        return _ref8.apply(this, arguments);
      };
    }();
    var d = BASE_URL + '/market-wechat-game-server/wxClient/uploadRoleInfo';
    this['uploadRoleInfo'] = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(Z, l) {
        var a;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              Z['gameId'] = N, Z['platformId'] = h;
              _context8.next = 4;
              return C(d, Z);
            case 4:
              a = _context8.sent;
              l(a);
              _context8.next = 11;
              break;
            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](0);
              console['error']('上报角色数据异常:>', _context8.t0);
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 8]]);
      }));
      return function (_x10, _x11) {
        return _ref9.apply(this, arguments);
      };
    }();
    var V = BASE_URL + '/market-wechat-game-server/wxServer/msgSecCheck';
    this['msgSecCheck'] = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(Z, l) {
        var a;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              Z['gameId'] = N, Z['platformId'] = h;
              _context9.prev = 1;
              _context9.next = 4;
              return C(V, Z);
            case 4:
              a = _context9.sent;
              l(a);
              _context9.next = 11;
              break;
            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](1);
              console['error']('[文本安全检测]异常:>', _context9.t0);
            case 11:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[1, 8]]);
      }));
      return function (_x12, _x13) {
        return _ref10.apply(this, arguments);
      };
    }(), this['createRewardedVideoAd'] = function (Z, l) {
      if (!wx['createRewardedVideoAd']) {
        A('提示', '基础库版本号过低,\x20暂不支持展示激励视频');
        return;
      }
      if (x != Z['adUnitId']) {
        if (P) {
          P['destory'](), x = null, P = null, createRewardedVideoAd(Z, l);
          return;
        }
        var a = {
          'adUnitId': Z['adUnitId']
        };
        Z['multiton'] && (a['multiton'] = Z['multiton']), P = wx['createRewardedVideoAd'](a), P['onError'](function (O) {
          return console['log']('激励视频程序出错:>', O);
        }), P['onClose'](function (O) {
          O && O['isEnded'] || O === undefined ? (H(AdType['REWARDED_VIDEO_AD'], x, AdActionType['FINISHED']), Z['onClose'] && Z['onClose']({
            'code': CodeStatus['SUCCESS'],
            'message': '播放完成',
            'data': null
          })) : Z['onClose'] && Z['onClose']({
            'code': CodeStatus['FAILED'],
            'message': '播放未完成',
            'data': null
          });
        }), x = Z['adUnitId'];
      }
      l({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['showRewardedVideoAd'] = function () {
      P && P['show']()['then'](function () {
        return H(AdType['REWARDED_VIDEO_AD'], x, AdActionType['SHOW']);
      })['catch'](function () {
        P['load']()['then'](function () {
          return P['show']()['then'](function () {
            return H(AdType['REWARDED_VIDEO_AD'], x, AdActionType['SHOW']);
          });
        })['catch'](function (Z) {
          return console['log']('激励视频\x20广告显示失败');
        });
      });
    }, this['createBannerAd'] = function (Z, l) {
      if (!wx['createBannerAd']) {
        A('提示', '基础库版本号过低,\x20暂不支持展示Banner广告');
        return;
      }
      if (K != Z['adUnitId']) {
        if (y) {
          y['destory'](), K = null, y = null, createBannerAd(Z, l);
          return;
        }
        var a = {
          'adUnitId': Z['adUnitId'],
          'style': Z['style']
        };
        Z['adIntervals'] && (a['adIntervals'] = Z['adIntervals']), y = wx['createBannerAd'](a), y['onLoad'](function () {
          H(AdType['BANNER_AD'], K, AdActionType['FINISHED']);
        }), y['onError'](function (O) {
          return console['log']('banner广告程序出错:>', O);
        }), K = Z['adUnitId'];
      }
      l({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['showBannerAd'] = function () {
      y && y['show']();
    }, this['hideBannerAd'] = function () {
      y && y['hide']();
    }, this['setStorageSync'] = function (Z, l) {
      wx['setStorageSync'](Z, l);
    }, this['removeStorageSync'] = function (Z) {
      wx['removeStorageSync'](Z);
    }, this['getStorageSync'] = function (Z) {
      return wx['getStorageSync'](Z);
    };
  }
  EyouClientV2['getIns'] = function getIns() {
    return !this['ins'] && (this['ins'] = new EyouClientV2()), this['ins'];
  };
  return EyouClientV2;
}();
exports["default"] = EyouClientV2;
var CodeStatus = function CodeStatus() {};
CodeStatus['SUCCESS'] = 0x0;
CodeStatus['FAILED'] = -0x1;
CodeStatus['GAME_SESSION_KEY_TIME_OUT_ERR'] = 0x2729;
var AdType = function AdType() {};
AdType['REWARDED_VIDEO_AD'] = 0x1;
AdType['BANNER_AD'] = 0x2;
var AdActionType = function AdActionType() {};
AdActionType['SHOW'] = 0x1;
AdActionType['FINISHED'] = 0x2;
module.exports = exports["default"];

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc2RrXFxleW91Q2xpZW50LmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiQkFTRV9VUkwiLCJFeW91Q2xpZW50VjIiLCJOIiwiaCIsIkUiLCJiIiwiZyIsIkIiLCJuIiwiRCIsIlIiLCJ4IiwiUCIsIksiLCJ5IiwiZiIsIloiLCJsIiwid3giLCJhIiwiTyIsIl9PJEUiLCJqIiwiSSIsIlEiLCJzIiwicCIsImMiLCJzdWNjZXNzIiwiX3JlZiIsImNvZGUiLCJDIiwiSlNPTiIsImNvbnNvbGUiLCJ0IiwiTCIsIl9yZWYyIiwiX2NhbGxlZSIsIl9hJGRhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiQ29kZVN0YXR1cyIsInRyYW5zZmVyVHlwZSIsInNob3dUZXh0IiwiY29weVRleHQiLCJwaWN0dXJlVXJsIiwic2hvd1RpcCIsIk1hdGgiLCJEYXRlIiwidDAiLCJfeCIsIm0iLCJZIiwiQSIsIk0iLCJxIiwiayIsImZhaWwiLCJYIiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInYiLCJ0MSIsIl94MiIsIl94MyIsIlciLCJfcmVmNCIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3g0IiwidSIsIl9yZWY1IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJKIiwiSCIsIlUiLCJfcmVmNiIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiX3g1IiwiX3g2IiwiX3JlZjciLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIl94NyIsIl9yZWY4IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJfeDgiLCJfeDkiLCJkIiwiX3JlZjkiLCJfY2FsbGVlOCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsIl94MTAiLCJfeDExIiwiViIsIl9yZWYxMCIsIl9jYWxsZWU5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX3gxMiIsIl94MTMiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJBZFR5cGUiLCJBZEFjdGlvblR5cGUiLCJjcmVhdGVCYW5uZXJBZCIsImdldElucyIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QUFZLFlBQUFBLGFBQUE7QUFBWkEsWUFBWSxDQUFTLE1BQU0sSUFBRSxHQUFHO0FBQWhDQSxZQUFZLENBQTZCLFVBQVUsSUFBRSxHQUFHO0FBQUFHLE1BQUEsQ0FBQXhRLE9BQUEsR0FBQUEsT0FBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkw9J2h0dHBzOi8vZ2FtZXMuaG5kaWJlaS5jb20nO2V4cG9ydCBkZWZhdWx0IGNsYXNzIEV5b3VDbGllbnRWMntjb25zdHJ1Y3Rvcigpe2xldCBOPW51bGwsaD0weDEsRT1udWxsLGk9bnVsbCxiPSctMScsZz0nLTEnLEI9MHg0LG49bnVsbCxEPW51bGwsUj1udWxsLHg9bnVsbCxQPW51bGwsSz1udWxsLHk9bnVsbDtjb25zdCBmPVo9PntOPVo7Y29uc3QgbD13eFsnZ2V0U3lzdGVtSW5mb1N5bmMnXSgpO0I9bFsncGxhdGZvcm0nXT09PSdhbmRyb2lkJz8nNCc6bFsncGxhdGZvcm0nXT09PSdpb3MnPyc1JzonNic7Y29uc3QgYT13eFsnZ2V0TGF1bmNoT3B0aW9uc1N5bmMnXSgpWydxdWVyeSddO0U9YVsnY2hhbm5lbCddLGk9YVsnc3ViX2NoYW5uZWwnXTtjb25zdCBPPXsnMTA5MDgnOlsnYWRfaWQnLCdjbHVlX3Rva2VuJ10sJzEwOTE4JzpbJ2FkX2lkJywnY2x1ZV90b2tlbiddLCcxMDkxMic6Wyd3ZWl4aW5hZGluZm8nXSwnMTA5MTMnOlsna3NVbml0SWQnLCdjYWxsYmFjayddLCcxMDkxNCc6Wyd1aWQnLCdiZF92aWQnXSwnMTA5MTYnOlsnYWlkJywndHJhY2tpZCddLCcxMDkxNyc6WydjYW1wYWlnbmlkJywndWN0cmFja2lkJ10sJzEwOTE5JzpbJ3Byb21vdGlvbl9pZCcsJ2NsdWVfdG9rZW4nXSwnMTA5MjAnOlsnQURJRCcsJ2ltcCcsJ21hcmtfaWQnXX07aWYoT1snaGFzT3duUHJvcGVydHknXShFKSl7Y29uc3QgW2osSSxRXT1PW0VdO2lmKGo9PT0nd2VpeGluYWRpbmZvJyl7Y29uc3Qgcz1hWyd3ZWl4aW5hZGluZm8nXTtpZihzKXtjb25zdCBwPXNbJ3NwbGl0J10oJy4nKTtiPXBbMHgwXSxnPXBbMHgxXTt9fWVsc2UgYj1hW2pdLGc9YVtJXSwhZyYmUSYmKGc9YVtRXSk7fWVsc2UgRT0nMTA5MDYnLGk9JycrTitoK0UrQisnMCc7fSxjPSgpPT57cmV0dXJuIG5ldyBQcm9taXNlKChaLGwpPT57d3hbJ2xvZ2luJ10oeydzdWNjZXNzJzooe2NvZGU6YX0pPT57YT9aKGEpOmwobmV3IEVycm9yKCfojrflj5Zjb2Rl5aSx6LSlJykpO30sJ2ZhaWwnOmx9KTt9KTt9LEM9KFosbCk9PntyZXR1cm4gbmV3IFByb21pc2UoKGEsTyk9Pnt3eFsncmVxdWVzdCddKHsndXJsJzpaLCdtZXRob2QnOidQT1NUJywnaGVhZGVyJzp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSwnZGF0YSc6SlNPTlsnc3RyaW5naWZ5J10obCksJ2ZhaWwnOk8sJ3N1Y2Nlc3MnOmZ1bmN0aW9uKGope2EoalsnZGF0YSddKTt9LCdjb21wbGV0ZSc6ZnVuY3Rpb24oail7Y29uc29sZVsnbG9nJ10oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeivt+axglxceDIwQkVHSU4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpLGNvbnNvbGVbJ2xvZyddKCdVcmw6PicsWiksY29uc29sZVsnbG9nJ10oJ+ivt+axguWPguaVsDo+JyxsKSxjb25zb2xlWydsb2cnXSgn5ZON5bqUOj4nLGpbJ2RhdGEnXXx8alsnZXJyTXNnJ10pLGNvbnNvbGVbJ2xvZyddKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3or7fmsYJcXHgyMEVORC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7fX0pO30pO30sdD1CQVNFX1VSTCsnL21hcmtldC13ZWNoYXQtZ2FtZS1zZXJ2ZXIvd3hUcmFuc2Zlci9zaG93VHJhbnNmZXInLEw9YXN5bmMgWj0+e3RyeXtjb25zdCBsPXsnZ2FtZUlkJzpOLCdwbGF0Zm9ybUlkJzpoLCd0cmFuc2Zlck5vZGVUeXBlJzpaLCd1c2VySWQnOkQsJ3N5cyc6Qn0sYT1hd2FpdCBDKHQsbCk7aWYoYVsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddKXtjb25zdCB7dHJhbnNmZXJUeXBlOk8sc2hvd1RleHQ6aixjb3B5VGV4dDpJLHBpY3R1cmVVcmw6USxzaG93VGlwOnN9PWFbJ2RhdGEnXTtpZihPPT09MHgxKXd4WydzaG93TW9kYWwnXSh7J3RpdGxlJzon5YWs5ZGKJywnY29udGVudCc6aiwnY29uZmlybVRleHQnOiflpI3liLbpk77mjqUnLCdzdWNjZXNzJzpmdW5jdGlvbihwKXtwWydjb25maXJtJ10mJnd4WydzZXRDbGlwYm9hcmREYXRhJ10oeydkYXRhJzpJfSk7fX0pO2Vsc2V7aWYoTz09PTB4Mil3eFsncHJldmlld0ltYWdlJ10oeyd1cmxzJzpbUSsnP3RpbWU9JytNYXRoWydmbG9vciddKERhdGVbJ25vdyddKCkvMHgzZTgpXX0pO2Vsc2UgTz09PTB4MyYmcygn5YWs5ZGKJyxzKTt9fWVsc2UgY29uc29sZVsnbG9nJ10oJ+WFrOWRiuWxleekuuWksei0pTonLGFbJ21lc3NhZ2UnXSk7cmV0dXJueydzdWNjZXNzJzohIVtdLCdyZXN1bHQnOmF9O31jYXRjaChwKXtyZXR1cm4gY29uc29sZVsnZXJyb3InXSgnW+WxleekuuWFrOWRil3lvILluLg6JyxwKSx7J3N1Y2Nlc3MnOiFbXSwnZXJyb3InOmVycm9yfTt9fSxtPShaLGwpPT57WlsnZ2FtZUlkJ109TiwoWlsncGxhdGZvcm1JZCddPWgsWlsnc3lzJ109QiksWShaKVsndGhlbiddKGE9PntpZihhWydwYXlUeXBlJ109PTB4MSlhWydiYWxhbmNlJ10+MHgwP0EoJ+WFheWAvOaPkOekuicsJ+i0puaIt+S9meminTonK2FbJ2JhbGFuY2UnXSsn5YWDLFxceDIw6L+Y6ZyA5YWF5YC8OicrYVsnbmVlZFBheSddKyflhYMnLCgpPT5NKGEpKTpNKGEsbCk7ZWxzZXtpZihhWydwYXlUeXBlJ109PTB4MilxKGEsbCk7ZWxzZXtpZihhWydwYXlUeXBlJ109PTB4NCl3eFsnc2hvd01vZGFsJ10oeyd0aXRsZSc6J+WFheWAvOaPkOekuicsJ2NvbnRlbnQnOifljbPlsIblsZXnpLrlhYXlgLzkuoznu7TnoIEsXFx4MjDor7fmiavmj4/kuoznu7TnoIHlrozmiJDmlK/ku5gnLCdzdWNjZXNzJzpmdW5jdGlvbihPKXtPWydjb25maXJtJ10mJnd4WydwcmV2aWV3SW1hZ2UnXSh7J3VybHMnOlthWydwYXlVcmwnXV19KTt9fSk7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ+mdnuazleaUr+S7mOexu+WeiycpO319fSk7fSxNPShaLGwpPT57aWYoWlsnbmVlZFBheSddPT0weDApe2soWixsKTtyZXR1cm47fXd4WydyZXF1ZXN0TWlkYXNQYXltZW50J10oeydtb2RlJzonZ2FtZScsJ2Vudic6MHgwLCdvZmZlcklkJzpaWydvZmZlcklkJ10sJ2N1cnJlbmN5VHlwZSc6J0NOWScsJ3BsYXRmb3JtJzonYW5kcm9pZCcsJ2J1eVF1YW50aXR5JzpaWyduZWVkUGF5J10qWlsnbWlkYXNSYXRlJ10sJ3pvbmVJZCc6JzEnLCdzdWNjZXNzJzphPT57ayhaLGwpO30sJ2ZhaWwnOmE9PntBKCflvq7kv6HmlK/ku5jlpLHotKUnLGEpO319KTt9LHE9KFosbCk9Pnt3eFsnb3BlbkN1c3RvbWVyU2VydmljZUNvbnZlcnNhdGlvbiddKHsnc2hvd01lc3NhZ2VDYXJkJzohIVtdLCdzZXNzaW9uRnJvbSc6WlsncGF5VXJsJ10sJ3NlbmRNZXNzYWdlUGF0aCc6Jy9pbmRleC53eG1sP3VybD0nK1pbJ3BheVVybCddLCdzZW5kTWVzc2FnZVRpdGxlJzon5Y+R6YCB5Y2h54mH5YWF5YC8Jywnc2VuZE1lc3NhZ2VJbWcnOlpbJ3BheUljb25VcmwnXX0pO30sWD1CQVNFX1VSTCsnL21hcmtldC13ZWNoYXQtZ2FtZS1zZXJ2ZXIvd3hDbGllbnQvZGVkdWN0JyxrPWFzeW5jKFosbCk9Pntjb25zdCBhPXsnb3JkZXJJZCc6Wlsnb3JkZXJJZCddLCdnYW1lSWQnOk4sJ3BsYXRmb3JtSWQnOmgsJ3VzZXJJZCc6WlsndXNlcklkJ119LE89MHgzO2xldCBqPTB4MCxJPSFbXSxRO3doaWxlKGo8TyYmIUkpe3RyeXtRPWF3YWl0IEMoWCxhKTtRWydjb2RlJ109PT1Db2RlU3RhdHVzWydHQU1FX1NFU1NJT05fS0VZX1RJTUVfT1VUX0VSUiddJiZhd2FpdCB2KCk7aWYoUVsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddKXtsKFEpO2JyZWFrO319Y2F0Y2gocyl7Y29uc29sZVsnZXJyb3InXSgnW+aJo+asvuWksei0pV3lvILluLg6Picscyk7fWorKzt9fSxXPUJBU0VfVVJMKycvbWFya2V0LXdlY2hhdC1nYW1lLXNlcnZlci93eENsaWVudC9wdWxsUGF5JyxZPWFzeW5jIFo9Pntjb25zdCBsPTB4MztsZXQgYT0weDAsTz0hW10saj0hW107d2hpbGUoYTxsJiYhTyl7dHJ5e2NvbnN0IEk9YXdhaXQgQyhXLFopO2lmKElbJ2NvZGUnXT09PUNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSlyZXR1cm4gSVsnZGF0YSddO2Vsc2UgSVsnY29kZSddPT09Q29kZVN0YXR1c1snR0FNRV9TRVNTSU9OX0tFWV9USU1FX09VVF9FUlInXT9hd2FpdCB2KCk6IWomJihBKCfmlK/ku5jmi4notbflpLHotKUnLElbJ21lc3NhZ2UnXSksaj0hIVtdKTt9Y2F0Y2goUSl7IWomJihBKCfmlK/ku5jmi4notbflpLHotKUnLCfnvZHnu5zotoXml7YnKSxqPSEhW10pO31hKys7fXRocm93IG5ldyBFcnJvcign5pSv5LuY5ouJ6LW35aSx6LSlJyk7fSx1PUJBU0VfVVJMKycvbWFya2V0LXdlY2hhdC1nYW1lLXNlcnZlci93eENsaWVudC9yZWZyZXNoU2Vzc2lvbicsdj1hc3luYygpPT57Y29uc3QgWj0weDM7bGV0IGw9MHgwLGE9IVtdO3doaWxlKGw8WiYmIWEpe3RyeXtjb25zdCBPPWF3YWl0IGMoKSxqPXsnZ2FtZUlkJzpOLCdwbGF0Zm9ybUlkJzpoLCdjb2RlJzpPfSxJPWF3YWl0IEModSxqKTthPUlbJ2NvZGUnXT09PUNvZGVTdGF0dXNbJ1NVQ0NFU1MnXTt9Y2F0Y2goUSl7Y29uc29sZVsnZXJyb3InXSgnW+WIt+aWsOS8muivneWksei0pV3lvILluLg6PicsUSksbCsrO319aWYoIWEpdGhyb3cgbmV3IEVycm9yKCfliLfmlrDkvJror53lpLHotKUnKTt9LEo9QkFTRV9VUkwrJy9tYXJrZXQtd2VjaGF0LWdhbWUtc2VydmVyL3d4Q2xpZW50L2FkQWN0aW9uJyxBPShaLGwsYSxPKT0+e3d4WydzaG93TW9kYWwnXSh7J3RpdGxlJzpaLCdjb250ZW50JzpsLCdzdWNjZXNzJzpmdW5jdGlvbihqKXtpZihqWydjb25maXJtJ10mJmEpYSgpO2Vsc2UgalsnY2FuY2VsJ10mJk8mJk8oKTt9fSk7fSxIPShaLGwsYSk9PntsZXQgTz17J2dhbWVJZCc6TiwncGxhdGZvcm1JZCc6aCwnY2hhbm5lbElkJzpFLCdzdWJDaGFubmVsSWQnOmksJ2FpZCc6YiwndHJhY2VJZCc6Zywnc3lzJzpCLCd1c2VySWQnOkQsJ2FkVHlwZSc6WiwnYWRVbml0SWQnOmwsJ2FkQWN0aW9uVHlwZSc6YX07QyhKLE8pWydjYXRjaCddKGo9Pntjb25zb2xlWydsb2cnXSgn5Y+R6YCB5bm/5ZGK6KGM5Li65aSx6LSlOj4nLGopO30pO30sVT1CQVNFX1VSTCsnL21hcmtldC13ZWNoYXQtZ2FtZS1zZXJ2ZXIvd3hDbGllbnQvaW5pdEdhbWUnO3RoaXNbJ2luaXQnXT1hc3luYyhaLGwpPT57dHJ5e2YoWik7Y29uc3QgYT1hd2FpdCBjKCksTz17J2NvZGUnOmEsJ2dhbWVJZCc6TiwncGxhdGZvcm1JZCc6aCwnY2hhbm5lbElkJzpFLCdzdWJDaGFubmVsSWQnOmksJ2FpZCc6YiwndHJhY2VJZCc6Zywnc3lzJzpCfSxqPWF3YWl0IEMoVSxPKTtqWydjb2RlJ109PT1Db2RlU3RhdHVzWydTVUNDRVNTJ10mJihEPWpbJ2RhdGEnXVsndXNlcklkJ10sY29uc29sZVsnbG9nJ10oRCksUj1qWydkYXRhJ11bJ3VuaW9uSWQnXSxuPWEsalsnZGF0YSddPW51bGwpLGwoaik7fWNhdGNoKEkpe2NvbnNvbGVbJ2Vycm9yJ10oJ1vliJ3lp4vljJbmuLjmiI9d5byC5bi4Oj4nLEkpO319LHRoaXNbJ2xvZ2luJ109YXN5bmMgWj0+e3RyeXtjb25zdCBsPWF3YWl0IEwoMHgxKTsoIWxbJ3N1Y2Nlc3MnXXx8bFsncmVzdWx0J11bJ2NvZGUnXSE9MHgwfHxsWydyZXN1bHQnXVsnZGF0YSddWyd0cmFuc2ZlclR5cGUnXSE9MHgzKSYmWih7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOnsnY29kZSc6bn19KTt9Y2F0Y2goYSl7Y29uc29sZVsnZXJyb3InXSgnW+eZu+W9lea4uOaIj13lvILluLg6PicsYSk7fX0sdGhpc1sncGF5J109YXN5bmMoWixsKT0+e3RyeXtjb25zdCBhPWF3YWl0IEwoMHgyKTsoIWFbJ3N1Y2Nlc3MnXXx8YVsncmVzdWx0J11bJ2NvZGUnXSE9MHgwKSYmbShaLGwpO31jYXRjaChPKXtjb25zb2xlWydlcnJvciddKCdb5pSv5LuY5ouJ6LW3XeW8guW4uDo+JyxPKTt9fTtjb25zdCBkPUJBU0VfVVJMKycvbWFya2V0LXdlY2hhdC1nYW1lLXNlcnZlci93eENsaWVudC91cGxvYWRSb2xlSW5mbyc7dGhpc1sndXBsb2FkUm9sZUluZm8nXT1hc3luYyhaLGwpPT57dHJ5e1pbJ2dhbWVJZCddPU4sWlsncGxhdGZvcm1JZCddPWg7Y29uc3QgYT1hd2FpdCBDKGQsWik7bChhKTt9Y2F0Y2goTyl7Y29uc29sZVsnZXJyb3InXSgn5LiK5oql6KeS6Imy5pWw5o2u5byC5bi4Oj4nLE8pO319O2NvbnN0IFY9QkFTRV9VUkwrJy9tYXJrZXQtd2VjaGF0LWdhbWUtc2VydmVyL3d4U2VydmVyL21zZ1NlY0NoZWNrJzt0aGlzWydtc2dTZWNDaGVjayddPWFzeW5jKFosbCk9PntaWydnYW1lSWQnXT1OLFpbJ3BsYXRmb3JtSWQnXT1oO3RyeXtjb25zdCBhPWF3YWl0IEMoVixaKTtsKGEpO31jYXRjaChPKXtjb25zb2xlWydlcnJvciddKCdb5paH5pys5a6J5YWo5qOA5rWLXeW8guW4uDo+JyxPKTt9fSx0aGlzWydjcmVhdGVSZXdhcmRlZFZpZGVvQWQnXT0oWixsKT0+e2lmKCF3eFsnY3JlYXRlUmV3YXJkZWRWaWRlb0FkJ10pe0EoJ+aPkOekuicsJ+WfuuehgOW6k+eJiOacrOWPt+i/h+S9jixcXHgyMOaaguS4jeaUr+aMgeWxleekuua/gOWKseinhumikScpO3JldHVybjt9aWYoeCE9WlsnYWRVbml0SWQnXSl7aWYoUCl7UFsnZGVzdG9yeSddKCkseD1udWxsLFA9bnVsbCxjcmVhdGVSZXdhcmRlZFZpZGVvQWQoWixsKTtyZXR1cm47fWxldCBhPXsnYWRVbml0SWQnOlpbJ2FkVW5pdElkJ119O1pbJ211bHRpdG9uJ10mJihhWydtdWx0aXRvbiddPVpbJ211bHRpdG9uJ10pLFA9d3hbJ2NyZWF0ZVJld2FyZGVkVmlkZW9BZCddKGEpLFBbJ29uRXJyb3InXShPPT5jb25zb2xlWydsb2cnXSgn5r+A5Yqx6KeG6aKR56iL5bqP5Ye66ZSZOj4nLE8pKSxQWydvbkNsb3NlJ10oTz0+e08mJk9bJ2lzRW5kZWQnXXx8Tz09PXVuZGVmaW5lZD8oSChBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10seCxBZEFjdGlvblR5cGVbJ0ZJTklTSEVEJ10pLFpbJ29uQ2xvc2UnXSYmWlsnb25DbG9zZSddKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pKt5pS+5a6M5oiQJywnZGF0YSc6bnVsbH0pKTpaWydvbkNsb3NlJ10mJlpbJ29uQ2xvc2UnXSh7J2NvZGUnOkNvZGVTdGF0dXNbJ0ZBSUxFRCddLCdtZXNzYWdlJzon5pKt5pS+5pyq5a6M5oiQJywnZGF0YSc6bnVsbH0pO30pLHg9WlsnYWRVbml0SWQnXTt9bCh7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOm51bGx9KTt9LHRoaXNbJ3Nob3dSZXdhcmRlZFZpZGVvQWQnXT0oKT0+e1AmJlBbJ3Nob3cnXSgpWyd0aGVuJ10oKCk9PkgoQWRUeXBlWydSRVdBUkRFRF9WSURFT19BRCddLHgsQWRBY3Rpb25UeXBlWydTSE9XJ10pKVsnY2F0Y2gnXSgoKT0+e1BbJ2xvYWQnXSgpWyd0aGVuJ10oKCk9PlBbJ3Nob3cnXSgpWyd0aGVuJ10oKCk9PkgoQWRUeXBlWydSRVdBUkRFRF9WSURFT19BRCddLHgsQWRBY3Rpb25UeXBlWydTSE9XJ10pKSlbJ2NhdGNoJ10oWj0+Y29uc29sZVsnbG9nJ10oJ+a/gOWKseinhumikVxceDIw5bm/5ZGK5pi+56S65aSx6LSlJykpO30pO30sdGhpc1snY3JlYXRlQmFubmVyQWQnXT0oWixsKT0+e2lmKCF3eFsnY3JlYXRlQmFubmVyQWQnXSl7QSgn5o+Q56S6Jywn5Z+656GA5bqT54mI5pys5Y+36L+H5L2OLFxceDIw5pqC5LiN5pSv5oyB5bGV56S6QmFubmVy5bm/5ZGKJyk7cmV0dXJuO31pZihLIT1aWydhZFVuaXRJZCddKXtpZih5KXt5WydkZXN0b3J5J10oKSxLPW51bGwseT1udWxsLGNyZWF0ZUJhbm5lckFkKFosbCk7cmV0dXJuO31sZXQgYT17J2FkVW5pdElkJzpaWydhZFVuaXRJZCddLCdzdHlsZSc6Wlsnc3R5bGUnXX07WlsnYWRJbnRlcnZhbHMnXSYmKGFbJ2FkSW50ZXJ2YWxzJ109WlsnYWRJbnRlcnZhbHMnXSkseT13eFsnY3JlYXRlQmFubmVyQWQnXShhKSx5WydvbkxvYWQnXSgoKT0+e0goQWRUeXBlWydCQU5ORVJfQUQnXSxLLEFkQWN0aW9uVHlwZVsnRklOSVNIRUQnXSk7fSkseVsnb25FcnJvciddKE89PmNvbnNvbGVbJ2xvZyddKCdiYW5uZXLlub/lkYrnqIvluo/lh7rplJk6PicsTykpLEs9WlsnYWRVbml0SWQnXTt9bCh7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOm51bGx9KTt9LHRoaXNbJ3Nob3dCYW5uZXJBZCddPSgpPT57eSYmeVsnc2hvdyddKCk7fSx0aGlzWydoaWRlQmFubmVyQWQnXT0oKT0+e3kmJnlbJ2hpZGUnXSgpO30sdGhpc1snc2V0U3RvcmFnZVN5bmMnXT0oWixsKT0+e3d4WydzZXRTdG9yYWdlU3luYyddKFosbCk7fSx0aGlzWydyZW1vdmVTdG9yYWdlU3luYyddPVo9Pnt3eFsncmVtb3ZlU3RvcmFnZVN5bmMnXShaKTt9LHRoaXNbJ2dldFN0b3JhZ2VTeW5jJ109Wj0+e3JldHVybiB3eFsnZ2V0U3RvcmFnZVN5bmMnXShaKTt9O31zdGF0aWNbJ2dldElucyddKCl7cmV0dXJuIXRoaXNbJ2lucyddJiYodGhpc1snaW5zJ109bmV3IEV5b3VDbGllbnRWMigpKSx0aGlzWydpbnMnXTt9fWNsYXNzIENvZGVTdGF0dXN7c3RhdGljIFsnU1VDQ0VTUyddPTB4MDtzdGF0aWMgWydGQUlMRUQnXT0tMHgxO3N0YXRpYyBbJ0dBTUVfU0VTU0lPTl9LRVlfVElNRV9PVVRfRVJSJ109MHgyNzI5O31jbGFzcyBBZFR5cGV7c3RhdGljIFsnUkVXQVJERURfVklERU9fQUQnXT0weDE7c3RhdGljIFsnQkFOTkVSX0FEJ109MHgyO31jbGFzcyBBZEFjdGlvblR5cGV7c3RhdGljIFsnU0hPVyddPTB4MTtzdGF0aWMgWydGSU5JU0hFRCddPTB4Mjt9Il19