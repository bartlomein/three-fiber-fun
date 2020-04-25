import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [randomNum, setCurrentRandomNum] = useState(0.5);

  const things = useSpring({
    config: { duration: 1500, mass: 15, tension: 1080, friction: 12 },
    scale: active ? [5, 5, 5] : [2, 2, 2],
    color: hovered ? props.color : "white",
    position: active
      ? [0, 0, -10]
      : [
          props.positionProp[0] * randomNum * 1,
          props.positionProp[1],
          props.positionProp[2],
        ],
    rotation: active
      ? [props.positionProp[0] * randomNum, 2 * props.positionProp[1], 2]
      : [randomNum, randomNum, 1],
  });

  const clicked = (bool) => {
    props.setClicked(bool);
    setActive(bool);
  };

  const settingBoxHover = (bool) => {
    setHovered(bool);
    props.setBoxhovered(bool);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRandomNum(Math.random());
    }, props.interval);
    return () => clearInterval(interval);
  }, []);

  const bounceAround = () => {
    let random = Math.random();
  };

  const determineRotation = () => {
    if (active) {
      return (mesh.current.rotation.y = mesh.current.rotation.y += 0.01);
    } else {
      return (mesh.current.rotation.y = mesh.current.rotation.y += 1.5);
    }
  };

  useFrame(() => determineRotation());

  return (
    <a.mesh
      castShadow
      receiveShadow
      ref={mesh}
      onPointerOver={() => settingBoxHover(true)}
      onPointerOut={() => settingBoxHover(false)}
      onClick={(e) => clicked(!active)}
      scale={things.scale}
      position={things.position}
      rotation={things.rotation}
    >
      <dodecahedronBufferGeometry attach="geometry" />
      <meshPhongMaterial attach="material" color={props.color} />
      <Birds
        position={things.position}
        rotation={things.rotation}
        color={props.color}
      />
      <Birds
        position={things.position}
        rotation={things.rotation}
        color={props.color}
      />
      <Birds
        position={things.position}
        rotation={things.rotation}
        color={props.color}
      />
      <Birds
        position={things.position}
        rotation={things.rotation}
        color={props.color}
      />
    </a.mesh>
  );
};

const Explosion = (props) => {
  const random = Math.random();

  const things = useSpring({
    config: { duration: 1500, mass: 15, tension: 10, friction: 12 },

    position: [
      props.position[0] * random * 2,
      props.position[1],
      props.position[2],
    ],
    rotation: [props.position[0] * random, 2 * props.position[1], 2],
  });

  console.log(props);
  const group = useRef();
  // const [mixer] = useState(() => new THREE.AnimationMixer());

  return (
    <a.mesh
      castShadow
      receiveShadow
      ref={group}
      position={things.position}
      rotation={things.rotation}
    >
      <dodecahedronBufferGeometry attach="geometry" />
      <meshPhongMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

function Birds(props) {
  return new Array(2).fill().map((_, i) => {
    const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
    const y = -10 + Math.random() * 20;
    const z = -5 + Math.random() * 10;
    const bird = ["Stork", "Parrot", "Flamingo"][Math.round(Math.random() * 2)];
    let speed = bird === "Stork" ? 0.5 : bird === "Flamingo" ? 2 : 5;
    return (
      <Explosion
        key={i}
        position={[y, 1, 1]}
        rotation={props.rotation}
        speed={speed}
      />
    );
  });
}

export default Box;
