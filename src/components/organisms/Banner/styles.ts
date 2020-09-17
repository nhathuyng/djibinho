import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    position: 'relative',
    height: '100vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.primary.main,
  },
  est: {
    transform: 'rotateZ(-90deg)',
    position: 'absolute',
    left: '-5%',
    top: '5%',
  },
  title: {
    marginTop: '35vh',
  },
  learn: {
    margin: '2rem 0',
  },
}));
