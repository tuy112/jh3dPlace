import React from 'react';

// three.js
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon'; // 물리엔진
import { Sky, PointerLockControls } from "@react-three/drei";

// 컴포넌트 모음
import Character from './components/Character';
import Visitor from './components/Visitor';
import Ground from "./components/Ground";
import Mirror from './components/Mirror';
import Player from './components/Player';

import './css/App.css';

function App() {
  
  return (
    <div id='wrap'>
      <Canvas>
        <Physics>
          <PointerLockControls />
          <Sky sunPosition={[100, 20, 100]} />
          <Ground />
          <Character />
          <Visitor />
          <Player />
          <Mirror />

        </Physics>
      </Canvas>
    </div>
  );
}

export default App;