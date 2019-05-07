import { cloneElement } from 'react';
import HomePage from '../components/HomePage';
import Intro from './01_intro';
import KubernetesConcepts from './03_kubernetes_concepts';
import LabSimpleDeployment from './04_lab_simple_deployment';
import IstioConcepts from './05_istio_concepts';

const slides = [].concat(
  HomePage,
  Intro,
  KubernetesConcepts,
  LabSimpleDeployment,
  IstioConcepts
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));