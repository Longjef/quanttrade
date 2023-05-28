import {
    d as P,
    r as g,
    i as q,
    o as c,
    c as R,
    b as t,
    Q as D,
    n as ce,
    A as te,
    s as k,
    F as W,
    R as O,
    B as M,
    a as u,
    t as V,
    w as l,
    h as B,
    k as y,
    S as G,
    g as z,
    U as K,
    f as w,
    j as i,
    V as J,
    X as Y,
    u as F,
    x as Q,
    Y as de,
    y as ae,
    z as X,
    p as se,
    e as le,
    Z as oe,
    $ as Z,
    N as me,
    a0 as _e,
    a1 as be,
    a2 as fe,
    W as ve,
    J as ke,
    a3 as pe
} from "./index-3d1c2723.js";
import {_ as ge, a as ee, b as ye} from "./StrategySelect.vue_vue_type_script_setup_true_lang-3b531160.js";
import {T as ie} from "./TradeList-ad9d6a9a.js";
import {T as Re, C as he, P as we} from "./TradesLog-c1067f34.js";
import {_ as Be, a as xe, P as Ve, b as $e} from "./InfoBox.vue_vue_type_script_setup_true_lang-4f349d1b.js";
import {P as Se} from "./PairSummary-78989354.js";
import {C as Ce} from "./CandleChartContainer-778f1094.js";
import "./install-419c7b94.js";
import "./chartZoom-61c7f12b.js";
import "./createSeriesDataSimply-4c36629a.js";
import "./plus-box-outline-a267a319.js";

