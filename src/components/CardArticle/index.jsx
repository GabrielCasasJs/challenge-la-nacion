import React from 'react';

import dateConvert from '../../utils/dateTime';

import './card.css';

function CardArticle({
  image,
  title,
  displayDate,
}) {
  return (
    <div className="container__card">
      <picture className="container__item__card">
        <img
          src={image}
          alt={title}
        />
      </picture>
      <div className="item__card__information">
        <h3 className="item__card__title">{title}</h3>
        {dateConvert(displayDate)}
      </div>
    </div>
  );
}
export default CardArticle;
