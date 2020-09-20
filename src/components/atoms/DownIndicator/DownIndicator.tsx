import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { motion } from 'framer-motion';
import { variantArrow, variantBox } from './variants';

interface DownIndicatorProps {}

const DownIndicator: React.FC<DownIndicatorProps> = ({}) => {
  const classes = useStyles();
  return (
    <motion.div variants={variantBox} initial='hidden' animate='visible'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        className={classes.root}>
        <Button variant='outlined' color='default'>
          <Typography variant='caption' color='initial'>
            EXPLORE
          </Typography>
        </Button>

        <motion.div variants={variantArrow} animate='animate'>
          <ArrowDropDownIcon className={classes.icon} />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default DownIndicator;
