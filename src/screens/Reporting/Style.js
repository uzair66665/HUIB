import { StyleSheet } from "react-native";
import { colors } from "../../utils/appContants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as Typography from "../../assets/fonts/typography";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.formBackground,
    borderColor: colors.black,
    borderWidth: 1,
    margin: wp(1),
    padding: wp(2),
  },
  mainHeading: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: Typography.FONT_SIZE_15,
  },
});
export default styles;
