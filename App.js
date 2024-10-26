'use client'
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import ToDoList from "./src/ToDoList";

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
      <h1>To-Do List</h1>
      <ToDoList tasks={tasks}/>
      <ToDoList addTask={addTask} tasks={tasks}/>
    </View>
  );
}