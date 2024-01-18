/* eslint-disable react/no-unknown-property */
import { PointerLockControls, Sky } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Lights from "./Lights";
import Model from "./Model";
import Self from "./Self";
import Room2 from "./Room2";
import Video from "./Video";

export default function Experience() {
  return (
    <>
      <Physics>
        <PointerLockControls />
        <mesh castShadow position={[0, 5, -20]}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>

        <RigidBody colliders="trimesh" type="fixed">
          <Model />
        </RigidBody>
        <Video />
        <Lights />

        <Self />
      </Physics>
    </>
  );
}
