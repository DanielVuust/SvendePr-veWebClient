
export default {
  basePath: '/',
  supportedLocales: {
  "en": "en"
},
  entryPoints: {
    'en': () => import('./en/main.server.mjs')
  },
};
