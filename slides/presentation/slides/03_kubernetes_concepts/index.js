import React from 'react'
import {
  Heading,
  Slide,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import { resourceMeta } from './messages'
import Resources from './components/Resources'
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
  <Slide transition={['spin']} bgColor='primary'>
    <Heading size={4} fit caps lineHeight={1} textColor='secondary'>
      Kubernetes Concepts
    </Heading>
  </Slide>,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{ padding: '17% 0px 0% 0px', ...style.pre }}
    lang='yaml'
    color={'#d8d8d8'}
    bgColor='codeBackground'
    code={require('raw-loader!./code-examples/deployment.yaml')}
    ranges={[
      { loc: [0, 30], title: 'Deployment' },
      { loc: [1, 2], title: 'Core Kubernetes Resource' },
      {
        loc: [4, 6],
        title: 'Labels',
        note:
          'Deployment labels, top level deployment metadata NOT used by Service selector'
      },
      {
        loc: [7, 10],
        title: 'Deployment selector',
        note:
          'mechanism for selecting which deployed Pods to manage under a "Deployment"'
      },
      {
        loc: [10, 27],
        title: 'Pod Template',
        note:
          'the configuration template that will be used for Pods in the deployment'
      },
      {
        loc: [12, 14],
        note:
          'These labels will be used by a Service selector to contruct an Endpoints list',
        title: 'Pod Labels'
      },
      {
        loc: [24, 26],
        note: `List of ports to expose from the container. Not required, 
Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network.`,
        title: 'ContainerPort'
      }
    ]}
  />,
  <CodeSlide
    transition={['fade']}
    padding={20}
    titleStyle={style.title}
    noteStyle={style.note}
    style={{ padding: '20% 0px 10% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    textColor='primary'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/endpoint.txt')}
    ranges={[
      { loc: [0, 22], title: 'Endpoint' },
      { loc: [1, 2], title: 'Core Kubernetes Resource' },
      {
        loc: [3, 4],
        title: 'Name',
        note:
          'matches name of the Service resource which is responsible for constructing the given endpoint list'
      },
      {
        loc: [7, 13],
        title: 'Pod 1',
        note: 'discovered/filter PodIP address and target metadata'
      },
      {
        loc: [13, 19],
        title: 'Pod 2',
        note: 'discovered/filter PodIP address and target metadata'
      },
      {
        loc: [19, 22],
        note: 'Ports that the endpoints will be load balanced on',
        title: 'Endpoint Port'
      }
    ]}
  />,
  <CodeSlide
    transition={['fade']}
    padding={20}
    titleStyle={style.title}
    noteStyle={style.note}
    style={{ padding: '20% 0px 10% 0px', ...style.pre }}
    lang="yaml"
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/service-microservice.txt')}
    ranges={[
      { loc: [0, 12], title: 'Service' },
      { loc: [1, 2], title: 'Core Kubernetes Resource' },
      {
        loc: [5, 6],
        title: 'Service Type',
        note:
          'default is ClusterIP, but can also be set to NodePort, LoadBalancer or ExternalName'
      },
      {
        loc: [7, 8],
        title: 'Pod Selector',
        note:
          'This will be used to construct the Endpoint list that the ClusterIP VIP will load balance across'
      },
      {
        loc: [9, 12],
        title: 'Service Port',
        note: 'The ports that the ClusterIP VIP will accept connections on'
      }
    ]}
  />,
  <CodeSlide
    transition={['fade']}
    padding={0}
    titleStyle={style.title}
    noteStyle={style.note}
    codeStyle={{ fontSize: '0.8em' }}
    style={{ padding: '13% 0px', ...style.pre }}
    lang='yaml'
    bgColor='codeBackground'
    color={style.codeColor}
    code={require('raw-loader!./code-examples/ingress.txt')}
    ranges={[
      { loc: [0, 27], title: 'Ingress' },
      { loc: [1, 2], title: 'Core Kubernetes Resource' },
      {
        loc: [4, 8],
        title: 'Annotations',
        note:
          'specific metadata the ingress-controller can use to adapt configuration'
      },
      {
        loc: [10, 17],
        title: 'Rule',
        note:
          'A rule is defined which specifies what actions to take when a request matches the given rule'
      },
      {
        loc: [10, 11],
        title: 'Host',
        note:
          'A rule can define a hostname that it applies to, i.e the request has the header "Hostname: training.local"'
      },
      {
        loc: [13, 14],
        title: 'Path',
        note:
          'The URL path that the rule applies to'
      },
      {
        loc: [14, 17],
        title: 'Backend',
        note:
          'The destination that the request will be proxied/routed to when successfully matched'
      }
    ]}
  />,
  <Slide>
    <Resources labels={resourceMeta} />
  </Slide>,
  <CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={style.note}
  codeStyle={{ fontSize: '0.8em' }}
  style={{padding: '13% 0px', ...style.pre}}
  lang='vim'
  color={style.codeColor}
  bgColor='codeBackground'
  textColor='primary'
  code={require('raw-loader!./code-examples/iptables-ingress.txt')}
  ranges={[
    { loc: [0, 6], title: 'iptables - ingress',
      note:
        'These are the iptables rules handle packets that are being sent into the "gateway" of Kubernetes, which in this case is the NodePort'
   },
    {
      loc: [1, 2],
      title: 'NodePort',
      note:
        'Rule to route the request coming in on the NodePort on port 30129 and routing it to the CluserIP rule'
    },
    {
      loc: [2, 3],
      title: 'ClusterIP',
      note:
        'Chains the packet to then go to the Service rule KUBE-SVC-REQ4FPVT7WYF4VLA'
    },
    {
      loc: [3, 4],
      title: 'Service',
      note:
        'Service rule then jumps to the Endpoint rule KUBE-SEP-ZLME7X6WVGOK3IL5'
    },
    {
      loc: [5, 6],
      title: 'Endpoint',
      note:
        'The endpoint rule specifies that the request should be DNAT\'d and sent to the PodIP address, which in this case would be the nginx-ingress-controller Pod'
    },
    ]} />,
