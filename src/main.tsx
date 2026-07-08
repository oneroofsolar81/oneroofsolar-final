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
      lower.includes('lc tracking') ||
      lower.includes('tracking-id') ||
      lower.includes('app_views_limit_reached') ||
      lower.includes('97fdc0ab-99c9-4ba4-9322-5d5c0458539a')
    );
  });
  if (isSuppressed) return;
  originalError.call(console, ...args);
};

// Add window.onerror handler to return true (suppressing browser default action)
window.onerror = (message, source, lineno, colno, error) => {
  const msg = String(message || error?.message || '');
  const lower = msg.toLowerCase();
  if (
    lower.includes('resizeobserver') ||
    lower.includes('resize-observer') ||
    lower.includes('resize observer') ||
    lower.includes('styled-components') ||
    lower.includes('script error') ||
    lower.includes('gtm') ||
    lower.includes('elfsight') ||
    lower.includes('eapps') ||
    lower.includes('lc tracking') ||
    lower.includes('tracking-id') ||
    lower.includes('app_views_limit_reached') ||
    lower.includes('97fdc0ab-99c9-4ba4-9322-5d5c0458539a')
  ) {
    return true; // suppresses the browser console error
  }
};

window.addEventListener('error', (e) => {
  const msg = e.message || (e.error && e.error.message) || '';
  const strEvent = String(e);
  const detail = (e as any).detail ? String((e as any).detail) : '';
  const lowerMsg = String(msg).toLowerCase();
  const lowerStr = strEvent.toLowerCase();
  const lowerDetail = detail.toLowerCase();
  
  const isResizeObserver = 
    lowerMsg.includes('resizeobserver') ||
    lowerMsg.includes('resize-observer') ||
    lowerMsg.includes('resize observer') ||
    lowerStr.includes('resizeobserver') ||
    lowerStr.includes('resize-observer') ||
    lowerStr.includes('resize observer') ||
    lowerDetail.includes('resizeobserver') ||
    lowerDetail.includes('resize-observer') ||
    lowerDetail.includes('resize observer');

  if (
    isResizeObserver ||
    lowerMsg.includes('script error') ||
    lowerMsg.includes('styled-components') ||
    lowerMsg.includes('gtm') ||
    lowerMsg.includes('elfsight') ||
    lowerMsg.includes('eapps') ||
    lowerMsg.includes('lc tracking') ||
    lowerMsg.includes('tracking-id') ||
    lowerMsg.includes('app_views_limit_reached') ||
    lowerMsg.includes('97fdc0ab-99c9-4ba4-9322-5d5c0458539a') ||
    lowerMsg.includes('google-analytics') ||
    lowerMsg.includes('facebook')
  ) {
    e.stopImmediatePropagation();
    e.preventDefault();
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
      lower.includes('lc tracking') ||
      lower.includes('tracking-id') ||
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
