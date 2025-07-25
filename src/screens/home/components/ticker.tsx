import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface Props {
  isTick: boolean;
  onToggle: () => void;
}

const Ticker: FC<Props> = ({ isTick, onToggle }) => {
  return (
    <Pressable
      style={isTick ? styles.active : styles.inActive}
      onPress={onToggle}
    ></Pressable>
  );
};

const styles = StyleSheet.create({
  inActive: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#64748B",
  },
  active: {
    width: 30,
    height: 30,
    backgroundColor: "#10B981",
    borderRadius: 50,
    borderColor: "#64748B",
    borderWidth: 2,
  },
});

export default Ticker;
