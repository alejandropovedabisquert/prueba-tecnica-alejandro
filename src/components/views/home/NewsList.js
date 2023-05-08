import React from 'react';
import News from './News';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const NewsList = (props) => {
  const navigate = useNavigate()

  if (props.isLoading) {
    return <div className="absolute flex bg-gray-300 opacity-40 top-0 left-0 rounded-md z-10 bg- w-full h-full">
              <FaSpinner className="animate-spin h-16 w-16 mx-auto self-center"/>
            </div>;
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
    <div className='flex flex-wrap justify-center container mx-auto mb-4'>
      <button className='primary-button mt-4' onClick={() => navigate("/crear-noticia")}>Crear Noticia</button>
      <div className="news-list flex flex-wrap justify-center container mx-auto transition-all">
        {newsItems}
      </div>
    </div>
  );
}

export default NewsList;
