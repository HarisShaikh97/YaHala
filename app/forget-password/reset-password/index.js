import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import ScreenHeader from "../../../components/screen-header/ScreenHeader"
import FormButton from "../../../components/form-button/FormButton"
import FooterNav from "../../../components/footer-nav/FooterNav"
import ForgetPasswordPopup from "../../../components/forget-password-popup/ForgetPasswordPopup"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Regular": require("../../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [isEmailFocused, setIsEmailFocused] = useState(false)
	const [showPopup, setShowPopup] = useState(false)

	return (
		<View style={styles.wrapper}>
			<ForgetPasswordPopup
				showPopup={showPopup}
				setShowPopup={setShowPopup}
			/>
			<View style={styles.container}>
				<ScreenHeader title="Forget Password" />
				<View style={styles.bodyContainer}>
					{fontsLoaded && (
						<Text style={styles.titleText}>Reset Password</Text>
					)}
					{fontsLoaded && (
						<Text style={styles.descriptionText}>
							Please enter your email address to request a
							password reset
						</Text>
					)}
					{fontsLoaded && (
						<TextInput
							style={[
								styles.inputField,
								isEmailFocused
									? styles.inputFieldFocused
									: styles.inputFieldUnFocused
							]}
							inputMode="email"
							placeholder="example@gmail.com"
							onFocus={() => setIsEmailFocused(true)}
							onBlur={() => setIsEmailFocused(false)}
						/>
					)}
					{fontsLoaded && (
						<Text style={styles.messageText}>
							Email sent to ex*****@gmail.com
						</Text>
					)}
					<FormButton
						title="Send"
						onPress={() => {
							setShowPopup(true)
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
	inputField: {
		height: 45,
		width: "100%",
		borderRadius: 6.5,
		backgroundColor: "white",
		fontFamily: "Genos-Regular",
		fontSize: 17.5,
		paddingHorizontal: 10,
		borderWidth: 1,
		marginTop: 15,
		marginBottom: 5
	},
	inputFieldFocused: {
		borderColor: "#316AAC"
	},
	inputFieldUnFocused: {
		borderColor: "white"
	},
	bodyContainer: {
		width: "100%",
		flexDirection: "column",
		marginTop: 50
	},
	titleText: {
		fontSize: 30,
		fontFamily: "Genos-Medium"
	},
	descriptionText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		opacity: 0.4,
		marginVertical: 5
	},
	messageText: {
		fontSize: 12.5,
		fontFamily: "Genos-Regular",
		color: "#6C63FF",
		marginBottom: 75
	}
})
