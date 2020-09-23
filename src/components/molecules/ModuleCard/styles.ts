import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    minWidth: '290px',
    margin: '2rem 0',
  },
  media: {
    height: '220px',
    width: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typo: {
    fontWeight: 500,
  },
}));
