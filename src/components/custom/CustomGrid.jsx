"use client";
import React from "react";
import { Grid } from "@react-three/drei";
import colors from "@/styles/variables";

const InfiniteGrid = (props) => {
    return (
        <Grid
            args={[10, 10]}
            position={[0, -2.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            cellColor={colors.secondary}
            sectionSize={1}
            sectionThickness={1}
            sectionColor={colors.secondary}
            fadeDistance={10}
            infiniteGrid
            {...props}
        />
    );
};

export default InfiniteGrid;
