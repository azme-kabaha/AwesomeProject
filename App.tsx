//--------------------------------------------------------------------
// convert react To react native

// import { Button, StyleSheet, Text, View } from 'react-native'
// import {useState} from 'react';

// const App = () => {
// 	const [isLogedIn, setIslogedin] = useState(false);
// 	let element;
// 	if (isLogedIn) {
// 		element= <Text>i'm loggedIn</Text>
// 	}else{
// 		element= <Text>i'm Not loggedIn</Text>
// 	}
//   return (
// 	<View style={{flex:1,justifyContent:'center'}}>

// 	  <Button title='login' onPress={()=> setIslogedin(true)}

// 	  />
// 	  <Text style={{textAlign:'center' ,fontSize:20}}>{element}</Text>
// 	  {element}
// 	</View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


//-------------------------------------------------------------

// זה קשור ל FORM HOME REPOSTLIS USER

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './app2/components/screens/Home'

const App = () => {
  return (
    <Home/>
  
  )
}

export default App

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})
