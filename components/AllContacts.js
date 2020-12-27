import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    usersList: state.usersList,
  }
}
class AllContacts extends Component {
  render() {
    return(
      <View style={{marginTop: 15, marginLeft: 10,flex:1}}>
        {this.props.usersList?.map(item => {
          return (
          <View key={item.id} style={{flex:0.5}}>
            <Text style={{marginLeft: 10,fontSize: 30}}>{item.name}:{item.phoneNumber}</Text>
          </View>
        )})}
      </View>
    );
  }
}

export default connect(mapStateToProps)(AllContacts);