import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Título:</label>
            <input
            type="text"
            id="title"
            name="title"
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
            value={formData.image}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="source">Fuente:</label>
            <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label htmlFor="publisher">Autor:</label>
            <input
            type="text"
            id="publisher"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            required
            />
        </div>
        <button type="submit">Enviar</button>
        </form>
        <button onClick={() => navigate(-1)}>Volver</button>
        <button onClick={() => props.handleDelete(id)}>Eliminar</button>
    </div>
  );
};

export default EditNews;
