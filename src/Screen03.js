import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

//Import the connect from redux
import {connect} from 'react-redux';

//Import the actions
import {deleteAge, deleteName, deleteAllAsync} from '../actions/AppActions';

class Screen03 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen 03</Text>
        <Text style={styles.text}>Name: {this.props.name}</Text>
        <Text style={styles.text}>Age: {this.props.age}</Text>
        <Button
          title={'Delete the name'}
          onPress={() => this.props.deleteName()}
        />
        <Button
          title={'Delete the Age'}
          onPress={() => this.props.deleteAge()}
        />
        <Button
          title={'Delete All / Async action'}
          onPress={() => this.props.deleteAllAsync()}
        />
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
  {deleteAge, deleteName, deleteAllAsync},
)(Screen03);

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
