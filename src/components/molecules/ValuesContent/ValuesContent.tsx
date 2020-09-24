import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';
import useAnimInView from '../../../state/hooks/useAnimInView';
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
  const { animation, ref } = useAnimInView();
  return (
    <motion.div
      ref={ref}
      className={classes.container}
      variants={variantValues}
      initial='hidden'
      animate={animation}>
      {values.map(({ heading, content }, id) => {
        return (
          <motion.div
            key={id}
            variants={variantContainer}
            className={classes.motion}>
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
            <Divider />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ValuesContent;
