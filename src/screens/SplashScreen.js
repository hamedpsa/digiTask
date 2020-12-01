import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken, } from '../redux/action';
import { connect } from 'react-redux';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    setTimeout(async () => {
      let token = await AsyncStorage.getItem('userToken');
      if (!token) {
        this.props.navigation.replace('LogIn');

      } else {
        this.props.setToken(token);
        this.props.navigation.replace('Home');
      }
    }, 3000);

  }
  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <ImageBackground
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          source={require('../assets/images/bg.png')}
          resizeMode="repeat">

        <Text
        style={{fontSize:36,fontWeight:'bold',}}
        > DigiTask </Text>
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
