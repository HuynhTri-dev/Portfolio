import type { FC } from "react";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface CharacterProps {
  modelPath: string;
}

const Character: FC<CharacterProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath) as any;

  const clonedGroupRef = useRef<THREE.Group>(null);
  const clonedMeshes: THREE.Object3D[] = [];

  scene.traverse((obj: any) => {
    if (obj.isMesh) {
      const cloned = obj.clone();
      cloned.position.copy(obj.position);
      cloned.rotation.copy(obj.rotation);
      cloned.scale.copy(obj.scale);
      clonedMeshes.push(cloned);
    }
  });

  useEffect(() => {
    if (clonedGroupRef.current) {
      clonedMeshes.forEach((mesh) => {
        clonedGroupRef.current!.add(mesh);
      });
    }
  }, [scene]);

  useFrame(({ mouse }) => {
    if (clonedGroupRef.current) {
      const targetY = THREE.MathUtils.clamp(mouse.x * 0.5, -0.3, 0.3);
      const targetX = THREE.MathUtils.clamp(-mouse.y * 0.3, -0.2, 0.2);

      clonedGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        clonedGroupRef.current.rotation.y,
        targetY,
        0.1
      );
      clonedGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        clonedGroupRef.current.rotation.x,
        targetX,
        0.1
      );
    }
  });

  return (
    <group
      rotation={[-0.4, 0, 0]}
      position={[0, -1, 0]}
      scale={[1.5, 1.5, 1.5]}
    >
      {/* Nếu cần, vẫn có thể render scene gốc */}
      {/* <primitive object={scene} /> */}

      {/* Hoặc chỉ render bản clone */}
      <group ref={clonedGroupRef} />
    </group>
  );
};

const Character3D: FC = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
        {/* Ánh sáng tối giản */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />

        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows adjustCamera>
            <Character modelPath="/models/avatar.glb" />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Character3D;
