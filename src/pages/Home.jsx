import React from 'react'
import { NavBar } from '../components/nav/NavBar'
import logo from '../assets/logo1.png'
import { NavItems } from '../components/nav/NavItems'
import { Carousel } from '../components/carousel/Carousel'
import ImageCarousel from '../components/carousel/CarouselTeste'

export const Home = () => {
  return (
    <>
      <NavBar items={NavItems} />
      <ImageCarousel/>
      </>
  )
}
