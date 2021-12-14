import React from 'react';
import fonts from '../styles/Fonts';
import {Text, View, StyleSheet} from 'react-native';

function ResultsScreen({route}) {
  const {score} = route.params;

  const styles = StyleSheet.create({
    score: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.score}>
      <Text style={fonts.title}>{score}%</Text>
    </View>
  );
}

export default ResultsScreen;
