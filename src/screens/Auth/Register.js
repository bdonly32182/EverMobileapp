import React,{useState} from 'react'
import { View, Text , StyleSheet,  TextInput , TouchableHighlight, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from '../../action/UserAction'
const Register = ({navigation}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [errMail,setErrormail] = useState(false);
    const onRegister =(email,fname,lname,pass)=>{
        let regex = /\S+@\S+\.\S+/;
        setErrormail(!regex.test(email));

        if (!errMail && password?.length !==0  && fname?.length !==0 && lname?.length !==0) {
            let body = {
                Email:email,
                Password:pass,
                Fname:fname,
                Lname:lname,
                Role:"user"
            }
            dispatch(register(body))
        }
    }
    return (
        <View style={styles.containner}>
            {Platform.OS=== "ios" &&
            <View style={styles.loginBox}>
                <View style={styles.headerBox}>
                    <Text style={styles.textLogin}>Register</Text>
                </View>
                <View style={styles.inputBox}>
                    <Text style={{color:'gray'}}>Email</Text>
                    <TextInput style={styles.textInput} placeholder="best@hotmail.com" onChangeText={setEmail} autoCapitalize="none" />
                    {errMail && <Text style={{color:'red'}}>รูปแบบอีเมลไม่ถูกต้อง</Text>}

                    <Text style={{color:'gray'}}>First Name</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input First Name" onChangeText={setFname}/>
                    {fname?.length===0 && <Text style={{color:'red'}}>กรุณากรอกชื่อของคุณ</Text>}

                    <Text style={{color:'gray'}}>Last Name</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input Last Name" onChangeText={setLname} />
                    {lname?.length ===0 && <Text style={{color:'red'}}>กรุณากรอกนามของคุณ</Text>}

                    <Text style={{color:'gray'}}>Password</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input Password" secureTextEntry={true} onChangeText={setPassword} />
                    {password?.length ===0  && <Text style={{color:'red'}}>รหัสผ่านอย่างน้อย 6 ตัวขึ้นไป</Text>}
                    <TouchableHighlight onPress={()=>navigation.navigate("Login")}>
                        <Text style={{fontSize:20,color:'#1eae98',fontWeight:'700',marginTop:16,paddingLeft:20}}>Sign In</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.btnBox}>
                    <TouchableHighlight
                     style={styles.btnLogin}
                    onPress={()=>onRegister(email,fname,lname,password)}
                    >
                        <Text style={{fontSize:24,textAlign:'center',fontWeight:'700',color:'white'}}>Register</Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
        }
        {
            Platform.OS==="android" &&
            <View style={styles.andloginBox}>
                <View style={styles.headerBox}>
                    <Text style={styles.textLogin}>Register</Text>
                </View>
                <View style={styles.inputBox}>
                    <Text style={{color:'gray'}}>Email</Text>
                    <TextInput style={styles.textInput} placeholder="best@hotmail.com" onChangeText={setEmail} autoCapitalize="none" />
                    {errMail && <Text style={{color:'red'}}>รูปแบบอีเมลไม่ถูกต้อง</Text>}

                    <Text style={{color:'gray'}}>First Name</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input First Name" onChangeText={setFname}/>
                    {fname?.length===0 && <Text style={{color:'red'}}>กรุณากรอกชื่อของคุณ</Text>}

                    <Text style={{color:'gray'}}>Last Name</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input Last Name" onChangeText={setLname} />
                    {lname?.length ===0 && <Text style={{color:'red'}}>กรุณากรอกนามของคุณ</Text>}

                    <Text style={{color:'gray'}}>Password</Text>
                    <TextInput style={styles.textInput} placeholder="Please Input Password" secureTextEntry={true} onChangeText={setPassword} />
                    {password?.length ===0  && <Text style={{color:'red'}}>รหัสผ่านอย่างน้อย 6 ตัวขึ้นไป</Text>}
                    <TouchableHighlight onPress={()=>navigation.navigate("Login")}>
                        <Text style={{fontSize:20,color:'#1eae98',fontWeight:'700',marginTop:16,paddingLeft:20}}>Sign In</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.btnBox}>
                    <TouchableHighlight
                    style={styles.btnLogin}
                    onPress={()=>onRegister(email,fname,lname,password)}
                    >
                        <Text style={{fontSize:24,textAlign:'center',fontWeight:'700',color:'white'}}>Register</Text>
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
        marginTop:"30%",
        height:"75%",
        backgroundColor:'#fff5fd',
        borderColor:'gray',
        borderRadius:15,
        shadowColor:'white',
        shadowOpacity:1
    },
    headerBox:{
       borderRadius:10,
       marginTop:10
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
    }
    //android
    ,
    andloginBox:{
        margin:50,
        marginTop:"5%",
        height:"95%",
        backgroundColor:'#fff5fd',
        borderColor:'gray',
        borderRadius:15,
        shadowColor:'white',
        shadowOpacity:1
    }
})
export default Register
