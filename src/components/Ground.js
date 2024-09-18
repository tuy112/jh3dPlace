import React, { useMemo } from 'react';
import { usePlane } from '@react-three/cannon';
import { PlaneGeometry, MeshStandardMaterial} from 'three';

function Ground() {
    // 땅 생성
    const [groundRef] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    }));

    // 바다 생성
    const [waterRef] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    // 땅 지형을 조작
    const groundGeometry = useMemo(() => {
        const geometry = new PlaneGeometry(500, 500, 50, 50); // 세그먼트를 추가하여 지형을 변형할 수 있게 함
        const vertices = geometry.attributes.position.array;

        for (let i = 0; i < vertices.length; i += 3) {
            const x = vertices[i];
            const z = vertices[i + 2];

            // 특정 범위의 x, z 좌표에 대해 y 축 값을 낮춰서 땅을 깎음
            if (x > -50 && x < 50 && z > -50 && z < 50) {
                vertices[i + 1] -= 5; // y 값을 조정해서 땅을 깎음
            }
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals(); // 변형 후 정점 법선을 재계산하여 빛 반사 효과를 자연스럽게 만듦

        return geometry;
    }, []);


    const groundMaterial = new MeshStandardMaterial({ color: 'gray' });

    const waterGeometry = new PlaneGeometry(100, 100); // 물을 깎인 부분에 맞게 설정
    const waterMaterial = new MeshStandardMaterial({
        color: 'blue',
        transparent: true,
        opacity: 0.6,
    });

    return (
        <>
            <mesh ref={groundRef} geometry={groundGeometry} material={groundMaterial} receiveShadow />
            <mesh ref={waterRef} geometry={waterGeometry} material={waterMaterial} position={[0, -0.5, 0]} />
        </>
    );
}

export default Ground;