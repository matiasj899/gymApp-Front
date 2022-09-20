import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function SwitchComponent(props) {
  const handlePress = () => {};
  return (
    <View style={styles.switchCreateProfileContainer}>
      <TouchableOpacity
        onPress={() => handlePress(props.onPressLeft, props.leftText)}
        style={[
          styles.button,
          styles.buttonJob,
          props.leftActive
            ? styles.buttonActive
            : [
                styles.buttonInactive,
                (props.CreateProfileScreen || props.negative) && {
                  backgroundColor: "grey",
                },
              ],
          { height: 40 },
        ]}
      >
        <Text
          style={[
            styles.text,
            props.leftActive
              ? styles.texActive
              : [
                  styles.textInactive,
                  props.negative && { color: "white" },
                  props.CreateProfileScreen && { color: "white" },
                ],
          ]}
        >
          {props.leftText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress(props.onPressRight, props.RightText)}
        style={[
          styles.button,
          styles.buttonCommerce,
          !props.leftActive
            ? styles.buttonActive
            : [
                styles.buttonInactive,
                props.CreateProfileScreen && {
                  backgroundColor: "grey",
                },
                props.negative && { backgroundColor: "grey" },
              ],
          { height: 40 },
        ]}
      >
        <Text
          style={[
            styles.text,
            !props.leftActive
              ? styles.texActive
              : [styles.textInactive, props.negative && { color: "white" }],
          ]}
        >
          {props.RightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
