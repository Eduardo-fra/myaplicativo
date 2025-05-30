import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface props{
    title: string
}

export default function CustomButton({title}: props){
    return(
    <TouchableOpacity>
        <Text>{title}</Text>
    </TouchableOpacity>
    );
}