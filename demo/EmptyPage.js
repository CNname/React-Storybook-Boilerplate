import React, { PureComponent } from "react";
import { Hero } from '../lib/component-library'

import { Typography } from '../lib/component-library'

class EmptyPage extends PureComponent {
  render () {
    console.log("asdasdsa", Typography)

    return (
        <div style={{
          padding: "3rem"
        }}>
          <Typography font="latobold">
            This is an empty page
          </Typography>
          <Typography font="lato">
            1. Start by visiting <a href="http://localhost:5000">here</a>
          </Typography>

          <Typography font="lato">2. Select and image and upload it</Typography>
          <Typography font="lato">3. Then select the components you want to render and click <b>Create UI</b></Typography>
        </div>
    )
  }
}

export default EmptyPage
