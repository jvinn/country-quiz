import React from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import fonts from '../styles/Fonts';

function AnswerModal({isAnswered, isCorrect, country, onContinue}) {
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
    },
    header: {
      height: Dimensions.get('window').height * 0.25,
      justifyContent: 'flex-end',
    },
    flag: {
      height: Dimensions.get('window').height * 0.5,
      justifyContent: 'center',
    },
    footer: {
      height: Dimensions.get('window').height * 0.25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const result = isCorrect ? 'Correct' : 'Incorrect';

  return (
    <View>
      <Modal visible={isAnswered}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => onContinue()} style={styles.body}>
            <View style={styles.header}>
              <Text style={fonts.title}>{result}</Text>
            </View>
            <View style={styles.flag}>
              <Text style={fonts.flag}>{country.emoji}</Text>
            </View>
            <View style={styles.footer}>
              <Text style={fonts.heading}>{country.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default AnswerModal;
