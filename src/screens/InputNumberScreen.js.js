import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import SpeakBtn from "../components/SpeakBtn";

const InputNumberScreen = ({ navigation }) => {
  const { language, user } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.languages}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{t("EnterNumberHeading")}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/enter-number-bg.png")}
            style={styles.img}
          />
          <Text style={styles.text}>{t("EnterNumberText")}</Text>
        </View>
        <SpeakBtn
          onPress={() => navigation.navigate("NumberScreen")}
          btnText={t("TellYourNumber")}
        />
      </SafeAreaView>
    </View>
  );
};

export default InputNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headingContainer: {
    width: 400,
    marginBottom: 50,
  },
  heading: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    color: "#356744",
    fontWeight: "bold",
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  text: {
    marginTop: 10,
    marginBottom: 100,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
});
