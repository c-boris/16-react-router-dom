import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/documentation">Documentation</NavLink>&nbsp;
      <NavLink to="/about">About</NavLink>&nbsp;
      <NavLink to="/books">Books</NavLink>
    </nav>
  );
}

export default Navbar;
