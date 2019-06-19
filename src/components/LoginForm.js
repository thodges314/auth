import React, {Component} from 'react'
import {Text} from 'react-native'
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
	state={
		email: '',
		error:'',
		password: ''
	}

	onButtonPress() { // possibly swap for arrow function later
		const {email, password} = this.state
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(()=>{
						this.setState({error: 'Authentication failed!!!'})
					})
			})
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label={'email'}
						onChangeText={email => this.setState({email})}
						placeholder={'user@email.com'}
						value={this.state.email}				
					/>
				</CardSection>
				<CardSection>
					<Input
						label={'password'}
						obfuscate
						onChangeText={password => this.setState({password})}
						placeholder={'password'}
						value={this.state.password}				
					/>
				</CardSection>
				<Text>{this.state.error}</Text>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)} >
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm
