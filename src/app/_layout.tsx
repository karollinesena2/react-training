import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack, Link } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import Realm from "../providers/Realm";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Realm>
        <Stack
          screenOptions={{
            headerRight: () => (
              <View style={{ gap: 10, flexDirection: "row" }}>
                <Link href="/login">
                  <FontAwesome name="sign-in" size={24} color="lightgray" />
                </Link>
                <Link href="/profile">
                  <FontAwesome5 name="house-user" size={24} color="lightgray" />
                </Link>
              </View>
            ),
          }}
        />
      </Realm>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});