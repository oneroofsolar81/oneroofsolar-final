import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

// Suppress ResizeObserver, Elfsight/eapps, and Google Tag Manager benign errors
const originalError = console.error;
console.error = (...args) => {
  const isSuppressed = args.some(arg => {
    if (!arg) return false;
    const str = typeof arg === 'string' ? arg : (arg.message || String(arg));
    const lower = str.toLowerCase();
    return (
      lower.includes('resizeobserver') ||
      lower.includes('resize-observer') ||
      lower.includes('resize observer') ||
      lower.includes('styled-components') ||
      lower.includes('script error') ||
      lower.includes('gtm') ||
      lower.includes('elfsight') ||
      lower.includes('eapps') ||
      lower.includes('app_views_limit_reached') ||
      lower.includes('97fdc0ab-99c9-4ba4-9322-5d5c0458539a')
    );
  });
  if (isSuppressed) return;
  originalError.call(console, ...args);
};

window.addEventListener('error', (e) => {
  const msg = e.message || (e.error && e.error.message) || '';
  if (typeof msg === 'string') {
    const lower = msg.toLowerCase();
    if (
      lower.includes('resizeobserver') ||
      lower.includes('resize-observer') ||
      lower.includes('resize observer') ||
      lower.includes('script error') ||
      lower.includes('styled-components') ||
      lower.includes('gtm') ||
      lower.includes('elfsight') ||
      lower.includes('eapps') ||
      lower.includes('app_views_limit_reached') ||
      lower.includes('97fdc0ab-99c9-4ba4-9322-5d5c0458539a') ||
      lower.includes('google-analytics') ||
      lower.includes('facebook')
    ) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }
});

window.addEventListener('unhandledrejection', (e) => {
  // Gracefully suppress unhandled third-party promise rejections
  const reason = e.reason && e.reason.message ? e.reason.message : String(e.reason);
  if (typeof reason === 'string') {
    const lower = reason.toLowerCase();
    if (
      lower.includes('gtm') ||
      lower.includes('elfsight') ||
      lower.includes('eapps') ||
      lower.includes('app_views_limit_reached') ||
      lower.includes('97fdc0ab-99c9-4ba4-9322-5d5c0458539a') ||
      lower.includes('analytics') ||
      lower.includes('google') ||
      lower.includes('facebook') ||
      lower.includes('adblock') ||
      lower.includes('firebase')
    ) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
