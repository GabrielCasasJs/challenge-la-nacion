import React from 'react';

import './button.css';

function Button({
  type = 'button',
  onClick = () => {},
  label,
  background,
  border = 'none',
  color,
  width,
  height,
  fontWeight = 'inherit',
  hoverBackground = '#0074c4',
  hoverColor,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        color,
        border,
        background,
        width,
        height,
        fontWeight,
        '--background-color': hoverBackground,
        '--color': hoverColor,
      }}
      className="button__component"
    >
      {label}
    </button>
  );
}
export default Button;
