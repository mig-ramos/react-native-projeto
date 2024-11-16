import { Image, StyleSheet, Text, View } from "react-native"

export interface ItemProps {
    principal : string
    secundario: string

}

export default function Item(props: ItemProps){
    return(
            <View style={styles.container}>
            <Text style={styles.primario}>{props.principal}</Text>
            <Text style={styles.secundario}>{props.secundario}</Text>             
                <Image
                    source={{ uri: 'https://dummyimage.com/300x200/000/fff' }}
                    style={styles.imagem}
                />
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        primario: {
            textAlign: 'center',
            fontSize: 20,
            padding: 10,
            color: 'blue',
            fontWeight: 'bold',
        },
        secundario: {
            textAlign: 'center',
            fontSize: 20,
            padding: 10,
            color: 'green',
            fontStyle: 'italic',
        },
        imagem: {
            width: 200,
            height: 200,
        },
    }) 