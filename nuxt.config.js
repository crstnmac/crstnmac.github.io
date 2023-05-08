const builtAt = new Date().toISOString();

module.exports = {
  target: "static",
  router: {
    base: "/",
  },
  head: {
    title: "Criston Mascarenhas | Front-end Developer",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },

      {
        name: "theme-color",
        content: "#c1c1c1",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@crstnmac",
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        property: "og:updated_time",
        content: builtAt,
      },
      {
        name: "google-site-verification",
        content: "RIIKLI5xvbcXCzC98lcgLO4kWttNZoJhcSdVcSFvdEE",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon-32x32.png",
        sizes: "32x32",
      },

      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "apple-touch-icon",
        href: "/favicons/apple-touch-icon.png",
        sizes: "57x57",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#5a46ff",
    height: "3px",
  },
  /*
   ** Build configuration
   */
  css: [
    "normalize.css/normalize.css",
    "@/assets/css/main.scss",
    "@/assets/css/prism-onedark.scss",
  ],

  build: {
    extend(config) {
      const rule = config.module.rules.find(
        (r) => r.test.toString() === "/\\.(png|jpe?g|gif|svg|webp)$/i"
      );
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);
    },
  },
  plugins: [
    {
      src: "~/plugins/globalComponents",
      ssr: true,
    },
    {
      src: "~/plugins/smoothScroll",
      ssr: false,
    },
  ],
  modules: [
    "@nuxt/content",
    "@nuxtjs/style-resources",
    "nuxt-webfontloader",
    "nuxt-seo",
    "nuxt-lazy-load",
    "nuxt-responsive-loader",
  ],
  buildModules: ["@nuxtjs/color-mode"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  content: {
    // Options
    markdown: {
      prism: {
        theme: "@/assets/css/prism-onedark.scss",
      },
    },
  },

  responsiveLoader: {
    name: "img/[hash:7]-[width].[ext]",
    size: 1400,
    quality: 80,
    adapter: require("responsive-loader/sharp"),
    placeholder: true,
  },

  nuxtLazyLoad: {
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
  },

  seo: {
    // Module options
    name: "Criston Mascarenhas",
    title: "Front-end Developer",
    templateTitle: "%name% | %title%",
    description: "Fullstack Web developer",
    url: "https://criston.codes",
    keywords:
      "nuxt,cris,classmmeet,crstnmac,criston,mascarenhas,dev,javascript,vue",
    //...
  },

  styleResources: {
    scss: [
      "@/assets/css/utilities/_variables.scss",
      "@/assets/css/base/_grid.scss",
    ],
  },

  webfontloader: {
    custom: {
      families: ["Graphik", "Tiempos Headline"],
      urls: ["/fonts/fonts.css"],
    },
  },
};
