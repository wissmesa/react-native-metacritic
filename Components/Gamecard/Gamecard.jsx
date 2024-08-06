import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import {Score} from '../Score/Score'
export const Gamecard = ({game}) => {
  return (
    <View key={game.slug} className="flex-row border-slate-500/10 p-4 rounded-xl gap-4 mb-10">
            <Image
              source={{
                uri: game.image,
              }}
              style={styles.image} />
              <View>

            <Text className="mb-1" style={styles.title}>{game.title}</Text>
            {/* <Text style={styles.score}>{game.score}</Text> */}
            <Score score={game.score}/>
            <Text className="mt-2 flex-shrink" style={styles.description}>{game.description.slice(0, 97)}...</Text>
              </View>
          </View>
  )
}

export function AnimatedGameCard({game,index}){
// const opacity = useRef( new Animated.Value(0)).current;
const opacity = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.timing(opacity, {
    toValue: 1,
    duration: 1000,
    delay: index * 250,
    useNativeDriver: true,
  }).start();
}, [opacity, index]);

    return(
      <Animated.View style={{opacity}}>
        <Gamecard game={game}/>
      </Animated.View>
    )

}

const styles = StyleSheet.create({
    card: {
      marginBottom: 100
    },
    image: {
      width: 100,
      height: 147,
      resizeMode: "contain",
      borderRadius: 10
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
      color: "#fff"
    },
    description: {
      fontSize: 16,
      color: "#eee"
    },
    score: {
      fontSize: 16,
      color: "green",
      marginBottom: 10,
      fontWeight: "bold"
    },
  });