"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [844],
  {
    32585: function (e, t, a) {
      a.r(t),
        a.d(t, {
          MultiSubTitle: function () {
            return v;
          },
          SubTitle: function () {
            return b;
          },
          default: function () {
            return g;
          },
        });
      var n = a(57437),
        r = a(22169),
        s = a(24033),
        l = a(2265);
      let o = (0, a(4623).tv)(
        {
          slots: {
            base: "group flex flex-row items-center gap-4 rounded-full border transition duration-300 justify-center md:justify-start px-10 py-[0.875rem]",
            icon: "text-2xl transition-colors duration-300",
            text: "block pt-1 font-formula font-bold text-[1rem] leading-6 whitespace-nowrap transition duration-300",
          },
          variants: {
            size: {
              tablet: { base: "py-[1.1875rem]", text: "text-[1.125rem]" },
              desktop: { base: "" },
            },
            color: {
              black: {
                base: "border-black hover:bg-black hover:text-white",
                icon: "text-black group-hover:text-white",
                text: "text-black group-hover:text-white",
              },
              "black-inverse": {
                base: "bg-black border-black hover:bg-white hover:text-black hover:border-white",
                icon: "text-white group-hover:text-black",
                text: "text-white group-hover:text-black",
              },
              white: {
                base: "border-white hover:bg-white hover:text-black",
                icon: "text-white group-hover:text-black",
                text: "text-white group-hover:text-black",
              },
            },
          },
          defaultVariants: { color: "black" },
        },
        { responsiveVariants: ["md", "xl"] }
      );
      function i(e) {
        let {
            children: t,
            icons: a,
            color: l,
            className: i,
            textClassName: c,
            href: d,
            external: x,
            ...p
          } = e,
          m = (0, s.useRouter)(),
          {
            base: u,
            icon: h,
            text: b,
          } = o({ color: l, size: { md: "tablet", xl: "desktop" } }),
          v = () => {
            d && (x ? window.open(d, "_blank") : m.push(d));
          };
        return (0, n.jsxs)("button", {
          onClick: () => v(),
          className: (0, r.cn)(u(), i),
          ...p,
          children: [
            (null == a ? void 0 : a.pre) &&
              (0, n.jsx)("i", { className: "".concat(h(), " ").concat(a.pre) }),
            (0, n.jsx)("span", { className: (0, r.cn)(b(), c), children: t }),
            (null == a ? void 0 : a.post) &&
              (0, n.jsx)("i", {
                className: "".concat(h(), " ").concat(a.post),
              }),
          ],
        });
      }
      var c = a(65516),
        d = a(51138),
        x = a(32393),
        p = a(74052),
        m = a(5100);
      let u = () =>
          (0, n.jsx)("img", {
            className: "max-w-[36.25rem]",
            src:"/images/mainlogo.png"
          }),
        h = {
          white: "text-white",
          green: "text-green-dark",
          black: "text-black",
        },
        b = (e) => {
          let { subTitle: t } = e;
          return Array.isArray(t)
            ? (0, n.jsx)(v, { subTitle: t })
            : (0, n.jsx)("span", {
                className: (0, r.cn)(h[t.color]),
                children: t.content,
              });
        },
        v = (e) => {
          let { subTitle: t } = e,
            [a, s] = (0, x.H)();
          return (
            (0, l.useEffect)(() => {
              let e;
              let n = 0,
                r = 0,
                l = (o) => {
                  var i, c;
                  let d = r <= 0 ? t.length - 1 : r - 1,
                    x = ":scope > span:nth-child(".concat(r + 1, ")"),
                    p =
                      null === (i = a.current) || void 0 === i
                        ? void 0
                        : i.querySelector(x);
                  p && (p.style.transformOrigin = "0% 100%");
                  let m = [
                    [
                      x,
                      { opacity: [0, 1], y: ["0%", "-100%"], rotate: [20, 0] },
                      { at: "<" },
                    ],
                  ];
                  if (!o) {
                    let e = ".anime-scope > span:nth-child(".concat(d + 1, ")"),
                      t =
                        null === (c = a.current) || void 0 === c
                          ? void 0
                          : c.querySelector(e);
                    t && (t.style.transformOrigin = "100% 100%"),
                      m.unshift([
                        e,
                        {
                          opacity: [1, 0],
                          y: ["-100%", "-200%"],
                          rotate: [0, 20],
                        },
                        { at: "<" },
                      ]);
                  }
                  (e = s(m, {
                    defaultTransition: {
                      type: "tween",
                      ease: "linear",
                      duration: 0.5,
                    },
                  })),
                    (n = window.setTimeout(() => {
                      (r = r >= t.length - 1 ? 0 : r + 1), l();
                    }, 5500));
                };
              return (
                l(!0),
                () => {
                  null == e || e.stop(), window.clearTimeout(n);
                }
              );
            }, [t, s, a]),
            (0, n.jsx)("span", {
              className:
                "anime-scope block h-[calc(1em*1.2)] overflow-hidden relative",
              ref: a,
              children: t.map((e, t) =>
                (0, n.jsx)(
                  p.E.span,
                  {
                    className: (0, r.cn)(
                      "[&>span]:inline-block",
                      "block absolute top-full left-0 whitespace-nowrap text-[2rem] lg:text-[2.75rem] xl:text-[3rem]",
                      h[e.color]
                    ),
                    children: e.content,
                  },
                  t
                )
              ),
            })
          );
        };
      var g = (e) => {
        let {
          logo: t,
          title: a,
          subTitle: s,
          description: l,
          primary: o,
          secondary: x,
          className: p,
          children: h,
          descClassName: v,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, r.cn)("flex flex-col gap-8 md:gap-12", p),
          children: [
            t && (0, n.jsx)(u, {}),
            (0, n.jsxs)("div", {
              className: "space-y-4 md:space-y-6",
              children: [
                (0, n.jsxs)(c.Z, {
                  size: "h1",
                  tag: "h1",
                  className: "max-w-none sm:max-w-[70%] lg:max-w-none",
                  children: [
                    (0, n.jsx)("span", { children: a }),
                    " ",
                    (0, n.jsx)("br", { className: "hidden lg:block" }),
                    s && (0, n.jsx)(b, { subTitle: s }),
                  ],
                }),
                (0, n.jsx)(d.Z, {
                  size: "lg",
                  tag: "p",
                  className: (0, r.cn)("max-w-sm", v),
                  children: l,
                }),
              ],
            }),
            (o || x) &&
              (0, n.jsxs)("div", {
                className: "flex items-center flex-wrap gap-6",
                children: [
                  o &&
                    (0, n.jsx)(m.default, {
                      className: "w-full sm:w-auto",
                      href: o.href,
                      external: o.external,
                      download: o.download,
                      name: o.name,
                      children: o.text,
                    }),
                  x &&
                    (0, n.jsx)(i, {
                      className: "w-full sm:w-auto",
                      color: x.color,
                      href: x.href,
                      icons: { post: x.icon },
                      external: x.external,
                      children: x.text,
                    }),
                ],
              }),
            h,
          ],
        });
      };
    },
    42587: function (e, t, a) {
      a.r(t);
      var n = a(57437),
        r = a(86158),
        s = a(22169),
        l = a(2265),
        o = a(63739);
      t.default = (e) => {
        let {
            isHome: t,
            video: { sm: a, xs: i, md: c, lg: d, xxl: x },
            children: p,
            nodeStatsChidren: m,
            className: u,
            innerClassName: h,
            fullWidth: b,
          } = e,
          v = (0, o.ac)("(max-width: 767px)"),
          [g, f] = (0, l.useState)({ clipPath: "" }),
          w = () =>
            (0, n.jsxs)("video", {
              playsInline: !0,
              className: (0, s.cn)(
                "hero-video",
                "pointer-events-none absolute left-0 top-0 -translate-y-[8%] sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-0 w-[calc(100%+2px)] md:h-[calc(100%+2px)] object-cover",
                "",
                { "md:translate-x-32 xl:translate-x-20 2xl:translate-x-0": t }
              ),
              style: g,
              muted: !0,
              autoPlay: !0,
              loop: !0,
              children: [
                x &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("source", {
                        src: (0, r.$)(x.mp4),
                        type: 'video/mp4; codecs="hvc1"',
                        media: "(min-width:1920px)",
                      }),
                      (0, n.jsx)("source", {
                        src: (0, r.$)(x.webm),
                        type: "video/webm",
                        media: "(min-width:1920px)",
                      }),
                    ],
                  }),
                d &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("source", {
                        src: (0, r.$)(d.mp4),
                        type: 'video/mp4; codecs="hvc1"',
                        media: "(min-width:1600px)",
                      }),
                      (0, n.jsx)("source", {
                        src: (0, r.$)(d.webm),
                        type: "video/webm",
                        media: "(min-width:1600px)",
                      }),
                    ],
                  }),
                c &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("source", {
                        src: (0, r.$)(c.mp4),
                        type: 'video/mp4; codecs="hvc1"',
                        media: "(min-width:1280px)",
                      }),
                      (0, n.jsx)("source", {
                        src: (0, r.$)(c.webm),
                        type: "video/webm",
                        media: "(min-width:1280px)",
                      }),
                    ],
                  }),
                a &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("source", {
                        src: (0, r.$)(a.mp4),
                        type: 'video/mp4; codecs="hvc1"',
                        media: "(min-width:768px)",
                      }),
                      (0, n.jsx)("source", {
                        src: (0, r.$)(a.webm),
                        type: "video/webm",
                        media: "(min-width:768px)",
                      }),
                    ],
                  }),
                (0, n.jsx)("source", {
                  src: (0, r.$)(i.mp4),
                  type: 'video/mp4; codecs="hvc1"',
                }),
                (0, n.jsx)("source", {
                  src: (0, r.$)(i.webm),
                  type: "video/webm",
                }),
              ],
            });
        return (
          (0, l.useEffect)(() => {
            f({
              clipPath: v
                ? "polygon(0% 0%, 100% 0%, 100% calc(100% - 2px), 0% calc(100% - 2px))"
                : b
                ? void 0
                : "inset(1px)",
            });
          }, [v, b, f]),
          (0, n.jsxs)("section", {
            className: (0, s.cn)("relative overflow-hidden", u),
            children: [
              b ? (0, n.jsx)(w, {}) : null,
              (0, n.jsxs)("div", {
                className: "container relative",
                children: [
                  b ? null : (0, n.jsx)(w, {}),
                  (0, n.jsx)("div", {
                    className: (0, s.cn)(
                      "relative z-10 flex items-end md:items-center md:aspect-video pb-[4.5rem] md:pb-0 min-h-[60rem] xl:min-h-screen md:pt-20 max-w-full",
                      h
                    ),
                    children: p,
                  }),
                  m,
                ],
              }),
            ],
          })
        );
      };
    },
    5100: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var n = a(57437),
        r = a(22169),
        s = a(74052),
        l = a(24033),
        o = a(2265),
        i = a(4623);
      let c = {
          bg: {
            start: { y: "-50%", top: "50%" },
            end: { y: "-100%", top: 0, transitionEnd: { y: 0, top: "100%" } },
          },
          text: {
            start: { y: "-100%" },
            end: { y: "-200%", transitionEnd: { y: 0 } },
          },
          transition: { ease: "easeInOut", duration: 0.3 },
        },
        d = (0, i.tv)({
          base: "group relative overflow-hidden rounded-full",
          variants: {
            color: { black: "bg-green", white: "bg-green", green: "bg-black" },
          },
          defaultVariants: { color: "black" },
        }),
        x = (0, i.tv)({
          base: "text-2xl transition-colors duration-300",
          variants: {
            color: {
              black: "text-black group-hover:text-green",
              white: "text-black",
              green: "text-green group-hover:text-black",
            },
          },
          defaultVariants: { color: "black" },
        }),
        p = (0, i.tv)(
          {
            base: "font-formula relative block text-[1rem] font-bold leading-[1.375rem]",
            variants: {
              color: {
                black: "text-black",
                white: "text-black",
                green: "text-green",
              },
              size: { tablet: "text-[1.125rem]", desktop: "leading-7" },
            },
            defaultVariants: { color: "black" },
          },
          { responsiveVariants: ["md", "xl"] }
        ),
        m = (0, i.tv)({
          base: "item-center absolute left-0 transition duration-300",
          variants: {
            color: {
              black: "text-black group-hover:text-green",
              white: "text-black",
              green: "text-green group-hover:text-black",
            },
          },
          defaultVariants: { color: "black" },
        });
      function u(e) {
        let {
            size: t = "default",
            color: a = "black",
            icons: i,
            href: u,
            className: h,
            external: b,
            download: v,
            name: g,
            children: f,
            ...w
          } = e,
          k = (0, l.useRouter)(),
          [j, y] = (0, o.useState)("initial"),
          C = d({ color: a }),
          N = p({ color: a, size: { md: "tablet", xl: "desktop" } }),
          E = m({ color: a, class: "top-[100%] pt-1" }),
          z = m({ color: a, class: "top-[200%] pt-1" });
        return (0, n.jsxs)(s.E.button, {
          onHoverStart: () => y("start"),
          onHoverEnd: () => y("end"),
          animate: j,
          className: (0, r.cn)(
            {
              "px-10 py-4 md:py-[1.125rem]": "default" === t,
              "px-6 py-2": "sm" === t,
            },
            C,
            h
          ),
          onClick: () => {
            v
              ? (window.location.href = "/api/download?name="
                  .concat(g, "&url=")
                  .concat(encodeURIComponent(window.location.origin + u)))
              : u &&
                (b || u.startsWith("http")
                  ? window.open(u, "_blank")
                  : k.push(u));
          },
          ...w,
          children: [
            (0, n.jsx)(s.E.span, {
              initial: {
                backgroundColor: "".concat("green" === a ? "#35D687" : a),
              },
              variants: c.bg,
              transition: c.transition,
              className: (0, r.cn)(
                "absolute left-0 top-full h-[12.5rem] w-full rounded-full"
              ),
            }),
            (0, n.jsxs)("span", {
              className:
                "relative flex flex-row items-center justify-center gap-4 overflow-hidden md:justify-start",
              children: [
                (null == i ? void 0 : i.pre) &&
                  (0, n.jsx)("i", {
                    className: "".concat(i.pre, " ").concat(x({ color: a })),
                  }),
                (0, n.jsxs)(s.E.span, {
                  className: N,
                  variants: c.text,
                  transition: c.transition,
                  children: [
                    (0, n.jsx)("span", {
                      className: "inline-block whitespace-nowrap pt-1",
                      children: f,
                    }),
                    (0, n.jsx)("span", {
                      className: E,
                      "aria-hidden": "true",
                      children: f,
                    }),
                    (0, n.jsx)("span", {
                      className: z,
                      "aria-hidden": "true",
                      children: f,
                    }),
                  ],
                }),
                (null == i ? void 0 : i.post) &&
                  (0, n.jsx)("i", {
                    className: "".concat(i.post, " ").concat(x({ color: a })),
                  }),
              ],
            }),
          ],
        });
      }
    },
    65516: function (e, t, a) {
      a.d(t, {
        u: function () {
          return o;
        },
      });
      var n = a(57437),
        r = a(5870),
        s = a(22169);
      a(2265);
      var l = a(4623);
      let o = (e) =>
          (0, r.bT)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } }),
        i = (0, l.tv)({
          variants: {
            size: {
              h1: o("h1"),
              h2: o("h2"),
              h3: o("h3"),
              h4: o("h4"),
              h5: o("h5"),
              h6: o("h6"),
              p: r.jT,
              span: r.jT,
            },
            color: { default: "", grey: "text-grey30" },
          },
        });
      t.Z = (e) => {
        let {
          tag: t = "span",
          size: a,
          color: r = "default",
          children: l,
          className: o,
        } = e;
        return (0, n.jsx)(t, {
          className: (0, s.cn)(i({ size: a, color: r }), o),
          children: l,
        });
      };
    },
    51138: function (e, t, a) {
      a.d(t, {
        r: function () {
          return l;
        },
      });
      var n = a(57437),
        r = a(5870),
        s = a(22169);
      let l = (e) =>
        (0, r.hh)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } });
      t.Z = (e) => {
        let { tag: t = "span", size: a, children: r, className: o } = e;
        return (0, n.jsx)(t, { className: (0, s.cn)(l(a), o), children: r });
      };
    },
    7506: function (e, t) {
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
    86158: function (e, t, a) {
      a.d(t, {
        $: function () {
          return s;
        },
        Z: function () {
          return r;
        },
      });
      var n = a(7506);
      let r = {
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
          DOCS: "https://docs.aioz.network/",
          EXPLORER: "https://app-driver3-ai.vercel.app/",
          DEVELOPER: "https://developer.aioz.network/",
          W3S: "https://w3s.storage/",
          WALLET: "https://wallet.aioz.network/",
          BRIDGE: "https://bridge.aioz.network/",
        },
        s = (e) => "".concat(n.Z.server.cloud, "/").concat(e);
    },
    22169: function (e, t, a) {
      a.d(t, {
        cn: function () {
          return s;
        },
      });
      var n = a(57042),
        r = a(74769);
      function s() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.m6)((0, n.W)(t));
      }
    },
    5870: function (e, t, a) {
      a.d(t, {
        bT: function () {
          return r;
        },
        hh: function () {
          return l;
        },
        jT: function () {
          return s;
        },
      });
      var n = a(4623);
      let r = (0, n.tv)(
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
  },
]);
