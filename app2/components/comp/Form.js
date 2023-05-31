import { Button, StyleSheet, Text, TextInput, View,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Form = (props) => {

  const[isLoading,setisLoading]= useState(false);
  const [input,setInput] = useState();

  const fetchUserData= async ()=>{
    setisLoading(true);

    try{
      const respons= await fetch('https://api.github.com/users/' + input)
      const userr = await respons.json();
      props.setUserx(userr)
      setisLoading(false);
    }
    catch(err){
     console.log('err', err);
    }
  
  };

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
        fetchUserData();
    }}

    />

    {isLoading? <ActivityIndicator/> : null}
    </View>
     
  )
};



export default Form

const styles = StyleSheet.create({})