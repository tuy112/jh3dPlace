import React from 'react';
import { useBox } from '@react-three/cannon';

function Character() {
  const [ref] = useBox(() => ({
    mass: 1,               // 질량 적용 (중력에 영향을 받도록)
    position: [3, 2.5, 5], // 초기 위치 설정
  }));

  return (
    <group ref={ref}>
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