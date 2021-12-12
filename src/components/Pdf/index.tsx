import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Slider from 'UI/Slider';
import PageWrap from 'UI/Page';

import { SwiperSlide } from 'swiper/react';

import './style.scss';
import { useHistory, useParams } from 'react-router-dom';
import { getFile } from 'instruments/fileSaver';
import Loader from 'UI/Loader';

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
    getFile(id)
      .then((dec: string) => {
        setFile(dec);
      })
      .catch(() => {
        setFile(`${window.location.origin}/prezentation/${id}.pdf`);
      });
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
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
    <PageWrap fullScreen noMargin>
      <div>
        {numPages === 0 && <Loader />}
        {file !== null && (
          <div>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              onLoadError={setError}
              onSourceError={setError}
              loading={''}
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
    </PageWrap>
  );
};
