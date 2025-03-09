"use client";
import React from "react";
import { Sparkles } from "@react-three/drei";

const CustomSparkles = (props) => {

    return (
        <Sparkles
            count={200}
            scale={[20, 20, 10]}
            size={1.5}
            speed={2}
            {...props}
        />
    );
};

export default CustomSparkles;
