import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    bgDark: {
        backgroundColor: '#000', 
        flex: 1,
        justifyContent:'center',
        padding: 20
    },
    logo: {
        display: 'flex',
        alignSelf: 'center',
        height: 80,
        width: 300,
        marginBottom: 100
    },
    marginBottom: {
        marginBottom: 20,
    },
    textSmall: {
        color: 'rgba(255, 255, 255, 0.6)',
        textAling: 'center',
        padding: 20
    }
});


export default styles;