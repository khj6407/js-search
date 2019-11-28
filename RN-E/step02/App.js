import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

class App extends React.Component {
  render() {
    return (
      <LinearGradient colors={["#fff", "#076585"]} style={styles.container}>
        <Text style={styles.text}>
          <Entypo name="leaf" style={styles.leaf} />
          4LEAF LOGIN
        </Text>
        <TextInput style={styles.id} placeholder="ID" />
        <TextInput
          style={styles.pw}
          placeholder="PASSWORD"
          secureTextEntry={true}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ width: 30 }}></View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  id: {
    width: 220,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    marginTop: 30
  },
  pw: {
    width: 220,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 10,
    marginTop: 10
  },
  btnArea: {
    flexDirection: "row",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  btn: {
    width: 80,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: "#130f40",
    borderColor: "white",
    padding: 8,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  btnTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  leaf: {
    color: "#30336b",
    fontSize: 30,
    fontWeight: "bold"
  },
  forgot: {
    color: "#dfe4ea",
    marginTop: 15,
    fontSize: 16
  }
});

export default App;
