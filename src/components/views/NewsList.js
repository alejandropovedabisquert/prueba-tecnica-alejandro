import React from 'react';
import News from './News';
import useNews from '../hook/useNews';
import CreateNews from './CreateNews';

const NewsList = () => {
  const {news, deleteNews, createNews} = useNews()

  const handleDelete = (id) => {
    console.log(id);
    deleteNews(id);
  };
  const handleCreate = (props) => {
    console.log(props);
    console.log(news);
    const id = news.length+1
    console.log(id);
    createNews({id, ...props});
  };

  const newsItems = news.map((news) =>
    <News
      key={news.id}
      id={news.id}
      title={news.title}
      body={news.body}
      image={news.image}
      source={news.source}
      publisher={news.publisher}
      handleDelete={handleDelete}
    />
  );
  
  return (
    <>
      <CreateNews news={news} handleCreate={handleCreate}/>
      <div className="news-list">
        {newsItems}
      </div>
    </>
  );
}

export default NewsList;
