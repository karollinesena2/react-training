import {View, Text, FlatList} from 'react-native';
import TaskListItem from './TaskListItem'
import { useState } from 'react';

export default function TaskList(){
    const[tasks,setTasks] = useState([
        {description: 'First Task' },
        {description: 'Second Task'}
    ])


   return(
    <View style={{backgroundColor: '#101112', padding: 10, borderRadius: 5}}>
        <Text
        style={{
            color:'white',
            fontWeight:'bold',
            fontSize:20,
            marginVertical:10,
        }}>
            ToDo
        </Text>
        {/* the list of tasks*/}
        <FlatList data={tasks}
        contentContainerStyle={{ gap:5}}
         renderItem={({item}) => <TaskListItem task={item} />}
      />
        {/*New task input*/}

    </View>
   );
}