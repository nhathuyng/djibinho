import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import Btn from '../../atoms/Btn/Btn';

interface SummerCampContentProps {}

const SummerCampContent: React.FC<SummerCampContentProps> = ({}) => {
  const classes = useStyles();
  return (
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
      <Typography className={classes.title} variant='h1' color='initial'>
        SUMMERCAMP 2020
      </Typography>
      <Typography
        className={classes.p}
        align='center'
        variant='h5'
        color='initial'>
        In the Summer Camp of 2020, the kids learned bliblablbviad
      </Typography>
      <Btn>work with us</Btn>
    </Grid>
  );
};

export default SummerCampContent;
