import { View, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"
import BackButton from "../back-button/BackButton"

export default function ScreenHeader({ title }) {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf")
	})
	return (
		<View style={styles.headerContainer}>
			<BackButton />
			{fontsLoaded && <Text style={styles.headerTitleText}>{title}</Text>}
			<View style={styles.emptyView} />
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	headerTitleText: {
		fontSize: 22.5,
		fontFamily: "Genos-Medium",
		lineHeight: 27.5
	},
	emptyView: {
		width: 35
	}
})

ScreenHeader.propTypes = {
	title: PropTypes.string.isRequired
}
