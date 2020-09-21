import React, { useState } from 'react';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import { variantMenu, variantList, variantChild } from './variants';

interface BurgerProps {}

const links = [
  { name: 'Djibinho Values', link: 'values' },
  { name: 'Videos & Modules', link: 'videos&modules' },
  { name: 'Contact', link: 'contact' },
  { name: 'Thanks', link: '' },
];

const Burger: React.FC<BurgerProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <motion.div variants={variantMenu} initial='hidden' animate='visible'>
        <IconButton aria-label='' onClick={() => setOpen(true)}>
          <MenuIcon className={classes.menu} fontSize='large'></MenuIcon>
        </IconButton>
      </motion.div>

      <Drawer
        classes={{ paper: classes.paper }}
        variant='temporary'
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}>
        <motion.div variants={variantList} initial='hidden' animate='visible'>
          <List onClick={() => setOpen(false)} className={classes.list}>
            {links.map(({ name, link }, id) => (
              <motion.div variants={variantChild}>
                <ListItem className={classes.item} button key={link}>
                  <Typography variant='h5'>
                    <ListItemText disableTypography primary={name} />
                  </Typography>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </motion.div>
      </Drawer>
    </React.Fragment>
  );
};

export default Burger;
