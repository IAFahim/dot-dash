import {Prism} from '@mantine/prism';
import {useEffect, useState} from "react";

export default function CodeSnip(props:any) {
    let waiting = false;
    const [code, setCode] = useState("https://github.com/IAFahim/ESP32")
    const getCode = async () => {
        waiting = true;
        fetch(props.url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.text();
            }).then(text => {
            setCode(text);
        })
    }

    useEffect(() => {
        if (!waiting) {
            getCode()
        }

    }, [])

    return <Prism withLineNumbers highlightLines={props.highlight} language="python">{code}</Prism>;
}