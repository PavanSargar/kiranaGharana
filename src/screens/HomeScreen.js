import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AppContext } from '../context/AppContext';

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AppContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <View>
      <Text>Welcome to the Home Screen, {user ? user.name : 'Guest'}!</Text>
      {user && <Button title="Logout" onPress={handleLogout} />}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;