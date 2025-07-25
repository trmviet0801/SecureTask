import { FC } from "react";
import { StyleSheet, View } from "react-native";
import EditIcon from "./icons/editIcon";
import RemoveIcon from "./icons/removeIcon";

interface Props {
  onClickHandle: (id: number) => void;
}

const RemoveButton: FC<Props> = ({ onClickHandle }: Props) => {
  return (
    <View style={styles.container}>
      <RemoveIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RemoveButton;
