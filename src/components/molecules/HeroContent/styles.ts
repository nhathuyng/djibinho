import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      fontWeight: 300,
      marginTop: '0.35rem',
    },
    '& .MuiTypography-h1': {
      fontSize: 70,
    },
  },
  title: {
    paddingTop: '15vh',
  },
}));
