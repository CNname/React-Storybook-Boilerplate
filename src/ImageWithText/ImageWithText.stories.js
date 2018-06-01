import React from 'react'
import { storiesOf } from '@storybook/react'
import backgroundImage from '../../assets/SiteLogo.svg'
//import backgroundImage from '../../assets/PurpleCard.svg'

import ImageWithText from '.'

storiesOf('ImageWithText', module)
  .add('index', () => (
    <ImageWithText
      title="Have you seen this man?"
      bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
      Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
      Nunc posuere metus sed magna molestie, et tristique lorem elementum."
      inverted={true}
      backgroundImage={backgroundImage}
     />
  ))
