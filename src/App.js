import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import { BackSide } from "three";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[1, 1, 1]} />
        <ambientLight intensity={0.9} />
        <pointLight intensity={1.12} position={[0, 0, 0]} />
        {/* <Box position={[0, 0, -33]} /> */}
        <Box positionProp={[4, 1, -63]} />

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
