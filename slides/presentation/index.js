import React from "react";
import {
  Deck,
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import { cloneElement } from 'react';
import feedback from './slides/00_feedback';
import HomePage from './slides/00_home';
import Intro from './slides/01_intro';
import EnvironmentSetup from './slides/02_environment_setup';
import KubernetesConcepts from './slides/03_kubernetes_concepts';
import IstioConcepts from './slides/05_istio_concepts';
import Workshop_01 from './slides/04_workshop_simple_deployment';
import Workshop_02 from './slides/06_workshop_mesh_deployment';
import Workshop_03 from './slides/07_workshop_traffic_control_basic';
import Workshop_04 from './slides/08_workshop_traffic_control_advanced';
import Workshop_05 from './slides/09_workshop_service_resiliency';
import Workshop_06 from './slides/10_workshop_security_authentication';
import Workshop_07 from './slides/11_workshop_security_end_user_authentication';
import Workshop_08 from './slides/12_workshop_mixer_policy';
import Workshop_09 from './slides/13_workshop_security_rbac';
import Workshop_10 from './slides/14_workshop_security_egress';
import Workshop_11 from './slides/15_workshop_chaos_injection';
import Workshop_12 from './slides/17_workshop_telemetry';
import Workshop_13 from './slides/16_workshop_security_access_control';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-vim';
import './prism-tomorrow-night.css';

require("normalize.css");

const TYPES = {
  theory: 'THEORY',
  workshops: 'WORKSHOPS'
}
const slides = [].concat(
  HomePage,
  Intro,
  KubernetesConcepts,
  Workshop_01,
  IstioConcepts
);
const full_deck = slides.map((slide, i) => cloneElement(slide, { key: i }));
const bootstrap_deck = [].concat(
  EnvironmentSetup,
  feedback(TYPES.theory, "bootstrap"),
  HomePage,
).map((slide, i) => cloneElement(slide, { key: i })); 
const introduction_deck = [].concat(
  Intro,
  KubernetesConcepts,
  feedback(TYPES.theory, "introduction"),
  HomePage,
).map((slide, i) => cloneElement(slide, { key: i }));
const istio_deck = [].concat(
  IstioConcepts,
  feedback(TYPES.theory, "istio"),
  HomePage,
).map((slide, i) => cloneElement(slide, { key: i })); 

const kubernetes_deck = [].concat(
  KubernetesConcepts,
  feedback(TYPES.theory, "kubernetes"),
  HomePage,
).map((slide, i) => cloneElement(slide, { key: i }));

const homepage_deck = [].concat(
  HomePage,
  feedback(TYPES.theory, "homepage"),
).map((slide, i) => cloneElement(slide, { key: i }));

const workshop1 = [
  Workshop_01.shift()
].concat(
  EnvironmentSetup,
  Workshop_01,
  feedback(TYPES.workshops, "workshop-01"),
  HomePage,
).map((slide, i) => cloneElement(slide, { key: i }));

const workshop2 = [
Workshop_02.shift()
].concat(
  EnvironmentSetup,
  Workshop_02,
  feedback(TYPES.workshops, "workshop-02"),
  HomePage,
).map((slide, i) => cloneElement(slide, { key: i }));

const workshop3 = [
  Workshop_03.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_03,
    feedback(TYPES.workshops, "workshop-03"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop4 = [
  Workshop_04.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_04,
    feedback(TYPES.workshops, "workshop-04"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop5 = [
  Workshop_05.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_05,
    feedback(TYPES.workshops, "workshop-05"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop6 = [
  Workshop_06.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_06,
    feedback(TYPES.workshops, "workshop-06"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop7 = [
  Workshop_07.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_07,
    feedback(TYPES.workshops, "workshop-07"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop8 = [
  Workshop_08.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_08,
    feedback(TYPES.workshops, "workshop-08"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop9 = [
  Workshop_09.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_09,
    feedback(TYPES.workshops, "workshop-09"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))


const workshop10 = [
  Workshop_10.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_10,
    feedback(TYPES.workshops, "workshop-10"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))
const workshop11 = [
  Workshop_11.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_11,
    feedback(TYPES.workshops, "workshop-11"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop12 = [
  Workshop_12.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_12,
    feedback(TYPES.workshops, "workshop-12"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))

const workshop13 = [
  Workshop_13.shift()
  ].concat(
    EnvironmentSetup,
    Workshop_13,
    feedback(TYPES.workshops, "workshop-13"),
    HomePage,
  ).map((slide, i) => cloneElement(slide, { key: i }))


const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE",
  codeBackground: '#2d2d2d',
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
      { full_deck } 
      </Deck>
    );
  }
}
export class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { homepage_deck }
    </Deck>)
  }
}

export class Bootstrap extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    console.log('mounting:bootstrap')
    console.log(this)
  }
  componentWillUnmount() {
    console.log('unmounting:bootstrap')
    console.log(this)
  }
  componentWillUpdate(prevProps, prevSate) {
    console.log('componentUpdating')
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { bootstrap_deck }
    </Deck>)
  }
}
export class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('intro:mounting:')
    console.log(this)
  }
  componentWillUnmount() {
    console.log('intro:unmounting:')
    console.log(this)
  }
  componentWillUpdate(prevProps, prevSate) {
    console.log('intro:componentUpdating')
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { introduction_deck }
    </Deck>)
  }
}
export class Istio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { istio_deck }
    </Deck>)
  }
}

export class Kubernetes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { kubernetes_deck }
    </Deck>)
  }
}
export class Workshop1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop1 }
    </Deck>)
  }
}
export class Workshop2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop2 }
    </Deck>)
  }
}
export class Workshop3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop3 }
    </Deck>)
  }
}

export class Workshop4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop4 }
    </Deck>)
  }
}

export class Workshop5 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop5 }
    </Deck>)
  }
}

export class Workshop6 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop6 }
    </Deck>)
  }
}

export class Workshop7 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop7 }
    </Deck>)
  }
}

export class Workshop8 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop8 }
    </Deck>)
  }
}


export class Workshop9 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop9 }
    </Deck>)
  }
}


export class Workshop10 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop10 }
    </Deck>)
  }
}


export class Workshop11 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop11 }
    </Deck>)
  }
}

export class Workshop12 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop12 }
    </Deck>)
  }
}

export class Workshop13 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Deck transition={["zoom", "slide"]} transitionDuration={500} contentWidth={1500} maxWidth={1500} theme={theme}>
    { workshop13 }
    </Deck>)
  }
}


