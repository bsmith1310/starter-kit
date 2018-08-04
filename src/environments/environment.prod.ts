// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  znodeApiUrl: 'http://localhost:44762',
  znodeWebStoreApiUrl: 'http://localhost:3288',
  znodeWebStoreApiResources: [ // all resources fetched from Znode are assumed to be on API (ex: 44762),
    // unless on this list and assumed to be on WebStore (ex: 3288)
    'angularpoc/bannerslider',
    'headeritems'
  ],
  znodeWebStoreApiCacheablePosts: [ // all GET requests to Znode are assumed to be cacheable,
    // POSTs can also be cached by adding to this list
    'search/fulltextsearch'
  ],
  storeSettings: {
    catelogId: 3
  }
};
