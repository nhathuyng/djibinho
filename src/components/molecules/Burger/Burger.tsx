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
import { OpenInBrowserRounded } from '@material-ui/icons';

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
      <IconButton aria-label='' onClick={() => setOpen(true)}>
        <MenuIcon className={classes.menu} fontSize='large'></MenuIcon>
      </IconButton>
      <Drawer
        classes={{ paper: classes.paper }}
        variant='temporary'
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}>
        <List onClick={() => setOpen(false)} className={classes.list}>
          {links.map(({ name, link }, id) => (
            <ListItem className={classes.item} button key={link}>
              <Typography variant='h5'>
                <ListItemText inset disableTypography primary={name} />
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Burger;
