import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RequiredConstants from "../constants/RequiredConstants";

const bigGrayImage = "../assets/samosa.png";
const CardBigGray = () => {
  let headerText = "50% off the full\nrange of Indian food";
  return (
    <View style={style.parentStyleView}>
      <View style={style.mainCardView}>
        <View>
          <Text style={style.headerTextStyle}>{headerText}</Text>
          <Text style={style.normalTextStyle}>Valid till June 10</Text>
        </View>
        <Image style={style.imageViewStyle} source={require(bigGrayImage)} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainCardView: {
    flexDirection: "row",
    padding: 10,
    marginTop: hp("3%"),
    alignSelf: "center",
    backgroundColor: "#f8f8f8",
    height: hp("15%"),
    width: wp("90%"),
    borderRadius: 10,
    flex: 1,
  },
  parentStyleView: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
  headerTextStyle: {
    fontSize: 16,
    color: "#121212",
    fontWeight: "bold",
  },
  normalTextStyle: {
    fontSize: 12,
    marginTop: 15,
    color: "#A1A1A1",
  },
  imageViewStyle: {
    resizeMode: "contain",
    marginLeft: wp("19"),
  },
});

export default CardBigGray;
