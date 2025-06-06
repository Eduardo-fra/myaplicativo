import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Tabslayout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
        <Tabs.Screen
        name="index"
        options={{
     title: 'inicio',
     tabBarIcon: ({color, size}) => <Ionicons name="home-outline" size={size} color={color}/>
        }}
        />
         <Tabs.Screen
        name="settings"
        options={{
     title: 'Configurações',
     tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color}/>
        }}
        />
        </Tabs>
    );
}