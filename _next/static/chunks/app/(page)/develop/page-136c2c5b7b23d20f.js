(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [116],
  {
    93344: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 25250, 23)),
        Promise.resolve().then(r.bind(r, 82515)),
        Promise.resolve().then(r.bind(r, 62154)),
        Promise.resolve().then(r.bind(r, 85356));
    },
    99464: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(22169);
      t.Z = (e) => {
        let { children: t, className: r } = e;
        return (0, n.jsx)("div", {
          className: (0, s.cn)("grid md:grid-cols-2 xl:grid-cols-3 gap-8", r),
          children: t,
        });
      };
    },
    87925: function (e, t, r) {
      "use strict";
      var n = r(57437),
        s = r(65516),
        l = r(51138),
        a = r(22169);
      t.Z = (e) => {
        let {
          children: t,
          className: r,
          id: i,
          title: o,
          desc: c,
          full: d,
          fullDesc: u = !1,
          headingTag: h = "h2",
        } = e;
        return (0, n.jsx)("section", {
          id: i,
          className: (0, a.cn)("py-[4.5rem] md:py-24 xl:py-32", r),
          children: (0, n.jsx)("div", {
            className: (0, a.cn)({ container: !d }),
            children: (0, n.jsxs)("div", {
              className: "space-y-8 md:space-y-10 px-4",
              children: [
                (o || c) &&
                  (0, n.jsxs)("div", {
                    className: "space-y-6 text-center",
                    children: [
                      o && (0, n.jsx)(s.Z, { tag: h, size: "h3", children: o }),
                      c &&
                        (0, n.jsx)(l.Z, {
                          tag: "p",
                          size: "lg",
                          className: (0, a.cn)("mx-auto", u ? "" : "max-w-md"),
                          children: c,
                        }),
                    ],
                  }),
                t,
              ],
            }),
          }),
        });
      };
    },
    65516: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return i;
        },
      });
      var n = r(57437),
        s = r(5870),
        l = r(22169);
      r(2265);
      var a = r(4623);
      let i = (e) =>
          (0, s.bT)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } }),
        o = (0, a.tv)({
          variants: {
            size: {
              h1: i("h1"),
              h2: i("h2"),
              h3: i("h3"),
              h4: i("h4"),
              h5: i("h5"),
              h6: i("h6"),
              p: s.jT,
              span: s.jT,
            },
            color: { default: "", grey: "text-grey30" },
          },
        });
      t.Z = (e) => {
        let {
          tag: t = "span",
          size: r,
          color: s = "default",
          children: a,
          className: i,
        } = e;
        return (0, n.jsx)(t, {
          className: (0, l.cn)(o({ size: r, color: s }), i),
          children: a,
        });
      };
    },
    51138: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return a;
        },
      });
      var n = r(57437),
        s = r(5870),
        l = r(22169);
      let a = (e) =>
        (0, s.hh)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } });
      t.Z = (e) => {
        let { tag: t = "span", size: r, children: s, className: i } = e;
        return (0, n.jsx)(t, { className: (0, l.cn)(a(r), i), children: s });
      };
    },
    82515: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(86158),
        l = r(22169);
      t.default = (e) => {
        let { src: t, webm: r, className: a, poster: i, style: o } = e;
        return (0, n.jsxs)("video", {
          style: o,
          className: (0, l.cn)("w-full pointer-events-none", a),
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          children: [
            t &&
              (0, n.jsx)("source", {
                src: (0, s.$)(t),
                type: 'video/mp4; codecs="hvc1"',
              }),
            r && (0, n.jsx)("source", { src: (0, s.$)(r), type: "video/webm" }),
          ],
        });
      };
    },
    62154: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return d;
          },
        });
      var n = r(57437),
        s = r(2265),
        l = r(67256),
        a = r(39213),
        i = r(22169);
      let o = (0, a.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
          {
            variants: {
              variant: {
                default:
                  "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
                destructive:
                  "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
                outline:
                  "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                secondary:
                  "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
                ghost:
                  "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = s.forwardRef((e, t) => {
          let { className: r, variant: s, size: a, asChild: c = !1, ...d } = e,
            u = c ? l.g7 : "button";
          return (0, n.jsx)(u, {
            className: (0, i.cn)(o({ variant: s, size: a, className: r })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
      var d = (e) => {
        let { src: t, webm: r, className: l, poster: a } = e,
          [o, d] = (0, s.useState)(!1),
          u = (0, s.useRef)(null),
          h = () => {
            u.current &&
              (o ? (u.current.pause(), d(!1)) : (u.current.play(), d(!0)));
          };
        return (
          (0, s.useEffect)(() => {
            u.current &&
              (u.current.addEventListener("play", (e) => {
                d(!0);
              }),
              u.current.addEventListener("pause", (e) => {
                d(!1);
              }));
          }, []),
          (0, n.jsxs)("div", {
            className: "aspect-video relative",
            children: [
              (0, n.jsxs)("video", {
                onClick: h,
                ref: u,
                poster: a,
                playsInline: !0,
                className: (0, i.cn)(
                  "w-full h-full cursor-pointer block object-cover"
                ),
                children: [
                  t &&
                    (0, n.jsx)("source", {
                      src: t,
                      type: 'video/mp4; codecs="hvc1"',
                    }),
                  r && (0, n.jsx)("source", { src: r, type: "video/webm" }),
                ],
              }),
              (0, n.jsx)("div", {
                onClick: h,
                className: (0, i.cn)(
                  "absolute inset-0 bg-black/30 group hover:bg-transparent cursor-pointer transition-[background]",
                  { hidden: o }
                ),
                children: (0, n.jsx)(c, {
                  type: "button",
                  variant: "ghost",
                  className: (0, i.cn)(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black group-hover:bg-white overflow-hidden"
                  ),
                  children: (0, n.jsx)("i", {
                    className: "icon-play text-white group-hover:text-black",
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    85356: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        s = r(99464),
        l = r(87925),
        a = r(65516),
        i = r(51138),
        o = r(22169),
        c = r(61396),
        d = r.n(c);
      r(2265);
      let u = [
        {
          title: "An Introduction to Drive3AI Network",
          desc: "Understand Drive3AI Network - Web3 Infrastructure for AI, Storage and Streaming.",
          href: "https://doc.drive3ai.org/overview/introduction",
        },
        {
          title: "Drive3AI Blockchain Overview",
          desc: "Explore architecture of Drive3AI Network: a Cosmos-based blockchain with EVM-compatibility.",
          href: "https://doc.drive3ai.org/aioz-blockchain/overview",
        },
        {
          title: "Drive3AI DePIN Overview",
          desc: "Learn to integrate with Drive3AI DePIN for tailored project solutions.",
          href: "https://doc.drive3ai.org/aioz-depin/overview",
        },
      ];
      t.default = () =>
        (0, n.jsx)(l.Z, {
          title: "Introduction",
          className: "!pt-0 !pb-10",
          children: (0, n.jsxs)("div", {
            className: "space-y-10",
            children: [
              (0, n.jsx)(a.Z, {
                size: "h6",
                tag: "h3",
                children: "Developers Knowledge",
              }),
              (0, n.jsx)(s.Z, {
                children: u.map((e, t) =>
                  (0, n.jsx)(
                    d(),
                    {
                      href: e.href,
                      target: "_blank",
                      children: (0, n.jsxs)(
                        "div",
                        {
                          className: (0, o.cn)(
                            "p-8 border border-black space-y-4 rounded-lg",
                            "group cursor-pointer hover:bg-black hover:text-white"
                          ),
                          children: [
                            (0, n.jsxs)(a.Z, {
                              size: "h4",
                              tag: "span",
                              className: "pr-12 relative block",
                              children: [
                                e.title,
                                (0, n.jsx)("i", {
                                  className: (0, o.cn)(
                                    "icon-arrow-thin absolute right-0 top-1.5 text-lg",
                                    "group-hover:text-green group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                                  ),
                                }),
                              ],
                            }),
                            (0, n.jsx)(i.Z, {
                              size: "md",
                              tag: "p",
                              children: e.desc,
                            }),
                          ],
                        },
                        "introduction-".concat(t)
                      ),
                    },
                    "introduction-link-".concat(t)
                  )
                ),
              }),
            ],
          }),
        });
    },
    7506: function (e, t) {
      "use strict";
      t.Z = {
        server: {
          hub: "https://delivery-main-hub.aioz.network",
          do: "https://dl.app-downloads.aioz.network",
          cloud: "https://content.aioz.network/aioz",
          explorer: "https://api-explorer.aioz.network",
          blog: {
            key: "436db719328cfbda81858fb328",
            url: "https://blog.aioz.network",
            version: "v5.0",
          },
        },
      };
    },
    86158: function (e, t, r) {
      "use strict";
      r.d(t, {
        $: function () {
          return l;
        },
        Z: function () {
          return s;
        },
      });
      var n = r(7506);
      let s = {
          HOME: "/",
          DAPPS: "/aioz-dapps",
          IPFS: "https://w3ipfs.storage/",
          NODE_APP: "/node",
          WEB3_AI: "/w3ai",
          STORE: "/aioz-store",
          WEB3_STREAMING: "/w3stream",
          PRESS_KIT: "/press-kit",
          BLOG: "/blog",
          CONTACT: "/contact",
          DEVELOP: "/develop",
          ECOSYSTEM: "/ecosystem",
          DOCS: "https://doc.drive3ai.org/",
          EXPLORER: "https://app.drive3ai.org/",
          DEVELOPER: "https://developer.aioz.network/",
          W3S: "https://w3s.storage/",
          WALLET: "https://wallet.aioz.network/",
          BRIDGE: "https://bridge.aioz.network/",
        },
        l = (e) => "".concat(n.Z.server.cloud, "/").concat(e);
    },
    22169: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return l;
        },
      });
      var n = r(57042),
        s = r(74769);
      function l() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.m6)((0, n.W)(t));
      }
    },
    5870: function (e, t, r) {
      "use strict";
      r.d(t, {
        bT: function () {
          return s;
        },
        hh: function () {
          return a;
        },
        jT: function () {
          return l;
        },
      });
      var n = r(4623);
      let s = (0, n.tv)(
          {
            base: "font-formula font-medium",
            variants: {
              mobile: {
                h1: "text-[2.5rem] leading-[120%]",
                h2: "text-[1.75rem] leading-[140%]",
                h3: "text-[1.625rem] leading-[130%] tracking-[0.26px]",
                h4: "text-[1.375rem] leading-[140%] tracking-[0.22px]",
                h5: "text-lg leading-[125%]",
                h6: "text-base leading-[120%]",
              },
              tablet: {
                h1: "text-[2.75rem]",
                h2: "text-[2.25rem]",
                h3: "text-[1.75rem]",
                h4: "text-[1.625rem]",
                h5: "text-[1.375rem]",
                h6: "text-[1.125rem]",
              },
              desktop: {
                h1: "text-[3rem] tracking-[1px]",
                h2: "text-[2.5rem] tracking-[0.5px]",
                h3: "text-[2rem]",
                h4: "text-[1.75rem]",
                h5: "text-[1.5rem]",
                h6: "text-[1.25rem]",
              },
            },
          },
          { responsiveVariants: ["lg", "xl"] }
        ),
        l =
          "font-formula text-base leading-[120%] font-extrabold tracking-[0.8px]",
        a = (0, n.tv)(
          {
            base: "font-neue",
            variants: {
              mobile: {
                lg: "text-lg leading-[130%] tracking-[0.18px]",
                md: "text-lg leading-[145%] tracking-[0.18px]",
                sm: "text-base leading-[130%] tracking-[0.16px]",
                xs: "text-[0.9375rem] leading-[130%] tracking-[0.15px] font-medium",
                xxs: "text-sm leading-[130%]",
              },
              tablet: {
                lg: "text-xl tracking-[0.2px]",
                md: "text-lg tracking-[0.18px]",
                sm: "text-[1.0625rem]",
                xs: "",
                xxs: "",
              },
              desktop: {
                lg: "text-[1.375rem]",
                md: "text-[1.1875rem]",
                sm: "text-lg",
                xs: "",
                xxs: "",
              },
            },
          },
          { responsiveVariants: ["lg", "xl"] }
        );
    },
    61396: function (e, t, r) {
      e.exports = r(25250);
    },
    13428: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    42210: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return s;
        },
        e: function () {
          return l;
        },
      });
      var n = r(2265);
      function s(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function l(...e) {
        return (0, n.useCallback)(s(...e), e);
      }
    },
    67256: function (e, t, r) {
      "use strict";
      r.d(t, {
        g7: function () {
          return a;
        },
      });
      var n = r(13428),
        s = r(2265),
        l = r(42210);
      let a = (0, s.forwardRef)((e, t) => {
        let { children: r, ...l } = e,
          a = s.Children.toArray(r),
          o = a.find(c);
        if (o) {
          let e = o.props.children,
            r = a.map((t) =>
              t !== o
                ? t
                : s.Children.count(e) > 1
                ? s.Children.only(null)
                : (0, s.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, s.createElement)(
            i,
            (0, n.Z)({}, l, { ref: t }),
            (0, s.isValidElement)(e) ? (0, s.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, s.createElement)(i, (0, n.Z)({}, l, { ref: t }), r);
      });
      a.displayName = "Slot";
      let i = (0, s.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, s.isValidElement)(r)
          ? (0, s.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let s = e[n],
                    l = t[n];
                  /^on[A-Z]/.test(n)
                    ? s && l
                      ? (r[n] = (...e) => {
                          l(...e), s(...e);
                        })
                      : s && (r[n] = s)
                    : "style" === n
                    ? (r[n] = { ...s, ...l })
                    : "className" === n &&
                      (r[n] = [s, l].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? (0, l.F)(t, r.ref) : r.ref,
            })
          : s.Children.count(r) > 1
          ? s.Children.only(null)
          : null;
      });
      i.displayName = "SlotClone";
      let o = ({ children: e }) => (0, s.createElement)(s.Fragment, null, e);
      function c(e) {
        return (0, s.isValidElement)(e) && e.type === o;
      }
    },
    39213: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return l;
        },
      });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        s = function () {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  s = "";
                if ("string" == typeof t || "number" == typeof t) s += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++)
                      t[r] && (n = e(t[r])) && (s && (s += " "), (s += n));
                  else for (r in t) t[r] && (s && (s += " "), (s += r));
                }
                return s;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        l = (e, t) => (r) => {
          var l;
          if ((null == t ? void 0 : t.variants) == null)
            return s(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: a, defaultVariants: i } = t,
            o = Object.keys(a).map((e) => {
              let t = null == r ? void 0 : r[e],
                s = null == i ? void 0 : i[e];
              if (null === t) return null;
              let l = n(t) || n(s);
              return a[e][l];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return s(
            e,
            o,
            null == t
              ? void 0
              : null === (l = t.compoundVariants) || void 0 === l
              ? void 0
              : l.reduce((e, t) => {
                  let { class: r, className: n, ...s } = t;
                  return Object.entries(s).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...i, ...c }[t])
                      : { ...i, ...c }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
  },
  function (e) {
    e.O(0, [895, 623, 250, 971, 938, 744], function () {
      return e((e.s = 93344));
    }),
      (_N_E = e.O());
  },
]);
