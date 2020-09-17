import React from 'react';
import { Container, Grid } from '@material-ui/core';
import NavBar from '../../organisms/Navbar/Navbar';
import useStyles from './styles';
import Banner from '../../organisms/Banner/Banner';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Container maxWidth='lg'>
        <Grid container spacing={0} alignItems='flex-end'>
          <Grid item xs={4}>
            <Banner />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
