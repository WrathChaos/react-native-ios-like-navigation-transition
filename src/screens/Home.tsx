import { ScreenWidth } from "@freakycoder/react-native-helpers";
import React from "react";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface HomeScreenProps {
  style?: CustomStyleProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ style }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Image
          borderTopLeftRadius={32}
          style={{
            height: 300,
            width: 300,
            marginLeft: 16,
            marginTop: 32,
            marginRight: 32,
            borderWidth: 3,
            borderColor: "#fff",
            zIndex: 9,
          }}
          source={require("../assets/sonnie-hiles-rX8gBeg2WM0-unsplash.jpg")}
        />
        <View
          style={{
            height: 100,
            width: 200,
            borderWidth: 15,
            borderTopLeftRadius: 32,
            top: 20,
            right: -16,
            borderBottomLeftRadius: 32,
            position: "absolute",
            borderColor: "#f5effe",
            backgroundColor: "#fff",
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 10,
          borderColor: "#fff",
          position: "absolute",
          top: 200,
          right: 0,
          borderTopLeftRadius: 45,
          borderBottomLeftRadius: 45,
        }}
      >
        <Image
          borderTopLeftRadius={32}
          borderBottomLeftRadius={32}
          style={{
            height: 300,
            width: ScreenWidth * 0.35,
          }}
          source={require("../assets/kyle-smith-tlowJ-oYAjU-unsplash.jpg")}
        />
      </View>
      <View
        style={{
          width: ScreenWidth * 0.56,
          borderWidth: 10,
          marginTop: 16,
          marginLeft: 6,
          borderColor: "#fff",
          borderTopLeftRadius: 45,
          borderBottomRightRadius: 45,
        }}
      >
        <Image
          borderBottomRightRadius={32}
          style={{
            height: 250,
            width: ScreenWidth * 0.56,
          }}
          source={require("../assets/jacob-bentzinger-MThIIpW8rpU-unsplash.jpg")}
        />
      </View>
      <View
        style={{
          zIndex: -1,
          right: -16,
          bottom: 225,
          width: 200,
          height: 75,
          borderWidth: 15,
          borderTopLeftRadius: 32,
          borderBottomLeftRadius: 32,
          position: "absolute",
          borderColor: "#f5effe",
          backgroundColor: "#fff",
        }}
      />
      <TouchableOpacity
        style={{
          height: 75,
          marginTop: 32,
          width: ScreenWidth * 0.65,
          borderTopLeftRadius: 32,
          borderBottomRightRadius: 32,
          backgroundColor: "#e3a59a",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          NavigationService.push("detail");
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>
          Let's Start Traning
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
