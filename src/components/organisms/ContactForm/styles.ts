import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '2.5rem 0',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },

    '& 	.MuiOutlinedInput-input': {
      color: 'white',
    },
  },

  typo: {
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '8rem',
    },
  },

  inputLabel: {
    color: 'white',
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important',
  },
}));
