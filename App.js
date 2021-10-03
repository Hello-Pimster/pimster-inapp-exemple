import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './pages/inAppBrowser';
import InApp from './pages/inAppWebview';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="In App Browser" component={Home} />
        <Tab.Screen name="Product Assistant (WebView)" component={InApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
