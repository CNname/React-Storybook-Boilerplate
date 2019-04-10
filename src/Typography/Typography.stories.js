import React from 'react'
import { storiesOf } from '@storybook/react'

import Typography from '.'

storiesOf('Typography', module)
  .add('index', () => (
    <Typography />
  )).add('tesxt', () => (
    <Typography style="lato">
      <p>aasd</p>
    </Typography>
  )).add('aaaa', () => (
    <Typography style="futurabold">
      <p>aasd</p>
    </Typography>
  ))
