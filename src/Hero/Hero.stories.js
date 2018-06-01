import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'


import Hero from '.'
import Button from '../Button';

import image from '../../assets/SiteLogo.svg';
import bgimage from '../../assets/bg.jpg';


storiesOf('Hero', module)
.add('default',
  withInfo()(() => {
    return (<Hero
      image={image}
      bgImage={bgimage}
      title={'Machine Learning Event'}
      subtitle={'Coming soon'}
      cta={<Button text='Learn More'/>}
    />)
}))
