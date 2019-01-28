import React, { Component } from 'react';
import { View } from 'react-native';
import RouterComponent from './routes/Router';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <RouterComponent />
      </View>
    );
  }
}

export default App;
