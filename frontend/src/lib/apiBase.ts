// API base URL utilities

export const getApiBase = (): string => {
  const configured = import.meta.env.VITE_BACKEND_URL;
  if (configured) return configured;
  if (typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:8000';
  }
  return '';
};

export const getApiUrl = (path: string): string => {
  const base = getApiBase();
  return `${base}${path}`;
};