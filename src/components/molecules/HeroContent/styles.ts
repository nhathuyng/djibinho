import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      fontWeight: 300,
      marginTop: '0.35rem',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    '& .MuiTypography-h1': {
      fontSize: 70,
      [theme.breakpoints.down('sm')]: {
        fontSize: 60,
      },
    },
  },
  title: {
    paddingTop: '15vh',
  },
  btnDiv: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));
