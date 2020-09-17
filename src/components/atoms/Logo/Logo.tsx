import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant='h1' color='secondary'>
        DJ
      </Typography>
    </Paper>
  );
};

export default Logo;
