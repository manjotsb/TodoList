import React from "react";
import {View} from 'react-native';

export default function ToDoList({tasks}) {
    return(
        <ul>
            {tasks.map((tasks, index) => (
                <li key={index}>{tasks}</li>
            ))}
        </ul>
    );
}