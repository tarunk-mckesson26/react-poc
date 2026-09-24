import { useEffect, useState } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import axios from 'axios';

interface OktaConfig {
  ISSUER: string;
  CLIENT_ID: string;
  REDIRECT_URI: string;
  LOGOUT_URL: string;
  SCOPES: string;
}

export default function Login({ onAuthSuccess }: { onAuthSuccess: () => void }) {
  const [status, setStatus] = useState<string>('Loading...');

  useEffect(() => {
    const initializeOkta = async () => {
      try {
        console.log('Fetching Okta configuration...');
        const res = await axios.get<OktaConfig>('/api/okta');
        const config = res.data;
        console.log('✓ Okta config response:', config);

        localStorage.setItem('logoutUrl', config.LOGOUT_URL);

        const oktaSignIn = new OktaSignIn({
          baseUrl: config.ISSUER.split('oauth2')[0],
          clientId: config.CLIENT_ID,
          redirectUri: config.REDIRECT_URI,
          authParams: {
            issuer: config.ISSUER,
            responseType: 'code',
            scopes: ['openid', 'profile', 'email'],
            display: 'page',
            pkce: true,
          },
          features: {
            idpDiscovery: true,
          },
        });

        console.log('Rendering Okta widget...');
        setStatus('');

        oktaSignIn.renderEl(
          { el: '#okta-signin-container' },
          function success(res: any) {
            console.log('✓ Okta auth success:', res);
            if (res.status === 'IDP_DISCOVERY') {
              res.idpDiscovery.redirectToIdp();
            } else {
              onAuthSuccess();
            }
          },
          function error(err: any) {
            console.error('✗ Okta auth error:', err);
            setStatus('Authentication failed. Please try again.');
          }
        );
      } catch (err) {
        console.error('✗ Error:', err);
        setStatus('Failed to load login. Check console (F12).');
      }
    };

    initializeOkta();
  }, [onAuthSuccess]);

  return (
    <div>
      <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
        <h1>Login</h1>
      </header>
      {status && <div style={{ padding: '20px', textAlign: 'center' }}>{status}</div>}
      <div id="okta-signin-container"></div>
    </div>
  );
}
