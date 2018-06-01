import React from 'react'
import { storiesOf } from '@storybook/react'
import blueBG from '../../assets/Card.svg'
import purpleBG from '../../assets/PurpleCard.svg'

import Card from '.'

storiesOf('Card', module)
  .add('Blue Card', () => (
    <Card
      title="Have you seen this man?"
      bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
      Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
      Nunc posuere metus sed magna molestie, et tristique lorem elementum."
      inverted={false}
      backgroundImage={blueBG}
     />
  ))
  .add('Purple Card', () => (
    <Card
      title="Have you seen this man?"
      bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
      Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
      Nunc posuere metus sed magna molestie, et tristique lorem elementum."
      inverted={false}
      backgroundImage={purpleBG}
     />
  ))
