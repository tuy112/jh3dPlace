import React from 'react';
import { usePlane } from '@react-three/cannon';
import { PlaneGeometry, MeshStandardMaterial} from 'three';

function Ground() {
    // 물리적 바닥 설정
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],  // 바닥을 수평으로 회전
        position: [0, -5, 0],            // 바닥 위치 설정
      }));

    const geometry = new PlaneGeometry(500, 500);
    const material = new MeshStandardMaterial({ color: 'gray' });

    return (
        <mesh 
            ref={ref}
            geometry={geometry} 
            material={material} 
            receiveShadow
        />
    );
}

export default Ground;