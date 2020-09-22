import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  link: {
    marginLeft: '4rem',
    cursor: 'pointer',
  },
  underline: {
    height: '2px',
    backgroundColor: theme.palette.primary.main,
  },
}));
