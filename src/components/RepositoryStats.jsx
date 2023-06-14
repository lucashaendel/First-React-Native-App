import React from "react";
import { View } from "react-native";
import StyledTdext from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledTdext align="center" fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledTdext>
        <StyledTdext align="center">Stats</StyledTdext>
      </View>
      <View>
        <StyledTdext align="center" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledTdext>
        <StyledTdext align="center">Forks</StyledTdext>
      </View>
      <View>
        <StyledTdext align="center" fontWeight="bold">
          {parseThousands(props.reviewCount)}
        </StyledTdext>
        <StyledTdext align="center">Review</StyledTdext>
      </View>
      <View>
        <StyledTdext align="center" fontWeight="bold">
          {parseThousands(props.ratingAverage)}
        </StyledTdext>
        <StyledTdext align="center">Rating</StyledTdext>
      </View>
    </View>
  );
};

export default RepositoryStats;
