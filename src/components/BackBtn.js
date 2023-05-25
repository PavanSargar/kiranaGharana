import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import BackIcon from "react-native-vector-icons/AntDesign";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const BackBtn = ({ navigation }) => {
  const { language } = useContext(AppContext);
  const { t } = useTranslation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <BackIcon name="left" size={24} color="black" />
      <Text style={styles.text}>{t("BackBtnTxt")}</Text>
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    marginLeft: 5,
  },
});
