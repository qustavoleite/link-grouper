import {View, Text, TouchableOpacity} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./style"
import { colors } from "@/styles/colors"

export default function Add() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
                </TouchableOpacity>

                <Text style={styles.title}>
                    Novo
                </Text>

                <Text style={styles.label}>
                    Selecione uma categoria
                </Text>
            </View>
        </View>
    )
}