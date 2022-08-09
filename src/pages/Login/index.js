import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation}) => {
	const [ credenciais, setCredentials ] = useState({
		email: '',
		senha: ''
	});
	return (
		<View style={styles.bgDark}>
			<Image style={styles.logo} source={require('../../assets/logo.png')} />

			<View>
				<TextInput
					mode="flat"
					label="Email ou número de telefone"
					style={styles.marginBottom}
					value={credenciais.email}
					onChangeText={(text) => setCredentials({ ...credenciais, email: text })}
				/>
				<TextInput
					label="Senha"
					mode="flat"
					secureTextEntry
					style={styles.marginBottom}
					value={credenciais.senha}
					onChangeText={(text) => setCredentials({ ...credenciais, senha: text })}
				/>
			</View>
			<Button style={styles.marginBottom} mode="contained" onPress={() => { navigation.navigate('Home')}}>
				Entrar
			</Button>
            <Button style={styles.marginBottom}  theme={{colors: {primary: '#fff'}}} onPress={() => console.log('Pressed')}>
				Recuperar Senha
			</Button>
            <Text style={styles.textSmall}>
                O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um rôbo. Saiba mais.
            </Text>
		</View>
	);
};

export default Login;
