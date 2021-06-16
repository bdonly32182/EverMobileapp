import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import CustomerList from './src/screens/Home/Customer/CustomerList';
import Profile from './src/screens/Home/Profile';
import {fetchUser} from './src/action/UserAction'
import {useSelector,useDispatch} from 'react-redux'
import Addcustomer from './src/screens/Home/Customer/Addcustomer';
import EditCustomer from './src/screens/Home/Customer/EditCustomer';

const HomeStackScreen = () =>{
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name = "customers" component={CustomerList} 
      options={{title:"LIST CUSTOMERS",headerStyle:{backgroundColor:'#1eae98'},
        headerTitleStyle:{
          fontWeight:'700',
          color:'white'
        }}}/>
      <Stack.Screen name = "CreateCustomer" component={Addcustomer} 
      options={{title:"CREATE CUSTOMER",headerStyle:{backgroundColor:'#1eae98'},
        headerTitleStyle:{
          fontWeight:'700',
          color:'white'
        }}} />
      <Stack.Screen name = "EditCustomer" component={EditCustomer}
        options={{title:"EDIT CUSTOMER",headerStyle:{backgroundColor:'#1eae98'},
        headerTitleStyle:{
          fontWeight:'700',
          color:'white'
        }
      }} 
      />
    </Stack.Navigator>
  )
}
const ProfileScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name = "ShowProfile" component={Profile} 
       options={{title:"PROFILE",headerStyle:{backgroundColor:'#1eae98'},
        headerTitleStyle:{
          fontWeight:'700',
          color:'white'
        }}}/>
    </Stack.Navigator>
  )
}
export default  function Navigate() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users)
  React.useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])
  
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
      {!user?.user ?
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </Stack.Navigator>
        :
        <Tab.Navigator 
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} /> 
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator> 
    }
      
    </NavigationContainer>
  );
}