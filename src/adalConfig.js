import { AuthenticationContext, adalGetToken, adalFetch } from 'react-adal';
 
export const adalConfig = {
  tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
  clientId: 'a78f9362-41f3-484d-a34e-b85bc8154b1c',
  endpoints: {
    api: '14d71d65-f596-4eae-be30-27f079bf8d4b',
  },
  cacheLocation: 'localStorage',
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
 
 