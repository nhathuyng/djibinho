import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { Element } from 'react-scroll';
import SummerCampContent from '../../molecules/SummerCampContent/SummerCampContent';
import ValuesContent from '../../molecules/ValuesContent/ValuesContent';

interface ValuesProps {}

const Values: React.FC<ValuesProps> = ({}) => {
  const classes = useStyles();
  return (
    <Element name='values'>
      <div className={classes.root}>
        <Grid className={classes.container} container>
          <Grid
            alignItems='center'
            justify='center'
            container
            item
            className={classes.leftContainer}
            xs={12}
            lg={6}>
            <SummerCampContent />
          </Grid>
          <Grid
            container
            item
            className={classes.rightContainer}
            xs={12}
            lg={6}>
            <ValuesContent />
          </Grid>
        </Grid>
      </div>
    </Element>
  );
};

export default Values;
