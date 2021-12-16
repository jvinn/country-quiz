import React from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import fonts from '../styles/Fonts';

function AnswerModal({isAnswered, isCorrect, country}) {
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const result = isCorrect ? 'Correct' : 'Incorrect';

  return (
    <View>
      <Modal visible={isAnswered}>
        <View style={styles.body}>
          <Text style={fonts.title}>{result}</Text>
          <Text style={fonts.flag}>{country.emoji}</Text>
          <Text style={fonts.heading}>{country.name}</Text>
          <TouchableOpacity style={fonts.buttonBorder}>
            <Text style={fonts.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default AnswerModal;
