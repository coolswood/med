import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Slider from 'UI/Slider';
import PageWrap from 'UI/Page';

import { Swiper, SwiperSlide } from 'swiper/react';

import './style.scss';
import { useParams } from 'react-router-dom';
import { getFile } from 'instruments/fileSaver';
import Loader from 'UI/Loader';
import Header from './Header';
import clsx from 'clsx';

import arr from './arr.svg';
import { pdfType } from 'components/Product';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default () => {
  const { id, type, name } =
    useParams<{ id: string; type: pdfType; name: string }>();

  const [file, setFile] = useState<null | string | any>(null);
  const [numPages, setNumPages] = useState(0);
  const [pagesRendered, setPagesRendered] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [copied, setCopied] = useState(false);

  const [horizontalPosition, setHorizontalPosition] = useState(true);

  const [showInstruments, setShowInstruments] = useState(false);

  useEffect(() => {
    getFile(id)
      .then((dec: string) => {
        setFile(dec);
      })
      .catch(() => {
        setFile(`${window.location.origin}/prezentation/${id}.pdf`);
      });
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);

  useEffect(() => {
    if (swiperInstance) {
      // @ts-ignore
      swiperInstance.on('slideChange', function () {
        // @ts-ignore
        setActivePage(this.activeIndex + 1);
      });
    }
  }, [swiperInstance]);

  const toggleHeader = () => {
    setShowInstruments(!showInstruments);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onRenderSuccess = () => {
    setPagesRendered(pagesRendered + 1);
  };

  const setError = () => {
    setFile(null);
  };

  const onSwiper = (swiper: Swiper) => {
    setSwiperInstance(swiper);
  };

  const pagesRenderedPlusOne = Math.min(pagesRendered + 1, numPages);

  return (
    <PageWrap fullScreen noMargin>
      <Header
        show={showInstruments}
        name={name}
        type={type}
        onCopy={() => {
          setCopied(true);
          navigator.clipboard.writeText(window.location.href);
        }}
      />
      {copied && (
        <div
          style={{
            width: 280,
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(49, 37, 39, 0.75)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(12px)',
            borderRadius: 12,
            fontSize: 20,
            color: '#F0E9E7',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 100,
          }}
        >
          Скопировано
        </div>
      )}
      <div onClick={toggleHeader}>
        {numPages === 0 && <Loader />}
        {file !== null && (
          <>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              onLoadError={setError}
              onSourceError={setError}
              loading={''}
            >
              <Slider cssMode={false} onSwiper={onSwiper}>
                {Array.from(new Array(pagesRenderedPlusOne), (el, index) => {
                  return (
                    <div
                      style={{
                        width: '100%',
                      }}
                    >
                      <SwiperSlide
                        virtualIndex={index}
                        key={`page_${index + 1}`}
                      >
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
                            onLoadSuccess={e =>
                              setHorizontalPosition(e.width > e.height)
                            }
                            pageNumber={index + 1}
                            className={
                              horizontalPosition
                                ? 'horizontalPDF'
                                : 'verticalPDF'
                            }
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </Slider>
            </Document>
          </>
        )}
        <div className={clsx('counter', showInstruments && 'showCounter')}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '3px 5px',
            }}
          >
            <img
              style={{
                marginRight: 10,
                transform: 'rotate(180deg)',
              }}
              src={arr}
              alt=""
            />
            {activePage} / {numPages}
            <img
              style={{
                marginLeft: 10,
              }}
              src={arr}
              alt=""
            />
          </div>
        </div>
      </div>
    </PageWrap>
  );
};
