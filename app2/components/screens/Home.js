import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Form from '../comp/Form'
import User from '../comp/User'
import ReposList from '../comp/ReposList'

const Home = () => {
//
  const[userx,setUserx]=useState('')

  return (
    <View style={styles.style1}>
      <Form setUserx={setUserx}  />
      <User
       username={userx.login}
       bio={userx.bio} 
       follwers={userx.follwers}
        following={userx.following}
        />
      <ReposList/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    style1:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
})