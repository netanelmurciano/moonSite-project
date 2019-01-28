import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from '../components/Home';
import ShowInfo from '../screens/ShowInfo';
import NavBar from '../components/NavBar';

class RouterComponent extends Component {
    render() {
    return (
        <Router >
            <Scene key="root">
                <Scene
                    hideNavBar
                    key="home"
                    component={Home}
                    titleStyle={{ textAlign: 'center', flex: 1 }}
                />

                <Scene
                    key="showInfo"
                    component={ShowInfo}
                    navBar={NavBar}
                />   
            </Scene>
        </Router>
    );
    }
}

export default RouterComponent;

