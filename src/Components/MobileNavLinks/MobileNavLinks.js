import NavList from '../NavList/NavList';
import './MobileNavLinks.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgCloseO } from 'react-icons/cg';
import { useState } from "react";

const MobileNavLinks = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = <AiOutlineMenu className='hamburger-open' style={!isOpen ? { zIndex: "2", } : { zIndex: "0" }} size='3rem' color='#ffffff'
    onClick={() => setOpenMenu(!openMenu)} />
  const closeIcon = <CgCloseO className='hamburger-close' size='3rem' color='#ffffff'
    onClick={() => setOpenMenu(!openMenu)} />

  return (
    <nav style={!isOpen ? { zIndex: "3", } : { zIndex: "0" }} className={!openMenu ? `mobileNavigation` : `mobileNavigationActive`}>
      {openMenu ? closeIcon : hamburgerIcon}
      {openMenu && <NavList setOpenMenu={setOpenMenu} />}
    </nav>
  );
}

export default MobileNavLinks;