import React,{useState,useEffect} from 'react'
import { View, Text , StyleSheet, TextInput, TouchableHighlight , ScrollView , Button, Platform } from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {FetchsCustomer,FilterName} from '../../../action/CustomerAction'
import CustomerItem from './CustomerItem'
const CustomerList = ({navigation}) => {
    const dispatch = useDispatch();
    const customers = useSelector(state=>state.customers);
    const [name,setName]  = useState('')
    const Status = ["Submitted","Reviewing","Approve","Reject"];
    const [currentStatus , setCurrentStatus] = useState('Submitted')
    useEffect(() => {
       const unsubscribe = navigation.addListener('focus', () => {
       dispatch(FetchsCustomer())
      });
      return unsubscribe;
    }, [dispatch,navigation])
    const customersItem =(customers) => {
        return customers.map((customer,i)=><CustomerItem key={i} customer={customer} navigation={navigation} />)
    }
    const onSelectStatus =(status)=>{
        setCurrentStatus(status)
        dispatch(FetchsCustomer(status))
    }
    const StatusItem =(status = [])=>{
        return status.map((item,i)=>{
            return (
             
                <Button  key={i} title={item} color={Platform.OS==="ios"? "black":"gray"} onPress={()=>onSelectStatus(item)}></Button>
            )
        })
    }
    const onSearchName = value => {
        if(value.length === 0) return dispatch(FetchsCustomer(currentStatus))
        dispatch(FilterName(value))
    }
    return (
        <ScrollView >
            {Platform.OS === "ios" &&
            <View style={styles.header}>
    
                <View style={{display:'flex',flexDirection:'row'}}>
                    <TextInput placeholder="Search Name Customer" placeholderTextColor="white" style={styles.textInput} onChangeText={onSearchName} />
                    <TouchableHighlight style={styles.Addcustomer}
                        onPress={()=>navigation.navigate("CreateCustomer")}
                    >
                        <Text style={{fontSize:20 , fontWeight:'700' , textAlign:'center',paddingTop:6 , color:'gray'}}>ADD</Text>
                    </TouchableHighlight>  
                </View>
                <View style={styles.statusBar}>
                    {StatusItem(Status)}
                </View>
                <View >
                    {customersItem(customers)}   
                </View>
               
            </View>
        }
        {
            Platform.OS === "android" &&
            <>
            <View style={styles.header}>
    
                <View style={{display:'flex',flexDirection:'row'}}>
                    <TextInput placeholder="Search Name Customer" placeholderTextColor="white" style={styles.textInput} onChangeText={onSearchName} />
                    <TouchableHighlight style={styles.Addcustomer}
                        onPress={()=>navigation.navigate("CreateCustomer")}
                    >
                        <Text style={{fontSize:20 , fontWeight:'700' , textAlign:'center',paddingTop:6 , color:'gray'}}>ADD</Text>
                    </TouchableHighlight>  
                </View>
            </View>
            <View style={styles.andstatusBar}>
                    {StatusItem(Status)}
                </View>
                <View >
                    {customersItem(customers)}   
                </View>
            </>
        }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  
    header:{
        height:120,
        backgroundColor:'#1eae98'
    },
    headerText:{
        textAlign:'center',
        marginTop:'11%',
        color:'white',
        fontWeight:'700',
        fontSize:26
    },
    textInput:{
        margin:10,
        borderWidth:4,
        borderColor:'white',
        width:"70%",
        height:40,
        marginTop:34,
        borderRadius:9
    },
    Addcustomer:{
        borderColor:'white',
        borderRadius:15,
        backgroundColor:'white',
        width:'20%',
        height:40,
        margin:10,
        marginTop:34
    },
    statusBar:{
      margin:10,
      //borderWidth:1,
      marginTop:50,
      height:60  ,
      flexDirection:'row',
      backgroundColor:'white',
      borderRadius:10,
      
    },
    btnStatus:{
        margin:12,
        backgroundColor:'white'
    },
    //android
    andstatusBar:{
        margin:10,
        //borderWidth:1,
        marginTop:10,
        height:60  ,
        flexDirection:'row',
        backgroundColor:'gray',
        borderRadius:10,
        
      }
})
export default CustomerList
