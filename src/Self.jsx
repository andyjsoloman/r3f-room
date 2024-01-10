import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function Self() {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const jump = () => {
    body.current.applyImpulse({ x: 0, y: 40, z: 0 });
  };

  useEffect(() => {
    subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump();
      }
    );
  }, []);

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();

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

    body.current.applyImpulse(impulse);
  });

  return (
    <>
      <RigidBody ref={body} canSleep={false}>
        <mesh castShadow>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="coral" />
        </mesh>
      </RigidBody>
    </>
  );
}
