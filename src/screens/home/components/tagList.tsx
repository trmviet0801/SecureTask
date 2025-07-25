import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Tag from "./tag";

interface Props {
  tags: string[];
}

const TagList: FC<Props> = ({ tags }: Props) => {
  return (
    <View style={styles.container}>
      {tags.map((tag) => (
        <Tag tag={tag} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
  },
});

export default TagList;
