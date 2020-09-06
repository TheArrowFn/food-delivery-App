import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import CardBigGray from "../Components/CardBigGray";
import CuisinesStack from "../Components/CuisinesCardStack";
import PopularCardStack from "../Components/PopularCardStack";

const FoodDeliveryLandingScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <CardBigGray />
        <CuisinesStack />
        <PopularCardStack />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: "#ffffff",
  },
});
export default FoodDeliveryLandingScreen;
