import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useRef } from 'react';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending
  } = useFetch(`${process.env.REACT_APP_DATABASE}/blogs/${id}`);
  const history = useHistory();
  const dialogRef = useRef(null)

  const showDialog = () => {
    dialogRef.current.open = true
  }

  const hideDialog = () => {
    dialogRef.current.open = false
  }

  const handleDelete = () => {
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
          <button onClick={showDialog}>delete</button>
          <dialog ref={dialogRef}>
            <p>Are you sure?</p>
            <button id='delYes' onClick={handleDelete}>yes</button>
            <button id='delNo' onClick={hideDialog}>no</button>
          </dialog>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
