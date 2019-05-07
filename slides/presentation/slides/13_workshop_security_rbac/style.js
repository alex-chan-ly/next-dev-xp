import styled from 'styled-components'
export const MarkDownWrapper = styled.div`
  p {
    text-align: left;
    font-size: 2.20rem;
  }
  code {
    text-align: left;
    font-size: 2.20rem;
  }
  ul {
    color: black;
    font-size: 2.20rem;
  }
`
export const TerminalLineWrapper = styled.div`
  font-size: ${props => props.size || 28}px;
`
export const IframeWrapper = styled.div`
  position: absolute;
  width: 90%;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 680px) {
    transform: scale(0.45);
    height: 100%;
    width: 100%;
    left: -23%;
    top: -11%;
  }
`
export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 680px) {
    height: 800px;
    width: 1200px;
  }
`