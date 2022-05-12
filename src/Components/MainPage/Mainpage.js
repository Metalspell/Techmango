import classes from './Mainpage.module.css';
import Button from '@mui/material/Button';
import Logo from '../Logo/Logo';
import { HiOutlineArrowRight } from '@react-icons/all-files/hi/HiOutlineArrowRight';

const Mainpage = ({ setIsOpen }) => {
  return (
    <section className={classes.mainWrapper}>
      <Logo />
      <article className={classes.joinUsWrapper}>
        <h1 className={classes.joinUsTitle}>
          Have <span>an idea?</span>
        </h1>
        <div className={classes.buttonWrapper}>
          <Button aria-label='submit' variant="contained" size='large' className={classes.button} onClick={() => setIsOpen(true)}>
            <h3>CONTACT US</h3>
            <HiOutlineArrowRight />
          </Button> 
          <h2>We will do the rest!</h2>
        </div>
      </article>
    </section>
  );
}

export default Mainpage;