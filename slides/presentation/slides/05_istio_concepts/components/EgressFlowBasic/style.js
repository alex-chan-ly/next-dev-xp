import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'diagram label';
  margin-top: 20px;
  grid-column-gap: 10%;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 200px 1fr;
    grid-column-gap: 20%;
    height: 600px
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 200px 1fr;
    height: 400px;
    margin-top: -130px;
  }
`
export const LabelWrapper = styled.div`
  grid-area: label;
  display: ${props => (props.selected ? `flex` : `none`)};
  transform: scale(${props => (props.scale > 1.0 ? 1.0 : props.scale)});
  @media only screen and (min-width: 640px) {
    margin-top: 50px;
    font-size: 0.6rem !important;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 0px;
    transform: scale(${props => (props.scale > 2.3 ? 2.3 : props.scale)});
  }
  @media only screen and (max-width: 640px) {
  }
  flex-direction: column;
  position: relative;
  text-align: left;
  justify-content: flex-start;
  .description {
    font-size: 0.6rem !important;
  }
  .header {
    font-size: 25px;
    font-weight: bold;
  }
  .description p {
    font-size: 22px;
  }
  .description code {
    font-size: 22px;
    white-space: pre-wrap;
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
      white-space: pre-wrap;
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
      white-space: pre-wrap;
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
      white-space: pre-wrap;
    }
  }
`
export const DiagramWrapper = styled.div`
  grid-area: diagram;
  width: 100%;
  height: 400px;
  transform: scale(${props => (props.scale > 1.5 ? 1.5 : props.scale)});
  @media only screen and (min-width: 1200px) {
    transform: scale(${props => (props.scale > 2.3 ? 2.3 : props.scale)});
  }
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  p {
    font-family: Avenir Next, sans-serif;
    background: #2d2d2d;
  }
`
export const DiagramLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.6rem !important;
  pre {
    font-size: 0.70rem !important;
    background: #1e1c22 !important;
    color: #eae5ff !important;
  }
  @media only screen and (min-width: 1200px) {
    pre {
    font-size: 1.4rem !important;
    background: #1e1c22 !important;
    color: #eae5ff !important;
    }
  }
`
export const BackgroundImageWrapper = styled.img`
  position: absolute;
  top: 10%;
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
export const DestinationRuleOneImageWrapper = styled.img`
  grid-area: image;
  position: absolute;
  bottom: 12%;
  filter: ${props =>
    props.selected
      ? `drop-shadow(0 3px 2px rgb(85, 72, 132)) drop-shadow(0 2px 2px rgb(85, 72, 132))`
      : `none`};
  &:hover {
    filter: drop-shadow(0 3px 2px rgb(85, 72, 132))
      drop-shadow(0 2px 2px rgb(85, 72, 132));
  }
`
export const ServiceEntryOneImageWrapper = styled.img`
  position: absolute;
  bottom: 3%;
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
export const ExternalImageWrapper = styled.img`
  position: absolute;
  bottom: 78%;
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