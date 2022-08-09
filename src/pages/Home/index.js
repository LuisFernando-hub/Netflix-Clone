import React from 'react';
import { View, ScrollView} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Button, Title } from 'react-native-paper';
import ButtonVertial from '../../components/ButtonVertical';
import Previas from '../../components/Previas';
import Secao from '../../components/Secao';

const Home = ( {navigation}) => {
	return (
		<ScrollView style={styles.container}>
			<Header />
			<Hero />
			<View style={styles.menuHeader}>
				<ButtonVertial icon="plus" text="Minha Lista" />
				<Button icon="play" onPress={() => { navigation.navigate('Filme')}} uppercase={false} mode="contained" color="#fff">
					Assistir
				</Button>
				<ButtonVertial icon="information-outline" text="Saíba Mais" />
			</View>
			<View style={styles.previaContainer}>
				<Title style={styles.previaTitle}>Prévias</Title>
                <Previas/>
			</View>
            {[1,2,3,4].map((secao, index) => (
                <Secao hasTopBorder key={index}/>
            ))}
		</ScrollView>
	);
};
export default Home;
