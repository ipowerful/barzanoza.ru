const path = require('path');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180',
      },
      {
        rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32',
      },
      {
        rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png', sizes: '16x16',
      },
      {
        rel: 'manifest', href: '/favicon/site.webmanifest',
      },
      {
        rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5',
      },
      {
        rel: 'shortcut icon', href: '/favicons/favicon.ico',
      },
      {
        rel: 'shortcut icon', href: '/favicons/favicon.ico',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  css: [
    'bootstrap/scss/bootstrap-reboot.scss',
    '~assets/scss/_fonts.scss',
  ],
  styleResources: {
    scss: [
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss',
      '~/assets/scss/_variables.scss', // my custom variable overrides
      //'bootstrap-vue/src/_variables.scss',
    ],
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      /* Excludes @/assets/symbols from url-loader */
      config.module.rules.filter(r => r.test.toString()
        .includes('svg'))
        .forEach((r) => {
          r.exclude = /(assets\/symbols)/; /* eslint-disable-line no-param-reassign */
        });
      /* Includes @/assets/symbols for svg-sprite-loader */
      config.module.rules.push({
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'assets/symbols'),
        ],
        exclude: [
          path.resolve(__dirname, 'images/'),
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              svgo: false,
              symbolId: filePath => path.basename(filePath, '.svg'),
            },
          },
        ],
      });
    }
  }
}
