import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  PriorityLevel,
  TAG_BACKGROUND_COLOR_MAP,
  TAG_COLOR_MAP,
} from "../utils/tagUtils";

interface Tag {
  tag: string;
}

const Tag: FC<Tag> = ({ tag }: Tag) => {
  const isPriorityLevel: boolean = Object.keys(PriorityLevel).includes(tag);
  const backgroundColor = isPriorityLevel
    ? TAG_BACKGROUND_COLOR_MAP[tag as keyof typeof TAG_BACKGROUND_COLOR_MAP]
    : "#374151";
  const textColor = isPriorityLevel
    ? TAG_COLOR_MAP[tag as keyof typeof TAG_COLOR_MAP]
    : "#D1D5DB";

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={{ color: textColor }}>{tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
});

export default Tag;
