import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
      'diagram'
      'label';
  grid-template-rows: 80% 250px;
  grid-row-gap: 10px; 
  @media only screen and (min-width: 1200px) {
      grid-template-rows: 80% 250px;
      margin-top: 50px;
  }
  @media only screen and (max-width: 640px) {
      grid-template-rows: 80% 250px;
  }
`
export const LabelWrapper = styled.div`
  grid-area: label;
  display: ${props => (props.selected ? `flex` : `none`)};
  transform: scale(${props => (props.scale > 1.0 ? 1.0 : props.scale)});
  @media only screen and (min-width: 640px) {
    margin-top: 30px; 
  } 
  @media only screen and (min-width: 1200px) {
    transform: scale(${props => (props.scale > 2.3 ? 2.3 : props.scale)});
    margin-top: 10px;
  }
  
  @media only screen and (max-width: 640px) {
    margin-top: 30px;
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
      font-size: 19px;
      font-weight: bold;
    }
    .description p {
      font-size: 17px;
    }
    .description code {
      font-size: 18px;
    }
    .description li {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 1200px) {
    .header {
      font-size: 15px;
      font-weight: bold;
    }
    .description p {
      font-size: 13px;
    }
    .description code {
      font-size: 13px;
    }
    .description li {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 640px) {
    .header {
      font-size: 11px;
      font-weight: bold;
    }
    .description p {
      font-size: 9px;
    }
    .description code {
      font-size: 10px;
    }
  }
`
export const DiagramWrapper = styled.div`
  grid-area: diagram;
  width: 100%;
  transform: scale(${props => props.scale > 1.5 ? 1.5 : props.scale});
  @media only screen and (min-width: 1200px) {
      transform: scale(${props => props.scale > 2.3 ? 2.3 : props.scale});
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
    margin-top: 100px;
  }
`
export const BackgroundImageWrapper = styled.img`
  position: absolute;
  bottom: -6%;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ControlPlaneImageWrapper = styled.img`
  position: absolute;
  bottom: 5%;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const PilotImageWrapper = styled.img`
  position: absolute;
  bottom: 65%;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const MixerImageWrapper = styled.img`
  position: absolute;
  bottom: 25%;
  grid-area: image;
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
  bottom: 135%;
  z-index: 10;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const EgressGatewayImageWrapper = styled.img`
  position: absolute;
  bottom: 135%;
  z-index: 10;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ServiceAImageWrapper = styled.img`
  position: absolute;
  bottom: 140%;
  z-index: 10;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ServiceBImageWrapper = styled.img`
  position: absolute;
  bottom: 140%;
  z-index: 10;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const CitadelImageWrapper = styled.img`
  position: absolute;
  bottom: 25%;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const DataPathImageWrapper = styled.img`
  position: absolute;
  bottom: 134%;
  z-index: 1;
  grid-area: image;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`