import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {allCountries} from '../assets/CountryArray';
import fonts from '../styles/Fonts';
import AnswerModal from '../components/AnswerModal';

function PlayScreen({navigation}) {
  const [country, setCountry] = useState(
    allCountries[Math.floor(Math.random() * 261)],
  );
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [text, setText] = useState(null);
  const remainingCountries = allCountries.slice(); // Creates a new array
  const correctCountries = [];
  const incorrectCountries = [];
  const numCountries = allCountries.length;
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (remainingCountries.length === 0) {
      console.log(((score / (261 - allCountries.length)) * 100).toFixed(0));
      navigation.navigate('Results', {
        score: ((score / (261 - allCountries.length)) * 100).toFixed(0),
      });
    }
  });

  useEffect(() => {
    return navigation.addListener('beforeRemove', () => {
      setScore(0);
      setSkipped(0);
    });
  }, [navigation]);

  function newCountry() {
    setText('');
    allCountries.splice(allCountries.indexOf(country), 1);
    let randIndex = Math.floor(Math.random() * allCountries.length);
    setCountry(allCountries[randIndex]);
  }

  function checkAnswer() {
    setIsAnswered(true);
    if (text === country.name) {
      setScore(score + 1);
      setIsCorrect(true);
      correctCountries.push(country);
    } else {
      setIsCorrect(false);
      incorrectCountries.push(country);
    }
  }

  const styles = StyleSheet.create({
    playScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    progress: {
      fontFamily: 'avenir',
      fontSize: 14,
    },
  });

  return (
    <View style={styles.playScreen}>
      <AnswerModal
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        country={country}
      />
      {261 - remainingCountries.length > 0 ? (
        <Text style={fonts.title}>
          {((score / (261 - remainingCountries.length)) * 100).toFixed(0)}%
        </Text>
      ) : (
        <Text style={fonts.title}>0%</Text>
      )}
      <Text style={fonts.heading}>{261 - remainingCountries.length} / 261</Text>
      <Text style={fonts.flag}>{country.emoji}</Text>
      <View style={fonts.buttonBorder}>
        <TextInput
          style={fonts.buttonText}
          onChangeText={text => {
            setText(text);
          }}
          onSubmitEditing={() => checkAnswer()}
          value={text}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setSkipped(skipped + 1);
        }}>
        <Text style={fonts.buttonBorder}>Skip</Text>
      </TouchableOpacity>
      {console.log(country.name)}
    </View>
  );
}

export default PlayScreen;
