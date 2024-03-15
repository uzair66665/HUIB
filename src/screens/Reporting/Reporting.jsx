import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import images from "../../assets/images";
import { CustomDropDown } from "../../components";
import { SvgXml } from "react-native-svg";
import { camera } from "../../assets/svg";

const Reporting = () => {
  const [tester, settester] = useState(null);
  const testers = [
    { id: 1, name: "1111 111111 1 1111111111111111111" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];
  const onSelectTester = (item) => {
    settester(item);
    console.log(item);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1000,
        }}
      >
        <View>
          {/* Heading  */}
          <Text style={styles.mainHeading}>Hub Temperature Reporting App</Text>
          {/* Form 1 */}
          <View style={styles.form1}>
            {/* Tester */}
            <Text style={styles.label}>Tester</Text>
            <CustomDropDown
              value={tester}
              data={testers}
              onSelect={onSelectTester}
            />

            {/* Truck */}
            <Text style={styles.label}>Truck</Text>
            <CustomDropDown
              value={tester}
              data={testers}
              onSelect={onSelectTester}
            />

            {/* Date/Time */}
            <Text style={styles.label}>Date/Time</Text>
            <Text style={styles.time}></Text>

            {/* Complies */}
            <Text style={styles.label}>Complies</Text>
            <CustomDropDown
              value={tester}
              data={testers}
              onSelect={onSelectTester}
            />
          </View>
        </View>
        <Image source={images.logo} />
      </View>

      <View style={styles.separator} />

      {/* Form 2 */}
      <View style={styles.form2}>
        <View style={[styles.form1, { zIndex: 900 }]}>
          {/* Tester */}
          <View>
            <Text style={styles.label}>Prime</Text>
            <Text style={styles.label}>Mover</Text>
          </View>
          <CustomDropDown
            value={tester}
            data={testers}
            onSelect={onSelectTester}
          />

          {/* Truck */}
          <Text style={styles.label}>Reading</Text>
          <CustomDropDown
            value={tester}
            data={testers}
            onSelect={onSelectTester}
          />

          {/* Date/Time */}
          <View>
            <Text style={styles.label}>Required</Text>
            <Text style={styles.label}>Action</Text>
          </View>
          <Text style={styles.time}></Text>

          {/* Date/Time */}
          <Text style={styles.label}>Comments</Text>
          <Text style={[styles.time, { flex: 1 }]}></Text>
        </View>

        <View style={[styles.form1, { zIndex: 800 }]}>
          {/* Tester */}
          <View>
            <Text style={styles.label}>Trailer</Text>
            <Text style={styles.label}>Dolly</Text>
          </View>
          <CustomDropDown
            value={tester}
            data={testers}
            onSelect={onSelectTester}
          />

          {/* Truck */}
          <Text style={styles.label}>Reading</Text>
          <CustomDropDown
            value={tester}
            data={testers}
            onSelect={onSelectTester}
          />

          {/* Date/Time */}
          <View>
            <Text style={styles.label}>Required</Text>
            <Text style={styles.label}>Action</Text>
          </View>
          <Text style={styles.time}></Text>

          {/* Date/Time */}
          <Text style={styles.label}>Reported</Text>
          <Text style={styles.time}></Text>

          <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separator} />

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>
          <Image style={styles.camera} source={images.camera} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Reporting;
