(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [566],
  {
    1896: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 74999));
    },
    98838: function (e, t, r) {
      "use strict";
      var n = r(57437),
        a = r(83531),
        s = r(65516),
        l = r(51138),
        i = r(86158),
        o = r(16691),
        c = r.n(o),
        u = r(61396),
        d = r.n(u);
      t.Z = (e) => {
        let { item: t, tag: r } = e,
          o = new Date(t.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          u = "".concat(i.Z.BLOG, "/").concat(t.slug);
        return (0, n.jsxs)("div", {
          className: "flex flex-col gap-6 flex-1",
          children: [
            (0, n.jsx)(d(), {
              href: u,
              className:
                "relative aspect-video rounded-lg border border-black overflow-hidden hover:opacity-90",
              children:
                t.feature_image &&
                (0, n.jsx)(c(), {
                  className: "object-cover",
                  src: t.feature_image,
                  alt: t.title,
                  quality: "100",
                  fill: !0,
                  sizes:
                    "(min-width: 1440px) 33vw, (min-width: 768px) 50vw, 100vw",
                }),
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col justify-between gap-6 flex-grow",
              children: [
                (0, n.jsxs)("div", {
                  className: "space-y-3 text-black",
                  children: [
                    (0, n.jsx)(l.Z, {
                      tag: "span",
                      size: "xxs",
                      className: "block",
                      children: o,
                    }),
                    (0, n.jsx)(s.Z, {
                      tag: null != r ? r : "h3",
                      size: "h5",
                      children: t.title,
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(a.default, {
                    text: "Read Article",
                    href: u,
                    color: "green-dark",
                    className: "inline-block",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    99464: function (e, t, r) {
      "use strict";
      var n = r(57437),
        a = r(22169);
      t.Z = (e) => {
        let { children: t, className: r } = e;
        return (0, n.jsx)("div", {
          className: (0, a.cn)("grid md:grid-cols-2 xl:grid-cols-3 gap-8", r),
          children: t,
        });
      };
    },
    83531: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(57437),
        a = r(22169),
        s = r(61396),
        l = r.n(s);
      r(2265),
        (t.default = (e) => {
          let {
            text: t,
            external: r,
            href: s,
            className: i,
            color: o = "black",
            download: c,
          } = e;
          return (0, n.jsxs)(l(), {
            target: r ? "_blank" : "_self",
            href: s,
            download: c,
            className: (0, a.cn)(
              "relative  overflow-hidden inline-block group pt-0.5",
              {
                "pr-8": r,
                "text-black": "black" === o,
                "text-green": "green" === o,
                "text-green-dark": "green-dark" === o,
              },
              i
            ),
            children: [
              (0, n.jsx)("span", {
                className:
                  "font-formula text-sm font-semibold inline-block group-hover:-translate-y-0.5 transition-transform",
                children: t,
              }),
              r &&
                (0, n.jsx)("i", {
                  className:
                    "icon-arrow absolute right-0 bottom-1.5 text-lg group-hover:-translate-y-0.5 transition-transform",
                }),
              (0, n.jsx)("span", {
                className: (0, a.cn)(
                  "w-full h-0.5 absolute bottom-0 left-0 -translate-x-full transition-[transform]",
                  "group-hover:translate-x-0",
                  {
                    "bg-black": "black" === o,
                    "bg-green": "green" === o,
                    "bg-green-dark": "green-dark" === o,
                  }
                ),
              }),
            ],
          });
        });
    },
    59120: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(57437),
        a = r(22169);
      function s(e) {
        let { className: t, ...r } = e;
        return (0, n.jsx)("div", {
          className: (0, a.cn)(
            "animate-pulse rounded-md bg-slate-100 dark:bg-slate-800",
            t
          ),
          ...r,
        });
      }
      var l = () =>
        (0, n.jsxs)("div", {
          className: "flex flex-col gap-6 flex-1",
          children: [
            (0, n.jsx)(s, {
              className:
                "aspect-video rounded-lg border border-black bg-charcoal",
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col justify-between gap-6 flex-grow",
              children: [
                (0, n.jsxs)("div", {
                  className: "space-y-3 text-black",
                  children: [
                    (0, n.jsx)(s, {
                      className: "w-full h-[1rem] xl:h-[1.125rem] bg-charcoal",
                    }),
                    (0, n.jsx)(s, {
                      className:
                        "w-full h-[1.40625rem] lg:h-[1.71875rem] xl:h-[1.875rem] bg-charcoal",
                    }),
                  ],
                }),
                (0, n.jsx)(s, {
                  className: "w-full h-[2.0625rem] bg-charcoal",
                }),
              ],
            }),
          ],
        });
    },
    65516: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return i;
        },
      });
      var n = r(57437),
        a = r(5870),
        s = r(22169);
      r(2265);
      var l = r(4623);
      let i = (e) =>
          (0, a.bT)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } }),
        o = (0, l.tv)({
          variants: {
            size: {
              h1: i("h1"),
              h2: i("h2"),
              h3: i("h3"),
              h4: i("h4"),
              h5: i("h5"),
              h6: i("h6"),
              p: a.jT,
              span: a.jT,
            },
            color: { default: "", grey: "text-grey30" },
          },
        });
      t.Z = (e) => {
        let {
          tag: t = "span",
          size: r,
          color: a = "default",
          children: l,
          className: i,
        } = e;
        return (0, n.jsx)(t, {
          className: (0, s.cn)(o({ size: r, color: a }), i),
          children: l,
        });
      };
    },
    51138: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return l;
        },
      });
      var n = r(57437),
        a = r(5870),
        s = r(22169);
      let l = (e) =>
        (0, a.hh)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } });
      t.Z = (e) => {
        let { tag: t = "span", size: r, children: a, className: i } = e;
        return (0, n.jsx)(t, { className: (0, s.cn)(l(r), i), children: a });
      };
    },
    74999: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return m;
          },
        });
      var n = r(57437),
        a = r(99464),
        s = r(98838),
        l = r(59120),
        i = r(65516),
        o = r(7506),
        c = r(48012),
        u = r(2265),
        d = r(37636);
      let x = { some: 0, all: 1 };
      var f = r(59077);
      let g = new c.Z(o.Z.server.blog),
        h = Array(20).fill(0);
      var m = () => {
        let e = (0, u.useRef)(null),
          t = (function (
            e,
            { root: t, margin: r, amount: n, once: a = !1 } = {}
          ) {
            let [s, l] = (0, u.useState)(!1);
            return (
              (0, u.useEffect)(() => {
                if (!e.current || (a && s)) return;
                let i = {
                  root: (t && t.current) || void 0,
                  margin: r,
                  amount: n,
                };
                return (function (
                  e,
                  t,
                  { root: r, margin: n, amount: a = "some" } = {}
                ) {
                  let s = (0, d.I)(e),
                    l = new WeakMap(),
                    i = new IntersectionObserver(
                      (e) => {
                        e.forEach((e) => {
                          let r = l.get(e.target);
                          if (!!r !== e.isIntersecting) {
                            if (e.isIntersecting) {
                              let r = t(e);
                              "function" == typeof r
                                ? l.set(e.target, r)
                                : i.unobserve(e.target);
                            } else r && (r(e), l.delete(e.target));
                          }
                        });
                      },
                      {
                        root: r,
                        rootMargin: n,
                        threshold: "number" == typeof a ? a : x[a],
                      }
                    );
                  return s.forEach((e) => i.observe(e)), () => i.disconnect();
                })(e.current, () => (l(!0), a ? void 0 : () => l(!1)), i);
              }, [t, e, r, a, n]),
              s
            );
          })(e),
          {
            data: r,
            isFetching: o,
            fetchNextPage: c,
            hasNextPage: m,
            isFetchingNextPage: p,
          } = (0, f.useInfiniteQuery)({
            queryKey: ["news"],
            queryFn: (e) => {
              let { pageParam: t = 1 } = e;
              return g.posts.browse({
                limit: 20,
                page: t,
                fields: "id,title,slug,feature_image,published_at",
              });
            },
            getNextPageParam: (e) => e.meta.pagination.next,
          }),
          b = (0, u.useMemo)(() => {
            var e, t;
            return null !==
              (t =
                null == r
                  ? void 0
                  : null === (e = r.pages) || void 0 === e
                  ? void 0
                  : e.flatMap((e) => e)) && void 0 !== t
              ? t
              : [];
          }, [r]);
        return ((0, u.useEffect)(() => {
          t && m && !p && c();
        }, [t, m, c, p]),
        0 !== b.length || o)
          ? (0, n.jsxs)(a.Z, {
              className: "relative",
              children: [
                !r &&
                  o &&
                  h.map((e, t) => (0, n.jsx)(l.Z, {}, "skeleton-".concat(t))),
                b.map((e) =>
                  e.page ? null : (0, n.jsx)(s.Z, { tag: "h1", item: e }, e.id)
                ),
                (0, n.jsx)("span", {
                  className: "absolute top-[70%] invisible",
                  ref: e,
                }),
              ],
            })
          : (0, n.jsx)("div", {
              children: (0, n.jsx)(i.Z, {
                size: "h6",
                tag: "p",
                className: "text-center py-40",
                children: "No records found",
              }),
            });
      };
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
          return s;
        },
        Z: function () {
          return a;
        },
      });
      var n = r(7506);
      let a = {
          HOME: "/",
          DAPPS: "/aioz-dapps",
          IPFS: "https://w3ipfs.storage/",
          NODE_APP: "/aioz-node",
          WEB3_AI: "/w3ai",
          STORE: "/aioz-store",
          WEB3_STREAMING: "/w3stream",
          PRESS_KIT: "/press-kit",
          BLOG: "/blog",
          CONTACT: "/contact",
          DEVELOP: "/develop",
          ECOSYSTEM: "/ecosystem",
          DOCS: "https://mighty-2.gitbook.io/drive3ai-doc/",
          EXPLORER: "https://app-driver3-ai.vercel.app/",
          DEVELOPER: "https://developer.aioz.network/",
          W3S: "https://w3s.storage/",
          WALLET: "https://wallet.aioz.network/",
          BRIDGE: "https://bridge.aioz.network/",
        },
        s = (e) => "".concat(n.Z.server.cloud, "/").concat(e);
    },
    22169: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return s;
        },
      });
      var n = r(57042),
        a = r(74769);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.m6)((0, n.W)(t));
      }
    },
    5870: function (e, t, r) {
      "use strict";
      r.d(t, {
        bT: function () {
          return a;
        },
        hh: function () {
          return l;
        },
        jT: function () {
          return s;
        },
      });
      var n = r(4623);
      let a = (0, n.tv)(
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
        s =
          "font-formula text-base leading-[120%] font-extrabold tracking-[0.8px]",
        l = (0, n.tv)(
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
    37636: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return a;
        },
      });
      var n = r(46567);
      function a(e, t, r) {
        var a;
        if ("string" == typeof e) {
          let s = document;
          t &&
            ((0, n.k)(!!t.current, "Scope provided, but no element detected."),
            (s = t.current)),
            r
              ? ((null !== (a = r[e]) && void 0 !== a) ||
                  (r[e] = s.querySelectorAll(e)),
                (e = r[e]))
              : (e = s.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    46567: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return a;
        },
        k: function () {
          return s;
        },
      });
      var n = r(26977);
      let a = n.Z,
        s = n.Z;
    },
    26977: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (e) => e;
    },
  },
  function (e) {
    e.O(0, [895, 623, 250, 749, 77, 499, 971, 938, 744], function () {
      return e((e.s = 1896));
    }),
      (_N_E = e.O());
  },
]);
