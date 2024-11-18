
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/sdk/EyouClientKs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4113FlKipGP5suXrbEeDsg', 'EyouClientKs');
// Scripts/sdk/EyouClientKs.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var BASE_URL = 'https://games.hndibei.com';
var EyouClientKs = /*#__PURE__*/function () {
  function EyouClientKs() {
    console['log']('EyouClientKs\x20实例已创建');
    var Q = null,
      e = 0x9,
      I = null,
      Y = null,
      U = '-1',
      s = '-1',
      b = '4',
      j = null,
      E = null,
      H = null,
      w = null,
      X = null,
      B = null;
    var o = new Map();
    var p = null;
    var m = function m() {
        return new Promise(function (q, l) {
          ks['login']({
            'force': !![],
            'success': function success(_ref) {
              var G = _ref.code;
              G ? (console['log']('code:>', G), q(G)) : l(new Error('获取code失败'));
            },
            'fail': l
          });
        });
      },
      O = function O(q) {
        Q = q;
        var l = ks['getSystemInfoSync']();
        b = l['platform'] === 'android' ? '4' : l['platform'] === 'ios' ? '5' : '6';
        var G = ks['getLaunchOptionsSync']()['query'];
        G && (I = G['channel'], Y = G['sub_channel']);
        var V = {
          '10913': ['unit_id', 'callback']
        };
        if (V['hasOwnProperty'](I)) {
          var _V$I = V[I],
            R = _V$I[0],
            z = _V$I[1];
          U = G[R], s = G[z];
        } else I = '10906', Y = '' + Q + e + I + b + '0';
      },
      n = function n(q, l) {
        q['gameId'] = Q, (q['platformId'] = e, q['sys'] = b), T(q)['then'](function (G) {
          console['log']('拉起支付返参:', res);
          if (G['payType'] == 0xc) G['balance'] > 0x0 ? u('充值提示', '账户余额:' + G['balance'] + '元,\x20还需充值:' + G['needPay'] + '元', function () {
            return J(G);
          }) : J(G, l);else {
            if (G['payType'] == 0x2 || G['payType'] == 0xa) customerPullPay(G, l);else {
              if (G['payType'] == 0x4) ks['showModal']({
                'title': '充值提示',
                'content': '即将展示充值二维码,\x20请扫描二维码完成支付',
                'success': function success(V) {
                  V['confirm'] && ks['previewImage']({
                    'urls': [G['payUrl']]
                  });
                }
              });else throw new Error('非法支付类型');
            }
          }
        });
      },
      J = function J(q, l) {
        if (q['needPay'] == 0x0) {
          M(q, l);
          return;
        }
        var G = {};
        G['success'] = function (R) {
          M(q, l);
        }, G['fail'] = function (R) {
          u('快手支付失败', R);
        };
        var V = ks['getSystemInfoSync']();
        G['zone_id'] = '1', G['os'] = q['os'], G['currency_type'] = 'CNY', G['buy_quantity'] = q['needPay'] * q['rate'], G['third_party_trade_no'] = q['orderId'], G['sign'] = q['sign'], V['platform'] === 'ios' && (G['product_type'] = 0x1), ks['requestGamePayment'](G);
      },
      y = BASE_URL + '/market-multi-game-server/kuaiShouClient/pullPay',
      T = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(q) {
          var l, G, V, R, z;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                l = 0x3;
                G = 0x0, V = ![], R = ![];
              case 2:
                if (!(G < l && !V)) {
                  _context.next = 20;
                  break;
                }
                _context.prev = 3;
                _context.next = 6;
                return c(y, q);
              case 6:
                z = _context.sent;
                if (!(z['code'] === CodeStatus['SUCCESS'])) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", z['data']);
              case 11:
                !R && (u('支付拉起失败', z['message']), R = !![]);
              case 12:
                _context.next = 17;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                !R && (u('支付拉起失败', '网络超时'), R = !![]);
              case 17:
                G++;
                _context.next = 2;
                break;
              case 20:
                throw new Error('支付拉起失败');
              case 21:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[3, 14]]);
        }));
        return function T(_x) {
          return _ref2.apply(this, arguments);
        };
      }(),
      u = function u(q, l, G, V) {
        ks['showModal']({
          'title': q,
          'content': l,
          'success': function success(R) {
            if (R['confirm'] && G) G();else R['cancel'] && V && V();
          }
        });
      },
      x = BASE_URL + '/market-multi-game-server/kuaiShouClient/deduct',
      M = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(q, l) {
          var G, V;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                G = {
                  'orderId': q['orderId'],
                  'gameId': Q,
                  'platformId': e,
                  'userId': q['userId']
                };
                _context2.next = 4;
                return c(x, G);
              case 4:
                V = _context2.sent;
                V['code'] === CodeStatus['SUCCESS'] && l(V);
                _context2.next = 11;
                break;
              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console['error']('[扣款失败]异常:>', _context2.t0);
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 8]]);
        }));
        return function M(_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }(),
      N = BASE_URL + '/market-multi-game-server/kuaiShouClient/adAction',
      v = function v(q, l, G) {
        var V = {
          'gameId': Q,
          'platformId': e,
          'channelId': I,
          'subChannelId': Y,
          'aid': U,
          'traceId': s,
          'sys': b,
          'userId': E,
          'adType': q,
          'adUnitId': l,
          'adActionType': G
        };
        c(N, V)['catch'](function (R) {
          console['log']('发送广告行为失败:>', R);
        });
      },
      C = function C() {
        if (!p) throw new Error('未创建录屏管理器');
      },
      c = function c(q, l) {
        return new Promise(function (G, V) {
          ks['request']({
            'url': q,
            'method': 'POST',
            'header': {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            'data': JSON['stringify'](l),
            'fail': V,
            'success': function success(R) {
              G(R['data']);
            },
            'complete': function complete(R) {
              console['log']('---------------------------------请求\x20BEGIN--------------------------------'), console['log']('Url:>', q), console['log']('请求参数:>', l);
              var z = R && (R['data'] || R['errMsg']) ? R['data'] || R['errMsg'] : 'No\x20response\x20data';
              console['log']('响应:>', z), console['log']('---------------------------------请求\x20END--------------------------------');
            }
          });
        });
      },
      P = BASE_URL + '/market-multi-game-server/kuaiShouClient/initGame';
    this['init'] = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(q, l) {
        var G, V;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              ks['onShareAppMessage'](function (R) {
                return {
                  'templateId': w,
                  'query': '',
                  'success': function success() {
                    console['log']('分享成功');
                  },
                  'fail': function fail(z) {
                    console['log']('分享失败', z);
                  }
                };
              });
              _context3.next = 4;
              return m();
            case 4:
              j = _context3.sent;
              O(q);
              G = {
                'code': j,
                'gameId': Q,
                'platformId': e,
                'channelId': I,
                'subChannelId': Y,
                'aid': U,
                'traceId': s,
                'sys': b
              };
              _context3.next = 9;
              return c(P, G);
            case 9:
              V = _context3.sent;
              V['code'] === CodeStatus['SUCCESS'] && (E = V['data']['userId'], H = V['data']['unionId'], w = V['data']['shareTemplateId'], V['data'] = null), l(j);
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
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(q) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              q({
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
    }();
    var d = BASE_URL + '/market-multi-game-server/kuaiShouClient/uploadRoleInfo';
    this['uploadRoleInfo'] = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(q, l) {
        var G;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              q['gameId'] = Q, q['platformId'] = e;
              _context5.next = 4;
              return c(d, q);
            case 4:
              G = _context5.sent;
              l(G);
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console['error']('上报角色数据异常:>', _context5.t0);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 8]]);
      }));
      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }(), this['pay'] = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(q, l) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              try {
                n(q, l);
              } catch (G) {
                console['error']('[支付拉起]异常:>', G);
              }
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }();
    var t = BASE_URL + '/market-multi-game-server/kuaiShouClient/antidirt';
    this['antidirt'] = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(q, l) {
        var G, V;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              G = {
                'gameId': Q,
                'platformId': e,
                'contents': q
              };
              _context7.next = 4;
              return c(t, G);
            case 4:
              V = _context7.sent;
              l(V);
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
    }(), this['createRewardedVideoAd'] = function (q, l) {
      var G = {
        'adUnitId': q['adUnitId']
      };
      q['multiton'] && (G['multiton'] = q['multiton'], G['multitonRewardMsg'] = q['multitonRewardMsg'], G['multitonRewardTimes'] = q['multitonRewardTimes']), q['progressTip'] && (G['progressTip'] = q['progressTip']), B = ks['createRewardedVideoAd'](G), B['onClose'](function (V) {
        V && V['isEnded'] && (v(AdType['REWARDED_VIDEO_AD'], X, AdActionType['FINISHED']), console['log']('正常播放结束，可以下发游戏奖励')), q['onClose'] && q['onClose'](V), B['destroy']();
      }), q['onError'] && B['onError'](function (V) {
        q['onError'] && q['onError'](V), B['destroy']();
      }), X = q['adUnitId'], l({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['showRewardedVideoAd'] = function () {
      B && (B['load'](), B['show']()['then'](function () {
        return v(AdType['REWARDED_VIDEO_AD'], X, AdActionType['SHOW']);
      })['catch'](function (q) {
        B['load']()['then'](function () {
          B['show']()['then'](function () {
            return v(AdType['REWARDED_VIDEO_AD'], X, AdActionType['SHOW']);
          });
        })['catch'](function (l) {
          return console['log']('激励视频\x20广告显示失败');
        });
      }));
    }, this['createGameRecorder'] = function (q, l) {
      p = ks['getGameRecorder'](), q['onStart'] && p['on']('start', q['onStart']), q['onResume'] && p['on']('resume', q['onResume']), q['onPause'] && p['on']('pause', q['onPause']), q['onStop'] && p['on']('stop', q['onStop']), q['onError'] && p['on']('error', q['onError']), q['onAbort'] && p['on']('abort', q['onAbort']), l({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['gameRecorderStart'] = function (q) {
      C(), p['start'](q);
    }, this['gameRecorderPause'] = function () {
      C(), p['pause']();
    }, this['gameRecorderResume'] = function () {
      C(), p['resume']();
    }, this['gameRecorderStop'] = function () {
      C(), console['log']('触发停止录屏'), p['stop']();
    }, this['publishVideo'] = function (q) {
      C(), p['publishVideo']({
        'video': q['videoID'],
        'callback': function callback(l) {
          if (l != null && l != undefined) {
            console['log']('分享录屏失败:\x20', l);
            return;
          }
          console['log']('分享录屏成功');
        }
      });
    }, this['shareAppMessage'] = function (q, l) {
      ks['shareAppMessage'](_extends({}, q, {
        'templateId': w,
        'success': function success() {
          l({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        },
        'fail': function fail(G) {
          console['log']('[分享失败]:>', G), l({
            'code': CodeStatus['FAIL'],
            'message': '操作失败',
            'data': null
          });
        }
      }));
    }, this['addShortcut'] = function (q) {
      ks['addShortcut']({
        'complete': q
      });
    }, this['checkShortcut'] = function (q) {
      ks['checkShortcut']({
        'complete': q
      });
    }, this['addCommonUse'] = function (q) {
      ks['addCommonUse']({
        'complete': q
      });
    }, this['checkCommonUse'] = function (q) {
      ks['checkCommonUse']({
        'complete': q
      });
    };
  }
  EyouClientKs['getIns'] = function getIns() {
    return !this['ins'] && (console['log']('初始化'), this['ins'] = new EyouClientKs()), this['ins'];
  };
  return EyouClientKs;
}();
exports["default"] = EyouClientKs;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc2RrXFxFeW91Q2xpZW50S3MuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJCQVNFX1VSTCIsIkV5b3VDbGllbnRLcyIsImNvbnNvbGUiLCJRIiwiZSIsIkkiLCJZIiwiVSIsInMiLCJiIiwiaiIsIkUiLCJIIiwidyIsIlgiLCJCIiwibyIsIk1hcCIsInAiLCJtIiwicSIsImwiLCJrcyIsInN1Y2Nlc3MiLCJfcmVmIiwiRyIsImNvZGUiLCJPIiwiViIsIl9WJEkiLCJSIiwieiIsIm4iLCJUIiwicmVzIiwidSIsIkoiLCJjdXN0b21lclB1bGxQYXkiLCJNIiwieSIsIl9yZWYyIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjIiwiQ29kZVN0YXR1cyIsInQwIiwiX3giLCJ4IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MiIsIl94MyIsIk4iLCJ2IiwiQyIsIkpTT04iLCJQIiwiX3JlZjQiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZhaWwiLCJfeDQiLCJfeDUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g2IiwiZCIsIl9yZWY2IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfeDciLCJfeDgiLCJfcmVmNyIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX3g5IiwiX3gxMCIsInQiLCJfcmVmOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiX3gxMSIsIl94MTIiLCJBZFR5cGUiLCJBZEFjdGlvblR5cGUiLCJjYWxsYmFjayIsIl9leHRlbmRzIiwiZ2V0SW5zIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJ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QSxDQUFDLEVBQUU7TUFBQ0UsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQUMsVUFBVSxFQUFDRjtNQUFDLENBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBQyxVQUFBQSxDQUFDLEVBQUU7TUFBQ0UsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFBQyxVQUFVLEVBQUNGO01BQUMsQ0FBQyxDQUFDO0lBQUMsQ0FBQztFQUFDO0VBQUNuQixZQUFBLENBQU8sUUFBUSxJQUFmLFNBQUErRixPQUFBLEVBQWtCO0lBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBRzlGLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUMsSUFBSUQsWUFBWSxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQUMsQ0FBQztFQUFBLE9BQUFBLFlBQUE7QUFBQTtBQUFBcEosT0FBQSxjQUFBb0osWUFBQTtBQUFBLElBQU80QyxVQUFVLFlBQUFBLFdBQUE7QUFBVkEsVUFBVSxDQUFTLFNBQVMsSUFBRSxHQUFHO0FBQWpDQSxVQUFVLENBQWdDLE1BQU0sSUFBRSxDQUFDLEdBQUc7QUFBQSxJQUFRK0MsTUFBTSxZQUFBQSxPQUFBO0FBQU5BLE1BQU0sQ0FBUyxtQkFBbUIsSUFBRSxHQUFHO0FBQXZDQSxNQUFNLENBQTBDLFdBQVcsSUFBRSxHQUFHO0FBQUEsSUFBUUMsWUFBWSxZQUFBQSxhQUFBO0FBQVpBLFlBQVksQ0FBUyxNQUFNLElBQUUsR0FBRztBQUFoQ0EsWUFBWSxDQUE2QixVQUFVLElBQUUsR0FBRztBQUFBSSxNQUFBLENBQUFwUCxPQUFBLEdBQUFBLE9BQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMPSdodHRwczovL2dhbWVzLmhuZGliZWkuY29tJztleHBvcnQgZGVmYXVsdCBjbGFzcyBFeW91Q2xpZW50S3N7Y29uc3RydWN0b3IoKXtjb25zb2xlWydsb2cnXSgnRXlvdUNsaWVudEtzXFx4MjDlrp7kvovlt7LliJvlu7onKTtsZXQgUT1udWxsLGU9MHg5LEk9bnVsbCxZPW51bGwsVT0nLTEnLHM9Jy0xJyxiPSc0JyxqPW51bGwsRT1udWxsLEg9bnVsbCx3PW51bGwsWD1udWxsLEI9bnVsbDtjb25zdCBvPW5ldyBNYXAoKTtsZXQgcD1udWxsO2NvbnN0IG09KCk9PntyZXR1cm4gbmV3IFByb21pc2UoKHEsbCk9Pntrc1snbG9naW4nXSh7J2ZvcmNlJzohIVtdLCdzdWNjZXNzJzooe2NvZGU6R30pPT57Rz8oY29uc29sZVsnbG9nJ10oJ2NvZGU6PicsRykscShHKSk6bChuZXcgRXJyb3IoJ+iOt+WPlmNvZGXlpLHotKUnKSk7fSwnZmFpbCc6bH0pO30pO30sTz1xPT57UT1xO2NvbnN0IGw9a3NbJ2dldFN5c3RlbUluZm9TeW5jJ10oKTtiPWxbJ3BsYXRmb3JtJ109PT0nYW5kcm9pZCc/JzQnOmxbJ3BsYXRmb3JtJ109PT0naW9zJz8nNSc6JzYnO2NvbnN0IEc9a3NbJ2dldExhdW5jaE9wdGlvbnNTeW5jJ10oKVsncXVlcnknXTtHJiYoST1HWydjaGFubmVsJ10sWT1HWydzdWJfY2hhbm5lbCddKTtjb25zdCBWPXsnMTA5MTMnOlsndW5pdF9pZCcsJ2NhbGxiYWNrJ119O2lmKFZbJ2hhc093blByb3BlcnR5J10oSSkpe2NvbnN0IFtSLHpdPVZbSV07VT1HW1JdLHM9R1t6XTt9ZWxzZSBJPScxMDkwNicsWT0nJytRK2UrSStiKycwJzt9LG49KHEsbCk9PntxWydnYW1lSWQnXT1RLChxWydwbGF0Zm9ybUlkJ109ZSxxWydzeXMnXT1iKSxUKHEpWyd0aGVuJ10oRz0+e2NvbnNvbGVbJ2xvZyddKCfmi4notbfmlK/ku5jov5Tlj4I6JyxyZXMpO2lmKEdbJ3BheVR5cGUnXT09MHhjKUdbJ2JhbGFuY2UnXT4weDA/dSgn5YWF5YC85o+Q56S6Jywn6LSm5oi35L2Z6aKdOicrR1snYmFsYW5jZSddKyflhYMsXFx4MjDov5jpnIDlhYXlgLw6JytHWyduZWVkUGF5J10rJ+WFgycsKCk9PkooRykpOkooRyxsKTtlbHNle2lmKEdbJ3BheVR5cGUnXT09MHgyfHxHWydwYXlUeXBlJ109PTB4YSljdXN0b21lclB1bGxQYXkoRyxsKTtlbHNle2lmKEdbJ3BheVR5cGUnXT09MHg0KWtzWydzaG93TW9kYWwnXSh7J3RpdGxlJzon5YWF5YC85o+Q56S6JywnY29udGVudCc6J+WNs+WwhuWxleekuuWFheWAvOS6jOe7tOeggSxcXHgyMOivt+aJq+aPj+S6jOe7tOeggeWujOaIkOaUr+S7mCcsJ3N1Y2Nlc3MnOmZ1bmN0aW9uKFYpe1ZbJ2NvbmZpcm0nXSYma3NbJ3ByZXZpZXdJbWFnZSddKHsndXJscyc6W0dbJ3BheVVybCddXX0pO319KTtlbHNlIHRocm93IG5ldyBFcnJvcign6Z2e5rOV5pSv5LuY57G75Z6LJyk7fX19KTt9LEo9KHEsbCk9PntpZihxWyduZWVkUGF5J109PTB4MCl7TShxLGwpO3JldHVybjt9bGV0IEc9e307R1snc3VjY2VzcyddPVI9PntNKHEsbCk7fSxHWydmYWlsJ109Uj0+e3UoJ+W/q+aJi+aUr+S7mOWksei0pScsUik7fTtjb25zdCBWPWtzWydnZXRTeXN0ZW1JbmZvU3luYyddKCk7R1snem9uZV9pZCddPScxJyxHWydvcyddPXFbJ29zJ10sR1snY3VycmVuY3lfdHlwZSddPSdDTlknLEdbJ2J1eV9xdWFudGl0eSddPXFbJ25lZWRQYXknXSpxWydyYXRlJ10sR1sndGhpcmRfcGFydHlfdHJhZGVfbm8nXT1xWydvcmRlcklkJ10sR1snc2lnbiddPXFbJ3NpZ24nXSxWWydwbGF0Zm9ybSddPT09J2lvcycmJihHWydwcm9kdWN0X3R5cGUnXT0weDEpLGtzWydyZXF1ZXN0R2FtZVBheW1lbnQnXShHKTt9LHk9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIva3VhaVNob3VDbGllbnQvcHVsbFBheScsVD1hc3luYyBxPT57Y29uc3QgbD0weDM7bGV0IEc9MHgwLFY9IVtdLFI9IVtdO3doaWxlKEc8bCYmIVYpe3RyeXtjb25zdCB6PWF3YWl0IGMoeSxxKTtpZih6Wydjb2RlJ109PT1Db2RlU3RhdHVzWydTVUNDRVNTJ10pcmV0dXJuIHpbJ2RhdGEnXTtlbHNlIVImJih1KCfmlK/ku5jmi4notbflpLHotKUnLHpbJ21lc3NhZ2UnXSksUj0hIVtdKTt9Y2F0Y2goUyl7IVImJih1KCfmlK/ku5jmi4notbflpLHotKUnLCfnvZHnu5zotoXml7YnKSxSPSEhW10pO31HKys7fXRocm93IG5ldyBFcnJvcign5pSv5LuY5ouJ6LW35aSx6LSlJyk7fSx1PShxLGwsRyxWKT0+e2tzWydzaG93TW9kYWwnXSh7J3RpdGxlJzpxLCdjb250ZW50JzpsLCdzdWNjZXNzJzpmdW5jdGlvbihSKXtpZihSWydjb25maXJtJ10mJkcpRygpO2Vsc2UgUlsnY2FuY2VsJ10mJlYmJlYoKTt9fSk7fSx4PUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL2t1YWlTaG91Q2xpZW50L2RlZHVjdCcsTT1hc3luYyhxLGwpPT57dHJ5e2NvbnN0IEc9eydvcmRlcklkJzpxWydvcmRlcklkJ10sJ2dhbWVJZCc6USwncGxhdGZvcm1JZCc6ZSwndXNlcklkJzpxWyd1c2VySWQnXX07bGV0IFY9YXdhaXQgYyh4LEcpO1ZbJ2NvZGUnXT09PUNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSYmbChWKTt9Y2F0Y2goUil7Y29uc29sZVsnZXJyb3InXSgnW+aJo+asvuWksei0pV3lvILluLg6PicsUik7fX0sTj1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC9hZEFjdGlvbicsdj0ocSxsLEcpPT57bGV0IFY9eydnYW1lSWQnOlEsJ3BsYXRmb3JtSWQnOmUsJ2NoYW5uZWxJZCc6SSwnc3ViQ2hhbm5lbElkJzpZLCdhaWQnOlUsJ3RyYWNlSWQnOnMsJ3N5cyc6YiwndXNlcklkJzpFLCdhZFR5cGUnOnEsJ2FkVW5pdElkJzpsLCdhZEFjdGlvblR5cGUnOkd9O2MoTixWKVsnY2F0Y2gnXShSPT57Y29uc29sZVsnbG9nJ10oJ+WPkemAgeW5v+WRiuihjOS4uuWksei0pTo+JyxSKTt9KTt9LEM9KCk9PntpZighcCl0aHJvdyBuZXcgRXJyb3IoJ+acquWIm+W7uuW9leWxj+euoeeQhuWZqCcpO30sYz0ocSxsKT0+e3JldHVybiBuZXcgUHJvbWlzZSgoRyxWKT0+e2tzWydyZXF1ZXN0J10oeyd1cmwnOnEsJ21ldGhvZCc6J1BPU1QnLCdoZWFkZXInOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J30sJ2RhdGEnOkpTT05bJ3N0cmluZ2lmeSddKGwpLCdmYWlsJzpWLCdzdWNjZXNzJzpmdW5jdGlvbihSKXtHKFJbJ2RhdGEnXSk7fSwnY29tcGxldGUnOmZ1bmN0aW9uKFIpe2NvbnNvbGVbJ2xvZyddKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3or7fmsYJcXHgyMEJFR0lOLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSxjb25zb2xlWydsb2cnXSgnVXJsOj4nLHEpLGNvbnNvbGVbJ2xvZyddKCfor7fmsYLlj4LmlbA6PicsbCk7Y29uc3Qgej1SJiYoUlsnZGF0YSddfHxSWydlcnJNc2cnXSk/UlsnZGF0YSddfHxSWydlcnJNc2cnXTonTm9cXHgyMHJlc3BvbnNlXFx4MjBkYXRhJztjb25zb2xlWydsb2cnXSgn5ZON5bqUOj4nLHopLGNvbnNvbGVbJ2xvZyddKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3or7fmsYJcXHgyMEVORC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7fX0pO30pO30sUD1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC9pbml0R2FtZSc7dGhpc1snaW5pdCddPWFzeW5jKHEsbCk9Pnt0cnl7a3NbJ29uU2hhcmVBcHBNZXNzYWdlJ10oUj0+e3JldHVybnsndGVtcGxhdGVJZCc6dywncXVlcnknOicnLCdzdWNjZXNzJzooKT0+e2NvbnNvbGVbJ2xvZyddKCfliIbkuqvmiJDlip8nKTt9LCdmYWlsJzp6PT57Y29uc29sZVsnbG9nJ10oJ+WIhuS6q+Wksei0pScseik7fX07fSksaj1hd2FpdCBtKCksTyhxKTtjb25zdCBHPXsnY29kZSc6aiwnZ2FtZUlkJzpRLCdwbGF0Zm9ybUlkJzplLCdjaGFubmVsSWQnOkksJ3N1YkNoYW5uZWxJZCc6WSwnYWlkJzpVLCd0cmFjZUlkJzpzLCdzeXMnOmJ9LFY9YXdhaXQgYyhQLEcpO1ZbJ2NvZGUnXT09PUNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSYmKEU9VlsnZGF0YSddWyd1c2VySWQnXSxIPVZbJ2RhdGEnXVsndW5pb25JZCddLHc9VlsnZGF0YSddWydzaGFyZVRlbXBsYXRlSWQnXSxWWydkYXRhJ109bnVsbCksbChqKTt9Y2F0Y2goUil7Y29uc29sZVsnZXJyb3InXSgnW+WIneWni+WMlua4uOaIj13lvILluLg6PicsUik7fX0sdGhpc1snbG9naW4nXT1hc3luYyBxPT57cSh7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOnsnY29kZSc6an19KTt9O2NvbnN0IGQ9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIva3VhaVNob3VDbGllbnQvdXBsb2FkUm9sZUluZm8nO3RoaXNbJ3VwbG9hZFJvbGVJbmZvJ109YXN5bmMocSxsKT0+e3RyeXtxWydnYW1lSWQnXT1RLHFbJ3BsYXRmb3JtSWQnXT1lO2NvbnN0IEc9YXdhaXQgYyhkLHEpO2woRyk7fWNhdGNoKFYpe2NvbnNvbGVbJ2Vycm9yJ10oJ+S4iuaKpeinkuiJsuaVsOaNruW8guW4uDo+JyxWKTt9fSx0aGlzWydwYXknXT1hc3luYyhxLGwpPT57dHJ5e24ocSxsKTt9Y2F0Y2goRyl7Y29uc29sZVsnZXJyb3InXSgnW+aUr+S7mOaLiei1t13lvILluLg6PicsRyk7fX07Y29uc3QgdD1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC9hbnRpZGlydCc7dGhpc1snYW50aWRpcnQnXT1hc3luYyhxLGwpPT57dHJ5e2xldCBHPXsnZ2FtZUlkJzpRLCdwbGF0Zm9ybUlkJzplLCdjb250ZW50cyc6cX07Y29uc3QgVj1hd2FpdCBjKHQsRyk7bChWKTt9Y2F0Y2goUil7Y29uc29sZVsnZXJyb3InXSgnW+WGheWuueWuieWFqOajgOa1i13lvILluLg6PicsUik7fX0sdGhpc1snY3JlYXRlUmV3YXJkZWRWaWRlb0FkJ109KHEsbCk9PntsZXQgRz17J2FkVW5pdElkJzpxWydhZFVuaXRJZCddfTtxWydtdWx0aXRvbiddJiYoR1snbXVsdGl0b24nXT1xWydtdWx0aXRvbiddLEdbJ211bHRpdG9uUmV3YXJkTXNnJ109cVsnbXVsdGl0b25SZXdhcmRNc2cnXSxHWydtdWx0aXRvblJld2FyZFRpbWVzJ109cVsnbXVsdGl0b25SZXdhcmRUaW1lcyddKSxxWydwcm9ncmVzc1RpcCddJiYoR1sncHJvZ3Jlc3NUaXAnXT1xWydwcm9ncmVzc1RpcCddKSxCPWtzWydjcmVhdGVSZXdhcmRlZFZpZGVvQWQnXShHKSxCWydvbkNsb3NlJ10oVj0+e1YmJlZbJ2lzRW5kZWQnXSYmKHYoQWRUeXBlWydSRVdBUkRFRF9WSURFT19BRCddLFgsQWRBY3Rpb25UeXBlWydGSU5JU0hFRCddKSxjb25zb2xlWydsb2cnXSgn5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxJykpLHFbJ29uQ2xvc2UnXSYmcVsnb25DbG9zZSddKFYpLEJbJ2Rlc3Ryb3knXSgpO30pLHFbJ29uRXJyb3InXSYmQlsnb25FcnJvciddKFY9PntxWydvbkVycm9yJ10mJnFbJ29uRXJyb3InXShWKSxCWydkZXN0cm95J10oKTt9KSxYPXFbJ2FkVW5pdElkJ10sbCh7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOm51bGx9KTt9LHRoaXNbJ3Nob3dSZXdhcmRlZFZpZGVvQWQnXT0oKT0+e0ImJihCWydsb2FkJ10oKSxCWydzaG93J10oKVsndGhlbiddKCgpPT52KEFkVHlwZVsnUkVXQVJERURfVklERU9fQUQnXSxYLEFkQWN0aW9uVHlwZVsnU0hPVyddKSlbJ2NhdGNoJ10ocT0+e0JbJ2xvYWQnXSgpWyd0aGVuJ10oKCk9PntCWydzaG93J10oKVsndGhlbiddKCgpPT52KEFkVHlwZVsnUkVXQVJERURfVklERU9fQUQnXSxYLEFkQWN0aW9uVHlwZVsnU0hPVyddKSk7fSlbJ2NhdGNoJ10obD0+Y29uc29sZVsnbG9nJ10oJ+a/gOWKseinhumikVxceDIw5bm/5ZGK5pi+56S65aSx6LSlJykpO30pKTt9LHRoaXNbJ2NyZWF0ZUdhbWVSZWNvcmRlciddPShxLGwpPT57cD1rc1snZ2V0R2FtZVJlY29yZGVyJ10oKSxxWydvblN0YXJ0J10mJnBbJ29uJ10oJ3N0YXJ0JyxxWydvblN0YXJ0J10pLHFbJ29uUmVzdW1lJ10mJnBbJ29uJ10oJ3Jlc3VtZScscVsnb25SZXN1bWUnXSkscVsnb25QYXVzZSddJiZwWydvbiddKCdwYXVzZScscVsnb25QYXVzZSddKSxxWydvblN0b3AnXSYmcFsnb24nXSgnc3RvcCcscVsnb25TdG9wJ10pLHFbJ29uRXJyb3InXSYmcFsnb24nXSgnZXJyb3InLHFbJ29uRXJyb3InXSkscVsnb25BYm9ydCddJiZwWydvbiddKCdhYm9ydCcscVsnb25BYm9ydCddKSxsKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO30sdGhpc1snZ2FtZVJlY29yZGVyU3RhcnQnXT1xPT57QygpLHBbJ3N0YXJ0J10ocSk7fSx0aGlzWydnYW1lUmVjb3JkZXJQYXVzZSddPSgpPT57QygpLHBbJ3BhdXNlJ10oKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclJlc3VtZSddPSgpPT57QygpLHBbJ3Jlc3VtZSddKCk7fSx0aGlzWydnYW1lUmVjb3JkZXJTdG9wJ109KCk9PntDKCksY29uc29sZVsnbG9nJ10oJ+inpuWPkeWBnOatouW9leWxjycpLHBbJ3N0b3AnXSgpO30sdGhpc1sncHVibGlzaFZpZGVvJ109cT0+e0MoKSxwWydwdWJsaXNoVmlkZW8nXSh7J3ZpZGVvJzpxWyd2aWRlb0lEJ10sJ2NhbGxiYWNrJzpsPT57aWYobCE9bnVsbCYmbCE9dW5kZWZpbmVkKXtjb25zb2xlWydsb2cnXSgn5YiG5Lqr5b2V5bGP5aSx6LSlOlxceDIwJyxsKTtyZXR1cm47fWNvbnNvbGVbJ2xvZyddKCfliIbkuqvlvZXlsY/miJDlip8nKTt9fSk7fSx0aGlzWydzaGFyZUFwcE1lc3NhZ2UnXT0ocSxsKT0+e2tzWydzaGFyZUFwcE1lc3NhZ2UnXSh7Li4ucSwndGVtcGxhdGVJZCc6dywnc3VjY2Vzcyc6KCk9PntsKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO30sJ2ZhaWwnOkc9Pntjb25zb2xlWydsb2cnXSgnW+WIhuS6q+Wksei0pV06PicsRyksbCh7J2NvZGUnOkNvZGVTdGF0dXNbJ0ZBSUwnXSwnbWVzc2FnZSc6J+aTjeS9nOWksei0pScsJ2RhdGEnOm51bGx9KTt9fSk7fSx0aGlzWydhZGRTaG9ydGN1dCddPXE9Pntrc1snYWRkU2hvcnRjdXQnXSh7J2NvbXBsZXRlJzpxfSk7fSx0aGlzWydjaGVja1Nob3J0Y3V0J109cT0+e2tzWydjaGVja1Nob3J0Y3V0J10oeydjb21wbGV0ZSc6cX0pO30sdGhpc1snYWRkQ29tbW9uVXNlJ109cT0+e2tzWydhZGRDb21tb25Vc2UnXSh7J2NvbXBsZXRlJzpxfSk7fSx0aGlzWydjaGVja0NvbW1vblVzZSddPXE9Pntrc1snY2hlY2tDb21tb25Vc2UnXSh7J2NvbXBsZXRlJzpxfSk7fTt9c3RhdGljWydnZXRJbnMnXSgpe3JldHVybiF0aGlzWydpbnMnXSYmKGNvbnNvbGVbJ2xvZyddKCfliJ3lp4vljJYnKSx0aGlzWydpbnMnXT1uZXcgRXlvdUNsaWVudEtzKCkpLHRoaXNbJ2lucyddO319Y2xhc3MgQ29kZVN0YXR1c3tzdGF0aWMgWydTVUNDRVNTJ109MHgwO3N0YXRpYyBbJ0ZBSUwnXT0tMHgxO31jbGFzcyBBZFR5cGV7c3RhdGljIFsnUkVXQVJERURfVklERU9fQUQnXT0weDE7c3RhdGljIFsnQkFOTkVSX0FEJ109MHgyO31jbGFzcyBBZEFjdGlvblR5cGV7c3RhdGljIFsnU0hPVyddPTB4MTtzdGF0aWMgWydGSU5JU0hFRCddPTB4Mjt9Il19