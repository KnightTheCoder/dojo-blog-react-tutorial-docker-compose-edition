import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending
  } = useFetch(`${process.env.REACT_APP_DATABASE}/blogs/${id}`);
  const history = useHistory();

  const handleClickDelete = () => {
    fetch(`${process.env.REACT_APP_DATABASE}/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  };

  const handleClickEdit = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClickEdit}>edit</button>
          <button onClick={handleClickDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
