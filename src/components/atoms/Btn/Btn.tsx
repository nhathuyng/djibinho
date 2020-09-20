import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

interface BtnProps {
  onClick: () => void;
  children: string;
}

const Btn: React.FC<BtnProps> = ({ onClick, children }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={onClick}
      variant='contained'
      color='primary'>
      {children}
    </Button>
  );
};

export default Btn;
