import React from "react";

import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Markdown,
  Slide,
  Text
} from "spectacle";
import WorkshopHome from '../../components/WorkshopHome';
import Terminal from 'spectacle-terminal'
import CodeSlide from 'spectacle-code-slide'
import { step2, getPodsWithLabels, task1, codeSlideOriginAuthenticationJWT } from './messages'
import { MarkDownWrapper, TerminalLineWrapper, IframeWrapper, Iframe } from './style'
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
  <WorkshopHome
    title={`Security - Role Based Access Control`}
    description={`Using Istio's RBAC construct to authorize access for destinations and identities within the service mesh`}
    difficulty={4}
    minutes={40}
    number={"09"} />,
    <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 1 - Install Istio
    </Heading>
    <MarkDownWrapper>
      <Markdown>{step2.one}</Markdown>
    </MarkDownWrapper>
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 2 - Deploy microservices into service mesh
    </Heading>
    <MarkDownWrapper>
      <Markdown>{step2.two}</Markdown>
    </MarkDownWrapper>
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 3 - Check Deployed Services
    </Heading>
    <Text margin='10px 0 0' textColor='secondary' size={2}>
      View Pod Labels
    </Text>
    <Terminal
    title='1. castlemilk@digio: ~(zsh)'
    output={[
      <TerminalLineWrapper>kubectl get po --namespace mesh --show-labels</TerminalLineWrapper>,
      <div>
        {getPodsWithLabels.split(/\n/).map((line, index) => <TerminalLineWrapper size={20} key={`istio-dep-${index}`}>{line}</TerminalLineWrapper>)}
      </div>
    ]}
  />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 4 - Access Demo Application
  </Heading>
  <MarkDownWrapper>
      <Markdown>{step2.three}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 4 - Access Observability tooling
  </Heading>
  <MarkDownWrapper>
      <Markdown>{step2.four}</Markdown>
    </MarkDownWrapper>
  </Slide>,
]