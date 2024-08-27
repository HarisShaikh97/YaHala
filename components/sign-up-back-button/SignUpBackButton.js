import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"

export default function SignUpBackButton({ onPress }) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<TouchableOpacity
			style={styles.actionButtonContainer}
			onPress={onPress}
		>
			{fontsLoaded && <Text style={styles.actionButtonText}>Back</Text>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	actionButtonContainer: {
		height: 42.5,
		width: "45%",
		borderRadius: 7.5,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#2796C4",
		backgroundColor: "white"
	},
	actionButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Regular",
		lineHeight: 22.5,
		color: "#2796C4"
	}
})
