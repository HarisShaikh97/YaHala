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
import FooterNav from "../components/footer-nav/FooterNav"

export default function Page() {
	const [fontsLoaded] = useFonts({
		"Genos-Medium": require("../assets/fonts/Genos/fonts/ttf/Genos-Medium.ttf"),
		"Genos-Regular": require("../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	const [isEmailFocused, setIsEmailFocused] = useState(false)
	const [isPasswordFocused, setIsPasswordFocused] = useState(false)

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<Image
					source={require("../assets/images/sign-in.png")}
					style={styles.bgImage}
					alt="image"
					contentFit="contain"
				/>
				<View style={styles.inputFieldWrapper}>
					{fontsLoaded && (
						<Text style={styles.inputFieldTitleText}>E-Mail</Text>
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
				</View>
				<View style={styles.inputFieldWrapper}>
					{fontsLoaded && (
						<Text style={styles.inputFieldTitleText}>Password</Text>
					)}
					{fontsLoaded && (
						<TextInput
							style={[
								styles.inputField,
								isPasswordFocused
									? styles.inputFieldFocused
									: styles.inputFieldUnFocused
							]}
							inputMode="text"
							placeholder="Password"
							secureTextEntry
							onFocus={() => setIsPasswordFocused(true)}
							onBlur={() => setIsPasswordFocused(false)}
						/>
					)}
				</View>
				<TouchableOpacity style={styles.forgotPasswordButton}>
					{fontsLoaded && (
						<Text style={styles.forgotPasswordButtonText}>
							Forgot password?
						</Text>
					)}
				</TouchableOpacity>
				<TouchableOpacity style={styles.loginButton}>
					{fontsLoaded && (
						<Text style={styles.loginButtonText}>Login</Text>
					)}
				</TouchableOpacity>
				<View style={styles.signupTextSection}>
					{fontsLoaded && (
						<Text style={styles.accountText}>
							Don{"'"}t have an account?
						</Text>
					)}
					{fontsLoaded && (
						<Text style={styles.signupText}>Sign Up</Text>
					)}
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
		paddingTop: 35
	},
	bgImage: {
		height: 150,
		width: 250,
		alignSelf: "center"
	},
	inputFieldWrapper: {
		width: "100%",
		flexDirection: "column",
		gap: 10,
		marginTop: 25
	},
	inputFieldTitleText: {
		fontSize: 17.5,
		color: "#9796A1",
		fontFamily: "Genos-Regular"
	},
	inputField: {
		height: 45,
		width: "100%",
		borderRadius: 10,
		backgroundColor: "white",
		fontFamily: "Genos-Regular",
		fontSize: 17.5,
		paddingHorizontal: 10,
		borderWidth: 1
	},
	inputFieldFocused: {
		borderColor: "#316AAC"
	},
	inputFieldUnFocused: {
		borderColor: "white"
	},
	forgotPasswordButton: {
		marginTop: 15,
		alignSelf: "flex-end"
	},
	forgotPasswordButtonText: {
		fontSize: 15,
		color: "#316AAC",
		fontFamily: "Genos-Regular",
		textDecorationLine: "underline"
	},
	loginButton: {
		height: 45,
		width: "100%",
		borderRadius: 25,
		backgroundColor: "#2796C4",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 35,
		elevation: 5,
		shadowOffset: { width: 2.5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		shadowColor: "#5F9CE3"
	},
	loginButtonText: {
		fontSize: 20,
		fontFamily: "Genos-Medium",
		color: "white",
		lineHeight: 25
	},
	signupTextSection: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
		alignSelf: "center",
		marginTop: 15
	},
	accountText: {
		fontSize: 15,
		fontFamily: "Genos-Regular"
	},
	signupText: {
		fontSize: 15,
		fontFamily: "Genos-Regular",
		color: "#2796C4"
	}
})
