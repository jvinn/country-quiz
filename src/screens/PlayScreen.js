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
import HeartEmojis from '../components/HeartEmojis';

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
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [livesRemaining, setLivesRemaining] = useState(5);

  console.log(country.name);

  useEffect(() => {
    if (livesRemaining === 0) {
      console.log(((score / (259 - allCountries.length)) * 100).toFixed(0));
      navigation.navigate('Results', {
        score: ((score / (259 - allCountries.length)) * 100).toFixed(0),
      });
    }
  });

  function skipCountry() {
    setSkipped(skipped + 1);
    setLivesRemaining(livesRemaining - 1);
    newCountry();
  }

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
    textInput: {
      fontFamily: 'avenir',
      fontSize: 20,
      margin: 10,
    },
    textInputBorder: {
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 30,
      width: '60%',
    },
  });

  return (
    <View style={styles.playScreen}>
      <AnswerModal
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        country={country}
        onContinue={() => {
          setIsAnswered(false);
          if (isCorrect) {
            newCountry();
          } else {
            skipCountry();
          }
        }}
      />
      <HeartEmojis livesRemaining={livesRemaining} />
      <Text style={fonts.heading}>{259 - remainingCountries.length} / 259</Text>
      <Text style={fonts.flag}>{country.emoji}</Text>
      <View style={styles.textInputBorder}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setText(text)}
          onSubmitEditing={() => checkAnswer()}
          value={text}
          placeholder={'Enter country name'}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          skipCountry();
        }}>
        <Text style={fonts.buttonBorder}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlayScreen;
