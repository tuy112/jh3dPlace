import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Character() {
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.position.set(...position);
  });

  // WASD 입력 처리
  useEffect(() => {
    const handleKeyDown = (event) => {
      const step = 0.5; // 이동 거리

      switch (event.key) {
        case 'w':
          setPosition((prev) => [prev[0], prev[1], prev[2] - step]);
          break;
        case 's':
          setPosition((prev) => [prev[0], prev[1], prev[2] + step]);
          break;
        case 'a':
          setPosition((prev) => [prev[0] - step, prev[1], prev[2]]);
          break;
        case 'd':
          setPosition((prev) => [prev[0] + step, prev[1], prev[2]]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <group ref={ref}>
      {/* 조명 설정 */}
      <ambientLight intensity={1} />
      <directionalLight position={[-1, 0, 1]} intensity={0.5} />

      {/* 머리 */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={0xffe0bd} />
      </mesh>

      {/* 몸통 */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 2, 32]} />
        <meshStandardMaterial color={0xa3b18a} />
      </mesh>

      {/* 팔 - 왼쪽 */}
      <mesh position={[-1.2, 1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 32]} />
        <meshStandardMaterial color={0xa3b18a} />
      </mesh>

      {/* 팔 - 오른쪽 */}
      <mesh position={[1.2, 1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 32]} />
        <meshStandardMaterial color={0xa3b18a} />
      </mesh>

      {/* 다리 - 왼쪽 */}
      <mesh position={[-0.5, -0.8, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1.8, 32]} />
        <meshStandardMaterial color={0xa3b18a} />
      </mesh>

      {/* 다리 - 오른쪽 */}
      <mesh position={[0.5, -0.8, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1.8, 32]} />
        <meshStandardMaterial color={0xa3b18a} />
      </mesh>
    </group>
  );
}

export default Character;