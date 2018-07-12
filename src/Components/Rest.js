import axios from 'axios';

const restConnection=axios.create({
    baseURL:"http://localhost:8080/"
});

export default restConnection;

