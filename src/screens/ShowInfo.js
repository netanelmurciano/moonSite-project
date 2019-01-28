import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import DomSelector from 'react-native-dom-parser';
import { removeSpaceFromString } from '../helpers';
import { Card, CardSection } from '../components/common';

class ShowInfo extends Component {
    constructor() {
        super();
        this.state = {
            showInformation: '',
            showGeneralInfoPanel: ''
        };
    }

    componentWillMount() {
        const url = `http://www.tvmaze.com${this.props.data}`;
        axios.get(url)
       .then(response => {
            const doc = DomSelector(response.data);
            const generalInformation = doc.getElementById('general-information');
            const generalInfoPanel = doc.getElementById('general-info-panel');
            this.setState({ showInformation: generalInformation, showGeneralInfoPanel: generalInfoPanel });
        })
        .catch((error) => {  
            console.log(error);  
        }); 
    }


    render() {
    return (
      <Card>
        {/* Show Name And Image */}
       {this.state.showInformation !== '' ?  
       <CardSection>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{this.state.showInformation.firstChild.children[0].firstChild.attributes.alt}</Text>
            </View>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={{ uri: `https://${this.state.showInformation.firstChild.children[0].firstChild.attributes.src}` }} />
            </View>
        </CardSection> 
         : null}

         {/* Show Description */}
        {this.state.showInformation !== '' ?
        <CardSection>
            <View>
                <Text>{this.state.showInformation.children[1].firstChild.lastChild.text}</Text>
            </View>
        </CardSection>
        : null}

        {this.state.showGeneralInfoPanel !== '' ?
        <CardSection>
            <View style={styles.viewWrapper}>
                <Text style={styles.headerStyle}>{this.state.showGeneralInfoPanel.children[0].children[0].text}</Text>

                {/* Network*/}
                <View style={styles.viewStyle}>  
                    <Text>{this.state.showGeneralInfoPanel.children[1].children[0].children[0].text}</Text>
                    <Image style={styles.flagImage} source={{ uri: `https://${this.state.showGeneralInfoPanel.children[1].children[1].attributes.src}` }} />
                    <Text>{this.state.showGeneralInfoPanel.children[1].children[2].children[0].text}</Text>    
                </View>

                {/* Schedule*/}
                <View style={styles.viewStyle}>   
                    <Text>{this.state.showGeneralInfoPanel.children[2].children[0].children[0].text}</Text>
                    <Text>{removeSpaceFromString(this.state.showGeneralInfoPanel.children[2].children[1].text)}</Text>   
                </View>

                {/* Status*/}
                <View style={styles.viewStyle}>   
                    <Text>{this.state.showGeneralInfoPanel.children[3].children[0].children[0].text}</Text>
                    <Text>{this.state.showGeneralInfoPanel.children[3].children[1].text}</Text>   
                </View>

                {/* Show Type*/}
                <View style={styles.viewStyle}>   
                    <Text>{this.state.showGeneralInfoPanel.children[4].children[0].children[0].text}</Text>
                    <Text>{removeSpaceFromString(this.state.showGeneralInfoPanel.children[4].children[1].text)}</Text>   
                </View>

                 {/* Genres*/}   
                 <View style={styles.viewStyle}>
                    <Text>{this.state.showGeneralInfoPanel.children[5].children[0].children[0].text}</Text>
                    <Text>{this.state.showGeneralInfoPanel.children[5].children[1].children[0].children[0].text} |</Text>
                    {this.state.showGeneralInfoPanel.children[5].children[1].children[1] ?
                    <Text>{this.state.showGeneralInfoPanel.children[5].children[1].children[1].children[0].text} |</Text>
                    : null
                    }
                    {this.state.showGeneralInfoPanel.children[5].children[1].children[2] ?   
                    <Text>{this.state.showGeneralInfoPanel.children[5].children[1].children[2].children[0].text}</Text>
                    : null
                    }         
                </View>
            </View>    
         

        </CardSection>
        : null}
      </Card> 
    );
 }
}

const styles = {
    thumbnailContainerStyle: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      marginLeft: 2,
      marginRight: 2,
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    headerContentStyle: {
      flex: 1,
      justifyContent: 'space-around',
    },
    headerTextStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    headerStyle: {
        height: 30,
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginBottom: 20
    },
    flagImage: {
        height: 11,
        width: 16
    },
    viewWrapper: {
        flex: 1
    }
};

export default ShowInfo;
