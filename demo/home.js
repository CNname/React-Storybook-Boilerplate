import React from 'react'
import ReactDOM from 'react-dom'
import EmptyPage from "./EmptyPage";
import file from './components.json'

import {
  Header,
  Slide,
  Button,
  ImageWithText,
  Hero
} from '../lib/component-library'

import backgroundImage from '../assets/bg.jpg'

import image from '../assets/SiteLogo.svg'

import card from '../assets/Card.svg';

const Home = () => {
  return (
    <div>
      {Object.keys(file).length !== 0 && file.map(component => {
        switch(component.label) {
          case 'navigation':
            return (
              <div style={{background: 'black'}}>
                <Header />
              </div>
            )
          case 'textblock':
            return (
            <Slide
              title="This is a title"
              bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
              Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
              Nunc posuere metus sed magna molestie, et tristique lorem elementum."
            />
          )
          case 'hero':
            return (
              <Hero
                image={image}
                bgImage={backgroundImage}
                title={'Your website title'}
                subtitle={'Subtitle'}
                cta={<Button text='Learn more'/>}
              />
            )
          case 'imagewithtext':
              return (
                <ImageWithText
                  title="Have you seen this man?"
                  bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer viverra nisi eu lectus finibus, at ullamcorper diam condimentum.
                  Sed sit amet quam facilisis, viverra dui in, sagittis nibh. Mauris maximus erat rhoncus rutrum lacinia.
                  Nunc posuere metus sed magna molestie, et tristique lorem elementum."
                  inverted={true}
                  backgroundImage={image}
                 />
              )
          default:
            return (
              <p>There's nothing</p>
            )
        }
      })} {
        (!file || Object.keys(file).length === 0) && <EmptyPage />
      }
    </div>
  )
}

export default Home
