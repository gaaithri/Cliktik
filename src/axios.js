import axios from "axios"


const instance = axios.create({ 
    baseURL: "https://safe-taiga-74379.herokuapp.com/"
});

export default instance 
