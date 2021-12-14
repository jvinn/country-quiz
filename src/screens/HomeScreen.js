import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import fonts from '../styles/Fonts';

function HomeScreen({navigation}) {
  const animated = new Animated.Value(300);
  const duration = 20000;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: -300,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 300,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    background: {},
  });

  return (
    <Animated.View style={styles.homeScreen}>
      <Animated.View style={[{transform: [{translateX: animated}]}]}>
        <Animated.Image source={require('../assets/world_map_bg.png')} />
      </Animated.View>
      <View>
        <Text style={fonts.title}>Country Quiz</Text>
      </View>
      <View>
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
