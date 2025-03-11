"use client";
import React, { useRef } from "react";
import { Grid } from "@react-three/drei";
import colors from "@/styles/variables";
import { useFrame } from "@react-three/fiber";

const CustomGrid = (props) => {
    const gridRef = useRef();

    useFrame(() => {
        gridRef.current.rotation.y += 0.0007;
    });

    return (
        <Grid
            ref={gridRef}
            args={[10, 10]}
            position={[0, -2.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            cellColor={colors.primary}
            sectionSize={1}
            sectionThickness={1}
            sectionColor={colors.primary}
            fadeDistance={10}
            infiniteGrid
            {...props}
        />
    );
};

export default CustomGrid;
