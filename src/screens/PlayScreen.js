import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Modal,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

function PlayScreen({navigation}) {
  const remainingCountries = allCountries.slice(); // Creates a new array
  const [country, setCountry] = useState(
    remainingCountries[Math.floor(Math.random() * remainingCountries.length)],
  );
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [text, setText] = useState(null);
  const correctCountries = [];
  const incorrectCountries = [];
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [livesRemaining, setLivesRemaining] = useState(5);
  const [highScore, setHighScore] = useState();

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log('j: ' + jsonValue);
      return jsonValue;
    } catch (e) {
      console.log(e);
    }
  };

  console.log(country.name);
  console.log('score: ' + score);
  console.log('allCountries: ' + allCountries.length);
  console.log('remainingCountries: ' + remainingCountries.length);

  useEffect(() => {
    getData().then(val => setHighScore(val));

    if (livesRemaining === 0) {
      if (score > highScore) {
        storeData(score).then(setHighScore(score));
      }
      console.log('done');
      navigation.navigate('Results', {
        score: score,
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
    remainingCountries.splice(remainingCountries.indexOf(country), 1);
    let randIndex = Math.floor(Math.random() * remainingCountries.length);
    setCountry(remainingCountries[randIndex]);
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
    body: {
      flex: 1,
      alignItems: 'center',
    },
    textInputBorder: {
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 30,
      width: '60%',
    },
    textInput: {
      fontFamily: 'avenir',
      fontSize: 20,
      margin: 10,
    },
    header: {
      height: Dimensions.get('window').height * 0.25,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    flag: {
      height: Dimensions.get('window').height * 0.5,
      justifyContent: 'center',
    },
    highScore: {
      display: 'flex',
    },
    footer: {
      height: Dimensions.get('window').height * 0.25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  });

  return (
    <View>
      <Modal visible={livesRemaining > 0}>
        <View style={styles.body}>
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
          <View style={styles.header}>
            <View style={styles.highScore}>
              <Text style={fonts.buttonText}>Best: {highScore}</Text>
            </View>
            <View>
              <HeartEmojis livesRemaining={livesRemaining} />
            </View>
            <View>
              <Text style={fonts.heading}>Score: {score}</Text>
            </View>
          </View>
          <View style={styles.flag}>
            <Text style={fonts.flag}>{country.emoji}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.textInputBorder}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => setText(text)}
                onSubmitEditing={() => checkAnswer()}
                value={text}
                placeholder={'Enter country name'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default PlayScreen;
