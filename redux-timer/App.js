import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";

// reducer를 redux Store( 전체가 사용 가능한 가상 공간)에 쑤셔 넣고 시작

class App extends React.Component {
  render() {
    return <Timer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
