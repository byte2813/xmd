"use strict";
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