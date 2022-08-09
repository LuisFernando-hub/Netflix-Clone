import React from 'react';
import { View, ScrollView, ImageBackground, Image } from 'react-native';
import { Title, Button, Paragraph, Caption } from 'react-native-paper';
import styles from './styles';
import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';

const Filme = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg'}} style={styles.hero}/>
            <View style={styles.containerPadding}>
                <Title>Nome do Filme</Title>
                <Button style={styles.buttonPlay} icon="play" uppercase={false} mode="contained" color="#fff">
					Assistir
				</Button>

                <Paragraph>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                e vem sendo utilizado desde o século XVI
                </Paragraph>

                <Caption style={styles.captionInfos}>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                e vem sendo utilizado desde o século XVI
                </Caption>
                <View style={styles.menu}>
                    <ButtonVertical icon="plus" text="Minha Lista"/>
                    <ButtonVertical icon="thumb-up" text="Classifique"/>
                    <ButtonVertical icon="send" text="Compartilha"/>
                    <ButtonVertical icon="download" text="Baixar"/>
                </View>
            </View>
            <Secao hasTopBorder/>
        </ScrollView>
    );
}

export default Filme;