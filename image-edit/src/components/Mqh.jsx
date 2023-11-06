import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Main from '../pages/Main'

const Mqh = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return<Main Exbig={isBigScreen} ExMobile={isTabletOrMobile} Port={isPortrait}/>
}

export default Mqh;