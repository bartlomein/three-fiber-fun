import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const things = useSpring({
    scale: active ? [1.4, 1, 10] : [2, 1, 2],
    position: active ? [1.4, 1, -10] : [2, 1, -2],
    rotation: active ? [mesh.current.position.x + 4, 2, 2] : [1, 2, -1],
  });

  //   useFrame(() => (mesh.current.position.x = mesh.current.rotation.x += 0.01));

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
      <meshPhongMaterial attach="material" color={"red"} />
    </a.mesh>
  );
};
export default Box;
