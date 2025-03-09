"use client";
import CustomGrid from "@/components/custom/CustomGrid";
import CustomSparkles from "@/components/custom/CustomSparkles";
import RenderModel from "@/components/RenderModel";
import colors from "@/styles/variables";
import { Html, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { Object3D } from "three";
import { easing } from "maath";

const Headphones = dynamic(() => import("@/components/models/Headphones"), {
    ssr: false,
    loading: () => <Text>Loading...</Text>,
});

export default function Hero() {
    return (
        <div className="w-full h-screen absolute z-10">
            {/* <Navigation /> */}
            <RenderModel model={<Headphones />}>
                <CustomGrid />
                <spotLight
                    position={[0, 6, 0]}
                    castShadow
                    color="#f1dffc"
                    intensity={100}
                    distance={8}
                    angle={Math.PI / 6}
                />
                <hemisphereLight
                    intensity={1}
                    color="purple"
                    groundColor="indigo"
                />
                <directionalLight
                    castShadow
                    intensity={0.2}
                    shadow-mapSize={[1024, 1024]}
                    shadow-bias={-0.0001}
                    position={[10, 10, -10]}
                />
                <CustomSparkles color={colors.secondary} />
            </RenderModel>
            <div className="absolute flex flex-col items-center text-center top-1/2 top-[80%] left-1/2 -translate-y-1/2 -translate-x-1/2">
                <h1 className="font-bold font-altroned text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-secondary">
                    melodle
                </h1>
                <p className="font-light text-foreground text-lg">
                    melody + wordle
                </p>
				
            </div>
        </div>
    );
}
