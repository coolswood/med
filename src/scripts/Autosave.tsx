import { useEffect } from 'react';
import { checkFile, save } from 'instruments/fileSaver';
import { products } from 'contants';

const saveIt = async () => {
  for (const item of products) {
    for (const p of [
      ...item.prezentations,
      ...item.materials,
      ...item.instructions,
    ]) {
      const isExist = checkFile(p.pdfName);

      if (!isExist) {
        try {
          await save(String(p.pdfName));
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
};

export default () => {
  useEffect(() => {
    saveIt();
  }, []);

  return null;
};
