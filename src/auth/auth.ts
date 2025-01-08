import { createAuth0 } from '@auth0/auth0-vue'


const domain = 'dev-p1fx6ayr6y2g6doo.us.auth0.com';
const clientId = 'qJdXIaDu08fnmWlKfVTa3WGK4zHOcidB';


export const auth0 = createAuth0({
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});
