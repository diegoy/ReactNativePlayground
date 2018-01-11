import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ImageText extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
        <Image source={this.props.pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <ImageText text='This shit is bananas' pic={pic}/>
        <ImageText text='This shit is bananas' pic={pic}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
