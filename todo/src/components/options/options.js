import React from 'react';
import { useState } from 'react';
import './options.css'
import './public/images/options.svg'
import './public/images/add.svg'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const Options = ({addTask}) => {

    const [addOpen, setAddOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [taskDescription, setTaskDescription] = useState("");
    const [serchValue, setSerchValue] = useState("");
    const [dataValue, setDataValue] = useState("");


    var data = {
        _id: "ObjectID()",
        description: taskDescription,
        duedate: dataValue,
        done: false,
        hide: false
    };

    const changeValue = (value) => {
        setDataValue(value);
    };

    const onChangetaskDescription = (value) => {
        setTaskDescription(value);
    }
    const onChangeSearch = (value) => {
        setSerchValue(value);
    }

    const addClickOpen = () => {
        setAddOpen(true);
    };

    const addClose = () => {
        setAddOpen(false);
    };

    const searchClickOpen = () => {
        setSearchOpen(true);
    };

    const searchClose = () => {
        setSearchOpen(false);
    };

    return (

        <div className='search-row'>
            <button className='search-button' type='submit' onClick={searchClickOpen}>

                <img className="search-images" alt="search" src='../images/search.svg'></img>
            </button>

            <button className='add-button' type='submit' onClick={addClickOpen}>
                <img className="add-images" alt="add" src='../images/add.svg'></img>
            </button>


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

                        addTask(data); addClose()
                    }} color="primary">
                        Salvar
          </Button>
                </DialogActions>
            </Dialog>



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
                        error={serchValue === "" ? true : false}
                        value={serchValue}
                        onChange={value => onChangeSearch(value.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={searchClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={() => { searchClose() }} color="primary">
                        Procurar
          </Button>
                </DialogActions>
            </Dialog>

        </div>

    )

}

export default Options;