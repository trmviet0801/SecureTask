import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Header: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/** Left side */}
        <View style={styles.leftContainer}>
          {/* Secure connection status */}
          <View style={styles.inlineContainer}>
            <View style={styles.circle}></View>
            <Text style={styles.label}>Secure Connection</Text>
          </View>
          {/** Title */}
          <Text style={styles.title}>Tasks</Text>
          {/** Counter */}
          <Text style={styles.label}>5 active, 1 completed</Text>
        </View>
        {/** Right side */}
        <View style={styles.rightContainer}>
          {/** Add new task */}
          <Pressable onPress={() => console.log("object")}>
            <LinearGradient
              style={styles.rectangle}
              colors={["#7C3AED", "#4C1D95"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.plus}>+</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plus: {
    fontSize: 26,
    color: "white",
  },
  rectangle: {
    width: 80,
    height: 80,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1E293B",
  },
  subContainer: {
    padding: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "column",
    gap: 5,
  },
  rightContainer: {},
  inlineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  label: {
    color: "rgb(100,116,139)",
    fontSize: 12,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "rgb(16,185,129)",
    borderRadius: 50,
  },
});

export default Header;
