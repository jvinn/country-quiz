import React from 'react';
import {Text} from 'react-native';

function HeartEmojis({livesRemaining}) {
  let heartsString = '';

  console.log('lives: ' + livesRemaining);

  for (let i = 0; i < livesRemaining; i++) {
    heartsString = heartsString + '❤️';
  }
  for (let i = 0; i < 5 - livesRemaining; i++) {
    heartsString = heartsString + '️️🤍️';
  }
  console.log(heartsString);

  return <Text style={{fontSize: 30}}>{heartsString}</Text>;
}

export default HeartEmojis;
