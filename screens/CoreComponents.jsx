import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


export default function CoreComponents() {

    const [name, setName] = useState('John');
    const [person, setPerson] = useState({name: 'mario', age:40});
    const [age, setAge] = useState(30);
  
    const handlerButtonClick = () => {
      setName('Wowo!');
      setPerson(person=>({
        ...person,
        age : 100,
      }))
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{textAlign: 'center'}}> My name is {name}</Text>
                <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
            </View>
            <View style={styles.header}>
                <Text style={{textAlign: 'center'}}>Enter your name: </Text>
                <TextInput
                style={styles.input}
                placeholder='e.g John'
                onChangeText={value => setName(value)}
                />
            </View>
            <View style={styles.header}>
                <Text style={{textAlign: 'center'}}>Enter your age: </Text>
                <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder='e.g 25'
                onChangeText={value => setPerson(person =>({
                    ...person,
                    age : value,
                }))}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonPressable} onPress={handlerButtonClick}>
                    <Text style={styles.buttonText}>Update</Text>
                </Pressable>
            </View>
            <View style={styles.body}>
                <Text>lorem ipsum dolor sit amet.</Text>
                <Text>lorem ipsum dolor sit amet.</Text>
                <Text>lorem ipsum dolor sit amet.</Text>
                <Text>lorem ipsum dolor sit amet.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      marginVertical: 20,
      backgroundColor: 'white',
      padding: 20,
    },
    boldText:{
      fontWeight: 'bold',
    },
    body: {
      display:'none',
      padding:20,
      backgroundColor: 'yellow',
    },
    buttonContainer:{
      marginVertical:20,
    },
    buttonPressable:{
      alignItems:'center',
      elevation: 3,
      backgroundColor: 'black',
      paddingVertical: 12,
      paddingHorizontal : 32,
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      fontWeight: 'bold',
      color: 'white',
    },
    input: {
      borderWidth:1,
      borderColor: '#777',
      padding: 8,
      margin:10,
      width:200
    }
  });