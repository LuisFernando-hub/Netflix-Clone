import React from 'react';
import { Text, ImageBackground, View, Image } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Hero = () => {
	return (
		<ImageBackground style={styles.hero} source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }}>
			<Image style={styles.logo} resizeMode="contain" source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />
			<View style={styles.containerTop10}>
				<Image style={styles.top10Badge} source={require('../../assets/Top10Badge.png')} />
				<Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
			</View>
		<LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)','rgba(0,0,0,1)']}/>
		</ImageBackground>
	);
};

export default Hero;
