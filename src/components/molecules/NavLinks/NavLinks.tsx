import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';
import { variantLink, variantUnderline } from './variants';
import { Link as Scroll } from 'react-scroll';

interface NavLinksProps {}

const links = [
  { name: 'Djibinho Values', link: 'values' },
  { name: 'Videos & Modules', link: 'videos&modules' },
  { name: 'Contact', link: 'contact' },
  { name: 'Thanks', link: '' },
];

const NavLinks: React.FC<NavLinksProps> = ({}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {links.map(({ name, link }, id) => (
        <motion.div
          key={id}
          variants={variantLink}
          initial='hidden'
          animate='visible'
          whileHover='hover'>
          {/* <motion.div initial='hidden' whileHover='hover' animate='visible'> */}
          <Typography className={classes.link} variant='h6'>
            <Scroll to={link} spy={true} smooth={true} duration={500}>
              {name}
            </Scroll>{' '}
            <motion.div
              className={classes.underline}
              variants={variantUnderline}></motion.div>
          </Typography>
        </motion.div>
      ))}
    </React.Fragment>
  );
};

export default NavLinks;
