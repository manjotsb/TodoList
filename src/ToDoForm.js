'use client'
import React from 'react';
import {View,TextInput, Button} from 'react-native';

export default function ToDoForm({addTask, task}) {
    const [setTaskText, taskText] = useState('');

    const handleAddTask = () => {

        const newTask = taskText.trim();
        if (newTask !== '' && !task.includes(newTask)) {
            addTask(newTask);
            setTask('');
        }
    };

    return(
        <View>
            <TextInput
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
                placeholder="Add a new task..."/>

            <Button title="Add task" onPress={() => handleAddTask()}/>
        </View>
    );
}