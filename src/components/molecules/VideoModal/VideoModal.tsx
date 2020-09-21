import React from 'react';
import { Backdrop, Modal, Fade } from '@material-ui/core';
import useStyles from './styles';

interface VideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 1000 }}>
      <Fade in={open}>
        <video width='100%' height='auto' controls autoPlay>
          <source
            src={require('../../../media/videos/soccer.mp4')}
            type='video/mp4'
          />
        </video>
      </Fade>
    </Modal>
  );
};

export default VideoModal;
