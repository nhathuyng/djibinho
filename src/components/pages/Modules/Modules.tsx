import React from 'react';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import ModuleCards from '../../organisms/ModuleCards/ModuleCards';

interface ModulesProps {}

const Modules: React.FC<ModulesProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Grid direction='column' container>
          <ModuleCards />
        </Grid>
      </Container>
    </div>
  );
};

export default Modules;
