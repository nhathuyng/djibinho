import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import Btn from '../../atoms/Btn/Btn';
import { motion } from 'framer-motion';
import { variantContainer, variantChildren } from './variants';
import VideoModal from '../VideoModal/VideoModal';

interface HeroContentProps {}

const HeroContent: React.FC<HeroContentProps> = ({}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Btn type='button' onClick={handleOpen}>
            learn more
          </Btn>
        </motion.div>
      </motion.div>
      <VideoModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default HeroContent;
