import { View, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { usePathname, useRouter } from "expo-router"

export default function FooterNav() {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<View style={styles.footerWrapper}>
			<SafeAreaView style={styles.footerContainer}>
				<TouchableOpacity
					style={[
						styles.navButton,
						pathname === "/language"
							? styles.navButtonSelected
							: styles.navButtonUnSelected
					]}
				>
					<Image
						source={
							pathname === "/language"
								? require("../../assets/icons/language-white.svg")
								: require("../../assets/icons/language.svg")
						}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.navButton,
						pathname === "/policy-and-terms"
							? styles.navButtonSelected
							: styles.navButtonUnSelected
					]}
				>
					<Image
						source={
							pathname === "/policy-and-terms"
								? require("../../assets/icons/policy-and-terms-white.svg")
								: require("../../assets/icons/policy-and-terms.svg")
						}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						source={require("../../assets/icons/YaHala-logo.svg")}
						style={styles.logoImage}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.navButton,
						pathname === "/"
							? styles.navButtonSelected
							: styles.navButtonUnSelected
					]}
					onPress={() => {
						if (pathname !== "/") {
							router.navigate("/")
						}
					}}
				>
					<Image
						source={
							pathname === "/"
								? require("../../assets/icons/sign-in-white.svg")
								: require("../../assets/icons/sign-in.svg")
						}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.navButton,
						pathname === "/sign-up"
							? styles.navButtonSelected
							: styles.navButtonUnSelected
					]}
				>
					<Image
						source={
							pathname === "/sign-up"
								? require("../../assets/icons/sign-up-white.svg")
								: require("../../assets/icons/sign-up.svg")
						}
						style={styles.navIcon}
						contentFit="contain"
					/>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	footerWrapper: {
		width: "100%",
		backgroundColor: "white",
		alignItems: "center"
	},
	footerContainer: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 5
	},
	navButton: {
		height: 40,
		width: 40,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	navButtonSelected: {
		backgroundColor: "#2796C4"
	},
	navButtonUnSelected: {
		backgroundColor: "#F2F2F2"
	},
	navIcon: {
		height: 27.5,
		width: 27.5
	},
	logoImage: {
		height: 50,
		width: 50
	}
})
