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
import SpeakBtn from "../components/SpeakBtn";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

const OrderScreen = ({ navigation }) => {
  const { language } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.order}>
        <CartItem />

        <View style={styles.bottom}>
          <View style={styles.orderDetails}>
            <View style={styles.textGroup}>
              <Text>{t("amount")}</Text>
              <Text>₹390</Text>
            </View>
            <View style={styles.textGroup}>
              <Text>{t("discount")}</Text>
              <Text>-₹110</Text>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.textGroup, { marginTop: 10 }]}>
              <Text style={{ fontSize: 20, fontWeight: 800 }}>{t("total")}</Text>
              <Text>-₹280</Text>
            </View>
          </View>
          <Button>
            <Text>{t("verifyOrderText")}</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  order: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderBtn: {
    marginBottom: 50,
    backgroundColor: "red",
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "75%",
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
  bottom: {
    backgroundColor: "#fff",
    height: 300,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderDetails: {
    marginTop: 20,
  },
  textGroup: {
    width: 320,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  line: {
    height: 2,
    backgroundColor: "grey",
  },
});
