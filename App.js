import React, {useState} from "react";
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from "react-native";
import Reminder from "./components/Reminder";

export default function App() {
    const [reminder, setReminder] = useState()
    const [reminderItems, setReminderItems] = useState([])
   
    const AddReminder = () => {
        Keyboard.dismiss()
        setReminderItems([...reminderItems, reminder])
        console.log(reminder)
        console.log(reminderItems)
        setReminder('')

    }

    const completeReminder = (index) => {
        let itemsCopy = [...reminderItems]
        itemsCopy.splice(index, 1)
        setReminderItems(itemsCopy)
    }

    return (
        <View style={styles.container}>
            <View style={styles.reminderWrapper}>
                <Text style={styles.sectionTitle}>Remind me to...</Text>
                <View style={styles.items}>
                    {/* This is where the reminders go */}
                    {
                        reminderItems.map((item, index) => {
                          return (
                            <TouchableOpacity key={index} onPress={() => completeReminder(index)}>
                                <Reminder text={item} />
                            </TouchableOpacity>
                           
                        )})
                    }
                </View>
            </View>

            {/* Create a Reminder */}
            <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.createReminderWrapper}>
                <TextInput style={styles.input} value={reminder} placeholder={'Create a reminder for yourself'} onChangeText={text => setReminder(text)}/>
                {/* <TextInput style={styles.input2} text={time} placeholder={'Date / Time'}/> */}
                <TouchableOpacity onPress={() => AddReminder()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff",
    },

    reminderWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center'
    },
    items: {
        marginTop: 30,
    },
    createReminderWrapper: {
        position: "absolute",
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    input2: {
        paddingVertical: 15,
        width: 50,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    dateWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        margin: 20,
    },
    addText: {},
});
