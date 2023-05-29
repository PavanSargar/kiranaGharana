import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import MicrophoneIcon from "react-native-vector-icons/FontAwesome5";

const Button = ({ children, onPress, width="75%" }) => {
  const { language } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.orderBtn, { width: width }]}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  orderBtn: {
    marginBottom: 50,
    backgroundColor: "red",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
