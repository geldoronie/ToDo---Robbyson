import React from 'react';
import { useState } from 'react';
import './options.css'
import './public/images/options.svg'
import './public/images/add.svg'
import DialogAdd from '../dialog/dialogAdd'
import DialogSearch from '../dialog/dialogSearch'

const Options = ({ addTask, changeListTask, findTask, getData }) => {

    const [addOpen, setAddOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [taskDescription, setTaskDescription] = useState("");
    const [serchValue, setSerchValue] = useState("");
    const [dataValue, setDataValue] = useState("");

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

            <DialogSearch 
            searchOpen={searchOpen}
            searchClose={searchClose}
            serchValue={serchValue}
            onChangeSearch={onChangeSearch}
            getData={getData}
            setSerchValue={setSerchValue}
            findTask={findTask}
            />


        </div>

    )

}

export default Options;