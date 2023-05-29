import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const User = (props) => {
  return (
    <View style={{flexDirection:'row'}}>

      <Image source={require('../../../myimages/images/userimage.jpg')} style={{width:100,height:100}}/>

      <View>
      <Text>{props.username}</Text>
      <Text>{props. bio}</Text>
      <Text>Follwers: {props.follwers}</Text>
      <Text>Following: {props.following}</Text>
      </View>
                 {/*  עד דקה 29 */}
    </View>
  )
}

export default User

const styles = StyleSheet.create({})