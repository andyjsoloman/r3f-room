/* eslint-disable react/no-unknown-property */
import { useRapier, RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function Self() {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const rapierWorld = world;

  const [smoothedCameraPosition] = useState(() => new THREE.Vector3());

  const { camera } = useThree();

  const jump = () => {
    const origin = body.current.translation();
    origin.y -= 1.01;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = rapierWorld.castRay(ray, 10, true);

    console.log(hit.toi);
    if (hit.toi < 2 && hit.toi > 0)
      body.current.applyImpulse({ x: 0, y: 40, z: 0 });

    //the castRay parameters do not seem to register the imported model as solid, so registers on the bottom of the floor when ball is touching ground, and top of floor when above ground. The different thicknesses of the floor (as in centre pool area) make it difficult to fine tune a hit.toi number to allow jumping. Either need to figure out why gltf is not registered as solid or make floor all same thickness
  };

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump();
      }
    );
    return () => {
      unsubscribeJump();
    };
  }, []);

  useFrame((state, delta) => {
    /**
     * Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    // Calculate camera direction vectors
    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);
    cameraDirection.y = 0;
    cameraDirection.normalize();

    const cameraSideVector = new THREE.Vector3();
    camera.getWorldDirection(cameraSideVector);
    cameraSideVector.y = 0;
    cameraSideVector.normalize();
    cameraSideVector.cross(camera.up);

    //Apply keyboard inputs to movement impulse value
    const impulse = { x: 0, y: 0, z: 0 };
    const impulseStrength = 100 * delta;
    if (forward) {
      impulse.z -= impulseStrength;
    }
    if (backward) {
      impulse.z += impulseStrength;
    }
    if (leftward) {
      impulse.x -= impulseStrength;
    }
    if (rightward) {
      impulse.x += impulseStrength;
    }

    // Align the impulse with the camera direction
    const alignedImpulse = new THREE.Vector3(impulse.x, impulse.y, impulse.z);
    alignedImpulse.applyEuler(camera.rotation);
    impulse.x = alignedImpulse.x;
    impulse.y = alignedImpulse.y;
    impulse.z = alignedImpulse.z;

    body.current.applyImpulse(impulse);

    /**
     * Camera
     */

    const bodyPosition = body.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.y += 2;

    smoothedCameraPosition.lerp(cameraPosition, 0.1);

    state.camera.position.copy(smoothedCameraPosition);
  });

  return (
    <>
      <RigidBody ref={body} canSleep={false}>
        <mesh castShadow>
          <sphereGeometry args={[1, 24]} />
          <meshStandardMaterial color="coral" />
        </mesh>
      </RigidBody>
    </>
  );
}
