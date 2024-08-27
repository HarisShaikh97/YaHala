import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { Image } from "expo-image"
import { useRouter } from "expo-router"
import Feather from "@expo/vector-icons/Feather"
import ScreenHeader from "../../../components/screen-header/ScreenHeader"
import FooterNav from "../../../components/footer-nav/FooterNav"

export default function Page() {
	const router = useRouter()

	const [selectedGender, setSelectedGender] = useState("male")

	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<ScreenHeader title="Select Gender" />
				<View style={styles.bodyContainer}>
					<View style={styles.genderOptionWrapper}>
						<TouchableOpacity
							style={[
								styles.genderButtonContainer,
								selectedGender === "male"
									? styles.selectedGenderButton
									: styles.unSelectedGenderButton
							]}
							onPress={() => {
								setSelectedGender("male")
							}}
						>
							<View
								style={[
									styles.genderButtonImageWrapper,
									selectedGender === "male" &&
										styles.selectedGenderButtonImageWrapper
								]}
							>
								<Image
									source={require("../../../assets/images/male.png")}
									style={styles.genderButtonImage}
									contentFit="contain"
								/>
							</View>
						</TouchableOpacity>
						{fontsLoaded && (
							<Text
								style={[
									styles.genderTitleText,
									selectedGender === "male"
										? styles.selectedGenderTitleText
										: styles.unSelectedGenderTitleText
								]}
							>
								Male
							</Text>
						)}
						<View
							style={[
								styles.checkBox,
								selectedGender === "male"
									? styles.checkBoxChecked
									: styles.checkBoxUnChecked
							]}
						>
							<Feather name="check" size={15} color="white" />
						</View>
					</View>
					<View style={styles.genderOptionWrapper}>
						<TouchableOpacity
							style={[
								styles.genderButtonContainer,
								selectedGender === "female"
									? styles.selectedGenderButton
									: styles.unSelectedGenderButton
							]}
							onPress={() => {
								setSelectedGender("female")
							}}
						>
							<View
								style={[
									styles.genderButtonImageWrapper,
									selectedGender === "female" &&
										styles.selectedGenderButtonImageWrapper
								]}
							>
								<Image
									source={require("../../../assets/images/female.png")}
									style={styles.genderButtonImage}
									contentFit="contain"
								/>
							</View>
						</TouchableOpacity>
						{fontsLoaded && (
							<Text
								style={[
									styles.genderTitleText,
									selectedGender === "female"
										? styles.selectedGenderTitleText
										: styles.unSelectedGenderTitleText
								]}
							>
								Female
							</Text>
						)}
						<View
							style={[
								styles.checkBox,
								selectedGender === "female"
									? styles.checkBoxChecked
									: styles.checkBoxUnChecked
							]}
						>
							<Feather name="check" size={15} color="white" />
						</View>
					</View>
				</View>
				<View style={styles.actionButtonsWrapper}>
					<TouchableOpacity
						style={[
							styles.actionButtonContainer,
							styles.backButton
						]}
					>
						{fontsLoaded && (
							<Text
								style={[
									styles.actionButtonText,
									styles.backButtonText
								]}
							>
								Back
							</Text>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.actionButtonContainer,
							styles.nextButton
						]}
					>
						{fontsLoaded && (
							<Text
								style={[
									styles.actionButtonText,
									styles.nextButtonText
								]}
							>
								Next
							</Text>
						)}
					</TouchableOpacity>
				</View>
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
		paddingHorizontal: 20,
		paddingTop: 25
	},
	bodyContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		gap: 25
	},
	genderOptionWrapper: {
		flexDirection: "column",
		alignItems: "center",
		gap: 5
	},
	genderButtonContainer: {
		height: 135,
		width: 135,
		borderRadius: 67.5,
		borderWidth: 1.5,
		backgroundColor: "white"
	},
	unSelectedGenderButton: {
		borderColor: "rgba(0, 0, 0, 0.1)"
	},
	selectedGenderButton: {
		borderColor: "#2796C4"
	},
	genderButtonImageWrapper: {
		height: "100%",
		width: "100%",
		borderRadius: 67.5,
		alignItems: "center",
		justifyContent: "center"
	},
	selectedGenderButtonImageWrapper: {
		backgroundColor: "rgba(95, 156, 227, 0.1)"
	},
	genderButtonImage: {
		height: 85,
		width: 85
	},
	genderTitleText: {
		fontSize: 20,
		fontFamily: "Genos-Regular"
	},
	selectedGenderTitleText: {
		color: "#2796C4"
	},
	unSelectedGenderTitleText: {
		color: "#333333",
		opacity: 0.4
	},
	checkBox: {
		height: 25,
		width: 25,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center"
	},
	checkBoxChecked: {
		backgroundColor: "#2796C4"
	},
	checkBoxUnChecked: {
		backgroundColor: "#CDD1D8"
	},
	actionButtonsWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
		marginVertical: 25
	},
	actionButtonContainer: {
		height: 42.5,
		width: "45%",
		borderRadius: 7.5,
		alignItems: "center",
		justifyContent: "center"
	},
	actionButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Regular",
		lineHeight: 25
	},
	backButton: {
		borderWidth: 1,
		borderColor: "#2796C4",
		backgroundColor: "white"
	},
	backButtonText: {
		color: "#2796C4"
	},
	nextButton: {
		backgroundColor: "#2796C4",
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "#5F9CE3"
	},
	nextButtonText: {
		color: "white"
	}
})
