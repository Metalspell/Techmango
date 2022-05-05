import classes from '../MainPage/Mainpage.module.css';

const Logo = () => {
  return (
    <article className={classes.logoWrapper}>
      <div className={classes.logo}></div>
      <div className={classes.logoTitle}></div>
    </article>
  );
}

export default Logo;