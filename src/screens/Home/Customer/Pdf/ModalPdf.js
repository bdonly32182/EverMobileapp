import React,{useState} from 'react'
import { View, Text , Modal , TouchableHighlight } from 'react-native'
import {WebView} from 'react-native-webview'

const ModalPdf = ({pathPDF,visible,setVisible}) => {
    // const [visible,setVisible] = useState(false)
    return (
       <Modal visible={visible}>
           <View style={{flex:1,paddingTop:15}}>
                    <TouchableHighlight
                      onPress={() => setVisible(false)}>
                      <Text style={{fontSize:20,fontWeight:'700' ,textAlign:'right',paddingRight:10,marginTop:20}}>X</Text>
                    </TouchableHighlight>
                    {Platform.OS == 'ios' ?
                     <WebView source={{uri:`http://192.168.1.38:3001${pathPDF}`}} style={{paddingTop:10}}/>
                     :
                     <View>
                     <WebView source={{uri:`http://192.168.1.38:3001${pathPDF}`}} style={{paddingTop:10}}/>
                     <Text >Loading PDF</Text>
                     </View>
                    }
            </View>
       </Modal>
    )
}

export default ModalPdf
