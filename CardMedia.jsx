import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './cardmedia.style'

const CardMedia = ({ description, title, subtitle, style, width, height, image }) => {
  
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <View style={[styles.card, {width:width}, {height:height}]}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.cardContainer}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.subtitle]}>{subtitle}</Text>
        <Text style={[styles.description]}>{description}</Text>
      </View>
    </View>
  )
}

export default CardMedia