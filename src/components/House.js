import React from 'react';

function House() {
  return (
    <group position={[0, 0, -50]}> {/* 전체 집을 멀리 이동 */}
      {/* 1층 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[20, 5, 20]} /> {/* 높이 크게 조정 */}
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* 벽 1 */}
      <mesh position={[0, 2.5, -10]}>
        <boxGeometry args={[20, 5, 1]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 벽 2 */}
      <mesh position={[0, 2.5, 10]}>
        <boxGeometry args={[20, 5, 1]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 벽 3 */}
      <mesh position={[-10, 2.5, 0]}>
        <boxGeometry args={[1, 5, 20]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 벽 4 */}
      <mesh position={[10, 2.5, 0]}>
        <boxGeometry args={[1, 5, 20]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 2층 */}
      <mesh position={[0, 7.5, 0]}> {/* 높이 조정 */}
        <boxGeometry args={[20, 5, 20]} /> {/* 높이 크게 조정 */}
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* 벽 5 */}
      <mesh position={[0, 9, -10]}>
        <boxGeometry args={[20, 5, 1]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 벽 6 */}
      <mesh position={[0, 9, 10]}>
        <boxGeometry args={[20, 5, 1]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 벽 7 */}
      <mesh position={[-10, 9, 0]}>
        <boxGeometry args={[1, 5, 20]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 벽 8 */}
      <mesh position={[10, 9, 0]}>
        <boxGeometry args={[1, 5, 20]} /> {/* 벽 높이 조정 */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 부엌 */}
      <mesh position={[-8, 0, -8]}> {/* 위치 조정 */}
        <boxGeometry args={[6, 5, 6]} /> {/* 넓게 만들기, 높이 조정 */}
        <meshStandardMaterial color="white" />
      </mesh>

      {/* 거실 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 5, 10]} /> {/* 넓게 만들기, 높이 조정 */}
        <meshStandardMaterial color="lightblue" />
      </mesh>

      {/* 화장실 */}
      <mesh position={[8, 0, -8]}> {/* 위치 조정 */}
        <boxGeometry args={[4, 5, 4]} /> {/* 넓게 만들기, 높이 조정 */}
        <meshStandardMaterial color="lightgreen" />
      </mesh>

      {/* 방 1 */}
      <mesh position={[-8, 7.5, -8]}> {/* 위치 조정 */}
        <boxGeometry args={[6, 5, 6]} /> {/* 넓게 만들기, 높이 조정 */}
        <meshStandardMaterial color="lightcoral" />
      </mesh>

      {/* 방 2 */}
      <mesh position={[8, 7.5, -8]}> {/* 위치 조정 */}
        <boxGeometry args={[6, 5, 6]} /> {/* 넓게 만들기, 높이 조정 */}
        <meshStandardMaterial color="lightpink" />
      </mesh>

      {/* 문 */}
      {/* <Door position={[0, 0, -15]} /> */} {/* 문 위치 조정 */}
    </group>
  );
}

export default House;