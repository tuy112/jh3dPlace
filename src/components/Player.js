import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

function Player() {
  const { camera } = useThree();
  const [jumping, setJumping] = useState(false);
  const [velocity, setVelocity] = useState(new THREE.Vector3(0, 0, 0));
  const [position, setPosition] = useState(new THREE.Vector3(5, 0, 5)); // 초기 리스폰 위치
  const speed = 0.1; // 이동 속도
  const jumpSpeed = 3; // 점프 속도
  const gravity = 0.01; // 중력

  const playerRef = React.useRef();

  // WASD 입력 처리
  useEffect(() => {
    const handleKeyDown = (event) => {
      const direction = new THREE.Vector3(); // 카메라 방향 벡터
      camera.getWorldDirection(direction); // 카메라의 현재 방향 얻기
      const forward = new THREE.Vector3(direction.x, 0, direction.z).normalize(); // 전진 방향
      const right = new THREE.Vector3().crossVectors(camera.up, forward).normalize(); // 오른쪽 방향

      switch (event.key) {
        case 'w':
          // 앞으로
          setVelocity((v) => new THREE.Vector3(forward.x * speed, v.y, forward.z * speed)); // 카메라 방향 기준 전진
          break;
        case 's':
          // 뒤로
          setVelocity((v) => new THREE.Vector3(-forward.x * speed, v.y, -forward.z * speed)); // 카메라 방향 기준 후진
          break;
        case 'a':
          // 왼쪽으로
          setVelocity((v) => new THREE.Vector3(right.x * speed, v.y, right.z * speed)); 
          break;
        case 'd':
          // 오른쪽으로
          setVelocity((v) => new THREE.Vector3(-right.x * speed, v.y, -right.z * speed));
          break;
        case ' ':
          if (!jumping) {
            setVelocity((v) => new THREE.Vector3(v.x, jumpSpeed, v.z));
            setJumping(true);
          }
          break;
        default:
          return;
      }
    };

    const handleKeyUp = (event) => {
      if (['w', 's', 'a', 'd'].includes(event.key)) {
        setVelocity((v) => new THREE.Vector3(0, v.y, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [jumping, camera]);

  // 매 프레임마다 실행
  useFrame(() => {
    // 중력 적용
    if (position.y > 0) {
      setVelocity((v) => new THREE.Vector3(v.x, v.y - gravity, v.z));
    } else {
      setJumping(false);
      setVelocity((v) => new THREE.Vector3(v.x, 0, v.z));
    }

    // 위치 업데이트
    const newPosition = new THREE.Vector3(
      position.x + velocity.x,
      position.y + velocity.y,
      position.z + velocity.z
    );

    setPosition(newPosition);

    // 플레이어 위치 갱신
    if (playerRef.current) {
      playerRef.current.position.copy(newPosition);
    }

    // 카메라가 플레이어를 따라가게 함
    camera.position.copy(newPosition.clone().add(new THREE.Vector3(0, 2, 5)));
  })

  return null;
}

export default Player;