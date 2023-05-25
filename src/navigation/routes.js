import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadUserFromStorage } from "../storage/UserStorage";
import { AppProvider } from "../context/AppContext";
import HomeScreen from "../screens/HomeScreen";
import InputNumberScreen from "../screens/InputNumberScreen";
import BackBtn from "../components/BackBtn";

const Stack = createStackNavigator();

const Navigation = () => {
  // Load user from storage during app initialization
  loadUserFromStorage();

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InputNumber"
            options={({ navigation }) => ({
              title: "", // Removes the title
              headerLeft: () => <BackBtn navigation={navigation} />,
            })}
            component={InputNumberScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Navigation;
