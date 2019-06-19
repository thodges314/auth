import React, {Component} from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import {Header} from './src/components/common'


class App extends Component {
  constructor(props) {
    super(props)
    firebase.initializeApp({
      apiKey: "AIzaSyAhzS0RbaLsN08K6D5qaE6rVWlUz4Bf8ro",
      authDomain: "authentication-747e4.firebaseapp.com",
      databaseURL: "https://authentication-747e4.firebaseio.com",
      projectId: "authentication-747e4",
      storageBucket: "authentication-747e4.appspot.com",
      messagingSenderId: "718144608807",
      appId: "1:718144608807:web:e38edf3229937443"
    })
  }

  render() {
    return(
      <View>
        <Header>authentication</Header>
        <Text>An app</Text>
      </View>
    )
  }
}

export default App
