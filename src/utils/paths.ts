/**
 * Helper to construct image paths that work with Vite's base URL
 * This ensures images work correctly when deployed to a subdirectory (e.g., GitHub Pages)
 */
export const getImagePath = (path: string): string => {
  return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
};
