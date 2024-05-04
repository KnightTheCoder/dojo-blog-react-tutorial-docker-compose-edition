import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const host = process.env.REACT_APP_HOST;

  const { data: blogs, isPending, error } = useFetch(`http://${host}:8000/blogs`);

  return (
    <div className="home">
      {error && <div>{error}</div>}

      {isPending && <div>Loading...</div>}

      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs!"
        />
      )}
    </div>
  );
};

export default Home;
