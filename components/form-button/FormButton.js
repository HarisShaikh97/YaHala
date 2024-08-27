import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function FormButton({ title, onPress }) {
	const [fontsLoaded] = useFonts({
		"Genos-Bold": require("../../assets/fonts/Genos/fonts/ttf/Genos-Bold.ttf")
	})

	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			{fontsLoaded && <Text style={styles.buttonText}>{title}</Text>}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		height: 55,
		width: "100%",
		borderRadius: 30,
		backgroundColor: "#2796C4",
		alignItems: "center",
		justifyContent: "center",
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "#5F9CE3"
	},
	buttonText: {
		fontSize: 20,
		fontFamily: "Genos-Bold",
		color: "white",
		lineHeight: 25
	}
})

FormButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}