const Te = P({
        __name: "BacktestResultPeriodBreakdown",
        props: {periodicBreakdown: {type: Object, required: !0}},
        setup(a) {
            const e = [{value: "day", text: "Days"}, {value: "week", text: "Weeks"}, {value: "month", text: "Months"}],
                r = g("day"), f = q(() => [{key: "date", label: "Date"}, {key: "wins", label: "Wins"}, {
                    key: "draws",
                    label: "Draws"
                }, {key: "loses", label: "Losses"}]);
            return (p, m) => {
                const v = ce, _ = te;
                return c(), R(D, null, [t(v, {
                    id: "order-direction",
                    modelValue: r.value,
                    "onUpdate:modelValue": m[0] || (m[0] = b => r.value = b),
                    options: e,
                    name: "radios-btn-default",
                    size: "sm",
                    buttons: "",
                    style: {"min-width": "10em"},
                    "button-variant": "outline-primary"
                }, null, 8, ["modelValue"]), t(_, {
                    small: "",
                    hover: "",
                    stacked: "sm",
                    items: a.periodicBreakdown[r.value],
                    fields: f.value
                }, null, 8, ["items", "fields"])], 64)
            }
        }
    }), Ae = {class: "container-fluid px-0 backtestresult-container"}, qe = {class: "row d-flex justify-content-center"},
    Pe = {class: "row text-start ms-0"}, Ne = {class: "row w-100"},
    Le = {class: "col-12 col-xl-6 px-0 px-xl-0 pe-xl-1"},
    Ue = {class: "col-12 col-xl-6 px-0 px-xl-0 pt-2 pt-xl-0 ps-xl-1"}, Ie = P({
        __name: "BacktestResultView", props: {backtestResult: {required: !0, type: Object}}, setup(a) {
            const e = a, r = s => `${W(s, e.backtestResult.stake_currency_decimals)} ${e.backtestResult.stake_currency}`,
                f = s => s.trades.slice().sort(($, S) => $.profit_ratio - S.profit_ratio), p = q(() => {
                    const s = f(e.backtestResult);
                    if (s.length === 0) return "N/A";
                    const x = s[s.length - 1];
                    return `${x.pair} ${k(x.profit_ratio, 2)}`
                }), m = q(() => {
                    const s = f(e.backtestResult);
                    if (s.length === 0) return "N/A";
                    const x = s[0];
                    return `${x.pair} ${k(x.profit_ratio, 2)}`
                }), v = q(() => {
                    var x, $;
                    const s = (x = e.backtestResult) != null && x.trade_count_short && (($ = e.backtestResult) == null ? void 0 : $.trade_count_short) > 0 ? [{
                        metric: "___",
                        value: "___"
                    }, {
                        metric: "多 / 空",
                        value: `${e.backtestResult.trade_count_long} / ${e.backtestResult.trade_count_short}`
                    }, {
                        metric: "多头总利润",
                        value: `${k(e.backtestResult.profit_total_long || 0)} | ${r(e.backtestResult.profit_total_long_abs)}`
                    }, {
                        metric: "空头总利润",
                        value: `${k(e.backtestResult.profit_total_short || 0)} | ${r(e.backtestResult.profit_total_short_abs)}`
                    }] : [];
                    return [{
                        metric: "总利润",
                        value: `${k(e.backtestResult.profit_total)} | ${r(e.backtestResult.profit_total_abs)}`
                    }, {
                        metric: "年化复合增长率",
                        value: `${e.backtestResult.cagr ? k(e.backtestResult.cagr) : "N/A"}`
                    }, {
                        metric: "Sortino比率",
                        value: `${e.backtestResult.sortino ? e.backtestResult.sortino.toFixed(2) : "N/A"}`
                    }, {
                        metric: "Sharpe比率",
                        value: `${e.backtestResult.sharpe ? e.backtestResult.sharpe.toFixed(2) : "N/A"}`
                    }, {
                        metric: "Calmar比率",
                        value: `${e.backtestResult.calmar ? e.backtestResult.calmar.toFixed(2) : "N/A"}`
                    }, {
                        metric: "期望值",
                        value: `${e.backtestResult.expectancy ? e.backtestResult.expectancy.toFixed(2) : "N/A"}`
                    }, {
                        metric: "盈利因子",
                        value: `${e.backtestResult.profit_factor ? W(e.backtestResult.profit_factor, 3) : "N/A"}`
                    }, {
                        metric: "总交易次数/每日平均交易次数",
                        value: `${e.backtestResult.total_trades} / ${e.backtestResult.trades_per_day}`
                    }, {
                        metric: "最佳交易日",
                        value: `${k(e.backtestResult.backtest_best_day, 2)} | ${r(e.backtestResult.backtest_best_day_abs)}`
                    }, {
                        metric: "最差交易日",
                        value: `${k(e.backtestResult.backtest_worst_day, 2)} | ${r(e.backtestResult.backtest_worst_day_abs)}`
                    }, {
                        metric: "盈/平/亏",
                        value: `${e.backtestResult.results_per_pair[e.backtestResult.results_per_pair.length - 1].wins} / ${e.backtestResult.results_per_pair[e.backtestResult.results_per_pair.length - 1].draws} / ${e.backtestResult.results_per_pair[e.backtestResult.results_per_pair.length - 1].losses}`
                    }, {
                        metric: "盈/平/亏 天数",
                        value: `${e.backtestResult.winning_days} / ${e.backtestResult.draw_days} / ${e.backtestResult.losing_days}`
                    }, {
                        metric: "盈利交易平均持仓时间",
                        value: O(e.backtestResult.winner_holding_avg_s)
                    }, {
                        metric: "亏损交易平均持仓时间",
                        value: O(e.backtestResult.loser_holding_avg_s)
                    }, {
                        metric: "拒绝入场信号数量",
                        value: e.backtestResult.rejected_signals
                    }, {
                        metric: "入场和出场超时次数",
                        value: `${e.backtestResult.timedout_entry_orders} / ${e.backtestResult.timedout_exit_orders}`
                    }, {
                        metric: "取消交易入场次数",
                        value: e.backtestResult.canceled_trade_entries ?? "N/A"
                    }, {
                        metric: "取消入场订单数量",
                        value: e.backtestResult.canceled_entry_orders ?? "N/A"
                    }, {
                        metric: "替换入场订单数量",
                        value: e.backtestResult.replaced_entry_orders ?? "N/A"
                    }, ...s, {metric: "___", value: "___"}, {
                        metric: "最低账户余额",
                        value: r(e.backtestResult.csum_min)
                    }, {metric: "最高账户余额", value: r(e.backtestResult.csum_max)}, {
                        metric: "市场变动百分比",
                        value: k(e.backtestResult.market_change)
                    }, {metric: "___", value: "___"}, {
                        metric: "最大回撤（账户）",
                        value: k(e.backtestResult.max_drawdown_account)
                    }, {
                        metric: "最大绝对回撤",
                        value: r(e.backtestResult.max_drawdown_abs)
                    }, {
                        metric: "回撤高|低点",
                        value: `${r(e.backtestResult.max_drawdown_high)} | ${r(e.backtestResult.max_drawdown_low)}`
                    }, {metric: "回撤开始时间", value: M(e.backtestResult.drawdown_start_ts)}, {
                        metric: "回撤结束时间",
                        value: M(e.backtestResult.drawdown_end_ts)
                    }, {metric: "___", value: "___"}, {
                        metric: "最佳交易对",
                        value: `${e.backtestResult.best_pair.key} ${k(e.backtestResult.best_pair.profit_sum)}`
                    }, {
                        metric: "最差交易对",
                        value: `${e.backtestResult.worst_pair.key} ${k(e.backtestResult.worst_pair.profit_sum)}`
                    }, {metric: "最佳单笔交易", value: p.value}, {metric: "最差单笔交易", value: m.value}]
                }), _ = q(() => [{
                    setting: "回测开始时间",
                    value: M(e.backtestResult.backtest_start_ts)
                }, {setting: "回测结束时间", value: M(e.backtestResult.backtest_end_ts)}, {
                    setting: "回测执行时间",
                    value: O(e.backtestResult.backtest_run_end_ts - e.backtestResult.backtest_run_start_ts)
                }, {setting: "最大持仓交易数量", value: e.backtestResult.max_open_trades}, {
                    setting: "主时间框架",
                    value: e.backtestResult.timeframe
                }, {setting: "详细时间框架", value: e.backtestResult.timeframe_detail || "N/A"}, {
                    setting: "时间范围",
                    value: e.backtestResult.timerange
                }, {setting: "止损百分比", value: k(e.backtestResult.stoploss, 2)}, {
                    setting: "动态止损",
                    value: e.backtestResult.trailing_stop
                }, {
                    setting: "只有当偏移达到时才进行动态止损调整",
                    value: e.backtestResult.trailing_only_offset_is_reached
                }, {
                    setting: "正向动态止损",
                    value: e.backtestResult.trailing_stop_positive
                }, {
                    setting: "正向动态止损偏移量",
                    value: e.backtestResult.trailing_stop_positive_offset
                }, {setting: "自定义止损", value: e.backtestResult.use_custom_stoploss}, {
                    setting: "回报率",
                    value: e.backtestResult.minimal_roi
                }, {
                    setting: "使用退出信号",
                    value: e.backtestResult.use_exit_signal !== void 0 ? e.backtestResult.use_exit_signal : e.backtestResult.use_sell_signal
                }, {
                    setting: "仅基于盈利退出",
                    value: e.backtestResult.exit_profit_only !== void 0 ? e.backtestResult.exit_profit_only : e.backtestResult.sell_profit_only
                }, {
                    setting: "退出盈利偏移",
                    value: e.backtestResult.exit_profit_offset !== void 0 ? e.backtestResult.exit_profit_offset : e.backtestResult.sell_profit_offset
                }, {setting: "启用保护机制", value: e.backtestResult.enable_protections}, {
                    setting: "初始资金",
                    value: r(e.backtestResult.starting_balance)
                }, {setting: "最终资金", value: r(e.backtestResult.final_balance)}, {
                    setting: "平均持仓金额",
                    value: r(e.backtestResult.avg_stake_amount)
                }, {setting: "总交易量", value: r(e.backtestResult.total_volume)}]),
                b = q(() => [{key: "key", label: "Pair"}, {key: "trades", label: "Buys"}, {
                    key: "profit_mean",
                    label: "Avg Profit %",
                    formatter: s => k(s, 2)
                }, {key: "profit_sum", label: "Cum Profit %", formatter: s => k(s, 2)}, {
                    key: "profit_total_abs",
                    label: `Tot Profit ${e.backtestResult.stake_currency}`,
                    formatter: s => W(s, e.backtestResult.stake_currency_decimals)
                }, {key: "profit_total", label: "Tot Profit %", formatter: s => k(s, 2)}, {
                    key: "duration_avg",
                    label: "Avg Duration"
                }, {key: "wins", label: "Wins"}, {key: "draws", label: "Draws"}, {key: "losses", label: "Losses"}]),
                d = q(() => [{key: "exit_reason", label: "Exit Reason"}, {
                    key: "trades",
                    label: "Buys"
                }, {key: "profit_mean", label: "Avg Profit %", formatter: s => k(s, 2)}, {
                    key: "profit_sum",
                    label: "Cum Profit %",
                    formatter: s => k(s, 2)
                }, {
                    key: "profit_total_abs",
                    label: `Tot Profit ${e.backtestResult.stake_currency}`,
                    formatter: s => W(s, e.backtestResult.stake_currency_decimals)
                }, {key: "profit_total", label: "Tot Profit %", formatter: s => k(s, 2)}, {
                    key: "wins",
                    label: "Wins"
                }, {key: "draws", label: "Draws"}, {key: "losses", label: "Losses"}]),
                T = [{key: "metric", label: "Metric"}, {key: "value", label: "Value"}],
                N = [{key: "setting", label: "Setting"}, {key: "value", label: "Value"}];
            return (s, x) => {
                const $ = te, S = G;
                return c(), R("div", Ae, [u("div", qe, [u("h3", null, "回测结果来自 - " + V(a.backtestResult.strategy_name), 1)]), u("div", Pe, [u("div", Ne, [u("div", Le, [t(S, {header: "策略设置"}, {
                    default: l(() => [t($, {
                        small: "",
                        borderless: "",
                        items: _.value,
                        fields: N
                    }, null, 8, ["items"])]), _: 1
                })]), u("div", Ue, [t(S, {header: "指标"}, {
                    default: l(() => [t($, {
                        small: "",
                        borderless: "",
                        items: v.value,
                        fields: T
                    }, null, 8, ["items"])]), _: 1
                })])]), t(S, {
                    header: "退出原因结果",
                    class: "row mt-2 w-100"
                }, {
                    default: l(() => [t($, {
                        small: "",
                        hover: "",
                        stacked: "sm",
                        items: a.backtestResult.exit_reason_summary || a.backtestResult.sell_reason_summary,
                        fields: d.value
                    }, null, 8, ["items", "fields"])]), _: 1
                }), t(S, {header: "每交易对结果", class: "row mt-2 w-100"}, {
                    default: l(() => [t($, {
                        small: "",
                        hover: "",
                        stacked: "sm",
                        items: a.backtestResult.results_per_pair,
                        fields: b.value
                    }, null, 8, ["items", "fields"])]), _: 1
                }), a.backtestResult.periodic_breakdown ? (c(), B(S, {
                    key: 0,
                    header: "周期分析",
                    class: "row mt-2 w-100"
                }, {
                    default: l(() => [t(Te, {"periodic-breakdown": a.backtestResult.periodic_breakdown}, null, 8, ["periodic-breakdown"])]),
                    _: 1
                })) : y("", !0), t(S, {
                    header: "单次交易结果",
                    class: "row mt-2 w-100"
                }, {
                    default: l(() => [t(ie, {
                        class: "row trade-history mt-2 w-100",
                        trades: a.backtestResult.trades,
                        "show-filter": !0,
                        "stake-currency": a.backtestResult.stake_currency
                    }, null, 8, ["trades", "stake-currency"])]), _: 1
                })])])
            }
        }
    });
