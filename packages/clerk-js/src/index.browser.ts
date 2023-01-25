import 'regenerator-runtime/runtime';

import Clerk from './core/clerk';
import { mountComponentRenderer } from './ui';

Clerk.mountComponentRenderer = mountComponentRenderer;

const publishableKey =
  document.querySelector('script[data-clerk-publishable-key]')?.getAttribute('data-clerk-publishable-key') ||
  window.__clerk_publishable_key ||
  '';

const frontendApi =
  document.querySelector('script[data-clerk-frontend-api]')?.getAttribute('data-clerk-frontend-api') ||
  window.__clerk_frontend_api ||
  '';

const proxyUrl =
  document.querySelector('script[data-clerk-proxy-url]')?.getAttribute('data-clerk-proxy-url') ||
  window.__clerk_proxy_url ||
  '';

const domain =
  document.querySelector('script[data-clerk-domain]')?.getAttribute('data-clerk-domain') || window.__clerk_domain || '';

const isSatellite =
  document.querySelector('script[data-clerk-is-satellite]')?.getAttribute('data-clerk-is-satellite') === 'true' ||
  window.__clerk_is_satellite ||
  false;

window.Clerk = new Clerk(publishableKey || frontendApi, {
  proxyUrl,
  domain,
  isSatellite,
});

if (module.hot) {
  module.hot.accept();
}
