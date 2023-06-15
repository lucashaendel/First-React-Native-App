import React from "react";
import { ViewPropsAndroid, StyleSheet } from "react-native";
import StyledTdext from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledTdext fontWeight="bold" style={styles.text}>
        Repositories
      </StyledTdext>
    </View>
  );
};

export default AppBar;
