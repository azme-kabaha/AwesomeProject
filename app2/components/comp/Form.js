import { Button, StyleSheet, Text, TextInput, View,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Form = () => {

  const[isLoading,setisLoading]= useState(false);
  const [input,setInput] = useState();

  useEffect(()=>{

  }, [isLoading]);
 
  return (
  //  1:03 דקות
    <View>
      <TextInput value={input} placeholder='Enter your user name'onChangeText={(val)=>{
        setInput(val);

      }} />
      <Button title='Done'
      onPress={()=> {
        setisLoading(true)
      
      setTimeout(() => {
        setisLoading(false)
      }, 3000);
    }}
    />
    {isLoading? <ActivityIndicator/> : null}
    </View>
     
  )
};



export default Form

const styles = StyleSheet.create({})