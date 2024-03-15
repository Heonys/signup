import { useEffect, useState } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const validateWindow = () => {
      setIsMobile(window.innerWidth >= 320 && window.innerWidth <= 770);
    };
    window.addEventListener('resize', validateWindow);
    validateWindow();

    return () => window.removeEventListener('resize', validateWindow);
  }, []);

  return { isMobile };
};

export default useMobile;
