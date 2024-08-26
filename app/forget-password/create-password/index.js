import { useState } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useFonts } from "expo-font"
import { Image } from "expo-image"
import { useRouter } from "expo-router"
import Feather from "@expo/vector-icons/Feather"
import BackButton from "../../../components/back-button/BackButton"
import FooterNav from "../../../components/footer-nav/FooterNav"

export default function Page() {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Bold": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Bold.ttf"),
		"Genos-Medium": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Regular": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<BackButton />
					{fontsLoaded && (
						<Text style={styles.headerTitleText}>
							Create Password
						</Text>
					)}
					<View style={styles.emptyView} />
				</View>
				<View style={styles.bodyContainer}>
					{fontsLoaded && (
						<Text style={styles.descriptionText}>
							Choose a secure password that will be easy for you
							to remember.
						</Text>
					)}
					<View style={styles.inputFieldWrapper}>
						{fontsLoaded && (
							<Text style={styles.inputFieldTitleText}>
								Password
							</Text>
						)}
						<View style={styles.inputFieldContainer}>
							{fontsLoaded && (
								<TextInput
									style={styles.inputField}
									secureTextEntry={!showPassword}
								/>
							)}
							<TouchableOpacity
								onPress={() => {
									setShowPassword(!showPassword)
								}}
							>
								<Image
									source={
										showPassword
											? require("../../../assets/icons/eye-closed.svg")
											: require("../../../assets/icons/eye.svg")
									}
									style={styles.showPasswordIcon}
									contentFit="contain"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.inputFieldWrapper}>
						{fontsLoaded && (
							<Text style={styles.inputFieldTitleText}>
								Confirm Password
							</Text>
						)}
						<View style={styles.inputFieldContainer}>
							{fontsLoaded && (
								<TextInput
									style={styles.inputField}
									secureTextEntry={!showConfirmPassword}
								/>
							)}
							<TouchableOpacity
								onPress={() => {
									setShowConfirmPassword(!showConfirmPassword)
								}}
							>
								<Image
									source={
										showConfirmPassword
											? require("../../../assets/icons/eye-closed.svg")
											: require("../../../assets/icons/eye.svg")
									}
									style={styles.showPasswordIcon}
									contentFit="contain"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.listContainer}>
						<View style={styles.listItemContainer}>
							<Feather name="check" size={17.5} color="gray" />
							{fontsLoaded && (
								<Text
									style={[
										styles.listItemText,
										styles.listItemTextGray
									]}
								>
									Has at least 8 characters
								</Text>
							)}
						</View>
						<View style={styles.listItemContainer}>
							<Feather name="check" size={17.5} color="gray" />
							{fontsLoaded && (
								<Text
									style={[
										styles.listItemText,
										styles.listItemTextGray
									]}
								>
									Has an uppercase letter or symbol
								</Text>
							)}
						</View>
						<View style={styles.listItemContainer}>
							<Feather name="check" size={17.5} color="#28CD56" />
							{fontsLoaded && (
								<Text
									style={[
										styles.listItemText,
										styles.listItemTextGreen
									]}
								>
									Has a number
								</Text>
							)}
						</View>
					</View>
					<TouchableOpacity
						style={styles.continueButton}
						onPress={() => {
							router.navigate("/")
						}}
					>
						{fontsLoaded && (
							<Text style={styles.continueButtonText}>
								Continue
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
	},
	bodyContainer: {
		width: "100%",
		flexDirection: "column",
		marginTop: 35,
		alignItems: "center",
		gap: 25
	},
	descriptionText: {
		fontSize: 17.5,
		fontFamily: "Genos-Regular",
		opacity: 0.4,
		marginVertical: 5,
		textAlign: "center",
		marginHorizontal: 15
	},
	continueButton: {
		height: 55,
		width: "100%",
		borderRadius: 30,
		backgroundColor: "#2796C4",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "#5F9CE3"
	},
	continueButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Bold",
		color: "white",
		lineHeight: 25
	},
	inputFieldWrapper: {
		width: "100%",
		flexDirection: "column",
		gap: 5
	},
	inputFieldTitleText: {
		fontSize: 17.5,
		fontFamily: "Genos-Regular",
		color: "#9796A1"
	},
	inputFieldContainer: {
		height: 50,
		width: "100%",
		borderRadius: 10,
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		paddingHorizontal: 15
	},
	inputField: {
		flex: 1,
		fontSize: 20,
		fontFamily: "Genos-Regular"
	},
	showPasswordIcon: {
		height: 22.5,
		width: 22.5
	},
	listContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 10
	},
	listItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10
	},
	listItemText: {
		fontSize: 17.5,
		fontFamily: "Genos-Regular",
		lineHeight: 20
	},
	listItemTextGray: {
		color: "gray"
	},
	listItemTextGreen: {
		color: "#28CD56"
	}
})
