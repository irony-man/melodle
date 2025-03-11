"use client";
import React from "react";
import { Text } from "@react-three/drei";
import colors from "@/styles/variables";

const CustomText = (props) => {
    return (
        <Text
            font="/_next/static/media/altroned-trial.regular.a62de776.ttf"
            color={colors.foreground}
            fontSize={0.18}
            position={[0, -2, 0]}
            {...props}
        >
            {props.children}
        </Text>
    );
};

export default CustomText;
