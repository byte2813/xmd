"use strict";
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