import axios from 'axios';
import superBase64 from 'super-base-64';
import indexeddb from 'indexeddb-fs';
// @ts-ignore
import { compress, decompress } from 'shrink-string';

export const save = async (pdfName: string) => {
  const response = await axios({
    url: `/prezentation/${pdfName}.pdf`,
    method: 'GET',
    responseType: 'blob',
  });

  const base64 = await superBase64(response.data);
  await compress(base64).then((compressed: string) => {
    indexeddb.writeFile(pdfName, compressed);
  });

  return true;
};

export const getFile = async (pdfName: string) => {
  const file = await indexeddb.readFile(pdfName);

  return decompress(file);
};

export const checkFile = async (pdfName: string) => {
  return await indexeddb.exists(pdfName);
};
