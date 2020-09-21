import { makeStyles } from '@material-ui/core/styles';
import hero from '../../../media/images/hero.jpg';

export default makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
