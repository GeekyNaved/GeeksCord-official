import * as React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {List, Card} from 'react-native-paper';
import {AdMobBanner} from 'expo-ads-admob';
export default function LinksScreen({route}) {
  const {hindi, english} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Card style={styles.ansBtn} onPress={() => Linking.openURL(hindi)}>
        <List.Item
          title="Hindi Resource"
          right={props => (
            <List.Icon {...props} icon="forward" color="#6200ee" />
          )}
        />
      </Card>
      <Card style={styles.ansBtn} onPress={() => Linking.openURL(english)}>
        <List.Item
          title="English Resource"
          right={props => (
            <List.Icon {...props} icon="forward" color="#6200ee" />
          )}
        />
      </Card>

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
  bottomBanner: {
    position: 'absolute',
    bottom: 0,
  },
});
