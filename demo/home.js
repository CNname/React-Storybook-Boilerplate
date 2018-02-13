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
          title="450 seats reserved. Ticlets on sale now."
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
          Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
          Nunc posuere metus sed magna molestie, et tristique lorem elementum."
          buttonText="get tickets"
          buttonInverted={false}
          background={backgroundImage}
        />
    </div>
  )
}

export default Home
