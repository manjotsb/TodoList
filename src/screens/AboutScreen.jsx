import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen() {
    return (
        <MainLayout>
            <Text>To-Do App</Text>
            <Text>Manjot</Text>

            <TouchableOpacity>
                <Text>Date: {new Date().toLocaleDateString()}</Text>
            </TouchableOpacity>
        </MainLayout>
    );
}

export default AboutScreen;