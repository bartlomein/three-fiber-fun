import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [randomNum, setCurrentRandomNum] = useState(0.5);

  const things = useSpring({
    config: { duration: 1500, mass: 1, tension: 180, friction: 12 },
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
      ? [props.positionProp[0], 2 * props.positionProp[1], 2]
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

  //   useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.1));

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
      <boxGeometry attach="geometry" args={[3, 1, -2]} />
      <meshPhongMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};
export default Box;
