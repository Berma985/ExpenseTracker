
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ExpenseTracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/ExpenseTracker"
  },
  {
    "renderMode": 0,
    "route": "/ExpenseTracker/add"
  },
  {
    "renderMode": 0,
    "route": "/ExpenseTracker/expenses"
  },
  {
    "renderMode": 0,
    "route": "/ExpenseTracker/edit/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5053, hash: 'b3d379c2b37ab9fe6f37c25eeab5cc366e3dd77dd48fc3c025492c9c4b8b2875', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '1f758ec07cf10967390caf843202e5e404d68d00ba5b86ea866a8e054e47ee14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
