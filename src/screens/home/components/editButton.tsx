import { FC } from "react";
import { StyleSheet, View } from "react-native";
import EditIcon from "./icons/editIcon";

interface Props {
  onClickHandle: (id: number) => void;
}

const EditButton: FC<Props> = ({ onClickHandle }: Props) => {
  return (
    <View style={styles.container}>
      <EditIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#374151",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditButton;
