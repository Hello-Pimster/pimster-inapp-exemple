import React from 'react';
import {StyleSheet, View} from 'react-native';
import Webview from '../components/simpleWebview';

const WebviewPage = () => {
  return (
    <View style={styles.container}>
      <Webview />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%', width: '100%'},
});

export default WebviewPage;
