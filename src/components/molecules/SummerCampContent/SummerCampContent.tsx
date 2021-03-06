import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import Btn from '../../atoms/Btn/Btn';
import { motion } from 'framer-motion';
import { variantCamp, variantCampChild } from './variants';
import useAnimInView from '../../../state/hooks/useAnimInView';

interface SummerCampContentProps {}

const SummerCampContent: React.FC<SummerCampContentProps> = ({}) => {
  const classes = useStyles();
  const { animation, ref } = useAnimInView();
  return (
    <motion.div
      ref={ref}
      variants={variantCamp}
      initial='hidden'
      animate={animation}>
      <Grid
        alignItems='center'
        justify='center'
        direction='column'
        item
        container>
        <video width='100%' height='auto' controls>
          <source
            src={require('../../../media/videos/summercamp.mp4')}
            type='video/mp4'
          />
        </video>
        <Typography
          component={motion.div}
          variants={variantCampChild}
          className={classes.title}
          variant='h2'
          color='initial'>
          SUMMERCAMP 2020
        </Typography>
        <Typography
          component={motion.div}
          variants={variantCampChild}
          className={classes.p}
          align='center'
          variant='h5'
          color='initial'>
          In the Summer Camp of 2020, the kids learned bliblablbviad
        </Typography>
        <motion.div variants={variantCampChild}>
          <Btn type='button'>work with us</Btn>
        </motion.div>
      </Grid>
    </motion.div>
  );
};

export default SummerCampContent;
