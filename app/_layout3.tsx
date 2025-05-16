import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen() {
const router = useRouter();
    return(
    <View>
        <Button title="Stack navigation" onPress={()=> router.push('/navigation/stack')}/>
        <Button title="Tabs navigation" onPress={()=>('/navigation/tabs')}/>
        <Button title="drawer navigation" onPress={() => ('/navigation/drawer')}/>
    </View>
);

}