import classes from './NavList.module.css';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const NavList = ({ setOpenMenu }) => {
  const animateFrom = { opcaity: 0, y: -40 }
  const animateTo = { opcaity: 1, y: 0 }

  return (
    <ul className={classes.navList}>
      <motion.li transition={{ delay: 0.05 }} initial={animateFrom} animate={animateTo}>
        <li
          onClick={() => setOpenMenu(false)}
        >
          <Link to='/main'>Main</Link>
        </li>
      </motion.li>
      <motion.li transition={{ delay: 0.10 }} initial={animateFrom} animate={animateTo}>
        <li
          onClick={() => setOpenMenu(false)}
        >
          <Link to='/agency'>
            Agency
          </Link>
        </li>
      </motion.li>
      <motion.li transition={{ delay: 0.20 }} initial={animateFrom} animate={animateTo}>
        <li
          onClick={() => setOpenMenu(false)}
        >
          <Link to='/portfolio'>
            Portfolio
          </Link>
        </li>
      </motion.li>
      <motion.li transition={{ delay: 0.30 }} initial={animateFrom} animate={animateTo}>
        <li
          onClick={() => setOpenMenu(false)}
        >
          <Link to='/blog'>
            Blog
          </Link>
        </li>
      </motion.li>
    </ul >
  );
}

export default NavList;