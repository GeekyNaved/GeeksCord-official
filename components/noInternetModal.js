import React from "react";
import {Modal, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export const NoInternetModal = ({ show }) => (
  <Modal
    isVisible={show}
    animationIn={'fadeIn'}
    backdropColor={'black'}
    backdropOpacity={0.3}
    animationOut={'fadeOut'}
    animationInTiming={600}>
    <View style={styles.modalContainer}>
      <View style={styles.innerContainer}>
        <Icon name="wifi-off" size={80} color="#6200ee" />
        <Text style={styles.modalTitle}>Connection Error</Text>
        <Text style={styles.modalText}>
          Oops! Looks like your device is not connected to the Internet.
        </Text>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F5FA'
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
    color: '#3D4849'
  },
  modalText: {
    fontSize: 18,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});