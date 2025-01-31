(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [548],
  {
    49989: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 81749, 23)),
        Promise.resolve().then(a.bind(a, 5409)),
        Promise.resolve().then(a.bind(a, 23945)),
        Promise.resolve().then(a.bind(a, 96178)),
        Promise.resolve().then(a.bind(a, 36282));
    },
    5100: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return f;
          },
        });
      var s = a(57437),
        l = a(22169),
        r = a(74052),
        i = a(24033),
        n = a(2265),
        o = a(4623);
      let d = {
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
        c = (0, o.tv)({
          base: "group relative overflow-hidden rounded-full",
          variants: {
            color: { black: "bg-green", white: "bg-green", green: "bg-black" },
          },
          defaultVariants: { color: "black" },
        }),
        m = (0, o.tv)({
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
        x = (0, o.tv)(
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
        u = (0, o.tv)({
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
      function f(e) {
        let {
            size: t = "default",
            color: a = "black",
            icons: o,
            href: f,
            className: h,
            external: p,
            download: b,
            name: g,
            children: v,
            ...j
          } = e,
          w = (0, i.useRouter)(),
          [N, k] = (0, n.useState)("initial"),
          y = c({ color: a }),
          E = x({ color: a, size: { md: "tablet", xl: "desktop" } }),
          S = u({ color: a, class: "top-[100%] pt-1" }),
          Z = u({ color: a, class: "top-[200%] pt-1" });
        return (0, s.jsxs)(r.E.button, {
          onHoverStart: () => k("start"),
          onHoverEnd: () => k("end"),
          animate: N,
          className: (0, l.cn)(
            {
              "px-10 py-4 md:py-[1.125rem]": "default" === t,
              "px-6 py-2": "sm" === t,
            },
            y,
            h
          ),
          onClick: () => {
            b
              ? (window.location.href = "/api/download?name="
                  .concat(g, "&url=")
                  .concat(encodeURIComponent(window.location.origin + f)))
              : f &&
                (p || f.startsWith("http")
                  ? window.open(f, "_blank")
                  : w.push(f));
          },
          ...j,
          children: [
            (0, s.jsx)(r.E.span, {
              initial: {
                backgroundColor: "".concat("green" === a ? "#35D687" : a),
              },
              variants: d.bg,
              transition: d.transition,
              className: (0, l.cn)(
                "absolute left-0 top-full h-[12.5rem] w-full rounded-full"
              ),
            }),
            (0, s.jsxs)("span", {
              className:
                "relative flex flex-row items-center justify-center gap-4 overflow-hidden md:justify-start",
              children: [
                (null == o ? void 0 : o.pre) &&
                  (0, s.jsx)("i", {
                    className: "".concat(o.pre, " ").concat(m({ color: a })),
                  }),
                (0, s.jsxs)(r.E.span, {
                  className: E,
                  variants: d.text,
                  transition: d.transition,
                  children: [
                    (0, s.jsx)("span", {
                      className: "inline-block whitespace-nowrap pt-1",
                      children: v,
                    }),
                    (0, s.jsx)("span", {
                      className: S,
                      "aria-hidden": "true",
                      children: v,
                    }),
                    (0, s.jsx)("span", {
                      className: Z,
                      "aria-hidden": "true",
                      children: v,
                    }),
                  ],
                }),
                (null == o ? void 0 : o.post) &&
                  (0, s.jsx)("i", {
                    className: "".concat(o.post, " ").concat(m({ color: a })),
                  }),
              ],
            }),
          ],
        });
      }
    },
    16886: function (e, t, a) {
      "use strict";
      var s = a(57437),
        l = a(51138),
        r = a(22169),
        i = a(61396),
        n = a.n(i);
      let o = (0, a(2265).forwardRef)((e, t) => {
        let {
          item: { title: a, desc: i, href: o, external: d, disabled: c },
          modifier: m,
          ...x
        } = e;
        return (0, s.jsxs)(n(), {
          ...x,
          ref: t,
          "aria-disabled": c,
          href: o,
          className: (0, r.cn)(
            "relative group flex flex-col px-6 py-4 text-black transition duration-300 lg:hover:bg-charcoal lg:hover:text-white md:p-6 outline-none",
            { "!opacity-60 !pointer-events-none": c },
            m
          ),
          target: d ? "_blank" : "_self",
          children: [
            (0, s.jsx)("span", {
              className:
                "font-formula text-base leading-[1.375em] font-extrabold tracking-[0.01em]",
              children: a,
            }),
            i && (0, s.jsx)(l.Z, { size: "xxs", children: i }),
            d &&
              (0, s.jsx)("i", {
                className:
                  "icon-arrow transtion-[top,right] absolute right-6 top-6 text-lg duration-300 group-hover:right-5 group-hover:top-5",
              }),
          ],
        });
      });
      (o.displayName = "NavItem"), (t.Z = o);
    },
    65516: function (e, t, a) {
      "use strict";
      a.d(t, {
        u: function () {
          return n;
        },
      });
      var s = a(57437),
        l = a(5870),
        r = a(22169);
      a(2265);
      var i = a(4623);
      let n = (e) =>
          (0, l.bT)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } }),
        o = (0, i.tv)({
          variants: {
            size: {
              h1: n("h1"),
              h2: n("h2"),
              h3: n("h3"),
              h4: n("h4"),
              h5: n("h5"),
              h6: n("h6"),
              p: l.jT,
              span: l.jT,
            },
            color: { default: "", grey: "text-grey30" },
          },
        });
      t.Z = (e) => {
        let {
          tag: t = "span",
          size: a,
          color: l = "default",
          children: i,
          className: n,
        } = e;
        return (0, s.jsx)(t, {
          className: (0, r.cn)(o({ size: a, color: l }), n),
          children: i,
        });
      };
    },
    51138: function (e, t, a) {
      "use strict";
      a.d(t, {
        r: function () {
          return i;
        },
      });
      var s = a(57437),
        l = a(5870),
        r = a(22169);
      let i = (e) =>
        (0, l.hh)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } });
      t.Z = (e) => {
        let { tag: t = "span", size: a, children: l, className: n } = e;
        return (0, s.jsx)(t, { className: (0, r.cn)(i(a), n), children: l });
      };
    },
    82515: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(57437),
        l = a(86158),
        r = a(22169);
      t.default = (e) => {
        let { src: t, webm: a, className: i, poster: n, style: o } = e;
        return (0, s.jsxs)("video", {
          style: o,
          className: (0, r.cn)("w-full pointer-events-none", i),
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          children: [
            t &&
              (0, s.jsx)("source", {
                src: (0, l.$)(t),
                type: 'video/mp4; codecs="hvc1"',
              }),
            a && (0, s.jsx)("source", { src: (0, l.$)(a), type: "video/webm" }),
          ],
        });
      };
    },
    77147: function (e, t, a) {
      "use strict";
      a.d(t, {
        pm: function () {
          return x;
        },
      });
      var s = a(2265);
      let l = 0,
        r = new Map(),
        i = (e) => {
          if (r.has(e)) return;
          let t = setTimeout(() => {
            r.delete(e), c({ type: "REMOVE_TOAST", toastId: e });
          }, 1e6);
          r.set(e, t);
        },
        n = (e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: a } = t;
              return (
                a
                  ? i(a)
                  : e.toasts.forEach((e) => {
                      i(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === a || void 0 === a ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        o = [],
        d = { toasts: [] };
      function c(e) {
        (d = n(d, e)),
          o.forEach((e) => {
            e(d);
          });
      }
      function m(e) {
        let { ...t } = e,
          a = (l = (l + 1) % Number.MAX_SAFE_INTEGER).toString(),
          s = () => c({ type: "DISMISS_TOAST", toastId: a });
        return (
          c({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: a,
              open: !0,
              onOpenChange: (e) => {
                e || s();
              },
            },
          }),
          {
            id: a,
            dismiss: s,
            update: (e) => c({ type: "UPDATE_TOAST", toast: { ...e, id: a } }),
          }
        );
      }
      function x() {
        let [e, t] = s.useState(d);
        return (
          s.useEffect(
            () => (
              o.push(t),
              () => {
                let e = o.indexOf(t);
                e > -1 && o.splice(e, 1);
              }
            ),
            [e]
          ),
          {
            ...e,
            toast: m,
            dismiss: (e) => c({ type: "DISMISS_TOAST", toastId: e }),
          }
        );
      }
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
    86158: function (e, t, a) {
      "use strict";
      a.d(t, {
        $: function () {
          return r;
        },
        Z: function () {
          return l;
        },
      });
      var s = a(7506);
      let l = {
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
          DOCS: "https://docs.drive3ai.com/",
          EXPLORER: "https://app.drive3ai.com/",
          DEVELOPER: "https://developer.aioz.network/",
          W3S: "https://w3s.storage/",
          WALLET: "https://wallet.aioz.network/",
          BRIDGE: "https://bridge.aioz.network/",
        },
        r = (e) => "".concat(s.Z.server.cloud, "/").concat(e);
    },
    23945: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(57437),
        l = a(5100),
        r = a(65516),
        i = a(22169),
        n = a(51138),
        o = a(77147),
        d = a(2265),
        c = a(61865);
      let m = {
          required: "* Please enter your email address.",
          pattern: {
            value:
              /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
            message: "* Please enter a valid email address.",
          },
        },
        x = async (e, t) => {
          let { onSuccess: a, onError: s } = t;
          try {
            let { email: t } = e,
              s = await fetch(
                "https://api.aioz.network/subscribe?email=".concat(t),
                {
                  method: "POST",
                  body: JSON.stringify({}),
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
            200 === s.status && a();
          } catch (e) {
            s(e.message);
          }
        };
      t.default = () => {
        let { toast: e } = (0, o.pm)(),
          [t, a] = (0, d.useState)(!1),
          {
            register: u,
            handleSubmit: f,
            formState: { errors: h },
            setError: p,
            reset: b,
          } = (0, c.cI)({ mode: "all" }),
          g = f((e) => {
            x(e, {
              onSuccess: () => {
                a(!0),
                  b({ email: "" }),
                  setTimeout(() => {
                    a(!1);
                  }, 6e3);
              },
              onError: (e) => {
                p("email", { type: "server", message: e });
              },
            });
          });
        return (0, s.jsx)("div", {                
        });
      };
    },
    96178: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var s = a(57437),
        l = a(82515),
        r = a(16886),
        i = a(86158);
      let n = [
        {
          title: "AI Compute",
          desc: "Decentralized AI computation",
          href: i.Z.WEB3_AI,
        },
        {
          title: "Stream",
          desc: "Web3 Video Streaming",
          href: i.Z.WEB3_STREAMING,
        },
        { title: "DePIN", desc: "Drive3AI Rewards", href: i.Z.NODE_APP },
        {
          title: "Staking",
          desc: "Drive3AI Staking",
          href: "https://app.drive3ai.com/",
          external: !0,
        },
      ];
      var o = () =>
          (0, s.jsx)("nav", {
            className: "flex-[1_1_50%] divide-y divide-black",
            children: n.map((e, t) =>
              (0, s.jsx)(r.Z, { item: e }, "footer-nav-1-".concat(t))
            ),
          }),
        d = a(65516),
        c = a(22169),
        m = a(61396),
        x = a.n(m);
      a(2265);
      let u = [
        { icon: "icon-x", url: "https://x.com/Drive3_AI" },
        { icon: "icon-telegram", url: "https://t.me/Drive3_AI" },
      ];
      var f = () =>
        (0, s.jsx)("ul", {
          className: "inline-flex gap-2",
          children: u.map((e, t) =>
            (0, s.jsx)(
              "li",
              {
                children: (0, s.jsx)(x(), {
                  href: e.url,
                  target: "_blank",
                  className:
                    "rounded-full text-3xl text-black transition-colors duration-300 hover:text-green-dark",
                  children: (0, s.jsx)("i", {
                    className: (0, c.cn)(e.icon, "block"),
                  }),
                }),
              },
              "social-".concat(t)
            )
          ),
        });
      let h = [
        { title: "Docs", url: i.Z.DOCS },
      ];
      var p = () =>
          (0, s.jsxs)("nav", {
            className: "flex flex-row items-end justify-between gap-8",
            children: [
              (0, s.jsx)("ul", {
                className: "flex flex-col gap-3",
                children: h.map((e, t) => {
                  let { title: a, url: l } = e;
                  return (0, s.jsx)(
                    "li",
                    {
                      children: (0, s.jsx)(x(), {
                        href: l,
                        className: "text-black transition-[padding] hover:pl-1",
                        children: (0, s.jsx)(d.Z, {
                          size: "span",
                          children: a,
                        }),
                      }),
                    },
                    "footer-nav-".concat(t)
                  );
                }),
              }),
              (0, s.jsx)(f, {}),
            ],
          }),
        b = () =>
          (0, s.jsx)("div", {
            className: "mx-auto max-w-5xl xl:max-w-6xl mt-12 md:mt-18 xl:mt-24",
            children: (0, s.jsx)("div", {
              className:
                "overflow-hidden rounded-lg bg-mint bg-opacity-80 backdrop-blur-[20px]",
              children: (0, s.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row md:divide-x md:divide-black",
                children: [
                  (0, s.jsx)(o, {}),
                  (0, s.jsxs)("div", {
                    className:
                      "flex-[1_1_50%] flex flex-col justify-between px-4 pb-10 pt-6 md:px-14 md:py-10",
                    children: [
                      (0, s.jsx)(l.default, {
                        className: "max-w-xs mx-auto",
                        src: "videos/light/modules/footer/footer-video.mp4",
                        webm: "videos/light/modules/footer/footer-video.webm",
                      }),
                      (0, s.jsx)(p, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
    },
    36282: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return F;
          },
        });
      var s = a(57437),
        l = a(74052),
        r = a(61396),
        i = a.n(r),
        n = () =>
          (0, s.jsxs)(i(), {
            href: "/",
            className: "flex items-center gap-2 px-4 py-3 md:p-4",
            children: [
              (0, s.jsx)("span", {
                className: "flex-shirk",
                children: (0, s.jsx)(l.E.i, {
                  animate: {},
                  className: "icon-aioz-spiner block text-[2.5rem]",
                }),
              }),
              (0, s.jsx)("span", {
                className: "flex-grow md:hidden md:flex-grow-0 xl:block",
                children: (0, s.jsx)("img", {
                  src: "/images/logo1.png",
                }),
              }),
            ],
          }),
        o = a(22169),
        d = a(34064),
        c = a(17158),
        m = a(62442),
        x = a(76369),
        u = a(2265);
      let f = d.fC,
        h = d.xz,
        p = d.ZA;
      d.Uv,
        d.Tr,
        d.Ee,
        (u.forwardRef((e, t) => {
          let { className: a, inset: l, children: r, ...i } = e;
          return (0, s.jsxs)(d.fF, {
            ref: t,
            className: (0, o.cn)(
              "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
              l && "pl-8",
              a
            ),
            ...i,
            children: [r, (0, s.jsx)(c.Z, { className: "ml-auto h-4 w-4" })],
          });
        }).displayName = d.fF.displayName),
        (u.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(d.tu, {
            ref: t,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
              a
            ),
            ...l,
          });
        }).displayName = d.tu.displayName);
      let b = u.forwardRef((e, t) => {
        let { className: a, sideOffset: l = 4, ...r } = e;
        return (0, s.jsx)(d.Uv, {
          children: (0, s.jsx)(d.VY, {
            ref: t,
            sideOffset: l,
            className: (0, o.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
              a
            ),
            ...r,
          }),
        });
      });
      b.displayName = d.VY.displayName;
      let g = u.forwardRef((e, t) => {
        let { className: a, inset: l, ...r } = e;
        return (0, s.jsx)(d.ck, {
          ref: t,
          className: (0, o.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
            l && "pl-8",
            a
          ),
          ...r,
        });
      });
      (g.displayName = d.ck.displayName),
        (u.forwardRef((e, t) => {
          let { className: a, children: l, checked: r, ...i } = e;
          return (0, s.jsxs)(d.oC, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
              a
            ),
            checked: r,
            ...i,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(d.wU, {
                  children: (0, s.jsx)(m.Z, { className: "h-4 w-4" }),
                }),
              }),
              l,
            ],
          });
        }).displayName = d.oC.displayName),
        (u.forwardRef((e, t) => {
          let { className: a, children: l, ...r } = e;
          return (0, s.jsxs)(d.Rk, {
            ref: t,
            className: (0, o.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
              a
            ),
            ...r,
            children: [
              (0, s.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, s.jsx)(d.wU, {
                  children: (0, s.jsx)(x.Z, {
                    className: "h-2 w-2 fill-current",
                  }),
                }),
              }),
              l,
            ],
          });
        }).displayName = d.Rk.displayName),
        (u.forwardRef((e, t) => {
          let { className: a, inset: l, ...r } = e;
          return (0, s.jsx)(d.__, {
            ref: t,
            className: (0, o.cn)(
              "px-2 py-1.5 text-sm font-semibold",
              l && "pl-8",
              a
            ),
            ...r,
          });
        }).displayName = d.__.displayName),
        (u.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(d.Z0, {
            ref: t,
            className: (0, o.cn)(
              "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800",
              a
            ),
            ...l,
          });
        }).displayName = d.Z0.displayName);
      var v = a(16886);
      let j = [, , , , ,].fill(() =>
        (0, s.jsx)("img", { src: "/images/logo1.png" })
      );
      var w = () =>
          (0, s.jsx)("div", {
            className:
              "overflow-x-hidden relative h-[3.5625rem] -mx-4 pt-6 border-t border-black",
            children: (0, s.jsx)("div", {
              className: "absolute left-0 bottom-0 w-full",
              children: (0, s.jsxs)("div", {
                className: "flex flex-row gap-8",
                children: [   
                  (0, s.jsx)("div", {
                    className: "animate-marquee flex flex-row gap-8 text-black",
                    children: j.map((e, t) =>
                      (0, s.jsx)(e, {}, "marquee-".concat(t))
                    ),
                  }),
                ],
              }),
            }),
          }),
        N = a(86158);
      let k = [
          {
            title: "Docs",
            desc: "Explore Drive3AI Documentation",
            external: !0,
            href: N.Z.DOCS,
          },
          {
            title: "Staking",
            desc: "Drive3AI Staking",
            external: !0,
            href: N.Z.EXPLORER,
          }
        ],
        y = [
          { title: "AI Compute", desc: "Web3 AI Ecosystem", href: N.Z.WEB3_AI },
          {
            title: "W3S",
            desc: "Web3 Object Storage",
            href: N.Z.W3S,
            external: !0,
          },
          {
            title: "W3IPFS",
            desc: "Web3 Pinning Service",
            href: N.Z.IPFS,
            external: !0,
          },
          {
            title: "Stream",
            desc: "Web3 Video Streaming",
            href: N.Z.WEB3_STREAMING,
          },
          { title: "DePIN", desc: "Drive3AI Rewards", href: N.Z.NODE_APP },
        ],
        E = [
        ],
        S = { open: { y: 10, rotate: 45 }, close: { y: 0, rotate: 0 } },
        Z = { open: { opacity: 0 }, close: { opacity: 1 } },
        O = { open: { y: -10, rotate: -45 }, close: { y: 0, rotate: 0 } };
      var A = () => {
          let [e, t] = u.useState(!1);
          return (0, s.jsxs)(f, {
            onOpenChange: t,
            children: [
              (0, s.jsx)(h, {
                asChild: !0,
                children: (0, s.jsx)("button", {
                  type: "button",
                  className: (0, o.cn)(
                    "block cursor-pointer p-5 md:p-6 outline-none"
                  ),
                  children: (0, s.jsxs)(l.E.svg, {
                    viewBox: "0 0 24 24",
                    className: "h-6 w-6 fill-charcoal",
                    animate: e ? "open" : "close",
                    children: [
                      (0, s.jsx)(l.E.rect, {
                        y: "1",
                        width: "24",
                        height: "3",
                        rx: "1.5",
                        variants: S,
                      }),
                      (0, s.jsx)(l.E.rect, {
                        y: "11",
                        width: "24",
                        height: "3",
                        rx: "1.5",
                        variants: Z,
                      }),
                      (0, s.jsx)(l.E.rect, {
                        y: "21",
                        width: "24",
                        height: "3",
                        rx: "1.5",
                        variants: O,
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsx)(b, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                className: (0, o.cn)(
                  "p-0 bg-mint border border-black rounded-lg",
                  "h-[calc(100vh-5.75rem-4rem)] md:h-[calc(100vh-6.875rem-4rem)] bottom-4",
                  "w-[calc(100vw-2rem)] md:w-[calc(100vw-3rem)] lg:w-[30.25rem]",
                  "overflow-y-auto"
                ),
                children: (0, s.jsxs)("div", {
                  className: "flex flex-col h-full",
                  children: [
                    (0, s.jsx)(p, {
                      className:
                        "border-b border-black divide-y divide-black md:hidden",
                      children: y.map((e, t) =>
                        (0, s.jsx)(
                          g,
                          {
                            asChild: !0,
                            children: (0, s.jsx)(v.Z, {
                              item: e,
                              modifier: "!p-4",
                            }),
                          },
                          "header-menu-mobile-".concat(t)
                        )
                      ),
                    }),
                    (0, s.jsx)(p, {
                      className: "border-b border-black divide-y divide-black",
                      children: k.map((e, t) =>
                        (0, s.jsx)(
                          g,
                          {
                            asChild: !0,
                            children: (0, s.jsx)(v.Z, {
                              item: e,
                              modifier: "!p-4",
                            }),
                          },
                          "header-menu-".concat(t)
                        )
                      ),
                    }),
                    (0, s.jsxs)(p, {
                      className:
                        "px-4 py-6 flex-grow flex flex-col gap-16 justify-between",
                      children: [                
                        (0, s.jsx)(w, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        z = a(95677),
        I = a(39213);
      let _ = u.forwardRef((e, t) => {
        let { className: a, children: l, ...r } = e;
        return (0, s.jsxs)(z.fC, {
          ref: t,
          className: (0, o.cn)(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            a
          ),
          ...r,
          children: [l, (0, s.jsx)(C, {})],
        });
      });
      _.displayName = z.fC.displayName;
      let T = u.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(z.aV, {
          ref: t,
          className: (0, o.cn)(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            a
          ),
          ...l,
        });
      });
      T.displayName = z.aV.displayName;
      let R = z.ck;
      (0, I.j)(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
      );
      let P = u.forwardRef((e, t) => {
        let { className: a, children: l, ...r } = e;
        return (0, s.jsx)(z.xz, {
          ref: t,
          className: (0, o.cn)("group", a),
          ...r,
          children: l,
        });
      });
      P.displayName = z.xz.displayName;
      let D = u.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, s.jsx)(z.VY, {
          ref: t,
          className: (0, o.cn)(
            "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute",
            a
          ),
          ...l,
        });
      });
      D.displayName = z.VY.displayName;
      let W = z.rU,
        C = u.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)("div", {
            className: (0, o.cn)(
              "absolute left-0 top-full flex justify-center w-full"
            ),
            children: (0, s.jsx)(z.l_, {
              className: (0, o.cn)(
                "origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] !w-full overflow-hidden bg-mint text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
                "outline outline-black outline-1 rounded-md mt-1.5",
                a
              ),
              ref: t,
              ...l,
            }),
          });
        });
      (C.displayName = z.l_.displayName),
        (u.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, s.jsx)(z.z$, {
            ref: t,
            className: (0, o.cn)(
              "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
              a
            ),
            ...l,
            children: (0, s.jsx)("div", {
              className:
                "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800",
            }),
          });
        }).displayName = z.z$.displayName);
      let V = [
          { title: "AI Compute", desc: "Web3 AI Ecosystem", href: N.Z.WEB3_AI },
          {
            title: "Stream",
            desc: "Web3 Video Streaming",
            href: N.Z.WEB3_STREAMING,
          },
          { title: "DePIN", desc: "Drive3AI Rewards", href: N.Z.NODE_APP },
        ],
        B = (e) => {
          let { item: t } = e;
          return (0, s.jsx)(i(), {
            href: t.href,
            legacyBehavior: !0,
            passHref: !0,
            children: (0, s.jsxs)(W, {
              href: t.href,
              target: t.target ? t.target : "_self",
              className: (0, o.cn)(
                "min-h-[4.5rem] relative",
                "flex flex-col items-center justify-center px-2 xl:px-6 py-4 xl:min-w-[16rem] xl:items-start",
                "transition-[color,background-color] duration-300 hover:bg-black hover:text-mint"
              ),
              children: [
                (0, s.jsx)("span", {
                  className: "font-formula text-base font-extrabold leading-5",
                  children: t.title,
                }),
                (0, s.jsx)("span", {
                  className: "hidden text-sm xl:block",
                  children: t.desc,
                }),
                t.target &&
                  (0, s.jsx)("i", {
                    className:
                      "icon-arrow absolute right-6 top-4 text-lg group-hover:-translate-y-0.5 transition-transform",
                  }),
              ],
            }),
          });
        };
      var M = () =>
          (0, s.jsx)(_, {
            className: "max-w-none block h-full",
            children: (0, s.jsx)(T, {
              className: "divide-x divide-black space-x-0 w-full",
              children: V.map((e, t) => {
                let a = "menu-item-".concat(t);
                return e.sub
                  ? (0, s.jsx)(
                      R,
                      {
                        className: "relative flex-1",
                        children: (0, s.jsx)(_, {
                          className: "max-w-none block h-full",
                          children: (0, s.jsx)(T, {
                            className: "w-full",
                            children: (0, s.jsxs)(R, {
                              className: "flex-1",
                              children: [
                                (0, s.jsx)(P, {
                                  asChild: !0,
                                  className: "w-full",
                                  children: (0, s.jsx)("button", {
                                    type: "button",
                                    children: (0, s.jsx)(B, { item: e }),
                                  }),
                                }),
                                (0, s.jsx)(D, {
                                  asChild: !0,
                                  children: (0, s.jsx)("ul", {
                                    className: "w-full divide-y divide-black",
                                    children:
                                      null == e
                                        ? void 0
                                        : e.sub.map((e, a) =>
                                            (0, s.jsx)(
                                              "li",
                                              {
                                                children: (0, s.jsx)(B, {
                                                  item: e,
                                                }),
                                              },
                                              "sub-menu-"
                                                .concat(t, "-")
                                                .concat(a)
                                            )
                                          ),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      },
                      a
                    )
                  : (0, s.jsx)(
                      R,
                      {
                        className: "flex-1",
                        children: (0, s.jsx)(B, { item: e }),
                      },
                      a
                    );
              }),
            }),
          }),
        F = () =>
          (0, s.jsx)("aside", {
            className: "sticky left-0 right-0 top-3 z-50 h-0",
            children: (0, s.jsx)("div", {
              className: "container",
              children: (0, s.jsx)("div", {
                className: "rounded-lg border border-black bg-mint",
                children: (0, s.jsxs)("div", {
                  className:
                    "flex flex-row justify-start divide-x divide-black",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex-grow md:flex-shrink md:flex-grow-0 xl:flex-grow",
                      children: (0, s.jsx)(n, {}),
                    }),
                    (0, s.jsx)("div", {
                      className: "hidden flex-grow md:block",
                      children: (0, s.jsx)(M, {}),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex-shirk",
                      children: (0, s.jsx)(A, {}),
                    }),
                  ],
                }),
              }),
            }),
          });
    },
    22169: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return r;
        },
      });
      var s = a(57042),
        l = a(74769);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, l.m6)((0, s.W)(t));
      }
    },
    5870: function (e, t, a) {
      "use strict";
      a.d(t, {
        bT: function () {
          return l;
        },
        hh: function () {
          return i;
        },
        jT: function () {
          return r;
        },
      });
      var s = a(4623);
      let l = (0, s.tv)(
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
        r =
          "font-formula text-base leading-[120%] font-extrabold tracking-[0.8px]",
        i = (0, s.tv)(
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
    5409: function (e, t, a) {
      "use strict";
      a.r(t),
        (t.default = {
          src: "/_next/static/media/aioz-logo.65a6b894.svg",
          height: 286,
          width: 919,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
  function (e) {
    e.O(0, [895, 623, 978, 250, 749, 72, 626, 618, 971, 938, 744], function () {
      return e((e.s = 49989));
    }),
      (_N_E = e.O());
  },
]);
