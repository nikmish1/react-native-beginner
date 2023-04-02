import React from 'react';

import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={({ colorName }) => colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}> Solarized</Text>}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
