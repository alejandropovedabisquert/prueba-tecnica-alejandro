import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const CreateNews = (props) => {
    const navigate = useNavigate()
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
    <div className='container mx-auto pt-4'>
        <h2 className='text-center text-3xl font-semibold my-4'>Crea una notica</h2>
        <div className='max-w-2xl mx-auto'>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input
                type="text"
                id="title"
                name="title"
                className='input-form'
                placeholder='Ingresa un título'
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
                className='textarea-form'
                placeholder='Ingresa una descripción'
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
                className='input-form'
                placeholder='Ingresa una url de una imagen'
                value={formData.image}
                onChange={handleChange}
                pattern="(http(s?):)([/|.|\w|\s|-])*\.(?:gif|jpeg|jpg|tiff?|png|webp|bmp)"
                title="Ingresa una URL de imagen válida"
                required
                />
            </div>
            <div>
                <label htmlFor="source">Fuente:</label>
                <input
                type="text"
                id="source"
                name="source"
                className='input-form'
                placeholder='Ingresa una url de la fuente'
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
                className='input-form'
                placeholder='Ingresa un nombre de Autor'
                value={formData.publisher}
                onChange={handleChange}
                required
                />
            </div>
            <button className='success-button mr-4 mt-4'>Enviar</button>
            <Link to="/">
                <button href='#' className='grey-button'>Volver</button>
            </Link>
            </form>
        </div>
       

    </div>
  );
}

export default CreateNews;
