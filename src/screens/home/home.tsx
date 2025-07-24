import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "./components/header";
import TaskList from "./components/taskList";

const Home: FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <TaskList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(15,15,35)",
  },
});

export default Home;
