import classes from '../MainPage/Mainpage.module.css';

const Logo = ({isOpen}) => {
  return (
    <article style={!isOpen ? { zIndex: "3", } : { zIndex: "0" }} className={classes.logoWrapper}>
      <div className={classes.logo}></div>
      <div className={classes.logoTitle}></div>
    </article>
  );
}

export default Logo;