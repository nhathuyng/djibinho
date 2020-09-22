import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';

interface ValuesContentProps {}

const ValuesContent: React.FC<ValuesContentProps> = ({}) => {
  const classes = useStyles();
  return (
    <Grid container item>
      <motion.div>
        <Typography variant='h1' color='initial'>
          ENJOYMENT
        </Typography>
        <Typography variant='h5' color='initial'>
          First and foremost, the kids should have fun learning new things. This
          is a key peace of the Djibinho philosophy. Learning done easily with
          the right motivation and methods.
        </Typography>
      </motion.div>
      <motion.div>
        <Typography variant='h1' color='initial'>
          INNOVATION
        </Typography>
        <Typography variant='h5' color='initial'>
          First and foremost, the kids should have fun learning new things. This
          is a key peace of the Djibinho philosophy. Learning done easily with
          the right motivation and methods.
        </Typography>
      </motion.div>
      <motion.div>
        <Typography variant='h1' color='initial'>
          GROWTH
        </Typography>
        <Typography variant='h5' color='initial'>
          First and foremost, the kids should have fun learning new things. This
          is a key peace of the Djibinho philosophy. Learning done easily with
          the right motivation and methods.
        </Typography>
      </motion.div>
      <motion.div>
        <Typography variant='h1' color='initial'>
          GUIDANCE
        </Typography>
        <Typography variant='h5' color='initial'>
          First and foremost, the kids should have fun learning new things. This
          is a key peace of the Djibinho philosophy. Learning done easily with
          the right motivation and methods.
        </Typography>
      </motion.div>
    </Grid>
  );
};

export default ValuesContent;
