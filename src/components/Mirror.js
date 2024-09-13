import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Reflector } from 'three/examples/jsm/objects/Reflector';

const Mirror = () => {
  const { scene } = useThree();
  const mirrorRef = useRef();

  useEffect(() => {
    const geometry = new THREE.PlaneGeometry(8, 8);
    const reflector = new Reflector(geometry, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: 0x889999,
    });

    reflector.position.set(2, 0, -5); // 거울 위치

    mirrorRef.current = reflector;
    scene.add(reflector);

    return () => {
      scene.remove(reflector);
    };
  }, [scene]);

  return null;
};

export default Mirror;