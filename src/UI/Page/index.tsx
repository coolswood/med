import Fade from '@material-ui/core/Fade';
import BackIcon from '@material-ui/icons/ArrowBack';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

import styles from './styles.module.scss';
import clsx from 'clsx';
import cross from 'UI/Overlay/cross.svg';

export default ({
  children,
  noMargin,
  fullScreen,
  backText,
  isCross,
  head,
}: {
  children: any;
  noMargin?: boolean;
  fullScreen?: boolean;
  isCross?: boolean;
  backText?: string;
  head?: string;
}) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const isRoot = window.location.pathname === '/';

  return (
    <div>
      <ScrollToTop
        style={{
          bottom: 90,
          width: 55,
          height: 55,
          right: 20,
          borderRadius: '50%',
          boxShadow: 'none',
          backgroundColor: '#F0E9E7',
        }}
        viewBox="0 0 22 20"
        svgPath={
          'M10.367.133c-.205.08-.392.199-.55.35L1.483 8.817a1.673 1.673 0 1 0 2.367 2.366l5.483-5.5v12.65a1.666 1.666 0 1 0 3.334 0V5.683l5.483 5.5a1.668 1.668 0 0 0 2.367 0 1.665 1.665 0 0 0 0-2.366L12.183.483a1.666 1.666 0 0 0-.55-.35 1.666 1.666 0 0 0-1.266 0Z'
        }
        height={'25px'}
        smooth
      />
      <div className={styles.bg} />
      <Fade in={true} timeout={1100}>
        <div className={clsx(styles.root, noMargin && styles.noMargin)}>
          {!isRoot && !fullScreen && !isCross && (
            <div className={styles.back} onClick={goBack}>
              <BackIcon />
              <span className={styles.backText}>{backText}</span>
            </div>
          )}
          {isCross && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <img
                style={{
                  cursor: 'pointer',
                  marginBottom: 35,
                }}
                src={cross}
                onClick={goBack}
                alt=""
              />
            </div>
          )}
          {head && (
            <div
              style={{
                position: 'absolute',
                top: -10,
                left: '50%',
                transform: 'translate(-50%, 0)',
                color: '#F9D2D6',
                fontSize: 36,
                fontWeight: 600,
              }}
            >
              {head}
            </div>
          )}
          {children}
        </div>
      </Fade>
      {!fullScreen && (
        <div className={styles.bottom}>
          <div
            style={{
              position: 'absolute',
              right: 70,
              top: '50%',
              transform: 'translate(0,-50%)',
              fontSize: 10,
              zIndex: 101,
            }}
          >
            Версия: 27
          </div>
          <div
            style={{
              padding: '0px 70px',
            }}
          >
            <Link
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: isRoot ? '#fff' : '#2F2F34',
                fontSize: 12,
              }}
              to="/"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8.00001L14 2.74001C13.45 2.24805 12.7379 1.97607 12 1.97607C11.262 1.97607 10.55 2.24805 9.99997 2.74001L3.99997 8.00001C3.68234 8.28408 3.42887 8.63256 3.25644 9.02225C3.08402 9.41194 2.99659 9.83389 2.99997 10.26V19C2.99997 19.7957 3.31604 20.5587 3.87865 21.1213C4.44126 21.6839 5.20432 22 5.99997 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7957 21 19V10.25C21.0019 9.82557 20.9138 9.40555 20.7414 9.01769C20.5691 8.62983 20.3163 8.28296 20 8.00001ZM14 20H9.99997V15C9.99997 14.7348 10.1053 14.4804 10.2929 14.2929C10.4804 14.1054 10.7348 14 11 14H13C13.2652 14 13.5195 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15V20ZM19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5195 19.8946 18.2652 20 18 20H16V15C16 14.2044 15.6839 13.4413 15.1213 12.8787C14.5587 12.3161 13.7956 12 13 12H11C10.2043 12 9.44126 12.3161 8.87865 12.8787C8.31604 13.4413 7.99997 14.2044 7.99997 15V20H5.99997C5.73476 20 5.4804 19.8946 5.29287 19.7071C5.10533 19.5196 4.99997 19.2652 4.99997 19V10.25C5.00015 10.108 5.03057 9.9677 5.08919 9.83839C5.14781 9.70907 5.2333 9.59372 5.33997 9.50001L11.34 4.25001C11.5225 4.08969 11.7571 4.00127 12 4.00127C12.2429 4.00127 12.4775 4.08969 12.66 4.25001L18.66 9.50001C18.7666 9.59372 18.8521 9.70907 18.9108 9.83839C18.9694 9.9677 18.9998 10.108 19 10.25V19Z"
                  fill={isRoot ? '#fff' : '#2F2F34'}
                />
              </svg>
              <span>Главная</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
