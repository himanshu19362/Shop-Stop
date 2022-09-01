import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://shop-stop-api.herokuapp.com'
})

export default instance