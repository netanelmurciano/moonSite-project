import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';


class ShowsDetail extends Component {
  constructor() {
    super();
    this.onImagePress = this.onImagePress.bind(this);
  }
    onImagePress(link) {
      Actions.showInfo(link);
    }
    render() { 
    return (
      <Card>
        <CardSection>
          <View style={styles.showTitleWrapeer}>
            <Text>
              {
              this.props.show.lastChild.lastChild.attributes ?
              <Text style={styles.headerTextStyle}>{this.props.show.lastChild.lastChild.attributes.alt}</Text>
              :
              null
              }
            </Text>
          </View>
        </CardSection>

      <TouchableOpacity onPress={() => this.onImagePress(this.props.show.firstChild.attributes.href)}>
        <CardSection>
          {
            this.props.show.lastChild.lastChild.attributes ?
              <Image style={styles.imageStyle} source={{ uri: `https://${this.props.show.lastChild.lastChild.attributes.src}` }} />
            :
            null
          }
        </CardSection>
       </TouchableOpacity>
      </Card>
      );
      }
    }

const styles = {
  showTitleWrapeer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 240,
    flex: 1,
    width: null
  },
};

export default ShowsDetail;
