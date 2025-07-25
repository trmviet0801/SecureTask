import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ticker from "./ticker";
import TagList from "./tagList";
import LockIcon from "./icons/lockIcon";
import { GetTaskIcons } from "../utils/iconUtils";
import { Task } from "./taskList";
import {
  PriorityLevel,
  TAG_BACKGROUND_COLOR_MAP,
  TAG_COLOR_MAP,
} from "../utils/tagUtils";
import EditButton from "./editButton";
import RemoveButton from "./removeButton";

interface Props {
  id: number;
  title: string;
  tags: string[];
  isTick: boolean;
  onToggle: () => void;
}

const TaskItem: FC<Props> = ({ id, title, tags, isTick, onToggle }) => {
  const { TaskStatusIcon, TaskTypeIcon } = GetTaskIcons({
    id,
    title,
    tag: tags,
    isTick,
  });

  const isPriorityLevel: boolean = Object.keys(PriorityLevel).includes(tags[0]);
  const backgroundColor = isPriorityLevel
    ? TAG_COLOR_MAP[tags[0] as keyof typeof TAG_COLOR_MAP]
    : "#D1D5DB";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, borderRadius: 16 },
      ]}
    >
      <View style={styles.subContainer}>
        {/** Ticker */}
        <Ticker isTick={isTick} onToggle={onToggle} />
        {/** Center block */}
        <View style={styles.centerContainer}>
          {/** Center Top */}
          <View style={styles.centerTopContainer}>
            <Text style={styles.title}>{title}</Text>
            <TagList tags={tags} />
          </View>
          {/** Center bottom */}
          <View style={styles.centerBottomContainer}>
            <LockIcon />
            <Text style={styles.subText}>Encrypted</Text>
          </View>
        </View>
        {/** Left Block */}
        <View style={styles.leftContainer}>
          <View style={styles.leftTopContainer}>
            <TaskStatusIcon width={24} height={24} />
            <TaskTypeIcon width={24} height={24} />
          </View>
          <View style={styles.leftTopContainer}>
            <EditButton onClickHandle={() => {}} />
            <RemoveButton onClickHandle={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftTopContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    alignSelf: "stretch",
  },
  leftContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  subText: {
    color: "#94A3B8",
    fontSize: 16,
  },
  centerBottomContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  centerTopContainer: {
    flexDirection: "column",
    gap: 10,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    //paddingHorizontal: 12,
    //backgroundColor: backgroundColor,
    width: "100%",
    borderRadius: 16,
    justifyContent: "flex-end",
    marginBottom: 12,
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
  centerContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "60%",
    gap: 30,
  },
});

export default TaskItem;
