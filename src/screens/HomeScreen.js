import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { AppContext } from "../context/AppContext";

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AppContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>

      <SafeAreaView></SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
