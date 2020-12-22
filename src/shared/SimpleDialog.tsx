import { Dialog, DialogTitle } from '@material-ui/core';
import React from 'react';


export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
};

const SimpleDialog = ({ onClose, open }: SimpleDialogProps) => {
  
    const handleClose = () => {
      onClose();
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">El candidato fue guardado</DialogTitle>
        
      </Dialog>
    );
};

export default SimpleDialog;