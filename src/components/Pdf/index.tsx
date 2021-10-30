import BackIcon from '@material-ui/icons/ArrowBack';
import React, { useState } from 'react';
// eslint-disable-next-line import/order
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './style.scss';
import { useHistory } from 'react-router-dom';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default () => {
  const history = useHistory();
  const [file, setFile] = useState<null | string>('/1.pdf');
  const [numPages, setNumPages] = useState(0);
  const [pagesRendered, setPagesRendered] = useState(0);

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
