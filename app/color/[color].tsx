import { ColorLockup, colors } from "@/components/ColorLockup";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import Animated from "react-native-reanimated";

function useColor () {
    const { color } = useLocalSearchParams();
    
    if ( !color || Array.isArray(color) ) {
        throw new Error("Color is required")
    }

    for (const key in colors) {
      if (colors[key].hex === color) {
        return colors[key]
      }
    }

    throw new Error("Invalid color")
}

export default function ColorScreen() {
    const color = useColor()
    
    return (
      <>
        <Text>Color!{ color.hex }</Text>
        <Animated.View sharedTransitionTag="color">
          <ColorLockup item={ color } />
        </Animated.View>
      </>
    );
}