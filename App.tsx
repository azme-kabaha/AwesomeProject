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

//---------------------------------------- use state----------
import {
  Button, FlatList,  ScrollView, StyleSheet, Text, TextInput, View, Pressable,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {

  const [valueText, setText] = useState('');

  const changeTextFun = getEnterdText => {
    setText(getEnterdText);
  };

  const [listofNotes, setListOfNotes] = useState([]);
  const buttoonFun = () => {
    setListOfNotes(currentNotes => [...currentNotes, valueText]);
   setText('')
  };

  const RemoveItemFun=(getCurrntIndex)=>{
    let copyListOfNotes=[...listofNotes]
    copyListOfNotes= copyListOfNotes.filter((_,index)=> getCurrntIndex !== index)
    setListOfNotes(copyListOfNotes)
    
  }
      
  return (
    <View style={styles.parentView}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={changeTextFun}
          style={styles.input}
          placeholder="Add your Note Here"
         // value={valueText}
         value ={valueText}
        />
        <Button onPress={buttoonFun} color={'#000'} title="Add Note " />
      </View>

      {/* to render all the list that we created */}
      <View style={styles.listcontainer}>

        <FlatList
          data={listofNotes}
          renderItem={(azm) => (
            <Pressable onPress={()=>RemoveItemFun(azm.index)}>
               <Text style={styles.listitem}>{azm.item}</Text> 
            </Pressable>
             )}
        />
      </View>
    </View> );};

export default App;

const styles = StyleSheet.create({
  parentView: {
    padding: 60,
    paddingHorizontal: 15,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
  },
  listcontainer: {
    paddingTop: 30,
    flex: 3,
  },
  listitem: {
    borderRadius: 1,
    borderColor: 'red',
    backgroundColor: 'green',
    paddingBottom: 20,
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
  },
});
