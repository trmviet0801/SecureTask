import { FC, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import TaskItem from "./taskItem";

type Task = {
  id: number;
  title: string;
  tag: string[];
  isTick: boolean;
};

const tempData: Task[] = [
  {
    id: 0,
    title: "Review security protocols",
    tag: ["High", "Security", "555 days ago"],
    isTick: false,
  },
  {
    id: 1,
    title: "Review security protocols",
    tag: ["High", "Security", "555 days ago"],
    isTick: false,
  },
  {
    id: 2,
    title: "Review security protocols",
    tag: ["High", "Security", "555 days ago"],
    isTick: false,
  },
];

const TaskList: FC = () => {
  const [tasks, setTasks] = useState(tempData);

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].isTick = !updated[index].isTick;
    setTasks(updated);
  };

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "column",
    gap: 10,
  },
});

export default TaskList;
