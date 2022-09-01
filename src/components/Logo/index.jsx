import React from 'react';

import './logo.css';
// assets
import Logo from '../../assets/icon-la-nacion.png';

function LogoComponent({
  url = '/',
  image = Logo,
  alt = 'logo',
  width = 168,
  height = 16,
  objectFit = 'contain',
}) {
  return (
    <a href={url} className="container__component__logo">
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit,
        }}
      />
    </a>
  );
}
export default LogoComponent;
