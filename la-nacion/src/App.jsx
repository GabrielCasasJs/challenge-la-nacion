import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  BsList,
  BsFillChatRightFill,
  BsFillCalendar2Fill,
  BsHouseDoorFill,
} from 'react-icons/bs';

import Home from './screen/Home';

import './app.css';

function App() {
  const [scrollY, setscrollY] = useState(window.scrollY);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    setscrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    setscrollY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div className="container__app">
      <Home />
      <div
        className="container__item__app"
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
    </div>
  );
}

export default App;
