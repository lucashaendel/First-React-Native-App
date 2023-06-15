import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledTdext from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>

      <View style={{ flex: 1 }}>
        <StyledTdext fontSize="subheading" fontWeight="bold">
          {fullName}
        </StyledTdext>
        <StyledTdext color="secondary">{description}</StyledTdext>
        <StyledTdext style={styles.language}>{language}</StyledTdext>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    // marginTop: 4,
    // marginBottom: 4,
    marginVertical: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
export default RepositoryItem;
