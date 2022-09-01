import React, { useState } from 'react';

import { BsList, BsXLg } from 'react-icons/bs';

// Components
import LogoComponent from '../Logo';
import Link from '../Link';
import Button from '../Button';
import Search from './Search';

// Styles
import './header.css';

function Header() {
  const [activeBurger, setActiveBurger] = useState(true);
  const [activeInput, setActiveInput] = useState(false);
  return (
    <header className="container__headear">
      <div className="container__item__header">
        <div className="container__item__header__mobile">
          <LogoComponent />
          <Link
            label="SUSCRIBITE"
            href="/"
            size={13}
          />
        </div>
        <div className="container__item__header__desktop">
          <div>
            <button
              type="button"
              onClick={() => setActiveBurger(!activeBurger)}
              className="item__header__button__menu"
            >
              {activeBurger ? <BsList size={30} /> : <BsXLg size={20} />}
              <p>
                {activeBurger ? 'MENÚ' : 'CERRAR'}
              </p>
            </button>
            <Search
              activeInput={activeInput}
              setActiveInput={setActiveInput}
            />
          </div>
          {!activeInput && <LogoComponent width={308} height={32} objectFit="cover" />}
          <div className="item__header__buttons">
            <div>
              <Button
                label="SUSCRIBITE"
                fontWeight="bold"
                background="#ffff24"
                color="#000"
                border="1px solid #cccccc"
                height={34}
                width={110}
                hoverBackground="#ffff24"
              />
            </div>
            <div>
              <Button
                label="INGRESAR"
                fontWeight="bold"
                border="1px solid #0074c4"
                color="#0074c4"
                background="transparent"
                hoverBackground="#0074c4"
                hoverColor="#fff"
                height={34}
                width={101}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
