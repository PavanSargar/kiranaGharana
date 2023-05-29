import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";
import BackIcon from "react-native-vector-icons/AntDesign";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const CartItem = ({ navigation }) => {
  const { language } = useContext(AppContext);
  const { t } = useTranslation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <Image
        style={styles.image}
        source={{
          uri: "https://m.media-amazon.com/images/I/71xY+NCm-yL._AC_UF1000,1000_QL80_.jpg",
        }}
      />
      <View style={styles.description}>
        <Text style={styles.productTitle}>{t("itemName")}</Text>
        <Text style={styles.productDescription}>{t("itemDescription")}</Text>
      </View>

      <View style={styles.detail}>
        <Text style={styles.itemDetail}>2 {t("kilogram")}</Text>
        <Text style={styles.discount}>₹ 390</Text>
        <Text style={styles.price}>₹ 280</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    justifyContent: "space-between",
    width: "85%",
    // rowGap
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    marginLeft: 5,
  },
  image: {
    height: 75,
    width: 75,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 7,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  description: {
    // marginLeft: -15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 700,
    width: "80%"
  },
  productDescription: {
    fontSize: 12,
    color: "grey",
    width: "75%",
  },
  detail: {
    marginLeft: -40,
    display: "flex",
    alignItems: "flex-end",
  },
  itemDetail: {
    backgroundColor: "#FFEAE6",
    padding: 5,
    color: "red",
    fontSize: 10,
    fontWeight: 700,
  },
  discount: {
    color: "#C6D4CB",
  },
  price: {
    color: "#3A6B49",
    fontSize: 20,
    fontWeight: 700,
  },
});
