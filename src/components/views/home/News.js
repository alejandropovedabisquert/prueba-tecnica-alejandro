import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const News = (props) => {
  return (
    <div className="news">
      <Link to={`/noticia/${props.id}`}>
      <div className='news-background'></div>
        <div className="news-image">
          <img src={props.image} alt={props.title} width="250px"/>
        </div>
      </Link>
        <div className="news-footer">
          <a href={props.source} target="_blank">Enlace a la fuente</a>
          <span>{props.publisher}</span>
        </div>
      <Link to={`/noticia/${props.id}`}>
        <div className="news-body">
          <h2 className="news-title">{props.title}</h2>
          <div className='news-description'>
            <p>{props.body}</p>
          </div>
        </div>

      </Link>
    </div>
  );
}

export default News;
