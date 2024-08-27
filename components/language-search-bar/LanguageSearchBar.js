import { View, TextInput, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import AntDesign from "@expo/vector-icons/AntDesign"

export default function LanguageSearchBar() {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.searchBarContainer}>
			<AntDesign name="search1" size={20} color="#64748B" />
			{fontsLoaded && (
				<TextInput
					style={styles.inputField}
					placeholder="Search language..."
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	searchBarContainer: {
		height: 55,
		width: "100%",
		borderRadius: 7.5,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		paddingHorizontal: 15
	},
	inputField: {
		flex: 1,
		fontSize: 20,
		fontFamily: "Genos-Regular",
		lineHeight: 25
	}
})
