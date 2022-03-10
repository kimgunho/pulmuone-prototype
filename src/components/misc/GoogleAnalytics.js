import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.gtag('set', 'page_path', pathname);
    window.gtag('event', 'page_view');
  }, [pathname]);

  return null;
};

export default GoogleAnalytics;
