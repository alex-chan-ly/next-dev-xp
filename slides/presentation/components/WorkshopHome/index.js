import React from 'react'

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from 'spectacle';
import IstioIcon from '../../../assets/istio-icon.svg';
const DURATION_MAX = 10;
const DIFFICULTY_MAX = 6;
const getDifficultyText = (level) => {
  switch (level) {
    case 1:
      return 'Easier than Easy'
    case 2:
      return 'Easy'
    case 3:
      return 'Medium'
    case 4:
      return 'Harder'
    case 5:
      return 'Istio'
  }
}
const Difficulty = (props) => {
  var items = []
  for (var i=0; i < props.value; i++) {
    items.push(<img key={`difficulty-icon-${i}`} height={32} src={IstioIcon} />)
  }
  for (var j = DIFFICULTY_MAX - props.value; j > 0; j--) {
    items.push(<img key={`difficulty-icon-empty-${i}`} style={{opacity: 0.3}} height={32} src={IstioIcon} />)
  }
  return <div style={{ margin: '10px 0 0', display: 'flex'}}>{items}</div>;
}
const WorkshopHome = props => (
  <Slide transition={['zoom']} bgColor='primary'>
    <Heading size={1} caps lineHeight={1} textColor='secondary'>
      {`Workshop - ${props.number}`}
    </Heading>
    <Text margin='30px 0 0' textColor='tertiary' size={2} bold>
      {props.title}
    </Text>
    <Text margin='40px 0 20px' textColor='secondary' size={6} >
      {props.description}
    </Text>
    <Text textAlign={'left'} margin='50px 0 0' textColor='tertiary' size={2} bold>
      {`Duration [${props.minutes} mins]:  ${new Array(Math.round(props.minutes / 10) || 1).fill('☕️').join('')}`}
    </Text>
      <div style={{ display: 'flex'}} className="wrapper">
        <div styyle={{ marginRight: 10 }} className="title">
          <Text textAlign={'left'} margin='10px 0 0' textColor='tertiary' size={2} bold>
            {`Difficulty [${getDifficultyText(props.difficulty)}]:`}
          </Text>
        </div>
        <div style={{ justifyContent: 'center', marginLeft: 10, alignContent: 'center', display: 'flex', flexDirection: 'column'}} className="level">
        <Difficulty value={props.difficulty} />
        </div>
      </div>

  </Slide>
)

export default WorkshopHome
