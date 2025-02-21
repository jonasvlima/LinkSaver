import { Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./style";

export function Category() {
    return(
        <Pressable style={styles.comtainer}>
            <MaterialIcons name="code" size={16} color={colors.gray[400]}></MaterialIcons>
            <Text style={styles.name}>Projetos</Text>
        </Pressable>
    )
}