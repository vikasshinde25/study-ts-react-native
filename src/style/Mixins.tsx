import { Dimensions, PixelRatio } from "react-native";

const WINDOW_WIDTH = Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("screen").height;
const guidelineBaseWidth = 375;

const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export { scaleSize, scaleFont, WINDOW_WIDTH, WINDOW_HEIGHT };
