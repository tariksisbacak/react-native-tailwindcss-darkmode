import {StatusBar} from 'expo-status-bar';
import {Pressable, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styled, useColorScheme} from "nativewind";

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

export default function App() {

    const {colorScheme, toggleColorScheme} = useColorScheme();

    return (
        <View
            className="flex-1 items-center justify-center bg-blue-300 dark:bg-black"
        >
            <View
                selectable={false}
                className="flex flex-col items-center dark:text-white"
            >
                <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
                <View className="mt-2 dark:text-white"><Text
                    className="dark:text-white mt-2">{`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}</Text></View>
            </View>
        </View>
    );
}

