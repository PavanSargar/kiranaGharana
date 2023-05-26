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

const OrderScreen = ({ navigation }) => {
  const { language } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.order}>
        <Text>Hello sdfasfd asdf </Text>

        <View style={styles.bottom}>
          <View style={styles.orderDetails}>
            <View style={styles.textGroup}>
              <Text>Amount</Text>
              <Text>₹390</Text>
            </View>
            <View style={styles.textGroup}>
              <Text>Discount</Text>
              <Text>-₹110</Text>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.textGroup, { marginTop: 10 }]}>
              <Text style={{fontSize: 20, fontWeight: 800}}>Total</Text>
              <Text>-₹280</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.orderBtn}>
            <Text style={styles.btnText}>Verify your Order</Text>
          </TouchableOpacity>
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
    width: 350,
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
