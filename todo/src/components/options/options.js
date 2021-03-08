import React from 'react';
import { useState } from 'react';
import './options.css'
import './public/images/options.svg'
import './public/images/add.svg'
import DialogAdd from '../dialog/dialogAdd'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const Options = ({ addTask, changeListTask }) => {

    const [addOpen, setAddOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [taskDescription, setTaskDescription] = useState("");
    const [serchValue, setSerchValue] = useState("");
    const [dataValue, setDataValue] = useState("");

    function gerationId() {
        var size = 20;
        var randomized = Math.ceil(Math.random() * Math.pow(10, size));//Cria um número aleatório do tamanho definido em size.
        var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
        while (digito > 10) {//Pega o digito inicial e vai refinando até ele ficar menor que dez
            digito = Math.ceil(Math.log(digito));
        }
        var id = randomized + '-' + digito;//Cria a ID
        return id;
    }

    var data = {
        _id: gerationId(),
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

            <button className='add-button' type='submit' onClick={() => { changeListTask("") }}>
                <img className="add-images" alt="add" src='../images/task.svg'></img>
            </button>

            <button className='add-button' type='submit' onClick={() => { changeListTask("Complete") }}>
                <img className="add-images" alt="add" src='../images/complet.svg'></img>
            </button>

            <button className='add-button' type='submit' onClick={() => { changeListTask("Filed") }}>
                <img className="add-images" alt="add" src='../images/filed.svg'></img>
            </button>

            
            <DialogAdd 
            addOpen={addOpen}
            addTask={addTask}
            data={data}
            addClose={addClose}
            taskDescription={taskDescription}
            onChangetaskDescription={onChangetaskDescription}
            dataValue={dataValue}
            changeValue={changeValue}
            
            />



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