import React from "react";
import {View, Text} from 'react-native';

export default function ToDoList({tasks}) {
    return(
        <View>
            {tasks.map((tasks, index) => (
                <Text key={index}>{tasks}</Text>
            ))}
        </View>
    );
}