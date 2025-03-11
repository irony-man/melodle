"use client";
import CustomGrid from "@/components/custom/CustomGrid";
import CustomSparkles from "@/components/custom/CustomSparkles";
import colors from "@/styles/variables";
import { Html, Loader, PresentationControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import CustomText from "@/components/custom/CustomText";
import Button from "../custom/Button";
import useScreenSize from "../hooks/useScreenSize";

const Headphones = dynamic(() => import("@/components/models/Headphones"), {
    ssr: false,
    loading: () => <Text fontSize={0.5}>Loading...</Text>,
});

export default function Hero() {
    const size = useScreenSize();
    const fontSize = size < 768 ? 0.6 : 0.75;
    
    return (
        <div className="w-full h-screen z-10">
            {/* <Navigation /> */}

            <Canvas dpr={[1, 2]} gl={{ antialias: true }} shadows>
                <PresentationControls
                    snap
                    global
                    zoom={0.8}
                    polar={[0, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <Suspense fallback={null}>
                        <Headphones />
                    </Suspense>
                    {/* <div className="absolute flex flex-col items-center text-center top-1/2 top-[80%] left-1/2 -translate-y-1/2 -translate-x-1/2"> */}
                    {/* <Text fontSize={0.5}>Loading...</Text> */}
                    <CustomText
                        position={[0, -1.2, 0]}
                        fontSize={fontSize}
                        color={colors.primary}
                    >
                        melodle
                    </CustomText>
                    <CustomText position={[0, -1.8, 0]}>
                        melody + wordle
                    </CustomText>
                </PresentationControls>

                <Loader />
                <CustomGrid />
                <directionalLight
                    intensity={60}
                    color={colors.background}
                    position={[0, 0, 5]}
                />
                <directionalLight
                    castShadow
                    intensity={0.2}
                    shadow-mapSize={[1024, 1024]}
                    shadow-bias={-0.0001}
                    position={[10, 10, -10]}
                />
                <CustomSparkles color={colors.foreground} />
                <Html center position={[0, -3, 0]}>
                    <Button className="w-48">Get Started</Button>
                </Html>
            </Canvas>
        </div>
    );
}
