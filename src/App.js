import * as THREE from "three";
import logo from "./logo.svg";
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import { BackSide } from "three";
import { useSpring, animated } from "react-spring";

function App() {
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [boxHovered, setBoxhovered] = useState(false);
  const styles = useSpring({
    opacity: clicked ? 1 : 0,
  });

  const things = useSpring({
    config: { duration: 500, mass: 1, tension: 5000, friction: 1 },
    delay: clicked ? 1000 : 0,
    opacity: clicked ? 1 : 0,
  });

  return (
    <div
      className="App"
      style={boxHovered ? { cursor: "pointer" } : { cursor: "default" }}
    >
      <animated.div
        style={{
          position: "absolute",
          top: 700,
          left: 400,
          zIndex: 90,
          color: "black",
          ...things,
        }}
      >
        <h1 style={{ fontSize: 50 }}>PHIL IS A BITCH ASS BITCH</h1>
      </animated.div>

      <Canvas
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.setClearColor(new THREE.Color("#232526"));
        }}
      >
        >
        <spotLight
          intensity={0.3}
          position={[30, 30, -50]}
          angle={0.2}
          penumbra={1}
          castShadow
        />
        <ambientLight intensity={0.9} />
        <pointLight intensity={3.12} position={[0, 0, 0]} />
        <Box
          positionProp={[-1, 10, -13]}
          color="#86fde8"
          interval={750}
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
        <Box
          positionProp={[-10, 10, -14]}
          color="#B24592"
          interval={1500}
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
        <Box
          positionProp={[-15, -10, -30]}
          color="#20BDFF"
          interval={300}
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
        <Box
          positionProp={[10, 4, -25]}
          color="#F15F79"
          interval={500}
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
        <Box
          positionProp={[15, 15, -18]}
          color="#ffe259"
          interval={1000}
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
        <Box
          positionProp={[4, 5, -15]}
          color="#ee9ca7"
          interval={500}
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
        <sphereBufferGeometry
          args={[5, 10, 10]}
          attach="geometry"
          setClicked={setClicked}
          setBoxhovered={setBoxhovered}
        />
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
