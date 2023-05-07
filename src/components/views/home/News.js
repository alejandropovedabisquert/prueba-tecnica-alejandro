import React from 'react';
import { useNavigate } from 'react-router-dom';

//onClick={()=> navigate(`/noticia/${props.id}`)}
const News = (props) => {
  const navigate = useNavigate()
  return (
    <div className="news">
      <div className="news-image">
        <img src={props.image} alt={props.title} width="250px"/>
      </div>
      <div className="news-body">
        <h2 className="news-title">{props.title}</h2>
        <div className='news-description'>
          <p>{props.body}</p>
        </div>
        <div className="news-footer">
          <a href={props.source} target="_blank">Fuente</a>
          <span>{props.publisher}</span>
        </div>
      </div>
    </div>
  );
}

export default News;
