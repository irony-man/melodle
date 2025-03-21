/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

"use client";
import React, { useRef } from "react";
import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { Color } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import colors from "@/styles/variables";
import { useSpring, a } from "@react-spring/three";
import useScreenSize from "../hooks/useScreenSize";

const Headphones = React.memo(function Headphones(props) {
    const { nodes, materials, scene } = useGLTF("/models/Headphones.glb");

    const size = useScreenSize();
    const scale = size < 768 ? 1.5 : 2.5;

    const [spring] = useSpring(
        () => ({
            from: { "position-y": 5 },
            to: { "position-y": 0.5 },
            config: { mass: 3, tension: 300 },
        }),
        []
    );

    return (
        <a.group
            dispose={null}
            scale={scale}
            {...spring}
            {...props}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1131988321.geometry}
                material={materials.mat10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group994663478.geometry}
                material={materials.mat11}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group873053749.geometry}
                material={materials.mat2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1128709646.geometry}
                material={materials.mat4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group2035190015.geometry}
                material={materials.mat5}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group560955369.geometry}
                material={materials.mat17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1926436797.geometry}
                material={materials.mat8}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1928914759.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1557079381.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1323850976.geometry}
                material={materials.mat15}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group772929270.geometry}
                material={materials.mat15}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1183395826.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1627936991.geometry}
                material={materials.mat17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.group1332230162.geometry}
                material={materials.mat17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440.geometry}
                material={materials.mat17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440_1.geometry}
                material={materials.mat23}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440_2.geometry}
                material={materials.mat4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440_3.geometry}
                material={materials.mat21}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440_4.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440_5.geometry}
                material={materials.mat15}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1285479440_6.geometry}
                material={materials.mat5}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh255148174.geometry}
                material={materials.mat17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh255148174_1.geometry}
                material={materials.mat8}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh255148174_2.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh255148174_3.geometry}
                material={materials.mat15}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh255148174_4.geometry}
                material={materials.mat23}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260.geometry}
                material={materials.mat23}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_1.geometry}
                material={materials.mat2}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_2.geometry}
                material={materials.mat11}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_3.geometry}
                material={materials.mat10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_4.geometry}
                material={materials.mat17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_5.geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_6.geometry}
                material={materials.mat21}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh1006182260_7.geometry}
                material={materials.mat15}
            />
        </a.group>
    );
});

export default Headphones;

useGLTF.preload("/models/Headphones.glb");
