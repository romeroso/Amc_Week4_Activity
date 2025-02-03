import React, {useState} from 'react';
import {FlatList,StatusBar,StyleSheet,Text,TouchableOpacity,View,Button,TextInput,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] =[
  {
    id: 'To Do List #1',
    title: 'Mornig List',
  },
  {
    id: 'To Do List #2',
    title: 'Second Item',
  },
  {
    id: 'To Do List #3',
    title: 'Third Item',
  },
  {
    id: 'To Do List #4',
    title: 'Third Item',
  },
  
];

const COLORS = ['pink', 'lightgreen', 'orange', 'yellow', 'purple'];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={styles.itemContent}>
      <Text style={[styles.title, {color: textColor}]}>{item.id}</Text>
      <TextInput
        style={styles.checkbox}
        value=""
      />
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [leftButtonValue, setLeftButtonValue] = useState<string>('');
  const [rightButtonValue, setRightButtonValue] = useState<string>('');

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? 'blue' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const handleLeftButtonPress = () => {
    console.log('Done button pressed with value:', leftButtonValue);
  };

  const handleRightButtonPress = () => {
    console.log('Not Done button pressed with value:', rightButtonValue);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Romeroso To-Do List</Text>
        <View style={styles.buttonContainer}>
          <Button title="Done" onPress={handleLeftButtonPress} />
          <TextInput
            style={styles.numberInput}
            value={leftButtonValue}
            onChangeText={setLeftButtonValue}
            placeholder="Enter number"
            keyboardType="numeric"
          />
          <Button title="Not Done" onPress={handleRightButtonPress} />
          <TextInput
            style={styles.numberInput}
            value={rightButtonValue}
            onChangeText={setRightButtonValue}
            placeholder="Enter number"
            keyboardType="numeric"
          />
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  numberInput: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black',
    marginLeft: 8,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
