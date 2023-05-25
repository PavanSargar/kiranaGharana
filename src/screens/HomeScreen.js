import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

const DATA = [
  {
    id: "en",
    title: "English",
  },
  {
    id: "hi",
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
  const [selectedId, setSelectedId] = useState("en");
  const { language, changeLanguage, setLanguage, user, setUser } =
    useContext(AppContext);
  const { t } = useTranslation();
  const proceed = t("proceed");

  const handleLogout = () => {
    setUser(null);
  };
  const handleLanguageChange = (language) => {};
  const onProceed = () => {
    setLanguage(selectedId);
  };

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

  useEffect(() => {
    changeLanguage(selectedId);
  }, [selectedId]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.languages}>
        <Text style={styles.heading}>Select your language</Text>

        <Text style={styles.subHeading}>अपनी भाषा का चयन करें।</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("InputNumber")}
          style={styles.proceedBtn}
        >
          <Text style={styles.proceedTitle}>Proceed</Text>
          <Text style={styles.proceedTitle}>{proceed}</Text>
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
    marginBottom: 20,
    marginTop: 20,
    color: "#356744",
  },
  subHeading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 100,
    color: "#C9C9C9",
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
    gap: 20,
  },
  proceedTitle: {
    color: "#fff",
    fontSize: 19,
  },
});
