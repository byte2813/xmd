"use strict";
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