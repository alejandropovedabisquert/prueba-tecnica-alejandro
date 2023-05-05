import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailNews = (props) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const news = props.getNewsById(id)

  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.body}</p>
      <img src={news.image} alt={news.title} width="250px"/>
      <p>{news.source} - {news.publisher}</p>        
        {/* <button onClick={() => props.handleDelete(id)}>Eliminar</button> */}
        <button onClick={() => navigate(`/editar-noticia/${id}`)}>Editar Noticia</button>
        <button onClick={() => props.handleDelete(id)}>Eliminar</button>
        <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default DetailNews;
