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
      font-size: 19px;
      font-weight: bold;
    }
    .description p {
      font-size: 17px;
    }
    .description code {
      font-size: 18px;
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
    margin-top: 100px;
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
export const APIRequestImageWrapper = styled.img`
  position: absolute;
  top: 26%;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const APIRequestHandlerImageWrapper = styled.img`
  position: absolute;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const MutatingAdmissionControllerImageWrapper = styled.img`
  position: absolute;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const MutatingWebhookImageWrapper = styled.img`
  position: absolute;
  top: 55.5%;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ObjectValidationImageWrapper = styled.img`
  position: absolute;
  left: 50%;
  z-index: 8;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ValidatingAdmissionControllerImageWrapper = styled.img`
  position: absolute;
  left: 50%;
  z-index: 9;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ValidatingWebhookImageWrapper = styled.img`
  position: absolute;
  top: 55%;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ETCDImageWrapper = styled.img`
  position: absolute;
  left: 50%;
  z-index: 10;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const AuthenticationImageWrapper = styled.img`
  position: absolute;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
