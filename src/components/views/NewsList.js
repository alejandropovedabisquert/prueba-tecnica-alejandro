import React from 'react';
import News from './News';
import { Link } from 'react-router-dom';

const NewsList = (props) => {

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
      <Link to="/createNews">
        <button>Create News</button>
      </Link>
      <div className="news-list">
        {newsItems}
      </div>
    </>
  );
}

export default NewsList;
