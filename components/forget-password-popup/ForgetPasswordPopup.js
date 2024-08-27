import {
	View,
	Text,
	TouchableOpacity,
	Modal,
	Platform,
	StyleSheet
} from "react-native"
import { useRouter } from "expo-router"
import { BlurView } from "expo-blur"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"

export default function ForgetPasswordPopup({ showPopup, setShowPopup }) {
	const router = useRouter()

	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<Modal
			animationType="fade"
			transparent
			visible={showPopup}
			onRequestClose={() => {
				setShowPopup(false)
			}}
		>
			<BlurView
				intensity={Platform.OS === "android" ? 150 : 15}
				style={styles.popupWrapper}
			>
				<View style={styles.popupContainer}>
					<View style={styles.popupHeaderContainer}>
						{fontsLoaded && (
							<Text style={styles.popupTitleText}>
								Forget Password
							</Text>
						)}
					</View>
					<View style={styles.popupBodyContainer}>
						{fontsLoaded && (
							<Text
								style={styles.popupBodyText}
								numberOfLines={3}
							>
								An email has been sent to you Follow direction
								in the email to reset password
							</Text>
						)}
						<TouchableOpacity
							style={styles.okButton}
							onPress={() => {
								setShowPopup(false)
								router.navigate(
									"/forget-password/verification-code"
								)
							}}
						>
							{fontsLoaded && (
								<Text style={styles.okButtonText}>OK</Text>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</BlurView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	popupWrapper: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	popupContainer: {
		height: 215,
		width: "85%",
		borderRadius: 12.5,
		backgroundColor: "white",
		flexDirection: "column",
		overflow: "hidden",
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3
	},
	popupHeaderContainer: {
		width: "100%",
		backgroundColor: "#2796C4",
		alignItems: "center",
		paddingVertical: 10
	},
	popupTitleText: {
		fontSize: 22.5,
		fontFamily: "Genos-Medium",
		color: "white",
		lineHeight: 27.5
	},
	popupBodyContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingHorizontal: 25
	},
	popupBodyText: {
		fontSize: 17.5,
		fontFamily: "Genos-Regular",
		textAlign: "center",
		color: "#333333",
		opacity: 0.6,
		lineHeight: 22.5
	},
	okButton: {
		height: 40,
		width: 140,
		borderRadius: 20,
		backgroundColor: "#2796C4",
		alignItems: "center",
		justifyContent: "center",
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "#5F9CE3"
	},
	okButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Medium",
		color: "white",
		lineHeight: 22.5
	}
})

ForgetPasswordPopup.propTypes = {
	showPopup: PropTypes.bool.isRequired,
	setShowPopup: PropTypes.func.isRequired
}
