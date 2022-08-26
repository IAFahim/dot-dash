import React from 'react';
import {MantineHeader} from "./Componet/MantineHeader/MantineHeader";
import FlowGraph from "./Componet/FlowGraph/FlowGraph";
import HowItWorks from "./Componet/HowItWorks/HowItWorks";
import {Card, Text} from "@mantine/core"

function App() {
    return (
        <>
            <div>
                <MantineHeader/>
                <FlowGraph/>
                <Text ml={"md"} color={"dimmed"}>Report Below <i>scroll down to view</i></Text>
            </div>

            <Card>
                <HowItWorks></HowItWorks>
            </Card>
        </>
    );
}

export default App;
