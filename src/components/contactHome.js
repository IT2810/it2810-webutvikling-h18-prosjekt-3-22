import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal, AsyncStorage, Alert, FlatList, ScrollView} from 'react-native';

class ContactHome extends Component {

    constructor (){
        super();
        this.state = {
            contactArray: [],
            modalVisible: false,
            refresh: false,
            newName: "",
            newNumber: "",
            newMail: ""
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount(){
        Tasks.loadContacts(contactArray => this.setState({ contactArray: contactArray || [] }))
    }

    newContact = () => {
        let contact = [
            "",
            "",
            ""
        ];

        contact[0] = this.state.newName;
        contact[1] = this.state.newNumber;
        contact[2] = this.state.newMail;

        let oldArray = this.state.contactArray;

        this.setState({
            contactArray: oldArray.concat([contact]),
            newName: "",
            newNumber: "",
            newMail: "",
            refresh: true}
        )

        Tasks.saveContacts(this.state.contactArray)
    };

    viewDetails=(item)=>{
        let name = item[0];
        let number = item[1];
        let mail = item[2];

        Alert.alert(name, ('Number: ' + number + '\n' + 'Mail: '+ mail));
    };

    deleteContact = index => {
        this.setState(
            prevState => {
                let contactArray = prevState.contactArray.slice();
                contactArray.splice(index, 1);

                return {contactArray: contactArray};
            },
            () => Tasks.saveContacts(this.state.contactArray)
        );
    };

    drawModal = () => {
        return (
            <Modal
                animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}> Add new contact </Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <View style={styles.input}>
                            <Text style={styles.inputText} testID={'nameInput'}>Name:</Text>
                            <TextInput placeholder={"Ola Nordmann"} onChangeText={input => this.setState({newName: input})}/>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputText} testID={'numberInput'}>Number:</Text>
                            <TextInput placeholder={"123456789"} onChangeText={input => this.setState({newNumber: input})}/>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputText} testID={'mailInput'}>Mail:</Text>
                            <TextInput placeholder={"ola@gmail.com"} onChangeText={input => this.setState({newMail: input})}/>
                        </View>
                    </View>

                    <View style={styles.btnWrapper}>
                        <Button title={"✖Close"} testID={'closeBtn'} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        </Button>
                        <Button title={"✔Save"} testID={'saveBtn'} onPress={() => {
                            this.newContact();
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    };

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Contacts </Text>
                </View>

                {this.drawModal()}

                <ScrollView style={{flex:1, marginBottom:10}}>
                    <FlatList
                    data={this.state.contactArray}
                    renderItem={({item, index}) => (
                        <View key={index} style={styles.textBox}>
                            <View style={styles.boxName}>
                                <Text style={styles.textStyle} onPress={ this.viewDetails.bind(this, item) }> { item[0] } </Text>
                            </View>
                            <View style={styles.boxDelete}>
                                <Text style={{fontSize: 20}} onPress={() => this.deleteContact(index)}>✖</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item}
                    refreshing={this.state.refresh}/>
                </ScrollView>

                <Button title={"Add contact"} testID={'addContactBtn'} onPress={() => {
                    this.setModalVisible(true);}}>
                </Button>
            </View>
        );
    }
}

let Tasks = {
    convertToArrayOfObject(contactArray, callback) {
        return callback(
            contactArray ? contactArray.split("||").map((contact) => ({contact})) : []
        );
    },
    convertToStringWithSeparators(contactArray) {
        return contactArray.map(contact => contact.noteText).join("||");
    },
    loadContacts(callback) {
        return AsyncStorage.getItem("CONTACTS", (err, contactArray) =>
            this.convertToArrayOfObject(contactArray, callback)
        );
    },
    saveContacts(contactArray) {
        AsyncStorage.setItem("CONTACTS", this.convertToStringWithSeparators(contactArray));
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom: 15
    },

    header: {
        backgroundColor: '#4d79ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: "#ddd",
        width: '100%',
        marginBottom:10
    },

    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },

    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    content: {
        marginTop: 80
    },

    inputWrapper: {
        margin: 20
    },

    input: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        padding: 15
    },

    inputText: {
        marginRight: 5
    },

    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        marginBottom:10,
        flexDirection: 'row',
        height: 50
    },

    boxName: {
        width: '80%',
        height: '100%',
        backgroundColor: "skyblue",

    },

    boxDelete: {
        width: '20%',
        height: '100%',
        backgroundColor: "lightgrey",
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        width: '100%',
        fontWeight: '600'
    },
});

export default ContactHome;