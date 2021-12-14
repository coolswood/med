import { useEffect } from 'react';
import { checkFile, save } from 'instruments/fileSaver';
import { products } from 'contants';

const saveIt = async () => {
  for (const item of products) {
    for (const p of item.prezentations) {
      const isExist = await checkFile(p.pdfName);

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
