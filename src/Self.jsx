import { RigidBody } from "@react-three/rapier";

export default function Self() {
  return (
    <>
      <RigidBody canSleep={false}>
        <mesh castShadow>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="coral" />
        </mesh>
      </RigidBody>
    </>
  );
}
