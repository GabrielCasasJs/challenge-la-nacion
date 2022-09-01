import React, {
  useState,
  useEffect,
  createContext,
} from 'react';

import axios from 'axios';

const ArticleContext = createContext();

function ProviderContext({ children }) {
  const [slug, setSlug] = useState([]);
  const [articles, setArticles] = useState([]);

  const dataContext = {
    slug,
    articles,
  };
  const getArticle = async () => {
    try {
      const { data } = await axios.get('https://api-test-ln.herokuapp.com/articles');
      setArticles(data.articles.filter((item) => item.subtype === '7'));
      const datosConvert = data.articles.map((item) => item.taxonomy.tags).flatMap((a) => a);
      const dataFiltro = datosConvert.map((r) => {
        let count = 0;
        datosConvert.forEach((i) => {
          if (i.text === r.text) return (count += 1);
        });
        return {
          ...r,
          count,
        };
      });
      const filterRepeat = dataFiltro.filter(
        (value, index, self) => index === self.findIndex((t) => t.text === value.text),
      )
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
      setSlug(filterRepeat);
    } catch (error) {
      console.error('err', error);
    }
  };
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <ArticleContext.Provider value={dataContext}>
      {children}
    </ArticleContext.Provider>
  );
}

export {
  ProviderContext,
};

export default ArticleContext;
