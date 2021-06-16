import React , {useState} from 'react'
import { View, Text , StyleSheet , TextInput , TouchableHighlight , Image, Platform } from 'react-native'
import {useDispatch} from 'react-redux';
import {onEditCus , onDeleteCustomer} from '../../../action/CustomerAction';
import ModalPdf from './Pdf/ModalPdf';
const EditCustomer = ({navigation , route:{params:{params}} }) => {
    
    const dispatch = useDispatch();
    const [pers, setPers] = useState(params?.PersNo)
    const [fname, setFname] = useState(params?.Fname)
    const [lname, setLname] = useState(params?.Lname)
    const [address, setAddress] = useState(params?.Address)
    const [visible,setVisible] = useState(false);
    const onEdit = (pers,fname,lname,address) => {
        if(pers?.length===13 && fname?.length > 0 && lname?.length > 0){
            let body = {
                PersNo:pers,
                Fname:fname,
                Lname:lname,
                Address:address,
                _id:params?._id
            }
            dispatch(onEditCus(body))
        }
    }
    const onDelete =async(id)=>{
        dispatch(onDeleteCustomer(id,navigation));
    }

    return (
        <View style={styles.container}>
            {Platform.OS ==="ios" && 
            <View style={styles.formBox}>
                <TouchableHighlight style={styles.imageBox}
                    onPress={()=>setVisible(true)}
                >
                    <View >
                        <Image style={styles.image} source={require('../../../../Image/editone.png')} />
                    </View>   
                </TouchableHighlight>
                
                <View style={styles.textBox}>
                    <Text style={{fontSize:17,color:'#1eae98'}}>{`รหัสบัตรประชาชน `}</Text>
                    <TextInput style={styles.input} onChangeText={setPers} value={pers} />
                    {pers?.length!=13 && <Text style={{color:'red'}}>ต้องกรอกรหัสบัตรประชาชน 13 หลัก</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ชื่อ</Text>
                    <TextInput style={styles.input} onChangeText={setFname} value={fname} />
                    {fname?.length === 0 && <Text style={{color:'red'}}>กรุณากรอกชื่อลูกค้า</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>นามสกุล</Text>
                    <TextInput style={styles.input} onChangeText={setLname} value={lname} />
                    {lname?.length === 0 && <Text style={{color:'red'}}> กรุณากรอกนามสกุลลูกค้า </Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ที่อยู่</Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.inputArea} onChangeText={setAddress} value={address} />
                </View>
                <View>
                    <TouchableHighlight style={styles.btnsubmit}
                        onPress={()=>onEdit(pers,fname,lname,address)}
                    >
                        <Text style={{textAlign:'center', fontSize:20,fontWeight:'500',color:'white'}}>แก้ไขข้อมูล</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btnDelete}
                        onPress={()=>onDelete(params?._id)}
                    >
                        <Text style={{textAlign:'center', fontSize:20,fontWeight:'500',color:'white'}}>ลบข้อมูล</Text>
                    </TouchableHighlight>
              
                </View>
                <ModalPdf pathPDF={params?.pathPDF} visible={visible} setVisible={setVisible} />
            </View>
            
        }
        {
            Platform.OS === "android" &&
            <View style={styles.andformBox}>
                 <TouchableHighlight style={styles.imageBox}
                    onPress={()=>setVisible(true)}
                >
                    <View >
                        <Image style={styles.image} source={require('../../../../Image/editone.png')} />
                    </View>   
                </TouchableHighlight>
                <View style={styles.andtextBox}>
                    <Text style={{fontSize:17,color:'#1eae98'}}>{`รหัสบัตรประชาชน `}</Text>
                    <TextInput style={styles.input} onChangeText={setPers} value={pers} />
                    {pers?.length!=13 && <Text style={{color:'red'}}>ต้องกรอกรหัสบัตรประชาชน 13 หลัก</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ชื่อ</Text>
                    <TextInput style={styles.andinput} onChangeText={setFname} value={fname} />
                    {fname?.length === 0 && <Text style={{color:'red'}}>กรุณากรอกชื่อลูกค้า</Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>นามสกุล</Text>
                    <TextInput style={styles.andinput} onChangeText={setLname} value={lname} />
                    {lname?.length === 0 && <Text style={{color:'red'}}> กรุณากรอกนามสกุลลูกค้า </Text>}

                    <Text style={{fontSize:17,color:'#1eae98'}}>ที่อยู่</Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.andinputArea} onChangeText={setAddress} value={address} />
                </View>
                <View>
                    <TouchableHighlight style={styles.andbtnsubmit}
                        onPress={()=>onEdit(pers,fname,lname,address)}
                    >
                        <Text style={{textAlign:'center', fontSize:20,fontWeight:'500',color:'white'}}>แก้ไขข้อมูล</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.andbtnDelete}
                        onPress={()=>onDelete(params?._id)}
                    >
                        <Text style={{textAlign:'center', fontSize:20,fontWeight:'500',color:'white'}}>ลบข้อมูล</Text>
                    </TouchableHighlight>
                </View>
                <ModalPdf pathPDF={params?.pathPDF} visible={visible} setVisible={setVisible} />
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
        //marginTop:"10%",
        borderColor:'white',
        //shadowOpacity:1,
        backgroundColor:'white'
    },
    andimageBox:{
        borderColor:'white',
        borderWidth:4,
        borderRadius:50,
        width:80,
        height:80,
        marginTop:-60,
        marginLeft:'38%',
        backgroundColor:'#1eae98',
        alignItems:'center'
    },
    andformBox:{
        borderWidth:1,
        width:'100%',
        height:'95%',
        borderRadius:60,
        marginTop:"20%",
        borderColor:'white',
        backgroundColor:'white'
    },
    andtextBox:{
        margin:15,
        marginTop:2
    },
    andinput:{
        borderRadius:8,
        height:35,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke'
    },
    andinputArea:{
        borderRadius:10,
        //borderWidth:0.3,
        height:60,
        margin:10,
        borderColor:'gray',
        backgroundColor:'whitesmoke',
        marginBottom:0
    },
    andbtnsubmit:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#1eae98',
        height:40,
        width:'50%',
        marginLeft:"25%",
        //marginTop:10,
        borderColor:'white'
    },
    andbtnDelete:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'red',
        height:40,
        width:'50%',
        marginLeft:"25%",
        // marginTop:10,
        borderColor:'white'
    },
    andimage:{
       width:40,
       height:40,
       margin:10,
       marginTop:15 
    }
})
export default EditCustomer
