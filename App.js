import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const initialPeople = [
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ];

  const [people, setPeople] = useState(initialPeople);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    });
  }

  const resetHandler = () => {
    setPeople(initialPeople);
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.id)} style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Reset" onPress={resetHandler} />
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={renderItem}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    flex: 1,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});
