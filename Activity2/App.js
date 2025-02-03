import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const DATA = [
  {
    id: 'Morning List',
    title: 'Mornig List',
  },
  {
    id: '1.mag kape',
    title: 'Second Item',
  },
  {
    id: '2.mag celphone',
    title: 'Third Item',
  },
  {
    id: '3.ma ligo',
    title: 'Third Item',
  },
  {
    id: '4.attending class',
    title: 'Third Item',
  },
  {
    id: '5.gumawa project',
    title: 'Third Item',
  },
  {
    id: '6.umuwi',
    title: 'Third Item',
  },
  {
    id: '7.mag lakad',
    title: 'Third Item',
  },
  {
    id: '8.mag palit ng damit ',
    title: 'Third Item',
  },
  {
    id: '9.mag saing ',
    title: 'Third Item',
  },
  {
    id: '10.mah! anong ulam?',
    title: 'Third Item',
  },

  {
    id: 'Afternoon list',
    title: 'Third Item',
  },
  {
    id: '1.phone',
    title: 'Third Item',
  },
  {
    id: '2.mag saing ',
    title: 'Third Item',
  },
  {
    id: '3. mag hugas',
    title: 'Third Item',
  },
  {
    id: '4. maglinis ng bahay ',
    title: 'Third Item',
  },
  {
    id: '5.mag youtube',
    title: 'Third Item',
  },
  {
    id: '6.basketball',
    title: 'Third Item',
  },
  {
    id: '7.maligo',
    title: 'Third Item',
  },
  {
    id: '8.matulog',
    title: 'Third Item',
  },
  {
    id: '9.mag celphone',
    title: 'Third Item',
  },
  {
    id: '10.humilata',
    title: 'Third Item',
  },

  {
    id: 'Evening',
    title: 'Third Item',
  },
  {
    id: '1.ma ano ulam?',
    title: 'Third Item',
  },
  {
    id: '2.ma luto naba?',
    title: 'Third Item',
  },
  {
    id: '3.yes kakain na!',
    title: 'Third Item',
  },
  {
    id: '4.hilata',
    title: 'Third Item',
  },
  {
    id: '5.matulog',
    title: 'Third Item',
  },
 

];


type ItemProps = {title: string};


const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.id} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;