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

  useEffect(() => {
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
        <Animated.Image source={require('../assets/world-map-tile.png')} />
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
