import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import { useRouter } from "expo-router"
import { OtpInput } from "react-native-otp-entry"
import FooterNav from "../../components/footer-nav/FooterNav"

export default function Page() {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				{fontsLoaded && (
					<Text style={styles.headerTitleText}>Forget Password</Text>
				)}
				<View style={styles.bodyContainer}>
					<Image
						source={require("../../assets/images/verification-code.png")}
						style={styles.bgImage}
						contentFit="contain"
					/>
					{fontsLoaded && (
						<Text style={styles.titleText}>Verification Code</Text>
					)}
					{fontsLoaded && (
						<Text style={styles.descriptionText}>
							Please type the verification code sent to
							prelookstudio@gmail.com
						</Text>
					)}
					<View style={styles.otpInputWrapper}>
						{fontsLoaded && (
							<OtpInput
								numberOfDigits={4}
								theme={{
									pinCodeContainerStyle:
										styles.pinCodeContainer,
									pinCodeTextStyle: styles.pinCodeText,
									focusedPinCodeContainerStyle:
										styles.activePinCodeContainer,
									focusStickStyle: styles.focusStick
								}}
							/>
						)}
					</View>
					<View style={styles.resendTextWrapper}>
						{fontsLoaded && (
							<Text
								style={[
									styles.resendText,
									styles.resendTextDark
								]}
							>
								I didn{"'"}t receive a code!
							</Text>
						)}
						<TouchableOpacity>
							{fontsLoaded && (
								<Text
									style={[
										styles.resendText,
										styles.resendTextOrange
									]}
								>
									Please resend
								</Text>
							)}
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.sendButton}
						onPress={() => {
							router.navigate("/create-password")
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
		alignItems: "center",
		paddingTop: 25
	},
	headerTitleText: {
		fontSize: 22.5,
		fontFamily: "Genos-Medium",
		lineHeight: 27.5
	},
	bodyContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		marginTop: 65,
		gap: 10
	},
	bgImage: {
		height: 150,
		width: 200
	},
	titleText: {
		fontSize: 30,
		fontFamily: "Genos-Medium"
	},
	descriptionText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		color: "#1C274C",
		opacity: 0.6,
		marginVertical: 5,
		textAlign: "center"
	},
	otpInputWrapper: {
		width: 250,
		marginTop: 15
	},
	pinCodeContainer: {
		height: 50,
		width: 50,
		borderRadius: 10,
		borderColor: "#EEEEEE",
		backgroundColor: "white"
	},
	activePinCodeContainer: {
		borderWidth: 1,
		borderColor: "#FE724C"
	},
	pinCodeText: {
		fontSize: 30,
		color: "#FE724C",
		fontFamily: "Genos-Regular",
		lineHeight: 35
	},
	focusStick: {
		height: 25,
		backgroundColor: "#FFC529"
	},
	resendTextWrapper: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	resendText: {
		fontSize: 15,
		fontFamily: "Genos-Regular"
	},
	resendTextDark: {
		color: "#1C274C",
		opacity: 0.7
	},
	resendTextOrange: {
		color: "#FE724C"
	},
	sendButton: {
		height: 55,
		width: "85%",
		borderRadius: 10,
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
