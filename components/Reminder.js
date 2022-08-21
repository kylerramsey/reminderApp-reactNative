import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Reminder = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.square} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
    },
    itemText: {
        maxWidth: '80%',

    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 15,
    },
})

export default Reminder

