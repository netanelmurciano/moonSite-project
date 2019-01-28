import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ShowsDetail from './ShowsDetail';


class ShowList extends Component {
  constructor(props) {
    super(props);

    this.renderShows = this.renderShows.bind(this);
}

renderShows() {
  const filterContacts = this.props.shows.filter(
    (show) => {
      return show.lastChild.lastChild.attributes.alt.indexOf(this.props.search) !== -1;
    }
  );

  return filterContacts.map(show =>
    <ShowsDetail key={show.lastChild.lastChild.attributes.alt} show={show} />
  );
  }

    render() {
    return (
      <ScrollView>
       {this.renderShows()}
      </ScrollView>
    );
  }
}

export default ShowList;
