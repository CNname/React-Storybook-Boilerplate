/* Helpful imports */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

/* The components to use in the stories */
import Box from 'Box'
import Icon from 'Icon'

/* The component to document */
import Button from '.';

storiesOf('Button', module)
  .add('index',
    withInfo()(() => {
      return (
        <div>
          <Box>
            <Button onClick={function(){ alert('You clicked!')}}>I am just a button</Button>
          </Box>
        </div>
      )
  }))
