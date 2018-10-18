import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, Modal, AsyncStorage, Alert, FlatList, ScrollView} from 'react-native';
import Todo from "./todo";

export default class ContactHome extends Component {

    constructor (){
        super();
        this.state = {
            contactArray: [],
            modalVisible: false,
            refresh: false,
            newName: "",
            newNumber: "",
        }
    }

    setModalVisible = visible => {
        this.setState({modalVisible: visible});
    };

    componentDidMount(){
        Tasks.loadContacts(contactArray => this.setState({ contactArray: contactArray || [] }))
    }

    newContact = () => {
        let contact = [
            "",
            "",
        ];

        contact[0] = this.state.newName;
        contact[1] = this.state.newNumber;

        let oldArray = this.state.contactArray;
        this.setState(
          prevState => {
            let {contactArray, newName, newNumber} = prevState;
            return {
              //This will display the text
              //contactArray: oldArray.concat([contact]),

              //This will store the newName in AsyncStorage, but not display text
              contactArray: oldArray.concat({key: contactArray.length, newName: newName, newNumber: newNumber}),
              newName: "",
              newNumber: ""
            };
          },
              () => Tasks.saveContacts(this.state.contactArray)
        );
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
                            <Text style={styles.inputText}>Name:</Text>
                            <TextInput style={styles.inputField} placeholder={"Ola Nordmann"} onChangeText={input => this.setState({newName: input})}/>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputText}>Number:</Text>
                            <TextInput style={styles.inputField} placeholder={"123456789"} onChangeText={input => this.setState({newNumber: input})}/>
                        </View>
                    </View>

                    <View style={styles.btnWrapper}>
                        <Button title={"✖Close"} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            this.state.newName = "";
                            this.state.newNumber = "";
                        }}>
                        </Button>
                        <Button title={"✔Save"} onPress={() => {
                            let notEmptyName = this.state.newName.trim().length > 0;
                            let notEmptyNr = this.state.newNumber.trim().length > 0;
                            if(notEmptyName && notEmptyNr){
                                this.newContact();
                                this.setModalVisible(!this.state.modalVisible);
                            }else{
                                Alert.alert("Please enter name and number");
                            }

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
                                <Text style={styles.textStyle}> { item.newName } </Text>
                                <Text style={styles.numberText}> { item.newNumber } </Text>
                            </View>
                            <View style={styles.boxDelete}>
                                <Text style={{fontSize: 20}} onPress={() => this.deleteContact(index)}>✖</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item}
                    refreshing={this.state.refresh}/>
                </ScrollView>

                <Button title={"Add contact"} onPress={() => {
                    this.setModalVisible(true);}}>
                </Button>
            </View>
        );
    }
}

let Tasks = {
    convertToArrayOfObject(contactArray, callback) {
        return callback(
            contactArray ? contactArray.split("||").map((contact, i) => ({key: i, newName: contact, newNumber: 0})) : []
        );
    },
    convertToStringWithSeparators(contactArray) {
        return contactArray.map(contact => contact.newName).join("||");
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
        marginRight: 5,
    },
    inputField: {
        width: 200,
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
        marginBottom: 5,
        marginTop: 4,
        marginLeft: 10,
        width: '100%',
        fontWeight: '600'
    },

    numberText: {
        marginLeft: 10,
    }
});

AppRegistry.registerComponent("ContactHome", () => ContactHome);
