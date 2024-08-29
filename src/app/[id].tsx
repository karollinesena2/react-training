import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useObject, useRealm } from "@realm/react";
import { Task } from "../models/Task";
import { BSON, Realm } from "realm";
import { useState } from "react";

export default function TaskDetails() {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description
  );

  const realm = useRealm();

  const updateDescription = () => {
    if (!task) return;

    realm.write(() => {
      task.description = updatedDescription;
    });
  };

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />
      <Text style={styles.text}>id: {task._id.toString()}</Text>
      <Text style={styles.text}>
        Create Date: {task.createdAt.toDateString()}
      </Text>
      <Text style={styles.text}>
        Complete: {task.isComplete ? "Yes" : "No"}
      </Text>
      <Text style={styles.text}>User: {task.user_id}</Text>
      <TextInput
        value={updatedDescription}
        onChangeText={setUpdatedDescription}
        onEndEditing={updateDescription}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  input: {
    color: "white",
    fontSize: 20,
    backgroundColor: "green",
  },
});