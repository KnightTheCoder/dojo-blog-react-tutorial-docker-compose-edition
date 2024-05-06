import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeSwitch = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.body.className = 'dark';
    } else {
      document.body.className = '';
    }
  }, [isDark]);

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <button onClick={handleThemeSwitch}></button>
      </div>
    </nav>
  );
};

export default Navbar;
