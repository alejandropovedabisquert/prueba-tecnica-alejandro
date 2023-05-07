import React from 'react';
import News from './News';
import { useNavigate } from 'react-router-dom';

const NewsList = (props) => {
  const navigate = useNavigate()

  if (props.isLoading) {
    return <div>Cargando Noticias...</div>;
  }

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
    <div className='flex flex-wrap justify-center container mx-auto'>
      <button className='primary-button mt-4' onClick={() => navigate("/crear-noticia")}>Crear Noticia</button>
      <div className="news-list flex flex-wrap justify-center container mx-auto transition-all">
        {newsItems}
      </div>
    </div>
  );
}

export default NewsList;
