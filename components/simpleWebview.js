/*
This is a webview with minimal parameters to fit Pimster use Case
Parameter can be extended through the webviewParam prop

Display appropriate message when not connected to the internet
*/
import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import WebView from 'react-native-webview';

const SimpleWebview = ({webviewParam}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [updating, setUpdating] = useState(true);

  useEffect(() => {
    NetInfo.fetch()
      .then(state => setIsConnected(state.isConnected))
      .then(setUpdating(false));
  }, []);

  return (
    <View style={{height: '100%', width: '100%'}}>
      {!updating && !isConnected ? (
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}>
          <Text style={{textAlign: 'center'}}>
            You seem to be offline ! Please check your connection and try to
            reload
          </Text>
          <Button title="Retry" onPress={() => setUpdating(true)} />
        </View>
      ) : (
        <WebView
          source={{uri: 'https://familyselfcare.pimster.app'}} //Replace with your Pimster URL
          allowsInlineMediaPlayback={true} //Mandatory to preserve quality user experience while viewing stories
          mediaPlaybackRequiresUserAction={false}
          allowsBackForwardNavigationGestures
          {...webviewParam}
        />
      )}
    </View>
  );
};

export default SimpleWebview;
