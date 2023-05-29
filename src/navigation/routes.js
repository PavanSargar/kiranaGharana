import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadUserFromStorage } from "../storage/UserStorage";
import { AppProvider } from "../context/AppContext";
import HomeScreen from "../screens/HomeScreen";
import NumberScreen from "../screens/NumberScreen";
import BackBtn from "../components/BackBtn";
import OrderScreen from "../screens/OrderScreen";
import InputNumberScreen from "../screens/InputNumberScreen.js";
import AddressScreen from "../screens/AddressScreen";

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
          <Stack.Screen
            name="Order"
            options={({ navigation }) => ({
              title: "", // Removes the title
              headerLeft: () => <BackBtn navigation={navigation} />,
            })}
            component={OrderScreen}
          />
          <Stack.Screen
            name="NumberScreen"
            options={({ navigation }) => ({
              title: "", // Removes the title
              headerLeft: () => <BackBtn navigation={navigation} />,
            })}
            component={NumberScreen}
          />
          <Stack.Screen
            name="AddressScreen"
            options={({ navigation }) => ({
              title: "", // Removes the title
              headerLeft: () => <BackBtn navigation={navigation} />,
            })}
            component={AddressScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Navigation;
