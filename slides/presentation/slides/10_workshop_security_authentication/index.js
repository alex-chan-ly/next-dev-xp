import React from 'react'

import {
  Heading,
  Slide,
  Markdown,
  Text
} from 'spectacle'
import Terminal from 'spectacle-terminal'
import WorkshopHome from '../../components/WorkshopHome';
import { step2, getPodsWithLabels, task1, task2, task3, task4, task5 } from './messages'
import { MarkDownWrapper, TerminalLineWrapper, IframeWrapper, Iframe } from './style'

export default [
  <WorkshopHome
    title={`Mesh Authentication`}
    description={`Managing authentication configuration and enable secured mTLS connectivity between intra-mesh and extra-mesh communications`}
    difficulty={2}
    minutes={20}
    number={"06"} />,
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
<Slide align="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 1 - Disable mTLS
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.one}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide align="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 1.1 - Traffic Sniff
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.two}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide
  align='flex-start flex-start'
  transition={['fade']}
  bgColor='secondary'
  transitionDuration={1000}
  textColor='primary'
>
  <Heading size={5} caps lineHeight={1} textColor='white'>
    Grafana
  </Heading>
  <IframeWrapper>
    <Iframe
      src={`https://grafana.obs.training.local`}
    />
  </IframeWrapper>
</Slide>,
<Slide
  align='flex-start flex-start'
  transition={['fade']}
  bgColor='secondary'
  transitionDuration={1000}
  textColor='primary'
>
  <Heading size={5} caps lineHeight={1} textColor='white'>
    Jaeger
  </Heading>
<IframeWrapper>
  <Iframe
    src={`https://jaeger.obs.training.local`}
  />
</IframeWrapper>
</Slide>,
<Slide
  align='flex-start flex-start'
  transition={['fade']}
  bgColor='secondary'
  transitionDuration={1000}
  textColor='primary'
>
  <Heading size={5} caps lineHeight={1} textColor='white'>
    Kiali
  </Heading>
<IframeWrapper>
  <Iframe
    src={`https://kiali.obs.training.local`}
  />
</IframeWrapper>
</Slide>,
<Slide align='center flex-start' transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 2 - Enable mTLS
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task2.one}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide align='center flex-start' transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 2.1 - Traffic Sniff
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task2.two}</Markdown>
    </MarkDownWrapper>
</Slide>,
]
