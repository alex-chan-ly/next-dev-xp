import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Image,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide'
import Architecture from "./components/Architecture";
import APILifeCycle from "./components/APILifeCycle";
import IngressFlowBasic from './components/IngressFlowBasic';
import EgressFlowBasic from './components/EgressFlowBasic';
import EgressFlowAdvanced from './components/EgressFlowAdvanced';
import Security from './components/Security';
import JaegerUI from '../../../assets/jaeger-ui.svg';
import {
  architectureMeta,
  apilifecycleMeta,
  ingressBasicMeta,
  egressBasicMeta,
  egressAdvancedMeta,
  codeSlideGateway,
  codeSlideVirtualService,
  codeSlideDestinationRuleExternal,
  codeSlideDestinationRuleVersions,
  codeSlideServiceEntry,
  tracingMeta,
  codeSlidePostSpans,
  securityMeta,
  codeSlideAuthenticationMTLS,
  meshPolicy,
  codeSlideOriginAuthenticationJWT
} from './messages'
import Tracing from "./components/Tracing";
import { ImageWrapper } from './style'
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
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Istio Concepts 
    </Heading>
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary" align="center flex-start" >
    <Architecture labels={architectureMeta} />
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary">
    <APILifeCycle labels={apilifecycleMeta} /> 
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 640, padding: '40% 0px 0% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/gateway.txt')}
    ranges={codeSlideGateway}
  />,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 640, padding: '47% 0px 0% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/virtualservice.txt')}
    ranges={codeSlideVirtualService}
  />,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={{ bottom: 30, ...style.note}}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 560, padding: '40% 0px 0% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/destinationrule-versions.txt')}
    ranges={codeSlideDestinationRuleVersions}
  />,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={{ ...style.note, bottom: 0}}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 560, padding: '44% 0px 5% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/destinationrule-external.txt')}
    ranges={codeSlideDestinationRuleExternal}
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
    code={require('raw-loader!./code-examples/serviceentry.txt')}
    ranges={codeSlideServiceEntry}
  />,
  <Slide transition={["zoom"]} bgColor="primary" align="center center" >
    <IngressFlowBasic labels={ingressBasicMeta}/>
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary" align="center center" >
    <EgressFlowBasic labels={egressBasicMeta}/>
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary" align="center center" >
    <EgressFlowAdvanced labels={egressAdvancedMeta}/>
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary" align="center center">
  <Heading>Distributed Tracing</Heading>
  <List>
    <ListItem>Spans</ListItem>
    <ListItem>Traces</ListItem>
    <ListItem>Architecture</ListItem>
    <ListItem>https://zipkin.io/zipkin-api/#/default/post_spans</ListItem>
  </List>
  </Slide>,
  <Slide>
    <Tracing labels={tracingMeta}/>
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={{ ...style.note, bottom: 0}}
    codeStyle={{ fontSize: '0.8em' }}
    style={{  height: 560, padding: '36% 0px 6% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/post-spans.txt')}
    ranges={codeSlidePostSpans}
  />,
  <Slide align="center flex-start">
    <Heading size={6}  caps lineHeight={1} textColor="secondary">
      Jaeger UI
    </Heading>
    <ImageWrapper src={JaegerUI} />
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary" align="center center">
    <Heading>Security</Heading>
    <List>
      <ListItem>Security Architecture</ListItem>
      <ListItem>Authentication</ListItem>
      <ListItem>Authorization</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading>Security</Heading>
    <Text>Breaking down a monolithic application into atomic services offers various benefits, including better agility, better scalability and better ability to reuse services. However, microservices also have particular security needs:</Text>
    <List>
      <ListItem>To defend against the man-in-the-middle attack, they need traffic encryption.</ListItem>
      <ListItem>To provide flexible service access control, they need mutual TLS and fine-grained access policies.</ListItem>
      <ListItem>To audit who did what at what time, they need auditing tools.</ListItem>
  </List>
  </Slide>,
  <Slide>
    <Security labels={securityMeta}/>
  </Slide>,
  <Slide transition={["zoom"]} bgColor="primary" align="center center">
    <Heading>Security - Authentication Policy</Heading>
    <List>
      <ListItem>How do we control when and what service should use mTLS</ListItem>
      <ListItem>the effect of enabling cluster wide mTLS</ListItem>
      <ListItem>using JWT for authentication</ListItem> 
    </List>
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={{ ...style.note, bottom: 0}}
    codeStyle={{ fontSize: '1em' }}
    style={{  height: 560, padding: '4% 0px 5% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/authentication-mtls.txt')}
    ranges={codeSlideAuthenticationMTLS}
  />,
  <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
  <Heading size={6} textColor='secondary' caps>
    mTLS Enabled Cluster
  </Heading>
  <Text margin={"0 0 20px 0"} size={6} textColor='secondary'>
    when we deploy a cluster with mTLS enabled we have the following service mesh wide policy applied
  </Text>
  <CodePane
    source={meshPolicy}
    lang="yaml"
    textSize={24}
  />
  <Text margin={"0 0 20px 0"} size={6} textColor='secondary'>
  Policies in mesh-scope can affect all services in the mesh. To prevent conflict and misuse, only one policy can be defined in mesh-scope storage. That policy must be named default and have an empty targets: section.
  </Text>
  </Slide>,
  <Slide>
    <Heading>Origin Authentication</Heading>
    <Text>Istio provides a mechanism to do end-user (or Origin) authentication as part of the service mesh data plane.
    <Text>Normally this would have to be done within the application, which would have involved some per-service specific code being developed to understand how to carry out end-user authentication.</Text>
    We can now offload this to Istio.
    Support currently only exists for JWT. We'll run through what this configuration looks like
    </Text>
  </Slide>,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={{ ...style.note, bottom: 0}}
  codeStyle={{ fontSize: '1em' }}
  style={{  height: 560, padding: '40% 0px 2% 0px', ...style.pre }}
  lang='yaml'
  bgColor='codeBackground'
  color={style.codeColor}
  code={require('raw-loader!./code-examples/authentication-jwt.txt')}
  ranges={codeSlideOriginAuthenticationJWT}
/>,
]