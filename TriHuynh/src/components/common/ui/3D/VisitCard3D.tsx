import type { FC } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

interface VisitCardProps {
  modelPath: string; // đường dẫn đến model GLB
}
const VisitCard: FC<VisitCardProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <group rotation={[0, -2, 0]} scale={[10, 10, 10]}>
      <primitive object={scene} />
    </group>
  );
};

const VisitCard3D: FC = () => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={0.5} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows>
            <VisitCard modelPath="/models/card.glb" />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default VisitCard3D;
