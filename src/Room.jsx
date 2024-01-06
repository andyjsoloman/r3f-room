export default function Room() {
  return (
    <>
      <mesh
        receiveShadow
        position-y={-5}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="#FFB46B" />
      </mesh>
    </>
  );
}
