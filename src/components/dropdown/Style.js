import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as Typography from "../../assets/fonts/typography";
import { colors } from "../../utils/appContants";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.offWhite,
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: wp(1),
    width: wp(10),
    justifyContent: "space-between",
    alignItems: "center",
    gap: wp(1),
    height: hp(8),
  },
  listContainer: {
    position: "absolute",
    maxHeight: hp(17),
    borderWidth: 1,
    borderColor: colors.black,
  },
  listButtons: {
    flex: 1,
    backgroundColor: colors.white,
    width: wp(12),
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    zIndex: 100,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(1),
  },
  text: {
    fontSize: Typography.FONT_SIZE_10,
    color: colors.black,
    flex: 1,
    width: wp(7),
  },
});
export default styles;
