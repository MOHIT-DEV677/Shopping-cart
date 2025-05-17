import { React } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // CSS import

const Header = () => {
  const items = [1, 2, 3, 5]; // (optional logic, can be used later for cart count)

  return (
    <header className="header">
      <div className="logo">Food Cart</div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
