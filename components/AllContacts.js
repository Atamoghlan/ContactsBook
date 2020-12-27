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
      <View style={styles.container}>
        {this.props.usersList?.map(item => {
          return (
          <View key={item.id} style={styles.viewOfText}>
            <Text style={styles.text}>{item.name}:{item.phoneNumber}</Text>
          </View>
        )})}
      </View>
    );
  }
}

export default connect(mapStateToProps)(AllContacts);

const styles = StyleSheet.create({
  container: {
    marginTop: 15, marginLeft: 10,flex:1
},
text: {
  marginLeft: 10,fontSize: 30
},
viewOfText: {
  flex:0.5
}
})