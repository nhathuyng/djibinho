import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // minHeight: '80vh',
  },
  leftContainer: {
    backgroundColor: theme.palette.primary.dark,
    padding: '5%',
    minHeight: '100vh',
  },
  rightContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: '5%',
    minHeight: '100vh',
  },
  container: {},
}));
