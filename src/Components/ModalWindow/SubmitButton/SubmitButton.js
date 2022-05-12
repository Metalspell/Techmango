import classes from './SubmitButton.module.css';
import Button from '@mui/material/Button';
import { HiOutlineArrowRight } from '@react-icons/all-files/hi/HiOutlineArrowRight';

const SubmitButton = ({ isActiveError }) => {
  return (
    <Button
      disabled={isActiveError}
      aria-label='submit'
      variant="contained"
      size='large'
      type="submit"
      className={classes.button}
    >
      <h3 className={classes.buttonTitle}>SEND</h3>
      <HiOutlineArrowRight className={!isActiveError ? classes.buttonArrow : classes.buttonArrowDisabled}/>
    </Button>
  );
}

export default SubmitButton;