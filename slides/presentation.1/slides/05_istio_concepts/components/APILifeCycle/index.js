import React from 'react'
import Background from './images/background.svg'
import APIRequest from './images/api-request.svg'
import APIRequestHandler from './images/api-request-handler.svg'
import Authentication from './images/authentication.svg'
import MutatingAdmissionController from './images/mutating-admission-controller.svg'
import MutatingWebhook from './images/mutating-webhook.svg'
import ObjectValidation from './images/object-validation.svg'
import ValidatingAdmissionController from './images/validating-admission-controller.svg'
import ValidatingWebhook from './images/validating-webhook.svg'
import ETCD from  './images/etcd.svg';
import {
  Wrapper,
  LabelWrapper,
  DiagramWrapper,
  DiagramLabel,
  BackgroundImageWrapper,
  APIRequestImageWrapper,
  APIRequestHandlerImageWrapper,
  AuthenticationImageWrapper,
  MutatingAdmissionControllerImageWrapper,
  MutatingWebhookImageWrapper,
  ObjectValidationImageWrapper,
  ValidatingAdmissionControllerImageWrapper,
  ValidatingWebhookImageWrapper,
  ETCDImageWrapper,
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
class APILifeCycle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 6,
      items: [
        {
          index: 0
        },
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
          />
          <APIRequestImageWrapper
            src={APIRequest}
            onMouseOver={() => this.handleHover(0)}
            selected={this.state.index === 0}
          />
          <APIRequestHandlerImageWrapper
            src={APIRequestHandler}
            onMouseOver={() => this.handleHover(1)}
            selected={this.state.index === 1}
          />
          <AuthenticationImageWrapper
            src={Authentication}
            onMouseOver={() => this.handleHover(2)}
            selected={this.state.index === 2}
          />
          <MutatingAdmissionControllerImageWrapper
            src={MutatingAdmissionController}
            onMouseOver={() => this.handleHover(3)}
            selected={this.state.index === 3}
          />
          <MutatingWebhookImageWrapper
            src={MutatingWebhook}
            onMouseOver={() => this.handleHover(4)}
            selected={this.state.index === 4}
          />
          <ObjectValidationImageWrapper
            src={ObjectValidation}
            onMouseOver={() => this.handleHover(5)}
            selected={this.state.index === 5}
          />
          <ValidatingAdmissionControllerImageWrapper
            src={ValidatingAdmissionController}
            onMouseOver={() => this.handleHover(6)}
            selected={this.state.index === 6}
          />
          <ValidatingWebhookImageWrapper
            src={ValidatingWebhook}
            onMouseOver={() => this.handleHover(7)}
            selected={this.state.index === 7}
          />
          <ETCDImageWrapper
            src={ETCD}
            onMouseOver={() => this.handleHover(8)}
            selected={this.state.index === 8}
          />
        </DiagramWrapper>
        <DiagramLabel scale={this.state.scale}>{labelView}</DiagramLabel>
      </Wrapper>
    )
  }
}

export default APILifeCycle