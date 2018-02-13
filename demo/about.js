import React from 'react'
import ReactDOM from 'react-dom'

import {
  Header,
  PageTitle,
  PersonCard,
  Slide
} from '../lib/my-awesome-library'

import backgroundImage from '../assets/dsconf2-wide.jpg'


const About = () => {
  return (
    <div>
       <PageTitle
        title={'About DSConf'}
      >
        <Header />
      </PageTitle>

       <Slide
          title="Not just a conference, more like community."
          bodyText="DSCONF started as an idea by Mikko Häkkinen, within Elisa. What originally was an idea to gather up and share knowledge, exploded into a full-fledged conference, based on the worldwide interest both from speakers’ perpective but active participation as well. Naturally the need for a team was filled by passionate designers that wanted to see this through. We are proud to present you this event, as our hard work and passion, and we hope you are part of this for 2018 and the years to come."
          inverted
        />
    </div>
  )
}

export default About
