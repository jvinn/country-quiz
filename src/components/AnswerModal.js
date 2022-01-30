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

function AnswerModal({isAnswered, isCorrect, country, onContinue}) {
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      height: '25%',
      justifyContent: 'flex-end',
    },
    flag: {
      height: '50%',
      justifyContent: 'center',
    },
  });

  const result = isCorrect ? 'Correct' : 'Incorrect';

  return (
    <View>
      <Modal visible={isAnswered}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => onContinue()} style={styles.body}>
            <View style={styles.title}>
              <Text style={fonts.title}>{result}</Text>
            </View>
            <View style={styles.flag}>
              <Text style={fonts.flag}>{country.emoji}</Text>
            </View>
            <View>
              <Text style={fonts.heading}>{country.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default AnswerModal;
