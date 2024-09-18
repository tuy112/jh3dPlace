import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

function Player() {
  const { camera } = useThree();
  const [jumping, setJumping] = useState(false);
  const speed = 5; // 이동 속도
  const jumpSpeed = 5; // 점프 속도
  const [velocity, setVelocity] = useState(new THREE.Vector3(0, 0, 0));

  // 플레이어 물리 박스 생성
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [5, 1, 5], // 초기 위치
    args: [1, 1, 1], // 플레이어 박스 크기
  }));

  // WASD 입력 처리
  useEffect(() => {
    const handleKeyDown = (event) => {
      const direction = new THREE.Vector3(); // 카메라 방향 벡터
      camera.getWorldDirection(direction);
      const forward = new THREE.Vector3(direction.x, 0, direction.z).normalize();
      const right = new THREE.Vector3().crossVectors(camera.up, forward).normalize();

      switch (event.key) {
        case 'w':
          api.velocity.set(forward.x * speed, velocity.y, forward.z * speed);
          break;
        case 's':
          api.velocity.set(-forward.x * speed, velocity.y, -forward.z * speed);
          break;
        case 'a':
          api.velocity.set(right.x * speed, velocity.y, right.z * speed);
          break;
        case 'd':
          api.velocity.set(-right.x * speed, velocity.y, -right.z * speed);
          break;
        case ' ':
          api.velocity.set(velocity.x, jumpSpeed, velocity.z);
          setJumping(true);
          break;
        default:
          return;
      }
    };

    const handleKeyUp = (event) => {
      if (['w', 's', 'a', 'd'].includes(event.key)) {
        api.velocity.set(0, velocity.y, 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [camera, api, velocity]);

  // 매 프레임마다 카메라가 플레이어를 따라가도록 함
  useFrame(() => {
    ref.current.getWorldPosition(camera.position);
    camera.position.y += 2; // 카메라 높이 조정
  });

  return <mesh ref={ref} />;
}

export default Player;