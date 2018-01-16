import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    //Toggle the state every second
    setInterval(()=> {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : '';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }
}

class ImageText extends Component {
  render() {
    return (
      <View>
        <Blink text={this.props.text}></Blink>
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
    let pic2 = {
      uri: 'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg'
    }
    return (
      <View style={styles.container}>
        <ImageText text='This shit is bananas' pic={pic}/>
        <ImageText text='Apple pie' pic={pic2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textColor: {
    color: '#f55'
  }
});
