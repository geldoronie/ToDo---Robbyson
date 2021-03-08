import axios from 'axios';
import { Component } from 'react';

const requests = axios.create({
    baseURL: 'http://localhost:3000/'
})

class API extends Component {

    async getAllTask() {
        return await requests.get('/alltask')

    }

    async postTask(data) {
        return await requests.post('/addtask', data)
    }

    async updateTask(data) {
        return await requests.put('/updateTask', data)
    }

    async deleteTask(id) {

        return await requests.delete('/deleteTask', { data: { _id: id }, })
    }


}

export default API;