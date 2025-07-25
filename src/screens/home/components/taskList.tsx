import { FC, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import TaskItem from "./taskItem";

export type Task = {
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
    tag: ["Medium", "Security", "555 days ago"],
    isTick: false,
  },
  {
    id: 2,
    title: "Review security protocols",
    tag: ["Low", "Security", "555 days ago"],
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

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Task>) => {
    return (
      <ScaleDecorator>
        <Pressable onLongPress={drag} disabled={isActive}>
          <TaskItem
            id={item.id}
            isTick={item.isTick}
            onToggle={() => toggleTask(item.id)}
            tags={item.tag}
            title={item.title}
          />
        </Pressable>
      </ScaleDecorator>
    );
  };

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={tasks}
        onDragEnd={({ data }) => setTasks(data)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      ></DraggableFlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "column",
    gap: 10,
  },
});

export default TaskList;
