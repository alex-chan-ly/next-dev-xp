import React from 'react'
import {
  Heading,
  Slide,
  CodePane,
  Text,
} from 'spectacle'
import Terminal from "spectacle-terminal";
import CodeSlide from 'spectacle-code-slide'
import { localArchitectureLabels, repoStructureContent, topologyLabels } from './messages';
import Architecture from './components/Architecture';
import Topology from './components/Topology';
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
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='secondary' caps>
      Getting Started 
    </Heading>
    <Text margin={"0 0 20px 0"} size={6} textColor='secondary'>
      Install the training repository and bootstrap your environment as follows:
    </Text>
    <CodePane
      source={gitClone}
      lang="vim"
      textSize={24}
  />
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 640, padding: '40% 0px 1% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/repostructure.txt')}
    ranges={repoStructureContent}
  />,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='secondary' caps>
      Get Help
    </Heading>
    <Terminal title="1. castlemilk@digio: ~(zsh)" output={[
              <div style={{ fontSize: 16}}>$ make help</div>,
              <div style={{ fontSize: 16}}>
                <div>Usage:</div>
                <div style={{ display: 'flex'}}><div style={STYLE.yellow}>{"  make "}</div><div style={STYLE.green}>{"<target>"}</div></div>
                <div style={{ display: 'flex'}}>Targets:</div>
                <div style={{ display: 'flex'}}><div style={STYLE.blue}>Bootstrap</div></div>
                <div style={{ display: 'flex'}}><div style={STYLE.yellow}>  bootstrap</div><div style={STYLE.green}> bootstrap training environment</div></div>
                <div style={{ display: 'flex'}}><div style={STYLE.blue}>Services</div></div>
                <div style={{ display: 'flex'}}><div style={STYLE.yellow}>  build</div><div style={STYLE.green}> build all services</div></div>
                <div style={{ display: 'flex'}}>...</div>
              </div>]}
            />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='secondary' align="center center" maxWidth={1500}>
    <Architecture labels={localArchitectureLabels} />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='secondary' align="center center" maxWidth={1500}>
    <Topology labels={topologyLabels} />
  </Slide>,
  <Slide>
    <Heading>Before Beginning</Heading>
    <Text> ⚠️   Ensure your local environment is cleared of any unwanted resources, to be sure run the following</Text>
    <Terminal title="1. castlemilk@digio: ~(zsh)" output={[
              <div style={{ fontSize: 16}}>$ make clean</div>,
              <div style={{ fontSize: 16}}>
                <div> ✅ Environment cleaned</div>
              </div>]}
            />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Check Cluster Health
  </Heading>
  <Text margin='10px 0 0' textColor='secondary' size={2}>
    Check your locally running cluster's health as follows
  </Text>
  <Terminal
    title='1. castlemilk@digio: ~(zsh)'
    output={[
      <div>$ kubectl get nodes</div>,
      <div>
        <div>NAME STATUS ROLES AGE VERSION</div>
        <div>docker-for-desktop Ready master 137d v1.10.3</div>
      </div>,
      <div>$ kubectl get componentstatuses</div>,
      <div>
        <div>NAME STATUS MESSAGE ERROR</div>
        <div>controller-manager Healthy ok</div>
        <div>scheduler Healthy ok</div>
        <div>{`etcd-0               Healthy   {"health": "true"}`}</div>
      </div>
    ]}
  />
</Slide>,
]
