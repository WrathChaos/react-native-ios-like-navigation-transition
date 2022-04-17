import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { isAndroid } from "@freakycoder/react-native-helpers";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import HomeScreen from "../screens/Home";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const RootStack = () => (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalTransition),
      }}
    >
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: "modal",
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: "modal",
        }}
      >
        <Stack.Screen name="detail" component={DetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="home-stack" children={RootStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
