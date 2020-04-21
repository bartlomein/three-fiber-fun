import ReactDOM from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [randomNum, setCurrentRandomNum] = useState(0.5);

  const things = useSpring({
    scale: active ? [1.4, randomNum, 10] : [1, 2, 2],
    position: active
      ? [1.4, 1, -10]
      : [props.positionProp[0], randomNum, randomNum * props.positionProp[2]],
    rotation: active ? [2, 2, 2] : [2, 1, 1],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRandomNum(Math.random());
    }, props.interval);
    return () => clearInterval(interval);
  }, []);

  const bounceAround = () => {
    let random = Math.random();
  };

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.x += 0.1));

  console.log(mesh);
  return (
    <a.mesh
      ref={mesh}
      onClick={(e) => setActive(!active)}
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
