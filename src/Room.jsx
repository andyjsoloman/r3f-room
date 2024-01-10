/* eslint-disable react/no-unknown-property */
export default function Room() {
  return (
    <>
      <mesh
        receiveShadow
        position-y={-5}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#FFB46B" />
      </mesh>
    </>
  );
}
