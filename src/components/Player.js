import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

function Player() {
  const ref = useRef();
  const [playerRef, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
    args: [1, 1, 1],
    friction: 0.1, // 마찰 조정
    restitution: 0.5 // 충돌 후 반발력 조정
  }));

  const { camera } = useThree();

  // WASD 입력 처리
  useEffect(() => {
    const handleKeyDown = (event) => {
      const step = 8; // 이속
      const direction = new THREE.Vector3();

      switch (event.key) {
        case 'w':
          direction.z -= step;
          break;
        case 's':
          direction.z += step;
          break;
        case 'a':
          direction.x -= step;
          break;
        case 'd':
          direction.x += step;
          break;
        default:
          return;
      }

      if (direction.length() > 0) {
        api.velocity.set(direction.x, 0, direction.z); // 방향 벡터로 속도 설정
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [api]);

  useFrame(() => {
    // 플레이어 위치 = 카메라 위치
    playerRef.current.position.copy(camera.position);
    playerRef.current.rotation.copy(camera.rotation);
  });

  return (
    <group ref={ref}>
      <mesh ref={playerRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
}

export default Player;