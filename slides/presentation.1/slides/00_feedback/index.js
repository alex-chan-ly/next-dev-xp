import React from 'react'
import {
  Slide,
} from 'spectacle'
import FeedbackForm from '../../components/FeedbackForm';
const feedback = (type, section) => ([
  <Slide align="center center" transition={['zoom']} bgColor='primary'>
    <FeedbackForm type={type} section={section} />
  </Slide>
])

export default feedback;
