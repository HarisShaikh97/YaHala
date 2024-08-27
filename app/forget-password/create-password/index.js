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
import ScreenHeader from "../../../components/screen-header/ScreenHeader"
import FormButton from "../../../components/form-button/FormButton"
import FooterNav from "../../../components/footer-nav/FooterNav"

export default function Page() {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<ScreenHeader title="Create Password" />
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
					<FormButton
						title="Continue"
						onPress={() => {
							router.navigate("/")
						}}
					/>
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
		fontFamily: "Genos-Regular",
		lineHeight: 25
	},
	showPasswordIcon: {
		height: 22.5,
		width: 22.5
	},
	listContainer: {
		width: "100%",
		flexDirection: "column",
		gap: 10,
		marginBottom: 10
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
