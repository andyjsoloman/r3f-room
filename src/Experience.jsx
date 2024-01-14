/* eslint-disable react/no-unknown-property */
import { PointerLockControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Lights from "./Lights";
import Model from "./Model";
import Self from "./Self";

export default function Experience() {
  return (
    <>
      <Physics debug>
        <PointerLockControls />
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
