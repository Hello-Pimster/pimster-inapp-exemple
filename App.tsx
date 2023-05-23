import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BrowserPage from './pages/inAppBrowser';
import WebviewPage from './pages/inAppWebview';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="InApp Browser" component={BrowserPage} />
        <Tab.Screen name="WebView" component={WebviewPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
