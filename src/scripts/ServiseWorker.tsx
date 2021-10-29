import { useEffect } from 'react';

const registerSW = async () => {
  try {
    await navigator.serviceWorker.register('/sw.js');
  } catch (e) {
    console.log(e);
  }
};

export default () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      registerSW();
    }
  }, []);

  return null;
};
