import axios from 'axios';

const instance = axios.create({
     baseURL: 'http://127.0.0.1:5001/zaio-clone-7e062/us-central1/api'  //the cloud function Url
})

export default instance 