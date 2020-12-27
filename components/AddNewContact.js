import React, { Component } from 'react';
import { TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import { addInfo } from "../redux/actions";
import { ClearList } from "../redux/actions";
import { connect } from 'react-redux';

class AddNewContact extends Component {
    
    render() {
        let plusIcon = require('../icons/plus.png')
        let clearIcon = require('../icons/Clear.png')
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        onChangeText={text => this.name = text}
                        placeholder="Name"
                        style={styles.nameInput}
                    />
                    <TextInput
                        placeholder="Phone number"
                        style={styles.numberInput}
                        onChangeText={text => this.phoneNumber = text}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.clearList()}
                        style={styles.btnClear}>
                        <Image
                            source={clearIcon}
                            style={styles.clearIcon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => this.props.addContact(this.name,this.phoneNumber)}
                        style={styles.btnPlus}>
                        <Image
                            source={plusIcon}
                            style={styles.plusButton}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (name, surname, phoneNumber) => dispatch(addInfo(name, surname, phoneNumber)),
        clearList: () => dispatch(ClearList()), 
        dispatch

    }
}


export default connect(null, mapDispatchToProps)(AddNewContact);

const styles = StyleSheet.create({
    container: {
        flex:1,marginTop: 40, flexDirection: 'row', marginHorizontal: 20, 
       height: 190, alignItems: 'center',  justifyContent: 'center',
    },
    nameInput: 
        {
            width: 330, height: 50, borderWidth: 2,
            borderColor: 'green', backgroundColor: 'white',
            padding: 5, fontSize: 25
        },
    numberInput: 
    {
        width: 330, height: 50, borderWidth: 2,
        borderColor: 'green', backgroundColor: 'white',
        padding: 5, fontSize: 25, marginTop: 5
    },
    plusButton: { 
        width: 50, height: 50 
    },
    btnPlus: {
        marginBottom: 80, marginHorizontal: 15 ,width: 60, height: 60,
        alignItems: 'center', justifyContent: 'center',
    },
    btnClear: {
        width: 120, height: 55, 
        alignItems: 'center', justifyContent: 'center', marginBottom: 20,
        marginTop: 10, marginLeft: 100, 
    },
    clearIcon: { 
        width: 120, height: 50 
    }
})