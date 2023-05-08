import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailNews = (props) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const news = props.getNewsById(id)
    
    // En caso de que no hayan datos en news redirecciona al inicio
    if (!news) {
      navigate('/');
      return null;
    }
    const date = new Date(news.date)

    const formattedDate = date.toLocaleString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });

  return (
    <div className="container mx-auto pb-4">
      <div className="detail-news">
        <h2 className="title">{news.title}</h2>
        <p className="date">{formattedDate}</p>
        <div className="body">
          <p className="description">{news.body}</p>
          <img src={news.image} alt={news.title}/>
          <div className="footer">
            <a href={news.source} target="_blank" rel="noreferrer">Fuente de la noticia</a>
            <p>Autor: {news.publisher}</p>
            <button className="blue-button mt-4 mr-4" onClick={() => navigate(`/editar-noticia/${id}`)}>Editar</button>
            <button className="grey-button mt-4" onClick={() => navigate('/')}>Volver</button>
            <a className="delete-button mt-4" role="button" onClick={() => props.handleDelete(id)}>Eliminar</a>
          </div>        
        </div>
      </div>
      
    </div>
  );
};

export default DetailNews;
