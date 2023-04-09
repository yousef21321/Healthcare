import "../style/Header.css";
import React from "react";
import myImage from './lo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
<>

<header style={styles.header}>
  <nav style={styles.nav}>
    <ul style={styles.navList}>
    <nav className="navbar">

      <li style={styles.navItem}><Link to="/Admin" style={styles.navLink}>Admin Home</Link></li>
      <li style={styles.navItem}><Link to="/about" style={styles.navLink}>Help</Link></li>
      <li style={styles.navItem}><Link to="/" style={styles.navLink}>Logout</Link></li>
      <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
      </nav>
    </ul>
  </nav>
</header>


</>

  );
};
const styles = {
  header: {
    backgroundColor: '#ffffff00',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    position: 'right' ,

  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'right',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '1rem',
  },
  navLink: {
    color: '#f5f5f5',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
  },
  navLinkActive: {
    backgroundColor: '#ffffff00',
    color: '#ffffff00',
  },
};

export default Header;
