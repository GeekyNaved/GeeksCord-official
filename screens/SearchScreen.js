import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchScreen({route, navigation}) {
  const course = route.params;
  const [filterData, setfilterData] = useState('');
  const [masterData, setMasterData] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    filterCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function filterCourseData() {
    setfilterData(course);
    setMasterData(course);
  }
  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
      activeOpacity={1}
      key={item.id}
      style={styles.courseCard}
      onPress={() => {
            navigation.navigate('LinksScreen', {
              hindi: `${item.link1}`,
              english: `${item.link2}`,
            });
          }}>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Icon name="forward" size={20} color="#6200ee"  />
    </View>
  </TouchableOpacity>
    );
  };

  const EmptyView = () => {
   return(
    <View style={styles.emptyContainer}>
      <Text style={styles.cardTitle}>No Results found</Text>
    </View>
   )
  };
  
  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      {/* <ScrollView> */}
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={26}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Searchbar
            style={styles.searchBar}
            placeholder="search here"
            value={search}
            onChangeText={text => searchFilter(text)}
          />
        </View>
        <FlatList
          data={filterData}
          keyExtractor={item => item.id}
          renderItem={ItemView}
          ListEmptyComponent={EmptyView}
        />
      {/* </ScrollView> */}
      {/* <AdMobBanner
                style={styles.bottomAdBanner}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
            /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  courseCard: {
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 25,
    padding: 30,
    backgroundColor: '#FFFDFA',
    elevation: 8,
  },
  cardContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#3e3f3d'
  },
  header: {
    backgroundColor: '#6200ee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  searchBar: {
    marginLeft: 20,
    marginRight: 35,
  },
  emptyContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },  
  bottomAdBanner: {
    position: 'absolute',
    bottom: 0,
  },
});
