import axios from 'axios'

export default  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6f0a6e806d234ce3a3a4e7ece4a84197'
    }
})

