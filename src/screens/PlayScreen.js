import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {countries} from '../assets/CountryArray';
import fonts from '../styles/Fonts';

function PlayScreen({navigation}) {
  const [country, setCountry] = useState(
    countries[Math.floor(Math.random() * 261)],
  );
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [text, setText] = useState(null);

  function newCountry() {
    setText('');
    countries.splice(countries.indexOf(country), 1);
    let randIndex = Math.floor(Math.random() * countries.length);
    setCountry(countries[randIndex]);
  }

  const styles = StyleSheet.create({
    playScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flag: {
      fontSize: 300,
    },
    progress: {
      fontFamily: 'avenir',
      fontSize: 14,
    },
  });

  return (
    <View style={styles.playScreen}>
      {261 - countries.length > 0 ? (
        <Text style={fonts.title}>
          {((score / (261 - countries.length)) * 100).toFixed(0)}%
        </Text>
      ) : null}
      <Text style={fonts.heading}>{261 - countries.length} / 261</Text>
      <Text style={styles.flag}>{country.emoji}</Text>
      <View style={fonts.buttonBorder}>
        <TextInput
          style={fonts.buttonText}
          onChangeText={text => {
            setText(text);
            if (text === country.name) {
              setScore(score + 1);
              newCountry();
            }
          }}
          value={text}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setSkipped(skipped + 1);
          newCountry();
        }}>
        <Text style={fonts.buttonBorder}>Skip</Text>
      </TouchableOpacity>
      {console.log(country.name)}
    </View>
  );
}

export default PlayScreen;
