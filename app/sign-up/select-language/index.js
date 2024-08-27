import { useState } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { useRouter } from "expo-router"
import AntDesign from "@expo/vector-icons/AntDesign"
import FormButton from "../../../components/form-button/FormButton"
import FooterNav from "../../../components/footer-nav/FooterNav"

export default function Page() {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Regular": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const languages = [
		{
			id: 1,
			title: "English",
			image: require("../../../assets/images/english.png")
		},
		{
			id: 2,
			title: "Indonesian",
			image: require("../../../assets/images/indonesian.png")
		},
		{
			id: 3,
			title: "Japanese",
			image: require("../../../assets/images/japanese.png")
		},
		{
			id: 4,
			title: "French",
			image: require("../../../assets/images/french.png")
		},
		{
			id: 5,
			title: "Chinese",
			image: require("../../../assets/images/chinese.png")
		}
	]

	const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				{fontsLoaded && (
					<Text style={styles.headerTitleText}>Language</Text>
				)}
				<View style={styles.bodyContainer}>
					<View style={styles.searchBarContainer}>
						<AntDesign name="search1" size={20} color="#64748B" />
						{fontsLoaded && (
							<TextInput
								style={styles.inputField}
								placeholder="Search language..."
							/>
						)}
					</View>
					<View style={styles.listContainer}>
						{languages?.map((item, key) => {
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
									key={key}
								>
									<View
										style={styles.languageDetailsContainer}
									>
										<Image
											source={item?.image}
											style={styles.languageIcon}
											contentFit="cover"
										/>
										{fontsLoaded && (
											<Text
												style={[
													styles.languageTitleText,
													selectedLanguage?.id ===
													item?.id
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
											<AntDesign
												name="check"
												size={15}
												color="#316AAC"
											/>
										)}
									</View>
								</TouchableOpacity>
							)
						})}
					</View>
				</View>
				<FormButton title="Save Changes" onPress={() => {}} />
			</View>
			<FooterNav />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 25
	},
	headerTitleText: {
		fontSize: 22.5,
		fontFamily: "Genos-Medium",
		lineHeight: 27.5
	},
	bodyContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		marginTop: 35,
		gap: 25
	},
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
	},
	listContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 15,
		marginBottom: 50
	},
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
		lineHeight: 25
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
