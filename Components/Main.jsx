import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, Gamecard } from "./Gamecard/Gamecard";
import { Logo } from "./LogoSVG/Logo";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./Icons/Icons";
export function Main() {
  const [games, setgames] = useState([])
  const insets = useSafeAreaInsets()
  useEffect(() => {
    getLatestGames().then((games) => {
      setgames(games);
      // console.log(games)
    })
  }, [])

  return (
    <>
      <View className='bg-black ' style={{  paddingBottom: insets.bottom }} >
        {/* <View className='flex-row justify-between items-center mx-2 mb-4 '>
          <View >
            <Logo />
          </View>

          <Link href="/about" asChild>
            <Pressable>
              <CircleInfoIcon/>
            </Pressable>
          </Link>
        </View> */}


        {games.length === 0 ?
          <ActivityIndicator color={'#fff'} size={"large"} /> :
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item: game, index }) => <AnimatedGameCard game={game} index={index} />}
          ></FlatList>
        }
      </View>
    </>
  );
}
