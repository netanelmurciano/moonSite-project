import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

class NavBar extends Component {
    render() {
        const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <TouchableOpacity>
                <Icon name='md-arrow-back' type='ionicon' iconStyle={{ paddingLeft: 10, paddingRight: 10, color: '#000', fontWeight: 'bold', backgroundColor: '#d3d3d3' }} onPress={() => Actions.pop()} />
            </TouchableOpacity>
        </View>
    );
    }
  }
  
  const styles = {
    viewStyle: {
      backgroundColor: '#d3d3d3',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 50, height: 50 },
      shadowOpacity: 0.1,
      elevation: 5,
      position: 'relative',
      flexDirection: 'row'
    }
  };
  
  export default NavBar;
