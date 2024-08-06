import React from 'react'
import { Text,View } from 'react-native'
export const Score = ({score,maxscore}) => {
  return (
    <View>
        <Text className="color-white">{score}</Text>
    </View>
  )
}
