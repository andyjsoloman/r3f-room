import { OrbitControls } from "@react-three/drei";

import Room from "./Room";
import Lights from "./Lights";
import Model from "./Model";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh position={[0, 5, -20]}>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
      <Model />
      <Lights />
    </>
  );
}
