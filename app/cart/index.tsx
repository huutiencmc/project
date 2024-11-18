import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import RedirectPage from "@/components/RedirectPage";
import NavBar from "@/components/navBar";

const Cart = () => {
  const [quantity, setQuantity] = useState(1); // Quản lý số lượng sản phẩm

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header & Navbar */}
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/images/cart.png")}
          />
          <NavBar />
        </View>
      </View>

      {/* Main Body */}
      <ScrollView style={styles.mainBody}>
        {/* Cart Item */}
        <View style={[styles.flex, styles.cartItem]}>
          <Image
            style={styles.cartImage}
            source={require("../../assets/images/cart.png")}
          />
          <View style={styles.cartDetails}>
            <Text style={styles.productName}>Hamburger</Text>
            <Text style={styles.productDescription}>
              No onions, extra chicken
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currentPrice}>50.000d</Text>
              <Text style={styles.oldPrice}>70.000d</Text>
            </View>
          </View>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <TouchableHighlight
              onPress={decreaseQuantity}
              style={styles.quantityButton}
              underlayColor="#ddd"
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableHighlight>
            <Text style={styles.quantityText}>
              {quantity.toString().padStart(2, "0")}
            </Text>
            <TouchableHighlight
              onPress={increaseQuantity}
              style={styles.quantityButton}
              underlayColor="#ddd"
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>

      {/* Redirect Page */}
      <RedirectPage
        isCheckout={false}
        name="Payment"
        path="/checkout"
        style={styles.redirectPage}
      />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#F5CB58",
  },
  container: {
    backgroundColor: "#F5CB58",
    marginBottom: 60,
  },
  navBar: {},
  headerImage: {
    width: "100%",
    backgroundColor: "#F5CB58",
  },
  mainBody: {
    flex: 1,
    backgroundColor: "#fff",
    position: "absolute",
    top: 200,
    width: "100%",
    height: 600,
    padding: 20,
    borderRadius: 40,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 10,
  },
  cartImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  cartDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  productDescription: {
    fontSize: 14,
    color: "#555",
  },
  priceContainer: {
    marginTop: 5,
  },
  currentPrice: {
    fontWeight: "bold",
    color: "#E95322",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    fontWeight: "bold",
    color: "#9CA4AB",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9CA4AB",
    borderRadius: 20,
    padding: 5,
    width: 80,
    justifyContent: "space-between",
  },
  quantityButton: {
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  redirectPage: {
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
