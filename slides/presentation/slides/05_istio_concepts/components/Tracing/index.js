import React from 'react'
import Collector from './images/collector.svg'
import Elasticsearch from './images/elasticsearch.svg'
import Jaeger from './images/jaeger.svg'
import Microservice from './images/microservice.svg'
import Mixer from './images/mixer.svg'
import {
  Wrapper,
  LabelWrapper,
  DiagramWrapper,
  DiagramLabel,
  CollectorImageWrapper,
  ElasticsearchImageWrapper,
  JaegerImageWrapper,
  MicroserviceImageWrapper,
  MixerImageWrapper,
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
class Tracing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
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
          <MicroserviceImageWrapper
            src={Microservice}
            onMouseOver={() => this.handleHover(0)}
            selected={this.state.index === 0}
          />
          <MixerImageWrapper
            src={Mixer}
            onMouseOver={() => this.handleHover(1)}
            selected={this.state.index === 1}
          />
          <CollectorImageWrapper
            src={Collector}
            onMouseOver={() => this.handleHover(2)}
            selected={this.state.index === 2}
          />
          <ElasticsearchImageWrapper
            src={Elasticsearch}
            onMouseOver={() => this.handleHover(3)}
            selected={this.state.index === 3}
          />
          <JaegerImageWrapper
            src={Jaeger}
            onMouseOver={() => this.handleHover(4)}
            selected={this.state.index === 4}
          />
          
        </DiagramWrapper>
        <DiagramLabel scale={this.state.scale}>{labelView}</DiagramLabel>
      </Wrapper>
    )
  }
}

export default Tracing