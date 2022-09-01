import React from 'react';

import { BsSearch } from 'react-icons/bs';

import Button from '../../Button';

import './search.css';

function SearchComponent({
  activeInput,
  setActiveInput,
}) {
  return (
    <div className="container__search__component">
      <div className={`container__item__search__component ${activeInput && 'active__input'}`}>
        <input
          type="text"
          placeholder="Buscar"
          className="item__search__input"
          onBlur={() => setActiveInput(false)}
          onFocus={() => setActiveInput(true)}
        />
        <div>
          {!activeInput && <BsSearch size={18} />}
        </div>
      </div>
      {activeInput && (
        <div className="item__search__button">
          <Button
            label="BUSCAR"
            background="#0074c4"
            color="#fff"
            fontWeight="bold"
            height={38}
            width={100}
            hoverColor="#fff"
          />
        </div>
      )}
    </div>
  );
}
export default SearchComponent;
