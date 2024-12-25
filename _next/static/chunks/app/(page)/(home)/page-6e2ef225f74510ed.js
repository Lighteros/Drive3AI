(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [110],
  {
    55364: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 81749, 23)),
        Promise.resolve().then(a.bind(a, 32585)),
        Promise.resolve().then(a.bind(a, 42587)),
        Promise.resolve().then(a.bind(a, 5100)),
        Promise.resolve().then(a.bind(a, 83531)),
        Promise.resolve().then(a.bind(a, 82515)),
        Promise.resolve().then(a.bind(a, 47824)),
        Promise.resolve().then(a.bind(a, 70294)),
        Promise.resolve().then(a.bind(a, 76506)),
        Promise.resolve().then(a.bind(a, 8233));
    },
    98838: function (e, t, a) {
      "use strict";
      var i = a(57437),
        n = a(83531),
        r = a(65516),
        o = a(51138),
        s = a(86158),
        l = a(16691),
        c = a.n(l),
        m = a(61396),
        h = a.n(m);
      t.Z = (e) => {
        let { item: t, tag: a } = e,
          l = new Date(t.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          m = "".concat(s.Z.BLOG, "/").concat(t.slug);
        return (0, i.jsxs)("div", {
          className: "flex flex-col gap-6 flex-1",
          children: [
            (0, i.jsx)(h(), {
              href: m,
              className:
                "relative aspect-video rounded-lg border border-black overflow-hidden hover:opacity-90",
              children:
                t.feature_image &&
                (0, i.jsx)(c(), {
                  className: "object-cover",
                  src: t.feature_image,
                  alt: t.title,
                  quality: "100",
                  fill: !0,
                  sizes:
                    "(min-width: 1440px) 33vw, (min-width: 768px) 50vw, 100vw",
                }),
            }),
            (0, i.jsxs)("div", {
              className: "flex flex-col justify-between gap-6 flex-grow",
              children: [
                (0, i.jsxs)("div", {
                  className: "space-y-3 text-black",
                  children: [
                    (0, i.jsx)(o.Z, {
                      tag: "span",
                      size: "xxs",
                      className: "block",
                      children: l,
                    }),
                    (0, i.jsx)(r.Z, {
                      tag: null != a ? a : "h3",
                      size: "h5",
                      children: t.title,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    99464: function (e, t, a) {
      "use strict";
      var i = a(57437),
        n = a(22169);
      t.Z = (e) => {
        let { children: t, className: a } = e;
        return (0, i.jsx)("div", {
          className: (0, n.cn)("grid md:grid-cols-2 xl:grid-cols-3 gap-8", a),
          children: t,
        });
      };
    },
    83531: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(57437),
        n = a(22169),
        r = a(61396),
        o = a.n(r);
      a(2265),
        (t.default = (e) => {
          let {
            text: t,
            external: a,
            href: r,
            className: s,
            color: l = "black",
            download: c,
          } = e;
          return (0, i.jsxs)(o(), {
            target: a ? "_blank" : "_self",
            href: r,
            download: c,
            className: (0, n.cn)(
              "relative  overflow-hidden inline-block group pt-0.5",
              {
                "pr-8": a,
                "text-black": "black" === l,
                "text-green": "green" === l,
                "text-green-dark": "green-dark" === l,
              },
              s
            ),
            children: [
              (0, i.jsx)("span", {
                className:
                  "font-formula text-sm font-semibold inline-block group-hover:-translate-y-0.5 transition-transform",
                children: t,
              }),
              a &&
                (0, i.jsx)("i", {
                  className:
                    "icon-arrow absolute right-0 bottom-1.5 text-lg group-hover:-translate-y-0.5 transition-transform",
                }),
              (0, i.jsx)("span", {
                className: (0, n.cn)(
                  "w-full h-0.5 absolute bottom-0 left-0 -translate-x-full transition-[transform]",
                  "group-hover:translate-x-0",
                  {
                    "bg-black": "black" === l,
                    "bg-green": "green" === l,
                    "bg-green-dark": "green-dark" === l,
                  }
                ),
              }),
            ],
          });
        });
    },
    87925: function (e, t, a) {
      "use strict";
      var i = a(57437),
        n = a(65516),
        r = a(51138),
        o = a(22169);
      t.Z = (e) => {
        let {
          children: t,
          className: a,
          id: s,
          title: l,
          desc: c,
          full: m,
          fullDesc: h = !1,
          headingTag: d = "h2",
        } = e;
        return (0, i.jsx)("section", {
          id: s,
          className: (0, o.cn)("py-[4.5rem] md:py-24 xl:py-32", a),
          children: (0, i.jsx)("div", {
            className: (0, o.cn)({ container: !m }),
            children: (0, i.jsxs)("div", {
              className: "space-y-8 md:space-y-10 px-4",
              children: [
                (l || c) &&
                  (0, i.jsxs)("div", {
                    className: "space-y-6 text-center",
                    children: [
                      l && (0, i.jsx)(n.Z, { tag: d, size: "h3", children: l }),
                      c &&
                        (0, i.jsx)(r.Z, {
                          tag: "p",
                          size: "lg",
                          className: (0, o.cn)("mx-auto", h ? "" : "max-w-md"),
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
    59120: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = a(57437),
        n = a(22169);
      function r(e) {
        let { className: t, ...a } = e;
        return (0, i.jsx)("div", {
          className: (0, n.cn)(
            "animate-pulse rounded-md bg-slate-100 dark:bg-slate-800",
            t
          ),
          ...a,
        });
      }
      var o = () =>
        (0, i.jsxs)("div", {
          className: "flex flex-col gap-6 flex-1",
          children: [
            (0, i.jsx)(r, {
              className:
                "aspect-video rounded-lg border border-black bg-charcoal",
            }),
            (0, i.jsxs)("div", {
              className: "flex flex-col justify-between gap-6 flex-grow",
              children: [
                (0, i.jsxs)("div", {
                  className: "space-y-3 text-black",
                  children: [
                    (0, i.jsx)(r, {
                      className: "w-full h-[1rem] xl:h-[1.125rem] bg-charcoal",
                    }),
                    (0, i.jsx)(r, {
                      className:
                        "w-full h-[1.40625rem] lg:h-[1.71875rem] xl:h-[1.875rem] bg-charcoal",
                    }),
                  ],
                }),
                (0, i.jsx)(r, {
                  className: "w-full h-[2.0625rem] bg-charcoal",
                }),
              ],
            }),
          ],
        });
    },
    82515: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(57437),
        n = a(86158),
        r = a(22169);
      t.default = (e) => {
        let { src: t, webm: a, className: o, poster: s, style: l } = e;
        return (0, i.jsxs)("video", {
          style: l,
          className: (0, r.cn)("w-full pointer-events-none", o),
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          children: [
            t &&
              (0, i.jsx)("source", {
                src: (0, n.$)(t),
                type: 'video/mp4; codecs="hvc1"',
              }),
            a && (0, i.jsx)("source", { src: (0, n.$)(a), type: "video/webm" }),
          ],
        });
      };
    },
    47824: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(57437),
        n = a(59120),
        r = a(98838),
        o = a(99464),
        s = a(87925),
        l = a(65516),
        c = a(7506),
        m = a(48012),
        h = a(59077);
      let d = new m.Z(c.Z.server.blog),
        p = [, , ,].fill(0);
      t.default = () => {
        let { data: e, isFetching: t } = (0, h.useQuery)({
          queryKey: "latest-news",
          queryFn: () => d.posts.browse({ limit: 3 }),
        });
        return (0, i.jsxs)(s.Z, {
        });
      };
    },
    70294: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(57437),
        n = a(65516),
        r = a(51138),
        o = a(22169),
        s = a(2265);
      let l = {
          2023: [
            {
              quarter: "Q3",
              items: [
                {
                  tag: "Blockchain",
                  content: "Establish Drive3AI IBC Relayer to Cosmos Hub, Osmosis",
                },
                { tag: "Blockchain", content: "Deploy Drive3AI Node v2" },
                {
                  tag: "AI",
                  content: "Publish paper at ICCV 2023 (rank A* AI conference)",
                },
                { tag: "Drive3AI", content: "Partnership with VinAI Research" },
              ],
            },
            {
              quarter: "Q2",
              items: [
                { tag: "Blockchain", content: "Keplr Wallet Integration" },
                { tag: "AI", content: "Publish Drive3AI GDANCE dataset" },
                {
                  tag: "AI",
                  content: "Develop solution for Web3 AI-powered Metaverse",
                },
                {
                  tag: "AI",
                  content:
                    "Develop Decentralized AI Computing Infra Service with Decentralized Federated Learning",
                },
                { tag: "AI", content: "Develop Generative AI dApps" },
              ],
            },
            {
              quarter: "Q1",
              items: [
                {
                  tag: "Blockchain",
                  content: "Integrate EVM Smart Contract into Drive3AI Network",
                },
                {
                  tag: "Blockchain",
                  content:
                    "Upgrade Drive3AI Network Explorer with EVM & Cosmos Transaction ",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at (CVPR) 2023 (The #1 Conference/Journal in Engineering & Computer Science)",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at WACV 2023 (rank A* - premier AI conference)",
                },
              ],
            },
          ],
          2022: [
            {
              quarter: "Q4",
              items: [
                {
                  tag: "Blockchain",
                  content: "Develop Gravity Bridge Module for Drive3AI Network",
                },
                {
                  tag: "AI",
                  content:
                    "Develop Generative AI solution for animation generation",
                },
              ],
            },
            {
              quarter: "Q3",
              items: [
                {
                  tag: "Blockchain",
                  content: "Develop IBC Module for Drive3AI Network",
                },
                { tag: "Blockchain", content: "Crypto.com Listing Drive3AI Token" },
                {
                  tag: "AI",
                  content:
                    "Develop Generative AI solution for Video Generation",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at IV 2022 (rank A - premier robotics conference)",
                },
              ],
            },
            {
              quarter: "Q2",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Deploy File Storage Distribution Optimization in Drive3AI dCDN",
                },
                {
                  tag: "AI",
                  content: "Deploy AI Smart Caching & Routing in Drive3AI dCDN",
                },
                {
                  tag: "AI",
                  content: "Develop Generative AI solution for Art Generation",
                },
              ],
            },
            {
              quarter: "Q1",
              items: [
                { tag: "Blockchain", content: "Integrate Metamask Wallet" },
                {
                  tag: "Blockchain",
                  content: "Drive3AI dCDN v2 with File Distribution Optimization",
                },
                { tag: "Blockchain", content: "Coinbase Listing Drive3AI Token" },
                {
                  tag: "AI",
                  content:
                    "Develop video analytics solution for smart advertising, customer personalization",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at CVPR 2022 (The #1 Conference/Journal in Engineering & Computer Science)",
                },
              ],
            },
          ],
          2021: [
            {
              quarter: "Q4",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Deploy Drive3AI Network Mainnet v1: Cosmos Blockchain with EVM Compatible",
                },
                {
                  tag: "Blockchain",
                  content: "Deploy Drive3AI dCDN v1 Mainnet in Drive3AI Network",
                },
                {
                  tag: "Drive3AI",
                  content:
                    "Partnership with UNDP to deploy BeetleBot - autonomous delivery-robot solution for hospital",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at the (TMI) 2021 (rank A* - premier AI journal)",
                },
                {
                  tag: "AI",
                  content: "Runner-up Winner at Qualcomm Innovation Challenge",
                },
                { tag: "Drive3AI", content: "Partnership with Qualcomm" },
              ],
            },
            {
              quarter: "Q3",
              items: [
                { tag: "Blockchain", content: "Indodax Listing Drive3AI Token" },
                {
                  tag: "AI",
                  content: "Deploy food waste analytics solution for Hotel",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at MICCAI 2021 (rank A* - premier AI & medical imaging conference)",
                },
              ],
            },
            {
              quarter: "Q2",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Integrate Drive3AI Network as Layer-1 Cosmos-based Blockchain with EVM-compatible",
                },
                {
                  tag: "AI",
                  content:
                    "Develop AI Smart Caching & Routing in Drive3AI Network dCDN",
                },
                { tag: "Blockchain", content: "Kucoin Listing Drive3AI Token" },
              ],
            },
            {
              quarter: "Q1",
              items: [
                {
                  tag: "Blockchain",
                  content: "Deploy Drive3AI Network Website v1.0",
                },
                {
                  tag: "Blockchain",
                  content:
                    "Deploy Drive3AI Tube v1.0 as proof of concept on Web3 Streaming Infra Service",
                },
                {
                  tag: "Blockchain",
                  content:
                    "Deploy Drive3AI Staking, Drive3AI Blockchain Wallet on Drive3AI Network Testnet",
                },
                {
                  tag: "Blockchain",
                  content: "Drive3AI Network Public IDO Launch",
                },
                {
                  tag: "AI",
                  content:
                    "Develop video analytics solution for Food Waste Analytics",
                },
                {
                  tag: "AI",
                  content: "Winner at Ho Chi Minh City AI Challenge 2020",
                },
                {
                  tag: "AI",
                  content:
                    "Publish 1 paper at The Conference on Computer Vision and Pattern Recognition (CVPR) 2021 (The #1 Conference/Journal in Engineering & Computer Science)",
                },
                {
                  tag: "Drive3AI",
                  content: "Partnership with Hewlett Packard Enterprise (HPE)",
                },
              ],
            },
          ],
          2020: [
            {
              quarter: "Q4",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Develop and audit smart contract for $Drive3AI ERC-20 and BEP-20",
                },
                {
                  tag: "Blockchain",
                  content: "Develop Drive3AI Bridge Assets: $Drive3AI ERC-20, BEP-20",
                },
                {
                  tag: "AI",
                  content:
                    "Deploy BeetleBot - autonomous delivery-robot solution for hospital",
                },
                { tag: "AI", content: "Winner at HackCovy 2020 Challenge" },
                {
                  tag: "AI",
                  content:
                    "Publish 1 paper at the European Conference on Computer Vision (ECCV) 2020 (rank A* - premier AI conference)",
                },
                {
                  tag: "Drive3AI",
                  content:
                    "Partnership with United Nations Development Programme (UNDP)",
                },
              ],
            },
            {
              quarter: "Q3",
              items: [
                { tag: "Blockchain", content: "Develop Drive3AI Tube v1.0" },
                {
                  tag: "Blockchain",
                  content:
                    "Develop Web3 Streaming Infra Service using Drive3AI Network dCDN",
                },
                {
                  tag: "Blockchain",
                  content: "Develop Drive3AI Staking",
                },
                {
                  tag: "AI",
                  content: "Deploy video analytics solution for AI Warehouse",
                },
                {
                  tag: "AI",
                  content:
                    "Deploy BeetleBot - autonomous delivery-robot solution for hospital",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at BMVC 2020 (rank A - premier AI conference)",
                },
                {
                  tag: "Drive3AI",
                  content:
                    "Partnership with NVIDIA, joining NVIDIA Inception Program",
                },
              ],
            },
            {
              quarter: "Q2",
              items: [
                {
                  tag: "AI",
                  content:
                    "Develop BeetleBot - Autonomous last-mile delivery robot solution for hospitality and healthcare",
                },
                {
                  tag: "AI",
                  content:
                    "Publish paper at IROS 2020 (rank A* - premier AI & Robotics conference)",
                },
                {
                  tag: "",
                  content: "Academic partnership with Imperial College London",
                },
              ],
            },
            {
              quarter: "Q1",
              items: [
                { tag: "Blockchain", content: "Develop Drive3AI Wallet Web 1.0" },
                {
                  tag: "AI",
                  content: "Develop video analytics solution for AI Warehouse",
                },
                { tag: "AI", content: "Publish paper at UKRAS 2020" },
              ],
            },
          ],
          2019: [
            {
              quarter: "Q4",
              items: [
                { tag: "AI", content: "Winner at Zalo AI Challenge" },
                {
                  tag: "AI",
                  content:
                    "Publish paper at MICCAI 2019 conference (rank A* - premier AI & medical imaging conference)",
                },
                {
                  tag: "AI",
                  content:
                    "Publish 2 papers at CVPR 2019 (The #1 Conference/Journal in Engineering & Computer Science)",
                },
                {
                  tag: "AI",
                  content:
                    "Present technical talk and publish 2 papers at **NVIDIA GTC 2019**, Silicon Valley (The #1 AI Developer Conference)",
                },
                {
                  tag: "AI",
                  content:
                    "Academic partnership with The University of Adelaide",
                },
              ],
            },
            {
              quarter: "Q3",
              items: [
                {
                  tag: "Blockchain",
                  content: "Develop Drive3AI Node v1.0 using Electron",
                },
                {
                  tag: "AI",
                  content:
                    "Design and develop & benchmark Proof of Transcoding using AI",
                },
                {
                  tag: "AI",
                  content:
                    "Develop & deploy license plate recognition system for AI Parking System",
                },
              ],
            },
            {
              quarter: "Q2",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Deploy & benchmarking the Blockchain Testnet with Cosmos SDK",
                },
                {
                  tag: "AI",
                  content: "Develop VQA solution for medical imaging",
                },
                {
                  tag: "AI",
                  content:
                    "Publish 2 papers at ICCV 2019 (rank A* - premier AI conference)",
                },
                {
                  tag: "AI",
                  content:
                    "Academic partnership with Italian Institute of Technology (IIT)",
                },
              ],
            },
            {
              quarter: "Q1",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Building new blockchain based on Cosmos SDK to support for higher throughput and fast finality",
                },
                {
                  tag: "AI",
                  content:
                    "Deploy video analytics solutions for smart cinema, smart building",
                },
              ],
            },
          ],
          2018: [
            {
              quarter: "Q4",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Develop HLS Live Streaming in P2P network using WebRTC & blockchain technology",
                },
                {
                  tag: "Blockchain",
                  content:
                    "Develop HTML5 JS Player, iOS, Android HLS Native Player to work with P2P Streaming",
                },
                {
                  tag: "AI",
                  content:
                    "Deploy Visual Question Answering in robotics applications",
                },
                {
                  tag: "AI",
                  content:
                    "Apply deep learning for building Video & Data Analytics solutions",
                },
                {
                  tag: "Drive3AI",
                  content: "Academic partnership with University of Liverpool",
                },
              ],
            },
            {
              quarter: "Q3",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Develop & benchmark Proof of Storage, Proof of Delivery",
                },
                {
                  tag: "AI",
                  content:
                    "Winner (Top 1) at AI VQA 2018 Challenge, hosted by CVPR (top 1 Conference/Journal in Engineering & Computer Science)",
                },
                { tag: "AI", content: "Found Drive3AI AI Research" },
                {
                  tag: "Drive3AI",
                  content:
                    "Academic partnership with Queensland University of Technology",
                },
              ],
            },
            {
              quarter: "Q2",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Implement Proof of Concept with P2P video streaming with ERC-20 Token Incentivization mechanism",
                },
                {
                  tag: "AI",
                  content: "Develop AI Visual Question Answering (VQA) system",
                },
              ],
            },
            {
              quarter: "Q1",
              items: [
                {
                  tag: "AI",
                  content:
                    "Develop KYC (Know Your Customer) system including identity card recognition, face verification, liveness detection",
                },
                {
                  tag: "Partnership",
                  content:
                    "Academic partnership with Singapore University of Technology and Design, Vietnam National University - University of Science",
                },
              ],
            },
          ],
          2017: [
            {
              quarter: "Q4",
              items: [
                {
                  tag: "Blockchain",
                  content:
                    "Research about blockchain technology, EVM smart contract",
                },
              ],
            },
            {
              quarter: "Q3",
              items: [
                {
                  tag: "Drive3AI",
                  content:
                    "Develop Internal Team Chat & Video Conference Platform",
                },
                {
                  tag: "AI",
                  content:
                    "Develop product tagging and large-scale retrieval system",
                },
              ],
            },
            {
              quarter: "Q2",
              items: [
                {
                  tag: "Drive3AI",
                  content:
                    "Develop Video Conference Streaming Technique with WebRTC",
                },
                {
                  tag: "Drive3AI",
                  content:
                    "Integrate Video Streaming & Live Streaming from Media Streaming Server (Jitsi, Kurento) to P2P Streaming with WebRTC",
                },
              ],
            },
          ],
          "2016-2014": [
            {
              quarter: "",
              items: [
                {
                  tag: "Drive3AI",
                  content:
                    "Develop ERP Network Logistics & Supply Chain: All in One Solution",
                },
                {
                  tag: "AI",
                  content:
                    "Develop smart routing and auto delivery scheduling system",
                },
              ],
            },
          ],
        },
        c = Object.keys(l).sort((e, t) =>
          "2016-2014" === e ? 1 : "2016-2014" === t ? -1 : t.localeCompare(e)
        );
      t.default = () => {
        let e = (0, s.useRef)(null),
          [t, a] = s.useState(c[0]),
          [m, h] = s.useState(l[t][0]),
          d = l[t];
        return (0, i.jsxs)("div", {
          className:
            "min-h-[25rem] flex flex-col justify-between pt-2 space-y-6",
          children: [
            (0, i.jsxs)("div", {
              className: "space-y-4",
              children: [
                (0, i.jsx)(n.Z, {
                  size: "h4",
                  tag: "h3",
                  children: "".concat(m.quarter, " ").concat(t),
                }),
                (0, i.jsx)("div", {
                  ref: e,
                  className: "our-journey-cards overflow-x-auto",
                  children: (0, i.jsx)("div", {
                    className: "flex flex-row gap-6 pb-2 md:pb-1",
                    children: m.items.map((e, a) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className: (0, o.cn)(
                            "p-8 border border-black rounded-lg overflow-hidden",
                            "flex flex-row gap-4 items-center justify-between w-[25rem] min-h-[15.375rem] shrink-0"
                          ),
                          children: [
                            (0, i.jsx)(n.Z, {
                              size: "h5",
                              tag: "p",
                              children: e.content,
                            }),
                            (0, i.jsx)(r.Z, {
                              className: "bg-white px-3 py-2 rounded-md",
                              size: "xs",
                              tag: "span",
                              children: e.tag,
                            }),
                          ],
                        },
                        "current-quarter-"
                          .concat(t, "-")
                          .concat(m.quarter, "-")
                          .concat(a)
                      )
                    ),
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "overflow-x-auto",
              children: (0, i.jsx)("div", {
                className: "flex flex-row items-center",
                children: c.map((n) => {
                  let r = "text-base font-semibold font-formula text-black/50";
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: "flex flex-row",
                      children: [
                        (0, i.jsx)("button", {
                          type: "button",
                          className: (0, o.cn)("px-2 pt-2 pb-1", r, {
                            hidden: t === n,
                          }),
                          onClick: () => {
                            a(n),
                              h(l[n][0]),
                              e.current && e.current.scrollTo(0, 0);
                          },
                          children: n,
                        }),
                        (0, i.jsx)("div", {
                          className: (0, o.cn)(
                            "flex flex-row overflow-hidden w-0 h-0 transition-[width]",
                            { "w-auto h-auto": t === n }
                          ),
                          children: d.map((t, a) => {
                            let s = "".concat(t.quarter, " ").concat(n),
                              l = m.quarter === t.quarter;
                            return (0, i.jsx)(
                              "button",
                              {
                                type: "button",
                                className: (0, o.cn)(
                                  "overflow-hidden relative transition-[padding] duration-700",
                                  r,
                                  {
                                    "text-black": l,
                                    "px-10": l && a > 0 && a < d.length,
                                    "pl-10": l && a === d.length - 1,
                                    "pr-10": l && 0 === a && a !== d.length - 1,
                                  }
                                ),
                                onClick: () => {
                                  h(t), e.current && e.current.scrollTo(0, 0);
                                },
                                children: (0, i.jsxs)("span", {
                                  className:
                                    "relative block px-2 pt-2 pb-1 whitespace-nowrap",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "absolute top-1/2 -translate-y-1/2 right-full w-10 h-[1px] bg-black",
                                    }),
                                    (0, i.jsx)("span", { children: s }),
                                    (0, i.jsx)("span", {
                                      className:
                                        "absolute top-1/2 -translate-y-1/2 left-full w-10 h-[1px] bg-black",
                                    }),
                                  ],
                                }),
                              },
                              s
                            );
                          }),
                        }),
                      ],
                    },
                    n
                  );
                }),
              }),
            }),
          ],
        });
      };
    },
    76506: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var i = a(57437),
        n = a(87925),
        r = a(22169),
        o = a(5100),
        s = a(65516),
        l = a(51138),
        c = (e) => {
          let { mp4: t, webm: a, className: n } = e;
          return (0, i.jsx)("div", {
            className: (0, r.cn)(
              "relative w-6 h-6 inline-block overflow-hidden",
              n
            ),
            children: (0, i.jsx)("div", {
              className:
                "w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              children: (0, i.jsxs)("video", {
                className: "w-full",
                loop: !0,
                muted: !0,
                autoPlay: !0,
                playsInline: !0,
                children: [
                  t &&
                    (0, i.jsx)("source", {
                      src: t,
                      type: 'video/mp4; codecs="hvc1"',
                    }),
                  a && (0, i.jsx)("source", { src: a, type: "video/webm" }),
                ],
              }),
            }),
          });
        },
        m = a(86158);
      let h = [
        {
          title: "AI",
          content:
            "Collaborative and decentralized AI computation is now available to anyone, anywhere.",
          href: m.Z.WEB3_AI,
          icon: {
            mp4: "".concat((0, m.$)("/icons/routing.mp4")),
            webm: "".concat((0, m.$)("/icons/routing.webm")),
            poster: "",
          },
        },
        {
          title: "Storage",
          content:
            "Affordable, faster and more secure decentralized storage for dApps and developers.",
          href: m.Z.STORE,
          icon: {
            mp4: "".concat((0, m.$)("/icons/transfer.mp4")),
            webm: "".concat((0, m.$)("/icons/transfer.webm")),
            poster: "",
          },
        },
        {
          title: "Streaming",
          content:
            "Enabling businesses to deliver high-quality video content globally.",
          href: m.Z.WEB3_STREAMING,
          icon: {
            mp4: "".concat((0, m.$)("/icons/video.mp4")),
            webm: "".concat((0, m.$)("/icons/video.webm")),
            poster: "",
          },
        },
        {
          title: "IPFS",
          content: "Simple and reliable pinning infrastructure.",
          href: m.Z.IPFS,
          icon: {
            mp4: "".concat((0, m.$)("/icons/live-stream.mp4")),
            webm: "".concat((0, m.$)("/icons/live-stream.webm")),
            poster: "",
          },
        },
      ];
      var d = (e) => {
          let { bg: t } = e;
          return (0, i.jsx)(i.Fragment, {
            children: h.map((e) =>
              (0, i.jsxs)(
                "div",
                {
                  className: (0, r.cn)(
                    "bg-charcoal/70 text-white rounded-lg p-6 w-[22.5rem]",
                    "absolute",
                    {
                      "right-[calc(50%+280px)] top-[281px]": "AI" === e.title,
                      "left-[calc(50%+280px)] top-[281px]":
                        "Storage" === e.title,
                      "left-[calc(50%+216px)] bottom-[145px]":
                        "Streaming" === e.title,
                      "right-[calc(50%+216px)] bottom-[145px]":
                        "IPFS" === e.title,
                      "bg-[black]": "black" === t,
                    }
                  ),
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex flex-row gap-6 items-center",
                      children: [
                        (0, i.jsx)(c, {
                          mp4: e.icon.mp4,
                          webm: e.icon.webm,
                          className: "h-10 w-10 invert",
                        }),
                        (0, i.jsx)(s.Z, {
                          size: "h5",
                          tag: "h2",
                          className:
                            "inline-flex gap-6 items-center pt-[0.25em]",
                          children: (0, i.jsx)("span", { children: e.title }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "space-y-6 pt-6",
                      children: [
                        (0, i.jsx)(l.Z, {
                          size: "md",
                          tag: "p",
                          className: "text-white/80",
                          children: e.content,
                        }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)(o.default, {
                            href: e.href,
                            size: "sm",
                            children: "Learn More",
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                "features-".concat(e.title)
              )
            ),
          });
        },
        p = a(90136),
        x = (e) => {
          let { bg: t } = e;
          return (0, i.jsx)("div", {
            className: "mt-28",
            children: (0, i.jsx)("div", {
              className: "flex flex-col gap-4 max-w-xs mx-auto",
              children: h.map((e) =>
                (0, i.jsxs)(
                  p.zF,
                  {
                    className: (0, r.cn)(
                      "bg-charcoal/70 text-white rounded-lg p-6",
                      { "bg-[black]": "black" === t }
                    ),
                    children: [
                      (0, i.jsx)(p.wy, {
                        asChild: !0,
                        className:
                          "[&[data-state=open]>button]:rotate-45 cursor-pointer",
                        children: (0, i.jsxs)("div", {
                          className: "flex flex-row justify-between",
                          children: [
                            (0, i.jsxs)(s.Z, {
                              size: "h5",
                              tag: "h2",
                              className: "inline-flex gap-6 items-center",
                              children: [
                                (0, i.jsx)(c, {
                                  mp4: e.icon.mp4,
                                  webm: e.icon.webm,
                                  className: "h-10 w-10 invert",
                                }),
                                (0, i.jsx)("span", {
                                  className: "inline-block pt-[0.25em]",
                                  children: e.title,
                                }),
                              ],
                            }),
                            (0, i.jsx)("button", {
                              type: "button",
                              className: "transition-[transform] w-8 h-8",
                              children: (0, i.jsx)("i", {
                                className:
                                  "icon-plus text-[1.375rem] m-auto block",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(p.Fw, {
                        className: (0, r.cn)(
                          "overflow-hidden",
                          "data-[state=open]:animate-slide-down",
                          "data-[state=closed]:animate-slide-up"
                        ),
                        children: (0, i.jsxs)("div", {
                          className: "space-y-6 pt-6",
                          children: [
                            (0, i.jsx)(l.Z, {
                              size: "md",
                              tag: "p",
                              className: "text-white/80",
                              children: e.content,
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)(o.default, {
                                href: e.href,
                                size: "sm",
                                children: "Learn More",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  "features-".concat(e.title)
                )
              ),
            }),
          });
        },
        u = a(30975),
        k = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":24,"ip":0,"op":360,"w":960,"h":960,"nm":"Pre-comp 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 4","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":50.88,"s":[960,960,0],"to":[-33.333,0,0],"ti":[33.333,0,0]},{"t":65.28,"s":[760,960,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[60,60,100],"ix":6}},"ao":0,"ip":0,"op":1106.88,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Z","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23.04,"s":[0]},{"t":24.96,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[182,-85],[310,-85],[171.5,85.75],[309,85.75]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":33,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24.96,"s":[48]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33.6,"s":[27.143]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":35.52,"s":[27.143]},{"t":43.2,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24.96,"s":[48.1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33.6,"s":[71.814]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":35.52,"s":[71.814]},{"t":43.2,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":23.04,"op":1114.56,"st":-7.68,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"O","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":16.32,"s":[0]},{"t":18.24,"s":[100]}],"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[51,0,0],"ix":2},"a":{"a":0,"k":[-39.644,288.644,0],"ix":1},"s":{"a":0,"k":[-93,93,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[50.454,0],[0,-50.454],[-50.455,0],[0,50.454]],"o":[[-50.455,0],[0,50.454],[50.454,0],[0,-50.454]],"v":[[0,-91.356],[-90.55,0],[0,91.356],[90.55,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":35,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-39.644,288.644],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.381],"y":[0.997]},"o":{"x":[0.654],"y":[-0.003]},"t":18.24,"s":[0.1]},{"t":39.36,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.5],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":18.24,"s":[0]},{"t":39.36,"s":[0]}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18.24,"s":[178]},{"t":39.36,"s":[489]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":16.32,"op":1114.56,"st":-25.92,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"I","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":9.6,"s":[3]},{"t":11.52,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-81,0.022,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[141,141,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":11.52,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.125,1.208],[0.125,0.998]],"c":false}]},{"t":22.08,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.125,60.938],[0.125,-61.625]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":23,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-11.5,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9.6,"op":1114.56,"st":5.76,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"A","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":2.88,"s":[3]},{"t":4.8,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-203.5,0.022,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[141,141,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":4.8,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0.125,1.208],[0.125,0.998],[0.312,1.194]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10.56,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0.125,60.938],[0.125,-61.625],[0.312,60]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"t":15.36,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0.125,60.938],[0.125,-61.625],[0.312,60]],"c":false}]},{"t":25.92,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[38.625,60.938],[38.625,-61.625],[-63.438,60]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":23,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-11.5,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":2.88,"op":1114.56,"st":4.8,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-108.333,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[166.667,166.667,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[637.352,230.48],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0.532020060221,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[594.676,10.24],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":48.96,"op":1119.36,"st":4.8,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Node Outlines","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":50.88,"s":[890,960,0],"to":[48.667,0,0],"ti":[-48.667,0,0]},{"t":65.28,"s":[1182,960,0]}],"ix":2},"a":{"a":0,"k":[60.5,20,0],"ix":1},"s":{"a":0,"k":[310,310,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.319,0],[0.275,-5.55],[0,0]],"o":[[-6.044,0],[0,0],[0,-5.44]],"v":[[0.302,-12.307],[-9.808,-2.143],[9.808,-2.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[6.868,0],[0,8.571],[-7.967,0],[0,-7.527],[0.055,-0.439],[0,0],[0,0],[-6.978,0],[-0.604,2.638],[0,0]],"o":[[-8.297,0],[0,-8.956],[7.857,0],[0,0.605],[0,0],[0,0],[0,6.374],[6.099,0],[0,0],[-1.264,5.055]],"v":[[0.412,14.671],[-12.72,0.001],[0.467,-14.671],[12.72,-1.484],[12.665,0.219],[-9.808,0.219],[-9.808,0.329],[0.467,12.307],[9.533,5.439],[12.335,5.439]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.207843152214,0.839215746113,0.529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[108.103,25.33],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.934,0],[0,7.583],[5.549,0],[0,-7.033]],"o":[[5.549,0],[0,-7.472],[-5.934,0],[0,7.143]],"v":[[-0.055,17.609],[9.781,5.301],[-0.055,-6.895],[-9.615,5.301]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-1.648,-3.572],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[5.329,0],[0,9.231],[-6.648,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.593,3.297],[-6.594,0],[0,-9.121],[5.275,0]],"v":[[9.671,-2.829],[9.781,-2.829],[9.781,-19.973],[12.527,-19.973],[12.527,19.312],[9.781,19.312],[9.781,13.708],[9.671,13.708],[-0.493,19.973],[-12.527,5.301],[-0.439,-9.258]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.207843152214,0.839215746113,0.529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[77.862,19.973],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-6.813,0],[0,6.923],[6.813,0],[0,-6.923]],"o":[[6.813,0],[0,-6.923],[-6.813,0],[0,6.923]],"v":[[0,12.308],[10.33,0],[0,-12.253],[-10.33,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[8.242,0],[0,8.682],[-8.242,0],[0,-8.681]],"o":[[-8.242,0],[0,-8.681],[8.242,0],[0,8.682]],"v":[[0,14.671],[-13.242,0],[0,-14.67],[13.242,0]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.207843152214,0.839215746113,0.529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[48.475,25.33],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":6,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.813,-19.643],[11.813,15.411],[11.703,15.411],[-11.154,-19.643],[-14.89,-19.643],[-14.89,19.643],[-11.869,19.643],[-11.869,-15.357],[-11.759,-15.357],[11.153,19.643],[14.89,19.643],[14.89,-19.643]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.207843152214,0.839215746113,0.529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[15.081,19.643],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1080,"st":0,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":5,"nm":"     POWERED BY PEOPLE","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[512.402,268.852,0],"ix":2},"a":{"a":0,"k":[208.402,-13.148,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0],[-180,0],[0,-1]],"o":[[0,0],[180,0],[0,1]],"v":[[191,39],[413,-108],[635,43]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"},{"inv":false,"mode":"n","pt":{"a":0,"k":{"i":[[0,0]],"o":[[0,0]],"v":[[228,-44]],"c":false},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 2"}],"t":{"d":{"k":[{"s":{"s":32,"f":"PPFormula-SemiCondensedThin","t":"     POWERED BY PEOPLE","j":0,"tr":205,"lh":38.4,"ls":0,"fc":[1,1,1],"sc":[1,1,1],"sw":1,"of":false},"t":0}]},"p":{"m":0,"f":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13,"s":[260]},{"t":39.939453125,"s":[1]}],"ix":5},"l":{"a":0,"k":0,"ix":6},"a":0,"p":1,"r":0},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[{"nm":"Animator 1","s":{"t":0,"xe":{"a":0,"k":0,"ix":7},"ne":{"a":0,"k":0,"ix":8},"a":{"a":0,"k":100,"ix":4},"b":1,"rn":0,"sh":1,"s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13,"s":[0]},{"t":40,"s":[100]}],"ix":1},"r":1},"a":{"o":{"a":0,"k":0,"ix":9}}}]},"ip":0,"op":360,"st":0,"bm":0}]}],"fonts":{"list":[{"fName":"PPFormula-SemiCondensedThin","fFamily":"PP Formula","fStyle":"Semi Condensed Thin","ascent":81.6094262693077},{"fName":"PPNeueMontreal-Thin","fFamily":"PP Neue Montreal","fStyle":"Thin","ascent":71.509633788839}]},"layers":[{"ddd":0,"ind":1,"ty":5,"nm":"You can run a Node and contribute.","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":38,"s":[670,688.212,0],"to":[-31.667,0,0],"ti":[31.667,0,0]},{"t":60,"s":[480,688.212,0]}],"ix":2},"a":{"a":0,"k":[0.824,-7.788,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"s":22,"f":"PPNeueMontreal-Thin","t":"You can run a Node and contribute.","j":2,"tr":85,"lh":26.4,"ls":0,"fc":[1,1,1],"sc":[1,1,1],"sw":1,"of":false},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[{"nm":"Animator 1","s":{"t":0,"xe":{"a":0,"k":0,"ix":7},"ne":{"a":0,"k":0,"ix":8},"a":{"a":0,"k":100,"ix":4},"b":1,"rn":0,"sh":1,"s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":38,"s":[0]},{"t":60,"s":[100]}],"ix":1},"r":1},"a":{"o":{"a":0,"k":0,"ix":9}}}]},"ip":38,"op":415,"st":-23,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Aioz_1080x1080_WordMark_Node","refId":"comp_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[0]},{"t":37.599609375,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[480,403,0],"ix":2},"a":{"a":0,"k":[960,960,0],"ix":1},"s":{"a":0,"k":[36,36,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":28,"s":[0]},{"t":109.599609375,"s":[5]}],"ix":2},"w":1920,"h":1920,"ip":28,"op":426,"st":28,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Drive3AI-Powered-by-people-type","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[480,480,0],"ix":2},"a":{"a":0,"k":[720,480,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":1440,"h":960,"ip":0,"op":360,"st":0,"bm":0}],"markers":[],"chars":[{"ch":" ","size":32,"style":"Semi Condensed Thin","w":26.8,"data":{},"fFamily":"PP Formula"},{"ch":"P","size":32,"style":"Semi Condensed Thin","w":61.2,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,16.818],[0,0],[16.315,0],[0,0]],"o":[[0,0],[0,0],[0,0],[16.315,0],[0,0],[0,-16.818],[0,0],[0,0]],"v":[[8.258,0],[13.495,0],[13.495,-29.407],[34.543,-29.407],[58.109,-55.087],[58.109,-57.202],[34.543,-82.178],[8.258,-82.178]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-15.106],[0,0],[12.991,0]],"o":[[0,0],[0,0],[12.991,0],[0,0],[0,15.106],[0,0]],"v":[[13.495,-33.939],[13.495,-77.747],[34.14,-77.747],[52.67,-57.202],[52.67,-55.087],[34.14,-33.939]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"P","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"O","size":32,"style":"Semi Condensed Thin","w":65,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-18.933,0],[0,16.516],[0,0],[18.832,0],[0,-16.315],[0,0]],"o":[[18.832,0],[0,0],[0,-16.315],[-18.832,0],[0,0],[0,16.516]],"v":[[32.73,1.007],[59.921,-28.299],[59.921,-53.979],[32.73,-83.185],[5.539,-53.979],[5.539,-28.299]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,16.516],[0,0],[-13.797,0],[0,-16.415],[0,0],[13.797,0]],"o":[[0,0],[0,-16.415],[13.797,0],[0,0],[0,16.516],[-13.797,0]],"v":[[10.876,-28.4],[10.876,-53.778],[32.73,-78.452],[54.483,-53.778],[54.483,-28.4],[32.73,-3.726]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"O","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"W","size":32,"style":"Semi Condensed Thin","w":92.6,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[22.156,0],[28.702,0],[46.426,-74.927],[46.628,-75.531],[46.729,-74.927],[64.554,0],[71.1,0],[90.637,-82.178],[85.3,-82.178],[67.978,-6.949],[67.877,-6.445],[67.676,-6.949],[50.153,-82.178],[43.002,-82.178],[25.479,-6.647],[7.956,-82.178],[2.518,-82.178]],"c":true},"ix":2},"nm":"W","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"W","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"E","size":32,"style":"Semi Condensed Thin","w":54.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[8.258,0],[50.052,0],[50.052,-4.431],[13.495,-4.431],[13.495,-38.873],[48.743,-38.873],[48.743,-43.304],[13.495,-43.304],[13.495,-77.747],[50.052,-77.747],[50.052,-82.178],[8.258,-82.178]],"c":true},"ix":2},"nm":"E","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"E","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"R","size":32,"style":"Semi Condensed Thin","w":63.3,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.108,-1.309],[0,0],[0,2.82],[0,0],[7.855,2.417],[0,9.567],[0,0],[17.12,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-15.005],[0,0]],"o":[[0,0],[-1.108,-1.309],[0,0],[0,-9.97],[9.265,-3.021],[0,0],[0,-16.113],[0,0],[0,0],[0,0],[0,0],[0,0],[7.654,0],[0,0],[0,2.921]],"v":[[52.872,0],[58.209,0],[57.101,-7.352],[57.101,-21.552],[44.714,-39.88],[57.303,-59.518],[57.303,-60.828],[33.334,-82.178],[8.258,-82.178],[8.258,0],[13.495,0],[13.495,-37.564],[33.234,-37.564],[51.764,-21.249],[51.764,-7.352]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-15.005],[0,0],[12.186,0]],"o":[[0,0],[0,0],[13.092,0],[0,0],[0,13.293],[0,0]],"v":[[13.495,-41.995],[13.495,-77.747],[32.529,-77.747],[51.865,-60.828],[51.865,-59.518],[33.334,-41.995]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"R","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"D","size":32,"style":"Semi Condensed Thin","w":64.2,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,23.364],[0,0],[16.516,0],[0,0]],"o":[[0,0],[16.516,0],[0,0],[0,-23.465],[0,0],[0,0]],"v":[[8.258,0],[31.119,0],[58.914,-29.507],[58.914,-52.67],[31.119,-82.178],[8.258,-82.178]],"c":true},"ix":2},"nm":"D","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-18.933],[0,0],[16.415,0]],"o":[[0,0],[0,0],[16.415,0],[0,0],[0,18.933],[0,0]],"v":[[13.495,-4.431],[13.495,-77.747],[30.917,-77.747],[53.476,-52.67],[53.476,-29.507],[30.917,-4.431]],"c":true},"ix":2},"nm":"D","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"D","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"B","size":32,"style":"Semi Condensed Thin","w":61.9,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,15.71],[0,0],[6.949,1.913],[0,9.869],[0,0],[13.092,0],[0,0]],"o":[[0,0],[15.408,0],[0,0],[0,-12.689],[5.539,-2.417],[0,0],[0,-15.308],[0,0],[0,0]],"v":[[8.258,0],[34.845,0],[57.605,-21.249],[57.605,-23.969],[44.714,-44.009],[54.785,-61.029],[54.785,-63.446],[34.241,-82.178],[8.258,-82.178]],"c":true},"ix":2},"nm":"B","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-12.689],[0,0],[13.394,0]],"o":[[0,0],[0,0],[12.085,0],[0,0],[0,13.193],[0,0]],"v":[[13.495,-4.431],[13.495,-41.29],[33.939,-41.29],[52.267,-24.17],[52.267,-21.451],[34.341,-4.431]],"c":true},"ix":2},"nm":"B","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-13.193],[0,0],[7.855,0]],"o":[[0,0],[0,0],[10.071,0],[0,0],[0,13.696],[0,0]],"v":[[13.495,-45.822],[13.495,-77.747],[33.133,-77.747],[49.448,-63.647],[49.448,-61.23],[32.73,-45.822]],"c":true},"ix":2},"nm":"B","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"B","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"Y","size":32,"style":"Semi Condensed Thin","w":57.1,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[26.184,0],[31.421,0],[31.421,-28.802],[55.792,-82.178],[49.951,-82.178],[28.702,-34.946],[7.452,-82.178],[1.712,-82.178],[26.184,-28.802]],"c":true},"ix":2},"nm":"Y","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"Y","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"L","size":32,"style":"Semi Condensed Thin","w":51.1,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[8.258,0],[49.649,0],[49.649,-4.431],[13.495,-4.431],[13.495,-82.178],[8.258,-82.178]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"L","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Formula"},{"ch":"Y","size":22,"style":"Thin","w":59.3,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[31.421,0],[31.421,-29.507],[58.109,-72.006],[54.584,-72.006],[30.112,-32.529],[29.709,-32.529],[5.438,-72.006],[1.712,-72.006],[28.198,-29.507],[28.198,0]],"c":true},"ix":2},"nm":"Y","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"Y","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"o","size":22,"style":"Thin","w":54.2,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-14.703,0],[0,15.811],[14.703,0],[0,-15.811]],"o":[[14.703,0],[0,-15.811],[-14.703,0],[0,15.811]],"v":[[27.292,1.208],[50.958,-25.479],[27.292,-52.167],[3.625,-25.479]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[13.193,0],[0,13.797],[-13.193,0],[0,-13.797]],"o":[[-13.193,0],[0,-13.797],[13.193,0],[0,13.797]],"v":[[27.292,-1.41],[6.848,-25.479],[27.292,-49.548],[47.736,-25.479]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"o","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"u","size":22,"style":"Thin","w":50.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[11.279,0],[0,6.244],[0,0],[0,0],[0,0],[-8.762,0],[-3.223,5.438],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,6.546],[-10.876,0],[0,0],[0,0],[0,0],[0,10.474],[10.071,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.29,-18.027],[22.659,-1.813],[9.164,-14.905],[9.164,-51.361],[6.143,-51.361],[6.143,-14.905],[21.954,0.806],[41.089,-9.769],[41.29,-9.769],[41.29,0],[44.312,0],[44.312,-51.361],[41.29,-51.361]],"c":true},"ix":2},"nm":"u","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"u","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":" ","size":22,"style":"Thin","w":23,"data":{},"fFamily":"PP Neue Montreal"},{"ch":"c","size":22,"style":"Thin","w":51.2,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-14.2,0],[-0.705,9.668],[0,0],[11.682,0],[0,12.589],[-13.596,0],[-0.403,-5.942],[0,0],[11.884,0],[0,-15.811]],"o":[[11.984,0],[0,0],[-0.403,6.445],[-13.596,0],[0,-12.387],[11.581,0],[0,0],[-1.108,-9.467],[-14.2,0],[0,16.013]],"v":[[27.695,1.208],[48.541,-16.818],[45.319,-16.818],[27.695,-1.41],[6.848,-25.58],[27.695,-49.548],[45.319,-34.543],[48.541,-34.543],[27.695,-52.167],[3.625,-25.58]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"c","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"a","size":22,"style":"Thin","w":49.4,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-9.869,0],[-4.129,6.647],[0,0],[-3.928,0],[-0.705,0.101],[0,0],[0.705,0],[0,4.33],[0,0],[9.366,0],[0.504,-7.15],[0,0],[-10.373,0],[0,-7.755],[7.755,-1.208],[0,-9.467]],"o":[[8.157,0],[0,0],[0,6.747],[0.705,0],[0,0],[-0.705,0.101],[-2.921,0],[0,0],[0,-11.682],[-14.502,0],[0,0],[0.504,-7.755],[7.956,0],[0,8.862],[-13.293,2.115],[0,8.359]],"v":[[20.242,1.108],[39.175,-8.258],[39.377,-8.258],[45.52,0.201],[47.836,0],[47.836,-2.618],[45.923,-2.417],[42.398,-8.459],[42.398,-36.557],[25.479,-52.167],[6.042,-36.859],[9.265,-36.859],[25.479,-49.548],[39.377,-38.068],[22.961,-28.198],[3.625,-12.589]],"c":true},"ix":2},"nm":"a","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[12.589,0],[0,7.956],[-9.869,1.208],[-1.511,3.323],[0,0]],"o":[[-9.265,0],[0,-8.057],[7.553,-0.906],[0,0],[0,7.855]],"v":[[21.048,-1.511],[6.848,-13.495],[23.969,-25.58],[39.377,-30.817],[39.377,-17.825]],"c":true},"ix":2},"nm":"a","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"a","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"n","size":22,"style":"Thin","w":50.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[8.762,0],[3.223,-5.64],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-11.279,0],[0,-6.244],[0,0],[0,0],[0,0]],"o":[[-10.071,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-6.546],[10.876,0],[0,0],[0,0],[0,0],[0,-10.474]],"v":[[28.903,-52.167],[9.769,-41.29],[9.567,-41.29],[9.567,-51.361],[6.546,-51.361],[6.546,0],[9.567,0],[9.567,-33.334],[28.198,-49.548],[41.693,-36.456],[41.693,0],[44.714,0],[44.714,-36.456]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"n","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"r","size":22,"style":"Thin","w":29.7,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.611,0],[2.216,-6.747],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-8.862,0],[-0.705,-0.101],[0,0]],"o":[[-7.15,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-10.373],[0.403,0],[0,0],[-1.007,-0.201]],"v":[[25.378,-52.066],[9.769,-40.283],[9.567,-40.283],[9.567,-51.361],[6.546,-51.361],[6.546,0],[9.567,0],[9.567,-31.723],[26.385,-49.347],[29.105,-49.146],[29.105,-51.764]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"r","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"N","size":22,"style":"Thin","w":69.4,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.481,0],[11.481,-67.474],[11.682,-67.474],[57.605,0],[61.633,0],[61.633,-72.006],[58.411,-72.006],[58.411,-4.33],[58.209,-4.33],[12.286,-72.006],[8.258,-72.006],[8.258,0]],"c":true},"ix":2},"nm":"N","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"N","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"d","size":22,"style":"Thin","w":54.6,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[10.574,0],[0,-16.617],[-11.682,0],[-2.921,7.452],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[-3.021,-7.956],[-11.783,0],[0,16.919],[10.675,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[45.419,-37.866],[45.218,-37.866],[25.076,-52.167],[3.625,-25.681],[24.976,1.108],[45.218,-12.891],[45.419,-12.891],[45.419,0],[48.441,0],[48.441,-72.006],[45.419,-72.006]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[10.574,0],[0,15.106],[-10.977,0],[0,-14.804]],"o":[[-10.977,0],[0,-14.804],[10.574,0],[0,15.106]],"v":[[25.681,-1.511],[6.848,-25.681],[25.681,-49.548],[45.419,-25.681]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"d","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"e","size":22,"style":"Thin","w":51.9,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0.906],[14.099,0],[0,-16.415],[-14.502,0],[-2.216,8.963],[0,0],[11.984,0],[0,13.293],[0,0]],"o":[[0.101,-0.906],[0,-12.891],[-14.099,0],[0,15.71],[12.186,0],[0,0],[-1.208,5.64],[-13.596,0],[0,0],[0,0]],"v":[[48.743,-26.184],[48.843,-28.802],[27.191,-52.167],[3.625,-25.378],[26.99,1.208],[48.138,-15.408],[44.916,-15.408],[27.09,-1.41],[6.848,-25.58],[6.848,-26.184]],"c":true},"ix":2},"nm":"e","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-12.589,0],[0,-10.876],[0,0]],"o":[[12.991,0],[0,0],[0.504,-10.977]],"v":[[26.99,-49.548],[45.621,-28.802],[6.848,-28.802]],"c":true},"ix":2},"nm":"e","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"e","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"t","size":22,"style":"Thin","w":24.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-7.452,0],[-1.41,0.201],[0,0],[1.309,0],[0,8.459],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,9.97],[1.108,0],[0,0],[-1.208,0.101],[-6.345,0],[0,0],[0,0],[0,0]],"v":[[22.861,-51.361],[11.481,-51.361],[11.481,-68.481],[8.459,-68.481],[8.459,-51.361],[0.906,-51.361],[0.906,-48.743],[8.459,-48.743],[8.459,-12.085],[19.135,0.201],[22.861,-0.101],[22.861,-2.618],[19.537,-2.417],[11.481,-12.589],[11.481,-48.743],[22.861,-48.743]],"c":true},"ix":2},"nm":"t","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"t","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"i","size":22,"style":"Thin","w":16,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[10.876,-62.238],[10.876,-67.877],[5.237,-67.877],[5.237,-62.238]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[9.567,0],[9.567,-51.361],[6.546,-51.361],[6.546,0]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"i","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":"b","size":22,"style":"Thin","w":54.6,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[11.682,0],[2.921,-7.452],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-10.574,0],[0,16.617]],"o":[[-10.675,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[3.021,7.956],[11.783,0],[0,-16.919]],"v":[[30.011,-52.57],[9.769,-38.571],[9.567,-38.571],[9.567,-72.006],[6.546,-72.006],[6.546,0],[9.567,0],[9.567,-13.596],[9.769,-13.596],[29.91,0.705],[51.361,-25.781]],"c":true},"ix":2},"nm":"b","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[10.977,0],[0,14.804],[-10.574,0],[0,-15.106]],"o":[[-10.574,0],[0,-15.106],[10.977,0],[0,14.804]],"v":[[29.306,-1.913],[9.567,-25.781],[29.306,-49.951],[48.138,-25.781]],"c":true},"ix":2},"nm":"b","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"b","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"},{"ch":".","size":22,"style":"Thin","w":16.6,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[11.179,0],[11.179,-5.64],[5.539,-5.64],[5.539,0]],"c":true},"ix":2},"nm":".","mn":"ADBE Vector Shape - Group","hd":false}],"nm":".","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Neue Montreal"}]}'
        );
      let f = (e) => {
        let { data: t, width: a, height: n } = e;
        return (0, i.jsx)(u.Z, {
          options: {
            loop: !0,
            autoplay: !0,
            animationData: t,
            width: a,
            height: n,
          },
          isClickToPauseDisabled: !0,
          ariaRole: "",
        });
      };
      var y = () =>
          (0, i.jsx)("div", {          
          }),
        g = a(2265),
        A = a(63739),
        v = () => {
          let e = (0, A.ac)("(min-width: 1440px)"),
            [t, a] = (0, g.useState)(),
            [o, s] = g.useState(!1);
          return (
            (0, g.useEffect)(() => {
              s(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
            }, []),
            (0, g.useEffect)(() => {
              a(e);
            }, [e, a]),
            (0, i.jsx)(n.Z, {
            })
          );
        };
    },
    8233: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(57437),
        n = a(65516),
        r = a(22169),
        o = a(2265),
        s = a(74741);
      a(8694), a(55768);
      let l = [
          {
            milestone: { square: "Q4", year: "2023" },
            tasks: ["Drive3AI LP", "Drive3AI W3S Infra"],
          },
          {
            milestone: { square: "Q1", year: "2024" },
            tasks: [
              "Drive3AI dTransfer dApp",
              "Drive3AI Multi-Chain Wallet Browser Extension",
              "Drive3AI Node V3 - AI Computing Integration",
              "Drive3AI W3IPFS Infra",
            ],
          },
          {
            milestone: { square: "Q2", year: "2024" },
            tasks: [
              "Drive3AI W3AI Infra V1 - Decentralized AI as a Service",
              "Drive3AI Drive dApp",
              "Drive3AI Node V4 - Transcoding Integration",
            ],
          },
          {
            milestone: { square: "Q3", year: "2024" },
            tasks: [
              "Drive3AI W3Stream Infra",
              "Drive3AI W3AI Infra V2 - AI Marketplace",
              "Deploy Token Standards: AIOZRC-20, AIOZRC-721, AIOZRC-1155",
              "Drive3AI Gravity Bridge",
            ],
          },
          {
            milestone: { square: "Q4", year: "2024" },
            tasks: [
              "Drive3AI DEX",
              "Drive3AI W3AI V3 - AI Training with Decentralized Federated Learning.",
              "Drive3AI W3AI V3 - Spaces for building AI dApps.",
            ],
          },
        ],
        c = (e) => {
          let { tasks: t, milestone: a } = e;
          return (0, i.jsx)("div", {
            className: (0, r.cn)(
              "roadmap-carousel-item rounded-lg bg-black/75 p-4 md:p-8"
            ),
            children: (0, i.jsxs)("div", {
              className: (0, r.cn)(
                "flex flex-col md:flex-row gap-4 md:gap-8 md:items-start"
              ),
              children: [
                (0, i.jsxs)("div", {
                  className: (0, r.cn)(
                    "roadmap-carousel-milestone flex flex-row justify-between md:flex-col gap-2 text-center"
                  ),
                  children: [
                    (0, i.jsx)(n.Z, {
                      tag: "span",
                      size: "h5",
                      children: a.square,
                    }),
                    (0, i.jsx)(n.Z, {
                      tag: "span",
                      size: "span",
                      children: a.year,
                    }),
                  ],
                }),
                (0, i.jsx)("ul", {
                  className: "space-y-2",
                  children: t.map((e, t) =>
                    (0, i.jsx)(
                      "li",
                      {
                        className: "text-white",
                        children: (0, i.jsx)("p", {
                          className:
                            "font-neue leading-[130%] tracking-[0.18px] text-base md:text-lg lg:text-xl lg:tracking-[0.2px] xl:text-[1.375rem] md:whitespace-nowrap",
                          children: e,
                        }),
                      },
                      "task-".concat(t)
                    )
                  ),
                }),
              ],
            }),
          });
        };
      function m(e) {
        let { className: t, style: a, onClick: n } = e;
        return (0, i.jsx)("button", {
          className: (0, r.cn)(
            "!w-[2.875rem] !h-[2.875rem] !bg-black !rounded-full",
            t
          ),
          style: a,
          onClick: n,
          children: (0, i.jsx)("i", {
            className: "icon-arrow-right text-[1rem] block m-auto text-white",
          }),
        });
      }
      function h(e) {
        let { className: t, style: a, onClick: n } = e;
        return (0, i.jsx)("button", {
          className: (0, r.cn)(
            "!w-[2.875rem] !h-[2.875rem] !bg-black !rounded-full",
            t
          ),
          style: a,
          onClick: n,
          children: (0, i.jsx)("i", {
            className: "icon-arrow-left text-[1rem] block m-auto text-white",
          }),
        });
      }
      t.default = () => {
        let e = o.useRef(null),
          t = {
            infinite: !1,
            speed: 500,
            variableWidth: !0,
            centerMode: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            nextArrow: (0, i.jsx)(m, {}),
            prevArrow: (0, i.jsx)(h, {}),
            initialSlide: 2,
            responsive: [
              {
                breakpoint: 768,
                settings: { variableWidth: !1, centerMode: !1 },
              },
            ],
          };
        return (
          (0, o.useEffect)(() => {
            var t;
            let a = Math.floor(new Date().getMonth() / 3) + 1;
            null === (t = e.current) || void 0 === t || t.slickGoTo(a);
          }, []),
          (0, i.jsx)("div", {
            className: "roadmap-carousel pb-16 md:pb-24 2xl:pb-48",
            children: (0, i.jsx)("div", {
              className: "relative",
              children: (0, i.jsx)(s.Z, {
                ...t,
                ref: e,
                children: l.map((e, t) => {
                  let { tasks: a, milestone: n } = e;
                  return (0, i.jsx)(
                    "div",
                    {
                      className: (0, r.cn)("px-4 md:px-3", {
                        "md:min-w-[37.5rem]": 0 === t,
                      }),
                      children: (0, i.jsx)(c, { tasks: a, milestone: n }),
                    },
                    "carousel-item-".concat(t)
                  );
                }),
              }),
            }),
          })
        );
      };
    },
    90136: function (e, t, a) {
      "use strict";
      a.d(t, {
        Fw: function () {
          return o;
        },
        wy: function () {
          return r;
        },
        zF: function () {
          return n;
        },
      });
      var i = a(91927);
      let n = i.fC,
        r = i.wy,
        o = i.Fw;
    },
  },
  function (e) {
    e.O(
      0,
      [705, 895, 623, 978, 250, 749, 640, 72, 77, 499, 3, 844, 971, 938, 744],
      function () {
        return e((e.s = 55364));
      }
    ),
      (_N_E = e.O());
  },
]);
