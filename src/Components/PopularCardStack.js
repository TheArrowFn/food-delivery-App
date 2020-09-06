import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PopularCardStack = () => {
  const dummyText1 = "According to an \nold family recipe";
  const dummyText2 = "Ricipe from our\ngrandfather";
  return (
    <View style={style.mainViewStyle}>
      <Text style={style.headerTextStyle}>Cuisines</Text>
      <View style={style.stackViewStyleOne}>
        <View style={style.stackViewStyle}>
          <View style={[style.cardView, style.colorGray]}>
            <Text style={style.cardHeaderStyle}>Mexican</Text>
            <Text style={style.normalTextStyle}>{dummyText1}</Text>
            <View style={style.insideView}>
              <Text>4.9</Text>
              <FontAwesome name="star" color="#75CD81" size="17" />
            </View>

            <Image
              style={style.imageStyle}
              source={require("../assets/fries.png")}
            />
          </View>
          <View style={[style.cardView, style.colorBlack]}>
            <Text style={[style.cardHeaderStyle, style.textColorWhiteHeader]}>
              American
            </Text>
            <Text style={[style.normalTextStyle, style.textColorWhiteDummy]}>
              {dummyText2}
            </Text>
            <View style={style.insideView}>
              <Text style={style.textColorWhiteHeader}>5.0</Text>
              <FontAwesome name="star" color="#75CD81" size="17" />
            </View>
            <Image
              style={style.imageStyle}
              source={require("../assets/hotDog.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  insideView: {
    flexDirection: "row",
    marginTop: 5,
  },
  imageStyle: {
    alignSelf: "flex-end",
  },
  cardView: {
    flexDirection: "column",
    padding: 5,
    alignSelf: "center",
    height: hp("25%"),
    width: wp("13%"),
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
  },
  colorBlack: {
    backgroundColor: "#000000",
  },
  colorGray: {
    backgroundColor: "#f8f8f8",
  },
  normalTextStyle: {
    fontSize: 12,
    marginTop: 15,
    color: "#A1A1A1",
  },
  stackViewStyleOne: {
    flexDirection: "column",
    marginTop: 20,
  },
  stackViewStyle: {
    flexDirection: "row",
    marginTop: 20,
  },
  headerTextStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textColorWhiteHeader: {
    color: "#ffffff",
  },
  textColorWhiteDummy: {
    color: "#797a7e",
  },
  mainViewStyle: {
    marginTop: 40,
    marginStart: 20,
  },
  cardHeaderStyle: {
    alignSelf: "flex-start",
    marginTop: 8,
  },
});

export default PopularCardStack;
