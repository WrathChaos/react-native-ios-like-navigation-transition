import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <Navigation />
    </>
  );
}
