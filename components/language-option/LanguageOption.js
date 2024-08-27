import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"
import AntDesign from "@expo/vector-icons/AntDesign"

export default function LanguageOption({
	selectedLanguage,
	setSelectedLanguage,
	item
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf"),
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf")
	})

	return (
		<TouchableOpacity
			style={[
				styles.languageOptionContainer,
				selectedLanguage?.id === item?.id
					? styles.selectedLanguageOption
					: styles.unSelectedLanguageOption
			]}
			onPress={() => {
				setSelectedLanguage(item)
			}}
		>
			<View style={styles.languageDetailsContainer}>
				<Image
					source={item?.image}
					style={styles.languageIcon}
					contentFit="cover"
				/>
				{fontsLoaded && (
					<Text
						style={[
							styles.languageTitleText,
							selectedLanguage?.id === item?.id
								? styles.selectedLanguageTitleText
								: styles.unSelectedLanguageTitleText
						]}
					>
						{item?.title}
					</Text>
				)}
			</View>
			<View
				style={[
					styles.checkBox,
					selectedLanguage?.id === item?.id
						? styles.checkBoxChecked
						: styles.checkBoxUnChecked
				]}
			>
				{selectedLanguage?.id === item?.id && (
					<AntDesign name="check" size={15} color="#316AAC" />
				)}
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	languageOptionContainer: {
		height: 50,
		width: "100%",
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 17.5
	},
	languageDetailsContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15
	},
	unSelectedLanguageOption: {
		backgroundColor: "white"
	},
	selectedLanguageOption: {
		backgroundColor: "#2796C4"
	},
	languageIcon: {
		height: 25,
		width: 25,
		overflow: "hidden"
	},
	languageTitleText: {
		fontSize: 20,
		lineHeight: 22.5
	},
	selectedLanguageTitleText: {
		fontFamily: "Genos-Medium",
		color: "white"
	},
	unSelectedLanguageTitleText: {
		fontFamily: "Genos-Regular"
	},
	checkBox: {
		height: 22.5,
		width: 22.5,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center"
	},
	checkBoxChecked: {
		backgroundColor: "white"
	},
	checkBoxUnChecked: {
		borderWidth: 1,
		borderColor: "#E2E8F0"
	}
})

LanguageOption.propTypes = {
	selectedLanguage: PropTypes.object.isRequired,
	setSelectedLanguage: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
}
