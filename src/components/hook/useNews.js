import { useState } from 'react';
import fakeNews from '../FakeNews';

const useNews = () => {
  const [news, setNews] = useState(fakeNews);

  const createNews = (news) => {
    setNews(prevNews => [...prevNews, news]);
  };

  const updateNews = (id, updatedNews) => {
    setNews(prevNews =>
        prevNews.map(news => (news.id === id ? updatedNews : news))
    );
  };

  const deleteNews = (id) => {
    setNews(prevNews => 
        prevNews.filter(news => news.id !== id));
  };

  const getNewsById = (id) => {
    return news.find(news => news.id === id);
  };

  return { news, createNews, updateNews, deleteNews, getNewsById };
};

export default useNews;
