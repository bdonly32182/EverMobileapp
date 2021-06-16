import {USER_LOGIN,LOAD_USER, LOGOUT} from '../action/Type'
const UserReducer = (state = {user:null,token:null},action) => {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload;
        case LOAD_USER:
            return {
                ...state,
                ...action.payload
            }
        case LOGOUT:
            return {user:null,token:null}
        default:
            return state;
    }
}
export default UserReducer
