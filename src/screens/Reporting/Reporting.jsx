import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Style";
import images from "../../assets/images";

const Reporting = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.mainHeading}>Hub Temperature Reporting App</Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text>Tester</Text>
          </View>
        </View>
        <Image source={images.logo} />
      </View>
    </View>
  );
};

export default Reporting;
