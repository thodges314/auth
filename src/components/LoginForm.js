import React, {Component} from 'react'
import {Text} from 'react-native'
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common'

class LoginForm extends Component {
	state={
		email: '',
		error:'',
		loading: false,
		password: ''
	}

	onButtonPress = () => { // possibly swap for arrow function later
		const {email, password} = this.state
		this.setState({error: '', loading: true})
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess)
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess)
					.catch(this.onLoginFail)
			})
	}

	onLoginSuccess = () => {
		this.setState({
			email:'',
			password:'',
			loading: false,
			error: ''
		})
	}

	onLoginFail = () => {
		this.setState({
			error: 'Authentication failed!!!',
			loading: false
		})
	}

	renderButton() {
		const {loading} = this.state
		if(loading) {
			return (<Spinner size='small'/>)
		}
		return (
			<Button onPress={this.onButtonPress} >
				Login
			</Button>
		)
	}

	render() {
		// const {renderButton} = this
		const {email, error, password} = this.state
		const {errorTextStyle} = styles
		return (
			<Card>
				<CardSection>
					<Input
						label={'email'}
						onChangeText={email => this.setState({email})}
						placeholder={'user@email.com'}
						value={email}				
					/>
				</CardSection>
				<CardSection>
					<Input
						label={'password'}
						secureTextEntry
						onChangeText={password => this.setState({password})}
						placeholder={'password'}
						value={password}				
					/>
				</CardSection>
				<Text style={errorTextStyle}>{error}</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle:{
		fontSize: 20,
		alignSelf: 'center',
		color:'red'
	}
}

export default LoginForm
