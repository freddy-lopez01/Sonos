import './Navbar.css';
import { Link } from 'react-router-dom'; // If you're using routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  const menuItems = ['Shop', 'Headphones', 'Learn', 'Support', 'Radio', 'Professional'];
  const menuIcons = [
    { name: 'Shop', icon: faShoppingCart },
    { name: 'Search', icon: faSearch },
    { name: 'Profile', icon: faUser }
  ];

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-container">
          <h1 className="logo">SONOS</h1>
          <div className="nav-opt">
            <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={`/${item.toLowerCase()}`} className="nav-links">
                  {item}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <div className="nav-icons">
          {menuIcons.map((menuIcons, index) => (
            <Link key={index} to={menuIcons.link} className="nav-icon-link">
              <FontAwesomeIcon icon={menuIcons.icon} />
            </Link>
          ))}
          </div>
        </div>
      </div>
    </>
    );
}

export default NavBar;
