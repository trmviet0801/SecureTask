import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Ticker from "./ticker";

interface Props {
  title: string;
  tags: string[];
  isTick: boolean;
  onToggle: () => void;
}

const TaskItem: FC<Props> = ({ title, tags, isTick, onToggle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/** Ticker */}
        <Ticker isTick={isTick} onToggle={onToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //paddingHorizontal: 12,
    backgroundColor: "#334155",
    width: "100%",
    borderRadius: 16,
    height: 100,
    justifyContent: "flex-end",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 0.99,
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 12,
  },
});

export default TaskItem;
