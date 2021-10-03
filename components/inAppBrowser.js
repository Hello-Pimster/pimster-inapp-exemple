import {Alert, Linking, Platform, StatusBar} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

export const openInAppBrowser = async (
  url,
  statusBarStyle,
  animated = true,
) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      // A delay to change the StatusBar when the browser is opened
      const delay = animated && Platform.OS === 'ios' ? 400 : 0;
      setTimeout(() => StatusBar.setBarStyle('light-content'), delay);
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#333', // choose your color
        preferredControlTintColor: 'white',
        readerMode: true,
        animated,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'slideVertical',
        modalEnabled: true,
        enableBarCollapsing: true,
        // Android Properties
        showTitle: true,
        toolbarColor: '#333', //choose your color
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        hasBackButton: true,
        browserPackage: null,
        showInRecents: false,
      });
    } else {
      Linking.openURL(url);
    }
  } catch (error) {
    await sleep(50);
    const errorMessage = error.message || error;
    Alert.alert(errorMessage);
  } finally {
    // Restore the previous StatusBar of the App
    StatusBar.setBarStyle(statusBarStyle);
  }
};
