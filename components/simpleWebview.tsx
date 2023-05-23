/*
This is a webview with minimal parameters to fit Pimster use Case
Parameter can be extended through the webviewParam prop

Display appropriate message when not connected to the internet
*/
import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';

const Webview = ({webviewParam}: any) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);
  const [updating, setUpdating] = useState<boolean>(true);

  useEffect(() => {
    NetInfo.fetch()
      .then(state => setIsConnected(state.isConnected))
      .then(() => setUpdating(false));
  }, []);

  return (
    <View style={styles.container}>
      {!updating && !isConnected ? (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>
            You seem to be offline ! Please check your connection and try to
            reload
          </Text>
          <Button title="Retry" onPress={() => setUpdating(true)} />
        </View>
      ) : (
        <WebView
          source={{
            uri: 'https://familyselfcare.pimster.app',
            headers: {'Accept-Language': 'en'},
          }} //Replace with your Pimster URL
          allowsInlineMediaPlayback={true} //Mandatory to preserve quality user experience while viewing stories
          mediaPlaybackRequiresUserAction={false}
          allowsBackForwardNavigationGestures
          {...webviewParam}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%', width: '100%'},
  offlineContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  offlineText: {textAlign: 'center'},
});

export default Webview;
