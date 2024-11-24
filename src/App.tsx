import { Canvas } from '@react-three/fiber'
import Model from './Model.tsx'

function App() {
  return (
    <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 100,
      position: [ -3.5, 0, 5 ],
    }}
    >
      <Model />
    </Canvas>
  )
}

export default App
