import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Form from '../comp/Form'
import User from '../comp/User'
import ReposList from '../comp/ReposList'

const Home = () => {
  return (
    <View style={styles.style1}>
      <Form/>
      <User username='AzmeKabaha123' bio='React Nativ Dev/ Mechanic' follwers={30} following={33}/>
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