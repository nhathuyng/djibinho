import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

interface NavLinksProps {}

const links = [
  { name: 'About Djibinho', link: 'about' },
  { name: 'Videos & Modules', link: 'videos&modules' },
  { name: 'Contact', link: 'contact' },
  { name: 'Thanks', link: '' },
];

const NavLinks: React.FC<NavLinksProps> = ({}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {links.map(({ name, link }) => (
        <Typography className={classes.link} variant='h6'>
          {name}
        </Typography>
      ))}
    </React.Fragment>
  );
};

export default NavLinks;
