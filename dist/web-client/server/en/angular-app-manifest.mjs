
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en/',
  locale: "en",
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-QM57CNYU.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 23718, hash: 'ff0109afee28e4ca83b2ff692ce394f5a235ddb7320e09f4d0aaaa786ac0174a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17292, hash: '097c12a2b3b4cd2c964471950d4feb4e8b8fe14ea6e65c7c4f212c7d4794f9aa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AWWEJAJZ.css': {size: 7174, hash: 'y/ouukyqd1Q', text: () => import('./assets-chunks/styles-AWWEJAJZ_css.mjs').then(m => m.default)}
  },
};
