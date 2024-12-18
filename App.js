import React from "react";
import { View, Text, Image, StyleSheet} from "react-native"; // Step 1

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, StyleSheet!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00FFAB",
        flexdirection: "row",
      }}
    >
      <Text style={{ fontSize: 18, color: "#913F92", margin: 10 }}>
        Hello, Inline Styles!
      </Text>
    </View>
  );
};




