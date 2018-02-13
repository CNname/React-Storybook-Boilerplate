import React from 'react'
import { storiesOf } from '@storybook/react'

import PageTitle from '.'

storiesOf('PageTitle', module)
  .add('index', () => (
    <PageTitle title={'about dsconf'}/>
  ))
