import React from 'react';

// three.js
import { Canvas } from '@react-three/fiber';
import { Sky, PointerLockControls } from "@react-three/drei";

// 컴포넌트 모음
import Character from './components/Character';
import Ground from "./components/Ground";

import './css/App.css';

function App() {
  

  return (
    <div id='wrap'>
      <Canvas>
        <PointerLockControls />
        <Sky sunPosition={[100, 20, 100]} />
        <Ground />
        <Character />

      </Canvas>
    </div>
  );
}

export default App;