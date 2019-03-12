module.exports = {
  head: {
    title: 'food',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ski-rental' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      { rel: 'stylesheet', href: 'https://unpkg.com/flickity@2/dist/flickity.min.css' },
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.7.2/css/all.css' }
    ]
  },
  plugins: [
    {src: '~/plugins/firebase', ssr: false},
    '~/plugins/i18n.js'
  ],
  router: {
    middleware: 'i18n'
  },
  loading: { color: '#3B8070' },
  build: {
    vendor: ['vue-i18n'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

