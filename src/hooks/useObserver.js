import { useEffect, useState } from 'react';

export default function useObserver(externalRef) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    observer.observe(externalRef.current);
  }, [externalRef]);

  const observerCallback = (entry) => {
    if (entry[0].intersectionRatio > 0) {
      setIntersecting(true);
      setIntersecting(false);
    }
  };

  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: '200px',
  });

  return isIntersecting;
}
