import React from 'react';
import News from './News';
import fakeNews from '../FakeNews';

const NewsList = () => {
  const newsItems = fakeNews.map((news) =>
    <News
      key={news.id}
      title={news.title}
      body={news.body}
      image={news.image}
      source={news.source}
      publisher={news.publisher}
    />
  );
  
  return (
    <div className="news-list">
      {newsItems}
    </div>
  );
}

export default NewsList;
