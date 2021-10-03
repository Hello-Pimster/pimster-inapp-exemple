import React from 'react';
import {Button, View} from 'react-native';
import {openInAppBrowser} from '../components/inAppBrowser';

const Home = () => {
  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="Open In App Browser"
        onPress={() => openInAppBrowser('https://familyselfcare.pimster.app')}
      />
    </View>
  );
};

export default Home;
