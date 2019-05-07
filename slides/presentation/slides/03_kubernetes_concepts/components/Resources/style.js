import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'diagram'
    'label';
  grid-template-rows: 80% 250px;
  grid-row-gap: 2%;
  @media only screen and (min-width: 1200px) {
    grid-template-rows: 80% 250px;
    grid-row-gap: 15%;
  }
  @media only screen and (max-width: 640px) {
    grid-row-gap: 1%;
  }
  padding-bottom: 127px;
`
export const LabelWrapper = styled.div`
  grid-area: label;
  display: ${props => (props.selected ? `flex` : `none`)};
  transform: scale(${props => (props.scale > 1.0 ? 1.0 : props.scale)});
  @media only screen and (min-width: 1200px) {
    transform: scale(${props => (props.scale > 2.3 ? 2.3 : props.scale)});
  }
  flex-direction: column;
  position: relative;
  text-align: left;
  justify-content: flex-start;
  margin-top: -3%;

  .header {
    font-size: 25px;
    font-weight: bold;
  }
  .description p {
    font-size: 22px;
  }
  .description code {
    font-size: 22px;
  }
  @media only screen and (max-width: 1920px) {
    .header {
      font-size: 35px;
      font-weight: bold;
    }
    .description p {
      font-size: 33px;
    }
    .description code {
      font-size: 33px;
    }
  }
  @media only screen and (max-width: 1200px) {
    .header {
      font-size: 17px;
      font-weight: bold;
    }
    .description p {
      font-size: 13px;
    }
    .description code {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 640px) {
    .header {
      font-size: 17px;
      font-weight: bold;
    }
    .description p {
      font-size: 15px;
    }
    .description code {
      font-size: 15px;
    }
  }
`
export const DiagramWrapper = styled.div`
  grid-area: diagram;
  transform: scale(${props => (props.scale > 1.0 ? 1.0 : props.scale)});
  @media only screen and (min-width: 1200px) {
    transform: scale(${props => (props.scale > 2.3 ? 2.3 : props.scale)});
  }
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: Avenir Next, sans-serif;
  }
`
export const DiagramLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  @media only screen and (min-width: 1200px) {
    margin-top: 140px;
  }
`
export const ClientImageWrapper = styled.img`
  position: absolute;
  width: 40px;
  grid-area: image;
  bottom: ${props => (props.selected ? 34 : 29)}px;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const IngressGatewayImageWrapper = styled.img`
  position: absolute;
  grid-area: image;
  z-index: ${props => (props.selected ? 15 : 0)};
  bottom: ${props => (props.selected ? 123 : 118)}px;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ServiceImageWrapper = styled.img`
  position: absolute;
  z-index: ${props => (props.selected ? 14 : 11)};
  grid-area: image;
  bottom: ${props => (props.selected ? 142 : 137)}px;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const BackgroundImageWrapper = styled.img`
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const MicroservicesImageWrapper = styled.img`
  position: absolute;
  z-index: ${props => (props.selected ? 12 : 2)};
  bottom: ${props => (props.selected ? 197 : 192)}px;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const EndpointImageWrapper = styled.img`
  position: absolute;
  z-index: 12;
  bottom: ${props => (props.selected ? 197 : 192)}px;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const IngressImageWrapper = styled.img`
  position: absolute;
  bottom: ${props => (props.selected ? 75 : 70)}px;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
