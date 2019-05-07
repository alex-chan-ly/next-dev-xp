// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from "spectacle";
import WorkshopHome from '../../components/WorkshopHome';
export default [
  <WorkshopHome
    title={`Chaos Injection`}
    description={`Adding faults into service interactions as a means to test service operation during "unpexpected" connectivity and latency scenarios`}
    difficulty={3}
    minutes={30}
    number={"10"} />,
]