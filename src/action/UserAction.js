import axios from '../config/axios';
import {USER_LOGIN,LOAD_USER, LOGOUT} from './Type'
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native'
export const login = (email,password,navigation) => {
   return dispatch => {
        axios.post('/api/login',{Email:email,Password:password})
            .then(async(result)=>{
                await AsyncStorage.setItem("ACCESS_TOKEN",result.data.token)
                dispatch({type:USER_LOGIN,payload:result.data})
            })
    }
}

export const fetchUser = ()=>{
    return async dispatch=>{
       let token = await AsyncStorage.getItem("ACCESS_TOKEN")
       console.log(token);
       token&& axios.get('/api/load/user')
            .then(res=>{
                dispatch({type:LOAD_USER,payload:{...res.data}})
            })
    }
}
export const Logout =()=>{
    return async dispatch =>{
        try {
          await AsyncStorage.removeItem("ACCESS_TOKEN")  
        } catch (error) {
            console.log('remove token fail');
        }
        dispatch({type:LOGOUT})
    }
}
export const register =(body)=>{
    return dispatch=>{
        axios.post(`/api/register`,body)
            .then(result => {
                Alert.alert(
                    'You Register successful'
                )
            })
            .catch(err=>{
                Alert.alert("You Register Fail ,Register again please")
            })
    }
}