import classes from './Mainpage.module.css';
import Button from '@mui/material/Button';
import Logo from '../Logo/Logo';
import Main from '../Main/Main';
import Agency from '../Agency/Agency';
import Portfolio from '../Portfolio/Portfolio';
import Blog from '../Blog/Blog';
import NavLinks from '../NavLinks/NavLinks';
import MobileNavLinks from '../MobileNavLinks/MobileNavLinks';
import { Route, Routes, Redirect } from "react-router-dom";
import { HiOutlineArrowRight } from '@react-icons/all-files/hi/HiOutlineArrowRight';

const Mainpage = ({ setIsOpen, isOpen }) => {

  return (
    <section className={classes.mainWrapper}>
      <Logo isOpen={isOpen} />
      <NavLinks isOpen={isOpen} />
      <MobileNavLinks isOpen={isOpen} />
      <article
        style={!isOpen ? { zIndex: "2", } : { zIndex: "0" }}
        className={classes.mainContent}
      >
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="*"
            element={<Main to="/main" replace />}
          />
        </Routes>
      </article>
      <article className={classes.joinUsWrapper}>
        <div className={classes.buttonWrapper}>
          <Button
            aria-label='submit'
            variant="contained"
            size='large'
            className={classes.button}
            onClick={() => setIsOpen(true)}
            style={!isOpen ? { zIndex: "2", } : { zIndex: "0" }}
          >
            <h3>CONTACT US</h3>
            <HiOutlineArrowRight />
          </Button>
          <h2
            style={!isOpen ? { zIndex: "2", } : { zIndex: "0" }}
          >We will do the rest!
          </h2>
        </div>
      </article>
    </section >
  );
}

export default Mainpage;