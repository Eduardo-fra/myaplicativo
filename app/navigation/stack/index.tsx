import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function StackHome(){
    const router = useRouter()

    return(
        <View>
            Tela inicial

            <Button title="Ir para detalhes" onPress={() => router.push('/navigation/stack/details')} />
        </View>
    );
}