
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5265, hash: '2a975fc5ef64adacd315f65586e08c7b380474c6654cca29b73f6b6f34aae858', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5595, hash: '40e85dfbae676d167d933cd61a60e626f956570d4505332de387e6abfe8fbf0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19610, hash: 'b784d7a2dc98f048adba0d877d056031c745ba47a4e356e577e3a34ada6cf2a0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DSWTLJF4.css': {size: 144, hash: 'YDGqd1WluL4', text: () => import('./assets-chunks/styles-DSWTLJF4_css.mjs').then(m => m.default)}
  },
};
