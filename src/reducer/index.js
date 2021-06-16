import {combineReducers} from 'redux';
import User from './UserReducer';
import Customers from './CustomerReducer'
const RootReducer = combineReducers({
    users:User,
    customers:Customers
})
export default RootReducer
