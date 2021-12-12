import { useEffect } from 'react';
import { save } from 'instruments/fileSaver';

export const mass = new Array(100).fill(1);

let cnt = 0;

const saveIt = async () => {
  for (const i of mass) {
    cnt++;
    try {
      await save(String(cnt));
    } catch (e) {
      console.log(e);
    }
  }
};

export default () => {
  useEffect(() => {
    saveIt();
  }, []);

  return null;
};
