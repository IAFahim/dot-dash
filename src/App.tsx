import React from 'react';
import {MantineHeader} from "./Componet/MantineHeader/MantineHeader";
import FlowGraph from "./Componet/FlowGraph/FlowGraph";
import Report from "./Componet/Report/Report";
import {Card, Text} from "@mantine/core"

function App() {
    return (
        <>
            <div>
                <MantineHeader/>
                <FlowGraph/>
                <Text ml={"md"} color={"dimmed"}>Report Below <i>scroll down to view</i></Text>
            </div>

            <div>
                <Report></Report>
            </div>
        </>
    );
}

export default App;
