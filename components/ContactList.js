import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';
import ContactAddingForm from './ContactAddingForm';
import AllContacts from "./AllContacts";


class ContactList extends Component {

  render() {
    return(
      <View>
        <ScrollView>
          <ContactAddingForm />
          <AllContacts />
        </ScrollView>
      </View>
    );
  }
}

export default ContactList;