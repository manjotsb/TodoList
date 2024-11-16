import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Text } from "react-native";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

function HomeScreen({navigation}) {
    return(
        <MainLayout>
            <Text>To-do List</Text>
            <ToDoList/>
            <Text>To-do Form</Text>
            <ToDoForm/>
            <Button title="Go to About Page" onPress={() => navigation.navigate("About")}/>
        </MainLayout>
    );
}

export default HomeScreen;