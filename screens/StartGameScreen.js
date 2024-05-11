import { View, Text, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;
