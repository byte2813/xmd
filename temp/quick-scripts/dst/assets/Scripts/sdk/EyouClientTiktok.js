
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/sdk/EyouClientTiktok.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e60dS3yGVHcbUkRe5ateNh', 'EyouClientTiktok');
// Scripts/sdk/EyouClientTiktok.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var BASE_URL = 'https://games.hndibei.com';
var EyouClientTiktok = /*#__PURE__*/function () {
  function EyouClientTiktok() {
    var x = null,
      y = 0x2,
      F = null,
      I = null,
      X = '-1',
      w = '-1',
      U = '4',
      j = null,
      K = null,
      z = null,
      A = null,
      t = null,
      P = null;
    var Q = new Map();
    var h = null;
    var E = function E(H, f) {
        H['gameId'] = x, (H['platformId'] = y, H['sys'] = U), J(H)['then'](function (W) {
          if (W['payType'] == 0x4) tt['previewImage']({
            'urls': [W['payUrl']],
            'showmenu': !![]
          });else {
            if (W['payType'] == 0x8) W['balance'] > 0x0 ? G('充值提示', '账户余额:' + W['balance'] + '元,\x20还需充值:' + W['needPay'] + '元', function () {
              return Z(W, f);
            }) : Z(W, f);else throw new Error('非法支付类型');
          }
        });
      },
      Z = function Z(H, f) {
        if (H['needPay'] == 0x0) {
          T(H, f);
          return;
        }
        tt['requestGamePayment']({
          'mode': 'game',
          'env': 0x0,
          'currencyType': 'CNY',
          'platform': 'android',
          'buyQuantity': H['needPay'] * H['rate'],
          'zoneId': H['zoneId'],
          'customId': H['orderId'],
          'extraInfo': H['orderId'],
          'success': function success(W) {
            T(H, f);
          }
        });
      },
      V = BASE_URL + '/market-multi-game-server/tiktokClient/deduct',
      T = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(H, f) {
          var W, a;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                W = {
                  'orderId': H['orderId'],
                  'gameId': x,
                  'platformId': y,
                  'userId': H['userId']
                };
                _context.next = 4;
                return q(V, W);
              case 4:
                a = _context.sent;
                a['code'] === CodeStatus['SUCCESS'] && f(a);
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console['error']('[扣款失败]异常:>', _context.t0);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 8]]);
        }));
        return function T(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(),
      d = BASE_URL + '/market-multi-game-server/tiktokClient/pullPay',
      J = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(H) {
          var f, W, a, S, g;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                f = 0x3;
                W = 0x0, a = ![], S = ![];
              case 2:
                if (!(W < f && !a)) {
                  _context2.next = 20;
                  break;
                }
                _context2.prev = 3;
                _context2.next = 6;
                return q(d, H);
              case 6:
                g = _context2.sent;
                if (!(g['code'] === CodeStatus['SUCCESS'])) {
                  _context2.next = 11;
                  break;
                }
                return _context2.abrupt("return", g['data']);
              case 11:
                !S && (G('支付拉起失败', g['message']), S = !![]);
              case 12:
                _context2.next = 17;
                break;
              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                !S && (G('支付拉起失败', '网络超时'), S = !![]);
              case 17:
                W++;
                _context2.next = 2;
                break;
              case 20:
                throw new Error('支付拉起失败');
              case 21:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[3, 14]]);
        }));
        return function J(_x3) {
          return _ref2.apply(this, arguments);
        };
      }(),
      k = function k() {
        return new Promise(function (H, f) {
          tt['login']({
            'force': !![],
            'success': function success(_ref3) {
              var W = _ref3.code;
              W ? (console['log']('code:>', W), H(W)) : f(new Error('获取code失败'));
            },
            'fail': f
          });
        });
      },
      B = function B(H) {
        x = H;
        var f = tt['getSystemInfoSync']();
        U = f['platform'] === 'android' ? '4' : f['platform'] === 'ios' ? '5' : '6';
        var W = tt['getLaunchOptionsSync']()['query'];
        F = W['channel'], I = W['sub_channel'];
        var a = {
          '10919': ['promotionid', 'clickid']
        };
        if (a['hasOwnProperty'](F)) {
          var _a$F = a[F],
            S = _a$F[0],
            g = _a$F[1];
          X = W[S], w = W[g];
        } else F = '10906', I = '' + x + y + F + U + '0';
      },
      p = BASE_URL + '/market-multi-game-server/tiktokClient/adAction',
      o = function o(H, f, W) {
        var a = {
          'gameId': x,
          'platformId': y,
          'channelId': F,
          'subChannelId': I,
          'aid': X,
          'traceId': w,
          'sys': U,
          'userId': K,
          'adType': H,
          'adUnitId': f,
          'adActionType': W
        };
        q(p, a)['catch'](function (S) {
          console['log']('发送广告行为失败:>', S);
        });
      },
      L = function L(H) {
        var f = Q['get'](H);
        if (!f) throw new Error('未创建编号为' + H + '的客服按钮');
        return f;
      },
      C = function C() {
        if (!h) throw new Error('未创建录屏管理器');
      },
      G = function G(H, f, W, a) {
        tt['showModal']({
          'title': H,
          'content': f,
          'success': function success(S) {
            if (S['confirm'] && W) W();else S['cancel'] && a && a();
          }
        });
      },
      q = function q(H, f) {
        return new Promise(function (W, a) {
          tt['request']({
            'url': H,
            'method': 'POST',
            'header': {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            'data': JSON['stringify'](f),
            'fail': a,
            'success': function success(S) {
              W(S['data']);
            },
            'complete': function complete(S) {
              console['log']('---------------------------------请求\x20BEGIN--------------------------------'), console['log']('Url:>', H), console['log']('请求参数:>', f), console['log']('响应:>', S['data'] || S['errMsg']), console['log']('---------------------------------请求\x20END--------------------------------');
            }
          });
        });
      },
      i = BASE_URL + '/market-multi-game-server/tiktokClient/initGame';
    this['init'] = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(H, f) {
        var W, a;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              tt['onShareAppMessage'](function (S) {
                return {
                  'templateId': A,
                  'query': '',
                  'success': function success() {
                    console['log']('分享成功');
                  },
                  'fail': function fail(g) {
                    console['log']('分享失败', g);
                  }
                };
              });
              _context3.next = 4;
              return k();
            case 4:
              j = _context3.sent;
              B(H);
              W = {
                'code': j,
                'gameId': x,
                'platformId': y,
                'channelId': F,
                'subChannelId': I,
                'aid': X,
                'traceId': w,
                'sys': U
              };
              _context3.next = 9;
              return q(i, W);
            case 9:
              a = _context3.sent;
              a['code'] === CodeStatus['SUCCESS'] && (K = a['data']['userId'], z = a['data']['unionId'], A = a['data']['shareTemplateId'], a['data'] = null), f(a);
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console['error']('[初始化游戏]异常:>', _context3.t0);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 13]]);
      }));
      return function (_x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }(), this['login'] = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(H) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              H({
                'code': CodeStatus['SUCCESS'],
                'message': '操作成功',
                'data': {
                  'code': j
                }
              });
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }(), this['pay'] = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(H, f) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              tt['checkSession']({
                'success': function success(W) {
                  try {
                    E(H, f);
                  } catch (a) {
                    console['error']('[支付拉起]异常:>', a);
                  }
                },
                'fail': function fail(W) {
                  tt['login']({
                    'success': function success(a) {
                      try {
                        E(H, f);
                      } catch (S) {
                        console['error']('[支付拉起]异常:>', S);
                      }
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }();
    var c = BASE_URL + '/market-multi-game-server/tiktokClient/uploadRoleInfo';
    this['uploadRoleInfo'] = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(H, f) {
        var W;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              H['gameId'] = x, H['platformId'] = y;
              _context6.next = 4;
              return q(c, H);
            case 4:
              W = _context6.sent;
              f(W);
              _context6.next = 11;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              console['error']('上报角色数据异常:>', _context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 8]]);
      }));
      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }();
    var M = BASE_URL + '/market-multi-game-server/tiktokClient/antidirt';
    this['antidirt'] = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(H, f) {
        var W, a;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              W = {
                'gameId': x,
                'platformId': y,
                'contents': H
              };
              _context7.next = 4;
              return q(M, W);
            case 4:
              a = _context7.sent;
              f(a);
              _context7.next = 11;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              console['error']('[内容安全检测]异常:>', _context7.t0);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 8]]);
      }));
      return function (_x11, _x12) {
        return _ref8.apply(this, arguments);
      };
    }(), this['createRewardedVideoAd'] = function (H, f) {
      var W = {
        'adUnitId': H['adUnitId']
      };
      H['multiton'] && (W['multiton'] = H['multiton'], W['multitonRewardMsg'] = H['multitonRewardMsg'], W['multitonRewardTimes'] = H['multitonRewardTimes']), H['progressTip'] && (W['progressTip'] = H['progressTip']), P = tt['createRewardedVideoAd'](W), P['onClose'](function (a) {
        o(AdType['REWARDED_VIDEO_AD'], t, AdActionType['FINISHED']), H['onClose'] && H['onClose'](a), P['destroy']();
      }), H['onError'] && P['onError'](function (a) {
        H['onError'] && H['onError'](a), P['destroy']();
      }), t = H['adUnitId'], f({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['showRewardedVideoAd'] = function () {
      P && (P['load'](), P['show']()['then'](function () {
        return o(AdType['REWARDED_VIDEO_AD'], t, AdActionType['SHOW']);
      })['catch'](function (H) {
        P['load']()['then'](function () {
          P['show']()['then'](function () {
            return o(AdType['REWARDED_VIDEO_AD'], t, AdActionType['SHOW']);
          });
        })['catch'](function (f) {
          return console['log']('激励视频\x20广告显示失败');
        });
      }));
    }, this['createContactButton'] = function (H, f) {
      var W = tt['createContactButton'](H);
      Q['set'](Q['size'], W), f({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': {
          'contactBtnNo': Q['size'] - 0x1
        }
      });
    }, this['contactBtnDestory'] = function (H) {
      var f = L(H);
      f['destory'](), Q['set'](H, null);
    }, this['contactBtnShow'] = function (H) {
      var f = L(H);
      f['show']();
    }, this['contactBtnHide'] = function (H) {
      var f = L(H);
      f['hide']();
    }, this['createGameRecorder'] = function (H, f) {
      h = tt['getGameRecorderManager'](), H['onStart'] && h['onStart'](H['onStart']), H['onResume'] && h['onResume'](H['onResume']), H['onPause'] && h['onPause'](H['onPause']), H['onStop'] && h['onStop'](H['onStop']), H['onError'] && h['onError'](H['onError']), H['onInterruptionBegin'] && h['onInterruptionBegin'](H['onInterruptionBegin']), H['onInterruptionEnd'] && h['onInterruptionEnd'](H['onInterruptionEnd']), f({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['gameRecorderStart'] = function (H) {
      C(), h['start'](H);
    }, this['gameRecorderPause'] = function () {
      C(), h['pause']();
    }, this['gameRecorderResume'] = function () {
      C(), h['resume']();
    }, this['gameRecorderStop'] = function () {
      C(), h['stop']();
    }, this['shareAppMessage'] = function (H, f) {
      tt['shareAppMessage'](_extends({}, H, {
        'templateId': A,
        'success': function success() {
          f({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        },
        'fail': function fail(W) {
          console['log']('[分享失败]:>', W), f({
            'code': CodeStatus['FAIL'],
            'message': '操作失败',
            'data': null
          });
        }
      }));
    }, this['addShortcut'] = function (H) {
      tt['addShortcut']({
        'complete': H
      });
    };
  }
  EyouClientTiktok['getIns'] = function getIns() {
    return !this['ins'] && (this['ins'] = new EyouClientTiktok()), this['ins'];
  };
  return EyouClientTiktok;
}();
exports["default"] = EyouClientTiktok;
var CodeStatus = function CodeStatus() {};
CodeStatus['SUCCESS'] = 0x0;
CodeStatus['FAIL'] = -0x1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc2RrXFxFeW91Q2xpZW50VGlrdG9rLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiQkFTRV9VUkwiLCJFeW91Q2xpZW50VGlrdG9rIiwieCIsInkiLCJGIiwiSSIsIlgiLCJ3IiwiVSIsImoiLCJLIiwieiIsIkEiLCJ0IiwiUCIsIlEiLCJNYXAiLCJoIiwiRSIsIkgiLCJmIiwiSiIsIlciLCJ0dCIsIkciLCJaIiwiVCIsInN1Y2Nlc3MiLCJWIiwiX3JlZiIsIl9jYWxsZWUiLCJhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInEiLCJDb2RlU3RhdHVzIiwidDAiLCJjb25zb2xlIiwiX3giLCJfeDIiLCJkIiwiX3JlZjIiLCJfY2FsbGVlMiIsIlMiLCJnIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3gzIiwiayIsIl9yZWYzIiwiY29kZSIsIkIiLCJfYSRGIiwicCIsIm8iLCJMIiwiQyIsIkpTT04iLCJfcmVmNCIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmFpbCIsIl94NCIsIl94NSIsIl9yZWY1IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfeDYiLCJfcmVmNiIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiX3g3IiwiX3g4IiwiYyIsIl9yZWY3IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJfeDkiLCJfeDEwIiwiTSIsIl9yZWY4IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJfeDExIiwiX3gxMiIsIkFkVHlwZSIsIkFkQWN0aW9uVHlwZSIsIl9leHRlbmRzIiwiZ2V0SW5zIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJ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QUFBLEVBQWtCO0lBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUMsSUFBSTVGLGdCQUFnQixFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQUMsQ0FBQztFQUFBLE9BQUFBLGdCQUFBO0FBQUE7QUFBQXBKLE9BQUEsY0FBQW9KLGdCQUFBO0FBQUEsSUFBT2tDLFVBQVUsWUFBQUEsV0FBQTtBQUFWQSxVQUFVLENBQVMsU0FBUyxJQUFFLEdBQUc7QUFBakNBLFVBQVUsQ0FBZ0MsTUFBTSxJQUFFLENBQUMsR0FBRztBQUFBLElBQVF1RCxNQUFNLFlBQUFBLE9BQUE7QUFBTkEsTUFBTSxDQUFTLG1CQUFtQixJQUFFLEdBQUc7QUFBdkNBLE1BQU0sQ0FBMEMsV0FBVyxJQUFFLEdBQUc7QUFBQSxJQUFRQyxZQUFZLFlBQUFBLGFBQUE7QUFBWkEsWUFBWSxDQUFTLE1BQU0sSUFBRSxHQUFHO0FBQWhDQSxZQUFZLENBQTZCLFVBQVUsSUFBRSxHQUFHO0FBQUFHLE1BQUEsQ0FBQWpQLE9BQUEsR0FBQUEsT0FBQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkw9J2h0dHBzOi8vZ2FtZXMuaG5kaWJlaS5jb20nO2V4cG9ydCBkZWZhdWx0IGNsYXNzIEV5b3VDbGllbnRUaWt0b2t7Y29uc3RydWN0b3IoKXtsZXQgeD1udWxsLHk9MHgyLEY9bnVsbCxJPW51bGwsWD0nLTEnLHc9Jy0xJyxVPSc0JyxqPW51bGwsSz1udWxsLHo9bnVsbCxBPW51bGwsdD1udWxsLFA9bnVsbDtjb25zdCBRPW5ldyBNYXAoKTtsZXQgaD1udWxsO2NvbnN0IEU9KEgsZik9PntIWydnYW1lSWQnXT14LChIWydwbGF0Zm9ybUlkJ109eSxIWydzeXMnXT1VKSxKKEgpWyd0aGVuJ10oVz0+e2lmKFdbJ3BheVR5cGUnXT09MHg0KXR0WydwcmV2aWV3SW1hZ2UnXSh7J3VybHMnOltXWydwYXlVcmwnXV0sJ3Nob3dtZW51JzohIVtdfSk7ZWxzZXtpZihXWydwYXlUeXBlJ109PTB4OClXWydiYWxhbmNlJ10+MHgwP0coJ+WFheWAvOaPkOekuicsJ+i0puaIt+S9meminTonK1dbJ2JhbGFuY2UnXSsn5YWDLFxceDIw6L+Y6ZyA5YWF5YC8OicrV1snbmVlZFBheSddKyflhYMnLCgpPT5aKFcsZikpOlooVyxmKTtlbHNlIHRocm93IG5ldyBFcnJvcign6Z2e5rOV5pSv5LuY57G75Z6LJyk7fX0pO30sWj0oSCxmKT0+e2lmKEhbJ25lZWRQYXknXT09MHgwKXtUKEgsZik7cmV0dXJuO310dFsncmVxdWVzdEdhbWVQYXltZW50J10oeydtb2RlJzonZ2FtZScsJ2Vudic6MHgwLCdjdXJyZW5jeVR5cGUnOidDTlknLCdwbGF0Zm9ybSc6J2FuZHJvaWQnLCdidXlRdWFudGl0eSc6SFsnbmVlZFBheSddKkhbJ3JhdGUnXSwnem9uZUlkJzpIWyd6b25lSWQnXSwnY3VzdG9tSWQnOkhbJ29yZGVySWQnXSwnZXh0cmFJbmZvJzpIWydvcmRlcklkJ10sJ3N1Y2Nlc3MnOlc9PntUKEgsZik7fX0pO30sVj1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci90aWt0b2tDbGllbnQvZGVkdWN0JyxUPWFzeW5jKEgsZik9Pnt0cnl7Y29uc3QgVz17J29yZGVySWQnOkhbJ29yZGVySWQnXSwnZ2FtZUlkJzp4LCdwbGF0Zm9ybUlkJzp5LCd1c2VySWQnOkhbJ3VzZXJJZCddfTtsZXQgYT1hd2FpdCBxKFYsVyk7YVsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddJiZmKGEpO31jYXRjaChTKXtjb25zb2xlWydlcnJvciddKCdb5omj5qy+5aSx6LSlXeW8guW4uDo+JyxTKTt9fSxkPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL3Rpa3Rva0NsaWVudC9wdWxsUGF5JyxKPWFzeW5jIEg9Pntjb25zdCBmPTB4MztsZXQgVz0weDAsYT0hW10sUz0hW107d2hpbGUoVzxmJiYhYSl7dHJ5e2NvbnN0IGc9YXdhaXQgcShkLEgpO2lmKGdbJ2NvZGUnXT09PUNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSlyZXR1cm4gZ1snZGF0YSddO2Vsc2UhUyYmKEcoJ+aUr+S7mOaLiei1t+Wksei0pScsZ1snbWVzc2FnZSddKSxTPSEhW10pO31jYXRjaChZKXshUyYmKEcoJ+aUr+S7mOaLiei1t+Wksei0pScsJ+e9kee7nOi2heaXticpLFM9ISFbXSk7fVcrKzt9dGhyb3cgbmV3IEVycm9yKCfmlK/ku5jmi4notbflpLHotKUnKTt9LGs9KCk9PntyZXR1cm4gbmV3IFByb21pc2UoKEgsZik9Pnt0dFsnbG9naW4nXSh7J2ZvcmNlJzohIVtdLCdzdWNjZXNzJzooe2NvZGU6V30pPT57Vz8oY29uc29sZVsnbG9nJ10oJ2NvZGU6PicsVyksSChXKSk6ZihuZXcgRXJyb3IoJ+iOt+WPlmNvZGXlpLHotKUnKSk7fSwnZmFpbCc6Zn0pO30pO30sQj1IPT57eD1IO2NvbnN0IGY9dHRbJ2dldFN5c3RlbUluZm9TeW5jJ10oKTtVPWZbJ3BsYXRmb3JtJ109PT0nYW5kcm9pZCc/JzQnOmZbJ3BsYXRmb3JtJ109PT0naW9zJz8nNSc6JzYnO2NvbnN0IFc9dHRbJ2dldExhdW5jaE9wdGlvbnNTeW5jJ10oKVsncXVlcnknXTtGPVdbJ2NoYW5uZWwnXSxJPVdbJ3N1Yl9jaGFubmVsJ107Y29uc3QgYT17JzEwOTE5JzpbJ3Byb21vdGlvbmlkJywnY2xpY2tpZCddfTtpZihhWydoYXNPd25Qcm9wZXJ0eSddKEYpKXtjb25zdCBbUyxnXT1hW0ZdO1g9V1tTXSx3PVdbZ107fWVsc2UgRj0nMTA5MDYnLEk9JycreCt5K0YrVSsnMCc7fSxwPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL3Rpa3Rva0NsaWVudC9hZEFjdGlvbicsbz0oSCxmLFcpPT57bGV0IGE9eydnYW1lSWQnOngsJ3BsYXRmb3JtSWQnOnksJ2NoYW5uZWxJZCc6Riwnc3ViQ2hhbm5lbElkJzpJLCdhaWQnOlgsJ3RyYWNlSWQnOncsJ3N5cyc6VSwndXNlcklkJzpLLCdhZFR5cGUnOkgsJ2FkVW5pdElkJzpmLCdhZEFjdGlvblR5cGUnOld9O3EocCxhKVsnY2F0Y2gnXShTPT57Y29uc29sZVsnbG9nJ10oJ+WPkemAgeW5v+WRiuihjOS4uuWksei0pTo+JyxTKTt9KTt9LEw9SD0+e2xldCBmPVFbJ2dldCddKEgpO2lmKCFmKXRocm93IG5ldyBFcnJvcign5pyq5Yib5bu657yW5Y+35Li6JytIKyfnmoTlrqLmnI3mjInpkq4nKTtyZXR1cm4gZjt9LEM9KCk9PntpZighaCl0aHJvdyBuZXcgRXJyb3IoJ+acquWIm+W7uuW9leWxj+euoeeQhuWZqCcpO30sRz0oSCxmLFcsYSk9Pnt0dFsnc2hvd01vZGFsJ10oeyd0aXRsZSc6SCwnY29udGVudCc6Ziwnc3VjY2Vzcyc6ZnVuY3Rpb24oUyl7aWYoU1snY29uZmlybSddJiZXKVcoKTtlbHNlIFNbJ2NhbmNlbCddJiZhJiZhKCk7fX0pO30scT0oSCxmKT0+e3JldHVybiBuZXcgUHJvbWlzZSgoVyxhKT0+e3R0WydyZXF1ZXN0J10oeyd1cmwnOkgsJ21ldGhvZCc6J1BPU1QnLCdoZWFkZXInOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J30sJ2RhdGEnOkpTT05bJ3N0cmluZ2lmeSddKGYpLCdmYWlsJzphLCdzdWNjZXNzJzpmdW5jdGlvbihTKXtXKFNbJ2RhdGEnXSk7fSwnY29tcGxldGUnOmZ1bmN0aW9uKFMpe2NvbnNvbGVbJ2xvZyddKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3or7fmsYJcXHgyMEJFR0lOLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSxjb25zb2xlWydsb2cnXSgnVXJsOj4nLEgpLGNvbnNvbGVbJ2xvZyddKCfor7fmsYLlj4LmlbA6PicsZiksY29uc29sZVsnbG9nJ10oJ+WTjeW6lDo+JyxTWydkYXRhJ118fFNbJ2Vyck1zZyddKSxjb25zb2xlWydsb2cnXSgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6K+35rGCXFx4MjBFTkQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO319KTt9KTt9LGk9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIvdGlrdG9rQ2xpZW50L2luaXRHYW1lJzt0aGlzWydpbml0J109YXN5bmMoSCxmKT0+e3RyeXt0dFsnb25TaGFyZUFwcE1lc3NhZ2UnXShTPT57cmV0dXJueyd0ZW1wbGF0ZUlkJzpBLCdxdWVyeSc6JycsJ3N1Y2Nlc3MnOigpPT57Y29uc29sZVsnbG9nJ10oJ+WIhuS6q+aIkOWKnycpO30sJ2ZhaWwnOmc9Pntjb25zb2xlWydsb2cnXSgn5YiG5Lqr5aSx6LSlJyxnKTt9fTt9KSxqPWF3YWl0IGsoKSxCKEgpO2NvbnN0IFc9eydjb2RlJzpqLCdnYW1lSWQnOngsJ3BsYXRmb3JtSWQnOnksJ2NoYW5uZWxJZCc6Riwnc3ViQ2hhbm5lbElkJzpJLCdhaWQnOlgsJ3RyYWNlSWQnOncsJ3N5cyc6VX0sYT1hd2FpdCBxKGksVyk7YVsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddJiYoSz1hWydkYXRhJ11bJ3VzZXJJZCddLHo9YVsnZGF0YSddWyd1bmlvbklkJ10sQT1hWydkYXRhJ11bJ3NoYXJlVGVtcGxhdGVJZCddLGFbJ2RhdGEnXT1udWxsKSxmKGEpO31jYXRjaChTKXtjb25zb2xlWydlcnJvciddKCdb5Yid5aeL5YyW5ri45oiPXeW8guW4uDo+JyxTKTt9fSx0aGlzWydsb2dpbiddPWFzeW5jIEg9PntIKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6eydjb2RlJzpqfX0pO30sdGhpc1sncGF5J109YXN5bmMoSCxmKT0+e3R0WydjaGVja1Nlc3Npb24nXSh7J3N1Y2Nlc3MnOlc9Pnt0cnl7RShILGYpO31jYXRjaChhKXtjb25zb2xlWydlcnJvciddKCdb5pSv5LuY5ouJ6LW3XeW8guW4uDo+JyxhKTt9fSwnZmFpbCc6Vz0+e3R0Wydsb2dpbiddKHsnc3VjY2Vzcyc6YT0+e3RyeXtFKEgsZik7fWNhdGNoKFMpe2NvbnNvbGVbJ2Vycm9yJ10oJ1vmlK/ku5jmi4notbdd5byC5bi4Oj4nLFMpO319fSk7fX0pO307Y29uc3QgYz1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci90aWt0b2tDbGllbnQvdXBsb2FkUm9sZUluZm8nO3RoaXNbJ3VwbG9hZFJvbGVJbmZvJ109YXN5bmMoSCxmKT0+e3RyeXtIWydnYW1lSWQnXT14LEhbJ3BsYXRmb3JtSWQnXT15O2NvbnN0IFc9YXdhaXQgcShjLEgpO2YoVyk7fWNhdGNoKGEpe2NvbnNvbGVbJ2Vycm9yJ10oJ+S4iuaKpeinkuiJsuaVsOaNruW8guW4uDo+JyxhKTt9fTtjb25zdCBNPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL3Rpa3Rva0NsaWVudC9hbnRpZGlydCc7dGhpc1snYW50aWRpcnQnXT1hc3luYyhILGYpPT57dHJ5e2xldCBXPXsnZ2FtZUlkJzp4LCdwbGF0Zm9ybUlkJzp5LCdjb250ZW50cyc6SH07Y29uc3QgYT1hd2FpdCBxKE0sVyk7ZihhKTt9Y2F0Y2goUyl7Y29uc29sZVsnZXJyb3InXSgnW+WGheWuueWuieWFqOajgOa1i13lvILluLg6PicsUyk7fX0sdGhpc1snY3JlYXRlUmV3YXJkZWRWaWRlb0FkJ109KEgsZik9PntsZXQgVz17J2FkVW5pdElkJzpIWydhZFVuaXRJZCddfTtIWydtdWx0aXRvbiddJiYoV1snbXVsdGl0b24nXT1IWydtdWx0aXRvbiddLFdbJ211bHRpdG9uUmV3YXJkTXNnJ109SFsnbXVsdGl0b25SZXdhcmRNc2cnXSxXWydtdWx0aXRvblJld2FyZFRpbWVzJ109SFsnbXVsdGl0b25SZXdhcmRUaW1lcyddKSxIWydwcm9ncmVzc1RpcCddJiYoV1sncHJvZ3Jlc3NUaXAnXT1IWydwcm9ncmVzc1RpcCddKSxQPXR0WydjcmVhdGVSZXdhcmRlZFZpZGVvQWQnXShXKSxQWydvbkNsb3NlJ10oYT0+e28oQWRUeXBlWydSRVdBUkRFRF9WSURFT19BRCddLHQsQWRBY3Rpb25UeXBlWydGSU5JU0hFRCddKSxIWydvbkNsb3NlJ10mJkhbJ29uQ2xvc2UnXShhKSxQWydkZXN0cm95J10oKTt9KSxIWydvbkVycm9yJ10mJlBbJ29uRXJyb3InXShhPT57SFsnb25FcnJvciddJiZIWydvbkVycm9yJ10oYSksUFsnZGVzdHJveSddKCk7fSksdD1IWydhZFVuaXRJZCddLGYoeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSx0aGlzWydzaG93UmV3YXJkZWRWaWRlb0FkJ109KCk9PntQJiYoUFsnbG9hZCddKCksUFsnc2hvdyddKClbJ3RoZW4nXSgoKT0+byhBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10sdCxBZEFjdGlvblR5cGVbJ1NIT1cnXSkpWydjYXRjaCddKEg9PntQWydsb2FkJ10oKVsndGhlbiddKCgpPT57UFsnc2hvdyddKClbJ3RoZW4nXSgoKT0+byhBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10sdCxBZEFjdGlvblR5cGVbJ1NIT1cnXSkpO30pWydjYXRjaCddKGY9PmNvbnNvbGVbJ2xvZyddKCfmv4DlirHop4bpopFcXHgyMOW5v+WRiuaYvuekuuWksei0pScpKTt9KSk7fSx0aGlzWydjcmVhdGVDb250YWN0QnV0dG9uJ109KEgsZik9Pntjb25zdCBXPXR0WydjcmVhdGVDb250YWN0QnV0dG9uJ10oSCk7UVsnc2V0J10oUVsnc2l6ZSddLFcpLGYoeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzp7J2NvbnRhY3RCdG5Obyc6UVsnc2l6ZSddLTB4MX19KTt9LHRoaXNbJ2NvbnRhY3RCdG5EZXN0b3J5J109SD0+e2xldCBmPUwoSCk7ZlsnZGVzdG9yeSddKCksUVsnc2V0J10oSCxudWxsKTt9LHRoaXNbJ2NvbnRhY3RCdG5TaG93J109SD0+e2xldCBmPUwoSCk7Zlsnc2hvdyddKCk7fSx0aGlzWydjb250YWN0QnRuSGlkZSddPUg9PntsZXQgZj1MKEgpO2ZbJ2hpZGUnXSgpO30sdGhpc1snY3JlYXRlR2FtZVJlY29yZGVyJ109KEgsZik9PntoPXR0WydnZXRHYW1lUmVjb3JkZXJNYW5hZ2VyJ10oKSxIWydvblN0YXJ0J10mJmhbJ29uU3RhcnQnXShIWydvblN0YXJ0J10pLEhbJ29uUmVzdW1lJ10mJmhbJ29uUmVzdW1lJ10oSFsnb25SZXN1bWUnXSksSFsnb25QYXVzZSddJiZoWydvblBhdXNlJ10oSFsnb25QYXVzZSddKSxIWydvblN0b3AnXSYmaFsnb25TdG9wJ10oSFsnb25TdG9wJ10pLEhbJ29uRXJyb3InXSYmaFsnb25FcnJvciddKEhbJ29uRXJyb3InXSksSFsnb25JbnRlcnJ1cHRpb25CZWdpbiddJiZoWydvbkludGVycnVwdGlvbkJlZ2luJ10oSFsnb25JbnRlcnJ1cHRpb25CZWdpbiddKSxIWydvbkludGVycnVwdGlvbkVuZCddJiZoWydvbkludGVycnVwdGlvbkVuZCddKEhbJ29uSW50ZXJydXB0aW9uRW5kJ10pLGYoeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSx0aGlzWydnYW1lUmVjb3JkZXJTdGFydCddPUg9PntDKCksaFsnc3RhcnQnXShIKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclBhdXNlJ109KCk9PntDKCksaFsncGF1c2UnXSgpO30sdGhpc1snZ2FtZVJlY29yZGVyUmVzdW1lJ109KCk9PntDKCksaFsncmVzdW1lJ10oKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclN0b3AnXT0oKT0+e0MoKSxoWydzdG9wJ10oKTt9LHRoaXNbJ3NoYXJlQXBwTWVzc2FnZSddPShILGYpPT57dHRbJ3NoYXJlQXBwTWVzc2FnZSddKHsuLi5ILCd0ZW1wbGF0ZUlkJzpBLCdzdWNjZXNzJzooKT0+e2Yoeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSwnZmFpbCc6Vz0+e2NvbnNvbGVbJ2xvZyddKCdb5YiG5Lqr5aSx6LSlXTo+JyxXKSxmKHsnY29kZSc6Q29kZVN0YXR1c1snRkFJTCddLCdtZXNzYWdlJzon5pON5L2c5aSx6LSlJywnZGF0YSc6bnVsbH0pO319KTt9LHRoaXNbJ2FkZFNob3J0Y3V0J109SD0+e3R0WydhZGRTaG9ydGN1dCddKHsnY29tcGxldGUnOkh9KTt9O31zdGF0aWNbJ2dldElucyddKCl7cmV0dXJuIXRoaXNbJ2lucyddJiYodGhpc1snaW5zJ109bmV3IEV5b3VDbGllbnRUaWt0b2soKSksdGhpc1snaW5zJ107fX1jbGFzcyBDb2RlU3RhdHVze3N0YXRpYyBbJ1NVQ0NFU1MnXT0weDA7c3RhdGljIFsnRkFJTCddPS0weDE7fWNsYXNzIEFkVHlwZXtzdGF0aWMgWydSRVdBUkRFRF9WSURFT19BRCddPTB4MTtzdGF0aWMgWydCQU5ORVJfQUQnXT0weDI7fWNsYXNzIEFkQWN0aW9uVHlwZXtzdGF0aWMgWydTSE9XJ109MHgxO3N0YXRpYyBbJ0ZJTklTSEVEJ109MHgyO30iXX0=