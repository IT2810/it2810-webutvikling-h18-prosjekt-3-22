import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal, AsyncStorage, Alert, FlatList} from 'react-native';

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
    };

    viewDetails=(item)=>{
        let name = item[0];
        let number = item[1];
        let mail = item[2];

        Alert.alert(name, ('Number: ' + number + '\n' + 'Mail: '+ mail));
    };

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Contacts </Text>
                </View>

            {/*Modal opens when user click the add contact button*/}
                <View style={{marginTop: 22}}>
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
                            <TextInput placeholder={"Ola Nordmann"} onChangeText={input => this.setState({newName: input})}/>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputText}>Number:</Text>
                            <TextInput placeholder={"123456789"} onChangeText={input => this.setState({newNumber: input})}/>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputText}>Mail:</Text>
                            <TextInput placeholder={"ola@gmail.com"} onChangeText={input => this.setState({newMail: input})}/>
                        </View>
                    </View>

                    <View style={styles.btnWrapper}>
                        <Button title={"✖Close"} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        </Button>
                        <Button title={"✔Save"} onPress={() => {
                            this.newContact();
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        </Button>
                    </View>
                </View>
                </Modal>
            {/*End modal*/}
                <View style={{}}>
                    <View style={{marginBottom: 10}}>
                        <FlatList
                        data={this.state.contactArray}
                        renderItem={({item}) => (
                            <View style={styles.textBox}>
                            <Text style={styles.textStyle} onPress={ this.viewDetails.bind(this, item) }> { item[0] } </Text>
                            </View>
                        )}
                        keyExtractor={(item) => item}
                        refreshing={this.state.refresh}/>
                    </View>


                    <View style={styles.addBtn}>
                        <Button title={"Add contact"}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                        </Button>
                    </View>
                </View>

            </View>
        </View>
        );
    }

}

let Tasks = {
    saveContacts() {
        //AsyncStorage.setItem("CONTACTS", this.state.contactArray);
    },

    loadContacts() {
        return AsyncStorage.getItem("CONTACTS", contactArray);
        this.state.contactArray = contactArray
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#4d79ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: "#ddd",
        width: '100%'
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
        marginBottom: 10,
        padding: 5,
        backgroundColor: "skyblue",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },

    textStyle: {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        width: '100%',
        fontWeight: '600'
    },

    addBtn: {

    }
});

export default ContactHome;