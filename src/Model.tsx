import { Suspense, useEffect, useState } from 'react'
import { Html, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'

function Model() {
    const Cat = () => {
        const [selectedAnimation, setSelectedAnimation] = useState('Wait')
        const cat = useGLTF('/Cat.glb')
        const animations = useAnimations(cat.animations, cat.scene)

        useEffect(() =>
        {
            const action = animations.actions[selectedAnimation]
            action?.reset().fadeIn(0.5).play()
            return () => {
                action?.fadeOut(0.5)
            }
        }, [ selectedAnimation ])

        return (
            <>
                <primitive
                    object={ cat.scene } 
                    scale={ 0.4 }
                    position={ [ -0.25, -0.75, 0 ] }
                />
                <Html
                    position={ [ 1, 1.25, 0] }
                >
                    <div className="select-wrapper">
                        <select 
                            value={selectedAnimation}
                            onChange={e => setSelectedAnimation(e.target.value)}
                        >
                            <option value="Wait">Wait</option>
                            <option value="Walk">Walk</option>
                            <option value="Run">Run</option>
                        </select>
                    </div>
                </Html>
            </>
        )
    }

    return (
        <>
            <directionalLight 
                position={ [ 1, 1, 2 ] } 
                intensity={ 6 } 
            />
            <ambientLight /> 
            <OrbitControls />
            <color args={ [ 'ghostwhite' ] } attach="background" />
            <Suspense>
                <Cat />
            </Suspense>
        </>
    )
}

export default Model