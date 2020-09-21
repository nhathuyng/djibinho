import React from 'react';
import {} from '@material-ui/core';
import useStyles from './styles';
import { Element } from 'react-scroll';

interface ValuesProps {}

const Values: React.FC<ValuesProps> = ({}) => {
  const classes = useStyles();
  return <Element name='values'></Element>;
};

export default Values;
