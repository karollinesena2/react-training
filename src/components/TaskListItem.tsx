import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface task {
    description: string
}

interface TaskListItemProps {
    task: task;
}

export default function TaskListItem({task} : TaskListItemProps) {
  return(
    <View style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign name="close" size={16} color="gray" />
    </View>
 )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1D2125',
        padding: 15,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text: {
        color: 'white',
        fontSize: 16,

    }
    

})