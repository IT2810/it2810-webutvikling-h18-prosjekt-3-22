import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal, TouchableHighlight, Alert} from 'react-native';

class ContactHome extends Component {

    constructor (){
        super();
        this.state = {
            contactArray: []
        }
    }

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    newContact = () => {
        u
    }

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



                    <View style={styles.btnWrapper}>
                        <Button title={"✖Close"} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        </Button>
                        <Button title={"✔Save"} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        </Button>
                    </View>
                </View>
                </Modal>
            {/*End modal*/}

            <Button title={"Add contact"}
                onPress={() => {
                    this.setModalVisible(true);
                }}>
            </Button>
            </View>
        </View>
        );
    }

}

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
    }
});

export default ContactHome;