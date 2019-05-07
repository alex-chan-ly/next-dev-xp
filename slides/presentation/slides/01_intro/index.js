import React from 'react'
import {
  Heading,
  Slide,
  CodePane,
  Text,
  Image,
} from 'spectacle'
import Terminal from "spectacle-terminal";
import CodeSlide from 'spectacle-code-slide'
import { coursePlanDayOne, coursePlanDayTwo, localArchitectureLabels, repoStructureContent, topologyLabels } from './messages';
import CoursePlan from './components/CoursePlan';
import Architecture from './components/Architecture';
import Topology from './components/Topology';
import Kasna from '../../../assets/kasna.jpg';
const STYLE = {
  blue: { color: '#2196f3' },
  yellow: { color: 'yellow' },
  green: { color: 'green' }
}
const gitClone = `$ git clone git@gitlab.mantelgroup.com.au:future-tech/istio-training.git
$ cd istio-training
$ make bootstrap
`
const style = {
  note: { bottom: 30, position: 'relative' },
  pre: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: { margin: 0, fontSize: '2em' },
  codeColor: '#d8d8d8'
}
export default [
  <Slide align="center center" transition={['zoom']} bgColor='primary'>
    <Image src={Kasna}/>
    <Heading margin="100px 0 0 0" size={1} fit caps lineHeight={1} textColor='secondary'>
      Developer Experience
    </Heading>
    <Text margin='30px 0 0' textColor='tertiary' size={5} bold>
      Ben Ebsworth
    </Text>
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 640, padding: '50% 0px 0% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/repostructure.txt')}
    ranges={repoStructureContent}
  />,
  <Slide transition={['fade']} bgColor='primary' textColor='secondary' align="center center" maxWidth={1500}>
    <Architecture labels={localArchitectureLabels} />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='secondary' align="center center" maxWidth={1500}>
  <Topology labels={topologyLabels} />
</Slide>,
]