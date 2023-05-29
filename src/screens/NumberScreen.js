import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MicrophoneIcon from "react-native-vector-icons/FontAwesome5";
import Button from "../components/Button";

const NumberScreen = ({ navigation }) => {
  const { language, user } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>3265 646556</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.buttons}>
          <View style={styles.microphoneIconIcon}>
            <MicrophoneIcon name="microphone-alt" size={24} color="white" />
          </View>
          <Button onPress={() => navigation.navigate("AddressScreen")} width={"75%"}>
            <Text>{t("proceed")}</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NumberScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  numberArea: {
    height: "40%",
  },
  bottom: {
    backgroundColor: "#ffffff",

    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",

    height: "70%",
    paddingBottom: 70,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  number: {
    fontSize: 32,
    color: "#356744",
    fontWeight: "bold",
    padding: 20,
  },
  microphoneIconIcon: {
    backgroundColor: "#FFB129",
    padding: 20,
    marginBottom: 50,
    borderRadius: 100,
  },
});
