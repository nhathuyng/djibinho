import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
    alignItems: 'center',
    display: 'flex',
  },
  typo: { margin: '2rem 0' },
  container: {},
}));
