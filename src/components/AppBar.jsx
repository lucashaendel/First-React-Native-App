import React from "react";
import { ViewPropsAndroid, StyleSheet } from "react-native";
import StyledTdext from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { View } from "react-native";
import { Link } from "react-router-native";

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

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledTdext fontWeight="bold" style={styles.text}>
        {children}
      </StyledTdext>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to="/">
        {" "}
        Repositories{" "}
      </AppBarTab>
      <AppBarTab active to="/signin">
        {" "}
        sign In{" "}
      </AppBarTab>
    </View>
  );
};

export default AppBar;
