import React from 'react'
import { storiesOf } from '@storybook/react'
import backgroundImage from '../../assets/bg.jpg'

import Slide from '.'

storiesOf('Slide', module)
  .add('index', () => (
    <Slide
      title="This person did something"
      bodyText="Some description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
      Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
      Nunc posuere metus sed magna molestie, et tristique lorem elementum."
      buttonText="get tickets"
      inverted={true}
      background={backgroundImage}
     />
  )).add('inverted', () => (
    <Slide
      title="This person did something"
      bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
      Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
      Nunc posuere metus sed magna molestie, et tristique lorem elementum."
      buttonText="get tickets"
      inverted={true}
     />
  )).add('normal', () => (
    <Slide
      title="450 seats reserved. Tickets on sale now."
      bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
      Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
      Nunc posuere metus sed magna molestie, et tristique lorem elementum."
      buttonText="get tickets"
      inverted={false}
     />
  ))
