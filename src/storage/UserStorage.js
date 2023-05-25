import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadUserFromStorage = async () => {
  try {
    const userJson = await AsyncStorage.getItem('user');
    const user = JSON.parse(userJson);
    // Update the user in the context if a user exists
    if (user) {
      setUser(user);
    }
  } catch (error) {
    console.error('Error loading user from storage:', error);
  }
};

export const setUser = async (user) => {
  try {
    const userJson = JSON.stringify(user);
    await AsyncStorage.setItem('user', userJson);
  } catch (error) {
    console.error('Error setting user in storage:', error);
  }
};