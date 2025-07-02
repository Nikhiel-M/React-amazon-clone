import axios from 'axios';

const instance = axios.create({
     baseURL : '...'  //the cloud function Url
})

export default instance 