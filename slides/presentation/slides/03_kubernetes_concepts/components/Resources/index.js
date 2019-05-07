import React from 'react'
import Client from './images/client.svg'
import Microservices from './images/microservices.svg'
import Background from './images/background.svg'
import Ingress from './images/ingress.svg'
import IngressGateway from './images/ingress-gateway.svg'
import Service from './images/service.svg'
import Endpoint from './images/endpoint.svg'
import {
  Wrapper,
  LabelWrapper,
  DiagramWrapper,
  DiagramLabel,
  BackgroundImageWrapper,
  ClientImageWrapper,
  EndpointImageWrapper,
  IngressImageWrapper,
  IngressGatewayImageWrapper,
  ServiceImageWrapper,
  MicroservicesImageWrapper
} from './style'
import { Markdown } from 'spectacle'

const Label = props => (
  <LabelWrapper  selected={props.index === props.label.index}>
    <div className='header'>{props.label.header}</div>
    <div className='description'>
      <Markdown>{props.label.description}</Markdown>
    </div>
  </LabelWrapper>
)
class Resources extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 6,
      items: [
        {
          component: <BackgroundImageWrapper src={Background} />,
          index: 0
        },
        {
          component: <ClientImageWrapper src={Client} />,
          index: 1
        },
        {
          component: <IngressImageWrapper src={Ingress} />,
          index: 2
        },
        {
          component: <IngressGatewayImageWrapper src={IngressGateway} />,
          index: 3
        },
        {
          component: <ServiceImageWrapper src={Service} />,
          index: 4
        },
        {
          component: <EndpointImageWrapper src={Endpoint} />,
          index: 5
        },
        {
          component: <MicroservicesImageWrapper src={Microservices} />,
          index: 6
        }
      ],
      width: 0,
      height: 0
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  handleKeyPress (e) {
    if (e.key === 'ArrowUp') {
      this.setState(prevState => ({
        index:
          prevState.index < this.state.items.length ? prevState.index + 1 : 0
      }))
    } else if (e.key === 'ArrowDown') {
      this.setState(prevState => ({
        index:
          prevState.index > 0 ? prevState.index - 1 : this.state.items.length
      }))
    }
  }
  handleHover (index) {
    this.setState({ index: index })
  }
  updateWindowDimensions () {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      scale: (window.innerWidth / window.innerHeight) * (526 / 395) * 0.9
    })
  }
  componentDidMount () {
    this.updateWindowDimensions()
    document.addEventListener('keydown', this.handleKeyPress, false)
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress, false)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  render () {
    const labelView = this.props.labels.map(label => (
      <Label key={`label-${label.index}`} index={this.state.index} label={label} />
    ))
    return (
      <Wrapper>
        <DiagramWrapper scale={this.state.scale}>
          <BackgroundImageWrapper
            src={Background}
            onMouseOver={() => this.handleHover(0)}
            selected={this.state.index === 0}
          />
          <ClientImageWrapper
            src={Client}
            onMouseOver={() => this.handleHover(1)}
            selected={this.state.index === 1}
          />
          <IngressImageWrapper
            src={Ingress}
            onMouseOver={() => this.handleHover(2)}
            selected={this.state.index === 2}
          />
          <IngressGatewayImageWrapper
            src={IngressGateway}
            onMouseOver={() => this.handleHover(3)}
            selected={this.state.index === 3}
          />
          <ServiceImageWrapper
            src={Service}
            onMouseOver={() => this.handleHover(4)}
            selected={this.state.index === 4}
          />
          <EndpointImageWrapper
            src={Endpoint}
            onMouseOver={() => this.handleHover(5)}
            selected={this.state.index === 5}
          />
          <MicroservicesImageWrapper
            src={Microservices}
            onMouseOver={() => this.handleHover(6)}
            selected={this.state.index === 6}
          />
        </DiagramWrapper>
        <DiagramLabel scale={this.state.scale}>{labelView}</DiagramLabel>
      </Wrapper>
    )
  }
}

export default Resources
