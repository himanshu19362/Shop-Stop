import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://him-pay-api.herokuapp.com'
})

export default instance