import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native';
import TaskListItem from './TaskListItem'
import { useState } from 'react';

export default function TaskList(){
    const[tasks,setTasks] = useState([
        {description: 'First Task' },
        {description: 'Second Task'}
    ]);

const [newTask, setNewTask] = useState('')

    const createTask = () => {
        console.warn('Create: ', newTask);
        setTasks([...tasks, {description: newTask}])
        setNewTask('');
    }


   return(
    <View style={styles.Container}>
        <Text
        style={styles.Title}>
            ToDo
        </Text>
        {/* the list of tasks*/}
        <FlatList data={tasks}
        contentContainerStyle={{ gap:5}}
        renderItem={({item}) => <TaskListItem task={item} />}
      />
        {/*New task input*/}
        <TextInput 
        value={newTask}
        onChangeText={setNewTask}
        placeholder ="New Task" 
        placeholderTextColor="gray"
        style={styles.Input}
        />
<Button title = "Add task" onPress={createTask}/>
    </View>
   );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#101112', 
        padding: 10,
        borderRadius: 5,
        gap:5
    },     
    Title:{ 
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },
    Input:{
        color:'white',
        padding:15, 
        backgroundColor: '#1D2125',
        borderRadius: 5,   
    }    

})