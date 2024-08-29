import {
    View,
    Text,
    FlatList,
    TextInput,
    Button,
    StyleSheet,
  } from "react-native";
  import TaskListItem from "./TaskListItem";
  import { useState } from "react";
  import { useRealm, useQuery, useUser } from "@realm/react";
  import { Task } from "../models/Task";
  
  export default function TaskList() {
    const realm = useRealm();
    const tasks = useQuery(Task);
    const user = useUser();
  
    const [newTask, setNewTask] = useState("");
  
    const createTask = () => {
      realm.write(() => {
        realm.create(Task, { description: newTask, user_id: user.id });
      });
  
      setNewTask("");
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>To Do</Text>
  
        <FlatList
          data={tasks}
          contentContainerStyle={{ gap: 5 }}
          renderItem={({ item }) => <TaskListItem task={item} />}
        />
  
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="New task"
          placeholderTextColor="gray"
          style={styles.input}
        ></TextInput>
  
        <Button title="Add Task" onPress={createTask} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#101112",
      padding: 15,
      borderRadius: 5,
      gap: 5,
    },
    title: { color: "white", fontWeight: "bold" },
    input: {
      color: "white",
      padding: 15,
      backgroundColor: "#1D2125",
      borderRadius: 5,
    },
  });