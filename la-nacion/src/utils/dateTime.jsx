import React from 'react';

function dateConvert(r) {
  const date = r.split('-');
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthsConvert = date[1].split('').toString().replace(',', '');
  const days = date[2].slice(0, 2).split('');
  if (monthsConvert[0] === 0) return monthsConvert.slice(0, 1);
  return <p className="card__time">{`${days[0] === '0' ? days.pop() : days.toString().replace(',', '')} de ${months[Number(monthsConvert - 1)]} de ${date[0]}`}</p>;
}

export default dateConvert;
