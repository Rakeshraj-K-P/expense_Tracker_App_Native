import { Pressable, StyleSheet, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      styles={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Feather name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },

  pressed: {
    opacity: 0.75,
  },
});
