import * as React from 'react';
import {View, Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default function LinksScreen({route}) {
  const {hindi, english} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
    <TouchableOpacity
      activeOpacity={1}
      style={styles.courseCard}
      onPress={() => Linking.openURL(hindi) }>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Course in Hindi</Text>
      <Icon name="forward" size={20} color="#6200ee"  />
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity
      activeOpacity={1}
      style={styles.courseCard}
      onPress={() => Linking.openURL(english) }>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Course in English</Text>
      <Icon name="forward" size={20} color="#6200ee"  />
    </View>
  </TouchableOpacity>

    {/* <AdMobBanner
        style={styles.bottomBanner}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  ansBtn: {
    marginBottom: 60,
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: '#fff',
    color: '#fff',
    elevation: 4,
  },
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
  // bottomBanner: {
  //   position: 'absolute',
  //   bottom: 0,
  // },
});
