import React from 'react';
import News from './News';
import { Link, useNavigate } from 'react-router-dom';

const NewsList = (props) => {
  const navigate = useNavigate()

  // Bucle de las noticias existentes
  const newsItems = props.news.map((news) =>
    <News
      key={news.id}
      id={news.id}
      title={news.title}
      body={news.body}
      image={news.image}
      source={news.source}
      publisher={news.publisher}
    />
  );
  
  return (
    <>
      <button onClick={() => navigate("/crear-noticia")}>Crear Noticia</button>
      <div className="news-list">
        {newsItems}
      </div>
    </>
  );
}

export default NewsList;
