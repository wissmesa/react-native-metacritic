import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function Detail() {
    const { id } = useLocalSearchParams();
    console.log(id, 'iid')

    return (
        <View className='flex-1 bg-black  justify-center items-center'>
            <View>
                <Text className="text-white font-bold nb-8 text-2xl">
                    Detalle del juego {id}
                </Text>
                <Link href="/" className="text-blue-500">
                    volver
                </Link>
            </View>
        </View>
    );
}