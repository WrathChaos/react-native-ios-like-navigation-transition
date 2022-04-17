import React from "react";
import { View, ScrollView } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";
import { AppleCard } from "react-native-apple-card-views";

import menuImage from "../assets/menu.png";
import searchImage from "../assets/search.png";

const DetailScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#fff" }}>
      <GorgeousHeader
        title="Traning"
        subtitle="Let's loose booty fat and make great abs"
        menuImageSource={menuImage}
        searchImageSource={searchImage}
        titleTextStyle={{
          fontSize: 46,
          color: "#e3a29a",
          fontWeight: "bold",
        }}
        profileImageSource={require("../assets/taylor-hernandez-STiVSlutjt8-unsplash.jpg")}
        placeholder="Search for your fav traning..."
        placeholderTextColor="#fff"
        searchBarStyle={{
          padding: 16,
          marginTop: 24,
          borderRadius: 24,
          flexDirection: "row",
          backgroundColor: "#e3a29a",
        }}
      />
      <ScrollView
        style={{ marginTop: 32 }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        contentInset={{ bottom: 64 }}
      >
        <AppleCard
          smallTitle="Kickbox"
          largeTitle="Let's Rock with Kickbox"
          footnoteText="You will learn kickboxing and burn calories with lots of fun with our professional trainers"
          resizeMode="cover"
          source={require("../assets/max-libertine-Pi4MOqVb85c-unsplash.jpg")}
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
