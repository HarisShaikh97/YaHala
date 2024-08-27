import { View, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { OtpInput } from "react-native-otp-entry"

export default function OtpInputField() {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.otpInputWrapper}>
			{fontsLoaded && (
				<OtpInput
					numberOfDigits={4}
					theme={{
						pinCodeContainerStyle: styles.pinCodeContainer,
						pinCodeTextStyle: styles.pinCodeText,
						focusedPinCodeContainerStyle:
							styles.activePinCodeContainer,
						focusStickStyle: styles.focusStick
					}}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
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
	}
})
