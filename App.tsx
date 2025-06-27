/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View } from 'react-native';
import Routes from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </Provider>
  );
}

export default App;
