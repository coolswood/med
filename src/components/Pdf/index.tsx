import BackIcon from '@material-ui/icons/ArrowBack';
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import indexeddb from 'indexeddb-fs';
// @ts-ignore
import base64ToBlob from 'base64toblob';
// @ts-ignore
import { decompress } from 'shrink-string';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default () => {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();
  const [file, setFile] = useState<null | string | any>(null);
  const [numPages, setNumPages] = useState(0);
  const [pagesRendered, setPagesRendered] = useState(0);

  useEffect(() => {
    indexeddb.readFile('/1pdf').then(file => {
      decompress(file).then((dec: string) => {
        setFile(dec);
      });
    });
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPagesRendered(0);
  };

  const onFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const onRenderSuccess = () => {
    setPagesRendered(pagesRendered + 1);
  };

  const setError = () => {
    setFile(null);
  };

  const pagesRenderedPlusOne = Math.min(pagesRendered + 1, numPages);

  return (
    <div className="Example">
      <div className="back" onClick={goBack}>
        <BackIcon />
      </div>
      <div className="Example__container">
        {file === null && (
          <div className="Example__container__load">
            <label htmlFor="file">Выберите файл:</label>{' '}
            <input onChange={onFileChange} type="file" accept=".pdf" />
          </div>
        )}
        {file !== null && (
          <div className="Example__container__document">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              onLoadError={setError}
              onSourceError={setError}
            >
              {Array.from(new Array(pagesRenderedPlusOne), (el, index) => {
                return (
                  <Page
                    key={`page_${index + 1}`}
                    onRenderSuccess={onRenderSuccess}
                    pageNumber={index + 1}
                  />
                );
              })}
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};
