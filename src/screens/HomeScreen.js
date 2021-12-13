import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

function HomeScreen({navigation}) {
  const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      alignItems: 'center',
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 30,
    },
    body: {
      flex: 5,
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      fontFamily: 'avenir',
    },
    button: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: 'avenir',
      fontSize: 20,
      padding: 10,
    },
  });

  return (
    <View style={styles.homeScreen}>
      <View style={styles.header}>
        <Text style={styles.title}>Country Quiz</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Play')}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
