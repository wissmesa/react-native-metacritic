import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function About() {
    return (
        <ScrollView className='pt-12'   >
            <Link href="/" className="text-blue-400 text-xl">
                Ir al Home</Link>
            <Text style={{ color: "white" }} className='text-white text-white/90 mb-4'>lorem ipsum dadsadsadolor sit amet</Text>
            <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
            <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
            <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
            <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>
            <Text className='text-white text-white/90 mb-4'>lorem ipsum dolor sit amet</Text>

        </ScrollView>
    )
}
