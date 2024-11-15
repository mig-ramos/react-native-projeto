import { View, Text, StyleSheet } from "react-native";

export default function App(){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        color: 'red',
    }
})