import ReactFlow, {Background, Edge, Node} from 'react-flow-renderer';
import {Card, Title, TextInput, Tooltip, Button, createStyles} from "@mantine/core";
import {Click, Send, TextDirectionLtr, User} from "tabler-icons-react";
import {useInputState} from '@mantine/hooks';
import {useState} from "react";
import Morse from "./Morse";

const useStyles = createStyles((theme) => ({
    title:{
        paddingLeft: 10,
    },

    textSend: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 100,
        paddingRight: 100,

        [theme.fn.smallerThan('sm')]: {
            paddingLeft:theme.spacing.md,
            paddingRight:theme.spacing.md
        }
    },
}));

const morse=new Morse();

const FlowGraph = () => {
    const {classes} = useStyles();
    const savedUserName = localStorage.getItem("esp32UserName");
    const [esp32UserName, setEsp32UserName] = useState(savedUserName ? savedUserName : "IAFahim");
    const [data, setData] = useInputState('');
    const [defaultNodes, setDefaultNodes] = useState(morse.defaultNodes);
    const [defaultEdges, setDefaultEdges] = useState(morse.defaultEdges);

    const handleUserName = async (e: any) => {
        setEsp32UserName(e.currentTarget.value);
        localStorage.setItem("esp32UserName", e.currentTarget.value)
    }

    const handleSendingData = async (e: any) => {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("POST", "https://api.jsonbin.io/v3/b/", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$UUUZJo5OXdy/4cF58.aqy.o3dR8I749yp2KVkFpzSK7OKe8GGFjFm");
        req.setRequestHeader("X-Bin-Name", `"${esp32UserName}"`);
        req.send(`{"${esp32UserName}":"${data}"}`);
    }

    return (
        <>
            <Card style={{width: "100vw", height: "70vh"}} p={0}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Tooltip label="Click graph send data to your esp32" position="right">
                        <Title p='md' className={classes.title}>Morse Code Binary Tree<Click/></Title>
                    </Tooltip>
                    <TextInput label='ESP32 User Name' pt='xl' pr="md" icon={<User/>} value={esp32UserName}
                               onChange={handleUserName}/>
                </div>
                <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} onNodeClick={(event, node) => {
                    console.log(event)
                    // @ts-ignore
                    // console.log(morseCode.mosre[node.data.label])
                }}>
                    <Background/>
                </ReactFlow>
            </Card>
            <Card className={classes.textSend}>
                <TextInput icon={<TextDirectionLtr/>}
                           value={data}
                           placeholder={'send string morse code to esp32'}
                           onChange={setData}
                           style={{flex: 1}} pr="lg"/>
                <Button leftIcon={<Send/>} variant={"gradient"} onClick={handleSendingData}>Send</Button>
            </Card>
        </>
    );
};

export default FlowGraph;