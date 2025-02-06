
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/da/',
  locale: "da",
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-KSLTODBW.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 23718, hash: '50a559bccd99f0a56725be10ccc12a73ef6ccd8c5910328738d4b91e32c59a77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17292, hash: '620dd1a9b9e6004231830e7094d461d2d5388cf91a2cb323f6b6efc5920e521e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AWWEJAJZ.css': {size: 7174, hash: 'y/ouukyqd1Q', text: () => import('./assets-chunks/styles-AWWEJAJZ_css.mjs').then(m => m.default)}
  },
};
