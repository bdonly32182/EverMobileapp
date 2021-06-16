import axios from 'axios';
import LocalStorageService from '../LocalStrorage/LocalStrorageServer';
import AsyncStorage from "@react-native-community/async-storage"
axios.defaults.baseURL ="http://192.168.1.38:3001";
axios.interceptors.request.use(
   async config=>{

        if(config.url.includes("/api/login")|| config.url.includes("/api/register")) return config;
        
        const token = await  AsyncStorage.getItem('ACCESS_TOKEN')
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    err=>{
        Promise.reject(err)
    }
)
// axios.interceptors.response.use(
//     //will get respone and error from server
//     response =>{
//         return response
//     },
//     err=>{
//         if (err.response?.status === 401) {
//             LocalStorageService.removeToken();
//             window.location.reload();
//             return Promise.reject(err)

//         }
//         if (err.response?.status === 403) {
//             window.location.replace('/main')
            
//             return Promise.reject(err)
//         }
//         return Promise.reject(err)
//     }
// )
export default axios;