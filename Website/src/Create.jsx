import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import handleInputChange from './handleInputChange';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
      author
    };

    setIsPending(true);

    fetch(`${process.env.REACT_APP_DATABASE}/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      // history.go(-1);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={handleInputChange(setTitle)}
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={handleInputChange(setBody)}
        ></textarea>
        <label>Blog author</label>
        <select
          value={author}
          onChange={handleInputChange(setAuthor)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
