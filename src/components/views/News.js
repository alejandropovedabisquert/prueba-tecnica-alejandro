import React from 'react';

const News = (props) => {
  return (
    <div className="news">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.image} alt={props.title} width="250px"/>
      <p>{props.source} - {props.publisher}</p>
      <button onClick={() => props.handleDelete(props.id)}>Eliminar</button>
    </div>
  );
}

export default News;
