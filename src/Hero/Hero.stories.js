import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from '.'
import Button from '../Button';

import image from '../../assets/dsconf-logo.png';
import bgimage from '../../assets/dsconf-wide.jpg';

storiesOf('Hero', module)
  .add('index', () => (
    <Hero
      image={image}
      bgImage={bgimage}
      title={'a design systems conference'}
      subtitle={'MARCH 14th – 15th, 2018'}
      cta={<Button text='get tickets'/>}
    />
  ))
