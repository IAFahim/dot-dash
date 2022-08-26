import {Prism} from '@mantine/prism';
import {Image, Title, Text, Container, Card} from '@mantine/core';
import {useEffect, useState} from "react";
import CodeSnip from "../CodeSnip/CodeSnip";
import {Steps} from '../Steps/Steps';
import {Heading} from "../Heading/Heading";

export default function Report() {

    const added = {color: 'green', label: '+'};
    const mainPy = {136: added, 137: added}

    return (
        <>
            <Heading/>
            <Container>
                <Steps text={"Report"} subtext={"How it works"}/>
                <Image alt={"diagram"} placeholder
                       src={"https://raw.githubusercontent.com/IAFahim/dot-dash/90c0775542e0a029d9481797130e4f2e40ed3cfd/screenShot/dot%20dash.svg"}></Image>
                <Steps text={"Data"} subtext={"Stores data in SupaBase"}/>
                <Text p={"md"} size={"xl"}>SupaBase Stores data with that you can queue with your ESP32 User ID</Text>
                <Image radius={"md"} src={require("./img.png")}></Image>
                <Steps text={"Code"} subtext={"MicroPython"}/>
                <Text size={"xl"}>First we boot up Micropython in EPS32. Just by changing few line of code below we can
                    run the project. Things you need to changes are </Text>
                <Prism withLineNumbers highlightLines={{1: added, 2: added}} language="python">{
                    `UserName = "IAFahim"    # Change this to your ESP32 User Name pick in website
wifi = connect(ssid='HP_LaserZet_2045',password='fahimfahim', times=15)    #Change ssid id with your wifi Name and password with your wifi password`}</Prism>
                <CodeSnip highlight={mainPy}
                          url={"https://raw.githubusercontent.com/IAFahim/ESP32/master/main.py"}></CodeSnip>
                <Steps text={"Video"} subtext={"Youtube"}/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NlQMzwaLn44"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <Text pb={"xl"} color={"dimmed"}>Happy Coding Future Generation</Text>
            </Container>
        </>
    );
}