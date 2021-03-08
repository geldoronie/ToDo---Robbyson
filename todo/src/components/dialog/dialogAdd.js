import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';

const DialogAdd = ({
    addOpen,
    addTask,
    data,
    addClose,
    taskDescription,
    onChangetaskDescription,
    dataValue,
    changeValue }) => {

    console.log(addOpen);
    return (
        <div>

            <Dialog open={addOpen} onClose={addClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <TextField
                        autoFocus
                        multiline
                        margin="dense"
                        id="name"
                        label="Descrição"
                        type="text"
                        required
                        fullWidth
                        error={taskDescription === "" ? true : false}
                        value={taskDescription}
                        onChange={value => onChangetaskDescription(value.target.value)}
                    />

                    <TextField
                        id="date"
                        label="Data de conclusão"
                        type="date"
                        value={dataValue}
                        required
                        error={dataValue === "" ? true : false}
                        onChange={value => changeValue(value.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                </DialogContent>
                <DialogActions>
                    <Button onClick={addClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={() => {
                        if (dataValue !== "" && taskDescription !== "") {
                            addTask(data);
                            addClose();
                            onChangetaskDescription("");
                            changeValue("");
                        }

                    }} color="primary">
                        Salvar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default DialogAdd;
