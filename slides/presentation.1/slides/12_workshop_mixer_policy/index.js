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
import { step2, getPodsWithLabels, task1, task2, task3, task4, task5, codeSlideMemQuota, codeSlideRule, codeSlideQuota, codeSlideQuotaSpec, codeSlideQuotaSpecBinding } from './messages'
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
    title={`Service Limits & Quotas`}
    description={`Using Istio to manage the enforcement of policy that defines clear limits and quotas for individual microservice usage, on a per-consumer basis.`}
    difficulty={3}
    minutes={30}
    number={"08"} />,
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
    Task 1 - Microservice Rate Limit and Quotas
  </Heading>
  <MarkDownWrapper>
      <Markdown>{task1.one}</Markdown>
    </MarkDownWrapper>
</Slide>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note }}
  codeStyle={{ fontSize: '0.8em' }}
  style={{  height: 560, padding: '6% 0px 5% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/handler.memquota.txt')}
  ranges={codeSlideMemQuota}
/>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note }}
  codeStyle={{ fontSize: '0.8em' }}
  style={{  height: 560, padding: '6% 0px 5% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/quota.rule.txt')}
  ranges={codeSlideRule}
/>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note }}
  codeStyle={{ fontSize: '0.8em' }}
  style={{  height: 560, padding: '6% 0px 5% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/requestcount.quota.txt')}
  ranges={codeSlideQuota}
/>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note }}
  codeStyle={{ fontSize: '0.8em' }}
  style={{  height: 560, padding: '40% 0px 7% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/requestcount.quotaspec.txt')}
  ranges={codeSlideQuotaSpec}
/>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note }}
  codeStyle={{ fontSize: '0.8em' }}
  style={{  height: 560, padding: '6% 0px 5% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/requestcount.quotaspecbinding.txt')}
  ranges={codeSlideQuotaSpecBinding}
/>,
<Slide align="center flex-start" transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading lineHeight={2} size={4} textColor='tertiary'>
    Task 1.1 - Increase the rate limit
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
]