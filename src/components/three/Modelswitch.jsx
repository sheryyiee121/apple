import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import Macbook14 from '../../Models/Macbook-14';
import Macbook16 from '../../Models/Macbook-16';
import useMacbookStore from '../../Store/store';

const ModelsSwitcher = ({ isMobile }) => {
    const { size, color, scale } = useMacbookStore();
    const groupRef = useRef();
    const { scene } = useThree();

    const mobileScale = scale - 0.02;
    const currentScale = isMobile ? mobileScale : scale;

    useEffect(() => {
        if (!groupRef.current) return;

        gsap.to(groupRef.current.scale, {
            x: currentScale,
            y: currentScale,
            z: currentScale,
            duration: 0.6,
            ease: 'power2.out',
        });
    }, [currentScale]);

    useEffect(() => {
        if (!groupRef.current) return;

        const targetColor = new THREE.Color(color);

        groupRef.current.traverse((child) => {
            if (child.isMesh && child.material) {
                const mat = child.material;
                if (mat.color && mat.name !== 'PaletteMaterial002' && mat.name !== 'PaletteMaterial003') {
                    gsap.to(mat.color, {
                        r: targetColor.r,
                        g: targetColor.g,
                        b: targetColor.b,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                }
            }
        });
    }, [color]);

    return (
        <group
            ref={groupRef}
            scale={currentScale}
            position={[0, isMobile ? -0.5 : 0, 0]}
        >
            {size === '14' ? <Macbook14 /> : <Macbook16 />}
        </group>
    );
};

export default ModelsSwitcher;
