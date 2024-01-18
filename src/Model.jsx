/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("./roomtextured2k.gltf");

  return (
    <primitive
      receiveShadow
      object={model.scene}
      scale={2}
      position={[0, -9, -20]}
    />
  );
}
