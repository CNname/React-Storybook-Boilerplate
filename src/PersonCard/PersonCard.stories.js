import React from 'react'
import { storiesOf } from '@storybook/react'

import PersonCard from '.'

storiesOf('PersonCard', module)
  .add('index', () => (
    <PersonCard
      name="Matti Tepponen"
      title="karaoke manager"
      imageUrl="https://randomuser.me/api/portraits/lego/5.jpg"
      linkedinUrl="http://linkedin.com"
    />
  ))
