import classes from './NavList.module.css';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import SocialItems from '../SocialItems/SocialItems';

const NavList = ({ setOpenMenu, openMenu }) => {
  const animateFrom = { opcaity: 0, y: -40 }
  const animateTo = { opcaity: 1, y: 0 }

  const handler = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
  }

  return (
    <>
      {openMenu &&
        <div className={classes.logo}>
          <Logo />
        </div>
      }
      {openMenu &&
        <div className={classes.horizontalDivider1}></div>
      }
      <div className={classes.navList}>
        <motion.li transition={{ delay: 0.05 }} initial={animateFrom} animate={animateTo}>
          <div
            onClick={handler}
          >
            <Link to='/main'>Main</Link>
          </div>
        </motion.li>
        <motion.li transition={{ delay: 0.10 }} initial={animateFrom} animate={animateTo}>
          <div
            onClick={handler}
          >
            <Link to='/agency'>
              Agency
            </Link>
          </div>
        </motion.li>
        <motion.li transition={{ delay: 0.20 }} initial={animateFrom} animate={animateTo}>
          <div
            onClick={handler}
          >
            <Link to='/portfolio'>
              Portfolio
            </Link>
          </div>
        </motion.li>
        <motion.li transition={{ delay: 0.30 }} initial={animateFrom} animate={animateTo}>
          <div
            onClick={handler}
          >
            <Link to='/blog'>
              Blog
            </Link>
          </div>
        </motion.li>
      </div >
      {openMenu &&
        <div className={classes.horizontalDivider2}></div>
      }
      {openMenu &&
        <SocialItems />
      }
    </>
  );
}

export default NavList;