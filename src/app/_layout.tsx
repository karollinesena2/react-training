import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack, Link } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import Realm from "../providers/Realm";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function RootLayout() {
  return (
    <>
    <ThemeProvider value={DarkTheme}>
      <Realm>
        <Stack screenOptions={{}}></Stack>
      </Realm>
    </ThemeProvider>
      <StatusBar style="light" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});