import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import SubItem from "./SubItem";

const Item = (props) => {
  const [name, subName] = useState("OLKOYA");

  return (
    <SafeAreaView>
      <ScrollView>
        <View Style={Style.container}>
          <Text> You Are In {props.level}</Text>
          <SubItem Name="Name" />
          <Text> my name is {name}</Text>
          <Button title="change name" onPress={() => subName("michael")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
  
    flexDirection: 'row',
    alignItems: "center",
  },
});
export default Item;









