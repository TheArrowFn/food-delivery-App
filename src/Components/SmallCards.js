import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SmallCard = (props) => {};

const style = StyleSheet.create({
  cardView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 15,
    height: hp("50%"),
    width: wp("25%"),
    marginTop: hp("4%"),
  },
});

export default SmallCard;
