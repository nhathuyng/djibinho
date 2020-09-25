import React, { useState } from 'react';
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
import { setDialog } from '../../../state/store/slices';
import { IData } from '../../../other/interfaces';

interface ModuleCardsProps {
  // data: { title: string; img: string; id: number }[];
  // onClick: () => void;
  // heading: string;
  // open: boolean;
  // handleClose: () => void;
  // handleClickOpen: () => void;
  // title: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ModuleCards: React.FC<ModuleCardsProps> = ({}) => {
  const classes = useStyles();
  const [data, setData] = useState<IData>({ title: '', img: '', id: '' });
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  React.useEffect(() => {
    if (state.dataState.dialog.open) {
      const currentImg = state.dataState.img.find(
        (img: IData) => img.id === state.dataState.dialog.currentId
      );
      setData(currentImg);
    }
  }, [state.dataState.dialog.open]);

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
        {state.dataState.img.map(({ title, img, id }) => (
          <React.Fragment key={id}>
            <ModuleCard
              onClick={() => {
                dispatch(setDialog({ currentId: id, open: true }));
              }}
              title={title}
              img={img}
            />
          </React.Fragment>
        ))}
      </Box>
      <Dialog
        fullScreen
        open={state.dataState.dialog.open}
        onClose={() => dispatch(setDialog({ currentId: '', open: false }))}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {data.title.toUpperCase()}
            </Typography>

            <Button
              autoFocus
              color='inherit'
              onClick={() => {
                dispatch(setDialog({ currentId: '', open: false }));
                setData({ title: '', img: '', id: '' });
              }}>
              close
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </Grid>
  );
};

export default ModuleCards;
