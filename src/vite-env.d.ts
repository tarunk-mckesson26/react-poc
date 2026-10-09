/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OKTA_ISSUER?: string;
  readonly VITE_OKTA_CLIENT_ID?: string;
  readonly VITE_OKTA_REDIRECT_URI?: string;
  readonly VITE_OKTA_POST_LOGOUT_REDIRECT_URI?: string;
  readonly VITE_OKTA_SCOPES?: string;
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
