import { makeStyles } from '@material-ui/core/styles';
import hero from '../../../media/images/hero.jpg';

export default makeStyles({
  root: {
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh',
  },
});
