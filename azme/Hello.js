

// ///this component will display an hello world message


// import React ,{useState} from "react";
// import { View,Text,StyleSheet,Button,Alert } from "react-native";

//  export default (props) =>{

//   const[isVisible, setIsVisible] = useState(true)
//   const showAlert = () => { 
//    setIsVisible(!isVisible)
//    }

//     return(
//         <View style={styles.center}> 

//         {
//          isVisible&& <Text style={styles.textStyle}>Hellow world</Text>
//             }
           
//            <Text> {props.message.msg} </Text>
//            <Button
//               onPress={showAlert}
//               title='click me'
//       />
//         </View>
//     )  }

 
// const styles = StyleSheet.create({
//       center:{
//          backgroundColor:'red'
  
//       },
//       textStyle:{
//          textAlign:"center",
//          fontSize:30
//       }
//   })