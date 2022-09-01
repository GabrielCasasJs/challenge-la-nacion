import React from 'react';

function Box({
  background = '#a0dbe9',
  width = 320,
  height = 300,
  maxHeight,
}) {
  return (
    <div
      style={{
        background,
        height,
        width,
        maxHeight,
      }}
    />
  );
}
export default Box;
