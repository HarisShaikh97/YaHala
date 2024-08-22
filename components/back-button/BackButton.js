import { TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import AntDesign from "@expo/vector-icons/AntDesign"

export default function BackButton() {
	const router = useRouter()

	return (
		<TouchableOpacity
			style={styles.backButton}
			onPress={() => {
				router.back()
			}}
		>
			<AntDesign name="arrowleft" size={22.5} color="black" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	backButton: {
		height: 37.5,
		width: 37.5,
		borderRadius: 20,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	}
})
