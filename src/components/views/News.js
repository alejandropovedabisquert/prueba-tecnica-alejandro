import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = (props) => {
  const navigate = useNavigate()
  return (
    <div className="news">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.image} alt={props.title} width="250px"/>
      <p>{props.source} - {props.publisher}</p>
      <button onClick={()=> navigate(`/noticia/${props.id}`)}>Detalle</button>
    </div>
  );
}

export default News;