const Me = z(Ie, [["__scopeId", "data-v-6ca8e319"]]), De = {class: "container d-flex flex-column align-items-center"},
    ze = u("h3", null, "Available results:", -1), Fe = P({
        __name: "BacktestResultSelect",
        props: {
            backtestHistory: {required: !0, type: Object},
            selectedBacktestResultKey: {required: !1, default: "", type: String}
        },
        emits: ["selectionChange"],
        setup(a, {emit: e}) {
            const r = f => {
                e("selectionChange", f)
            };
            return (f, p) => {
                const m = J, v = Y;
                return c(), R("div", De, [ze, t(v, {class: "ms-2"}, {
                    default: l(() => [(c(!0), R(D, null, K(Object.entries(a.backtestHistory), ([_, b]) => (c(), B(m, {
                        key: _,
                        button: "",
                        active: _ === a.selectedBacktestResultKey,
                        class: "d-flex justify-content-between align-items-center py-1",
                        onClick: d => r(_)
                    }, {
                        default: l(() => [w(V(_) + " " + V(b.total_trades) + " " + V(i(k)(b.profit_total)), 1)]),
                        _: 2
                    }, 1032, ["active", "onClick"]))), 128))]), _: 1
                })])
            }
        }
    }), je = {class: "w-100 d-flex"}, Ee = {class: "ms-2"}, He = P({
        __name: "FreqaiModelSelect",
        props: {modelValue: {type: String, required: !0}},
        emits: ["update:modelValue"],
        setup(a, {emit: e}) {
            const r = a, f = F(), p = q({
                get() {
                    return r.modelValue
                }, set(m) {
                    e("update:modelValue", m)
                }
            });
            return Q(() => {
                f.activeBot.freqaiModelList.length === 0 && f.activeBot.getFreqAIModelList()
            }), (m, v) => {
                const _ = de, b = ae, d = X;
                return c(), R("div", null, [u("div", je, [t(_, {
                    id: "freqaiModel-select",
                    modelValue: p.value,
                    "onUpdate:modelValue": v[0] || (v[0] = T => p.value = T),
                    options: i(f).activeBot.freqaiModelList
                }, null, 8, ["modelValue", "options"]), u("div", Ee, [t(d, {onClick: i(f).activeBot.getFreqAIModelList}, {
                    default: l(() => [t(b)]),
                    _: 1
                }, 8, ["onClick"])])])])
            }
        }
    }),
    We = u("p", null, " 从磁盘加载历史结果。您可以点击多个结果，将所有结果加载到QuantUI中。. ", -1),
    Oe = P({
        __name: "BacktestHistoryLoad", setup(a) {
            const e = F();
            return Q(() => {
                e.activeBot.getBacktestHistory()
            }), (r, f) => {
                const p = ae, m = J, v = Y;
                return c(), R("div", null, [u("button", {
                    class: "btn btn-secondary float-end",
                    title: "Refresh",
                    "aria-label": "Refresh",
                    onClick: f[0] || (f[0] = (..._) => i(e).activeBot.getBacktestHistory && i(e).activeBot.getBacktestHistory(..._))
                }, [t(p)]), We, i(e).activeBot.backtestHistoryList ? (c(), B(v, {
                    key: 0,
                    class: "ms-2"
                }, {
                    default: l(() => [(c(!0), R(D, null, K(i(e).activeBot.backtestHistoryList, (_, b) => (c(), B(m, {
                        key: b,
                        class: "d-flex justify-content-between align-items-center py-1 mb-1",
                        button: "",
                        onClick: d => i(e).activeBot.getBacktestHistoryResult(_)
                    }, {
                        default: l(() => [u("strong", null, V(_.strategy), 1), w(" backtested on: " + V(i(M)(_.backtest_start_time * 1e3)) + " ", 1), u("small", null, V(_.filename), 1)]),
                        _: 2
                    }, 1032, ["onClick"]))), 128))]), _: 1
                })) : y("", !0)])
            }
        }
    }), Ge = a => (se("data-v-6fd492b8"), a = a(), le(), a),
    Ke = {class: "text-center flex-fill mt-2 d-flex flex-column"}, Je = Ge(() => u("hr", null, null, -1)), Ye = P({
        __name: "BacktestGraphsView", props: {trades: {required: !0, type: Array}}, setup(a) {
            return (e, r) => (c(), R("div", Ke, [t(Re, {
                trades: a.trades,
                class: "trades-log"
            }, null, 8, ["trades"]), t(he, {
                trades: a.trades,
                "profit-column": "profit_abs",
                class: "cum-profit",
                "show-title": !0
            }, null, 8, ["trades"]), Je, t(we, {
                class: "mt-3",
                trades: a.trades,
                "show-title": !0
            }, null, 8, ["trades"])]))
        }
    });
