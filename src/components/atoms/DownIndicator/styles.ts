import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  icon: {
    fontSize: '3.5rem',
    color: theme.palette.text.primary,
  },
}));
