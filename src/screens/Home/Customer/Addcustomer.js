import React,{useState} from 'react'
import { View, Text , StyleSheet , TextInput , TouchableHighlight , Image, Platform  } from 'react-native'
import {useDispatch} from 'react-redux';
import {CreateCustomer} from '../../../action/CustomerAction'

const Addcustomer = ({navigation}) => {
    const dispatch = useDispatch();
    const [pers, setPers] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [errPers,setErrorPers] = useState(false);
    const [errFname,setErrorFname] = useState(false);
    const [errLname,setErrorLname] = useState(false);
    const onCreate = (pers,fname,lname,address) => {
        setErrorPers(pers?.length !== 13);
        setErrorFname(fname?.length === 0);
        setErrorLname(lname?.length === 0);
        if(!errPers && !errFname && !errLname){
         
           let body = {
            PersNo:pers,
            Fname:fname,
            Lname:lname,
            Address:address,
            Status:"Submitted"
            }
            dispatch(CreateCustomer(body))
           
        }
    }
    return (
        <View style={styles.container}>
            {Platform.OS === "ios" &&
            <View style={styles.formBox}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../../../../Image/editone.png')} />
                </View>
                <View style={styles.textBox}>
                    <Text style={{fontSize:17,color:'#1eae98'}}>รหัสบัตรประชาชนลูกค้า</Text>
                    <TextInput style={styles.input} onChangeText={setPers} />
                    {errPers && <Text style={{color:'red'}}>ต้องกรอกรหัสบัตรประชาชน 13 หลัก</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ชื่อลูกค้า</Text>
                    <TextInput style={styles.input} onChangeText={setFname} />
                    {errFname && <Text style={{color:'red'}}>กรุณากรอกชื่อลูกค้า</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>นามสกุลลูกค้า</Text>
                    <TextInput style={styles.input} onChangeText={setLname} />
                    {errLname && <Text style={{color:'red'}}> กรุณากรอกนามสกุลลูกค้า </Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ที่อยู่ลูกค้า</Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.inputArea} onChangeText={setAddress} />
                </View>
                <View>
                    <TouchableHighlight style={styles.btnsubmit}
                        onPress={()=>onCreate(pers,fname,lname,address)}
                    >
                        <Text style={{textAlign:'center', color:'white', fontSize:25,fontWeight:'500'}}>สร้างข้อมูล</Text>
                    </TouchableHighlight>
                </View>
            </View>
        }
        {
            Platform.OS === "android" &&
            <View style={styles.andformBox}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../../../../Image/editone.png')} />
                </View>
                <View style={styles.andtextBox}>
                    <Text style={{fontSize:17,color:'#1eae98'}}>รหัสบัตรประชาชนลูกค้า</Text>
                    <TextInput style={styles.andinput} onChangeText={setPers} />
                    {errPers && <Text style={{color:'red'}}>ต้องกรอกรหัสบัตรประชาชน 13 หลัก</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ชื่อลูกค้า</Text>
                    <TextInput style={styles.andinput} onChangeText={setFname} />
                    {errFname && <Text style={{color:'red'}}>กรุณากรอกชื่อลูกค้า</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>นามสกุลลูกค้า</Text>
                    <TextInput style={styles.andinput} onChangeText={setLname} />
                    {errLname && <Text style={{color:'red'}}> กรุณากรอกนามสกุลลูกค้า </Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ที่อยู่ลูกค้า</Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.andinputArea} onChangeText={setAddress} />
                </View>
                <View>
                    <TouchableHighlight style={styles.btnsubmit}
                        onPress={()=>onCreate(pers,fname,lname,address)}
                    >
                        <Text style={{textAlign:'center', color:'white', fontSize:25,fontWeight:'500'}}>สร้างข้อมูล</Text>
                    </TouchableHighlight>
                </View>
            </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1eae98'
    },
    formBox:{
        borderWidth:1,
        width:'100%',
        height:'95%',
        borderRadius:60,
        marginTop:"25%",
        borderColor:'white',
        //shadowOpacity:1,
        backgroundColor:'white'
    },
    imageBox:{
        borderColor:'white',
        borderWidth:4,
        borderRadius:50,
        width:100,
        height:100,
        marginTop:-80,
        marginLeft:'38%',
        backgroundColor:'#1eae98',
        alignItems:'center'
    },
    textBox:{
        margin:20,
        marginTop:40
    },
    input:{
        borderRadius:8,
        //borderWidth:0.3,
        height:40,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    },
    inputArea:{
        borderRadius:10,
        //borderWidth:0.3,
        height:80,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    },
   
    btnsubmit:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#1eae98',
        height:40,
        width:'50%',
        marginLeft:"25%",
        marginTop:10,
        borderColor:'white'
    },
    btnDelete:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'red',
        height:40,
        width:'50%',
        marginLeft:"25%",
        marginTop:10,
        borderColor:'white'
    },
    image:{
       width:50,
       height:50,
       margin:20,
       marginTop:25 
    },
    //android
    andformBox:{
        borderWidth:1,
        width:'100%',
        height:'95%',
        borderRadius:60,
        marginTop:"20%",
        borderColor:'white',
        //shadowOpacity:1,
        backgroundColor:'white'
    },
    andtextBox:{
        margin:20,
        marginTop:5
    },
    andinput:{
        borderRadius:8,
        //borderWidth:0.3,
        height:35,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    },
    andinputArea:{
        borderRadius:10,
        //borderWidth:0.3,
        height:70,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    }

})
export default Addcustomer