<CodeSlide
  transition={['fade']}
  padding={0}
  titleStyle={style.title}
  noteStyle={style.note}
  codeStyle={{ fontSize: '0.8em' }}
  style={{padding: '13% 0px', ...style.pre}}
  lang='vim'
  color={style.codeColor}
  bgColor='codeBackground'
  textColor='primary'
  code={require('raw-loader!./code-examples/iptables-service.txt')}
  ranges={[
    { loc: [0, 7], title: 'iptables - service',
   },
    { loc: [0, 1],
      title: 'ClusterIP',
      note:
      'A request to a given service\'s ClusterIP (resolabvle within kubernetes on ${deployment-name}.${name}.svc.cluster.local) will be handled by this rule which will chain/jump to the KUBE-SVC-UGWGCZNKOGVOFQQY'
     },
    {
      loc: [1, 2],
      title: 'ClusterIP -> Endpoint 1',
      note:
        'KUBE-SVC-UGWGCZNKOGVOFQQY jumps to the backend endpoint list, and will round-robin requests using the --mode random flag in the rule, which gives it a 50% of being used given the --probability 0.5 flag this will then send traffic to the backend rule KUBE-SEP-IQTFBWSPJSUOLNFT'
    },
    {
      loc: [2, 3],
      title: 'ClusterIP -> Endpoint 2',
      note:
        'KUBE-SVC-UGWGCZNKOGVOFQQY another rule, which will be evaludated if the first rule is missed based of the 50% probability, this is how the Service loadbalances across multiple endpoints, as this rule has a 50% chance of being used in the event of the above rule which being skiped, finally jumping to the endpoint rule KUBE-SEP-TXQDOE75FD64HURN'
    },
    {
      loc: [4, 5],
      title: 'Endpoint 1',
      note:
        'rule maps to the first PodIP with address 10.1.1.58'
    },
    {
      loc: [6, 7],
      title: 'Endpoint 2',
      note:
        'rule maps to the second PodIP with address 10.1.1.65'
    },
  ]}
   />
] 