import React from "react";

import {
  Heading,
  Slide,
  Markdown,
  Text
} from "spectacle";
import Terminal from 'spectacle-terminal'
import CodeSlide from 'spectacle-code-slide'
import WorkshopHome from '../../components/WorkshopHome';
import { step1,step2, istioPods, istioPodDescription, istioInstall, istioInstallDescription, apiPods } from './messages'
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
    title={`Service Mesh Deployment`}
    description={`Initialising the deployment of Istio and then deploying a microservice stack into the "Service Mesh" and interact with the demo application and available observability tooling`}
    difficulty={3}
    minutes={60}
    number={"02"} />,
   <Slide>
    <Heading size={6} textColor='tertiary'>
      Step 1 - Deploy Istio
    </Heading>
    <MarkDownWrapper>
      <Markdown>{step1.one}</Markdown>
    </MarkDownWrapper>
  </Slide>,
  <CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={style.note}
  codeStyle={{ fontSize: '0.8em' }}
  style={{ padding: '40% 0px 10% 0px', ...style.pre }}
  lang='vim'
  color={'#d8d8d8'}
  bgColor='codeBackground'
  code={istioInstall}
  ranges={istioInstallDescription}
  />,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 1.1 - Check Istio deployment
    </Heading>
    <Text margin='10px 0 0' textColor='secondary' size={2}>
      View the status of the services running in the istio-system namespace
    </Text>
    <Terminal
      title='1. castlemilk@digio: ~(zsh)'
      output={[
        <TerminalLineWrapper size={18}>kubectl get pods -n istio-system</TerminalLineWrapper>,
        <div>
          {istioPods.split(/\n/).map((line, index) => <TerminalLineWrapper size={18} key={`istio-dep-${index}`}>{line}</TerminalLineWrapper>)}
        </div>
      ]}
    />
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{ padding: '20% 0px 10% 0px', ...style.pre }}
    lang='vim'
    color={'#d8d8d8'}
    bgColor='codeBackground'
    code={istioPods}
    ranges={istioPodDescription}
  />,
  <Slide>
    <Heading size={6} textColor='tertiary'>
      Step 2 - Deploy microservice stack
    </Heading>
    <MarkDownWrapper>
      <Markdown>{step2.one}</Markdown>
    </MarkDownWrapper>
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 2.1 - check deployment
  </Heading>
  <Text margin='10px 0 0' textColor='secondary' size={2}>
    View the deployed resources
  </Text>
  <Terminal
    title='1. castlemilk@digio: ~(zsh)'
    output={[
      <TerminalLineWrapper>kubectl get po --namespace mesh</TerminalLineWrapper>,
      <div>
        {apiPods.split(/\n/).map((line, index) => <TerminalLineWrapper size={27} key={`istio-dep-${index}`}>{line}</TerminalLineWrapper>)}
      </div>
    ]}
  />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 2.2 - Demo Application
    </Heading>
    <MarkDownWrapper>
        <Markdown>{step2.two}</Markdown>
      </MarkDownWrapper>
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 2.3 - Access Observability tooling
    </Heading>
    <MarkDownWrapper>
        <Markdown>{step2.three}</Markdown>
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
]