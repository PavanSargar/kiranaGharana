import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AppContext } from '../context/AppContext';

const DetailsScreen = ({ navigation }) => {
  const { user } = useContext(AppContext);

  return (
    <View>
      <Text>This is the Details Screen, {user ? user.name : 'Guest'}!</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;