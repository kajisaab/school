import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";

export default function ParticleBackground() {
  return (
    <Particles
      style={{ position: 'absolute' }}
      height="50vh"
      width="100%"
      params={ParticleConfig}
    ></Particles>
  );
}
