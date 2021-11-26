import BackIcon from '@material-ui/icons/ArrowBack';
import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Slider from 'UI/Slider';

import { SwiperSlide } from 'swiper/react';

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
    <div>
      {/*<div className="back" onClick={goBack}>*/}
      {/*  <BackIcon />*/}
      {/*</div>*/}
      <div>
        {file !== null && (
          <div>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              onLoadError={setError}
              onSourceError={setError}
            >
              <Slider cssMode={false}>
                {Array.from(new Array(pagesRenderedPlusOne), (el, index) => {
                  return (
                    <div
                      style={{
                        width: '100%',
                      }}
                    >
                      <SwiperSlide key={`page_${index + 1}`}>
                        <div
                          style={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Page
                            key={`page_${index + 1}`}
                            onRenderSuccess={onRenderSuccess}
                            pageNumber={index + 1}
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </Slider>
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};
