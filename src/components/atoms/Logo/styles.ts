import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 115,
    width: 100,
  },
}));
