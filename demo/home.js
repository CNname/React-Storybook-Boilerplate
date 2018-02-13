import React from 'react'
import ReactDOM from 'react-dom'

import {
  Header,
  PageTitle,
  PersonCard,
  Slide
} from '../lib/my-awesome-library'

import backgroundImage from '../assets/dsconf2-wide.jpg'

const Home = () => {
  return (
    <div>
      <PageTitle
      >
        <Header />
      </PageTitle>

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
