import {PIMSTER_URL} from '@env';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {openBrowser} from '../components/inAppBrowser';

const BrowserPage = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Open In App Browser"
        onPress={() => openBrowser({url: PIMSTER_URL})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BrowserPage;
