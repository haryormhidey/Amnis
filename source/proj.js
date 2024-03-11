import React, { useState } from "react";
import { Text, Switch, View, StyleSheet } from "react-native";

const colorChangeButton = () => {
  const [backgroundColor, setbackgroundColor] = useState("white");
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleMenu = () => {
    setisDarkMode(!isDarkMode);
    setbackgroundColor(isDarkMode ? "white" : "black");
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleMenu}
        value={isDarkMode}
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  switch: {
    alignItems: "flex-start",
  },
});

export default colorChangeButton;
