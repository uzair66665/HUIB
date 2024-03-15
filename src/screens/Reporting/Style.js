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
    marginBottom: hp(5),
  },
  form1: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(1.5),
  },
  label: {
    color: colors.black,
    fontSize: Typography.FONT_SIZE_10,
  },
  time: {
    backgroundColor: colors.offWhite,
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: wp(1),
    width: wp(14),
    textAlignVertical: "center",
    textAlign: "center",
    height: hp(8),
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginVertical: hp(3),
  },
  form2: {
    gap: hp(3),
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(5),
    zIndex: -20000,
  },
  button: {
    borderColor: colors.add,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: wp(3),
    alignItems: "center",
    justifyContent: "center",
    height: hp(8),
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    marginRight: wp(2),
  },
  buttonSave: {
    backgroundColor: colors.green,
    marginRight: wp(2),
  },
  buttonCancel: {
    backgroundColor: colors.red,
  },
  buttonText: {
    color: colors.white,
    fontSize: Typography.FONT_SIZE_12,
    fontWeight: "bold",
  },
  camera: {
    height: hp(8),
    width: wp(8),
  },
});
export default styles;
