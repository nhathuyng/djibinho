import React from 'react';
import { Container, Grid } from '@material-ui/core';
import NavBar from '../../organisms/Navbar/Navbar';
import useStyles from './styles';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <NavBar />
        <Grid container spacing={0}>
          <Grid item xs={3} xl={4}></Grid>
          <Grid item xs={9} xl={8}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
