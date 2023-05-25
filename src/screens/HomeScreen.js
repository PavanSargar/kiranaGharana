import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AppContext } from "../context/AppContext";

import { useTranslation } from "react-i18next";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "English",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "हिंदी",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState("");
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

  const onProceed = () => {};

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FFB129" : "transparent";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.languages}>
        <Text style={styles.heading}>Select your language</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

        <TouchableOpacity onPress={onProceed} style={styles.proceedBtn}>
          <Text style={styles.proceedTitle}>Proceed</Text>
          <Text style={styles.proceedTitle}>आगे बढ़े</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 108,
    color: "#356744"
  },
  languages: {
    paddingTop: 50,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: "#FFB129",
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  proceedBtn: {
    marginBottom: 50,
    backgroundColor: "#356744",
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 350,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20
  },
  proceedTitle: {
    color: "#fff",
    fontSize: 19,
  }
});
