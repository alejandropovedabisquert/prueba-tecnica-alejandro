import { useState } from 'react';
import fakeNews from '../FakeNews';

const useNews = () => {
  const [news, setNews] = useState(fakeNews); // Inicializamos el estado con las noticias falsas
  
  // Función para crear una nueva noticia
  const createNews = (news) => {
    setNews(prevNews => [...prevNews, news]);
  };

  // Función para actualizar una noticia existente
  const updateNews = (id, updatedNews) => {
    setNews(prevNews =>
        prevNews.map(news => (news.id === parseInt(id) ? updatedNews : news))
    );
  };
  
  // Función para eliminar una noticia existente
  const deleteNews = (id) => {
    setNews(prevNews => 
        prevNews.filter(news => news.id !== parseInt(id)));
  };

  // Función para obtener una noticia por ID
  const getNewsById = (id) => {
    return news.find(news => news.id === parseInt(id));
  };
  // Retornamos un objeto con las noticias y las funciones para el crud
  return { news, createNews, updateNews, deleteNews, getNewsById };
};

export default useNews;
