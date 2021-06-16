import AsyncStorage from '@react-native-community/async-storage';
async function setToken(token){
  await  AsyncStorage.setItem('ACCESS_TOKEN',token)
}
async function getToken(){
  let token = await AsyncStorage.getItem('ACCESS_TOKEN');
  return token
}
async function removeToken(){
   await AsyncStorage.removeItem('ACCESS_TOKEN')
}
function getRole(){
    if (getToken()) {r
        return "user"
    }
    return "guest"
}
const FuncAsyncStorage = {
    setToken,
    getRole,
    getToken,
    removeToken
}
export default FuncAsyncStorage