import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen"

const rationHeight = 0.123958333333333

const ratioWidth = 0.242987804878049

export function hp(height) {
  return heightPercentageToDP(height * rationHeight)
}

export function wp(width) {
  return widthPercentageToDP(width * ratioWidth)
}
