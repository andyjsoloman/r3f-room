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
        <Video position={[0, 1, -90.75]} src="clouds.mp4" />
        <Video
          position={[0, 1, 50.75]}
          src="darksea.mp4"
          rotation={[0, Math.PI, 0]}
        />
        <Video
          position={[70.75, 1, -20]}
          src="rainwindow.mp4"
          rotation={[0, -Math.PI / 2, 0]}
        />
        <Video
          position={[-70.75, 1, -20]}
          src="smokespiral.mp4"
          rotation={[0, Math.PI / 2, 0]}
        />
        w
        <Lights />
        <Self />
      </Physics>
    </>
  );
}
