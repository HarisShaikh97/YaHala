import { useState } from "react"
import { View, StyleSheet } from "react-native"
import ScreenHeader from "../../../components/screen-header/ScreenHeader"
import GenderOption from "../../../components/gender-option/GenderOption"
import SignUpBackButton from "../../../components/sign-up-back-button/SignUpBackButton"
import SignUpNextButton from "../../../components/sign-up-next-button/SignUpNextButton"
import FooterNav from "../../../components/footer-nav/FooterNav"

export default function Page() {
	const genders = [
		{
			id: 1,
			title: "Male",
			image: require("../../../assets/images/male.png")
		},
		{
			id: 2,
			title: "Female",
			image: require("../../../assets/images/female.png")
		}
	]

	const [selectedGender, setSelectedGender] = useState(genders[0])

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<ScreenHeader title="Select Gender" />
				<View style={styles.bodyContainer}>
					{genders?.map((item, key) => {
						return (
							<GenderOption
								selectedGender={selectedGender}
								setSelectedGender={setSelectedGender}
								item={item}
								key={key}
							/>
						)
					})}
				</View>
				<View style={styles.actionButtonsWrapper}>
					<SignUpBackButton onPress={() => {}} />
					<SignUpNextButton onPress={() => {}} />
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
	actionButtonsWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
		marginVertical: 25
	}
})