const Qe = z(Ye, [["__scopeId", "data-v-6fd492b8"]]), Xe = {key: 0}, Ze = P({
    __name: "TradeListNav",
    props: {trades: {required: !0, type: Array}, backtestMode: {required: !1, default: !1, type: Boolean}},
    emits: ["trade-select"],
    setup(a, {emit: e}) {
        const r = a, f = F(), p = g({}), m = g(!0), v = b => {
                p.value = b, e("trade-select", b)
            },
            _ = q(() => r.trades.slice().sort((b, d) => m.value ? d.open_timestamp - b.open_timestamp : b.open_timestamp - d.open_timestamp));
        return (b, d) => {
            const T = J, N = Y;
            return c(), R("div", null, [t(N, null, {
                default: l(() => [t(T, {
                    button: "",
                    class: "d-flex flex-wrap justify-content-center align-items-center",
                    title: "Trade Navigation",
                    onClick: d[0] || (d[0] = s => m.value = !m.value)
                }, {
                    default: l(() => [w("Trade Navigation " + V(m.value ? "↓" : "↑"), 1)]),
                    _: 1
                }), (c(!0), R(D, null, K(_.value, s => (c(), B(T, {
                    key: s.open_timestamp,
                    button: "",
                    class: "d-flex flex-wrap justify-content-between align-items-center py-1",
                    title: `${s.pair}`,
                    active: s.open_timestamp === p.value.open_timestamp,
                    onClick: x => v(s)
                }, {
                    default: l(() => [u("div", null, [i(f).activeBot.botState.trading_mode !== "spot" ? (c(), R("span", Xe, V(s.is_short ? "S-" : "L-"), 1)) : y("", !0), t(Be, {date: s.open_timestamp}, null, 8, ["date"])]), t(xe, {trade: s}, null, 8, ["trade"]), a.backtestMode ? (c(), B(Ve, {
                        key: 0,
                        "profit-ratio": s.profit_ratio,
                        "stake-currency": i(f).activeBot.stakeCurrency
                    }, null, 8, ["profit-ratio", "stake-currency"])) : y("", !0)]), _: 2
                }, 1032, ["title", "active", "onClick"]))), 128)), a.trades.length === 0 ? (c(), B(T, {key: 0}, {
                    default: l(() => [w("No trades to show...")]),
                    _: 1
                })) : y("", !0)]), _: 1
            })])
        }
    }
});
const et = z(Ze, [["__scopeId", "data-v-a048b989"]]), tt = {class: "row"}, at = {class: "col-md-11 text-start"},
    st = {class: "col-md-1 text-end"}, lt = {class: "row text-center h-100 d-flex align-items-stretch"}, ot = P({
        __name: "BacktestResultChart",
        props: {
            timeframe: {required: !0, type: String},
            strategy: {required: !0, type: String},
            freqaiModel: {required: !1, default: void 0, type: String},
            timerange: {required: !0, type: String},
            pairlist: {required: !0, type: Array},
            trades: {required: !0, type: Array}
        },
        setup(a) {
            const e = F(), r = g(!0), f = g(), p = m => {
                f.value = {startValue: m.open_timestamp, endValue: m.close_timestamp}
            };
            return (m, v) => {
                const _ = X, b = G;
                return c(), R("div", null, [u("div", tt, [u("div", at, [u("p", null, " 图表将始终显示所选策略的最新值. 时间范围: " + V(a.timerange) + " - " + V(a.strategy), 1)]), u("div", st, [t(_, {
                    "aria-label": "Close",
                    title: "Trade Navigation",
                    size: "sm",
                    onClick: v[0] || (v[0] = d => r.value = !r.value)
                }, {
                    default: l(() => [w(V(r.value ? ">" : "<"), 1)]),
                    _: 1
                })])]), u("div", lt, [t(Se, {
                    class: "col-md-2 overflow-auto",
                    style: {"max-height": "calc(100vh - 200px)"},
                    pairlist: a.pairlist,
                    trades: a.trades,
                    "sort-method": "profit",
                    "backtest-mode": !0
                }, null, 8, ["pairlist", "trades"]), t(Ce, {
                    "available-pairs": a.pairlist,
                    "historic-view": !0,
                    timeframe: a.timeframe,
                    timerange: a.timerange,
                    strategy: a.strategy,
                    trades: a.trades,
                    class: oe(`${r.value ? "col-md-8" : "col-md-10"} candle-chart-container px-0 h-100 align-self-stretch`),
                    "slider-position": f.value,
                    "freqai-model": a.freqaiModel
                }, null, 8, ["available-pairs", "timeframe", "timerange", "strategy", "trades", "class", "slider-position", "freqai-model"]), r.value ? (c(), B(et, {
                    key: 0,
                    class: "overflow-auto col-md-2",
                    style: {"max-height": "calc(100vh - 200px)"},
                    trades: a.trades.filter(d => d.pair === i(e).activeBot.selectedPair),
                    onTradeSelect: p
                }, null, 8, ["trades"])) : y("", !0)]), t(b, {
                    header: "Single trades",
                    class: "row mt-2 w-100"
                }, {
                    default: l(() => [t(ie, {
                        class: "row trade-history mt-2 w-100",
                        trades: a.trades,
                        "show-filter": !0
                    }, null, 8, ["trades"])]), _: 1
                })])
            }
        }
    });
