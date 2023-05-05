import './App.css';
import useNews from './components/hook/useNews';
import CreateNews from './components/views/CreateNews';
import DetailNews from './components/views/DetailNews';
import EditNews from './components/views/EditNews';
import NewsList from './components/views/NewsList';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const {news, deleteNews, createNews, updateNews, getNewsById} = useNews()

  // Función para agregar una nueva noticia
  const handleCreate = (props) => {
    const id = news.length+1
    createNews({id, ...props});
    navigate(-1);
  };

  // Función para borrar una noticia
  const handleDelete = (id) => {
    deleteNews(id);
    navigate('/');
  };

  // Función para editar una noticia
  const handleEdit = (id, updatedNews) => {
    updateNews(id, updatedNews);
    navigate(-1);
  };


  return (
      <Routes>
        <Route exact path="/" element={<NewsList news={news}/>} />
        <Route path="/crear-noticia" element={<CreateNews handleCreate={handleCreate}/>} />
        <Route  path="/editar-noticia/:id" element={<EditNews handleEdit={handleEdit} handleDelete={handleDelete} getNewsById={getNewsById}/>} />
        <Route  path="/noticia/:id" element={<DetailNews handleDelete={handleDelete} getNewsById={getNewsById}/>} />
      </Routes>

  );
}

export default App;
