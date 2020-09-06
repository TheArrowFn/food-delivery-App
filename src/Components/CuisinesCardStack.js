import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import SmallCard from "./SmallCards";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CuisinesStack = () => {
  return (
    <View style={style.mainViewStyle}>
      <Text style={style.headerTextStyle}>Cuisines</Text>

      <View style={style.stackViewStyle}>
        <View style={style.cardView}>
          <Text style={style.cardHeaderStyle}>Italian</Text>
          <Image
            style={style.imageStyle}
            source={require("../assets/pizza.png")}
          />
        </View>
        <View style={style.cardView}>
          <Text style={style.cardHeaderStyle}>Mexican</Text>
          <Image
            style={style.imageStyle}
            source={require("../assets/taco.png")}
          />
        </View>
        <View style={style.cardView}>
          <Text style={style.cardHeaderStyle}>American</Text>
          <Image
            style={style.imageStyle}
            source={require("../assets/wrap.png")}
          />
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  imageStyle: {
    marginTop: 10,
  },
  cardView: {
    shadowColor: "#3D4044",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 15,
    height: hp("18%"),
    width: wp("25%"),
    marginTop: hp("3%"),
    backgroundColor: "#ffffff",
    marginLeft: 15,
  },
  stackViewStyle: {
    flexDirection: "row",
    marginTop: 20,
  },
  headerTextStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  mainViewStyle: {
    marginTop: 30,
    marginStart: 20,
  },
  cardHeaderStyle: {
    alignSelf: "center",
    marginTop: 8,
  },
});

export default CuisinesStack;
