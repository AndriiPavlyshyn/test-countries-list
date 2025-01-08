/// <reference types="vite/client" />

// export enum RestCountries {
//   domain = 'dev-p1fx6ayr6y2g6doo.us.auth0.com',
//   clientId = 'xpboc4Co9KiMnYaQl8gE3EhZEpAqrux0'
// }

interface ImportMetaEnv {
  readonly REST_COUNTRIES_DOMAIN: string;
  readonly REST_COUNTRIES_CLIENT_ID: string;
}
