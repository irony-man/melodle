"use client";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className, model }) => {
    return (
        <Canvas
            className={clsx("w-screen h-screen -z-10 relative", className)}
            dpr={[1, 2]}
            gl={{ antialias: true }}
            shadows
        >
            {children}
            <Suspense fallback={null}>{model}</Suspense>
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.2}
            />
        </Canvas>
    );
};

export default RenderModel;
