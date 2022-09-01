import React from 'react';

import LoadingGif from '../../assets/loading-gif.gif';

import './loading.css';

function Loading() {
  return (
    <div className="container__loading">
      <img
        src={LoadingGif}
        className=""
        alt="loading gif"
      />
      <p> Cargando... </p>
    </div>
  );
}
export default Loading;
