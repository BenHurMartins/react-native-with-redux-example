import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Import the connect from redux
import {connect} from 'react-redux';

class Screen02 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen 02</Text>
        <Text style={styles.text}>Name: {this.props.name}</Text>
        <Text style={styles.text}>Age: {this.props.age}</Text>
      </View>
    );
  }
}

//We will take our states and pass it by props
mapStateToProps = state => {
  const {name, age} = state.AppReducer;

  return {
    name,
    age,
  };
};

//Export the app using connect
export default connect(
  mapStateToProps,
  {},
)(Screen02);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
