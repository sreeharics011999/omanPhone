import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, ImageStyle } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/constant'

type Props = {
  data: { image: string }[]
  imageStyle?:ImageStyle
  autoScroll?:boolean
}

const Carousel: React.FC<Props> = ({ data,imageStyle,autoScroll=false }) => {
  const scrollRef = useRef(null)
  const currentIndexRef = useRef(0) 

  useEffect(() => {
    if (!autoScroll || !data?.length) return;
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data?.length
      scrollRef.current?.scrollToIndex({ index: nextIndex, animated: true })
      currentIndexRef.current = nextIndex
    }, 2000)
    return () => clearInterval(interval)
  }, [data?.length])

  const handleScrollEnd = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / WIDTH)
    currentIndexRef.current = newIndex
  }

  return (
    <FlatList
      ref={scrollRef}
      data={data}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.image }}
          style={[{ width: WIDTH, height: HEIGHT * 0.27 },imageStyle]}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
    />
  )
}

export default Carousel
