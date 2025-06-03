(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [351],
  {
    55488: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 45416));
    },
    67447: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          unstable_getImgProps: function () {
            return o;
          },
          default: function () {
            return c;
          },
        });
      let a = s(21024),
        i = s(38630),
        r = s(76184),
        n = s(81749),
        l = a._(s(10536)),
        o = (e) => {
          (0, r.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e];
          return { props: t };
        },
        c = n.Image;
    },
    65516: function (e, t, s) {
      "use strict";
      s.d(t, {
        u: function () {
          return l;
        },
      });
      var a = s(57437),
        i = s(5870),
        r = s(22169);
      s(2265);
      var n = s(4623);
      let l = (e) =>
          (0, i.bT)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } }),
        o = (0, n.tv)({
          variants: {
            size: {
              h1: l("h1"),
              h2: l("h2"),
              h3: l("h3"),
              h4: l("h4"),
              h5: l("h5"),
              h6: l("h6"),
              p: i.jT,
              span: i.jT,
            },
            color: { default: "", grey: "text-grey30" },
          },
        });
      t.Z = (e) => {
        let {
          tag: t = "span",
          size: s,
          color: i = "default",
          children: n,
          className: l,
        } = e;
        return (0, a.jsx)(t, {
          className: (0, r.cn)(o({ size: s, color: i }), l),
          children: n,
        });
      };
    },
    51138: function (e, t, s) {
      "use strict";
      s.d(t, {
        r: function () {
          return n;
        },
      });
      var a = s(57437),
        i = s(5870),
        r = s(22169);
      let n = (e) =>
        (0, i.hh)({ mobile: e, tablet: { lg: e }, desktop: { xl: e } });
      t.Z = (e) => {
        let { tag: t = "span", size: s, children: i, className: l } = e;
        return (0, a.jsx)(t, { className: (0, r.cn)(n(s), l), children: i });
      };
    },
    45416: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          EcosystemContext: function () {
            return X;
          },
          default: function () {
            return V;
          },
        });
      var a = s(57437),
        i = s(2265),
        r = s(51138),
        n = s(22169);
      let l = [
        { text: "All", value: "all" },
        { text: "Blockchain", value: "blockchain" },
        { text: "Blockchain Partners", value: "blockchain-partners" },
        { text: "Partners", value: "partners" },
        { text: "Wallets", value: "wallets" },
        { text: "DEX", value: "dex" },
        { text: "CEX", value: "cex" },
        { text: "Infrastructure", value: "infrastructure" },
        { text: "dApps", value: "dapps" },
        { text: "Research", value: "research" },
      ];
      var o = (e) => {
          let { selection: t = "all", onChange: s } = e;
          return (0, a.jsx)("div", {
            className: (0, n.cn)(
              "static left-0 right-0 top-[84px] z-10 lg:sticky lg:text-center lg:h-0"
            ),
            children: (0, a.jsx)("div", {
              className:
                "inline-flex flex-wrap justify-center gap-2 xl:gap-4 px-4 py-4 xl:px-9 bg-mint bg-opacity-[0.98] rounded-b-3xl",
              children: l.map((e, i) => {
                let l =
                  "inline-block py-2 px-2 xl:px-3 rounded-full border border-black min-w-[44px] text-center";
                return t === e.value
                  ? (0, a.jsx)(
                      "span",
                      {
                        className: (0, n.cn)(l, "bg-black text-white"),
                        children: (0, a.jsx)(r.Z, {
                          size: "md",
                          children: e.text,
                        }),
                      },
                      i
                    )
                  : (0, a.jsx)(
                      "a",
                      {
                        className: (0, n.cn)(l, "hover:bg-green"),
                        onClick: () => s(e.value),
                        href: "#ecosystem",
                        children: (0, a.jsx)(r.Z, {
                          size: "md",
                          children: e.text,
                        }),
                      },
                      i
                    );
              }),
            }),
          });
        },
        c = (e) => {
          let { className: t, children: s } = e;
          return (0, a.jsx)("div", {
            className: (0, n.cn)(
              "p-8 border border-black flex flex-col gap-4 justify-between rounded-lg",
              t
            ),
            children: s,
          });
        },
        h = s(61396),
        g = s.n(h),
        m = (e) => {
          let { href: t, children: s, target: i = "_blank" } = e;
          return (0, a.jsx)(g(), {
            target: i,
            href: t,
            className:
              "group rounded-full border transition duration-300 px-10 py-3 hover:text-white border-transparent bg-white hover:bg-green group",
            children: (0, a.jsx)("span", {
              className:
                "block pt-1 font-formula font-bold text-[1rem] leading-6 whitespace-nowrap transition duration-300 md:text-[1.125rem] !text-base text-black group-hover:text-black",
              children: s,
            }),
          });
        },
        p = s(65516),
        d = s(16691),
        x = s.n(d);
      let u =
          "relative group px-6 py-10 gap-10 justify-center items-center rounded-2xl min-h-[240px] outline-black outline-[3px] -outline-offset-[3px]",
        f = (e) => {
          let {
            title: t,
            img: s,
            href: i,
            size: l = { width: 88, height: 88 },
            target: o = "_blank",
          } = e;
          return (0, a.jsxs)(c, {
            className: (0, n.cn)(u, { "hover:outline": i }),
            children: [
              s &&
                (0, a.jsx)(x(), {
                  src: s,
                  alt: t || "aioz network",
                  width: null == l ? void 0 : l.width,
                  height: null == l ? void 0 : l.height,
                }),
              t && (0, a.jsx)(r.Z, { tag: "h3", size: "lg", children: t }),
              i &&
                (0, a.jsxs)(g(), {
                  href: i,
                  title: t,
                  target: o,
                  rel: "noopener noreferrer",
                  className: "absolute inset-0",
                  prefetch: !1,
                  children: [
                    (0, a.jsx)("span", { className: "sr-only", children: t }),
                    "_blank" === o &&
                      (0, a.jsx)("i", {
                        className: (0, n.cn)(
                          "opacity-0 icon-arrow absolute right-6 top-4 text-2xl font-bold",
                          "group-hover:opacity-100 transition-opacity"
                        ),
                      }),
                  ],
                }),
            ],
          });
        },
        y = (e) => {
          let {
              title: t,
              subTitle: s,
              img: i,
              href: l,
              size: o = { width: 88, height: 88 },
              target: h = "_blank",
              className: m,
              imageClassName: d,
            } = e,
            f = (null == t ? void 0 : t.replace(/<[^>]*>?/gm, "")) || "";
          return (0, a.jsxs)(c, {
            className: (0, n.cn)(u, { "hover:outline": l }, m),
            children: [
              (0, a.jsxs)("div", {
                className: "space-y-4 text-center",
                children: [
                  s &&
                    (0, a.jsx)(p.Z, {
                      className: "text-[#00A152]",
                      size: "span",
                      children: s,
                    }),
                  i &&
                    (0, a.jsx)(x(), {
                      src: i,
                      className: d,
                      alt: f,
                      width: null == o ? void 0 : o.width,
                      height: null == o ? void 0 : o.height,
                    }),
                ],
              }),
              t &&
                (0, a.jsx)(r.Z, {
                  tag: "h3",
                  size: "md",
                  className: "text-center",
                  children: (0, a.jsx)("span", {
                    dangerouslySetInnerHTML: { __html: t },
                  }),
                }),
              l &&
                (0, a.jsxs)(g(), {
                  href: l,
                  title: f,
                  target: h,
                  className: "absolute inset-0",
                  rel: "noopener noreferrer",
                  prefetch: !1,
                  children: [
                    (0, a.jsx)("span", { className: "sr-only", children: t }),
                    "_blank" === h &&
                      (0, a.jsx)("i", {
                        className: (0, n.cn)(
                          "opacity-0 icon-arrow absolute right-6 top-4 text-2xl font-bold",
                          "group-hover:opacity-100 transition-opacity"
                        ),
                      }),
                  ],
                }),
            ],
          });
        },
        b = (e) => {
          let { title: t, img: s, href: i, target: l = "_blank" } = e,
            o = (null == t ? void 0 : t.replace(/<[^>]*>?/gm, "")) || "";
          return (0, a.jsxs)(c, {
            className: (0, n.cn)(
              "relative group px-6 py-10 gap-0 flex-row justify-between items-center rounded-2xl outline-black outline-[3px] -outline-offset-[3px]",
              { "hover:outline": i }
            ),
            children: [
              (0, a.jsx)(r.Z, {
                size: "lg",
                tag: "h3",
                children: (0, a.jsx)("span", {
                  dangerouslySetInnerHTML: { __html: t || "" },
                }),
              }),
              s &&
                (0, a.jsx)(x(), {
                  src: s,
                  alt: o,
                  width: 88,
                  height: 88,
                  quality: 100,
                }),
              i &&
                (0, a.jsxs)(g(), {
                  href: i,
                  title: o,
                  target: l,
                  className: "absolute inset-0",
                  rel: "noopener noreferrer",
                  prefetch: !1,
                  children: [
                    (0, a.jsx)("span", { className: "sr-only", children: t }),
                    "_blank" === l &&
                      (0, a.jsx)("i", {
                        className: (0, n.cn)(
                          "opacity-0 icon-arrow absolute right-6 top-4 text-2xl font-bold",
                          "group-hover:opacity-100 transition-opacity"
                        ),
                      }),
                  ],
                }),
            ],
          });
        },
        w = (e) => {
          let { title: t, text: s, href: i = "#", target: r } = e;
          return (0, a.jsxs)(c, {
            className:
              "relative px-6 py-9 gap-6 items-center justify-center bg-black text-white h-full rounded-2xl",
            children: [
              (0, a.jsx)(p.Z, {
                size: "h5",
                tag: "h3",
                className: "text-center",
                children: t,
              }),
              (0, a.jsx)(m, { href: i, target: r, children: s }),
            ],
          });
        };
      var j = (e) => {
          let { total: t, category: s } = e;
          return (0, a.jsx)("div", {
            className: "container text-center py-6",
            children: (0, a.jsx)(r.Z, {
              size: "lg",
              tag: "p",
              children: "".concat(t, " Results for “").concat(s, "” Ecosystem"),
            }),
          });
        },
        k = (e) => {
          let { title: t, more: s, children: i, grid: r = "default" } = e,
            l = "default" === r;
          return (0, a.jsxs)("div", {
            className: "container space-y-8 max-w-[1440px]",
            children: [
              (0, a.jsx)(p.Z, { size: "h2", tag: "h2", children: t }),
              (0, a.jsxs)("div", {
                className: (0, n.cn)("grid gap-6 sm:grid-cols-2", {
                  "xl:grid-cols-3": l,
                  "xl:grid-cols-4": !l,
                }),
                children: [
                  i,
                  s &&
                    (0, a.jsx)(w, {
                      title: s.title,
                      text: s.text,
                      href: s.href,
                      target: (null == s ? void 0 : s.target) || "_self",
                    }),
                ],
              }),
            ],
          });
        };
      let v = [
        {
          title: "Cosmos",
          img: "/images/ecosystem/blockchain/cosmos.png",
          href: "https://cosmos.network/ecosystem/tokens/",
        },
        {
          title: "Ethereum",
          img: "/images/ecosystem/blockchain/ethereum.png",
          href: "https://etherscan.io/token/0x626e8036deb333b408be468f951bdb42433cbf18",
        },
        {
          title: "Binance Smart Chain",
          img: "/images/ecosystem/blockchain/binance-smart-chain.png",
          href: "https://bscscan.com/token/0x33d08d8c7a168333a85285a68c0042b39fc3741d",
        },
      ];
      var N = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "blockchain" === e &&
              (0, a.jsx)(j, { category: "Blockchain", total: v.length }),
            (0, a.jsx)(k, {
              grid: "special",
              title: "Blockchain",
              more: {
                title: "Drive3AI Blockchain is Cosmos and EVM Compatible",
                text: "Learn More",
                href: "https://doc.drive3ai.org/aioz-blockchain/overview",
              },
              children: v.map((e, t) => (0, a.jsx)(f, { ...e }, t)),
            }),
          ],
        });
      };
      let z = [
        {
          title: "Polygon",
          img: "/images/ecosystem/blockchain-partners/polygon.png",
          href: "https://www.polygon.com/",
        },
        {
          title: "Avalanche",
          img: "/images/ecosystem/blockchain-partners/avalanche.png",
          href: "https://www.avax.network/",
        },
        {
          title: "Aptos",
          img: "/images/ecosystem/blockchain-partners/aptos.png",
          href: "https://aptosfoundation.org/",
        },
        {
          title: "Sei",
          img: "/images/ecosystem/blockchain-partners/sei.png",
          href: "https://www.sei.io/",
          size: { width: 197.5, height: 88 },
        },
      ];
      var C = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "blockchain-partners" === e &&
              (0, a.jsx)(j, {
                category: "Blockchain Partners",
                total: z.length,
              }),
            (0, a.jsx)(k, {
              grid: "special",
              title: "Blockchain Partners",
              more: {
                title: "Lets Collaborate",
                text: "Get In Touch",
                href: "mailto:contact@aioz.network",
              },
              children: z.map((e, t) => (0, a.jsx)(f, { ...e }, "".concat(t))),
            }),
          ],
        });
      };
      let _ = [
        { img: "/images/ecosystem/partners/nvidia-inception-program.png" },
        { img: "/images/ecosystem/partners/alibaba-cloud.png" },
        { img: "/images/ecosystem/partners/qualcomm.png" },
        { img: "/images/ecosystem/partners/google.png" },
        { img: "/images/ecosystem/partners/dwf-labs.png" },
      ];
      var A = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "partners" === e &&
              (0, a.jsx)(j, { category: "Partners", total: _.length }),
            (0, a.jsx)(k, {
              title: "Partners",
              children: _.map((e, t) =>
                (0, a.jsx)(
                  y,
                  {
                    ...e,
                    className: "min-h-[200px]",
                    size: { width: 240, height: 106 },
                  },
                  t
                )
              ),
            }),
          ],
        });
      };
      let B = [
        {
          title: "Drive3AI Wallet Extension",
          img: "/images/ecosystem/wallets/aioz-wallet.png",
        },
        {
          title: "MetaMask",
          img: "/images/ecosystem/wallets/metamask.png",
          href: "https://metamask.io/download/",
        },
        {
          title: "Keplr Wallet",
          img: "/images/ecosystem/wallets/keplr.png",
          href: "https://www.keplr.app/download",
        },
      ];
      var P = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "wallets" === e &&
              (0, a.jsx)(j, { category: "Wallets", total: B.length }),
            (0, a.jsx)(k, {
              title: "Wallets",
              children: B.map((e, t) => (0, a.jsx)(f, { ...e }, t)),
            }),
          ],
        });
      };
      let E = [
        {
          title: "Uniswap",
          img: "/images/ecosystem/dex/uniswap.png",
          href: "/uniswap",
        },
        {
          title: "Pancake Swap V3 <b>(ETH)</b>",
          img: "/images/ecosystem/dex/pancake-eth.png",
          href: "https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x626E8036dEB333b408Be468F951bdB42433cBF18",
        },
        {
          title: "Pancake Swap V3 <b>(BNB)</b>",
          img: "/images/ecosystem/dex/pancake-bnb.png",
          href: "https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x33d08D8C7a168333a85285a68C0042b39fC3741D",
        },
      ];
      var S = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "dex" === e && (0, a.jsx)(j, { category: "DEX", total: E.length }),
            (0, a.jsx)(k, {
              title: "DEX",
              children: E.map((e, t) => (0, a.jsx)(b, { ...e }, t)),
            }),
          ],
        });
      };
      let I = [
        {
          title: "Coinbase",
          img: "/images/ecosystem/cex/coinbase.png",
          href: "/coinbase",
        },
        {
          title: "Crypto.com",
          img: "/images/ecosystem/cex/crypto-com.png",
          href: "/crypto.com",
        },
        {
          title: "Kucoin",
          img: "/images/ecosystem/cex/kucoin.png",
          href: "/kucoin",
        },
        {
          title: "Gate.io",
          img: "/images/ecosystem/cex/gateio.png",
          href: "/gateio",
        },
        {
          title: "Bybit",
          img: "/images/ecosystem/cex/bybit.png",
          href: "/bybit",
        },
        {
          title: "INDODAX",
          img: "/images/ecosystem/cex/indodax.png",
          href: "/indodax",
        },
        { title: "HTX", img: "/images/ecosystem/cex/htx.png", href: "/htx" },
        {
          title: "Bithumb",
          img: "/images/ecosystem/cex/bithumb.png",
          href: "/bithumb",
          className: "mix-blend-difference",
        },
        {
          title: "Bitfinex",
          img: "/images/ecosystem/cex/bitfiniex.png",
          href: "https://trading.bitfinex.com/t/Drive3AI:USD",
        },
      ];
      var F = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "cex" === e && (0, a.jsx)(j, { category: "CEX", total: I.length }),
            (0, a.jsx)(k, {
              title: "CEX",
              children: I.map((e, t) => (0, a.jsx)(b, { ...e }, t)),
            }),
          ],
        });
      };
      let T = [
        {
          title: "Make Your Computer <br />Work For You.",
          img: "/images/ecosystem/infrastructure/aioz-depin.png",
          href: "/node",
          target: "_self",
          size: { width: 280, height: 40 },
        },
        {
          title:
            "A Smarter, More Efficient and More Affordable Way to Store and Delivery Your Data. ",
          img: "/images/ecosystem/infrastructure/aioz-w3s.png",
          href: "https://w3s.storage/",
          target: "_self",
          size: { width: 250, height: 40 },
        },
        {
          title: "Simple, Decentralized NFT Storage",
          img: "/images/ecosystem/infrastructure/aioz-w3ipfs.png",
          href: "https://w3ipfs.storage/",
          target: "_self",
          size: { width: 323, height: 40 },
        },
        {
          title:
            "Train AI Models, Store Datasets, Build dApps, Monetize and Contribute to the Future of AI.",
          subTitle: "Coming soon",
          img: "/images/ecosystem/infrastructure/aioz-w3ai.png",
          size: { width: 260, height: 40 },
        },
        {
          title: "Host, Stream and Manage your Videos.",
          subTitle: "Coming soon",
          img: "/images/ecosystem/infrastructure/aioz-w3stream.png",
          size: { width: 377, height: 40 },
        },
      ];
      var Z = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "infrastructure" === e &&
              (0, a.jsx)(j, { category: "Infrastructure", total: T.length }),
            (0, a.jsx)(k, {
              title: "Infrastructure",
              children: T.map((e, t) =>
                (0, a.jsx)(y, { ...e, className: "gap-6" }, "".concat(t))
              ),
            }),
          ],
        });
      };
      let M = [
        {
          title: "File Transfer, Powered by Web3.",
          img: "/images/ecosystem/dapps/aioz-dtransfer.png",
          href: "https://dtransfer.app/",
          size: { width: 348, height: 40 },
        },
        {
          title: "Your Secure Web3 Drive",
          img: "/images/ecosystem/dapps/aioz-drive.png",
          href: "https://dvault.app/",
          size: { width: 277, height: 40 },
        },
        {
          img: "/images/ecosystem/dapps/clip-path-group.png",
          href: "https://www.nakamoto.games/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/sharpe.png",
          href: "https://www.sharpe.ai/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/demr.png",
          href: "https://www.demr.xyz/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/laika-ai.png",
          href: "https://www.laika-ai.io/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/port3.png",
          href: "https://port3.io/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/dexcheck.png",
          href: "https://dexcheck.ai/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/bullieverse.png",
          href: "https://bullieverse.com/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/mind-network.png",
          href: "https://mindnetwork.xyz/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/metavertu.png",
          href: "https://vertu.com/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/artfi.png",
          href: "https://artfitoken.io/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/bel2.png",
          href: "https://bel2.org/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
        {
          img: "/images/ecosystem/dapps/eternalai.png",
          href: "https://eternalai.org/",
          size: { width: 240, height: 106 },
          className: "justify-center",
          imageClassName: "mix-blend-difference",
        },
        {
          img: "/images/ecosystem/dapps/obortech.png",
          href: "https://www.obortech.io/",
          size: { width: 240, height: 106 },
          className: "justify-center",
          imageClassName: "mix-blend-difference",
        },
        {
          img: "/images/ecosystem/dapps/pettai.png",
          href: "https://www.pett.ai/",
          size: { width: 240, height: 106 },
          className: "justify-center",
        },
      ];
      var D = (e) => {
        let {} = e,
          t = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "dApps" === t &&
              (0, a.jsx)(j, { category: "dApps", total: M.length }),
            (0, a.jsx)(k, {
              title: "dApps",
              more: {
                title: "Build your dAPP on Drive3AI",
                text: "Learn More",
                href: " https://aioz.network/develop",
              },
              children: M.map((e, t) =>
                (0, a.jsx)(
                  y,
                  { ...e, className: "min-h-[240px]" },
                  "".concat(t)
                )
              ),
            }),
          ],
        });
      };
      let O = [
        {
          img: "/images/ecosystem/research/istituto-italiano-di-tecnologia.png",
          href: "https://www.iit.it/",
        },
        {
          img: "/images/ecosystem/research/liverpool.png",
          href: "https://www.liverpool.ac.uk/",
        },
        {
          img: "/images/ecosystem/research/imperial-college.png",
          href: "https://www.imperial.ac.uk/",
        },
        {
          img: "/images/ecosystem/research/adelaide.png",
          href: "https://www.adelaide.edu.au/",
        },
        {
          img: "/images/ecosystem/research/singapore-u-of-tech-and-design.png",
          href: "https://www.sutd.edu.sg/",
        },
        {
          img: "/images/ecosystem/research/national-tsign-hua-university.png",
          href: "https://nthu-en.site.nthu.edu.tw/",
        },
      ];
      var W = () => {
        let e = (0, i.useContext)(X);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            "research" === e &&
              (0, a.jsx)(j, { category: "Research", total: O.length }),
            (0, a.jsx)(k, {
              grid: "special",
              title: "Research",
              children: O.map((e, t) =>
                (0, a.jsx)(
                  y,
                  {
                    ...e,
                    className: "min-h-[200px]",
                    size: { width: 240, height: 106 },
                  },
                  "".concat(t)
                )
              ),
            }),
          ],
        });
      };
      let X = (0, i.createContext)("all");
      var V = () => {
        let [e, t] = (0, i.useState)("all");
        return (0, a.jsxs)(X.Provider, {
          value: e,
          children: [
            (0, a.jsx)(o, { selection: e, onChange: t }),
            (0, a.jsxs)("section", {
              id: "ecosystem",
              className:
                "flex flex-col gap-8 sm:gap-20 py-8 sm:py-16 lg:pt-40 lg:pb-20",
              children: [
                ("all" === e || "blockchain" === e) && (0, a.jsx)(N, {}),
                ("all" === e || "blockchain-partners" === e) &&
                  (0, a.jsx)(C, {}),
                ("all" === e || "partners" === e) && (0, a.jsx)(A, {}),
                ("all" === e || "wallets" === e) && (0, a.jsx)(P, {}),
                ("all" === e || "dex" === e) && (0, a.jsx)(S, {}),
                ("all" === e || "cex" === e) && (0, a.jsx)(F, {}),
                ("all" === e || "infrastructure" === e) && (0, a.jsx)(Z, {}),
                ("all" === e || "dapps" === e) && (0, a.jsx)(D, {}),
                ("all" === e || "research" === e) && (0, a.jsx)(W, {}),
              ],
            }),
          ],
        });
      };
    },
    22169: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return r;
        },
      });
      var a = s(57042),
        i = s(74769);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, i.m6)((0, a.W)(t));
      }
    },
    5870: function (e, t, s) {
      "use strict";
      s.d(t, {
        bT: function () {
          return i;
        },
        hh: function () {
          return n;
        },
        jT: function () {
          return r;
        },
      });
      var a = s(4623);
      let i = (0, a.tv)(
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
        n = (0, a.tv)(
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
    16691: function (e, t, s) {
      e.exports = s(67447);
    },
    61396: function (e, t, s) {
      e.exports = s(25250);
    },
  },
  function (e) {
    e.O(0, [895, 623, 250, 749, 971, 938, 744], function () {
      return e((e.s = 55488));
    }),
      (_N_E = e.O());
  },
]);
