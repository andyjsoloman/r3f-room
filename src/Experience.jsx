import { OrbitControls } from "@react-three/drei";
import Room from "./Room";
import Lights from "./Lights";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
        <Room />
        <Lights />
      </mesh>
    </>
  );
}
