import ReactFlow, {Background, Edge, Node} from 'react-flow-renderer';
import {Card, Title, TextInput, Tooltip, Button} from "@mantine/core";
import {BrandGithub, Click, Send, TextDirectionLtr, User} from "tabler-icons-react";
import {useInputState} from '@mantine/hooks';
import {useState} from "react";

const defaultNodes = [
    {id: '1', data: {label: 'E'}, type: "input", position: {x: window.innerWidth / 2 - 75, y: 50}, style: {width: 50}},
    {id: '2', data: {label: 'T'}, position: {x: window.innerWidth / 2 - 300, y: 150}},
    {id: '3', data: {label: 'I'}, position: {x: window.innerWidth / 2 + 150, y: 150}},
    {id: '4', data: {label: 'A'}, position: {x: window.innerWidth / 2 - 300 - 85, y: 250}},
    {id: '5', data: {label: 'N'}, position: {x: window.innerWidth / 2 - 300 + 85, y: 250}},
] as Node[];

const defaultEdges = [
    {id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep'},
    {id: 'e1-3', source: '1', target: '3', type: 'smoothstep'},
    {id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true},
    {id: 'e2-5', source: '2', target: '5', type: 'smoothstep'}
] as Edge[];

const FlowGraph = () => {
    const savedUserName = localStorage.getItem("esp32UserName");
    const [esp32UserName, setEsp32UserName] = useState(savedUserName ? savedUserName : "IAFahim");
    const [data, setData] = useInputState('');

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
            <Card style={{width: "100vw", height: "80vh"}} p={0}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Tooltip label="Click graph send data to your esp32" position="right">
                        <Title p='md'>Morse Code Binary Tree<Click style={{paddingLeft: 10}}/></Title>
                    </Tooltip>
                    <TextInput label='ESP32 User Name' pt='xl' pr="md" icon={<User/>} value={esp32UserName}
                               onChange={handleUserName}/>
                </div>
                <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges}>
                    <Background/>
                </ReactFlow>
            </Card>
            <Card style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 100,
                paddingRight: 100
            }}>
                <TextInput icon={<TextDirectionLtr/>}
                           label="send string to be converted to morse code to esp32"
                           value={data}
                           onChange={setData}
                           style={{flex: 1}} pr="lg"/>
                <Button mt="xl" leftIcon={<Send/>} variant={"gradient"} onClick={handleSendingData}>Send</Button>
            </Card>
        </>
    );
};

export default FlowGraph;