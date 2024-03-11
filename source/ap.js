


import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import Item from "./source/Item";
const App =()=>  {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1493766948/photo/female-developers-using-ai-writes-the-code-for-data-analytics.webp?s=1024x1024&w=is&k=20&c=eX7KoUYW6RidOEwxQ192WwopPGFe6V_FG_iGN0nXa7k=",
              }}
              style={styles.ImageLayout}
            />
           
          </View>
          <Text>welcome to the world of programming</Text>
          <View>
            <TextInput
              defaultValue="Enter your name"
              placeholder="User@gmail.com"
            />
            <TextInput placeholder="password" />

            <Item level="ND 2" />
          </View>
          <View>
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1301599521/photo/hacker.jpg?s=2048x2048&w=is&k=20&c=lS_g8b1irwQMDQsqrxsI25sh4hub9HEObofVeiMJ42M=",
              }}
              style={styles.ImageLayout}
            />
           <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse"
  },
  ImageLayout:{
    width:200,
    height:200,
  },
});

export default App;
