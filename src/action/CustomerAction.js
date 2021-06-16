import {CREATE_CUSTOMER,FETCHS_CUSTOMER , SEARCH_CUSTOMER} from './Type';
import axios from '../config/axios';
import {Alert} from 'react-native'
export const FetchsCustomer = (Status="Submitted") => {
    return dispatch =>{
        axios.get(`/api/list/customer?Status=${Status}`)
            .then((result) => {
                dispatch({type:FETCHS_CUSTOMER,payload:result.data})
            }).catch((err) => {
                Alert.alert("List customer Fail")
            });
    }
}
export const CreateCustomer =(body)=>{
    return dispatch=>{
 
        axios.post(`/api/create/customer`,body)
            .then((result) => {
                Alert.alert("Create Customer Successful")
            }).catch((err) => {
                Alert.alert("Create Customer Fail , Create again please ")
            });
    }
}
export const FilterName = (value) =>{
    return dispatch=>{
        dispatch({type:SEARCH_CUSTOMER,text:value})
    }
}
export const onEditCus = (body) => {
    return dispatch => {
        axios.put(`/api/update/customer/${body._id}`,body)
            .then((result) => {
                Alert.alert("Edit Customer Success")
            }).catch((err) => {
                Alert.alert("Edit customer fail")
            });
    }
}
export const onDeleteCustomer = (id,navigation) => {
    return dispatch=>{
        axios.delete(`/api/customer/${id}`)
            .then((result) => {
                Alert.alert("Delete Customer Success")
                navigation.navigate("customers")
            }).catch((err) => {
                Alert.alert("Delete Customer Fail")
            });
    }
}