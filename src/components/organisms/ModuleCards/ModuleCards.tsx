import React from 'react';
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Slide,
} from '@material-ui/core';
import useStyles from './styles';
import ModuleCard from '../../molecules/ModuleCard/ModuleCard';
import { useTheme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../state/store/store';
import { setDialog, closeDialog } from '../../../state/store/slices';

interface ModuleCardsProps {
  // data: { title: string; img: string; id: number }[];
  // onClick: () => void;
  // heading: string;
  // open: boolean;
  // handleClose: () => void;
  // handleClickOpen: () => void;
  // title: string;
}

const ModuleCards: React.FC<ModuleCardsProps> = ({}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  return (
    <Grid item>
      <Typography
        align='center'
        className={classes.typo}
        variant='h2'
        color='initial'>
        {'modules'.toUpperCase()}
      </Typography>
      <Box flexDirection='column' display='flex' justifyContent='space-between'>
        {state.dataState.map(({ title, img, id, open }) => (
          <React.Fragment key={id}>
            <ModuleCard
              onClick={() => {
                dispatch(setDialog({ id, open: !open }));
              }}
              title={title}
              img={img}
            />
            <Dialog
              fullScreen
              open={open}
              onClose={() => dispatch(setDialog({ id, open }))}
              TransitionComponent={Transition}>
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <Typography variant='h6' className={classes.title}>
                    {title.toUpperCase()}
                  </Typography>
                  <Button
                    autoFocus
                    color='inherit'
                    onClick={() => dispatch(setDialog({ id, open: !open }))}>
                    close
                  </Button>
                </Toolbar>
              </AppBar>
            </Dialog>
          </React.Fragment>
        ))}
      </Box>
    </Grid>
  );
};

export default ModuleCards;
