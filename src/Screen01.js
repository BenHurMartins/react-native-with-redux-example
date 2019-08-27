import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

//Import the connect from redux
import {connect} from 'react-redux';

//Import the actions
import {setName, setAge} from '../actions/AppActions';

class Screen01 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen 01</Text>
        <Text style={styles.text}>Name: {this.props.name}</Text>
        <TextInput
          value={this.props.name}
          onChangeText={text => this.props.setName(text)}
          placeholder={'Type your name'}
          style={styles.inputText}
        />
        <Text style={styles.text}>Age: {this.props.age}</Text>
        <TextInput
          value={this.props.age}
          onChangeText={text => this.props.setAge(text)}
          placeholder={'Type your age'}
          style={styles.inputText}
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
  {setName, setAge},
)(Screen01);

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
  inputText: {
    borderWidth: 1,
    width: '60%',
    height: 30,
    padding: 5,
  },
});
