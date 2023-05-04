import React from 'react';
import { Link } from 'react-router-dom';

const News = (props) => {
  return (
    <div className="news">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.image} alt={props.title} width="250px"/>
      <p>{props.source} - {props.publisher}</p>
      <Link to={`/news/${props.id}`}>
        <button>Editar</button>
      </Link>
    </div>
  );
}

export default News;
