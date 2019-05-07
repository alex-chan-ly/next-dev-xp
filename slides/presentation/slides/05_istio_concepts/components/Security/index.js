import React from 'react'
import Background from './images/background.svg'
import ControlPlane from './images/control-plane.svg'
import Pilot from './images/pilot.svg'
import Mixer from './images/mixer.svg'
import IngressGateway from './images/ingressgateway.svg'
import EgressGateway from './images/egressgateway.svg'
import ServiceA from './images/service-a.svg'
import ServiceB from './images/service-b.svg'
import Citadel from './images/citadel.svg'
import DataPath from './images/data-path.svg'
import {
  Wrapper,
  LabelWrapper,
  DiagramWrapper,
  DiagramLabel,
  BackgroundImageWrapper,
  ControlPlaneImageWrapper,
  PilotImageWrapper,
  MixerImageWrapper,
  IngressGatewayImageWrapper,
  EgressGatewayImageWrapper,
  ServiceAImageWrapper,
  ServiceBImageWrapper,
  CitadelImageWrapper,
  DataPathImageWrapper,
} from './style'
import { Markdown } from 'spectacle'

const Label = props => (
  <LabelWrapper key={`label-${props.label.index}`} selected={props.index === props.label.index}>
    <div className='header'>{props.label.header}</div>
    <div className='description'>
      <Markdown>{props.label.description}</Markdown>
    </div>
  </LabelWrapper>
)
class Security extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 6,
      items: [
        {
          index: 1
        },
        {
          index: 2
        },
        {
          index: 3
        },
        {
          index: 4
        },
        {
          index: 5
        },
        {
          index: 6
        },
        {
          index: 7
        },
        {
          index: 8
        },
        {
          index: 9
        },
        {
          index: 10 
        },
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
      scale: window.innerWidth >= 1200 ? (window.innerWidth / window.innerHeight) * (480 / 640) : (window.innerWidth / window.innerHeight) * (480 / 640) * 0.7
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
      <Label key={`arch-label-${label.index}`} index={this.state.index} label={label} />
    ))
    return (
      <Wrapper>
        <DiagramWrapper scale={this.state.scale}>
          <BackgroundImageWrapper
            src={Background}
          />
          <ControlPlaneImageWrapper
            src={ControlPlane}
            onMouseOver={() => this.handleHover(1)}
            selected={this.state.index === 1}
          />
          <PilotImageWrapper
            src={Pilot}
            onMouseOver={() => this.handleHover(2)}
            selected={this.state.index === 2}
          />
          <MixerImageWrapper
            src={Mixer}
            onMouseOver={() => this.handleHover(3)}
            selected={this.state.index === 3}
          />
          <IngressGatewayImageWrapper
            src={IngressGateway}
            onMouseOver={() => this.handleHover(4)}
            selected={this.state.index === 4}
          />
          <EgressGatewayImageWrapper
            src={EgressGateway}
            onMouseOver={() => this.handleHover(5)}
            selected={this.state.index === 5}
          />
          <ServiceAImageWrapper
            src={ServiceA}
            onMouseOver={() => this.handleHover(6)}
            selected={this.state.index === 6}
          />
          <ServiceBImageWrapper
            src={ServiceB}
            onMouseOver={() => this.handleHover(7)}
            selected={this.state.index === 7}
          />
          <CitadelImageWrapper
            src={Citadel}
            onMouseOver={() => this.handleHover(8)}
            selected={this.state.index === 8}
          />
          <DataPathImageWrapper
            src={DataPath}
            onMouseOver={() => this.handleHover(9)}
            selected={this.state.index === 9}
          />
        </DiagramWrapper>
        <DiagramLabel scale={this.state.scale}>{labelView}</DiagramLabel>
      </Wrapper>
    )
  }
}

export default Security 