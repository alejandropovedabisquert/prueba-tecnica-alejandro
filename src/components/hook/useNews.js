import { useEffect, useState } from 'react';
import NewsScraper from '../NewsScraper';

const useNews = () => {
  // console.log(NewsScraper());
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getNews = async () => {
      const data = await NewsScraper();
      setNews(data);
      setIsLoading(false);
    };

    getNews();
  }, []);
  // Función para crear una nueva noticia
  const createNews = (news) => {
    setNews(prevNews => [...prevNews, news]);
  };

  // Función para actualizar una noticia existente
  const updateNews = (id, updatedNews) => {
    setNews(prevNews =>
        prevNews.map(news => (news.id === id ? updatedNews : news))
    );
  };
  
  // Función para eliminar una noticia existente
  const deleteNews = (id) => {
    setNews(prevNews => 
        prevNews.filter(news => news.id !== id));
  };

  // Función para obtener una noticia por ID
  const getNewsById = (id) => {
    return news.find(news => news.id === id);
  };

  // Retornamos un objeto con las noticias y las funciones para el crud
  return { news, createNews, updateNews, deleteNews, getNewsById, isLoading };
};

export default useNews;
