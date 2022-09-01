import React, {
  useState,
  useContext,
} from 'react';

import ArticleContext from '../../context/articleContext';

// Components
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Box from '../../components/Box';
import Link from '../../components/Link';
import ViewCard from './viewCard';

import './home.css';

function Home() {
  const [active, setActive] = useState(false);
  const {
    articles,
    slug,
  } = useContext(ArticleContext);
  return (
    <Screen
      headerComponent={(
        <Header />
     )}
      footerComponent={(
        <Footer />
     )}
    >
      <div className="container__home">
        <div className="container__item__home__box">
          <div className="home__box">
            <Box width="100%" height="100%" />
          </div>
          <div className="home__box__for__viewcard">
            <div className="home__box__two">
              <Box width="100%" height="100%" />
            </div>
            <div className="item__home__screen">
              <div className="item__home__screen__title">
                <h1> Acumulado Grilla </h1>
              </div>
              <div className="item__home__screen__links">
                {slug.map((item, index) => (
                  <div key={[index]} className="links">
                    <Link
                      label={item.text}
                      href={item.slug}
                      size={14}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ViewCard
                active={active}
                articles={active ? articles.slice(0, articles.length) : articles.slice(0, 10)}
                setActive={setActive}
              />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
export default Home;
