import React from 'react';

const News = (props) => {
  return (
    <div className="news">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.image} alt={props.title} />
      <p>{props.source} - {props.publisher}</p>
    </div>
  );
}

export default News;
