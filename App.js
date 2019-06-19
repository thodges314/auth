import React, {Component} from 'react'
import { Text, View } from 'react-native'
import {Header} from './src/components/common'

class App extends Component {
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
