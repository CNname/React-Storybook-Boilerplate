import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'

storiesOf('Header', module)
  .add('index', () => (
   <div style={{background: 'black'}}>
      <Header />
   </div>
  ))
