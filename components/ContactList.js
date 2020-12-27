import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';
import AddNewContact from './AddNewContact';
import AllContacts from "./AllContacts";


class ContactList extends Component {

  render() {
    return(
      <View>
        <ScrollView>
          <AddNewContact />
          <AllContacts />
        </ScrollView>
      </View>
    );
  }
}

export default ContactList;