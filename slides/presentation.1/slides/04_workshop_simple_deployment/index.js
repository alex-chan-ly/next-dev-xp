import React from 'react'
import {
  Heading,
  Slide,
  Markdown,
  Text
} from 'spectacle'
import Terminal from 'spectacle-terminal'
import WorkshopHome from '../../components/WorkshopHome';
import { step2 } from './messages'
import { MarkDownWrapper, TerminalLineWrapper, IframeWrapper, Iframe } from './style'
export default [
  <WorkshopHome
    title={`Simple Deployment`}
    description={`Deploy a basic microservice stack using NGINX ingress controller and obtain some basic visibility into application performance`}
    difficulty={2}
    minutes={40}
    number={"01"} />,
  <Slide>
    <Heading size={6} textColor='tertiary'>
      Step 1 - Deploy Services
    </Heading>
    <MarkDownWrapper>
      <Markdown>{step2.one}</Markdown>
    </MarkDownWrapper>
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
    <Heading size={6} textColor='tertiary'>
      Step 2 - Check Deployed Services
    </Heading>
    <Text margin='10px 0 0' textColor='secondary' size={2}>
      View the status of the newly deployed services with the following
    </Text>
    <Terminal
      title='1. castlemilk@digio: ~(zsh)'
      output={[
        <TerminalLineWrapper>kubectl get pods -n simple</TerminalLineWrapper>,
        <div>
          <TerminalLineWrapper>{`NAME                                    READY     STATUS    RESTARTS   AGE`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-auth-6c565cbbf5-fvmkh               1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-auth-6c565cbbf5-fzg82               1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-information-676fc8874d-gd7hw        1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-pricing-failsow-6f8554bf55-vw4w4    1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-pricing-fcfbd94f6-mmppc             1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-pricing-slow-5b4ff88cd9-n8w6k       1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-product-6d7d7dc4c6-hnmnt            1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-rating-646f648447-xg5pw             1/1       Running   0          1d`}</TerminalLineWrapper>
          <TerminalLineWrapper>{`api-rating-limited-c97cc4544-ckjsd      1/1       Running   0          1d`}</TerminalLineWrapper>
        </div>
      ]}
    />
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 3 - Check Ingress
  </Heading>
  <Text margin='10px 0 0' textColor='secondary' size={2}>
    View the deployed Ingress rules
  </Text>
  <Terminal
    title='1. castlemilk@digio: ~(zsh)'
    output={[
      <TerminalLineWrapper>kubectl get ingress -n simple</TerminalLineWrapper>,
      <div>
        <TerminalLineWrapper>{`NAME                HOSTS                 ADDRESS     PORTS     AGE`}</TerminalLineWrapper>
        <TerminalLineWrapper>{`api-auth            training.local        localhost   80        10d`}</TerminalLineWrapper>
        <TerminalLineWrapper>{`api-information     training.local        localhost   80        36d`}</TerminalLineWrapper>
        <TerminalLineWrapper>{`api-pricing         training.local        localhost   80        36d`}</TerminalLineWrapper>
        <TerminalLineWrapper>{`api-product         training.local        localhost   80        36d`}</TerminalLineWrapper>
        <TerminalLineWrapper>{`api-rating          training.local        localhost   80        36d`}</TerminalLineWrapper>
        <TerminalLineWrapper>{`demo-webapp         demo.training.local   localhost   80        36d`}</TerminalLineWrapper>
      </div>
    ]}
  />
</Slide>,
<Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 3 - View Demo Application
  </Heading>
  <MarkDownWrapper>
      <Markdown>{step2.three}</Markdown>
    </MarkDownWrapper>
  </Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 4 - Observability
  </Heading>
  <MarkDownWrapper>
      <Markdown>{step2.four}</Markdown>
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
      Grafana + Prometheus
    </Heading>
  <IframeWrapper>
    <Iframe
      src={`https://grafana.obs.training.local`}
    />
  </IframeWrapper>
</Slide>,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='tertiary'>
    Step 5 - Canary 
  </Heading>
  <MarkDownWrapper>
      <Markdown>{step2.five}</Markdown>
    </MarkDownWrapper>
  </Slide>,
]