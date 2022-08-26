import {Prism} from '@mantine/prism';
import {Image, Title} from '@mantine/core';
import {useEffect, useState} from "react";
import CodeSnip from "../CodeSnip/CodeSnip";
export default function HowItWorks() {

    const added = { color: 'green', label: '+' };
    const mainPy={136:added, 137:added}

    return (
        <>
            <Title>How it works</Title>
            <Image src={""}></Image>
            <CodeSnip highlight={mainPy} url={"https://raw.githubusercontent.com/IAFahim/ESP32/master/main.py"}></CodeSnip>
        </>
    );
}