const it = z(ot, [["__scopeId", "data-v-1fe46937"]]), I = a => (se("data-v-cbd01b9a"), a = a(), le(), a),
    rt = {class: "container-fluid", style: {"max-height": "calc(100vh - 60px)"}}, nt = {class: "container-fluid"},
    ut = I(() => u("div", {class: "row mb-2"}, null, -1)), ct = {key: 0}, dt = {class: "row w-100"},
    mt = I(() => u("h2", {class: "col-4 col-lg-3"}, "Backtesting", -1)),
    _t = {class: "col-12 col-lg-order-last col-lg-6 mx-md-5 d-flex flex-wrap justify-content-md-center justify-content-between mb-4"},
    bt = {class: "d-md-flex"}, ft = {key: 0, class: "flex-fill row d-flex flex-column bt-config"},
    vt = {key: 1, class: "flex-fill row d-flex flex-column bt-config"}, kt = {class: "mb-2"},
    pt = I(() => u("span", null, "Strategy", -1)), gt = {class: "d-flex"},
    yt = {class: "d-flex justify-content-center"}, Rt = I(() => u("span", {class: "me-2"}, "Enable FreqAI:", -1)),
    ht = I(() => u("hr", null, null, -1)), wt = I(() => u("h3", {class: "mt-3"}, "Backtesting summary", -1)),
    Bt = {class: "d-flex flex-wrap flex-md-nowrap justify-content-between justify-content-md-center"},
    xt = {key: 0, class: "container-fluid text-center w-100 mt-2"}, Vt = P({
        __name: "BacktestingView", setup(a) {
            const e = F(),
                r = q(() => e.activeBot.backtestHistory ? Object.keys(e.activeBot.backtestHistory).length !== 0 : !1),
                f = q(() => {
                    try {
                        return e.activeBot.selectedBacktestResult.timeframe
                    } catch {
                        return ""
                    }
                }), p = g(""), m = g(""), v = g(""), _ = g(""), b = g(!1), d = g({enabled: !1, model: "", identifier: ""}),
                T = g(!1), N = g(!1), s = g(!0), x = g(""), $ = g(""), S = g(""), h = g("run"), j = g(null), re = () => {
                    p.value = e.activeBot.selectedBacktestResult.strategy_name, e.activeBot.getStrategy(p.value), m.value = e.activeBot.selectedBacktestResult.timeframe, v.value = e.activeBot.selectedBacktestResult.timeframe_detail || "", _.value = e.activeBot.selectedBacktestResult.timerange
                };
            Z(() => e.activeBot.selectedBacktestResultKey, () => {
                re()
            });
            const ne = () => {
                const C = {strategy: p.value, timerange: _.value, enable_protections: T.value}, o = parseInt(x.value, 10);
                if (o && (C.max_open_trades = o), N.value) C.stake_amount = "unlimited"; else {
                    const U = Number($.value);
                    U && (C.stake_amount = U.toString())
                }
                const L = Number(S.value);
                L && (C.dry_run_wallet = L), m.value && (C.timeframe = m.value), v.value && (C.timeframe_detail = v.value), s.value || (C.backtest_cache = "none"), d.value.enabled && (C.freqaimodel = d.value.model, d.value.identifier !== "" && (C.freqai = {identifier: d.value.identifier})), e.activeBot.startBacktest(C)
            };
            return Q(() => e.activeBot.getState()), Z(() => e.activeBot.backtestRunning, () => {
                e.activeBot.backtestRunning === !0 ? j.value = window.setInterval(e.activeBot.pollBacktest, 1e3) : j.value && (clearInterval(j.value), j.value = null)
            }), (C, o) => {
                const L = fe, U = X, A = ve, E = ke, H = pe, ue = G;
                return c(), R("div", rt, [u("div", nt, [ut, i(e).activeBot.canRunBacktest ? y("", !0) : (c(), R("p", ct, " Bot must be in webserver mode to enable Backtesting. ")), u("div", dt, [mt, u("div", _t, [i(e).activeBot.botApiVersion >= 2.15 ? (c(), B(L, {
                    key: 0,
                    modelValue: h.value,
                    "onUpdate:modelValue": o[0] || (o[0] = n => h.value = n),
                    name: "bt-form-radios",
                    button: "",
                    class: "mx-1 flex-samesize-items",
                    value: "historicResults",
                    disabled: !i(e).activeBot.canRunBacktest
                }, {
                    default: l(() => [w("Load Results")]),
                    _: 1
                }, 8, ["modelValue", "disabled"])) : y("", !0), t(L, {
                    modelValue: h.value,
                    "onUpdate:modelValue": o[1] || (o[1] = n => h.value = n),
                    name: "bt-form-radios",
                    button: "",
                    class: "mx-1 flex-samesize-items",
                    value: "run",
                    disabled: !i(e).activeBot.canRunBacktest
                }, {
                    default: l(() => [w("Run backtest")]),
                    _: 1
                }, 8, ["modelValue", "disabled"]), t(L, {
                    id: "bt-analyze-btn",
                    modelValue: h.value,
                    "onUpdate:modelValue": o[2] || (o[2] = n => h.value = n),
                    name: "bt-form-radios",
                    button: "",
                    class: "mx-1 flex-samesize-items",
                    value: "results",
                    disabled: !r.value
                }, {
                    default: l(() => [w("Analyze result")]),
                    _: 1
                }, 8, ["modelValue", "disabled"]), t(L, {
                    modelValue: h.value,
                    "onUpdate:modelValue": o[3] || (o[3] = n => h.value = n),
                    name: "bt-form-radios",
                    button: "",
                    class: "mx-1 flex-samesize-items",
                    value: "visualize-summary",
                    disabled: !r.value
                }, {
                    default: l(() => [w("Visualize summary")]),
                    _: 1
                }, 8, ["modelValue", "disabled"]), t(L, {
                    modelValue: h.value,
                    "onUpdate:modelValue": o[4] || (o[4] = n => h.value = n),
                    name: "bt-form-radios",
                    button: "",
                    class: "mx-1 flex-samesize-items",
                    value: "visualize",
                    disabled: !r.value
                }, {
                    default: l(() => [w("Visualize result")]),
                    _: 1
                }, 8, ["modelValue", "disabled"])]), me(u("small", {class: "text-end bt-running-label col-8 col-lg-3"}, "Backtest running: " + V(i(e).activeBot.backtestStep) + " " + V(i(k)(i(e).activeBot.backtestProgress, 2)), 513), [[_e, i(e).activeBot.backtestRunning]])])]), u("div", bt, [u("div", {class: oe(`${b.value ? "col-md-3" : ""} sticky-top sticky-offset me-3 d-flex flex-column`)}, [h.value !== "visualize" ? (c(), B(U, {
                    key: 0,
                    class: "align-self-start",
                    "aria-label": "Close",
                    size: "sm",
                    onClick: o[5] || (o[5] = n => b.value = !b.value)
                }, {default: l(() => [w(V(b.value ? "<" : ">"), 1)]), _: 1})) : y("", !0), t(be, {
                    name: "fade",
                    mode: "in-out"
                }, {
                    default: l(() => [h.value !== "visualize" && b.value ? (c(), B(Fe, {
                        key: 0,
                        "backtest-history": i(e).activeBot.backtestHistory,
                        "selected-backtest-result-key": i(e).activeBot.selectedBacktestResultKey,
                        onSelectionChange: i(e).activeBot.setBacktestResultKey
                    }, null, 8, ["backtest-history", "selected-backtest-result-key", "onSelectionChange"])) : y("", !0)]),
                    _: 1
                })], 2), h.value == "historicResults" ? (c(), R("div", ft, [t(Oe)])) : y("", !0), h.value == "run" ? (c(), R("div", vt, [u("div", kt, [pt, t(ge, {
                    modelValue: p.value,
                    "onUpdate:modelValue": o[6] || (o[6] = n => p.value = n)
                }, null, 8, ["modelValue"])]), t(ue, {disabled: i(e).activeBot.backtestRunning}, {
                    default: l(() => [t(A, {
                        "label-cols-lg": "2",
                        label: "Backtest params",
                        "label-size": "sm",
                        "label-class": "fw-bold pt-0",
                        class: "mb-0"
                    }, {
                        default: l(() => [t(A, {
                            "label-cols-sm": "5",
                            label: "Timeframe:",
                            "label-align-sm": "right",
                            "label-for": "timeframe-select"
                        }, {
                            default: l(() => [t(ee, {
                                id: "timeframe-select",
                                modelValue: m.value,
                                "onUpdate:modelValue": o[7] || (o[7] = n => m.value = n)
                            }, null, 8, ["modelValue"])]), _: 1
                        }), t(A, {
                            "label-cols-sm": "5",
                            label: "Detail Timeframe:",
                            "label-align-sm": "right",
                            "label-for": "timeframe-detail-select",
                            title: "Detail timeframe, to simulate intra-candle results. Not setting this will not use this functionality."
                        }, {
                            default: l(() => [t(ee, {
                                id: "timeframe-detail-select",
                                modelValue: v.value,
                                "onUpdate:modelValue": o[8] || (o[8] = n => v.value = n),
                                "below-timeframe": m.value
                            }, null, 8, ["modelValue", "below-timeframe"])]), _: 1
                        }), t(A, {
                            "label-cols-sm": "5",
                            label: "Max open trades:",
                            "label-align-sm": "right",
                            "label-for": "max-open-trades"
                        }, {
                            default: l(() => [t(E, {
                                id: "max-open-trades",
                                modelValue: x.value,
                                "onUpdate:modelValue": o[9] || (o[9] = n => x.value = n),
                                placeholder: "Use strategy default",
                                type: "number"
                            }, null, 8, ["modelValue"])]), _: 1
                        }), t(A, {
                            "label-cols-sm": "5",
                            label: "Starting capital:",
                            "label-align-sm": "right",
                            "label-for": "starting-capital"
                        }, {
                            default: l(() => [t(E, {
                                id: "starting-capital",
                                modelValue: S.value,
                                "onUpdate:modelValue": o[10] || (o[10] = n => S.value = n),
                                type: "number",
                                step: "0.001"
                            }, null, 8, ["modelValue"])]), _: 1
                        }), t(A, {
                            "label-cols-sm": "5",
                            label: "Stake amount:",
                            "label-align-sm": "right",
                            "label-for": "stake-amount"
                        }, {
                            default: l(() => [u("div", gt, [t(H, {
                                id: "stake-amount-bool",
                                modelValue: N.value,
                                "onUpdate:modelValue": o[11] || (o[11] = n => N.value = n),
                                class: "col-md-6"
                            }, {
                                default: l(() => [w("Unlimited stake")]),
                                _: 1
                            }, 8, ["modelValue"]), t(E, {
                                id: "stake-amount",
                                modelValue: $.value,
                                "onUpdate:modelValue": o[12] || (o[12] = n => $.value = n),
                                type: "number",
                                placeholder: "Use strategy default",
                                step: "0.01",
                                disabled: N.value
                            }, null, 8, ["modelValue", "disabled"])])]), _: 1
                        }), t(A, {
                            "label-cols-sm": "5",
                            label: "Enable Protections:",
                            "label-align-sm": "right",
                            "label-for": "enable-protections"
                        }, {
                            default: l(() => [t(H, {
                                id: "enable-protections",
                                modelValue: T.value,
                                "onUpdate:modelValue": o[13] || (o[13] = n => T.value = n)
                            }, null, 8, ["modelValue"])]), _: 1
                        }), i(e).activeBot.botApiVersion >= 2.22 ? (c(), B(A, {
                            key: 0,
                            "label-cols-sm": "5",
                            label: "Cache Backtest results:",
                            "label-align-sm": "right",
                            "label-for": "enable-cache"
                        }, {
                            default: l(() => [t(H, {
                                id: "enable-cache",
                                modelValue: s.value,
                                "onUpdate:modelValue": o[14] || (o[14] = n => s.value = n)
                            }, null, 8, ["modelValue"])]), _: 1
                        })) : y("", !0), i(e).activeBot.botApiVersion >= 2.22 ? (c(), R(D, {key: 1}, [t(A, {
                            "label-cols-sm": "5",
                            label: "Enable FreqAI:",
                            "label-align-sm": "right",
                            "label-for": "enable-freqai"
                        }, {
                            label: l(() => [u("div", yt, [Rt, t($e, {hint: "Assumes freqAI configuration is setup in the configuration, and the strategy is a freqAI strategy. Will fail if that's not the case."})])]),
                            default: l(() => [t(H, {
                                id: "enable-freqai",
                                modelValue: d.value.enabled,
                                "onUpdate:modelValue": o[15] || (o[15] = n => d.value.enabled = n)
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }), d.value.enabled ? (c(), B(A, {
                            key: 0,
                            "label-cols-sm": "5",
                            label: "FreqAI identifier:",
                            "label-align-sm": "right",
                            "label-for": "freqai-identifier"
                        }, {
                            default: l(() => [t(E, {
                                id: "freqai-identifier",
                                modelValue: d.value.identifier,
                                "onUpdate:modelValue": o[16] || (o[16] = n => d.value.identifier = n),
                                placeholder: "Use config default"
                            }, null, 8, ["modelValue"])]), _: 1
                        })) : y("", !0), d.value.enabled ? (c(), B(A, {
                            key: 1,
                            "label-cols-sm": "5",
                            label: "FreqAI Model",
                            "label-align-sm": "right",
                            "label-for": "freqai-model"
                        }, {
                            default: l(() => [t(He, {
                                id: "freqai-model",
                                modelValue: d.value.model,
                                "onUpdate:modelValue": o[17] || (o[17] = n => d.value.model = n)
                            }, null, 8, ["modelValue"])]), _: 1
                        })) : y("", !0)], 64)) : y("", !0), ht, t(ye, {
                            modelValue: _.value,
                            "onUpdate:modelValue": o[18] || (o[18] = n => _.value = n),
                            class: "mt-2"
                        }, null, 8, ["modelValue"])]), _: 1
                    })]), _: 1
                }, 8, ["disabled"]), wt, u("div", Bt, [t(U, {
                    id: "start-backtest",
                    variant: "primary",
                    disabled: i(e).activeBot.backtestRunning || !i(e).activeBot.canRunBacktest,
                    class: "mx-1",
                    onClick: ne
                }, {default: l(() => [w(" Start backtest ")]), _: 1}, 8, ["disabled"]), t(U, {
                    variant: "primary",
                    disabled: i(e).activeBot.backtestRunning || !i(e).activeBot.canRunBacktest,
                    class: "mx-1",
                    onClick: i(e).activeBot.pollBacktest
                }, {
                    default: l(() => [w(" Load backtest result ")]),
                    _: 1
                }, 8, ["disabled", "onClick"]), t(U, {
                    variant: "primary",
                    class: "mx-1",
                    disabled: !i(e).activeBot.backtestRunning,
                    onClick: i(e).activeBot.stopBacktest
                }, {default: l(() => [w("Stop Backtest")]), _: 1}, 8, ["disabled", "onClick"]), t(U, {
                    variant: "primary",
                    class: "mx-1",
                    disabled: i(e).activeBot.backtestRunning || !i(e).activeBot.canRunBacktest,
                    onClick: i(e).activeBot.removeBacktest
                }, {
                    default: l(() => [w("Reset Backtest")]),
                    _: 1
                }, 8, ["disabled", "onClick"])])])) : y("", !0), r.value && h.value == "results" ? (c(), B(Me, {
                    key: 2,
                    "backtest-result": i(e).activeBot.selectedBacktestResult,
                    class: "flex-fill"
                }, null, 8, ["backtest-result"])) : y("", !0), r.value && h.value == "visualize-summary" ? (c(), B(Qe, {
                    key: 3,
                    trades: i(e).activeBot.selectedBacktestResult.trades
                }, null, 8, ["trades"])) : y("", !0)]), r.value && h.value == "visualize" ? (c(), R("div", xt, [t(it, {
                    timeframe: f.value,
                    strategy: p.value,
                    timerange: _.value,
                    pairlist: i(e).activeBot.selectedBacktestResult.pairlist,
                    trades: i(e).activeBot.selectedBacktestResult.trades,
                    "freqai-model": d.value.enabled ? d.value.model : void 0
                }, null, 8, ["timeframe", "strategy", "timerange", "pairlist", "trades", "freqai-model"])])) : y("", !0)])
            }
        }
    });
const Mt = z(Vt, [["__scopeId", "data-v-cbd01b9a"]]);
export {Mt as default};
//# sourceMappingURL=BacktestingView-469e4fd3.js.map
