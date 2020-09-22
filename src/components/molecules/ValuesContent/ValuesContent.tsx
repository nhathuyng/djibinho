import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';
import {
  variantContainer,
  variantHeading,
  variantContent,
  variantValues,
} from './variants';

interface ValuesContentProps {}

const values = [
  {
    heading: 'ENJOYMENT 😊 ',
    content:
      'First and foremost, the kids should have fun learning new things. This a key peace of the Djibinho philosophy. Learning done easily wit the right motivation and methods.',
  },
  {
    heading: 'INNOVATION 🛰 ',
    content:
      'First and foremost, the kids should have fun learning new things. This a key peace of the Djibinho philosophy. Learning done easily wit the right motivation and methods.',
  },
  {
    heading: 'GROWTH ↗',
    content:
      'First and foremost, the kids should have fun learning new things. This a key peace of the Djibinho philosophy. Learning done easily wit the right motivation and methods.',
  },
  {
    heading: 'GUIDANCE 📖 ',
    content:
      'First and foremost, the kids should have fun learning new things. This a key peace of the Djibinho philosophy. Learning done easily wit the right motivation and methods.',
  },
];

const ValuesContent: React.FC<ValuesContentProps> = ({}) => {
  const classes = useStyles();
  return (
    <Grid container item>
      <motion.div variants={variantValues} initial='hidden' animate='visible'>
        {values.map(({ heading, content }) => {
          return (
            <motion.div variants={variantContainer} className={classes.motion}>
              <Typography
                component={motion.div}
                variants={variantHeading}
                className={classes.heading}
                variant='h4'
                color='initial'>
                {heading}
              </Typography>
              <Typography
                component={motion.div}
                variants={variantContent}
                className={classes.content}
                variant='h6'
                color='initial'>
                {content}
              </Typography>
            </motion.div>
          );
        })}
      </motion.div>
    </Grid>
  );
};

export default ValuesContent;
