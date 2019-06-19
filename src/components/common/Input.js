import React from 'react'
import {TextInput, View, Text} from 'react-native'

const Input = ({label, value, onChangeText, placeholder, obfuscate}) => {
	const {containerStyle, inputStyle, labelStyle} = styles
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				autoCorrect={false}
				clearTextOnFocus={true}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={obfuscate}
				style={inputStyle}
				value={value}
			/>
		</View>
	)
}

const styles = {
	containerStyle:{
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		height: 40
	},
	inputStyle:{
		color:'#000',
		flex: 1,
		fontSize: 18,
		height: 20,
		lineHeight: 23,
		paddingLeft: 5,
		paddingRight: 5,
		textAlign: 'right',
		width: 100
	},
	labelStyle:{
		fontSize: 18,
		lineHeight: 23,
		paddingLeft: 20
	}
}

export {Input}
