import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';
import { variant } from './variants';

interface TitleProps {}

const Title: React.FC<TitleProps> = ({}) => {
  const classes = useStyles();
  return (
    <motion.div variants={variant} initial='hidden' animate='visible'>
      <Typography className={classes.typo} variant='h2'>
        DJIBINHO
      </Typography>
    </motion.div>
  );
};

export default Title;
