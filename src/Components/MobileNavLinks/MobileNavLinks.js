import NavList from '../NavList/NavList';
import './MobileNavLinks.css';
import { useState } from "react";
import { RiMenu3Fill } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri'

const MobileNavLinks = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <RiMenu3Fill className='hamburger-open' style={!isOpen ? { zIndex: "2", } : { zIndex: "0" }} size='3rem' color='#ffffff'
    onClick={() => setOpenMenu(!openMenu)} />
  const closeIcon = <RiCloseLine className='hamburger-close' size='3rem' color='#ffffff'
    onClick={() => setOpenMenu(!openMenu)} />

  return (
    <nav style={!isOpen ? { zIndex: "3", } : { zIndex: "0" }} className={!openMenu ? `mobileNavigation` : `mobileNavigationActive`}>
      {openMenu ? closeIcon : hamburgerIcon}
      {openMenu && <NavList setOpenMenu={setOpenMenu} />}
    </nav>
  );
}

export default MobileNavLinks;