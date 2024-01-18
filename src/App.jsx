import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { KeyboardControls } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Suspense fallback={<span>loading...</span>}>
        <Canvas>
          <Experience />
        </Canvas>
      </Suspense>
    </KeyboardControls>
  );
}

export default App;
