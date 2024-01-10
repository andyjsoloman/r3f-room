import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Room from "./Room";
import Lights from "./Lights";
import Model from "./Model";
import Self from "./Self";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <Physics debug>
        <mesh castShadow position={[0, 5, -20]}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>

        <RigidBody colliders="trimesh" type="fixed">
          <Model />
        </RigidBody>
        <Lights />
        <Self />
      </Physics>
    </>
  );
}
