import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
} from 'react';

import CardArticle from '../../../components/CardArticle';
import Box from '../../../components/Box';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';

import './viewCard.css';

function ViewCard({ articles, active, setActive }) {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return (
    <div>
      <div className="container__viewcard">
        <div>
          <div className="container__item__viewcard">
            {articles.length > 0 ? articles.map((item, index) => (
              <Fragment key={item._id}>
                {((index + 1) % 4) === 0 ? (
                  <div style={{ display: width >= 770 ? 'none' : 'block' }}>
                    <Box />
                  </div>
                ) : (
                  <CardArticle
                    key={item._id}
                    image={item.promo_items.basic.url}
                    title={item.headlines.basic}
                    displayDate={item.display_date}
                  />
                )}
              </Fragment>
            )) : <Loading />}
            <div className="container__item__viewcard__gradiente" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0px' }}>
            <Button
              label={active ? 'MENOS NOTAS DE ACUMULADO GRILLA' : 'MÁS NOTAS DE ACUMULADO GRILLA'}
              border="1px solid #0074c4"
              color="#0074c4"
              fontWeight="600"
              width={280}
              hoverColor="#fff"
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
        <div className="container__item__viewcard__box" style={{ height: active ? 'auto' : '130vh' }}>
          <Box maxHeight={`${width <= 1280 ? '92%' : '100%'}`} height="100%" />
        </div>
      </div>
    </div>
  );
}
export default ViewCard;
