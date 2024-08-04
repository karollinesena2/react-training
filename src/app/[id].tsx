import { View, Text } from "react-native";
import {Stack, useLocalSearchParams} from 'expo-router';

const TaskDetails = () => {
    const {id} = useLocalSearchParams();
    return(
        <View>
            <Stack.Screen options={{title: 'Task Details'}} />
            <Text style={{color: 'white', fontSize: 20}}>Id:{id}</Text>
        </View>
    )
}

export default TaskDetails;