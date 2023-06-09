import './App.css';
import useNews from './components/hook/useNews';
import CreateNews from './components/views/createNews/CreateNews';
import DetailNews from './components/views/detailNews/DetailNews';
import EditNews from './components/views/editNews/EditNews';
import NewsList from './components/views/home/NewsList';
import { v4 as uuidv4 } from 'uuid';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/layout/Header';

const App = () => {
  const navigate = useNavigate();
  
  const {news, deleteNews, createNews, updateNews, getNewsById, isLoading} = useNews()
  
  // Ordenaremos los datos cada vez que lo solicitemos
  const orderedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Función para agregar una nueva noticia
  const handleCreate = (props) => {
    const id = uuidv4()
    createNews({id, ...props});
    navigate(-1);
  };

  // Función para borrar una noticia
  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      deleteNews(id);
      navigate('/');
    }
  };

  // Función para editar una noticia
  const handleEdit = (id, updatedNews) => {
    updateNews(id, updatedNews);
    navigate(-1);
  };

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<NewsList news={orderedNews} isLoading={isLoading}/>} />
        <Route path="/crear-noticia" element={<CreateNews handleCreate={handleCreate}/>} />
        <Route path="/editar-noticia/:id" element={<EditNews handleEdit={handleEdit} handleDelete={handleDelete} getNewsById={getNewsById}/>} />
        <Route path="/noticia/:id" element={<DetailNews handleDelete={handleDelete} getNewsById={getNewsById}/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>

  );
}

export default App;
