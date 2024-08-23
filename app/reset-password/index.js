import { useState } from "react"
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import { useFonts } from "expo-font"
import BackButton from "../../components/back-button/BackButton"
import FooterNav from "../../components/footer-nav/FooterNav"
import ForgetPasswordPopup from "../../components/forget-password-popup/ForgetPasswordPopup"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Bold": require("../../assets/fonts/Genos/fonts/ttf/Genos-Bold.ttf"),
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
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
				<View style={styles.headerContainer}>
					<BackButton />
					{fontsLoaded && (
						<Text style={styles.headerTitleText}>
							Forget Password
						</Text>
					)}
					<View style={styles.emptyView} />
				</View>
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
					<TouchableOpacity
						style={styles.sendButton}
						onPress={() => {
							setShowPopup(true)
						}}
					>
						{fontsLoaded && (
							<Text style={styles.sendButtonText}>Send</Text>
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
		color: "#6C63FF"
	},
	sendButton: {
		height: 55,
		width: "100%",
		borderRadius: 30,
		backgroundColor: "#2796C4",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 75,
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "#5F9CE3"
	},
	sendButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Bold",
		color: "white",
		lineHeight: 25
	}
})
