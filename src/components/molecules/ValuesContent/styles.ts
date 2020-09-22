import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  motion: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '4rem',
  },
  heading: {
    fontWeight: 400,
  },
  content: {
    fontWeight: 300,
  },
}));
