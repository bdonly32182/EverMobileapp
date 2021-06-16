import {FETCHS_CUSTOMER , SEARCH_CUSTOMER } from '../action/Type';
const CustomerReducers = (state=[],action) =>{
    switch (action.type) {
        case FETCHS_CUSTOMER:
            
            return action.payload;
        case SEARCH_CUSTOMER:
            let filter =  state.filter((item,i)=>{
                return item?.Fname.toLowerCase().indexOf(action.text.toLowerCase()) !== -1
            })
            return filter
        default:
            return state;
    }
}
export default CustomerReducers