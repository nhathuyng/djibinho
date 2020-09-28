import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import ContactForm from '../../organisms/ContactForm/ContactForm';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.container} container wrap='wrap-reverse'>
        <Grid
          justify='center'
          container
          item
          className={classes.leftContainer}
          xs={12}
          lg={6}>
          <ContactForm />
        </Grid>
        <Grid
          container
          item
          className={classes.rightContainer}
          xs={12}
          lg={6}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
