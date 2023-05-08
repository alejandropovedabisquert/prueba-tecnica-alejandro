import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditNews = (props) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [formData, setFormData] = useState(props.getNewsById(id));

    // Función para manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleEdit(id, formData);
    };

    // Función para manejar los cambios en las entradas de formulario y actualizar el estado de formData en consecuencia
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, // Devuelve una copia del estado anterior del objeto
            [name]: value // Actualiza la propiedad correspondiente al nombre del input con el nuevo valor
        }));
    };

    // En caso de que no hayan datos en formdata redirecciona al inicio
    if (!formData) {
        navigate('/');
        return null;
      }


  return (
    <div className="container mx-auto py-4">
        <div className="max-w-2xl mx-auto">
            <h2 className='form-title'>Edita la noticia</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input
                type="text"
                id="title"
                name="title"
                className="input-form"
                value={formData.title}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="body">Descripción:</label>
                <textarea
                id="body"
                name="body"
                className="textarea-form"
                value={formData.body}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="image">Imagen:</label>
                <input
                type="text"
                id="image"
                name="image"
                className="input-form"
                value={formData.image}
                onChange={handleChange}
                pattern="^https?://.*\.(?:png|jpg|jpeg|gif|PNG|JPG|JPEG|GIF)$"
                title="Ingresa una URL de imagen válida: png, jpg, jpeg, gif"
                required
                />
            </div>
            <img src={formData.image} alt={formData.title} width="250px"/>
            <div>
                <label htmlFor="source">Fuente de la noticia:</label>
                <input
                type="text"
                id="source"
                name="source"
                className="input-form"
                value={formData.source}
                onChange={handleChange}
                pattern="^(ftp|http|https):\/\/[^ &quot;]+$"
                title="Ingresa una URL válida"
                required
                />
            </div>
            <div>
                <label htmlFor="publisher">Autor:</label>
                <input
                type="text"
                id="publisher"
                name="publisher"
                className="input-form"
                value={formData.publisher}
                onChange={handleChange}
                required
                />
            </div>
            <button className="success-button mt-4 mr-4">Guardar</button>
            <button className="danger-button mr-4" onClick={() => props.handleDelete(id)}>Eliminar</button>
            <Link to={`/noticia/${formData.id}`}>
                <button className="grey-button">Volver</button>
            </Link>
            </form>
        </div>
    </div>
  );
};

export default EditNews;
