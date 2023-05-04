import './App.css';
import useNews from './components/hook/useNews';
import CreateNews from './components/views/CreateNews';
import EditNews from './components/views/EditNews';
import NewsList from './components/views/NewsList';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const {news, deleteNews, createNews, updateNews} = useNews()

  // Función para agregar una nueva noticia
  const handleCreate = (props) => {
    const id = news.length+1
    createNews({id, ...props});
    navigate('/');
  };

  // Función para borrar una noticia
  const handleDelete = (id) => {
    deleteNews(id);
    navigate('/');
  };

  // Función para editar una noticia
  const handleEdit = (id, updatedNews) => {
    updateNews(id, updatedNews);
    navigate('/');
  };


  return (
      <Routes>
        <Route exact path="/" element={<NewsList news={news}/>} />
        <Route path="/createNews" element={<CreateNews handleCreate={handleCreate}/>} />
        <Route  path="/news/:id" element={<EditNews handleEdit={handleEdit} handleDelete={handleDelete}/>} />
      </Routes>

  );
}

export default App;
