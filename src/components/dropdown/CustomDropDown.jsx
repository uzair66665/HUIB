//
//  Maidan Mobile App
//
//  Created by Muhammad Uzair on 09/06/2023
//
//  Company: Codistan Pvt ltd.
//
//  Current developer: Muhamamd Uzair
//

import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SvgXml } from "react-native-svg";
import { downArrow } from "../../assets/svg";
import { NestableScrollContainer } from "react-native-draggable-flatlist";
import styles from "./Style";

const CustomDropDown = (props) => {
  const [showOption, setshowOption] = useState(false);
  const onSelectedItem = (item) => {
    setshowOption(false);
    props.onSelect(item);
  };
  let text = props?.value?.Actions
    ? props.value.LowerRange + "-" + props.value.UpperRange
    : props.value;
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => setshowOption(!showOption)}
      >
        {!!props.value ? (
          <Text style={styles.text}>{text}</Text>
        ) : (
          <Text style={styles.text}>Select</Text>
        )}
        <SvgXml
          xml={downArrow}
          style={{ transform: [{ rotate: showOption ? "180deg" : "0deg" }] }}
        />
      </TouchableOpacity>
      <View>
        {/* List */}
        {showOption && (
          <View style={styles.listContainer}>
            <NestableScrollContainer
              nestedScrollEnabled={true}
              contentContainerStyle={{}}
            >
              {props.data.length === 0 ? (
                <Text style={styles.noDataText}>No data found</Text>
              ) : (
                props.data.map((item, i) => {
                  let itemText = item?.Actions
                    ? item.LowerRange + "-" + item.UpperRange
                    : item;
                  return (
                    <TouchableOpacity
                      key={i}
                      activeOpacity={2.8}
                      onPress={() => onSelectedItem(item)}
                      style={styles.listButtons}
                    >
                      <Text style={styles.text}>{itemText}</Text>
                    </TouchableOpacity>
                  );
                })
              )}
            </NestableScrollContainer>
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomDropDown;
