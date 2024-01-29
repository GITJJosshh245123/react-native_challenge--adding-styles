import React from "react";
import { View, Text, Image, ___ } from "react-native"; // Step 1

const App = () => {
  return (
    // Step 4
    <View ___={___}>
      <Text>The first line of text in the app.</Text>
      <Image
        source={{
          uri: "https://codefinity-content-media-v2.s3.eu-west-1.amazonaws.com/courses/9cad8004-02f1-46b0-a31a-e39addcbc716/basic-concepts/react-native-logo.png",
        }}
        width={64}
        height={64}
      />
    </View>
  );
};

export default App;

// Step 2
const ___ = ___.create({
  //  Step 3
  //  ...
});
