import React,{useState} from 'react'
import { View, Text , StyleSheet, ImageBackground, TextInput , TouchableHighlight, Button, Platform } from 'react-native'
import {login} from '../../action/UserAction';
import {useDispatch} from 'react-redux'
const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [failmail,setFailmail] = useState(false);
    const [failpass,setFailpass] = useState(false);
    const onLogin =(email,password)=>{
        let regex = /\S+@\S+\.\S+/;
        setFailmail(!regex.test(email));
        setFailpass(password?.length <6);
        if (!failmail && !failpass) {
            dispatch(login(email,password,navigation))
        }
        
    }
    
    return (
        <View style={styles.containner}>
            {Platform.OS ==="ios" &&
            <View style={styles.loginBox}>
                <View style={styles.headerBox}>
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                <View style={styles.inputBox}>
                    <Text style={{color:'gray'}}>Email</Text>
                    <TextInput style={styles.textInput} placeholder="best@hotmail.com" keyboardType="email-address"
                        autoCapitalize="none"
                     value={email} onChangeText={setEmail} />
                     {failmail && <Text style={{color:'red'}}>รูปแบบอีเมลไม่ถูกต้อง</Text>}

                     <Text style={{color:'gray'}}>Password</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input Password" secureTextEntry={true} value={password} onChangeText={setPassword} /> 
                    {failpass && <Text style={{color:'red'}}>รหัสผ่านอย่างน้อย 6 ตัวขึ้นไป</Text>}
                    <TouchableHighlight onPress={()=>navigation.navigate("Register")}>
                        <Text style={{fontSize:20,color:'#1eae98',fontWeight:'700',marginTop:16,paddingLeft:20}}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.btnBox}>
                    <TouchableHighlight
                     style={styles.btnLogin}
                     onPress={()=>onLogin(email,password)}
                    >
                        <Text style={{fontSize:24,textAlign:'center',fontWeight:'700',color:'white'}}>Login</Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
            }
            {Platform.OS ==="android"&&
            <View style={styles.andloginBox}>
                <View style={styles.andheaderBox}>
                    <Text style={styles.andtextLogin}>Login</Text>
                </View>
                <View style={styles.andinputBox}>
                    <Text style={{color:'gray'}}>Email</Text>
                    <TextInput style={styles.andtextInput} placeholder="best@hotmail.com" keyboardType="email-address"
                        autoCapitalize="none"
                    value={email} onChangeText={setEmail} />
                    {failmail && <Text style={{color:'red'}}>รูปแบบอีเมลไม่ถูกต้อง</Text>}

                    <Text style={{color:'gray'}}>Password</Text>
                    <TextInput style={styles.andtextInput} placeholder="Please Input Password" secureTextEntry={true} value={password} onChangeText={setPassword} /> 
                    {failpass && <Text style={{color:'red'}}>รหัสผ่านอย่างน้อย 6 ตัวขึ้นไป</Text>}
                    <TouchableHighlight onPress={()=>navigation.navigate("Register")}>
                        <Text style={{fontSize:20,color:'#1eae98',fontWeight:'700',marginTop:16,paddingLeft:20}}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.andbtnBox}>
                    <TouchableHighlight
                    style={styles.andbtnLogin}
                    onPress={()=>onLogin(email,password)}
                    >
                        <Text style={{fontSize:24,textAlign:'center',fontWeight:'700',color:'white'}}>Login</Text>
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
        backgroundColor:"#1eae98"
    },
    loginBox:{
        margin:50,
        marginTop:"50%",
        height:"45%",
        backgroundColor:'#fff5fd',
        borderColor:'gray',
        borderRadius:15,
        shadowColor:'white',
        shadowOpacity:1
    },
    headerBox:{
       borderRadius:10
    },
    textLogin:{
        textAlign:'center',
        fontSize:50,
        fontWeight:"600",
        marginTop:14,
        color:'gray'
    },
    inputBox:{
        marginTop:"10%",
        margin:10,
        
    },
    textInput:{
        borderRadius:8,
        height:40,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    },
    btnBox:{
        marginTop:20,
        alignItems:'center'
    },
    btnLogin:{
        borderRadius:15,
        height:40,
        width:"45%",
        backgroundColor:'#1eae98'
    },
    // android 

    andloginBox:{
        margin:50,
        marginTop:"30%",
        height:"65%",
        backgroundColor:'#fff5fd',
        borderColor:'gray',
        borderRadius:15,
        shadowColor:'white',
        shadowOpacity:1
    },
    andheaderBox:{
       borderRadius:10
    },
    andtextLogin:{
        textAlign:'center',
        fontSize:50,
        fontWeight:"600",
        marginTop:14,
        color:'gray'
    },
    andinputBox:{
        marginTop:"10%",
        margin:10,
        
    },
    andtextInput:{
        borderRadius:8,
        height:40,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    },
    andbtnBox:{
        marginTop:20,
        alignItems:'center'
    },
    andbtnLogin:{
        borderRadius:15,
        height:40,
        width:"45%",
        backgroundColor:'#1eae98'
    }
    
})
export default Login
