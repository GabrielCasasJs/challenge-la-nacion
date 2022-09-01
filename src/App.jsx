import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import Home from './screen/Home';
import HeaderMobile from './components/Header/HeaderMobile';

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
      <HeaderMobile scrollY={scrollY} />
    </div>
  );
}

export default App;
