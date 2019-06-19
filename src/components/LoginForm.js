import React, {Component} from 'react'
import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
	state={
		email: '',
		password: ''
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
				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm
