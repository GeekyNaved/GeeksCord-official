import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedLottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NetInfo from "@react-native-community/netinfo";
import { NoInternetModal } from '../components/noInternetModal';

export default function HomeScreen({ navigation }) {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      console.log('offline', offline)
      setOfflineStatus(offline);
    });

    fetchCourse();
  }, [fetchCourse]);

  const fetchCourse = useCallback(async () => {
    const response = await fetch(`https://geekynaved.github.io/GeeksCord-api/`);
    response.json().then(data => {
      setCourse(data);
      setLoading(false);
      isOffline && setOfflineStatus(false);
    })
      .catch(error => {
        if (course == '') {
          alert('something went wrong. Please Restart the app');
        }
        console.log('error', error);
      })
  }, [isOffline])

  const ItemView = ({ item }) => {
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
          <Icon name="forward" size={20} color="#6200ee" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#6200ee" />
      <View style={styles.header}>
        <Text style={styles.appName}>Geeks Cord</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.searchContainer}
          onPress={() => navigation.navigate('SearchScreen', course)}>
          <Icon name="search" size={18} color="grey" />
          <Text style={styles.searchBar}>
            search courses...
          </Text>
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
      {/* <---------modal for show internet offline --------->*/}
      {isOffline &&
        <NoInternetModal
          show={!isOffline}
          onRetry={fetchCourse}
        />
      }

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
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 25,
    padding: 30,
    backgroundColor: '#FFFDFA',
    elevation: 8,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#3e3f3d',
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
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  searchBar: {
    paddingHorizontal: 7
  },
  searchContainer: {
    // flex: .68,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6200ee',
    paddingHorizontal: 8,
    paddingVertical: 10,
    paddingBottom: 10,
  },
});
