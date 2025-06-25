import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/constant'

type Props = {
  data: { image: string }[]
}

const Carousel: React.FC<Props> = ({ data }) => {
  const scrollRef = useRef<FlatList<any>>(null)
  const currentIndexRef = useRef(0) // avoid stale closure
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % data.length
      scrollRef.current?.scrollToIndex({ index: nextIndex, animated: true })
      currentIndexRef.current = nextIndex
      setCurrentIndex(nextIndex)
    }, 2000)

    return () => clearInterval(interval)
  }, [data?.length])

  const handleScrollEnd = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / WIDTH)
    setCurrentIndex(newIndex)
    currentIndexRef.current = newIndex
  }

  return (
    <FlatList
      ref={scrollRef}
      data={data}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.image }}
          style={{ width: WIDTH, height: HEIGHT * 0.27 }}
          resizeMode="cover"
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
