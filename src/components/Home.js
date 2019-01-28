import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import DomSelector from 'react-native-dom-parser';
import ShowList from './ShowList';
import Search from './Search';
import { Header } from './common';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: '', 
      shows: [],
      search: ''
    };

    this.searchFilter = this.searchFilter.bind(this);
}

componentWillMount() {
  axios.get('http://www.tvmaze.com/shows')
  .then(response => {
    const doc = DomSelector(response.data);
    const figure = doc.getElementsByTagName('figure');
    this.setState({ shows: figure });
  })
  .catch((error) => {  
    console.log(error);  
  }); 
}

searchFilter(contact) {
  this.setState({ search: contact.search });
}

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header headerText="MoonsSite Project" />
          <Search searchFilter={this.searchFilter} />
          <ShowList shows={this.state.shows} search={this.state.search} />  
      </View>
    );
  }
}

export default Home;
