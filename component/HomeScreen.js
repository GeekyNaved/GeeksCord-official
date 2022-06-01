import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  LogBox,
  Dimensions,
  ScrollView,
} from 'react-native';
import {List, Card} from 'react-native-paper';
// import {AdMobBanner} from 'expo-ads-admob';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedLottieView from 'lottie-react-native';

export default function HomeScreen({navigation}) {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetchCourse();
  }, []);
  async function fetchCourse() {
    const response = await fetch(`https://geekynaved.github.io/GeeksCord-api/`);
    response
      .json()
      .then(data => {
        setCourse(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }
  const ItemView = ({item}) => {
    return (
      <Card
        key={item.id}
        style={styles.courseCard}
        onPress={() => {
          navigation.navigate('LinksScreen', {
            hindi: `${item.link1}`,
            english: `${item.link2}`,
          });
        }}>
        <List.Item
          title={item.title}
          right={props => (
            <List.Icon {...props} icon="forward" color="#6200ee" />
          )}
        />
      </Card>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#6200ee" />
      {/* Add this in scrollview when you are placing ads
      style={{ marginBottom: 60 }} */}
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.appName}>Geeks Cord</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('SearchScreen', course)}>
            <View pointerEvents="none">
              <TextInput
                style={styles.searchBar}
                placeholder="search courses..."
                placeholderTextColor="grey"
                pointerEvents="none"
              />
            </View>
          </TouchableOpacity>
        </View>

        {loading ? (
          <AnimatedLottieView
            source={require('../assets/32527-blue-cycle.json')}
            style={styles.animatedLoader}
            autoPlay
            loop
          />
        ) : (
          <FlatList
            data={course}
            keyExtractor={item => item.id}
            renderItem={ItemView}
          />
        )}
      </ScrollView>
      {/* for Ad */}
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
  animatedLoader: {
    display: 'flex',
    height: Dimensions.get('window').height * 0.5,
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  courseCard: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    padding: 25,
    backgroundColor: '#fff',
    color: '#fff',
    elevation: 4,
  },
  header: {
    backgroundColor: '#6200ee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  appName: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  searchBar: {
    marginRight: 25,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    minWidth: 160,
    minHeight: 40,
  },
  bottomAdBanner: {
    position: 'absolute',
    bottom: 0,
  },
});
