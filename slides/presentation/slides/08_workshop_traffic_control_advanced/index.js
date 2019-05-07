import React from 'react'
import {
  Heading,
  Slide,
  Markdown,
  Text
} from 'spectacle'
import Terminal from 'spectacle-terminal'
import WorkshopHome from '../../components/WorkshopHome';
import { step2, getPodsWithLabels, task1, task2, task3, task4 } from './messages'
import { MarkDownWrapper, TerminalLineWrapper, IframeWrapper, Iframe } from './style'
export default [
  <WorkshopHome
    title={`Traffic Control - Advanced`}
    description={`Enable granular targetting of Canary traffic using client headers, and explore available load balancing algorithms`}
    difficulty={3}
    minutes={45}
    number={"04"} />,
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
<Slide aling="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={4} lineHeight textColor='tertiary'>
    Task 1 - Canary Rollout
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1}</Markdown>
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
    Task 2 - Complete Rollout 
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task2}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide align='center flex-start' transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 3 - LoadBalancer - RANDOM
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task3}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide align='center flex-start' transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 4 - LoadBalancer - ConsistentHash
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task4}</Markdown>
    </MarkDownWrapper>
</Slide>,
]