import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

interface BtnProps {
  onClick?: () => void;
  children: string;
  type: 'button' | 'reset' | 'submit' | undefined;
}

const Btn: React.FC<BtnProps> = ({ onClick, children, type }) => {
  const classes = useStyles();
  return (
    <Button
      type={type}
      className={classes.button}
      onClick={onClick}
      variant='contained'
      color='primary'>
      {children}
    </Button>
  );
};

export default Btn;
