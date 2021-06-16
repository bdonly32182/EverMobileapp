import React from 'react'
import { View, Text ,StyleSheet , Image , TouchableHighlight, Platform} from 'react-native'
import {Logout} from '../../action/UserAction'
import {useDispatch,useSelector} from 'react-redux'
const Profile = ({navigation}) => {
    const user = useSelector(state=>state.users);
    const dispatch = useDispatch();
   
    const onLogout =()=>{
        dispatch(Logout())
    }
    return (
        <View style={styles.containner}>
           {Platform.OS==="ios" &&
            <View style={styles.profilebox}>
                 <View >
                    <Image style={styles.pictureBox}  source={require('../../../Image/profiletwo.png')} />
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.descriptionTitle}>{`Email :`}</Text> 
                  <Text style={{fontSize:20}}>{user?.user?.Email}</Text>
                  <Text style={styles.descriptionTitle}>{`Name : `}</Text>  
                  <Text style={{fontSize:20}}>{` ${user?.user?.Fname} ${user?.user?.Lname}`}</Text>
                </View> 
                <View style={{alignItems:'center' , marginTop:140}}>
                    <TouchableHighlight style={styles.btnLogin}
                    onPress={()=>onLogout()}
                    >
                        <Text style={{fontSize:25,color:'white',fontWeight:'600',textAlign:'center'}}>Log out</Text>
                    </TouchableHighlight>
                </View>          
            </View>
            }
        {Platform.OS ==="android" &&
            <View style={styles.andprofilebox}>
                <View >
                    <Image style={styles.pictureBox}  source={require('../../../Image/profiletwo.png')} />
                </View>
                <View style={styles.descriptionBox}>
                    <Text style={styles.descriptionTitle}>{`Email :`}</Text> 
                    <Text style={{fontSize:20}}>{user?.user?.Email}</Text>
                    <Text style={styles.descriptionTitle}>{`Name : `}</Text>  
                    <Text style={{fontSize:20}}>{` ${user?.user?.Fname} ${user?.user?.Lname}`}</Text>
                </View> 
                <View style={{alignItems:'center' , marginTop:10}}>
                    <TouchableHighlight style={styles.btnLogin}
                    onPress={()=>onLogout()}
                    >
                        <Text style={{fontSize:25,color:'white',fontWeight:'600',textAlign:'center'}}>Log out</Text>
                    </TouchableHighlight>
                </View>          
            </View>
        }
        </View>
    )
}
const styles = StyleSheet.create({
    containner:{
        flex:1,
        backgroundColor:'#1eae98'
    },
    profilebox:{
       // margin:50,
        marginTop: "50%",
        height:"80%",
        backgroundColor:'white',
        borderColor:'gray',
        borderRadius:55,
        shadowColor:'white',
        width:'100%',
        
    },
    pictureBox:{
        borderRadius:100,
        //borderWidth:5,
        width:200,
        height:200,
        marginLeft:"25%",
        borderColor:'#1eae98',
        margin:-150
    },

    descriptionBox:{
        marginTop:'15%',
        padding:30
    },
    descriptionTitle:{
        fontSize:22,
        fontWeight:'700',
        padding:15,
        color:'#1eae98',
        paddingTop:25
    },
    btnLogin:{
        //borderWidth:1,
        borderRadius:15,
        height:40,
        width:"45%",
        backgroundColor:'#1eae98'
    },
    //android
    andprofilebox:{
       // margin:50,
        marginTop: "40%",
        height:"80%",
        backgroundColor:'white',
        borderColor:'gray',
        borderRadius:55,
        shadowColor:'white',
        width:'100%',
        
    }
})
export default Profile
