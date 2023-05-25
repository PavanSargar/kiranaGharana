import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

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
    <View>
      {user && <Button title="Logout" onPress={handleLogout} />}
      <View>
        <Text>{t("welcome")}</Text>
        <Button title="Change Language" onPress={handleLanguageChange} />
        <Button
          title={t("details")}
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
