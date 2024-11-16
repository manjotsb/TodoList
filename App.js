'use client'
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import ToDoList from "./src/components/ToDoList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk Dog',
  ])

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return(
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home Screen" component={HomeScreen}/>
          <Stack.Screen name="About Screen" component={AboutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      <h1>To-Do List</h1>
      <ToDoList tasks={tasks}/>
      <ToDoList addTask={addTask} tasks={tasks}/>
    </View>
  );
}