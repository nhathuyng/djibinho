import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import ModuleCards from '../../organisms/ModuleCards/ModuleCards';

interface ModulesProps {}

const Modules: React.FC<ModulesProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Typography
          align='center'
          className={classes.typo}
          variant='h2'
          color='initial'>
          {'modules'.toUpperCase()}
        </Typography>

        <ModuleCards />
      </Container>
    </div>
  );
};

export default Modules;
