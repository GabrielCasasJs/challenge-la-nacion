import React from 'react';

import {
  BsList,
  BsFillChatRightFill,
  BsFillCalendar2Fill,
  BsHouseDoorFill,
} from 'react-icons/bs';

import './headermobile.css';

function HeaderMobile({ scrollY }) {
  return (
    <div
      className="header__mobile__item"
      style={{
        display: scrollY > 10 ? 'none' : 'block',
      }}
    >
      <div>
        <a href="/">
          <BsHouseDoorFill size={24} />
          Home
        </a>
        <a href="/">
          <BsFillCalendar2Fill size={24} />
          Club LA NACION
        </a>
        <a href="/">
          <BsFillChatRightFill size={24} />
          Mi Cuenta
        </a>
        <a href="/">
          <BsList size={24} />
          Menú
        </a>
      </div>
    </div>
  );
}
export default HeaderMobile;
