import { StyleSheet } from "react-native"
import { hp, wp } from "../utils/responsive"



export const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64]

export const margin = {
  xSmall: 4,
  small: 8,
  smallLarge: 10,
  medium: 16,
  large: 24,
}

export const padding = {
  xSmall: 4,
  small: 8,
  mediumSmall: 12,
  medium: 16,
  large: 24,
}

export const spacingStyles = StyleSheet.create({
  fullWidth: { width: "100%" },
  marginBottomSmall: { marginBottom: hp(margin.small) },
  marginBottomXSmall: { marginBottom: hp(margin.xSmall) },
  marginLeftSmall: { marginLeft: wp(margin.small) },
  marginLeftXSmall: { marginLeft: wp(margin.xSmall) },
  marginRightSmall: { marginRight: wp(margin.small) },
  marginRightXSmall: { marginRight: wp(margin.xSmall) },
  marginTopSmall: { marginTop: hp(margin.small) },

  marginTopXSmall: { marginTop: hp(margin.xSmall) },
  paddingBottomLarge: { paddingBottom: hp(padding.large) },
  paddingBottomMedium: { paddingBottom: hp(padding.medium) },
  paddingBottomMediumSmall: { paddingBottom: hp(padding.mediumSmall) },
  paddingBottomSmall: { paddingBottom: hp(margin.small) },
  paddingBottomXSmall: { paddingBottom: hp(margin.xSmall) },
  paddingLeftSmall: { paddingLeft: wp(margin.small) },
  paddingLeftXSmall: { paddingLeft: wp(margin.xSmall) },
  paddingRightSmall: { paddingRight: wp(margin.small) },
  paddingRightXSmall: { paddingRight: wp(margin.xSmall) },
  paddingTopSmall: { paddingTop: hp(margin.small) },



  paddingTopXSmall: { paddingTop: hp(margin.xSmall) }
})
