import React from 'react'
import {
  Heading,
  Slide,
  Markdown,
  Text
} from 'spectacle'
import Terminal from 'spectacle-terminal'
import CodeSlide from 'spectacle-code-slide'
import WorkshopHome from '../../components/WorkshopHome';
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
    title={`End User Authorization`}
    description={`We can use Istio to manage how end-users are authorizated to consume or interact with specific microservices.
Using common technologies like JWT to encode the required properties to define access capabilities.`}
    difficulty={4}
    minutes={30}
    number={"07"} />,
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
    Task 1 - Enable End User Authentication via JWT 
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.one}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide align="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 1.1 - Enable End User Authentication via JWT 
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.two}</Markdown>
    </MarkDownWrapper>
</Slide>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note, bottom: 0}}
  codeStyle={{ fontSize: '1em' }}
  style={{  height: 560, padding: '13% 0px 4% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/authentication-jwt.txt')}
  ranges={codeSlideOriginAuthenticationJWT}
/>,
<Slide align="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 1.2 - Enable End User Authentication via JWT 
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.three}</Markdown>
    </MarkDownWrapper>
</Slide>,
<Slide align="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 1.3 - Enable End User Authentication via JWT 
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.four}</Markdown>
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
