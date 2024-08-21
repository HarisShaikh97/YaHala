import { View, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Light": require("../assets/fonts/Genos/fonts/ttf/Genos-Light.ttf")
	})

	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/images/sign-in.png")}
				style={styles.bgImage}
				alt="image"
				contentFit="contain"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: 15,
		paddingTop: 35
	},
	bgImage: {
		height: 150,
		width: 250,
		alignSelf: "center"
	}
})
