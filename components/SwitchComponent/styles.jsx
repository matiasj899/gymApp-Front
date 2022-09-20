import { StyleSheet, Platform } from "react-native"
import { hp,wp } from "../../utils/responsive"
import { padding } from "../../theme/spacing"
import { palette } from "../../theme/palette"


export default StyleSheet.create({
  bubaCardJob: {
    backgroundColor: palette.shades.white,
    borderRadius: padding.small,
    paddingHorizontal: wp(padding.medium),
    paddingVertical: hp(padding.medium),
  },
  bubaCardJobEmployee: {
    backgroundColor: palette.shades.white,
    borderRadius: padding.small,
    flexDirection: "row",
    paddingHorizontal: wp(padding.medium),
    paddingVertical: hp(padding.medium),
  },
  bubaCardJobInfo: {
    color: palette.shades.mediumGray,
   // fontFamily: typography.lexendRegular,
    fontSize: hp(14),
    lineHeight: hp(18),
  },
  bubaCardJobInfoPaddingBottom: {
    paddingBottom: hp(padding.small),
  },
  bubaCardJobList: {
    backgroundColor: palette.shades.white,
    borderRadius: padding.small,
    flexDirection: "row",
    height: hp(130),
    marginHorizontal: wp(padding.medium),
    paddingHorizontal: wp(padding.medium),
    paddingVertical: hp(16),
  },
  bubaCardJobTitle: {
    color: palette.shades.darkGrey,
    // fontFamily: typography.lexendMedium,
    fontSize: hp(16),
    lineHeight: hp(20),
    paddingBottom: hp(padding.small),
  },
  button: {
    height: hp(48),
    width: wp(108),
  },
  buttonActive: {
    backgroundColor: palette.shades.darkerGrey,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 8,
  },
  buttonCommerce: {
    backgroundColor: 'black',
  
    
    borderRadius:padding.xSmall,
  
    height: hp(32),
    justifyContent: "center",
    width: wp(120),
  },

  buttonInactive: {
    backgroundColor: palette.shades.white,
  },
  buttonJob: {
   borderRadius: padding.xSmall,
    height: hp(32),
    justifyContent: "center",
    width: wp(120),
  },
  buttonList: {
    borderBottomRightRadius: padding.small,
    borderTopRightRadius: padding.small,
    justifyContent: "center",
  },
  buttonMap: {
    borderBottomLeftRadius: padding.small,
    borderTopLeftRadius: padding.small,
    justifyContent: "center",
  },
  gpsContainer: {
    alignSelf: "flex-end",
    bottom: hp(150),
    paddingRight: hp(padding.medium),
    position: "absolute",
    zIndex: 1000,
  },
  image: {
    alignSelf: "center",
    marginRight: wp(8),
  },
  imageList: {
    alignSelf: "center",
    marginRight: wp(30),
  },
  inputStyle: {
    // fontFamily: typography.lexendRegular,
    paddingLeft: wp(padding.medium),
  },
  inputStyleContainer: {
    alignSelf: "center",
    backgroundColor: palette.shades.white,
    borderRadius: 12,
    height: hp(48),
    justifyContent: "center",
    paddingHorizontal: wp(padding.medium),
    position: "absolute",
    top: hp(Platform.OS === "android" ? padding.medium + 40 : padding.medium + 68),
    width: "92%",
    zIndex: 1000,
  },
  inputStyleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputStyleViewLeft: {
    alignItems: "center",
    flexDirection: "row",
  },
  paddingLeft: {
    paddingLeft: wp(6),
  },
  row: {
    flexDirection: "row",
  },
  switchContainer: {
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    top: hp(Platform.OS === "android" ? padding.small : padding.small + 28),
    zIndex: 1000,
  },
  switchCreateProfileContainer: { alignSelf: "center", flexDirection: "row" },
  texActive: {
    color: palette.shades.white,
  },
  text: {
    // fontFamily: typography.lexendRegular,
    fontSize: hp(14),
    lineHeight: hp(18),
    textAlign: "center",
  },
  textInactive: {
    color: palette.shades.black,
  },
})
