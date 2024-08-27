import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useFonts } from "expo-font"
import PropTypes from "prop-types"
import Feather from "@expo/vector-icons/Feather"

export default function GenderOption({
	selectedGender,
	setSelectedGender,
	item
}) {
	const [fontsLoaded] = useFonts({
		"Genos-Regular": require("../../assets/fonts/Genos/fonts/ttf/Genos-Regular.ttf")
	})

	return (
		<View style={styles.genderOptionWrapper}>
			<TouchableOpacity
				style={[
					styles.genderButtonContainer,
					selectedGender?.id === item?.id
						? styles.selectedGenderButton
						: styles.unSelectedGenderButton
				]}
				onPress={() => {
					setSelectedGender(item)
				}}
			>
				<View
					style={[
						styles.genderButtonImageWrapper,
						selectedGender?.id === item?.id &&
							styles.selectedGenderButtonImageWrapper
					]}
				>
					<Image
						source={item?.image}
						style={styles.genderButtonImage}
						contentFit="contain"
					/>
				</View>
			</TouchableOpacity>
			{fontsLoaded && (
				<Text
					style={[
						styles.genderTitleText,
						selectedGender?.id === item?.id
							? styles.selectedGenderTitleText
							: styles.unSelectedGenderTitleText
					]}
				>
					{item?.title}
				</Text>
			)}
			<View
				style={[
					styles.checkBox,
					selectedGender?.id === item?.id
						? styles.checkBoxChecked
						: styles.checkBoxUnChecked
				]}
			>
				<Feather name="check" size={15} color="white" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	genderOptionWrapper: {
		flexDirection: "column",
		alignItems: "center",
		gap: 5
	},
	genderButtonContainer: {
		height: 135,
		width: 135,
		borderRadius: 67.5,
		borderWidth: 1.5,
		backgroundColor: "white"
	},
	unSelectedGenderButton: {
		borderColor: "rgba(0, 0, 0, 0.1)"
	},
	selectedGenderButton: {
		borderColor: "#2796C4"
	},
	genderButtonImageWrapper: {
		height: "100%",
		width: "100%",
		borderRadius: 67.5,
		alignItems: "center",
		justifyContent: "center"
	},
	selectedGenderButtonImageWrapper: {
		backgroundColor: "rgba(95, 156, 227, 0.1)"
	},
	genderButtonImage: {
		height: 85,
		width: 85
	},
	genderTitleText: {
		fontSize: 20,
		fontFamily: "Genos-Regular"
	},
	selectedGenderTitleText: {
		color: "#2796C4"
	},
	unSelectedGenderTitleText: {
		color: "#333333",
		opacity: 0.4
	},
	checkBox: {
		height: 25,
		width: 25,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center"
	},
	checkBoxChecked: {
		backgroundColor: "#2796C4"
	},
	checkBoxUnChecked: {
		backgroundColor: "#CDD1D8"
	}
})

GenderOption.propTypes = {
	selectedGender: PropTypes.object.isRequired,
	setSelectedGender: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
}
