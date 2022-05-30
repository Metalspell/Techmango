import classes from './NavLinks.module.css';
import NavList from '../NavList/NavList';

const NavLinks = ({ isOpen }) => {
  return (
    <nav className={classes.navigation}
      style={!isOpen ? { zIndex: "3", } : { zIndex: "0" }}>
      <NavList />
    </nav>
  );
}

export default NavLinks;