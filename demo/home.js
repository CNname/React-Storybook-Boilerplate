import React from 'react'
import ReactDOM from 'react-dom'

import {
  Header,
  PageTitle,
  PersonCard,
  Slide,
  Button,
  Hero
} from '../lib/my-awesome-library'

import backgroundImage from '../assets/dsconf-wide.jpg'

import image from '../assets/dsconf-logo.png';


const Home = () => {
  return (
    <div>
      <PageTitle
      >
        <Header />
      </PageTitle>

      <Hero
      image={image}
      bgImage={backgroundImage}
      title={'a design systems conference'}
      subtitle={'MARCH 14th – 15th, 2018'}
      cta={<Button text='get tickets'/>}
    />

        <Slide
          title="A two-day conference with one day of keynotes & one day of workshops."
          bodyText="DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
Sounds good? Make sure you familiarize yourself with our code of conduct."
          buttonText="get tickets"
          inverted={false}
        />
    </div>
  )
}

export default Home
