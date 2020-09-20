import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  link: {
    margin: '0 2rem',
    cursor: 'pointer',
  },
  underline: {
    height: '2px',
    backgroundColor: theme.palette.primary.main,
  },
}));
