interface Auth0Config {
  clientId: string;
  clientDomain: string;
  audience: string;
  redirect: string;
  scope: string;
}

export const AUTH0_CONFIG: Auth0Config = {
  clientId: 'nfiB3o8c6zKlFAkOpyumc0UUlwPhW4yF',
  clientDomain: 'gteirlinck.auth0.com',
  audience: 'mlf-app-api',
  redirect: 'http://localhost:4200/callback',
  scope: 'openid'
};
