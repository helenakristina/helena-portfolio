import { useState, useEffect } from 'react';

export function useMountAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);
  return isVisible;
}
