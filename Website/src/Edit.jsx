import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
import handleInputChange from './onChange';

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [blog, setBlog] = useState({
    title: '',
    body: '',
    author: 'mario'
  });
  const [isUpdatePending, setIsUpdatePending] = useState(false);

  const {
    data,
    error,
    isPending: isFetchPending
  } = useFetch(`${process.env.REACT_APP_DATABASE}/blogs/${id}`);

  useEffect(() => {
    if (data) {
      setBlog(data);
      setTitle(data.title);
      setBody(data.body);
      setAuthor(data.author);
    }
  }, [data]);

  useEffect(() => {
    setBlog({
      title,
      body,
      author
    });
  }, [title, body, author]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsUpdatePending(true);

    fetch(`${process.env.REACT_APP_DATABASE}/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsUpdatePending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Edit blog - {id}</h2>

      {isFetchPending ? (
        <div>Loading...</div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Blog title</label>
          <input
            type="text"
            required
            value={blog.title}
            onChange={handleInputChange(setTitle)}
          />

          <label>Blog body</label>
          <textarea
            required
            value={blog.body}
            onChange={handleInputChange(setBody)}
          ></textarea>

          <label>Blog author</label>
          <select
            value={blog.author}
            onChange={handleInputChange(setAuthor)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          {!isUpdatePending && <button>Edit blog</button>}
          {isUpdatePending && <button disabled>Editing blog...</button>}
        </form>
      )}
    </div>
  );
};

export default Edit;
