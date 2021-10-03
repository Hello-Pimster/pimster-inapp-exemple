import React from 'react';
import {View} from 'react-native';
import SimpleWebview from '../components/simpleWebview';

const InApp = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <SimpleWebview />
    </View>
  );
};

export default InApp;
