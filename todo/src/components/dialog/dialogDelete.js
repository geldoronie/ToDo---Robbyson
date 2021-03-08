import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';



const DialogDelete = ({ open, closeConfirmeDelete, id, deleteFunction }) => {
    

    return (
        <div>

            <Dialog
                open={open}
                onClose={closeConfirmeDelete}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Deseja exluir essa tarefa?"}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={closeConfirmeDelete} color="primary">
                        Cancelar
          </Button>
                    <Button onClick={() => {
                        deleteFunction(id);
                        closeConfirmeDelete()
                        
                    }} color="primary" autoFocus>
                        Sim!
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default DialogDelete;
