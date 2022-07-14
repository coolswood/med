import React from 'react';
import Page from 'UI/Page';
import cross from 'UI/Overlay/cross.svg';
import { useHistory, useParams } from 'react-router-dom';

export default () => {
  const history = useHistory();

  const { id } = useParams<{
    id: string;
  }>();

  return (
    <Page fullScreen noMargin>
      <div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <img
              style={{
                cursor: 'pointer',
                margin: 35,
              }}
              src={cross}
              onClick={() => history.goBack()}
              alt=""
            />
          </div>
        </div>
        <iframe
          style={{
            width: '100vw',
            height: 'calc(100vh - 90px)',
            border: 'none',
          }}
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Page>
  );
};
