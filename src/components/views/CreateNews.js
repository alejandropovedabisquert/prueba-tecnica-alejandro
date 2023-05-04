import React, { useState } from 'react';

const CreateNews = (props) => {
    const [news, setNews] = useState({
        title: '',
        body: '',
        image: '',
        source: '',
        publisher: ''
      });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleCreate(news);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({
      ...news,
      [name]: value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={news.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          className="form-control"
          id="body"
          name="body"
          value={news.body}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={news.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          className="form-control"
          id="source"
          name="source"
          value={news.source}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="publisher">Publisher:</label>
        <input
          type="text"
          className="form-control"
          id="publisher"
          name="publisher"
          value={news.publisher}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CreateNews;
