
// // my note app with scrollView///////
//azme

import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
//import React from 'react'
import {useState} from 'react';

const App = () => {
  // 1
  const [value, setValue] = useState('');

  const handeleOneChangeText = interdText => {
    setValue(interdText);
  };

  // 2
  const [listOfNotes, setlistOfNotes] = useState([]);

  const handelOnPressButton = () => {
    setlistOfNotes(currentNotes => [...currentNotes, value]);
  };

  return (
    <View
      style={{
        padding: 60,
		paddingHorizontal:15,
		flex:1,
      }}>

		{/* to rander input along with button*/}

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handeleOneChangeText}
          style={styles.inputStyle}
          placeholder=" Add your Note Here"
        />
        <Button onPress={handelOnPressButton} color={'#000'} title="Add Note" />
      </View>

	  {/* to render all the notes that we created */}

      <View style={styles.listContainer}>
        <ScrollView>
          {listOfNotes.map((item, index) => (
            <Text style={styles.listitem} key={`item ${index}`}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  inputContainer: {
	flex:1,
    flexDirection: 'row',
    paddingBottom: 30,
    borderBottomWidth: 1,
	alignItems:'center',
	justifyContent:'space-between',
  },
  inputStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  listContainer: {
    paddingTop: 30,
	flex:3,
  },
  listitem: {
    borderRadius: 1,
    borderColor: 'red',
    backgroundColor: 'green',
    padding: 20,
    marginBottom: 20,
    color: '#fff',
    fontSize: 20,
  },
});

//------------------------ the same app but with flat list ----------------------------------


// // my note app with flatList///////

// import {
// 	Button,
// 	FlatList,
// 	ScrollView,
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	View,
//   } from 'react-native';
//   //import React from 'react'
//   import {useState} from 'react';
  
//   const App = () => {
// 	// 1
// 	const [value, setValue] = useState('');
  
// 	const handeleOneChangeText = interdText => {
// 	  setValue(interdText);
// 	};
  
	// 2
// 	const [listOfNotes, setlistOfNotes] = useState([]);
  
// 	const handelOnPressButton = () => {
// 	  setlistOfNotes(currentNotes => [...currentNotes, value]);
// 	};
  
// 	return (
// 	  <View
// 		style={{
// 		  padding: 60,
// 		  paddingHorizontal:15,
// 		  flex:1,
// 		}}>
  
// 		  {/* to rander input along with button*/}
  
// 		<View style={styles.inputContainer}>
// 		  <TextInput
// 			onChangeText={handeleOneChangeText}
// 			style={styles.inputStyle}
// 			placeholder=" Add your Note Here"
// 		  />
// 		  <Button onPress={handelOnPressButton} color={'#000'} title="Add Note" />
// 		</View>
  
// 		{/* to render all the notes that we created */}
  
// 		<View style={styles.listContainer}>

// 		  <FlatList
// 		  data={listOfNotes}
// 		  renderItem={(itemData)=>(
// 			<Text  style={styles.listitem}>{itemData.item}</Text>
// 		  )}
// 		 />
			
// 		</View>
  
// 	  </View>
// 	);
//   };
  
//   export default App;
  
//   const styles = StyleSheet.create({
// 	inputContainer: {
// 	  flex:1,
// 	  flexDirection: 'row',
// 	  paddingBottom: 30,
// 	  borderBottomWidth: 1,
// 	  alignItems:'center',
// 	  justifyContent:'space-between',
// 	},
// 	inputStyle: {
// 	  flex: 1,
// 	  borderWidth: 1,
// 	  borderColor: '#ddd',
// 	},
// 	listContainer: {
// 	  paddingTop: 30,
// 	  flex:3,
// 	},
// 	listitem: {
// 	  borderRadius: 1,
// 	  borderColor: 'red',
// 	  backgroundColor: 'green',
// 	  padding: 20,
// 	  marginBottom: 20,
// 	  color: '#fff',
// 	  fontSize: 20,
// 	},
//   });

  //--------------------------------------------------------------------
  
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