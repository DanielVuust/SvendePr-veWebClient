
export default {
  basePath: '/',
  supportedLocales: {
  "da": "da"
},
  entryPoints: {
    'da': () => import('./da/main.server.mjs')
  },
};
