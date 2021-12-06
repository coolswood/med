import axios from 'axios';
import superBase64 from 'super-base-64';
import indexeddb from 'indexeddb-fs';
// @ts-ignore
import { compress, decompress } from 'shrink-string';

export const save = async (id: string) => {
  const response = await axios({
    url: `/prezentation/${id}.pdf`,
    method: 'GET',
    responseType: 'blob',
  });

  const base64 = await superBase64(response.data);
  await compress(base64).then((compressed: string) => {
    indexeddb.writeFile(id, compressed);
  });

  return true;
};

export const getFile = async (url: string) => {
  const file = await indexeddb.readFile(url);
  console.log(file);

  return decompress(file);
};
