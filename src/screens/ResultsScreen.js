import React from 'react';
import fonts from '../styles/Fonts';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function ResultsScreen({route, navigation}) {
  const {score} = route.params;

  const styles = StyleSheet.create({
    touchable: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.touchable}>
        <Text style={fonts.title}>Score: {score}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ResultsScreen;
