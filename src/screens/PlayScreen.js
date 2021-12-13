import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {flags} from '../assets/CountryFlagsArray';

function PlayScreen({navigation}) {
  const styles = StyleSheet.create({
    playScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flag: {
      fontSize: 200,
    },
  });

  return (
    <View style={styles.playScreen}>
      {flags.map(flag => (
        <Text>{flag.emoji}</Text>
      ))}
    </View>
  );
}

export default PlayScreen;
