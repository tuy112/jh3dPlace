import React from 'react';
import { PlaneGeometry, MeshStandardMaterial} from 'three';

function Ground() {
    const geometry = new PlaneGeometry(500, 500);
    const material = new MeshStandardMaterial({ color: 'gray' });

    return (
        <mesh 
            position={[0, -5, 0]} 
            rotation-x={-Math.PI / 2} 
            geometry={geometry} 
            material={material} 
        />
    );
}

export default Ground;