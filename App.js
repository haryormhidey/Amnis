import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorChangeButton from "./source/proj";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const App = () => {
  return (
    <View style={style.container}>
       <AntDesign name={"left"} size={50} color={"black"} />
     
      <Text style={style.textLayout}>settings</Text>
      <View style={style.background}>
        <Text>General</Text>

        <View style={style.feedbackview}>
          <EvilIcons
            style={style.icon}
            name={"like"}
            size={25}
            color={"black"}
          />
          <View>
            <Text style={style.text}>Leave feedback</Text>
            <Text> Let us know how you like this app!</Text>
          </View>
        </View>

        <View style={style.viewLayOut}>
          <View style={style.switchview}>
            <Entypo name={"switch"} size={15} color={"black"} />

            <View>
              <Text style={style.text}>Switch themes</Text>
              <ColorChangeButton />
            </View>
          </View>

          <View>
            <View style={style.cacheview}>
            <AntDesign name={"earth"} size={15} color={"black"} />
              <Text style={style.text}>Clear cache</Text>
            </View>


            <View style={style.FAQview}>
            <AntDesign name={"questioncircleo"} size={15} color={"black"} />
            <View>
            <Text style={style.text}>FAQ</Text>
            </View>
              
              
            </View>
          </View>

          <Text>General</Text>

          <View style={style.dataview}>
          <AntDesign name={"exclefile1"} size={15} color={"black"} />
            <Text style={style.text}>Data privacy terms</Text>
          </View>

          <View style={style.termsview}>
          <AntDesign name={"copy1"} size={15} color={"black"} />
            <Text style={style.text}>Terms and conditions</Text>
          </View>
          <Entypo name={"log-out"} size={15} color={"black"} />
          <Text style={style.footer}>Sign out</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 5,
  },
  background: {
    marginTop: 30,
    backgroundColor: "rgba(231, 231, 240, 0.38)",
    flexDirection: "column",
    marginRight: 5,
    // height:'80%'
  },
  viewLayOut: {
    borderRadius: 20,
    backgroundColor: "rgba(231, 231, 240, 0.38)",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",

    flexDirection: "column",
  },
  icon: {
    justifyContent: "center",
    flexDirection: "column",
  },
  feedbackview: {
    flexDirection: "row",
    marginTop: "auto",
    backgroundColor: "#fff",
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    alignItems: "center",
    borderRadius: 11,
    marginTop: 15,
    height: 80,
  },
  switchview: {
    flexDirection: "row",
    marginTop: "auto",
    backgroundColor: "#fff",
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    alignItems: "center",
    // borderRadius: 11,
    marginTop: 15,
    height: 80,
  },
  cacheview: {
    flexDirection: "row",
    marginTop: "auto",
    backgroundColor: "#fff",
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    alignItems: "center",
    // borderRadius: 11,
    marginTop: 2,
    height: 80,
  },
  FAQview: {
    flexDirection: "row",
    marginTop: "auto",
    backgroundColor: "#fff",
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    alignItems: "center",
    // borderRadius: 11,
    height: 80,
  },
  dataview: {
    flexDirection: "row",
    marginTop: "auto",
    backgroundColor: "#fff",
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    alignItems: "center",
    borderRadius: 11,
    marginTop: 15,
    height: 80,
  },
  termsview: {
    flexDirection: "row",
    marginTop: "auto",
    backgroundColor: "#fff",
    gap: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    alignItems: "center",
    borderRadius: 11,
    marginTop: 15,
    height: 80,
  },
  textLayout: {
    justifyContent: "center",
    marginLeft: 25,

    fontSize: 25,
    fontWeight: "100",
  },
  footer: {},
});
export default App;
