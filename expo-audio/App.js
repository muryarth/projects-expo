import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import TocaSom from "./src/telas/TocaSom";

export default function App() {
  return (
    <SafeAreaView style={styles.content}>
      <StatusBar />
      <TocaSom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
