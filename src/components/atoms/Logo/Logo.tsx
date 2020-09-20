import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { motion } from 'framer-motion';
import { variant } from './variants';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  const classes = useStyles();
  return (
    <motion.div variants={variant} initial='hidden' animate='visible'>
      <Paper className={classes.paper}>
        <Typography variant='h1' color='secondary'>
          DJ
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default Logo;
