import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import * as React from 'react';
import styles from './styles.module.scss';

type Popup = {
  opened: boolean;
  togglePopup: () => void;
  children: any;
  title: string;
};

export default function AlertDialogSlide({
  opened,
  togglePopup,
  children,
  title,
}: Popup) {
  return (
    <div>
      <Dialog
        open={opened}
        keepMounted
        onClose={togglePopup}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.wrap}>
          <DialogTitle>
            <span className={styles.h1}>{title}</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {children}
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
