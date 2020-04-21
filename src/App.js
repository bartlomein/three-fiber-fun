import React from "react";
import * as THREE from "three";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import { BackSide } from "three";

function App() {
  return (
    <div className="App">
      <Canvas
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.setClearColor(new THREE.Color("#232526"));
        }}
      >
        >
        <ambientLight intensity={0.9} />
        <pointLight intensity={3.12} position={[0, 0, 0]} />
        <Box positionProp={[-1, 10, -33]} color="#86fde8" interval={750} />
        <Box positionProp={[-4, 5, -2]} color="#B24592" interval={1500} />
        <Box positionProp={[1, 10, -15]} color="#20BDFF" interval={300} />
        <Box positionProp={[2, 4, -5]} color="#F15F79" interval={500} />
        <Box positionProp={[4, 15, -3]} color="#ffe259" interval={1000} />
        <Box positionProp={[4, 8, -13]} color="#ee9ca7" interval={500} />
        <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
        <meshStandardMaterial
          color={0xd24b}
          attach="material"
          side={BackSide}
          metalness={0.4}
        />
      </Canvas>
    </div>
  );
}

export default App;
