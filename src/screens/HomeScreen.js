import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import fonts from '../styles/Fonts';
import Easing from 'react-native/Libraries/Animated/Easing';

function HomeScreen({navigation}) {
  const animated = new Animated.Value(850 - Dimensions.get('window').width / 2);
  const duration = 30000;

  Animated.loop(
    Animated.sequence([
      Animated.timing(animated, {
        toValue: -(Dimensions.get('window').width / 2),
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]),
  ).start();

  const styles = StyleSheet.create({
    homeScreen: {
      display: 'flex',
      alignItems: 'center',
    },
    header: {
      height: Dimensions.get('window').height * 0.25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    animation: {
      height: Dimensions.get('window').height * 0.5,
      transform: [{translateX: animated}],
      justifyContent: 'center',
    },
    footer: {
      height: Dimensions.get('window').height * 0.25,
      justifyContent: 'center',
    },
  });

  return (
    <Animated.View style={styles.homeScreen}>
      <View style={styles.header}>
        <Text style={fonts.title}>Country Quiz</Text>
      </View>
      <Animated.View style={styles.animation}>
        <Image source={require('../assets/world-map-tile.png')} />
      </Animated.View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={fonts.buttonBorder}
          onPress={() => navigation.navigate('Play')}>
          <Text style={fonts.buttonText}>New Game</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

export default HomeScreen;
