import type { FC } from "react";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import * as THREE from "three";

interface VisitCardProps {
  modelPath: string;
}

const VisitCard: FC<VisitCardProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const { raycaster, camera, gl } = useThree();
  const buttonRef = useRef<THREE.Object3D | null>(null);
  const originalZRef = useRef<number>(0);
  const isAnimatingRef = useRef<boolean>(false);

  useEffect(() => {
    const buttonDev = scene.getObjectByName("Button_Dev");
    if (!buttonDev) {
      console.warn("❗ Không tìm thấy mesh tên 'Button_Dev'");
      return;
    }

    buttonRef.current = buttonDev;
    originalZRef.current = buttonDev.position.z;

    // Tạo bounding box lớn hơn để dễ click
    const box = new THREE.Box3().setFromObject(buttonDev);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Tạo sphere invisible để bắt click dễ hơn
    const clickSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.03), // Radius lớn hơn
      new THREE.MeshBasicMaterial({
        visible: false,
        transparent: true,
        opacity: 0,
      })
    );
    clickSphere.position.copy(buttonDev.position);
    clickSphere.name = "ClickSphere";
    scene.add(clickSphere);

    const pointer = new THREE.Vector2();

    const handlePointerMove = (event: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(
        [clickSphere, buttonDev],
        true
      );

      if (intersects.length > 0) {
        gl.domElement.style.cursor = "pointer";
      } else {
        gl.domElement.style.cursor = "default";
      }
    };

    const animateButton = () => {
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      const startZ = buttonDev.position.z;
      const targetZ = originalZRef.current - 0.01;
      let progress = 0;
      const duration = 200; // 200ms

      const animate = () => {
        progress += 16; // ~60fps
        const t = Math.min(progress / duration, 1);

        // Ease in-out
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        buttonDev.position.z = startZ + (targetZ - startZ) * eased;

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          // Animation hoàn thành, quay về vị trí ban đầu
          setTimeout(() => {
            buttonDev.position.z = originalZRef.current;
            isAnimatingRef.current = false;
            // Chuyển trang
            window.location.href = "/portfolio-dev";
          }, 100);
        }
      };

      animate();
    };

    const handleClick = (event: MouseEvent) => {
      if (isAnimatingRef.current) return;

      const rect = gl.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(
        [clickSphere, buttonDev],
        true
      );

      if (intersects.length > 0) {
        animateButton();
      }
    };

    // Thêm event listeners
    gl.domElement.addEventListener("mousemove", handlePointerMove);
    gl.domElement.addEventListener("click", handleClick);

    return () => {
      gl.domElement.removeEventListener("mousemove", handlePointerMove);
      gl.domElement.removeEventListener("click", handleClick);
      scene.remove(clickSphere);
    };
  }, [scene, raycaster, camera, gl]);

  return (
    <group rotation={[0, -0.5, 0]} scale={20}>
      <primitive object={scene} />
    </group>
  );
};

const VisitCard3D: FC = () => {
  return (
    <div className="w-full h-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 1.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={0.5} />

        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows adjustCamera>
            <VisitCard modelPath="/models/card.glb" />
          </Stage>
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default VisitCard3D;
