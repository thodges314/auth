import React from 'react'
import {TextInput, View, Text} from 'react-native'

const Input = ({label, value, onChangeText}) => {
	const {containerStyle, inputStyle, labelStyle} = styles
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
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
		flex: 2,
		fontSize: 18,
		height: 20,
		lineHeight: 23,
		paddingLeft: 5,
		paddingRight: 5,
		width: 100
	},
	labelStyle:{
		flex: 1,
		fontSize: 18,
		lineHeight: 23,
		paddingLeft: 20
	}
}

export {Input}
