import { Link } from "expo-router";
import { StyleSheet,View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    // Add more colors as needed
  ] as const
  
type ColorItem = typeof colors[number]
  
export const ColorLockup = ({ item }: { item: ColorItem }) => (
    <Link
        href={{
        pathname: '/color/[color]',
        params: { color: item.hex },
        }}
    >
        <View style={styles.item}>
            <View style={[styles.colorPreview, { backgroundColor: item.hex }]} />
            <ThemedText>{item.name}</ThemedText>
        </View>
    </Link>
);

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    container: {
      flex: 1,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    colorPreview: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 10,
    },
});
  