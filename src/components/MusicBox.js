import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function MusicBox() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const boxRef = useRef();

  useEffect(() => {
    const newAudio = new Audio('/LM904.mp3'); // 음악 파일 경로
    newAudio.loop = true; // 반복 재생
    setAudio(newAudio);

    return () => {
      newAudio.pause(); // 컴포넌트 언마운트 시 음악 정지
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01; // 회전 애니메이션 추가
    }
  });

  return (
    <mesh ref={boxRef} position={[3, 5, 0]} onClick={toggleMusic}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isPlaying ? 'orange' : 'brown'} />
    </mesh>
  );
}

export default MusicBox;