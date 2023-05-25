import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { AppContext } from "../context/AppContext";

const HomeScreen = ({ navigation }) => {
  const { language, changeLanguage } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);
  const { t } = useTranslation();

  const handleLogout = () => {
    setUser(null);
  };

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    changeLanguage(newLanguage);
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
