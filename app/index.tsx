import CustomButton from "@/components/ui/CustomButton";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen(){
    const[count, setCount] = useState(0)

    return (
        <View>
            <Text>{count}</Text>
    <CustomButton title="teste"/>
     <Button
     title="voltar"
     onPress={() => {setCount(count/count -1)}}
     />
      <Button
      title="aumentar"
      onPress={() => {setCount(count+1)}}/>
       <Button 
       title="Diminuir"
    onPress={() => {setCount(count-1)}}   
    />
        </View>
    );
}
