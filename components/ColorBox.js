import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };

  const textColor = {
    color:
      parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[boxColor, styles.tile]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  cyan: {
    backgroundColor: 'cyan',
  },
  blue: {
    backgroundColor: 'blue',
  },
  magenta: {
    backgroundColor: 'magenta',
  },
  orange: {
    backgroundColor: 'orange',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
