import React from 'react'
import { View, Text , StyleSheet , Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
const CustomerItem = ({navigation,customer}) => {
    const onEditCustomer = (customer) => {
        navigation.navigate("EditCustomer",{params:customer})
    }
    return (
        <Card style={styles.cardBox} onPress={()=>onEditCustomer(customer)} >
            
            <Card.Content>
            <Title style={{ fontSize:22}}>{`${customer?.Fname}  ${customer?.Lname}`}</Title>
            <View style={{flexDirection:'row'}}>
                <View style={{width:"80%"}}>
                    
                    <Paragraph>{customer?.PersNo}</Paragraph>
                    <Paragraph >{customer?.Address}</Paragraph>
                    <Paragraph>{customer?.Status}</Paragraph>  
                </View>
                
                <View >
                    <Image style={styles.imageBox} source={require('../../../../Image/next.png')} />
                    {/* <Text style={{textAlign:'center',fontWeight:'600',fontSize:40,color:'white',margin:-2}}>{`>`}</Text> */}
                </View>  
            </View>
           
            </Card.Content>
        </Card>
    )
}
const styles = StyleSheet.create({
    cardBox:{
        margin:12,
        borderRadius:15,
        shadowOpacity:1,
        shadowColor:'#1eae98',
        marginRight:30,
        borderColor:'#1eae98',
        borderWidth:3
    },
    nextBox:{
        borderWidth:4,
        borderRadius:50,
        width:60,
        height:60,
        //marginRight:'20%',
        //marginTop:70,
        borderColor:'white',
        backgroundColor:'#1eae98'
    },
    imageBox:{
        borderWidth:1,
        borderRadius:50,
        width:50,
        height:50,
        borderColor:'white',
        marginLeft:"38%"
        //backgroundColor:'#1eae98'
    }
})
export default CustomerItem
