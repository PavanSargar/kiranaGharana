import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import MicrophoneIcon from "react-native-vector-icons/FontAwesome5";

const SpeakBtn = ({ navigation, btnText, onPress }) => {
  const { language } = useContext(AppContext);
  const { t } = useTranslation();
  const handlePress = () => {
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <MicrophoneIcon name="microphone-alt" size={24} color="white"/>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SpeakBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    backgroundColor: "#ffb129",
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "bold",
  },
});
