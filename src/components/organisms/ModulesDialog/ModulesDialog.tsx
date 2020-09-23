import React from 'react';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Slide,
} from '@material-ui/core';
import useStyles from './styles';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface ModulesDialogProps {
  open: boolean;
  handleClose: () => void;
  handleClickOpen: () => void;
  title: string;
}

const ModulesDialog: React.FC<ModulesDialogProps> = ({
  open,
  handleClose,
  handleClickOpen,
  title,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {title}
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
};

export default ModulesDialog;
