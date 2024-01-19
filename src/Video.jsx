import * as THREE from "three";
import { forwardRef, useState, useEffect } from "react";

import { EffectComposer, GodRays, Bloom } from "@react-three/postprocessing";

export default function Video(props) {
  return (
    <>
      {/** The screen uses postpro godrays */}
      <Screen
        position={props.position}
        src={props.src}
        rotation={props.rotation}
      />
      {/** The sphere reflects the screen with a cube-cam */}

      {/** The floor uses drei/MeshReflectorMaterial */}
    </>
  );
}

const Emitter = forwardRef((props, forwardRef) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: props.src,
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh ref={forwardRef} {...props}>
      <planeGeometry args={[24, 12]} position={props.position} />
      <meshBasicMaterial>
        <videoTexture
          attach="map"
          args={[video]}
          colorSpace={THREE.SRGBColorSpace}
        />
      </meshBasicMaterial>
      <mesh scale={[24.05, 12.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </mesh>
  );
});

function Screen(props) {
  const [material, set] = useState();
  return (
    <>
      <Emitter
        ref={set}
        position={props.position}
        src={props.src}
        rotation={props.rotation}
      />
      {material && (
        <EffectComposer disableNormalPass multisampling={8}>
          <GodRays sun={material} exposure={0.34} decay={0.8} blur />
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={0.1}
          />
        </EffectComposer>
      )}
    </>
  );
}
