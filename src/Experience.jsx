import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
