import React from 'react';

import './link.css';

function Link({
  label,
  color = '#0074c4',
  href = '/',
  size,
  border = 'none',
}) {
  return (
    <a
      href={href}
      style={{
        color,
        fontSize: size,
        textDecoration: border,
      }}
      className="link__component"
    >
      {label}
    </a>
  );
}
export default Link;
