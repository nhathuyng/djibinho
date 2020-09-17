import React from 'react';
import useStyles from './styles';
import { Paper, Typography, Box, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.est} variant='h4'>
          est. 2019
        </Typography>
        <Box className={classes.title}>
          <Paper></Paper>
          <Typography variant='h1'>DJIBINHO</Typography>
          <Typography variant='h5'>The new way of football</Typography>
        </Box>
        <Box className={classes.learn}>
          <Button>
            <Typography variant='h5'>Learn more about us</Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Banner;
