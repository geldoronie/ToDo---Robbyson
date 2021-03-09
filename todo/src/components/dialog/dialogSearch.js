import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';

const DialogSearch = ({
    searchOpen,
    searchClose,
    serchValue,
    onChangeSearch,
    getData,
    setSerchValue,
    findTask

}) => {
    return (
        <div>

            <Dialog open={searchOpen} onClose={searchClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <TextField
                        autoFocus
                        multiline
                        margin="dense"
                        id="name"
                        label="Pesquisar"
                        type="text"
                        fullWidth
                        value={serchValue}
                        onChange={value => onChangeSearch(value.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { getData(); setSerchValue(""); searchClose() }} color="primary">
                        Cancel
                    </Button>

                    <Button onClick={() => { findTask(serchValue); searchClose() }} color="primary">
                        Procurar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default DialogSearch;
