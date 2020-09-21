import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menu: {
    color: 'white',
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    width: 300,
  },
  item: {
    margin: '2rem 0',
  },
}));
