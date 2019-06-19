import React, {Component} from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import {Button, Card, CardSection, Header, Spinner} from './src/components/common'
import LoginForm from './src/components/LoginForm'


class App extends Component {
  constructor(props) {
    super(props)
    this.state=({
      loggedIn: null
    })
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

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent = () => {
    switch(this.state.loggedIn){
      case true:
        return(
          <Card>
            <CardSection>
              <Button>Log Out</Button>
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />
      default:
        return(
        <View style={styles.spinnerStyle} >
          <Spinner />
        </View>)
    }
  }

  render() {
    return(
      <View>
        <Header>authentication</Header>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  spinnerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}

export default App
