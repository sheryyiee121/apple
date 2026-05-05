import useMacbookStore from "../Store/store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import StudioLights from "../Models/StudioLights";
import ModelsSwitcher from "./three/Modelswitch";

const ProductViewer = () => {
    const { color, size, setColor, setSize, setScale } = useMacbookStore();
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const handleSizeChange = (newSize) => {
        setSize(newSize);
        setScale(newSize === '14' ? 0.06 : 0.08);
    };

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls">
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className="size-control">
                        <div
                            onClick={() => handleSizeChange('14')}
                            className={clsx(size === '14' ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => handleSizeChange('16')}
                            className={clsx(size === '16' ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 6], fov: 45, near: 0.1, far: 100 }}>
                <StudioLights />
                <ModelsSwitcher isMobile={isMobile} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </section>
    );
};

export default ProductViewer;
