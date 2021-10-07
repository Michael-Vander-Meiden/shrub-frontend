import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Needed to scroll back to top when switching between pages
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname]
  );

  return null;
}