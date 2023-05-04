import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CreateNews = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        image: '',
        source: '',
        publisher: ''
      });

    // Función para manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleCreate(formData);
    }
    // Función para manejar los cambios en las entradas de formulario y actualizar el estado de formData en consecuencia
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, // Copia del ojeto existente
            [name]: value // Actualiza la propiedad correspondiente al nombre del input con el nuevo valor
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="body">Body:</label>
            <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="image">Image:</label>
            <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="source">Source:</label>
            <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="publisher">Publisher:</label>
            <input
            type="text"
            id="publisher"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            />
        </div>
        <button type="submit">Submit</button>
        </form>
        <Link to="/">
            <button>Cancel</button>
        </Link>
    </div>
  );
}

export default CreateNews;
