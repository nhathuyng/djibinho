import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import Btn from '../../atoms/Btn/Btn';
import { motion } from 'framer-motion';
import { variantContainer, variantChildren } from './variants';

interface HeroContentProps {}

const HeroContent: React.FC<HeroContentProps> = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <motion.div
        variants={variantContainer}
        initial='hidden'
        animate='visible'>
        <Typography
          component={motion.div}
          variants={variantChildren}
          className={classes.title}
          variant='h1'
          color='primary'>
          The new way of soccer
        </Typography>
        <Typography
          component={motion.div}
          variants={variantChildren}
          variant='h4'
          color='primary'>
          Djibinho teaches kids the new ways of handling a ball.
        </Typography>
        <Typography
          component={motion.div}
          variants={variantChildren}
          variant='h4'
          color='primary'>
          Focusing especially on footwork and right coordination.
        </Typography>
        <motion.div className={classes.btnDiv} variants={variantChildren}>
          <Btn onClick={() => console.log('1')}>learn more</Btn>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default HeroContent;
